import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { checkUserLimit, incrementUserUsage } from '@/lib/limits'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

// ── CORS (widget calls from any landing page origin) ─────────────────────────
const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS })
}

// ── In-memory rate limiter ───────────────────────────────────────────────────
// Per-process (resets on cold start). Replace with Upstash/Redis for production.
const rateLimitMap = new Map<string, { count: number; bucket: number }>()
const RATE_LIMIT      = 20          // messages per IP
const RATE_WINDOW_MS  = 3_600_000   // 1 hour window

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const bucket = Math.floor(Date.now() / RATE_WINDOW_MS)
  const key    = `${ip}:${bucket}`

  // Prune stale buckets to avoid unbounded memory growth
  if (rateLimitMap.size > 5_000) {
    for (const [k, v] of rateLimitMap) {
      if (v.bucket < bucket) rateLimitMap.delete(k)
    }
  }

  const entry = rateLimitMap.get(key) ?? { count: 0, bucket }
  entry.count++
  rateLimitMap.set(key, entry)

  return {
    allowed:   entry.count <= RATE_LIMIT,
    remaining: Math.max(0, RATE_LIMIT - entry.count),
  }
}

// ── Extract readable content from landing HTML ──────────────────────────────
function extractLandingContent(html: string): string {
  if (!html) return ''
  // Remove scripts, styles, SVGs
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
  // Extract headings with labels
  const h1s = [...text.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean)
  const h2s = [...text.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean)
  const h3s = [...text.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean)
  // Extract paragraphs
  const ps = [...text.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(s => s.length > 20)
  // Extract list items
  const lis = [...text.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean)

  const parts: string[] = []
  if (h1s.length) parts.push('Títulos principales: ' + h1s.join(' | '))
  if (h2s.length) parts.push('Secciones: ' + h2s.join(' | '))
  if (h3s.length) parts.push('Subsecciones: ' + h3s.join(' | '))
  if (ps.length)  parts.push('Contenido clave:\n' + ps.slice(0, 15).join('\n'))
  if (lis.length) parts.push('Puntos destacados:\n- ' + lis.slice(0, 20).join('\n- '))

  // Limit to ~2500 chars to avoid bloating the system prompt
  const joined = parts.join('\n\n')
  return joined.length > 2500 ? joined.slice(0, 2500) + '...' : joined
}

// ── System prompt builder ────────────────────────────────────────────────────
function buildSystemPrompt(
  bizName:    string,
  surveyData: Record<string, unknown>,
  landingContent?: string,
  knowledgeBase?: string[],
): string {
  const sector   = (surveyData.sector   as string | undefined) || ''
  const goal     = (surveyData.goal     as string | undefined) || ''
  const tone     = (surveyData.tone     as string | undefined) || 'profesional'
  const language = (surveyData.language as string | undefined) || 'es'
  const phone    = (surveyData.phone    as string | undefined) || ''
  const email    = (surveyData.email    as string | undefined) || ''
  const address  = (surveyData.address  as string | undefined) || ''
  const cta      = (surveyData.cta      as string | undefined) || ''
  const services = (surveyData.services as string | undefined) || ''
  const years    = (surveyData.years    as string | number | undefined)
  const clients  = (surveyData.clients  as string | number | undefined)

  const langLabel = language === 'es' ? 'español'
    : language === 'en' ? 'inglés'
    : language

  const lines: string[] = [
    `Eres el asistente virtual de "${bizName}"${sector ? ` — ${sector}` : ''}.`,
    `Tu misión: ayudar a los visitantes de la web a resolver sus dudas y guiarlos hacia convertirse en clientes.`,
    '',
  ]

  if (goal)     lines.push(`Objetivo del negocio: ${goal}.`)
  if (cta)      lines.push(`Llamada a la acción principal: "${cta}".`)
  if (services) lines.push(`Servicios/productos principales: ${services}.`)
  if (years)    lines.push(`Años de experiencia: ${years}.`)
  if (clients)  lines.push(`Clientes atendidos: ${clients}.`)

  lines.push('', `Tono de comunicación: ${tone}.`)
  lines.push(`Idioma de respuesta: ${langLabel}. Responde SIEMPRE en ${langLabel}.`)

  const contact: string[] = []
  if (phone)   contact.push(`Teléfono: ${phone}`)
  if (email)   contact.push(`Email: ${email}`)
  if (address) contact.push(`Dirección: ${address}`)
  if (contact.length > 0) {
    lines.push('', 'Información de contacto del negocio:', ...contact)
  }

  lines.push(
    '',
    'Reglas estrictas:',
    '- Respuestas breves y directas (máximo 3 frases).',
    '- Si no conoces un dato específico del negocio, ofrece la información de contacto.',
    '- No inventes precios, fechas, servicios ni datos que no estén en este contexto.',
    '- Nunca reveles que eres una IA, que usas Claude, o que estás construido con Anthropic.',
    '- Nunca respondas preguntas ajenas al negocio (política, noticias, código, etc.).',
  )

  if (landingContent) {
    lines.push(
      '',
      'Contenido real publicado en la web del negocio (usa esta información para responder con precisión):',
      landingContent,
    )
  }

  if (knowledgeBase && knowledgeBase.length > 0) {
    lines.push(
      '',
      'Información adicional proporcionada por el negocio (prioriza estos datos sobre los genéricos):',
      ...knowledgeBase,
    )
  }

  return lines.join('\n')
}

// ── POST handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Extract client IP for rate limiting
  const ip = (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'
  )

  const { allowed, remaining } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Demasiados mensajes. Espera un momento antes de continuar.' },
      {
        status: 429,
        headers: {
          ...CORS,
          'Retry-After':              '3600',
          'X-RateLimit-Limit':        String(RATE_LIMIT),
          'X-RateLimit-Remaining':    '0',
          'X-RateLimit-Reset':        String(Math.ceil(Date.now() / RATE_WINDOW_MS + 1) * Math.ceil(RATE_WINDOW_MS / 1000)),
        },
      },
    )
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body: {
    landing_page_id?:      string
    message?:              string
    conversation_history?: { role: 'user' | 'assistant'; content: string }[]
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { error: 'JSON inválido en el cuerpo de la petición.' },
      { status: 400, headers: CORS },
    )
  }

  const { landing_page_id, message, conversation_history = [] } = body

  if (!landing_page_id?.trim()) {
    return NextResponse.json(
      { error: 'landing_page_id requerido.' },
      { status: 400, headers: CORS },
    )
  }
  if (!message?.trim()) {
    return NextResponse.json(
      { error: 'message requerido.' },
      { status: 400, headers: CORS },
    )
  }

  // ── Load landing data from Supabase ────────────────────────────────────────
  const supabase = await createClient()
  const { data: landing, error: dbErr } = await supabase
    .from('landing_pages')
    .select('business_name, survey_data, metadata, html_content')
    .eq('id', landing_page_id.trim())
    .single()

  if (dbErr || !landing) {
    return NextResponse.json(
      { error: 'Landing page no encontrada.' },
      { status: 404, headers: CORS },
    )
  }

  const bizName    = landing.business_name || 'la empresa'
  const surveyData = (landing.survey_data as Record<string, unknown> | null) ?? {}
  const landingContent = extractLandingContent(landing.html_content as string || '')

  // Fetch knowledge base items (graceful if table doesn't exist yet)
  let knowledgeItems: string[] = []
  try {
    const { data: kbRows } = await supabase
      .from('chatbot_knowledge')
      .select('title, content_text')
      .eq('landing_page_id', landing_page_id.trim())
      .limit(20)
    if (kbRows && kbRows.length > 0) {
      knowledgeItems = kbRows
        .filter((r: { content_text?: string | null }) => r.content_text)
        .map((r: { title?: string | null; content_text?: string | null }) =>
          `[${r.title || 'Info'}]: ${(r.content_text || '').slice(0, 1500)}`
        )
    }
  } catch { /* table may not exist yet */ }

  const systemPrompt = buildSystemPrompt(bizName, surveyData, landingContent, knowledgeItems)

  const metadata = (landing.metadata as Record<string, unknown> | null) ?? {}
  const ownerId = metadata.user_id as string | undefined

  if (ownerId) {
    const limit = await checkUserLimit(ownerId, 'chatbot_messages')
    if (!limit.allowed) {
      return NextResponse.json(
        { reply: 'El propietario de esta web ha superado el límite de respuestas automatizadas. Por favor, intenta contactarle directamente.' },
        { headers: CORS }
      )
    }
  }

  // ── Build message history (last 10 turns to cap tokens) ───────────────────
  const history = conversation_history.slice(-10)

  const messages: Anthropic.MessageParam[] = [
    ...history.map((m) => ({
      role:    m.role as 'user' | 'assistant',
      content: m.content,
    })),
    { role: 'user' as const, content: message.trim() },
  ]

  try {
    const response = await client.messages.create({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system:     systemPrompt,
      messages,
    })

    const content = response.content[0]
    const reply   = content.type === 'text' ? content.text.trim()
      : 'Lo siento, no pude procesar tu mensaje. Por favor intenta de nuevo.'

    if (ownerId) {
      await incrementUserUsage(ownerId, 'chatbot_messages')
    }

    return NextResponse.json(
      { reply },
      {
        headers: {
          ...CORS,
          'X-RateLimit-Limit':     String(RATE_LIMIT),
          'X-RateLimit-Remaining': String(remaining),
        },
      },
    )
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[forgi-chat] Claude error:', msg)
    return NextResponse.json(
      { error: `Error del asistente: ${msg}` },
      { status: 500, headers: CORS },
    )
  }
}
