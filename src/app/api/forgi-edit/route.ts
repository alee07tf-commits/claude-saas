import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { checkUserLimit, incrementUserUsage } from '@/lib/limits'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

export async function POST(req: NextRequest) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'No autorizado. Inicia sesión para usar el editor.' }, { status: 401 })
  }

  const limit = await checkUserLimit(user.id, 'editions')
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

  try {
    // Use Haiku for section edits — 5-10x faster, sufficient for targeted changes
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 8000,
      messages: [{
        role: 'user',
        content: `Eres Forgi, el asistente de edición de LandForge. El usuario quiere modificar la sección "${label}" de su landing page.

HTML actual de la sección:
\`\`\`html
${sectionHtml}
\`\`\`

El usuario quiere: ${userPrompt}${imageUrl ? `\n\nImagen adjunta — usa esta URL en el HTML donde el usuario indique: ${imageUrl}` : ''}${embedCode ? `\n\nCódigo embed de video a insertar donde el usuario indique:\n${embedCode}` : ''}

Devuelve SOLO el HTML modificado de esta sección. Mantén exactamente:
- Los atributos data-section y data-section-label del elemento raíz
- Las mismas clases CSS (section, section-${sectionId}, etc.)
- El mismo id y tag del elemento raíz
- El mismo estilo visual general (colores CSS, fuentes, layout)
- Todo el CSS inline o clases — no los elimines

Solo modifica lo que el usuario pide. Sin comentarios, sin explicaciones, sin bloques de código markdown. Solo el HTML puro.`,
      }],
    })

    const content = response.content[0]
    if (content.type !== 'text') {
      return NextResponse.json({ error: 'Respuesta inesperada de la IA' }, { status: 500 })
    }

    let newSectionHtml = content.text.trim()

    // Strip accidental code fences
    const fence = newSectionHtml.match(/```(?:html)?\n?([\s\S]*?)```/)
    if (fence) newSectionHtml = fence[1].trim()

    if (!newSectionHtml) {
      return NextResponse.json({ error: 'La IA devolvió una respuesta vacía' }, { status: 500 })
    }

    await incrementUserUsage(user.id, 'editions')

    return NextResponse.json({
      newSectionHtml,
      tokensUsed: response.usage.input_tokens + response.usage.output_tokens,
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: `Error de IA: ${msg}` }, { status: 500 })
  }
}
