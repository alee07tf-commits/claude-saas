import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&nbsp;/gi, ' ').replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractMeta(html: string) {
  const title = html.match(/<title[^>]*>([^<]{1,120})<\/title>/i)?.[1]?.trim() || ''
  const desc =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{1,300})["']/i)?.[1] ||
    html.match(/<meta[^>]+content=["']([^"']{1,300})["'][^>]+name=["']description["']/i)?.[1] ||
    ''
  const h1s = [...html.matchAll(/<h1[^>]*>([^<]{1,120})<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).slice(0, 3)
  const h2s = [...html.matchAll(/<h2[^>]*>([^<]{1,120})<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).slice(0, 5)
  const phones = html.match(/(?:\+34\s?)?(?:6\d{2}|7\d{2}|9\d{2})[\s.-]?\d{3}[\s.-]?\d{3}/g) || []
  const emails = html.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g)?.filter(e => !e.includes('example') && !e.includes('pixel') && !e.includes('1x1')) || []
  return { title, desc, h1s, h2s, phones: [...new Set(phones)], emails: [...new Set(emails)] }
}

export async function POST(request: NextRequest) {
  try {
    const { domain } = await request.json()
    if (!domain) return NextResponse.json({ error: 'Domain required' }, { status: 400 })

    let url = domain.trim()
    if (!url.startsWith('http')) url = 'https://' + url

    // ── Fetch the homepage ────────────────────────────────────────────
    let html = ''
    let fetchError = ''
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml',
          'Accept-Language': 'es-ES,es;q=0.9',
        },
        signal: AbortSignal.timeout(12000),
      })
      html = await res.text()
    } catch (e) {
      fetchError = e instanceof Error ? e.message : String(e)
    }

    if (!html) {
      return NextResponse.json({
        success: false,
        error: `No se pudo acceder a ${url}. ${fetchError}`,
        data: null,
      })
    }

    const meta = extractMeta(html)
    const bodyText = stripHtml(html).slice(0, 6000)

    // ── Claude extraction ────────────────────────────────────────────
    const extraction = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1200,
      messages: [{
        role: 'user',
        content: `Analiza este contenido de una web de negocio y extrae la información estructurada.

TÍTULO: ${meta.title}
META DESCRIPCIÓN: ${meta.desc}
H1s: ${meta.h1s.join(' | ')}
H2s: ${meta.h2s.join(' | ')}
TELÉFONOS ENCONTRADOS: ${meta.phones.join(', ') || 'ninguno'}
EMAILS ENCONTRADOS: ${meta.emails.join(', ') || 'ninguno'}

CONTENIDO:
${bodyText}

Devuelve SOLO este JSON válido sin markdown:
{
  "businessName": "nombre del negocio o marca (string)",
  "sector": "sector: salud, restauracion, servicios, tecnologia, educacion, inmobiliaria, etc.",
  "services": ["servicio 1", "servicio 2"],
  "phone": "primer teléfono encontrado o null",
  "email": "primer email comercial o null",
  "address": "dirección completa o null",
  "city": "ciudad principal o null",
  "description": "descripción del negocio en 1-2 frases",
  "usp": "principal propuesta de valor o diferenciador",
  "tone": "professional|friendly|luxury|technical",
  "keywords": ["keyword1", "keyword2"],
  "confidence": "high|medium|low"
}`,
      }],
    })

    const raw = extraction.content[0]
    if (raw.type !== 'text') throw new Error('Unexpected AI response type')

    let data
    try {
      data = JSON.parse(raw.text)
    } catch {
      const match = raw.text.match(/\{[\s\S]*\}/)
      data = match ? JSON.parse(match[0]) : {}
    }

    // Merge meta-extracted phone/email if Claude missed them
    if (!data.phone && meta.phones[0]) data.phone = meta.phones[0]
    if (!data.email && meta.emails[0]) data.email = meta.emails[0]

    return NextResponse.json({ success: true, data, domain: url })

  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('analyze-domain error:', msg)
    return NextResponse.json({ success: false, error: msg, data: null })
  }
}
