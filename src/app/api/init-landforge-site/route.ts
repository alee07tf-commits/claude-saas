import Anthropic from '@anthropic-ai/sdk'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

export async function GET() {
  // ── Auth check ──────────────────────────────────────────────────────────
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    const appUrl = process.env.APP_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL : (process.env.VERCEL_URL ? 'https://'+process.env.VERCEL_URL : 'http://localhost:3000'))
    return NextResponse.redirect(new URL('/login', appUrl))
  }

  const adminEmail = process.env.ADMIN_EMAIL
  if (adminEmail && user.email !== adminEmail) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
  }

  // ── Check if LandForge site already exists with valid HTML ──────────────
  const { data: existing } = await supabase
    .from('landing_pages')
    .select('id, html_content')
    .eq('business_name', 'LandForge')
    .filter('metadata->>type', 'eq', 'landforge_site')
    .limit(1)
    .maybeSingle()

  // Valid = has HTML with at least one data-section attribute
  const existingIsValid = existing?.html_content && existing.html_content.includes('data-section=')
  if (existingIsValid) {
    return NextResponse.json({ id: existing!.id })
  }

  // ── Generate LandForge site HTML with Claude ─────────────────────────────
  const prompt = `Genera una landing page HTML completa y de alta calidad para "LandForge", un SaaS español para agencias de marketing digital.

PRODUCTO:
- LandForge genera landing pages profesionales con IA en minutos
- El agente "Forgi" edita la landing contigo sección a sección y después actúa como chatbot de ventas 24/7 en la landing
- Pricing: Starter €49/mes · Agency €97/mes · Agency Pro €197/mes
- Tagline: "Tu landing page lista para vender. En minutos."
- Subtítulo: "Rellena un formulario sobre tu negocio. La IA genera una landing profesional. Forgi la edita contigo y después atiende a tus visitantes 24/7."
- CTA principal: "Generar mi primera landing →" (enlaza a /register)
- Social proof: "200+ agencias ya lo usan"

SECCIONES A INCLUIR (en orden):
1. navbar — logo LandForge, links: "Cómo funciona" "Precios", CTA "Pruébalo gratis" (→/register)
2. hero — headline grande, subtítulo, CTA doble, social proof con avatares y estrellas
3. how_it_works — 3 pasos: "Rellena el formulario" → "IA genera tu landing" → "Forgi la edita y la publica"
4. benefits — 4 cards: "Landing en minutos", "Forgi Editor IA", "Chatbot de ventas 24/7", "Publicación automática en Vercel"
5. pricing — 3 planes: Starter €49, Agency €97, Agency Pro €197 con features y botones
6. testimonials — 3 testimonios de agencias ficticias con resultados concretos
7. faq — 5 preguntas frecuentes con acordeón JS
8. cta_final — cierre con headline potente y botón grande
9. footer — links, copyright

ESTILO VISUAL:
- Colores: fondo #FAFAFA, acento #9D4EDD (violeta), texto #1A1A2E
- Tipografía: DM Sans (body), Space Mono (headings/logo)
- Estilo: moderno, limpio, profesional, light mode
- Sin imágenes externas — usa gradientes CSS y emojis como iconos

REQUISITOS TÉCNICOS:
- HTML completo con <!DOCTYPE html>
- Google Fonts import en <head>
- CSS inline o <style> en <head>
- Cada sección: <section data-section="ID" data-section-label="LABEL"> (IDs exactos de arriba)
- El navbar también: <nav data-section="navbar" data-section-label="Navbar">
- Acordeón FAQ en JavaScript puro
- Responsive (mobile-friendly)
- Sin dependencias externas excepto Google Fonts

Devuelve SOLO el HTML completo, sin texto adicional, sin bloques de código markdown.`

  const msg = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8192,
    messages: [{ role: 'user', content: prompt }],
  })

  const rawHtml = (msg.content[0] as { type: string; text: string }).text.trim()
  // Strip markdown fences if present
  const html = rawHtml
    .replace(/^```html\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim()

  // ── Save to Supabase (update existing broken entry, or insert new) ────────
  let savedId: string | null = null

  if (existing?.id) {
    // Update the existing broken entry
    const { error } = await supabase
      .from('landing_pages')
      .update({ html_content: html, status: 'draft' })
      .eq('id', existing.id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    savedId = existing.id
  } else {
    const { data: row, error } = await supabase
      .from('landing_pages')
      .insert({
        business_name: 'LandForge',
        html_content: html,
        status: 'draft',
        metadata: { type: 'landforge_site' },
      })
      .select('id')
      .single()
    if (error || !row) return NextResponse.json({ error: error?.message || 'Error al guardar' }, { status: 500 })
    savedId = row.id
  }

  return NextResponse.json({ id: savedId })
}
