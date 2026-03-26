import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { checkUserLimit, incrementUserUsage } from '@/lib/limits'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

const FORGI_EDIT_SYSTEM = `Eres Forgi, el asistente de edición de LandForge. Editas secciones individuales de landing pages HTML.

Reglas estrictas:
- Devuelve SOLO el HTML modificado de la sección
- Mantén exactamente: data-section, data-section-label, clases CSS, id, tag raíz, estilos visuales
- Solo modifica lo que el usuario pide
- Sin comentarios, sin explicaciones, sin bloques de código markdown. Solo HTML puro`

export async function POST(req: NextRequest) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'No autorizado. Inicia sesión para usar el editor.' }, { status: 401 })
  }

  const limit = await checkUserLimit(user.id, 'editions', user.email ?? undefined)
  if (!limit.allowed) {
    return NextResponse.json({ error: 'Has alcanzado el límite de ediciones Forgi de tu plan.' }, { status: 403 })
  }
  const body = await req.json() as {
    sectionId?: string
    sectionLabel?: string
    sectionHtml?: string
    userPrompt?: string
    imageUrl?: string
    embedCode?: string
  }

  const { sectionId, sectionLabel, sectionHtml, userPrompt, imageUrl, embedCode } = body

  if (!sectionHtml || !userPrompt) {
    return NextResponse.json({ error: 'Faltan parámetros: sectionHtml y userPrompt son requeridos' }, { status: 400 })
  }

  const label = sectionLabel || sectionId || 'Sección'

  const encoder = new TextEncoder()

  const readableStream = new ReadableStream({
    async start(controller) {
      const send = (data: object) => {
        try { controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`)) } catch {}
      }

      try {
        const anthropicStream = client.messages.stream({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 4000,
          system: [{ type: 'text' as const, text: FORGI_EDIT_SYSTEM, cache_control: { type: 'ephemeral' as const } }],
          messages: [{
            role: 'user',
            content: `Sección "${label}" de la landing page.

HTML actual de la sección:
\`\`\`html
${sectionHtml}
\`\`\`

El usuario quiere: ${userPrompt}${imageUrl ? `\n\nImagen adjunta — usa esta URL en el HTML donde el usuario indique: ${imageUrl}` : ''}${embedCode ? `\n\nCódigo embed de video a insertar donde el usuario indique:\n${embedCode}` : ''}

Mantén exactamente: data-section, data-section-label, clases CSS (section, section-${sectionId}, etc.), id, tag raíz, estilos visuales. Solo HTML puro.`,
          }],
        })

        let fullResult = ''
        for await (const event of anthropicStream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            fullResult += event.delta.text
            send({ type: 'chunk', text: event.delta.text })
          }
        }

        const finalMsg = await anthropicStream.finalMessage()
        fullResult = fullResult.trim()

        // Strip accidental code fences
        const fence = fullResult.match(/```(?:html)?\n?([\s\S]*?)```/)
        if (fence) fullResult = fence[1].trim()

        if (!fullResult) throw new Error('La IA devolvió una respuesta vacía')

        await incrementUserUsage(user.id, 'editions')

        send({
          type: 'done',
          newSectionHtml: fullResult,
          tokensUsed: finalMsg.usage.input_tokens + finalMsg.usage.output_tokens,
        })
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        send({ type: 'error', msg: `Error de IA: ${msg}` })
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readableStream, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'X-Accel-Buffering': 'no',
    },
  })
}
