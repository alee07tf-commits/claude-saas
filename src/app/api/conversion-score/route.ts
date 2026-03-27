import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { checkFeatureAccess } from '@/lib/limits'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

type Criterion = { name: string; score: number; feedback: string }
type ScoreResult = { score: number; criteria: Criterion[]; top_recommendations: string[] }

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const access = await checkFeatureAccess(user.id, 'conversion_score', user.email ?? undefined)
  if (!access.allowed) {
    return NextResponse.json({ error: 'El Conversion Score está disponible desde el plan Starter. Mejora tu plan para acceder.' }, { status: 403 })
  }

  const body = await req.json() as { fullHtml?: string }
  const { fullHtml } = body

  if (!fullHtml) {
    return NextResponse.json({ error: 'fullHtml es requerido' }, { status: 400 })
  }

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: `Analiza esta landing page y puntúa su potencial de conversión del 1 al 100.

HTML de la landing:
${fullHtml}

Evalúa estos 6 criterios (cada uno de 0 a 100):
1. Claridad del headline y propuesta de valor
2. Efectividad de los CTAs (urgencia, claridad, visibilidad)
3. Presencia y calidad de social proof (testimonios, cifras, logos)
4. Estructura y jerarquía visual (above the fold, flujo de lectura)
5. Manejo de objeciones (FAQ, garantías, trust signals)
6. SEO básico (heading structure, meta potencial, keyword usage)

Responde SOLO en este formato JSON exacto:
{
  "score": 78,
  "criteria": [
    {"name": "Headline y propuesta de valor", "score": 85, "feedback": "texto corto"},
    {"name": "CTAs", "score": 70, "feedback": "texto corto"},
    {"name": "Social proof", "score": 60, "feedback": "texto corto"},
    {"name": "Estructura visual", "score": 80, "feedback": "texto corto"},
    {"name": "Manejo de objeciones", "score": 75, "feedback": "texto corto"},
    {"name": "SEO básico", "score": 65, "feedback": "texto corto"}
  ],
  "top_recommendations": [
    "Recomendación 1 específica y accionable",
    "Recomendación 2 específica y accionable",
    "Recomendación 3 específica y accionable"
  ]
}`,
      }],
    })

    const content = response.content[0]
    if (content.type !== 'text') {
      return NextResponse.json({ error: 'Respuesta inesperada de la IA' }, { status: 500 })
    }

    let text = content.text.trim()
    const fence = text.match(/```(?:json)?\n?([\s\S]*?)```/)
    if (fence) text = fence[1].trim()

    const result = JSON.parse(text) as ScoreResult
    return NextResponse.json(result)
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: `Error: ${msg}` }, { status: 500 })
  }
}
