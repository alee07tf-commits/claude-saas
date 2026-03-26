import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { checkUserLimit, incrementUserUsage } from '@/lib/limits'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

// ─────────────────────────────────────────────────────────────────
// LABELS / MAPS
// ─────────────────────────────────────────────────────────────────
const PAGE_TYPE_LABELS: Record<string, string> = {
  local_business: 'Negocio Local (fontanero, electricista, peluquería)',
  services:       'Servicios Profesionales (consultoría, abogados, marketing)',
  health:         'Salud y Bienestar (clínica, dentista, psicólogo)',
  restaurant:     'Restaurante y Hostelería',
  ecommerce:      'eCommerce y Tienda Online',
  portfolio:      'Portfolio Creativo (diseñador, fotógrafo)',
  saas:           'SaaS y Tecnología',
  education:      'Educación y Formación (academia, coaching)',
  real_estate:    'Inmobiliaria',
  events:         'Eventos y Bodas',
}

const SECTION_DESCRIPTIONS: Record<string, string> = {
  hero:         'HERO — headline H1 con keyword, subheadline, CTA principal, social proof inline',
  services:     'SERVICIOS — cards/grid de los servicios con icono + título + descripción',
  how_it_works: 'CÓMO FUNCIONA — pasos numerados con conector visual',
  about:        'SOBRE NOSOTROS — historia, valores, equipo',
  benefits:     'BENEFICIOS — ventajas diferenciadores con iconos visuales',
  stats:        'ESTADÍSTICAS — cifras grandes impactantes del negocio',
  testimonials: 'TESTIMONIOS — 3 reseñas con avatar, estrellas, texto y resultado concreto',
  gallery:      'GALERÍA — portafolio visual (CSS art, sin imgs externas)',
  team:         'EQUIPO — cards de miembros con nombre y cargo',
  pricing:      'PRECIOS — tabla de planes con features y CTA',
  faq:          'FAQ — preguntas frecuentes con acordeón JavaScript',
  contact_form: 'CONTACTO — formulario HTML + teléfono + email + dirección',
  cta_final:    'CTA FINAL — sección de cierre con headline potente y botón',
}

const TYPOGRAPHY_FONTS: Record<string, { heading: string; body: string; import: string }> = {
  modern:   { heading: 'Syne',             body: 'Inter',          import: 'family=Inter:wght@400;500;600&family=Syne:wght@700;800' },
  elegant:  { heading: 'Playfair Display', body: 'Raleway',        import: 'family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Raleway:wght@400;500;600' },
  friendly: { heading: 'Poppins',          body: 'Nunito',         import: 'family=Nunito:wght@400;500;600&family=Poppins:wght@700;800' },
  classic:  { heading: 'Merriweather',     body: 'Source Sans 3',  import: 'family=Merriweather:wght@700&family=Source+Sans+3:wght@400;600' },
}

// ─────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────
function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '').replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ').trim()
}

function extractHeadings(html: string): string {
  const h1s = [...html.matchAll(/<h1[^>]*>([^<]{1,100})<\/h1>/gi)].map(m => m[1].trim()).slice(0, 2)
  const h2s = [...html.matchAll(/<h2[^>]*>([^<]{1,100})<\/h2>/gi)].map(m => m[1].trim()).slice(0, 3)
  return [h1s.length ? `H1: ${h1s.join(' | ')}` : '', h2s.length ? `H2: ${h2s.join(' | ')}` : ''].filter(Boolean).join('\n')
}

// ─────────────────────────────────────────────────────────────────
// AGENT 1 — SERP RESEARCH
// ─────────────────────────────────────────────────────────────────
async function analyzeSERP(keyword: string, location: string): Promise<string> {
  if (!keyword) return ''
  const query = location ? `${keyword} ${location}` : keyword

  if (process.env.SERPER_API_KEY) {
    try {
      const serperRes = await fetch('https://google.serper.dev/search', {
        method: 'POST',
        headers: { 'X-API-KEY': process.env.SERPER_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: query, gl: 'es', hl: 'es', num: 5 }),
        signal: AbortSignal.timeout(7000),
      })
      if (serperRes.ok) {
        const serpJson = await serperRes.json()
        const results: Array<{ title: string; link: string; snippet?: string }> = serpJson.organic || []

        const topAnalyses = await Promise.allSettled(
          results.slice(0, 2).map(async (r) => {
            const pageRes = await fetch(r.link, {
              headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
              signal: AbortSignal.timeout(5000),
            })
            const html = await pageRes.text()
            return `[${r.title}]\n${extractHeadings(html)}`
          })
        )

        const serpSummary = results.slice(0, 4).map((r, i) => `${i+1}. ${r.title} — ${r.snippet || '—'}`).join('\n')
        const topStructures = topAnalyses.filter(r => r.status === 'fulfilled')
          .map(r => (r as PromiseFulfilledResult<string>).value).join('\n\n')

        return `SERP "${query}":\n${serpSummary}\n\nESTRUCTURA TOP:\n${topStructures}`
      }
    } catch (e) { console.warn('SERP:', e instanceof Error ? e.message : e) }
  }
  return `SEO (conocimiento) — "${query}": usa mejores prácticas del sector`
}

// ─────────────────────────────────────────────────────────────────
// AGENT 2 — DOMAIN RESEARCH (fallback if no businessInfo)
// ─────────────────────────────────────────────────────────────────
async function scrapeDomain(domain: string): Promise<string> {
  if (!domain) return ''
  const url = domain.startsWith('http') ? domain : 'https://' + domain
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/121.0.0.0' },
      signal: AbortSignal.timeout(10000),
    })
    const html = await res.text()
    const title = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] || ''
    const desc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{1,200})["']/i)?.[1] || ''
    const phones = [...new Set(html.match(/(?:\+34\s?)?(?:6\d{2}|7\d{2}|9\d{2})[\s.-]?\d{3}[\s.-]?\d{3}/g) || [])].slice(0, 2)
    const emails = [...new Set((html.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g) || []).filter(e => !e.includes('example') && !e.includes('pixel')))].slice(0, 2)
    return `WEB:\nTítulo: ${title}\nMeta: ${desc}\n${extractHeadings(html)}\nTel: ${phones.join(', ')||'—'} | Email: ${emails.join(', ')||'—'}\n${stripHtml(html).slice(0, 3500)}`
  } catch { return '' }
}

// ─────────────────────────────────────────────────────────────────
// AGENT 3 — DESIGN CONCEPT (Haiku, fast creative brief)
// ─────────────────────────────────────────────────────────────────
async function generateDesignConcept(
  pageType: string,
  bi: Record<string, unknown> | null | undefined,
  primaryColor: string,
  accentColor: string,
  theme: string,
  sections: string[],
  serpSnippet: string,
): Promise<Record<string, unknown>> {
  // Randomization seed forces visual variety across multiple generations
  const seed = Math.floor(Math.random() * 9999)
  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 900,
      messages: [{
        role: 'user',
        content: `Director de arte web. Crea un concepto visual ÚNICO para esta landing. SEED de variedad: ${seed} — usa este número para elegir variantes distintas cada vez.

TIPO: ${PAGE_TYPE_LABELS[pageType] || pageType}
NEGOCIO: ${bi?.businessName || '—'} | USP: ${bi?.usp || '—'} | Sector: ${bi?.sector || '—'}
COLORES: principal=${primaryColor}, acento=${accentColor}, tema=${theme}
SECCIONES: ${sections.join(', ')}
COMPETIDORES: ${serpSnippet.slice(0, 250)}

Elige UN valor por campo. No repitas el mismo valor en generaciones sucesivas (el SEED te ayuda a variar).
Responde SOLO con JSON válido (sin markdown):
{
  "heroLayout": "split_left|split_right|centered_bold|diagonal_hero|magazine_left|fullscreen_overlay|asymmetric_grid",
  "heroDecorative": "descripción concreta del elemento decorativo CSS del hero (formas geométricas, gradientes, blobs, líneas)",
  "servicesLayout": "grid_3col|grid_2col_icon_left|zigzag_alternating|cards_large|list_with_border_left|spotlight_feature|numbered_process|tabs_visual",
  "testimonialsLayout": "cards_3col|masonry_2col|single_spotlight|horizontal_scroll|quote_wall|rating_summary|video_style|timeline_reviews",
  "statsLayout": "fullwidth_numbers_centered|floating_cards_row|split_accent_bg|minimal_counters|icon_stats|progress_bars|ticker_banner|diagonal_split",
  "pricingLayout": "cards_3col|featured_center_elevated|comparison_table|single_focused|bold_cards|feature_matrix|minimal_list_pricing|two_tier",
  "faqLayout": "accordion_single_col|two_col_qa|numbered_cards|chat_bubbles|borderless_expand|icon_faq|grid_plain_faq|stepped_reveal",
  "ctaFinalLayout": "centered_gradient_bg|full_accent_bar|minimal_bordered|floating_card_cta|split_visual_cta|countdown_cta|testimonial_cta|diagonal_cta",
  "howItWorksLayout": "steps_horizontal|steps_timeline|steps_numbered_col|steps_icon_cards|alternating_cards_hiw|process_circle|flowchart_arrows|progress_steps",
  "benefitsLayout": "icon_grid_4col|checklist_two_col|feature_zigzag|badge_highlights|comparison_without|stat_benefits|visual_list_benefits|grid_with_numbers",
  "aboutLayout": "split_story|values_grid|timeline_milestones|hero_about|mission_vision|stats_story|founder_spotlight",
  "galleryLayout": "masonry_3col|polaroid_cards|grid_with_overlay|featured_large_gallery|before_after_gallery|timeline_gallery|grid_uniform",
  "teamLayout": "cards_3col_team|horizontal_info|minimal_list|founder_focus|cards_with_bio|minimal_avatars|department_sections",
  "contactLayout": "split_form_info|centered_card_form|minimal_form|multi_channel|map_prominent|two_step_contact|social_contact",
  "cardStyle": "rounded_shadow|flat_border|glassmorphism|gradient_fill|icon_top_colored",
  "colorTreatment": "flat_clean|gradient_accents|color_block_sections|subtle_tints|bold_contrast",
  "animationStyle": "fade_up_stagger|slide_in_cascade|scale_pop|clip_reveal|gentle_float",
  "spacingRhythm": "compact|balanced|airy",
  "personality": "corporate|premium|bold|playful|technical|warm|luxury|minimal",
  "uniqueElement": "elemento visual diferenciador concreto que hace esta landing única (15 palabras)"
}`,
      }],
    })
    const content = response.content[0]
    if (content.type !== 'text') return {}
    const match = content.text.match(/\{[\s\S]*\}/)
    if (!match) return {}
    return JSON.parse(match[0])
  } catch { return {} }
}

// ─────────────────────────────────────────────────────────────────
// AGENT 4 — SEO OPTIMIZER (Haiku, runs parallel with Design Concept)
// ─────────────────────────────────────────────────────────────────
async function generateSEOStrategy(
  keyword: string,
  location: string,
  pageType: string,
  bi: Record<string, unknown> | null | undefined,
  serpSnippet: string,
): Promise<Record<string, unknown>> {
  if (!keyword) return {}
  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      messages: [{
        role: 'user',
        content: `Especialista SEO senior. Genera la estrategia SEO óptima para esta landing page basándote en los competidores SERP.

KEYWORD PRINCIPAL: "${keyword}"${location ? ` + "${location}"` : ''}
TIPO DE NEGOCIO: ${PAGE_TYPE_LABELS[pageType] || pageType}
NEGOCIO: ${bi?.businessName || '—'} | USP: ${bi?.usp || '—'}
SERP TOP: ${serpSnippet}

Responde SOLO con JSON válido (sin markdown):
{
  "metaTitle": "Título SEO exacto (50-60 chars, keyword al inicio)",
  "metaDescription": "Meta description (148-155 chars, keyword + ciudad + beneficio clave + CTA suave)",
  "h1": "H1 exacto para la landing (keyword natural integrada, max 75 chars)",
  "schemaType": "LocalBusiness|MedicalClinic|Restaurant|Store|EducationalOrganization|RealEstateAgent|LegalService|HomeAndConstructionBusiness",
  "lsiKeywords": ["keyword LSI 1", "keyword 2", "keyword 3", "keyword 4"],
  "sectionHeadings": {
    "services": "H2 para sección servicios (con keyword secundaria)",
    "benefits": "H2 para beneficios (propuesta de valor clara)",
    "testimonials": "H2 para testimonios (con cifra de prueba social)",
    "faq": "H2 para FAQ (pregunta de cola larga del sector)"
  },
  "ctaText": "Texto CTA principal (3-5 palabras, orientado a conversión)"
}`,
      }],
    })
    const content = response.content[0]
    if (content.type !== 'text') return {}
    const match = content.text.match(/\{[\s\S]*\}/)
    if (!match) return {}
    return JSON.parse(match[0])
  } catch { return {} }
}

// ─────────────────────────────────────────────────────────────────
// AGENT 5 — HTML DESIGNER (Sonnet, main generation)
// ─────────────────────────────────────────────────────────────────
const HTML_DESIGNER_SYSTEM = `Eres un desarrollador web senior que crea landing pages HTML+CSS de alta conversión, únicas y visualmente potentes. Cada landing DEBE verse diferente a las demás: usa fielmente el concepto de diseño que te dan.

FORMATO: Solo el documento HTML completo. Sin markdown, sin bloques de código, sin comentarios fuera del HTML.

HEAD OBLIGATORIO:
• <meta charset="UTF-8"> + <meta name="viewport" content="width=device-width, initial-scale=1.0">
• <title> y <meta name="description"> del SEO agent
• Google Fonts @import en <style>

JSON-LD SCHEMA justo antes del script de animaciones:
<script type="application/ld+json">{"@context":"https://schema.org","@type":"[schemaType]","name":"[negocio]","description":"[desc]","url":"[url]"}</script>

━━━ ALIGNMENT — REGLAS ABSOLUTAS ━━━
• section-title, section-subtitle: SIEMPRE text-align:center
• Texto dentro de cards (card-title, card-desc): SIEMPRE text-align:left — NUNCA centrar texto en cards
• Hero split_left / split_right / magazine_left: texto de la columna de texto → text-align:left
• Hero centered_bold / fullscreen_overlay / diagonal_hero: todo centrado
• Párrafos de más de 20 palabras: NUNCA text-align:center
• CTAs sueltos (no en cards): centrar con margin:0 auto o flex justify-content:center
• Formularios: labels y campos left-aligned

━━━ CSS RULES ━━━
• Un único <style> en <head> — vanilla CSS puro, sin CDN
• CSS custom props: --primary, --accent, --bg, --surface, --text, --muted, --radius
• CSS COMPACTO: máx 350 líneas, shorthand, selectores agrupados con coma, sin comentarios, sin duplicados
• NO estilos inline en HTML
• Centrado de bloques: margin-inline:auto + max-width. Grid centered: place-items:center. Flex: justify-content:center align-items:center
• Ritmo visual: secciones alternas con background:var(--surface) / var(--bg)
• Sección con --primary bg (stats o cta_final): usar color:#fff en sus textos

━━━ NAVBAR RESPONSIVE — ESTRUCTURA OBLIGATORIA ━━━
El navbar SIEMPRE debe tener esta estructura exacta:
<nav id="navbar" ...>
  <div class="nav-inner">
    <a href="#" class="nav-logo"><!-- Logo --></a>
    <div class="nav-links"><!-- links de navegación --></div>
    <a href="#contacto" class="nav-cta cta-primary"><!-- CTA button --></a>
    <button class="nav-hamburger" onclick="this.closest('nav').classList.toggle('nav-open')" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile-menu"><!-- mismos links que nav-links --></div>
</nav>

CSS del navbar (incluir siempre):
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border-bottom:1px solid color-mix(in srgb,var(--primary) 20%,transparent)}
.nav-inner{max-width:1200px;margin:0 auto;padding:0 32px;height:64px;display:flex;align-items:center;gap:32px}
.nav-logo{font-weight:800;font-size:20px;color:var(--text);text-decoration:none;flex-shrink:0}
.nav-links{display:flex;gap:28px;align-items:center;flex:1}
.nav-links a{color:var(--muted);text-decoration:none;font-size:14px;font-weight:500;transition:color .2s}.nav-links a:hover{color:var(--text)}
.nav-cta{margin-left:auto;flex-shrink:0}
.nav-hamburger{display:none;flex-direction:column;gap:5px;background:none;border:1px solid color-mix(in srgb,var(--primary) 30%,transparent);border-radius:8px;padding:8px;cursor:pointer;width:40px;height:40px;align-items:center;justify-content:center}
.nav-hamburger span{width:18px;height:2px;background:var(--text);transition:.2s;display:block}
.nav-mobile-menu{display:none;flex-direction:column;padding:8px 24px 20px;border-top:1px solid color-mix(in srgb,var(--primary) 15%,transparent)}
.nav-mobile-menu a{padding:14px 0;font-size:16px;font-weight:600;color:var(--text);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--primary) 10%,transparent)}
nav.nav-open .nav-mobile-menu{display:flex}
nav.nav-open .nav-hamburger span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
nav.nav-open .nav-hamburger span:nth-child(2){opacity:0}
nav.nav-open .nav-hamburger span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}

━━━ RESPONSIVE OBLIGATORIO — INCLUIR SIEMPRE ━━━
Añadir EXACTAMENTE este bloque al final del CSS (adaptar valores al diseño):
@media(max-width:768px){
  /* Navbar */
  .nav-inner{padding:0 16px}
  .nav-links{display:none}
  .nav-hamburger{display:flex}
  /* Hero */
  .hero{padding:100px 20px 60px;min-height:auto}
  .hero-grid,.hero-split{grid-template-columns:1fr!important;gap:32px}
  .hero-deco{display:none}
  h1{font-size:clamp(2rem,8vw,3rem)!important;letter-spacing:-1px}
  /* Secciones */
  section{padding:60px 20px}
  /* Grids → 1 columna */
  .services-grid,.testimonials-grid,.team-grid,.pricing-grid{grid-template-columns:1fr!important}
  /* Zigzag → siempre columna */
  .zigzag-item{flex-direction:column!important}
  /* Stats → wrap 2 por fila */
  .stats-row{gap:24px;flex-wrap:wrap}
  .stat-item{min-width:calc(50% - 12px)}
  /* Comparison */
  .comparison-grid{grid-template-columns:1fr!important}
  /* FAQ */
  .faq-container{max-width:100%}
  /* CTA final */
  .cta-final-card{padding:48px 24px}
  /* Botones full-width */
  .cta-primary,.cta-secondary{width:100%;text-align:center;justify-content:center;display:flex}
  /* Cards */
  .card{padding:24px 20px}
}
@media(max-width:480px){
  h1{font-size:clamp(1.8rem,7vw,2.4rem)!important}
  h2{font-size:clamp(1.5rem,6vw,2rem)!important}
  .stat-item{min-width:calc(50% - 8px)}
  .pricing-card{padding:28px 20px}
  .nav-cta{display:none}
}

━━━ SISTEMA DE ANIMACIONES ━━━
CSS en <style> (copiar exacto):
._a{opacity:0;transform:translateY(28px);transition:.65s cubic-bezier(.16,1,.3,1)}._a._v{opacity:1;transform:none}._al{transform:translateX(-32px)}._ar{transform:translateX(32px)}._as{transform:scale(.94)}._ac{clip-path:inset(0 100% 0 0);transition:.75s cubic-bezier(.16,1,.3,1)}._ac._v{clip-path:inset(0 0% 0 0)}._s1{transition-delay:.1s}._s2{transition-delay:.2s}._s3{transition-delay:.3s}._s4{transition-delay:.4s}._s5{transition-delay:.5s}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}@keyframes pulse-ring{0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--primary) 35%,transparent)}60%{box-shadow:0 0 0 14px color-mix(in srgb,var(--primary) 0%,transparent)}}

Script al final del <body>:
<script>const _o=new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting){el.target.classList.add('_v');_o.unobserve(el.target);}});},{rootMargin:'0px 0px -50px 0px',threshold:.05});document.querySelectorAll('._a,._ac').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<window.innerHeight+80){el.classList.add('_v');}else{_o.observe(el);}});document.querySelectorAll('.faq-btn').forEach(b=>b.onclick=()=>{const p=b.nextElementSibling;const open=p.style.maxHeight&&p.style.maxHeight!=='0px';document.querySelectorAll('.faq-body').forEach(x=>{x.style.maxHeight='0';x.style.opacity='0';x.style.paddingBottom='0';});if(!open){p.style.maxHeight='500px';p.style.opacity='1';p.style.paddingBottom='20px';}});document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{const t=b.dataset.tab;b.closest('[data-tabs]').querySelectorAll('[data-tab]').forEach(x=>x.classList.remove('tab-active'));b.classList.add('tab-active');b.closest('section').querySelectorAll('[data-panel]').forEach(x=>{x.style.display=x.dataset.panel===t?'flex':'none';});});document.querySelectorAll('[data-reason]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-reason]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=document.querySelector('.contact-form-step');if(f)f.style.display='block';});</script>

USO DE ANIMACIONES — OBLIGATORIO aplicar en cada sección:
• Navbar y hero: sin clases _a (visibles al instante — JAMÁS pongas _a ni _ac en navbar/hero)
• section-title de cada sección: SOLO class="_a" (fade-up simple — NUNCA uses _ac en section-title)
• section-subtitle: class="_a _s1"
• Cards/items en grid: _a _s1 / _a _s2 / _a _s3 / _a _s4 (stagger visual)
• REGLA CRÍTICA: NUNCA combines _a y _ac en el mismo elemento — usa una u otra, nunca ambas
• animationStyle=fade_up_stagger → _a + _s1/_s2/_s3 en cada card/item (la más fiable)
• animationStyle=slide_in_cascade → items impares: _a _al _s1, pares: _a _ar _s2 (sin _ac)
• animationStyle=scale_pop → _a _as en cada card/item
• animationStyle=clip_reveal → _ac STANDALONE (sin _a) solo en el H1 del hero y decorativos grandes
• animationStyle=gentle_float → _a en cards + style="animation:float 5s ease-in-out infinite" en el div decorativo del hero
• _ac standalone: SOLO para el H1 hero o elementos decorativos muy visibles — nunca en secciones interiores

━━━ VOCABULARY DE DISEÑO — IMPLEMENTACIONES EXACTAS ━━━

HERO LAYOUTS:
• split_left → grid-template-columns:55% 45%; gap:48px. Col-1:texto (left-aligned). Col-2:div decorativo con gradiente, formas CSS o SVG simple
• split_right → grid-template-columns:45% 55%. Col-1:decorativo. Col-2:texto
• centered_bold → max-width:680px; margin:0 auto; text-align:center. H1 clamp(3rem,6vw,5.5rem). Decorativo: círculo de gradiente blur absoluto detrás
• diagonal_hero → ::before con clip-path:polygon(0 0,100% 0,100% 82%,0 100%), background:var(--primary) o gradient. Texto blanco centrado encima
• magazine_left → grid-template-columns:58% 42%. Izq: H1 gigante clamp(3.5rem,7vw,6rem) + badge trust signal. Der: columna vertical con 2-3 stats destacados o bullets
• fullscreen_overlay → min-height:100vh; background:linear-gradient; text-align:center; max-width:620px; margin:0 auto. Overlay rgba oscuro o claro
• asymmetric_grid → CSS grid-template-areas:"a a b" / "c c b". Área b es el decorativo que ocupa 2 filas

SERVICES LAYOUTS:
• grid_3col → grid repeat(3,1fr) gap:24px. Card: icon+title+desc. Mobile: 1col
• grid_2col_icon_left → grid repeat(2,1fr) gap:24px. Card: flex gap:16px. Icon: 52px rounded tint
• zigzag_alternating → flex col gap:48px. Item even: row; odd: row-reverse. Icon 56px. Mobile: col
• cards_large → grid repeat(2,1fr) gap:32px. Card: padding:40px icon 64px top-left H3 desc "→"
• list_with_border_left → flex col gap:0. Item: border-left:3px solid var(--primary) padding:16px hover accent
• spotlight_feature → 1 card full-width featured top (padding:48px flex) + grid repeat(3,1fr) smaller cards below
• numbered_process → flex col gap:0. Item: flex gap:20px. Left: large number clamp(4rem,8vw,7rem) font-weight:900 color:var(--primary) opacity:.15 + title overlay. Right: desc
• tabs_visual → JS tabs: [data-tab] buttons row + [data-panel] divs. Active tab: background:var(--primary) color:#fff. Panel: flex gap:32px icon+desc

TESTIMONIALS LAYOUTS:
• cards_3col → grid repeat(3,1fr) gap:24px. Card: avatar 48px iniciales, nombre, cargo, quote cursiva, ★★★★★, badge resultado
• masonry_2col → grid repeat(2,1fr) gap:24px. Primera card: grid-row:span 2 quote larga. Resto normales
• single_spotlight → max-width:640px mx-auto. Quote 1.4rem, avatar 72px, badge resultado prominente
• horizontal_scroll → flex gap:24px overflow-x:auto. Card: min-width:300px. Scrollbar: ::-webkit-scrollbar height:4px var(--primary)
• quote_wall → columns:2 gap:20px. Card: break-inside:avoid mb:20px padding:24px. Alternating heights via content length
• rating_summary → top row: overall rating giant number + stars + total count. Below: grid repeat(2,1fr) gap:16px testimonial cards smaller
• video_style → grid repeat(3,1fr) gap:24px. Card: top div play-button overlay (circle background:var(--primary) color:#fff "▶") + gradient bg placeholder. Below: quote+name
• timeline_reviews → flex col gap:0 max-width:640px mx-auto. Item: flex gap:20px. Left: date badge vertical. Right: card with quote+avatar

STATS LAYOUTS:
• fullwidth_numbers_centered → flex row justify-center gap:48px flex-wrap. Stat: número clamp(3rem,7vw,6rem) fw:800 color:var(--primary), label muted
• floating_cards_row → flex row gap:20px flex-wrap justify-center. Card: padding:28px shadow, emoji arriba + number + label
• split_accent_bg → section: left 50% bg:var(--primary) (white stats) right 50% var(--bg) (2 stats + copy). clip-path o pseudo-el
• minimal_counters → grid repeat(4,1fr) gap:0 border-top:2px. Each: padding:32px 0. Number huge + label. Zero decoration
• icon_stats → grid repeat(4,1fr) gap:24px. Each: emoji 48px centered + number clamp(2.8rem,6vw,5rem) + label. Card: rounded tint bg
• progress_bars → flex col gap:24px max-width:600px mx-auto. Each: label row justify-between + progress bar (height:8px rounded) filled to % with var(--primary)
• ticker_banner → background:var(--primary). Flex row overflow-x:auto gap:0. Dividers: border-right. Each stat: padding:28px 48px white text. Scrollable on mobile
• diagonal_split → section position:relative. ::before clip-path:polygon(0 0,60% 0,40% 100%,0 100%) bg:var(--primary). Stats in two groups: left white on primary, right normal

PRICING LAYOUTS:
• cards_3col → grid repeat(3,1fr) gap:24px. Centro: box-shadow prominente + badge "Más popular"
• featured_center_elevated → centro scale(1.05) z-index:1 border:2px var(--primary). Laterales normales
• comparison_table → table: thead with plan names, tbody rows of features with ✓/✗ per column. Striped rows
• single_focused → 1 card max-width:480px mx-auto padding:56px. Huge price + feature list + CTA. Supporting text around it
• bold_cards → grid repeat(3,1fr) gap:20px. Card: price clamp(2.5rem,5vw,4rem) fw:900 prominent. Feature list clean. Different bg per tier
• feature_matrix → horizontal layout. Left col: feature names (sticky). Right cols: plan checkboxes. Max-width:900px
• minimal_list_pricing → simple stacked list. Each: flex justify-between padding:20px border-bottom. Left: plan name+desc. Right: price + CTA button
• two_tier → grid repeat(2,1fr) gap:32px max-width:700px mx-auto. Two main options. Feature diff clearly highlighted. No center card

FAQ LAYOUTS:
• accordion_single_col → max-width:700px mx-auto. Item: border-bottom:1px, .faq-btn flex justify-between, chevron rotated CSS
• two_col_qa → grid repeat(2,1fr) gap:24px. Card: Q bold, A below, no accordion
• numbered_cards → grid repeat(2,1fr) gap:20px. Card: num 3rem var(--primary) top-left + Q + A
• chat_bubbles → flex col gap:16px max-width:680px mx-auto. Q: bubble right-aligned bg:var(--primary) color:#fff border-radius:20px 20px 4px 20px. A: bubble left bg:var(--surface) border-radius:20px 20px 20px 4px
• borderless_expand → max-width:700px mx-auto. Item: padding:20px 0. .faq-btn: font-size:1.1rem fw:600 no border. Separator: thin line between. Clean minimal look
• icon_faq → grid repeat(2,1fr) gap:20px. Card: emoji icon 36px top + Q bold + collapsible A. Icon as visual cue per topic
• grid_plain_faq → grid repeat(2,1fr) gap:24px. All answers visible, no accordion. Card: Q as H3 + A as p. Colored top-border per card
• stepped_reveal → numbered vertical with connecting line. Each step: circle number + Q bold + A paragraph. Line connects circles. Accordion optional

CTA FINAL LAYOUTS:
• centered_gradient_bg → background:linear-gradient(135deg,var(--primary),var(--accent)); text white padding:80px. Btn: bg:#fff color:var(--primary)
• full_accent_bar → flex justify-between align-items:center bg:var(--primary) padding:40px 60px. Left: headline. Right: white outline btn
• minimal_bordered → border:2px solid var(--primary) border-radius:24px padding:60px text-center max-width:700px mx-auto
• floating_card_cta → card max-width:640px mx-auto mt:-60px (overlap previous section) padding:56px shadow-xl border-radius:24px. Text center + big CTA
• split_visual_cta → grid repeat(2,1fr). Left: decorative CSS illustration/abstract. Right: headline + subtext + CTA + trust line
• countdown_cta → centered gradient bg + urgency badge "Oferta hasta [fecha]" + countdown divs (DD HH MM SS) in boxes + CTA below. JS: simple decrement on load
• testimonial_cta → small quote + avatar above the main headline. Then CTA. Background: subtle tint of var(--primary) 8%
• diagonal_cta → ::before clip-path:polygon(0 0,100% 8%,100% 100%,0 92%) bg:var(--primary). Content centered white text + CTA

HOW IT WORKS LAYOUTS:
• steps_horizontal → flex row justify-center gap:32px flex-wrap. Step: text-center. Num: circle 52px var(--primary) white. "→" separator
• steps_timeline → max-width:640px mx-auto. Item: position:relative padding-left:36px mb:32px border-left:2px dashed var(--primary). Dot: ::before 14px circle
• steps_numbered_col → flex col gap:24px max-width:680px mx-auto. Item: flex gap:20px. Num: 52px circle var(--primary) fw:800 flex-shrink:0
• steps_icon_cards → grid repeat(3,1fr) gap:24px. Card relative: num huge opacity:.07 abs top-right + emoji 36px + H3 + desc
• alternating_cards_hiw → flex col gap:0. Item even: flex row; odd: flex row-reverse. Card: 48% width. Center: connecting arrow ↓ between items. Alt bg tint per step
• process_circle → flex wrap justify-center gap:20px. Steps arranged in 2 rows (1-2-3 top, 4-5 bottom). Connecting arrows between with CSS. Each: circle number prominent
• flowchart_arrows → flex col align-center gap:0. Box: border:2px solid var(--primary) rounded padding:20px 32px text-center max-width:400px. Arrow: ↓ element between boxes with connector
• progress_steps → horizontal progress bar top (CSS: filled to step %) + step labels below it + active step highlighted. Vertical version for mobile

BENEFITS LAYOUTS:
• icon_grid_4col → grid repeat(4,1fr) gap:20px. Item: icon 48px tint bg rounded + title bold + desc small. Mobile: 2col
• checklist_two_col → grid repeat(2,1fr) gap-y:10px. Item: flex gap:12px. Check: 24px circle tint "✓" var(--primary) fw:700
• feature_zigzag → flex col gap:48px. Even: row; odd: row-reverse. Icon block: 80px tint bg rounded font-size:2.5rem
• badge_highlights → flex wrap gap:14px justify-center. Badge: border:2px solid tint border-radius:100px padding:10px 24px emoji+label fw:600
• comparison_without → grid repeat(2,1fr) gap:32px. Left col: "Sin nosotros" list with ✗ red. Right col: "Con nosotros" list with ✓ green. Header row titles
• stat_benefits → grid repeat(3,1fr) gap:24px. Card: big stat number var(--primary) + benefit text below. Each stat supports the benefit claim
• visual_list_benefits → flex col gap:32px max-width:700px mx-auto. Item: flex gap:24px. Left: emoji in 64px square tint rounded. Right: H3 title + desc paragraph
• grid_with_numbers → grid repeat(3,1fr) gap:24px. Card: large num clamp(3rem,6vw,5rem) fw:900 var(--primary) opacity:.2 top-right abs + title + desc. Card position:relative

ABOUT LAYOUTS:
• split_story → grid 55% 45% gap:48px align-center. Left: H2+text+mini stats row. Right: decorative CSS div (gradient shapes)
• values_grid → H2+subtitle centered + grid repeat(3,1fr) gap:24px mt:40px. Card: emoji 32px + name fw:700 + desc small
• timeline_milestones → max-width:640px mx-auto. Item: flex gap:24px mb:28px. Year: pill fw:800 var(--primary). Line: border-left tint ml:40px
• hero_about → full-width section bg:var(--primary) text white. Grid 50/50: left H2+text+cta. Right: stats 2x2 in white cards
• mission_vision → grid repeat(2,1fr) gap:0. Left: bg:var(--primary) padding:64px white text. Right: bg:var(--surface) same padding. Title + paragraph each
• stats_story → flex col gap:48px max-width:720px mx-auto. Text paragraphs with inline callout boxes (border-left:4px var(--primary) padding:16px bg tint) for key facts
• founder_spotlight → flex gap:48px align-center. Left: avatar CSS 200px circle gradient bg + name+title. Right: quote "66" large var(--primary) + story text + signature-style name

GALLERY LAYOUTS:
• masonry_3col → columns:3 gap:16px. Placeholder: break-inside:avoid mb:16px gradient bg rounded. Heights: 180/240/200px alternating
• polaroid_cards → grid repeat(3,1fr) gap:32px. Card: bg:#fff padding:12px 12px 40px shadow rotate(-1.5/0.8/-1deg alternating)
• grid_with_overlay → grid repeat(3,1fr) gap:0. Item: relative aspect:4/3 gradient overflow:hidden. ::after overlay opacity:0→1 on hover rgba(0,0,0,.6)
• featured_large_gallery → grid: 1 large item left (row-span:2) + 4 smaller right. Large: aspect-ratio:1. Small: aspect-ratio:4/3. All gradient bg
• before_after_gallery → grid repeat(2,1fr) gap:24px. Each card: label "ANTES"/"DESPUÉS" badge top + gradient placeholder + caption below. Paired design
• timeline_gallery → flex col gap:32px. Item: flex gap:24px. Left: year/date pill. Right: gallery placeholder 280px height + caption text
• grid_uniform → grid repeat(4,1fr) gap:12px. All items: aspect-ratio:1 gradient bg rounded-sm overflow:hidden. Hover: scale(1.03) transition

TEAM LAYOUTS:
• cards_3col_team → grid repeat(3,1fr) gap:24px. Card: avatar 80px circle initials var(--primary) mx-auto + H3 + role muted
• horizontal_info → flex col gap:0. Item: flex gap:20px align-center padding:20px 0 border-bottom. Avatar 64px + name bold + role + social
• minimal_list → grid repeat(2,1fr) gap-x:40px gap-y:20px. Item: flex gap:16px align-center. Avatar 48px + name+role inline
• founder_focus → 1 founder card full-width flex gap:48px mb:48px (avatar 120px + bio text). Below: grid repeat(3,1fr) team smaller cards
• cards_with_bio → grid repeat(2,1fr) gap:24px. Card: avatar 72px + name H3 + role + 2-line bio + skill tags (badge chips)
• minimal_avatars → flex wrap justify-center gap:32px. Each: avatar 64px circle + name fw:600 text-center below. Clean, no card borders
• department_sections → grouped by dept. Each group: dept H3 title + flex row gap:20px members. Avatar 56px + name + role. Visual separator between depts

CONTACT LAYOUTS:
• split_form_info → grid repeat(2,1fr) gap:48px. Left: info items (icon 40px circle + label + value). Right: form card shadow
• centered_card_form → card max-width:560px mx-auto padding:40px shadow rounded. Inputs: border:1.5px solid rounded padding:12px full-width
• minimal_form → max-width:640px mx-auto. Input: border:none border-bottom:2px var(--muted) padding:14px 0 bg:transparent. Focus: border-bottom var(--primary)
• multi_channel → top row: 3 contact-method cards (📞 Llamar / 💬 WhatsApp / ✉ Email) with CTA link each. Below: smaller form as additional option
• map_prominent → grid repeat(2,1fr) gap:0. Left: map placeholder (gradient bg 100% height, label "Ver en Google Maps"). Right: bg:var(--surface) padding:48px form+info
• two_step_contact → step 1: 3-4 reason buttons (Por qué nos contactas). On click JS: show step 2 form with relevant fields. Clean UX flow
• social_contact → centered layout. Top: social links row (icons + names). Middle: or divider. Bottom: email + phone prominently. Small form optional below

CARD STYLES (aplicar al selector .card):
• rounded_shadow → border-radius:16px; box-shadow:0 4px 24px rgba(0,0,0,.08); background:var(--surface); padding:28px
• flat_border → border:1.5px solid color-mix(in srgb,var(--primary) 22%,transparent); border-radius:12px; background:var(--surface); padding:28px
• glassmorphism → background:rgba(255,255,255,.07); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,.15); border-radius:16px; padding:28px
• gradient_fill → background:linear-gradient(145deg,color-mix(in srgb,var(--primary) 10%,var(--surface)),var(--surface)); border-radius:16px; padding:28px
• icon_top_colored → border-radius:16px; padding:32px 28px 28px; background:var(--surface). El icono-wrapper: width:48px;height:48px;border-radius:12px;background:var(--primary);display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:22px

Hover universal en cards: .card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(0,0,0,.13);transition:.25s}

━━━ IMÁGENES ━━━
Sin <img> externas. Usa: gradientes CSS, SVG inline simples, divs decorativos, emojis como iconos, letras en círculos de color para avatares.

━━━ CLASES SEMÁNTICAS + DATA ATTRIBUTES ━━━
• <section id="X" class="section section-X" data-section="X" data-section-label="Label">
• <nav id="navbar" data-section="navbar" data-section-label="Menú">
• <footer id="footer" data-section="footer" data-section-label="Pie de Página">
• Títulos: class="section-title" | Subtítulos: class="section-subtitle"
• CTAs: class="cta-primary" / "cta-secondary" | Cards: class="card" class="card-title" class="card-desc"
• Navbar interior: <div class="nav-links"> para los links | <a class="nav-cta"> para el botón CTA
• Grids de servicios: class="services-grid" | testimonios: class="testimonials-grid" | pricing: class="pricing-grid"
• Hero con columnas: class="hero-grid" o "hero-split" | decorativo del hero: class="hero-deco"
• Stats row: class="stats-row" | cada stat: class="stat-item"
• Before/after: class="comparison-grid" | FAQ wrapper: class="faq-container"
• CTA final card: class="cta-final-card" | formulario: class="contact-form"

CALIDAD EXIGIDA:
✓ H1 EXACTAMENTE igual al del SEO agent
✓ H2 por sección: usar sectionHeadings del SEO agent
✓ Stats: números GIGANTES clamp(3rem,7vw,6rem) en var(--primary)
✓ Testimonios: avatar CSS circular con iniciales, ★★★★★, resultado en badge
✓ FAQ: acordeón funcional .faq-btn / .faq-body
✓ Contacto: formulario estilizado + datos reales si existen
✓ Footer con copyright y links
✓ Google Fonts @import según tipografía indicada`

// ─────────────────────────────────────────────────────────────────
// SECTION LABELS — for data-section-label attributes
// ─────────────────────────────────────────────────────────────────
const SECTION_LABELS: Record<string, string> = {
  hero:         'Hero Principal',
  services:     'Servicios',
  how_it_works: 'Cómo Funciona',
  about:        'Sobre Nosotros',
  benefits:     'Beneficios',
  stats:        'Estadísticas',
  testimonials: 'Testimonios',
  gallery:      'Galería',
  team:         'Equipo',
  pricing:      'Precios',
  faq:          'Preguntas Frecuentes',
  contact_form: 'Contacto',
  contact:      'Contacto',
  cta_final:    'CTA Final',
  cta:          'CTA',
  navbar:       'Menú',
  nav:          'Menú',
  header:       'Cabecera',
  footer:       'Pie de Página',
}

/**
 * Post-processing safety net: injects data-section / data-section-label on any
 * <section>, <nav>, <header>, <footer> that has an id but is missing the attributes.
 * Claude should add them via the system prompt; this guarantees 100% coverage.
 */
function injectSectionAttributes(html: string): string {
  return html.replace(
    /<(section|nav|header|footer)(\s[^>]*?)?>/gi,
    (match, tag: string, attrs: string = '') => {
      if (/data-section\s*=/.test(attrs)) return match          // already present
      const idMatch = attrs.match(/id=["']([^"']+)["']/)
      if (!idMatch) return match                                 // no id → skip
      const rawId  = idMatch[1]
      const key    = rawId.toLowerCase().replace(/-/g, '_')
      const label  = SECTION_LABELS[key]
        ?? rawId.split(/[-_]/).map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      return `<${tag}${attrs} data-section="${rawId}" data-section-label="${label}">`
    },
  )
}

// ── Objective / tone labels ──────────────────────────────────────
const OBJECTIVE_LABELS: Record<string, string> = {
  leads:    'Captar leads (formulario de contacto / llamadas)',
  sell:     'Vender un producto o servicio online',
  bookings: 'Conseguir reservas o citas',
  download: 'Descarga de lead magnet / catálogo / ebook',
  branding: 'Presentar la empresa (branding / informativa)',
  offer:    'Promocionar una oferta o evento especial',
}

const TONE_LABELS: Record<string, string> = {
  professional: 'Profesional y confiable',
  friendly:     'Cercano y humano',
  premium:      'Premium y exclusivo',
  direct:       'Directo y vendedor (máxima conversión)',
  creative:     'Creativo y original',
}

function buildHtmlPrompt(
  surveyData: Record<string, unknown>,
  serpAnalysis: string,
  domainContent: string,
  designConcept: Record<string, unknown>,
  seoStrategy: Record<string, unknown>,
): string {
  const pageTypeLabel = PAGE_TYPE_LABELS[surveyData.pageType as string] || String(surveyData.pageType)
  const lang = surveyData.language === 'en' ? 'en' : 'es'
  const fonts = TYPOGRAPHY_FONTS[surveyData.typography as string] || TYPOGRAPHY_FONTS.modern
  const isDark = surveyData.theme === 'dark'

  const sectionsRaw = surveyData.sections as Record<string, boolean> | undefined
  const sectionsList = sectionsRaw
    ? Object.entries(sectionsRaw).filter(([, v]) => v)
        .map(([k]) => `  • ${SECTION_DESCRIPTIONS[k] || k}`)
        .join('\n')
    : '  • HERO\n  • SERVICIOS\n  • TESTIMONIOS\n  • FAQ\n  • CONTACTO'

  const bi = surveyData.businessInfo as Record<string, unknown> | null | undefined

  const clientBlock = bi
    ? `DATOS DEL NEGOCIO (usar directamente en el contenido):
Nombre: ${bi.businessName || '—'} | Sector: ${bi.sector || pageTypeLabel}
Servicios: ${(bi.services as string[] | undefined)?.join(', ') || '—'}
Teléfono: ${bi.phone || '—'} | Email: ${bi.email || '—'}
Dirección: ${bi.address || '—'} | Ciudad: ${bi.city || (surveyData.location as string) || '—'}
Descripción: ${bi.description || '—'}
Propuesta de valor: ${bi.usp || '—'}`
    : domainContent
      ? `CONTENIDO WEB DEL CLIENTE:\n${domainContent.slice(0, 2000)}`
      : `TIPO: ${pageTypeLabel}\n(genera contenido placeholder profesional del sector, no Lorem ipsum)`

  const themeVars = isDark
    ? '--bg:#0A0E17; --surface:#111827; --text:#F1F5F9; --muted:#94A3B8; --radius:12px'
    : '--bg:#FFFFFF; --surface:#F8FAFC; --text:#0F172A; --muted:#64748B; --radius:12px'

  const conceptBlock = Object.keys(designConcept).length > 0
    ? `━━━ CONCEPTO DE DISEÑO (IMPLEMENTAR FIELMENTE — cada landing debe verse única) ━━━
Hero layout: ${designConcept.heroLayout || 'split_left'}
Elemento decorativo hero: ${designConcept.heroDecorative || 'gradiente abstracto con formas geométricas'}
Personalidad visual: ${designConcept.personality || 'professional'}
Elemento diferenciador único: ${designConcept.uniqueElement || 'diseño diferenciado'}
Card style: ${designConcept.cardStyle || 'rounded_shadow'}
Color treatment: ${designConcept.colorTreatment || 'flat_clean'}
Animation style: ${designConcept.animationStyle || 'fade_up_stagger'}
Spacing rhythm: ${designConcept.spacingRhythm || 'balanced'}
Layouts de sección (implementar EXACTAMENTE según el DESIGN VOCABULARY del system):
  • services → ${designConcept.servicesLayout || 'grid_3col'}
  • how_it_works → ${designConcept.howItWorksLayout || 'steps_horizontal'}
  • benefits → ${designConcept.benefitsLayout || 'icon_grid_4col'}
  • about → ${designConcept.aboutLayout || 'split_story'}
  • testimonials → ${designConcept.testimonialsLayout || 'cards_3col'}
  • stats → ${designConcept.statsLayout || 'fullwidth_numbers_centered'}
  • gallery → ${designConcept.galleryLayout || 'masonry_3col'}
  • team → ${designConcept.teamLayout || 'cards_3col_team'}
  • pricing → ${designConcept.pricingLayout || 'cards_3col'}
  • faq → ${designConcept.faqLayout || 'accordion_single_col'}
  • contact → ${designConcept.contactLayout || 'split_form_info'}
  • cta_final → ${designConcept.ctaFinalLayout || 'centered_gradient_bg'}`
    : ''

  // ── New: strategy, trust signals, competitors ──────────────────
  const objective     = surveyData.objective as string || ''
  const tone          = surveyData.tone as string || ''
  const hasOffer      = surveyData.hasOffer as boolean || false
  const offerTypes    = (surveyData.offerTypes as string[]) || []
  const offerDetail   = surveyData.offerDetail as string || ''
  const userCtaText   = surveyData.ctaText as string || ''
  const yearsExp      = surveyData.yearsExperience as string || ''
  const clientsCount  = surveyData.clientsCount as string || ''
  const rating        = surveyData.rating as string || ''
  const certifs       = surveyData.certifications as string || ''
  const fakeStat      = surveyData.generateFakeStats as boolean || false
  const compAnalyses  = (surveyData.competitorAnalyses as Array<Record<string, unknown>>) || []

  const effectiveCta = userCtaText || (seoStrategy.ctaText as string) || 'Contactar ahora'

  const strategyBlock = objective ? `━━━ ESTRATEGIA DE CONVERSIÓN ━━━
Objetivo principal: ${OBJECTIVE_LABELS[objective] || objective}
Tono de la página: ${TONE_LABELS[tone] || tone || 'Profesional'}
CTA botón principal: "${effectiveCta}"${hasOffer ? `
OFERTA ACTIVA: ${offerTypes.join(', ')}${offerDetail ? ` — "${offerDetail}"` : ''}
  → Crear urgencia visual: badge destacado en el hero + sección CTA final con escasez o descuento` : ''}` : ''

  const trustLines: string[] = []
  if (yearsExp)      trustLines.push(`Años de experiencia: ${yearsExp}`)
  if (clientsCount)  trustLines.push(`Clientes atendidos: ${clientsCount}`)
  if (rating)        trustLines.push(`Valoración media: ${rating}`)
  if (certifs)       trustLines.push(`Certificaciones/premios: ${certifs}`)
  if (fakeStat)      trustLines.push('→ Completar sección stats con cifras plausibles y creíbles del sector si faltan datos reales')
  const trustBlock = trustLines.length
    ? `━━━ TRUST SIGNALS (usar en hero y sección stats) ━━━\n${trustLines.join('\n')}`
    : fakeStat ? `━━━ TRUST SIGNALS ━━━\n→ Generar cifras plausibles y creíbles del sector para la sección de estadísticas` : ''

  const competitorsBlock = compAnalyses.length > 0
    ? `━━━ ANÁLISIS COMPETIDORES DEL CLIENTE (crear algo superior) ━━━
${compAnalyses.map((c, i) => {
  const svcs = (c.services as string[] | undefined)?.slice(0, 3).join(', ') || '—'
  return `${i + 1}. ${c.businessName || 'Competidor'} — Servicios: ${svcs} — USP: "${c.usp || '—'}"`
}).join('\n')}
→ Diferenciarse visualmente y en el copy. Propuesta de valor más clara y diseño más impactante.`
    : ''

  const seoBlock = Object.keys(seoStrategy).length > 0
    ? `━━━ SEO STRATEGY (APLICAR EXACTAMENTE) ━━━
<title>: "${seoStrategy.metaTitle || (surveyData.keyword as string)}"
<meta description>: "${seoStrategy.metaDescription || ''}"
H1 EXACTO: "${seoStrategy.h1 || surveyData.keyword}"
CTA TEXTO: "${effectiveCta}"
Schema.org type: ${seoStrategy.schemaType || 'LocalBusiness'}
LSI Keywords (incluir naturalmente en el copy): ${(seoStrategy.lsiKeywords as string[] || []).join(', ')}
H2 sugeridos por sección: ${JSON.stringify(seoStrategy.sectionHeadings || {}, null, 0)}`
    : ''

  return `Genera una landing page completa para:

━━━ PARÁMETROS ━━━
Tipo: ${pageTypeLabel}
Keyword SEO: "${surveyData.keyword || 'servicio principal'}"${surveyData.location ? ` + "${surveyData.location}"` : ''}
Idioma: ${lang === 'en' ? 'ENGLISH — all text in English' : 'ESPAÑOL — todo en español'}
Colores: --primary:${surveyData.primaryColor||'#6366F1'}; --accent:${surveyData.secondaryColor||'#F43F5E'}; ${themeVars}
Tipografía:
  @import url('https://fonts.googleapis.com/css2?${fonts.import}&display=swap');
  headings: '${fonts.heading}' | body: '${fonts.body}'

━━━ CLIENTE ━━━
${clientBlock}

${strategyBlock}

${trustBlock}

${competitorsBlock}

━━━ COMPETIDORES / SEO ━━━
${serpAnalysis || '— usar mejores prácticas del sector'}

${seoBlock}

${conceptBlock}

━━━ SECCIONES (en este orden exacto) ━━━
${sectionsList}

━━━ REGLAS DE CONTENIDO ━━━
1. H1 DEBE ser EXACTAMENTE: "${seoStrategy.h1 || surveyData.keyword||'el servicio'}"
2. H2 de servicios: "${(seoStrategy.sectionHeadings as Record<string,string>)?.services || 'Nuestros servicios'}"
3. H2 de testimonios: "${(seoStrategy.sectionHeadings as Record<string,string>)?.testimonials || 'Lo que dicen nuestros clientes'}"
4. Testimonios: nombre real + cargo + empresa + texto específico + resultado medible (ej: "Reducimos el tiempo 3h/semana")
5. Stats: usar los trust signals reales si existen; si no, cifras plausibles del sector
6. Copy de conversión: titulares directos, beneficios concretos${objective === 'offer' || hasOffer ? ', urgencia y escasez destacadas' : ''}
7. Cada sección con ID y clases semánticas
8. FAQ con 5-6 preguntas relevantes para el sector
9. Contacto: formulario con campos nombre/email/mensaje + datos de contacto reales si los hay
10. CTA principal en botones: "${effectiveCta}"
11. Keywords LSI: ${(seoStrategy.lsiKeywords as string[] || []).join(', ')} — incluir naturalmente en subtítulos y párrafos

━━━ CRÍTICO — GENERACIÓN COMPLETA ━━━
• Genera ABSOLUTAMENTE TODAS las secciones pedidas. Nunca omitas ninguna.
• CSS conciso: shorthand, selectores agrupados con coma, sin comentarios, sin duplicados.
• HTML conciso: 1-2 frases por párrafo. Sin texto largo innecesario.
• SIEMPRE termina el documento con </footer></body></html>. Si hay presión de longitud, recorta texto de párrafos pero NUNCA dejes el HTML incompleto ni omitas secciones.

Genera el HTML ahora.`
}

// ─────────────────────────────────────────────────────────────────
// MAIN HANDLER — SSE streaming (user sees progress immediately)
// ─────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const encoder = new TextEncoder()

  // ── Auth + limits (before opening the stream, so errors return JSON) ──
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const genLimit = await checkUserLimit(user.id, 'generations', user.email ?? undefined)
  const lanLimit = await checkUserLimit(user.id, 'landings', user.email ?? undefined)
  if (!genLimit.allowed) return NextResponse.json({ error: 'Has alcanzado el límite de generaciones AI mensuales de tu plan. Actualiza a un plan superior para escalar sin límites.' }, { status: 403 })
  if (!lanLimit.allowed) return NextResponse.json({ error: 'Has alcanzado el límite de landings de tu plan. Borra una landing antigua o mejora tu plan para continuar construyendo.' }, { status: 403 })

  const body = await request.json()
  const { surveyData, platform } = body
  if (!surveyData) return NextResponse.json({ error: 'Datos requeridos' }, { status: 400 })

  const keyword      = (surveyData.keyword   as string) || ''
  const location     = (surveyData.location  as string) || ''
  const domain       = (surveyData.domain    as string) || ''
  const businessInfo = surveyData.businessInfo as Record<string, unknown> | null | undefined
  const sectionsRaw  = surveyData.sections as Record<string, boolean> | undefined
  const sectionKeys  = sectionsRaw ? Object.entries(sectionsRaw).filter(([,v]) => v).map(([k]) => k) : []

  // ── Open SSE stream ───────────────────────────────────────────
  const readableStream = new ReadableStream({
    async start(controller) {
      const send = (data: object) => {
        try { controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`)) } catch {}
      }

      try {
        // Phase 1+2: Research
        send({ type: 'progress', msg: '🔍 Analizando sector y competidores...' })
        const [serpAnalysis, domainContent] = await Promise.all([
          keyword ? analyzeSERP(keyword, location) : Promise.resolve(''),
          (!businessInfo && domain) ? scrapeDomain(domain) : Promise.resolve(''),
        ])

        // Phase 3: Design + SEO (parallel, Haiku)
        send({ type: 'progress', msg: '🎨 Diseñando concepto visual y estrategia SEO...' })
        const [designConcept, seoStrategy] = await Promise.all([
          generateDesignConcept(
            surveyData.pageType as string, businessInfo,
            (surveyData.primaryColor as string) || '#6366F1',
            (surveyData.secondaryColor as string) || '#F43F5E',
            (surveyData.theme as string) || 'dark',
            sectionKeys, serpAnalysis.slice(0, 300),
          ),
          generateSEOStrategy(keyword, location, surveyData.pageType as string, businessInfo, serpAnalysis.slice(0, 350)),
        ])

        // Phase 4: Stream HTML generation (Sonnet)
        send({ type: 'progress', msg: '✨ Generando tu landing page...' })

        const anthropicStream = client.messages.stream({
          model: 'claude-sonnet-4-6',
          max_tokens: 24000,
          system: [{ type: 'text' as const, text: HTML_DESIGNER_SYSTEM, cache_control: { type: 'ephemeral' as const } }],
          messages: [{ role: 'user', content: buildHtmlPrompt(surveyData, serpAnalysis, domainContent, designConcept, seoStrategy) }],
        })

        let fullHtml = ''
        for await (const event of anthropicStream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            fullHtml += event.delta.text
            send({ type: 'chunk', html: event.delta.text })
          }
        }
        const finalMsg = await anthropicStream.finalMessage()

        // Post-process HTML
        fullHtml = fullHtml.trim()
        const fenceMatch = fullHtml.match(/```(?:html)?\n?([\s\S]*?)```/)
        if (fenceMatch) fullHtml = fenceMatch[1].trim()
        if (!fullHtml.toLowerCase().includes('<html') && !fullHtml.toLowerCase().includes('<!doctype')) {
          throw new Error('La IA no generó HTML válido')
        }
        fullHtml = injectSectionAttributes(fullHtml)
        if (finalMsg.stop_reason === 'max_tokens') {
          if (!fullHtml.includes('</body>')) fullHtml += '\n</body>'
          if (!fullHtml.includes('</html>')) fullHtml += '\n</html>'
        }

        // Save to Supabase
        const bi = businessInfo
        const projectName = (bi?.businessName as string) || keyword || PAGE_TYPE_LABELS[surveyData.pageType as string] || 'Landing'
        const { data: landing, error: dbError } = await supabase
          .from('landing_pages')
          .insert({
            user_id: user.id,
            business_name: `${projectName}${location ? ' — ' + location : ''}`,
            survey_data: surveyData,
            html_content: fullHtml,
            status: 'draft',
            metadata: {
              keyword, location, pageType: surveyData.pageType,
              designConcept, seoStrategy, user_id: user.id,
              tokensUsed: finalMsg.usage.input_tokens + finalMsg.usage.output_tokens,
              serpUsed: !!serpAnalysis, domainAnalyzed: !!(businessInfo || domainContent),
            },
          })
          .select('id')
          .single()
        if (dbError) console.error('DB error:', dbError)

        await incrementUserUsage(user.id, 'generations')
        await incrementUserUsage(user.id, 'landings')

        send({
          type: 'done',
          id: landing?.id,
          tokens: finalMsg.usage.input_tokens + finalMsg.usage.output_tokens,
          meta: { title: projectName, cms: surveyData.cms || platform || 'elementor', keyword, location },
        })
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        console.error('Generate SSE error:', msg)
        const isOverloaded = msg.includes('overloaded') || msg.includes('529') || msg.includes('Overloaded')
        send({ type: 'error', msg: isOverloaded ? 'El servidor de IA está saturado. Inténtalo de nuevo en unos segundos.' : `Error: ${msg}`, overloaded: isOverloaded })
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
