import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS })
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  const body = await req.json() as {
    message?: string
    history?: { role: 'user' | 'assistant'; content: string }[]
  }

  const { message, history = [] } = body

  if (!message?.trim()) {
    return NextResponse.json(
      { error: 'message requerido' },
      { status: 400, headers: CORS },
    )
  }

  // ── Load landing data from Supabase ─────────────────────────────────────────
  const supabase = await createClient()
  const { data: landing } = await supabase
    .from('landing_pages')
    .select('business_name, survey_data')
    .eq('id', id)
    .single()

  // Build system prompt from survey_data
  const biz      = landing?.business_name || 'la empresa'
  const survey   = (landing?.survey_data as Record<string, unknown> | null) ?? {}

  const sector   = (survey.sector   as string | undefined) || ''
  const goal     = (survey.goal     as string | undefined) || ''
  const tone     = (survey.tone     as string | undefined) || 'profesional'
  const language = (survey.language as string | undefined) || 'es'
  const phone    = (survey.phone    as string | undefined) || ''
  const email    = (survey.email    as string | undefined) || ''
  const address  = (survey.address  as string | undefined) || ''
  const cta      = (survey.cta      as string | undefined) || ''

  const contactLines: string[] = []
  if (phone)   contactLines.push(`Teléfono: ${phone}`)
  if (email)   contactLines.push(`Email: ${email}`)
  if (address) contactLines.push(`Dirección: ${address}`)

  const systemPrompt = [
    `Eres el asistente virtual de "${biz}"${sector ? ` (${sector})` : ''}.`,
    `Tu objetivo es ayudar a los visitantes de la web a resolver sus dudas y convertirlos en clientes.`,
    goal     ? `El objetivo principal del negocio es: ${goal}.` : '',
    cta      ? `El llamado a la acción principal es: "${cta}".` : '',
    `Tono de comunicación: ${tone}.`,
    `Responde siempre en ${language === 'es' ? 'español' : language === 'en' ? 'inglés' : language}.`,
    contactLines.length > 0
      ? `Información de contacto:\n${contactLines.join('\n')}`
      : '',
    '',
    `Reglas:`,
    `- Respuestas cortas y directas (máximo 3 frases).`,
    `- Si no sabes algo específico del negocio, ofrece ayudar con más información de contacto.`,
    `- No inventes precios, servicios ni datos que no conozcas.`,
    `- Nunca menciones que eres una IA o que usas Claude/Anthropic.`,
  ].filter(Boolean).join('\n')

  // ── Build messages array ────────────────────────────────────────────────────
  // Limit history to last 10 turns to control token usage
  const recentHistory = history.slice(-10)

  const messages: Anthropic.Messages.MessageParam[] = [
    ...recentHistory,
    { role: 'user', content: message.trim() },
  ]

  // ── Call Claude Haiku ───────────────────────────────────────────────────────
  try {
    const response = await client.messages.create({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system:     systemPrompt,
      messages,
    })

    const content = response.content[0]
    const reply   = content.type === 'text' ? content.text.trim() : 'No pude procesar tu mensaje.'

    return NextResponse.json({ reply }, { headers: CORS })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json(
      { error: `Error de IA: ${msg}` },
      { status: 500, headers: CORS },
    )
  }
}
