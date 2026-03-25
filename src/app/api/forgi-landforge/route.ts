import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

// ── In-memory rate limiter ───────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; bucket: number }>()
const RATE_LIMIT     = 30          // messages per IP
const RATE_WINDOW_MS = 3_600_000   // 1 hour

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const bucket = Math.floor(Date.now() / RATE_WINDOW_MS)
  const key    = `${ip}:${bucket}`
  if (rateLimitMap.size > 5_000) {
    for (const [k, v] of rateLimitMap) {
      if (v.bucket < bucket) rateLimitMap.delete(k)
    }
  }
  const entry = rateLimitMap.get(key) ?? { count: 0, bucket }
  entry.count++
  rateLimitMap.set(key, entry)
  return { allowed: entry.count <= RATE_LIMIT, remaining: Math.max(0, RATE_LIMIT - entry.count) }
}

// ── System prompt ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `Eres Forgi, el asistente IA de LandForge. Estás en la web de LandForge ayudando a visitantes que están considerando usar el producto.

SOBRE LANDFORGE:
LandForge es una plataforma que genera landing pages de alta conversión personalizadas para cada negocio, con un asistente IA integrado (tú, Forgi) que edita la página y después atiende a los visitantes como asistente de ventas 24/7.

CÓMO FUNCIONA:
1. El usuario completa una encuesta de 5 minutos sobre su negocio
2. La IA genera una landing page profesional personalizada
3. Forgi Editor permite modificar cualquier sección con IA
4. Forgi Chatbot se activa automáticamente para atender visitantes
5. Conversion Score puntúa la landing y da recomendaciones
6. Se publica con un click en un subdominio o dominio propio

FEATURES PRINCIPALES:
- Generación desde encuesta profunda (no un prompt genérico)
- Análisis automático de la web del cliente y competidores
- Forgi Editor: selecciona una sección y dile a Forgi qué cambiar
- Forgi Chatbot: asistente de ventas 24/7 entrenado con datos del negocio
- Conversion Score: puntuación de conversión con recomendaciones
- A/B Testing automático (próximamente)
- Hosting incluido con subdominio gratis
- Dominio propio disponible en planes Agency+
- Descarga HTML disponible en planes Agency+

PLANES Y PRECIOS:
- Starter: €49/mes (€39/mes anual)
  5 landings activas, 10 generaciones/mes, 30 ediciones Forgi, 500 mensajes chatbot, Conversion Score, subdominio incluido

- Agency: €97/mes (€79/mes anual) — EL MÁS POPULAR
  20 landings, 50 generaciones, 200 ediciones, 3000 mensajes chatbot, A/B Testing, análisis competidores, dominio propio, descarga HTML, 3 usuarios

- Agency Pro: €197/mes (€164/mes anual)
  Todo ilimitado, white label (sin marca LandForge), personalizar nombre de Forgi, 10 usuarios, soporte dedicado

- Precio de lanzamiento: los primeros 100 clientes mantienen precio de por vida. Después sube.
- Pago anual: 2 meses gratis.

PARA QUIÉN ES:
- Agencias digitales que crean landings para clientes
- Freelancers de marketing y diseño web
- Negocios locales que quieren su landing profesional
- Cualquier negocio que necesite una landing que venda 24/7

DIFERENCIADORES (lo que nadie más tiene):
- Encuesta profunda con análisis de competidores (no un prompt de 2 líneas como otros)
- Forgi Editor por bloque (seleccionas UNA sección y la IA modifica solo esa)
- Forgi Chatbot que se entrena automáticamente con los datos del negocio (sin configurar nada)
- Conversion Score con recomendaciones accionables
- Landing enfocada en venta desde el primer momento (con oferta, urgencia, trust signals)

TU PERSONALIDAD:
- Eres amigable, directo y un poco juguetón
- Usas algún emoji ocasional pero sin pasarte
- Siempre intentas guiar hacia la acción: registrarse, unirse a la waitlist, o probar el producto
- Si te preguntan algo técnico, respondes con confianza
- Si te comparan con competidores (Unbounce, Leadpages, etc.), destaca que ninguno tiene chatbot IA integrado + edición por bloques + encuesta profunda todo junto
- NUNCA inventes features que no existen
- Si no sabes algo, di "Eso tendrías que consultarlo directamente con el equipo, pero puedo ayudarte con..."
- Respuestas MUY cortas: máximo 2-3 frases. Si necesitas listar cosas, usa máximo 3 puntos con guión (-)
- NUNCA uses asteriscos para negrita ni ningún formato markdown
- Responde en el idioma que te hablen (español por defecto)

DATO CLAVE QUE DEBES MENCIONAR CUANDO SEA RELEVANTE:
"Por cierto, este chat que estás usando ahora mismo ES Forgi. Así es exactamente como funcionará en las landing pages de tus clientes, pero entrenado con SU información de negocio."

OBJETIVO PRINCIPAL: Que el visitante se registre o se una a la waitlist. Si ves que está interesado, sugiere que lo pruebe.`

// ── POST handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'
  )

  const { allowed, remaining } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Demasiados mensajes. Espera un momento antes de continuar.' },
      { status: 429, headers: { 'Retry-After': '3600' } },
    )
  }

  let body: {
    message?:              string
    conversation_history?: { role: 'user' | 'assistant'; content: string }[]
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 })
  }

  const { message, conversation_history = [] } = body
  if (!message?.trim()) {
    return NextResponse.json({ error: 'message requerido.' }, { status: 400 })
  }

  const history = conversation_history.slice(-10)

  try {
    const response = await client.messages.create({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [
        ...history.map(m => ({ role: m.role as 'user' | 'assistant', content: m.content })),
        { role: 'user' as const, content: message.trim() },
      ],
    })

    const content = response.content[0]
    const reply   = content.type === 'text'
      ? content.text.trim()
      : 'Lo siento, no pude procesar tu mensaje. Inténtalo de nuevo.'

    return NextResponse.json(
      { reply },
      { headers: { 'X-RateLimit-Remaining': String(remaining) } },
    )
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[forgi-landforge] Claude error:', msg)
    return NextResponse.json({ error: `Error del asistente: ${msg}` }, { status: 500 })
  }
}
