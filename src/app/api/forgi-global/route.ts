import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

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
          max_tokens: 48000,
          messages: [{
            role: 'user',
            content: `Eres Forgi, el asistente de edición de LandForge. El usuario quiere hacer un cambio global en su landing page.

HTML completo actual de la landing:
\`\`\`html
${fullHtml}
\`\`\`

El usuario quiere: ${userPrompt}${imageUrl ? `\n\nImagen adjunta — usa esta URL en el HTML donde el usuario indique: ${imageUrl}` : ''}${embedCode ? `\n\nCódigo embed de video a insertar donde el usuario indique:\n${embedCode}` : ''}

Devuelve el HTML completo modificado. Reglas estrictas:
- Mantén todas las secciones existentes intactas excepto lo que el usuario pide cambiar o añadir
- Si añades secciones nuevas, incluye atributos data-section="[id]" y data-section-label="[Nombre]" en el elemento raíz de la sección
- Mantén las mismas clases CSS, variables CSS y estilos del resto del documento
- Devuelve el documento HTML completo y válido (con <!DOCTYPE>, <html>, <head>, <body>)
- SIEMPRE cierra el HTML correctamente con </body></html>
- Sin comentarios explicativos, sin bloques de código markdown, solo el HTML puro`,
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
