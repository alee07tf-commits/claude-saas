import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

const FORGI_GLOBAL_SYSTEM = `Eres Forgi, el asistente de edición de LandForge. Editas landing pages HTML completas.

Reglas:
- Devuelve el documento HTML completo y válido (<!DOCTYPE>, <html>, <head>, <body>)
- Mantén todas las secciones intactas excepto lo que el usuario pide cambiar
- Si añades secciones, incluye data-section="[id]" y data-section-label="[Nombre]"
- Mantén clases CSS, variables CSS y estilos existentes
- SIEMPRE cierra con </body></html>
- Sin comentarios ni markdown, solo HTML puro`

export async function POST(req: NextRequest) {
  const body = await req.json() as { fullHtml?: string; userPrompt?: string; imageUrl?: string; embedCode?: string }
  const { fullHtml, userPrompt, imageUrl, embedCode } = body

  if (!fullHtml || !userPrompt) {
    return Response.json({ error: 'Faltan parámetros: fullHtml y userPrompt son requeridos' }, { status: 400 })
  }

  const encoder = new TextEncoder()

  const readableStream = new ReadableStream({
    async start(controller) {
      const send = (data: object) => {
        try { controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`)) } catch {}
      }

      try {
        send({ type: 'progress', msg: 'Aplicando cambios con IA...' })

        const anthropicStream = client.messages.stream({
          model: 'claude-sonnet-4-6',
          max_tokens: 24000,
          system: [{ type: 'text' as const, text: FORGI_GLOBAL_SYSTEM, cache_control: { type: 'ephemeral' as const } }],
          messages: [{
            role: 'user',
            content: `HTML completo actual:\n\`\`\`html\n${fullHtml}\n\`\`\`\n\nCambio solicitado: ${userPrompt}${imageUrl ? `\n\nImagen adjunta: ${imageUrl}` : ''}${embedCode ? `\n\nEmbed:\n${embedCode}` : ''}`,
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

        // Post-process
        fullResult = fullResult.trim()
        const fence = fullResult.match(/```(?:html)?\n?([\s\S]*?)```/)
        if (fence) fullResult = fence[1].trim()
        if (finalMsg.stop_reason === 'max_tokens') {
          if (!fullResult.includes('</body>')) fullResult += '\n</body>'
          if (!fullResult.includes('</html>')) fullResult += '\n</html>'
        }

        if (!fullResult.toLowerCase().includes('<html') && !fullResult.toLowerCase().includes('<!doctype')) {
          throw new Error('La IA no devolvió HTML válido')
        }

        send({ type: 'done', tokens: finalMsg.usage.input_tokens + finalMsg.usage.output_tokens })
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
