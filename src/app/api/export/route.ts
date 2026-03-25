import Anthropic from '@anthropic-ai/sdk'
import JSZip from 'jszip'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

async function withRetry<T>(fn: () => Promise<T>, attempts = 3, baseDelayMs = 3000): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      const isOverloaded = msg.includes('overloaded') || msg.includes('529') || msg.includes('Overloaded')
      if (isOverloaded && i < attempts - 1) {
        await new Promise(r => setTimeout(r, baseDelayMs * Math.pow(2, i)))
        continue
      }
      throw err
    }
  }
  throw new Error('Max retries reached')
}

const PAGE_TYPE_LABELS: Record<string, string> = {
  local_business: 'Negocio Local', services: 'Servicios Profesionales',
  health: 'Salud y Bienestar', restaurant: 'Restaurante y Hostelería',
  ecommerce: 'eCommerce', portfolio: 'Portfolio Creativo',
  saas: 'SaaS y Tecnología', education: 'Educación y Formación',
  real_estate: 'Inmobiliaria', events: 'Eventos y Bodas',
}

// ─────────────────────────────────────────────────────────────────
// BUILD BUSINESS CONTEXT from surveyData
// ─────────────────────────────────────────────────────────────────
function buildBusinessContext(surveyData: Record<string, unknown>): string {
  const bi = surveyData.businessInfo as Record<string, unknown> | null | undefined
  const pageType = PAGE_TYPE_LABELS[surveyData.pageType as string] || String(surveyData.pageType)
  const sections = surveyData.sections as Record<string, boolean> | undefined
  const activeSections = sections ? Object.entries(sections).filter(([,v]) => v).map(([k]) => k) : []

  const businessData = bi
    ? `Negocio: ${bi.businessName || '—'} (${bi.sector || pageType})
Servicios: ${(bi.services as string[] | undefined)?.join(', ') || '—'}
Teléfono: ${bi.phone || '—'} | Email: ${bi.email || '—'}
Dirección: ${bi.address || '—'}, ${bi.city || (surveyData.location as string) || '—'}
Descripción: ${bi.description || '—'}
Propuesta de valor: ${bi.usp || '—'}`
    : `Tipo: ${pageType}
Keyword: ${surveyData.keyword || '—'}
Localización: ${surveyData.location || '—'}`

  return `${businessData}
Keyword SEO: ${surveyData.keyword || '—'} | Localización: ${surveyData.location || '—'}
Idioma: ${surveyData.language === 'en' ? 'English' : 'Español'}
Color principal: ${surveyData.primaryColor || '#6366F1'}
Color acento: ${surveyData.secondaryColor || '#F43F5E'}
Tema: ${surveyData.theme === 'dark' ? 'oscuro' : 'claro'}
Secciones: ${activeSections.join(', ')}`
}

// ─────────────────────────────────────────────────────────────────
// FETCH DESIGN CONTEXT from DB (design concept + SEO from generate phase)
// ─────────────────────────────────────────────────────────────────
async function fetchLandingContext(
  supabase: Awaited<ReturnType<typeof createClient>>,
  landingId: string | undefined,
): Promise<{ designConcept: Record<string, unknown>; seoStrategy: Record<string, unknown> }> {
  if (!landingId || landingId === 'preview') return { designConcept: {}, seoStrategy: {} }
  try {
    const { data } = await supabase
      .from('landings')
      .select('json_blueprint')
      .eq('id', landingId)
      .single()
    return {
      designConcept: (data?.json_blueprint as Record<string, unknown>)?.designConcept as Record<string, unknown> || {},
      seoStrategy: (data?.json_blueprint as Record<string, unknown>)?.seoStrategy as Record<string, unknown> || {},
    }
  } catch { return { designConcept: {}, seoStrategy: {} } }
}

// ─────────────────────────────────────────────────────────────────
// BUILD DESIGN CONCEPT BLOCK (shared across all CMS agents)
// ─────────────────────────────────────────────────────────────────
function buildDesignConceptBlock(
  designConcept: Record<string, unknown>,
  seoStrategy: Record<string, unknown>,
): string {
  const hasConcept = Object.keys(designConcept).length > 0
  const hasSEO = Object.keys(seoStrategy).length > 0

  const conceptStr = hasConcept
    ? `━━━ DISEÑO DEL PREVIEW (reproducir fielmente — el cliente ya vio este diseño) ━━━
Hero layout: ${designConcept.heroLayout || 'split_left'}
Elemento decorativo hero: ${designConcept.heroDecorative || 'gradiente abstracto'}
Personalidad visual: ${designConcept.personality || 'professional'}
Elemento diferenciador único: ${designConcept.uniqueElement || '—'}
Layouts por sección: ${JSON.stringify(designConcept.sectionLayouts || {})}`
    : ''

  const seoStr = hasSEO
    ? `━━━ SEO (aplicar en contenido) ━━━
H1 EXACTO: "${seoStrategy.h1 || '—'}"
CTA: "${seoStrategy.ctaText || 'Contactar ahora'}"
Schema: ${seoStrategy.schemaType || 'LocalBusiness'}
Keywords LSI: ${(seoStrategy.lsiKeywords as string[] || []).join(', ')}
H2 secciones: ${JSON.stringify(seoStrategy.sectionHeadings || {})}`
    : ''

  return [conceptStr, seoStr].filter(Boolean).join('\n\n')
}

// ─────────────────────────────────────────────────────────────────
// ODOO HTML SNIPPET BUILDER HELPERS
// ─────────────────────────────────────────────────────────────────

/** Generate the full CSS for an Odoo landing (server-side, no AI needed) */
function buildOdooCss(
  primary: string, accent: string, bg: string, surface: string,
  textColor: string, mutedColor: string, borderColor: string, isDark: boolean,
): string {
  return `:root{--lf-primary:${primary};--lf-accent:${accent};--lf-bg:${bg};--lf-surface:${surface};--lf-text:${textColor};--lf-muted:${mutedColor};--lf-border:${borderColor};}
body.o_website_preview .lf-section,section.lf-section{padding:88px 0;background:var(--lf-bg);color:var(--lf-text);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}
.lf-section-alt{background:var(--lf-surface);}
.lf-badge{display:inline-block;background:${primary}18;color:${primary};border:1px solid ${primary}30;padding:6px 16px;border-radius:100px;font-size:13px;font-weight:700;margin-bottom:20px;}
.lf-heading{font-size:clamp(36px,5vw,68px);font-weight:800;color:var(--lf-text);line-height:1.1;margin-bottom:20px;}
.lf-subheading{font-size:clamp(22px,3vw,40px);font-weight:700;color:var(--lf-text);margin-bottom:16px;}
.lf-lead{font-size:19px;line-height:1.75;color:var(--lf-muted);margin-bottom:32px;}
.lf-btn-primary{background:${primary};color:${isDark?'#0A0E17':'#fff'};padding:15px 38px;border-radius:10px;text-decoration:none;font-weight:800;font-size:16px;display:inline-block;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s;}
.lf-btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px ${primary}45;color:${isDark?'#0A0E17':'#fff'};text-decoration:none;}
.lf-btn-outline{background:transparent;color:${primary};padding:15px 38px;border-radius:10px;text-decoration:none;font-weight:800;font-size:16px;display:inline-block;border:2px solid ${primary};cursor:pointer;transition:all .2s;}
.lf-card{background:var(--lf-surface);border-radius:16px;padding:30px;border:1px solid var(--lf-border);height:100%;transition:transform .2s,box-shadow .2s;}
.lf-card:hover{transform:translateY(-5px);box-shadow:0 20px 50px ${primary}18;}
.lf-card-icon{width:56px;height:56px;background:${primary}15;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:26px;}
.lf-stat-number{font-size:clamp(52px,6vw,80px);font-weight:800;color:${primary};line-height:1;margin:0;}
.lf-stat-label{font-size:15px;color:var(--lf-muted);margin-top:10px;font-weight:600;}
.lf-avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,${primary},${accent});display:flex;align-items:center;justify-content:center;color:${isDark?'#0A0E17':'#fff'};font-weight:800;font-size:20px;margin-bottom:16px;}
.lf-stars{color:#FBBF24;font-size:20px;margin-bottom:14px;}
.lf-result{background:${primary}12;border:1px solid ${primary}25;color:${primary};border-radius:8px;padding:9px 14px;font-size:13px;font-weight:700;margin-top:14px;display:inline-block;}
.lf-hero-deco{border-radius:20px;height:420px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,${primary}22,${accent}18);position:relative;overflow:hidden;}
.lf-hero-deco::before{content:'';position:absolute;width:300px;height:300px;border-radius:50%;background:${primary}12;top:-50px;right:-50px;}
.lf-hero-deco::after{content:'';position:absolute;width:200px;height:200px;border-radius:50%;background:${accent}10;bottom:-30px;left:-30px;}
.lf-faq-question{padding:20px 0;font-weight:700;cursor:pointer;color:var(--lf-text);display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--lf-border);font-size:16px;}
.lf-faq-icon{font-size:22px;color:${primary};transition:transform .25s;}
.lf-faq-answer{max-height:0;overflow:hidden;transition:max-height .35s ease;color:var(--lf-muted);font-size:16px;line-height:1.7;}
.lf-faq-answer.open{max-height:300px;padding-bottom:20px;}
.lf-faq-question.open .lf-faq-icon{transform:rotate(45deg);}
.lf-form .form-control{background:var(--lf-surface);border:1.5px solid var(--lf-border);color:var(--lf-text);border-radius:10px;padding:12px 16px;font-size:15px;}
.lf-form .form-control:focus{border-color:${primary};box-shadow:0 0 0 3px ${primary}20;}
._lfa{opacity:0;transform:translateY(30px);transition:.75s cubic-bezier(.16,1,.3,1);}._lfa._lfv{opacity:1;transform:none;}._lfas{transform:scale(.92);}
@media(max-width:768px){.lf-heading{font-size:clamp(28px,7vw,44px);}.row>[class*=col-lg]{margin-bottom:24px;}}`
}

const ODOO_SCRIPT = `<script>
(function(){
var o=new IntersectionObserver(function(e){e.forEach(function(i){if(i.isIntersecting){i.target.classList.add('_lfv');o.unobserve(i.target);}});},{threshold:.1});
document.querySelectorAll('._lfa').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<window.innerHeight+50){el.classList.add('_lfv');}else{o.observe(el);}});
document.querySelectorAll('.lf-faq-question').forEach(function(q){q.onclick=function(){var a=q.nextElementSibling;var open=a.classList.contains('open');document.querySelectorAll('.lf-faq-answer,.lf-faq-question').forEach(function(x){x.classList.remove('open');});if(!open){a.classList.add('open');q.classList.add('open');}};});
})();
</script>`

/** Convert HTML to XHTML so it can be embedded inside XML (Odoo arch field) */
function toXhtml(html: string): string {
  let result = html

  // 1. Convert HTML named entities to Unicode (not valid XML entities)
  const HTML_ENTITIES: Record<string, string> = {
    '&nbsp;': '\u00A0', '&copy;': '©', '&reg;': '®', '&trade;': '™',
    '&mdash;': '—',     '&ndash;': '–', '&hellip;': '…', '&bull;': '•',
    '&laquo;': '«',     '&raquo;': '»', '&ldquo;': '\u201C', '&rdquo;': '\u201D',
    '&lsquo;': '\u2018','&rsquo;': '\u2019', '&middot;': '·', '&times;': '×',
    '&divide;': '÷',    '&euro;': '€', '&pound;': '£', '&yen;': '¥',
    '&iexcl;': '¡',     '&iquest;': '¿', '&acute;': '´', '&cedil;': '¸',
    '&szlig;': 'ß',     '&ntilde;': 'ñ', '&Ntilde;': 'Ñ',
  }
  for (const [entity, char] of Object.entries(HTML_ENTITIES)) {
    result = result.replaceAll(entity, char)
  }

  // 2. Self-close void elements
  result = result.replace(
    /<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)(\s[^>]*[^/])?\s*>/gi,
    (_, tag, attrs = '') => `<${tag}${attrs}/>`,
  )

  // 3. Wrap <script> and <style> content in CDATA so special chars don't break XML
  result = result.replace(
    /<(script|style)([^>]*)>([\s\S]*?)<\/\1>/gi,
    (_, tag, attrs, body) => {
      const trimmed = body.trim()
      if (!trimmed || trimmed.includes('CDATA')) return `<${tag}${attrs}>${body}</${tag}>`
      const commentChar = tag === 'script' ? '//' : '/*'
      const endChar    = tag === 'script' ? '//' : '*/'
      return `<${tag}${attrs}>${commentChar}<![CDATA[\n${trimmed}\n${endChar}]]></${tag}>`
    },
  )

  // 4. Escape bare ampersands
  result = result.replace(/&(?!(amp|lt|gt|apos|quot|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;')

  return result
}

/** Build all files for a deployable Odoo 17 module (.zip) */
function buildOdooModuleFiles(
  sectionsHtml: string,
  css: string,
  businessName: string,
): { moduleName: string; manifestPy: string; initPy: string; viewsXml: string } {
  const slug = (businessName || 'landing')
    .toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 30) || 'landing'
  const moduleName = `landforge_${slug}`
  const pageUrl    = `/${slug.replace(/_/g, '-')}`
  const xhtml      = toXhtml(sectionsHtml + '\n' + ODOO_SCRIPT)

  const manifestPy = `# -*- coding: utf-8 -*-
{
    'name': 'LandForge Landing — ${businessName}',
    'version': '17.0.1.0.0',
    'summary': 'Landing page profesional generada por LandForge AI',
    'category': 'Website',
    'author': 'LandForge',
    'depends': ['website'],
    'data': ['views/landing_page.xml'],
    'installable': True,
    'auto_install': False,
    'application': False,
    'license': 'LGPL-3',
}
`

  const initPy = '# -*- coding: utf-8 -*-\n'

  const viewsXml = `<?xml version="1.0" encoding="utf-8"?>
<odoo>
  <data noupdate="0">

    <template id="lf_landing_page" name="LandForge Landing — ${businessName}">
      <t t-call="website.layout">
        <div id="wrap" class="oe_structure oe_empty">
          <style><![CDATA[
${css}
]]></style>
${xhtml}
        </div>
      </t>
    </template>

    <record id="website_page_lf_landing" model="website.page">
      <field name="name">${businessName} — Landing</field>
      <field name="view_id" ref="lf_landing_page"/>
      <field name="url">${pageUrl}</field>
      <field name="website_indexed">True</field>
      <field name="is_published">True</field>
    </record>

  </data>
</odoo>
`

  return { moduleName, manifestPy, initPy, viewsXml }
}

// ─────────────────────────────────────────────────────────────────
// SHOPIFY MODULE BUILDER HELPERS
// ─────────────────────────────────────────────────────────────────

/**
 * Predefined settings IDs shared between the section prompt and JSON template builder.
 * The AI is instructed to use EXACTLY these IDs. This keeps the Liquid and JSON in sync.
 */
const SHOPIFY_SETTINGS_IDS = {
  // Colors
  bg_color: 'bg_color', surface_color: 'surface_color',
  primary_color: 'primary_color', accent_color: 'accent_color',
  text_color: 'text_color', muted_color: 'muted_color',
  // Hero
  badge_text: 'badge_text', headline: 'headline', subheadline: 'subheadline',
  cta_text: 'cta_text', cta_url: 'cta_url', cta2_text: 'cta2_text',
  // Section titles
  services_title: 'services_title', stats_title: 'stats_title',
  testimonials_title: 'testimonials_title', faq_title: 'faq_title',
  contact_title: 'contact_title', contact_subtitle: 'contact_subtitle',
} as const


// ─────────────────────────────────────────────────────────────────
// ELEMENTOR AGENT (Sonnet)
// ─────────────────────────────────────────────────────────────────
async function generateElementor(
  surveyData: Record<string, unknown>,
  designConcept: Record<string, unknown>,
  seoStrategy: Record<string, unknown>,
): Promise<string> {
  const ctx = buildBusinessContext(surveyData)
  const designBlock = buildDesignConceptBlock(designConcept, seoStrategy)
  const isDark = surveyData.theme === 'dark'
  const primary = (surveyData.primaryColor as string) || '#6366F1'
  const accent = (surveyData.secondaryColor as string) || '#F43F5E'
  const bg = isDark ? '#0A0E17' : '#FFFFFF'
  const surface = isDark ? '#111827' : '#F8FAFC'
  const textColor = isDark ? '#F1F5F9' : '#0F172A'
  const mutedColor = isDark ? '#94A3B8' : '#64748B'

  const bi = surveyData.businessInfo as Record<string, unknown> | null | undefined
  const sections = surveyData.sections as Record<string, boolean> | undefined
  const activeSections = sections ? Object.entries(sections).filter(([,v]) => v).map(([k]) => k) : ['hero','services','testimonials','contact_form']

  // Hero layout mapping to Elementor column structures
  const heroLayout = (designConcept.heroLayout as string) || 'split_left'
  const heroIsFullwidth = heroLayout === 'fullscreen' || heroLayout === 'centered_bold'
  const heroCol1 = heroIsFullwidth ? 100 : 60
  const heroCol2 = heroIsFullwidth ? 0 : 40

  const stream = client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 10000,
    messages: [{
      role: 'user',
      content: `Eres un experto en Elementor Pro. Genera un template JSON de Elementor completo, importable y con diseño de agencia premium para esta landing page.

DATOS DEL NEGOCIO:
${ctx}

${designBlock}

ESTRUCTURA ELEMENTOR REQUERIDA:
{
  "version": "0.4",
  "title": "NOMBRE DEL NEGOCIO",
  "type": "page",
  "content": [ ...secciones... ]
}

CADA SECCIÓN tiene esta estructura:
{
  "id": "ID8CHARS",
  "elType": "section",
  "settings": {
    "background_color": "${bg}",
    "padding": {"unit":"px","top":"80","right":"24","bottom":"80","left":"24","isLinked":false},
    "custom_css": ""
  },
  "elements": [{
    "id": "ID8CHARS",
    "elType": "column",
    "settings": {"_column_size": 100},
    "elements": [ WIDGETS ]
  }]
}

TIPOS DE WIDGETS DISPONIBLES:

1. Heading:
{"id":"ID8","elType":"widget","widgetType":"heading","settings":{"title":"Texto","header_size":"h1","align":"left","title_color":"${textColor}","typography_font_size":{"unit":"px","size":56},"typography_font_weight":"800","_animation":"fadeInUp","_animation_delay":0}}

2. Text Editor:
{"id":"ID8","elType":"widget","widgetType":"text-editor","settings":{"editor":"<p>Texto</p>","text_color":"${mutedColor}","typography_font_size":{"unit":"px","size":18},"_animation":"fadeInUp","_animation_delay":200}}

3. Button (CTA):
{"id":"ID8","elType":"widget","widgetType":"button","settings":{"text":"${seoStrategy.ctaText || 'Contactar ahora'}","link":{"url":"#contacto","is_external":false},"background_color":"${primary}","button_text_color":"${isDark ? '#0A0E17' : '#FFFFFF'}","border_radius":{"unit":"px","top":10,"right":10,"bottom":10,"left":10,"isLinked":true},"typography_font_weight":"800","typography_font_size":{"unit":"px","size":16},"_animation":"fadeInUp","_animation_delay":400}}

4. Icon Box (servicios/beneficios):
{"id":"ID8","elType":"widget","widgetType":"icon-box","settings":{"title_text":"Servicio","description_text":"Descripción del servicio con beneficio concreto","icon":{"value":"fas fa-check-circle","library":"fa-solid"},"title_color":"${textColor}","description_color":"${mutedColor}","primary_color":"${primary}","icon_size":{"unit":"px","size":40},"_animation":"fadeInUp","_animation_delay":100}}

5. Counter (estadísticas):
{"id":"ID8","elType":"widget","widgetType":"counter","settings":{"starting_number":0,"ending_number":500,"suffix":"+","title":"Clientes satisfechos","number_color":"${primary}","title_color":"${mutedColor}","number_size":{"unit":"px","size":64},"_animation":"zoomIn","_animation_delay":200}}

6. Testimonial:
{"id":"ID8","elType":"widget","widgetType":"testimonial","settings":{"testimonial_content":"Texto específico del testimonio con resultado medible","testimonial_name":"Nombre Apellido","testimonial_job":"Cargo — Empresa","content_color":"${mutedColor}","name_color":"${textColor}","typography_font_size":{"unit":"px","size":16},"_animation":"fadeInUp"}}

7. Accordion (FAQ):
{"id":"ID8","elType":"widget","widgetType":"accordion","settings":{"tabs":[{"tab_title":"¿Pregunta frecuente?","tab_content":"Respuesta completa y útil"}],"title_color":"${textColor}","tab_active_color":"${primary}","border_color":"${isDark ? '#1E293B' : '#E2E8F0'}","_animation":"fadeInUp"}}

8. Form (contacto):
{"id":"ID8","elType":"widget","widgetType":"form","settings":{"form_name":"Contacto LandForge","fields":[{"field_type":"text","field_label":"Nombre completo","placeholder":"Tu nombre","required":"true"},{"field_type":"email","field_label":"Email","placeholder":"tu@email.com","required":"true"},{"field_type":"tel","field_label":"Teléfono","placeholder":"+34 600 000 000"},{"field_type":"textarea","field_label":"Mensaje","placeholder":"¿En qué podemos ayudarte?","required":"true","rows":4}],"submit_actions":["email"],"button_text":"${seoStrategy.ctaText || 'Enviar mensaje'}","button_background_color":"${primary}","button_text_color":"${isDark ? '#0A0E17' : '#FFFFFF'}","button_border_radius":{"unit":"px","top":10,"right":10,"bottom":10,"left":10,"isLinked":true},"_animation":"fadeInUp"}}

9. HTML Widget (para elementos custom como badges, stats custom, decorativos):
{"id":"ID8","elType":"widget","widgetType":"html","settings":{"html":"<div style='...'>CONTENIDO</div>","_animation":"fadeInUp"}}

SECCIONES A GENERAR: ${activeSections.join(', ')}

REGLAS CRÍTICAS DE IMPLEMENTACIÓN:
1. Cada "id" = exactamente 8 caracteres alfanuméricos únicos (genera IDs como "a3b9c2d1")
2. H1 del hero EXACTAMENTE: "${seoStrategy.h1 || (surveyData.keyword as string) || 'servicio'}"
3. Hero layout: ${heroLayout} — ${heroIsFullwidth ? 'una sola columna centrada, hero de ancho completo' : `sección con 2 columnas (col1=${heroCol1}%, col2=${heroCol2}%)`}
4. Para layouts 2-3 columnas: crea múltiples objetos "column" dentro del "section.elements" (NO dentro de la misma columna)
5. Servicios: crear un icon-box por cada servicio con icon FontAwesome relevante al sector (mínimo 3)
6. Stats: crear 4 counters con cifras reales del sector en sección de 2 columnas (2+2)
7. Testimonios: crear 3 testimonials en 3 columnas con resultado medible en cada uno
8. FAQ: 5-6 preguntas del sector con respuestas útiles y completas
9. Contact: widget form con los 4 campos indicados
10. Secciones alternadas: sección 1=bg ${bg}, sección 2=surface ${surface}, sección 3=bg ${bg}, etc.
11. TODAS las animaciones: "_animation": "fadeInUp" (widgets de texto), "zoomIn" (stats/cards), "slideInLeft"/"slideInRight" (hero split)
12. Hero decorativo: crear con widgetType "html" un div con CSS gradient inline que reproduzca: ${designConcept.heroDecorative || `gradiente diagonal de ${primary} a ${accent}`}
13. Personalidad ${designConcept.personality || 'professional'}: ajustar typography_font_size (premium=más grande, playful=más variado, corporate=más conservador)

RESPONDE SOLO CON EL JSON VÁLIDO DE ELEMENTOR. Sin texto, sin markdown, sin explicaciones.

Genera para: ${bi?.businessName || surveyData.keyword || 'este negocio'}`,
    }],
  })
  const message = await stream.finalMessage()

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('IA no devolvió texto')
  let json = content.text.trim()
  const fenceMatch = json.match(/```(?:json)?\n?([\s\S]*?)```/)
  if (fenceMatch) json = fenceMatch[1].trim()
  // Validate JSON
  JSON.parse(json)
  return json
}

// ─────────────────────────────────────────────────────────────────
// GUTENBERG AGENT (Sonnet)
// ─────────────────────────────────────────────────────────────────
async function generateGutenberg(
  surveyData: Record<string, unknown>,
  designConcept: Record<string, unknown>,
  seoStrategy: Record<string, unknown>,
): Promise<string> {
  const ctx = buildBusinessContext(surveyData)
  const designBlock = buildDesignConceptBlock(designConcept, seoStrategy)
  const isDark = surveyData.theme === 'dark'
  const primary = (surveyData.primaryColor as string) || '#6366F1'
  const accent = (surveyData.secondaryColor as string) || '#F43F5E'
  const bg = isDark ? '#0A0E17' : '#FFFFFF'
  const surface = isDark ? '#111827' : '#F8FAFC'
  const textColor = isDark ? '#F1F5F9' : '#0F172A'
  const mutedColor = isDark ? '#94A3B8' : '#64748B'
  const borderColor = isDark ? '#1E293B' : '#E2E8F0'

  const sections = surveyData.sections as Record<string, boolean> | undefined
  const activeSections = sections ? Object.entries(sections).filter(([,v]) => v).map(([k]) => k) : ['hero','services','testimonials','contact_form']
  const bi = surveyData.businessInfo as Record<string, unknown> | null | undefined

  const heroLayout = (designConcept.heroLayout as string) || 'split_left'
  const heroIsFullwidth = heroLayout === 'fullscreen' || heroLayout === 'centered_bold'

  const stream = client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 10000,
    messages: [{
      role: 'user',
      content: `Eres un experto en WordPress Gutenberg Block Editor. Genera bloques Gutenberg para pegar en el Code Editor de WordPress. Los bloques deben ser editables visualmente en el editor de bloques.

DATOS:
${ctx}

${designBlock}

━━━ REGLA FUNDAMENTAL ━━━
Usa SIEMPRE bloques nativos de WordPress para texto, títulos y botones.
Los bloques nativos son editables con clic directo en el editor visual.
Solo usa wp:html para CSS global, grids de cards, stats, forms y scripts.

━━━ SINTAXIS EXACTA DE BLOQUES NATIVOS ━━━

HEADING (h1/h2/h3 — editables con clic):
<!-- wp:heading {"level":1,"style":{"typography":{"fontStyle":"normal","fontWeight":"800","fontSize":"56px"},"color":{"text":"${textColor}"},"spacing":{"margin":{"bottom":"20px"}}}} -->
<h1 class="wp-block-heading has-text-color" style="color:${textColor};font-size:56px;font-weight:800;line-height:1.1;margin-bottom:20px">TÍTULO AQUÍ</h1>
<!-- /wp:heading -->

PARAGRAPH (editable con clic):
<!-- wp:paragraph {"style":{"typography":{"fontSize":"18px","lineHeight":"1.7"},"color":{"text":"${mutedColor}"},"spacing":{"margin":{"bottom":"28px"}}}} -->
<p class="has-text-color" style="color:${mutedColor};font-size:18px;line-height:1.7;margin-bottom:28px">TEXTO AQUÍ</p>
<!-- /wp:paragraph -->

BUTTON (editable con clic):
<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"8px"}}}} -->
<div class="wp-block-buttons">
<!-- wp:button {"style":{"color":{"background":"${primary}","text":"${isDark?'#0A0E17':'#ffffff'}"},"border":{"radius":"10px"},"spacing":{"padding":{"top":"14px","bottom":"14px","left":"36px","right":"36px"}}},"className":"lf-cta"} -->
<div class="wp-block-button lf-cta"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="#contacto" style="background-color:${primary};color:${isDark?'#0A0E17':'#ffffff'};border-radius:10px;padding:14px 36px;font-weight:800;font-size:16px">CTA TEXTO</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->

GROUP (contenedor de sección — define fondo y padding):
<!-- wp:group {"tagName":"section","style":{"color":{"background":"${bg}"},"spacing":{"padding":{"top":"88px","bottom":"88px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1140px"}} -->
<div class="wp-block-group has-background" style="background-color:${bg};padding-top:88px;padding-bottom:88px;padding-left:24px;padding-right:24px">
CONTENIDO DE LA SECCIÓN
</div>
<!-- /wp:group -->

COLUMNS (layout de columnas — editable visualmente):
<!-- wp:columns {"style":{"spacing":{"blockGap":"24px"}}} -->
<div class="wp-block-columns">
<!-- wp:column -->
<div class="wp-block-column">CONTENIDO COL 1</div>
<!-- /wp:column -->
<!-- wp:column -->
<div class="wp-block-column">CONTENIDO COL 2</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->

SPACER:
<!-- wp:spacer {"height":"40px"} --><div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div><!-- /wp:spacer -->

HTML CUSTOM (solo para cards, stats, forms, scripts — NO para textos simples):
<!-- wp:html -->
<div class="...">...</div>
<!-- /wp:html -->

━━━ CSS GLOBAL (primer bloque wp:html) ━━━
Incluye esto exactamente como primer bloque:
<!-- wp:html -->
<style>
:root{--lf-primary:${primary};--lf-accent:${accent};--lf-bg:${bg};--lf-surface:${surface};--lf-text:${textColor};--lf-muted:${mutedColor};--lf-border:${borderColor};}
.lf-badge{display:inline-block;background:${primary}18;color:${primary};border:1px solid ${primary}30;padding:6px 16px;border-radius:100px;font-size:13px;font-weight:700;margin-bottom:20px;}
.lf-card{background:var(--lf-surface);border:1px solid var(--lf-border);border-radius:16px;padding:28px;height:100%;transition:transform .2s,box-shadow .2s;}
.lf-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px ${primary}20;}
.lf-card-icon{width:52px;height:52px;background:${primary}15;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:26px;}
.lf-card-title{font-size:18px;font-weight:700;color:var(--lf-text);margin:0 0 10px;}
.lf-card-body{font-size:15px;color:var(--lf-muted);line-height:1.6;}
.lf-stat-number{font-size:clamp(48px,6vw,72px);font-weight:800;color:${primary};line-height:1;margin:0;}
.lf-stat-label{font-size:14px;color:var(--lf-muted);margin-top:8px;font-weight:600;}
.lf-stars{color:#FBBF24;font-size:18px;margin-bottom:12px;}
.lf-result{background:${primary}12;border:1px solid ${primary}25;color:${primary};border-radius:8px;padding:8px 14px;font-size:13px;font-weight:700;margin-top:14px;display:inline-block;}
.lf-avatar{width:48px;height:48px;border-radius:50%;background:${primary};display:flex;align-items:center;justify-content:center;color:${isDark?'#0A0E17':'#fff'};font-weight:800;font-size:18px;margin-bottom:14px;}
.lf-faq-btn{width:100%;text-align:left;padding:20px 0;font-weight:700;font-size:16px;color:var(--lf-text);cursor:pointer;background:none;border:none;border-bottom:1px solid var(--lf-border);display:flex;justify-content:space-between;}
.lf-faq-btn::after{content:'+';font-size:22px;color:${primary};transition:transform .2s;}
.lf-faq-btn.open::after{transform:rotate(45deg);}
.lf-faq-body{max-height:0;overflow:hidden;transition:max-height .35s ease;color:var(--lf-muted);font-size:15px;line-height:1.7;}
.lf-faq-body.open{max-height:300px;padding-bottom:20px;}
.lf-form input,.lf-form textarea{width:100%;padding:13px 16px;border-radius:10px;border:1.5px solid var(--lf-border);background:var(--lf-surface);color:var(--lf-text);font-size:15px;margin-bottom:14px;box-sizing:border-box;}
.lf-form input:focus,.lf-form textarea:focus{outline:none;border-color:${primary};}
.lf-form textarea{height:120px;}
.lf-submit{background:${primary};color:${isDark?'#0A0E17':'#fff'};padding:14px 36px;border-radius:10px;border:none;font-weight:800;font-size:16px;cursor:pointer;width:100%;}
._lfa{opacity:0;transform:translateY(28px);transition:.7s cubic-bezier(.16,1,.3,1);}._lfa._lfv{opacity:1;transform:none;}._lfas{transform:scale(.92);}
@media(max-width:768px){.wp-block-columns{flex-wrap:wrap !important;}.wp-block-column{flex-basis:100% !important;min-width:100% !important;}}
</style>
<!-- /wp:html -->

━━━ ESTRUCTURA REQUERIDA POR SECCIÓN ━━━

HERO (${heroLayout}):
- wp:group (sección, bg=${bg}, padding 100px 24px)
  - wp:html (<span class="lf-badge">BADGE TEXTO</span>)
  - ${heroIsFullwidth
    ? `wp:heading level=1 centrado, wp:paragraph centrado, wp:buttons centrado`
    : `wp:columns (2 cols) → col1: wp:heading h1 + wp:paragraph + wp:buttons | col2: wp:html decorativo gradient`}

SERVICES:
- wp:group (sección alt, bg=${surface})
  - wp:heading level=2 (título sección)
  - wp:paragraph (subtítulo)
  - wp:html (<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px"> con 3+ .lf-card</div>)

STATS:
- wp:group (sección, bg=${bg})
  - wp:html (grid 4 columnas con .lf-stat-number y .lf-stat-label)

TESTIMONIALS:
- wp:group (sección alt, bg=${surface})
  - wp:heading level=2
  - wp:html (grid 3 .lf-testimonial cards con .lf-avatar, .lf-stars, texto, .lf-result)

FAQ:
- wp:group (sección, bg=${bg})
  - wp:heading level=2
  - wp:html (divs .lf-faq-btn + .lf-faq-body por cada pregunta)

CONTACT:
- wp:group (sección, bg=${isDark ? surface : '#F0FDF4'})
  - wp:columns → col1: wp:heading + wp:paragraph + datos contacto (wp:html) | col2: wp:html (form .lf-form)

SCRIPT (último bloque wp:html):
<!-- wp:html -->
<script>
(function(){
var o=new IntersectionObserver(function(e){e.forEach(function(i){if(i.isIntersecting){i.target.classList.add('_lfv');o.unobserve(i.target);}});},{threshold:.1});
document.querySelectorAll('._lfa').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<window.innerHeight+50){el.classList.add('_lfv');}else{o.observe(el);}});
document.querySelectorAll('.lf-faq-btn').forEach(function(b){b.onclick=function(){b.classList.toggle('open');b.nextElementSibling.classList.toggle('open');};});
})();
</script>
<!-- /wp:html -->

━━━ INSTRUCCIONES ━━━
1. H1 EXACTAMENTE: "${seoStrategy.h1 || (surveyData.keyword as string) || 'servicio'}"
2. CTA: "${seoStrategy.ctaText || 'Contactar ahora'}"
3. Secciones a generar: ${activeSections.join(', ')}
4. Usa wp:heading/wp:paragraph/wp:buttons para TODO el texto que deba ser editable con clic
5. Contenido real del negocio en todos los textos (no placeholders)
6. Secciones alternan bg=${bg} y surface=${surface}
7. Añade class="_lfa" a grupos de sección y "_lfa _lfas" a cards

RESPONDE SOLO CON LOS BLOQUES. Sin markdown, sin explicaciones.

Genera para: ${bi?.businessName || surveyData.keyword || 'este negocio'}`,
    }],
  })
  const message = await stream.finalMessage()

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('IA no devolvió texto')
  let blocks = content.text.trim()
  const fenceMatch = blocks.match(/```(?:html)?\n?([\s\S]*?)```/)
  if (fenceMatch) blocks = fenceMatch[1].trim()
  return blocks
}

// ─────────────────────────────────────────────────────────────────
// SHOPIFY AGENT (Sonnet)
// ─────────────────────────────────────────────────────────────────
async function generateShopify(
  surveyData: Record<string, unknown>,
  designConcept: Record<string, unknown>,
  seoStrategy: Record<string, unknown>,
): Promise<string> {
  const ctx = buildBusinessContext(surveyData)
  const designBlock = buildDesignConceptBlock(designConcept, seoStrategy)
  const isDark = surveyData.theme === 'dark'
  const primary = (surveyData.primaryColor as string) || '#6366F1'
  const accent = (surveyData.secondaryColor as string) || '#F43F5E'
  const bg = isDark ? '#0A0E17' : '#FFFFFF'
  const surface = isDark ? '#111827' : '#F8FAFC'
  const textColor = isDark ? '#F1F5F9' : '#0F172A'
  const mutedColor = isDark ? '#94A3B8' : '#64748B'

  const sections = surveyData.sections as Record<string, boolean> | undefined
  const activeSections = sections ? Object.entries(sections).filter(([,v]) => v).map(([k]) => k) : ['hero','services','testimonials','contact_form']
  const bi = surveyData.businessInfo as Record<string, unknown> | null | undefined

  const heroLayout = (designConcept.heroLayout as string) || 'split_left'
  const heroIsFullwidth = heroLayout === 'fullscreen' || heroLayout === 'centered_bold'

  // Exact IDs the template builder uses — keep in sync with buildShopifyJsonTemplate
  const IDS = SHOPIFY_SETTINGS_IDS

  const stream = client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 10000,
    messages: [{
      role: 'user',
      content: `Eres un experto en Shopify OS 2.0 (Online Store 2.0). Genera EXACTAMENTE un archivo de sección .liquid con diseño premium de agencia, completamente editable desde el Theme Customizer.

NEGOCIO:
${ctx}

${designBlock}

═══════════════════════════════════════════════════════════
REGLA CRÍTICA — SETTINGS IDs EXACTOS (NO INVENTES OTROS):
═══════════════════════════════════════════════════════════
Colores : ${IDS.bg_color}, ${IDS.surface_color}, ${IDS.primary_color}, ${IDS.accent_color}, ${IDS.text_color}, ${IDS.muted_color}
Hero    : ${IDS.badge_text}, ${IDS.headline}, ${IDS.subheadline}, ${IDS.cta_text}, ${IDS.cta_url}, ${IDS.cta2_text}
Títulos : ${IDS.services_title}, ${IDS.stats_title}, ${IDS.testimonials_title}, ${IDS.faq_title}, ${IDS.contact_title}, ${IDS.contact_subtitle}

Block types y sus fields:
  service     → icon (text), title (text), description (richtext)
  stat        → number (text), suffix (text), label (text)
  testimonial → quote (text), name (text), role (text), result (text)
  faq_item    → question (text), answer (richtext)

═══════════════════════════════════════════════════════════
ESTRUCTURA DEL ARCHIVO (en este orden):
═══════════════════════════════════════════════════════════
1. <style> — TODO el CSS (no inline styles)
2. HTML — todas las secciones con variables Liquid
3. <script> — animaciones Intersection Observer
4. {% schema %} — AL FINAL

═══════════════════════════════════════════════════════════
CSS BASE que DEBES incluir en <style>:
═══════════════════════════════════════════════════════════
.lf-landing{font-family:-apple-system,sans-serif;background:{{ section.settings.${IDS.bg_color} }};color:{{ section.settings.${IDS.text_color} }};}
.lf-sec{padding:88px 24px;}
.lf-sec--alt{background:{{ section.settings.${IDS.surface_color} }};}
.lf-wrap{max-width:1140px;margin:0 auto;}
.lf-badge{display:inline-block;padding:6px 16px;border-radius:100px;font-size:13px;font-weight:700;margin-bottom:20px;background:{{ section.settings.${IDS.primary_color} }}22;color:{{ section.settings.${IDS.primary_color} }};border:1px solid {{ section.settings.${IDS.primary_color} }}44;}
.lf-h1{font-size:clamp(32px,4.5vw,62px);font-weight:800;line-height:1.1;margin:0 0 20px;color:{{ section.settings.${IDS.text_color} }};}
.lf-h2{font-size:clamp(26px,3vw,42px);font-weight:800;color:{{ section.settings.${IDS.text_color} }};margin:0 0 48px;text-align:center;}
.lf-body{font-size:18px;line-height:1.7;color:{{ section.settings.${IDS.muted_color} }};margin:0 0 28px;}
.lf-btn{display:inline-block;background:{{ section.settings.${IDS.primary_color} }};color:#fff;padding:14px 36px;border-radius:10px;font-weight:800;font-size:16px;text-decoration:none;transition:transform .2s;}
.lf-btn:hover{transform:translateY(-2px);}
.lf-btn--ghost{background:transparent;border:2px solid {{ section.settings.${IDS.primary_color} }};color:{{ section.settings.${IDS.primary_color} }};}
.lf-grid{display:grid;gap:24px;}
.lf-grid-3{grid-template-columns:repeat(3,1fr);}
.lf-grid-4{grid-template-columns:repeat(4,1fr);}
.lf-card{background:{{ section.settings.${IDS.surface_color} }};border:1px solid {{ section.settings.${IDS.muted_color} }}22;border-radius:16px;padding:28px;transition:transform .2s,box-shadow .2s;}
.lf-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px {{ section.settings.${IDS.primary_color} }}22;}
.lf-icon{font-size:36px;margin-bottom:16px;}
.lf-card-title{font-size:18px;font-weight:700;color:{{ section.settings.${IDS.text_color} }};margin:0 0 10px;}
.lf-stat-num{font-size:clamp(48px,6vw,72px);font-weight:800;color:{{ section.settings.${IDS.primary_color} }};line-height:1;}
.lf-stat-label{font-size:14px;color:{{ section.settings.${IDS.muted_color} }};margin-top:8px;}
.lf-stars{color:#FBBF24;font-size:18px;margin-bottom:12px;}
.lf-result{background:{{ section.settings.${IDS.primary_color} }}18;color:{{ section.settings.${IDS.primary_color} }};border-radius:8px;padding:6px 12px;font-size:13px;font-weight:700;margin-top:14px;display:inline-block;}
.lf-faq-btn{width:100%;text-align:left;padding:20px 0;font-weight:700;color:{{ section.settings.${IDS.text_color} }};cursor:pointer;background:none;border:none;border-bottom:1px solid {{ section.settings.${IDS.muted_color} }}33;display:flex;justify-content:space-between;font-size:16px;}
.lf-faq-body{max-height:0;overflow:hidden;transition:max-height .35s ease;color:{{ section.settings.${IDS.muted_color} }};font-size:16px;line-height:1.7;}
.lf-faq-body.open{max-height:300px;padding-bottom:20px;}
.lf-form input,.lf-form textarea{width:100%;padding:13px 16px;border-radius:10px;border:1.5px solid {{ section.settings.${IDS.muted_color} }}44;background:{{ section.settings.${IDS.surface_color} }};color:{{ section.settings.${IDS.text_color} }};font-size:15px;margin-bottom:14px;box-sizing:border-box;}
.lf-hero-split{display:flex;align-items:center;gap:60px;}
.lf-hero-text{flex:0 0 55%;}
.lf-hero-deco{flex:1;height:420px;border-radius:20px;background:linear-gradient(135deg,{{ section.settings.${IDS.primary_color} }}22,{{ section.settings.${IDS.accent_color} }}22);display:flex;align-items:center;justify-content:center;}
._lfa{opacity:0;transform:translateY(28px);transition:.7s cubic-bezier(.16,1,.3,1);}
._lfa._lfv{opacity:1;transform:none;}
@media(max-width:768px){.lf-grid-3,.lf-grid-4{grid-template-columns:1fr!important;}.lf-hero-split{flex-direction:column!important;}}

═══════════════════════════════════════════════════════════
SECCIONES A GENERAR: ${activeSections.join(', ')}
HERO LAYOUT: ${heroLayout} — ${heroIsFullwidth ? 'centered (no split)' : 'lf-hero-split (text 55% | deco 45%)'}
═══════════════════════════════════════════════════════════

HTML ESTRUCTURA:
- Envuelve todo en <div class="lf-landing" {{ section.shopify_attributes }}>
- HERO: badge con {{ section.settings.${IDS.badge_text} }}, h1 con {{ section.settings.${IDS.headline} }}, párrafo con {{ section.settings.${IDS.subheadline} }}, botones con {{ section.settings.${IDS.cta_text} }} y {{ section.settings.${IDS.cta2_text} }}
- SERVICES: h2 con {{ section.settings.${IDS.services_title} }}, grid de bloques:
  {% for block in section.blocks %}{% case block.type %}{% when 'service' %}
    <div class="lf-card _lfa" {{ block.shopify_attributes }}>
      <div class="lf-icon">{{ block.settings.icon }}</div>
      <h3 class="lf-card-title">{{ block.settings.title }}</h3>
      <div class="lf-body">{{ block.settings.description }}</div>
    </div>
  {% endcase %}{% endfor %}
- STATS: h2 con {{ section.settings.${IDS.stats_title} }}, grid stat:
  {% for block in section.blocks %}{% case block.type %}{% when 'stat' %}
    <div class="lf-card _lfa" {{ block.shopify_attributes }}>
      <div class="lf-stat-num">{{ block.settings.number }}{{ block.settings.suffix }}</div>
      <div class="lf-stat-label">{{ block.settings.label }}</div>
    </div>
  {% endcase %}{% endfor %}
- TESTIMONIALS: h2 con {{ section.settings.${IDS.testimonials_title} }}, grid testimonial:
  {% for block in section.blocks %}{% case block.type %}{% when 'testimonial' %}
    <div class="lf-card _lfa" {{ block.shopify_attributes }}>
      <div class="lf-stars">★★★★★</div>
      <p>"{{ block.settings.quote }}"</p>
      <strong>{{ block.settings.name }}</strong> — <span>{{ block.settings.role }}</span>
      <div class="lf-result">{{ block.settings.result }}</div>
    </div>
  {% endcase %}{% endfor %}
- FAQ: h2 con {{ section.settings.${IDS.faq_title} }}, acordeón:
  {% for block in section.blocks %}{% case block.type %}{% when 'faq_item' %}
    <div {{ block.shopify_attributes }}>
      <button class="lf-faq-btn">{{ block.settings.question }}<span>+</span></button>
      <div class="lf-faq-body">{{ block.settings.answer }}</div>
    </div>
  {% endcase %}{% endfor %}
- CONTACT: h2 con {{ section.settings.${IDS.contact_title} }}, párrafo con {{ section.settings.${IDS.contact_subtitle} }}, formulario HTML

SCRIPT (antes del schema):
<script>
(function(){
  var o=new IntersectionObserver(function(e){e.forEach(function(el){if(el.isIntersecting){el.target.classList.add('_lfv');o.unobserve(el.target);}});},{threshold:.1});
  document.querySelectorAll('._lfa').forEach(function(el){o.observe(el);});
  document.querySelectorAll('.lf-faq-btn').forEach(function(b){b.onclick=function(){var body=b.nextElementSibling;body.classList.toggle('open');b.querySelector('span').textContent=body.classList.contains('open')?'−':'+';};});
})();
</script>

{% schema %} EXACTO (usa SOLO los IDs listados arriba, type "color" para colores, "text" para una línea, "richtext" para HTML, "url" para URLs):
{
  "name": "LandForge Landing",
  "settings": [
    {"type":"header","content":"Colores"},
    {"type":"color","id":"${IDS.bg_color}","label":"Fondo","default":"${bg}"},
    {"type":"color","id":"${IDS.surface_color}","label":"Superficie","default":"${surface}"},
    {"type":"color","id":"${IDS.primary_color}","label":"Color principal","default":"${primary}"},
    {"type":"color","id":"${IDS.accent_color}","label":"Color acento","default":"${accent}"},
    {"type":"color","id":"${IDS.text_color}","label":"Texto","default":"${textColor}"},
    {"type":"color","id":"${IDS.muted_color}","label":"Texto secundario","default":"${mutedColor}"},
    {"type":"header","content":"Hero"},
    {"type":"text","id":"${IDS.badge_text}","label":"Badge","default":"✦ Disponible ahora mismo"},
    {"type":"text","id":"${IDS.headline}","label":"Titular H1","default":"${seoStrategy.h1 || (surveyData.keyword as string) || 'Tu servicio aquí'}"},
    {"type":"richtext","id":"${IDS.subheadline}","label":"Subtítulo","default":"<p>${bi?.description || bi?.usp || 'Descripción del negocio'}</p>"},
    {"type":"text","id":"${IDS.cta_text}","label":"Botón primario","default":"${seoStrategy.ctaText || 'Contactar ahora'}"},
    {"type":"url","id":"${IDS.cta_url}","label":"URL botón primario"},
    {"type":"text","id":"${IDS.cta2_text}","label":"Botón secundario","default":"Ver cómo funciona"},
    {"type":"header","content":"Títulos de sección"},
    {"type":"text","id":"${IDS.services_title}","label":"Título Servicios","default":"Nuestros servicios"},
    {"type":"text","id":"${IDS.stats_title}","label":"Título Stats","default":"Resultados reales"},
    {"type":"text","id":"${IDS.testimonials_title}","label":"Título Testimonios","default":"Lo que dicen nuestros clientes"},
    {"type":"text","id":"${IDS.faq_title}","label":"Título FAQ","default":"Preguntas frecuentes"},
    {"type":"text","id":"${IDS.contact_title}","label":"Título Contacto","default":"Contáctanos hoy"},
    {"type":"richtext","id":"${IDS.contact_subtitle}","label":"Subtítulo Contacto","default":"<p>Habla con un experto y descubre cómo podemos ayudarte.</p>"}
  ],
  "blocks": [
    {"type":"service","name":"Servicio","settings":[
      {"type":"text","id":"icon","label":"Emoji icono","default":"✅"},
      {"type":"text","id":"title","label":"Título"},
      {"type":"richtext","id":"description","label":"Descripción"}
    ]},
    {"type":"stat","name":"Estadística","settings":[
      {"type":"text","id":"number","label":"Número","default":"99"},
      {"type":"text","id":"suffix","label":"Sufijo","default":"%"},
      {"type":"text","id":"label","label":"Etiqueta","default":"Clientes satisfechos"}
    ]},
    {"type":"testimonial","name":"Testimonio","settings":[
      {"type":"text","id":"quote","label":"Cita"},
      {"type":"text","id":"name","label":"Nombre"},
      {"type":"text","id":"role","label":"Cargo y empresa"},
      {"type":"text","id":"result","label":"Resultado obtenido"}
    ]},
    {"type":"faq_item","name":"Pregunta FAQ","settings":[
      {"type":"text","id":"question","label":"Pregunta"},
      {"type":"richtext","id":"answer","label":"Respuesta"}
    ]}
  ],
  "presets": [{"name":"LandForge Landing"}]
}

RESPONDE ÚNICAMENTE CON EL ARCHIVO .liquid COMPLETO. Sin bloques markdown ni explicaciones.

Negocio: ${bi?.businessName || surveyData.keyword || 'este negocio'}`,
    }],
  })
  const message = await stream.finalMessage()

  if (message.stop_reason === 'max_tokens') {
    throw new Error('La landing es demasiado larga. Reduce las secciones activas e inténtalo de nuevo.')
  }
  const content = message.content[0]
  if (content.type !== 'text') throw new Error('IA no devolvió texto')
  let liquid = content.text.trim()
  const fenceMatch = liquid.match(/```(?:liquid|html)?\n?([\s\S]*?)```/)
  if (fenceMatch) liquid = fenceMatch[1].trim()
  return liquid
}

// ─────────────────────────────────────────────────────────────────
// ODOO AGENT (Sonnet)
// ─────────────────────────────────────────────────────────────────
async function generateOdoo(
  surveyData: Record<string, unknown>,
  designConcept: Record<string, unknown>,
  seoStrategy: Record<string, unknown>,
): Promise<string> {
  const ctx = buildBusinessContext(surveyData)
  const designBlock = buildDesignConceptBlock(designConcept, seoStrategy)

  const sections = surveyData.sections as Record<string, boolean> | undefined
  const activeSections = sections ? Object.entries(sections).filter(([,v]) => v).map(([k]) => k) : ['hero','services','testimonials','contact_form']
  const bi = surveyData.businessInfo as Record<string, unknown> | null | undefined

  const heroLayout = (designConcept.heroLayout as string) || 'split_left'
  const heroIsFullwidth = heroLayout === 'fullscreen' || heroLayout === 'centered_bold'

  const stream = client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 10000,
    messages: [{
      role: 'user',
      content: `Eres un experto en Odoo 17 Website Builder, QWeb y Bootstrap 5. Genera el contenido HTML de una landing page para un módulo Odoo 17. El output se incrustará dentro de un template QWeb — debe ser XHTML válido y editable en el Website Builder.

DATOS:
${ctx}

${designBlock}

━━━ FORMATO DE OUTPUT — CRÍTICO ━━━
Genera ÚNICAMENTE las secciones <section>...</section>.
SIN <style>, SIN <script>, SIN <html>/<head>/<body>, SIN markdown, SIN \`\`\`.
El CSS y JavaScript ya están incluidos — NO los regeneres.

━━━ XML-SAFE — OBLIGATORIO (el output va dentro de XML) ━━━
• Usa caracteres directos: espacio normal (NO &nbsp;), © (NO &copy;), — (NO &mdash;)
• NUNCA uses entidades HTML con nombre — rompen el XML
• &amp; &lt; &gt; son las ÚNICAS entidades permitidas
• Atributos siempre con comillas dobles: class="..." id="..."
• Elementos vacíos auto-cerrados: <br/> <hr/> <input/> <img/>
• required siempre como required="required"

━━━ CLASES CSS DISPONIBLES ━━━
Layout: .lf-section  .lf-section-alt  .container  .row  .col-lg-4  .col-lg-3  .col-lg-6  .col-lg-8
Texto : .lf-heading  .lf-subheading  .lf-lead  .lf-badge
Botones: .lf-btn-primary  .lf-btn-outline
Cards : .lf-card  .lf-card-icon  .lf-stat-number  .lf-stat-label
Social: .lf-avatar  .lf-stars  .lf-result
FAQ   : .lf-faq-question  .lf-faq-icon  .lf-faq-answer
Form  : .lf-form  .form-control
Deco  : .lf-hero-deco
Anim  : _lfa (secciones)  _lfa _lfas (cards)  — NUNCA en hero

━━━ EDITABILIDAD ODOO — OBLIGATORIO ━━━
Añade class="o_editable" a TODOS los textos visibles: h1-h4, p, badge, textos de cards/stats/testimonios/FAQ.
NO añadas o_editable a: botones <a>, inputs, labels de formulario, divs estructurales.

━━━ HERO LAYOUT ━━━
${heroLayout} — ${heroIsFullwidth ? 'col-lg-8 offset-lg-2 centrado' : 'col-lg-6 texto izquierda + col-lg-6 decorativo derecha (.lf-hero-deco)'}

━━━ SECCIONES A GENERAR: ${activeSections.join(', ')} ━━━

━━━ CONTENIDO ━━━
1. H1: "${seoStrategy.h1 || (surveyData.keyword as string) || 'servicio'}" — class="lf-heading o_editable"
2. CTA: "${seoStrategy.ctaText || 'Contactar ahora'}" — texto dentro de <span class="o_editable">
3. Servicios: 3 .lf-card con .lf-card-icon (emoji), h3.o_editable, p.o_editable
4. Stats: 4 cifras .lf-stat-number.o_editable + .lf-stat-label.o_editable del sector
5. Testimonios: 3 .lf-card con .lf-avatar (inicial), .lf-stars, p.o_editable, .lf-result.o_editable
6. FAQ: .lf-faq-question con span.o_editable + span.lf-faq-icon, .lf-faq-answer con p.o_editable
7. Contacto: <form action="/web/website_form/mail.mail" method="post" class="lf-form">
   contact_name (text), email_from (email), phone (tel), description (textarea), botón submit .lf-btn-primary
8. Secciones alternan: .lf-section / .lf-section.lf-section-alt

RESPONDE ÚNICA Y EXCLUSIVAMENTE con las etiquetas <section>. El primer carácter debe ser '<'.
Genera para: ${bi?.businessName || surveyData.keyword || 'este negocio'}`,
    }],
  })
  const message = await stream.finalMessage()

  if (message.stop_reason === 'max_tokens') {
    throw new Error('La landing es demasiado larga para generarse de una vez. Reduce las secciones activas e inténtalo de nuevo.')
  }
  const content = message.content[0]
  if (content.type !== 'text') throw new Error('IA no devolvió texto')
  let html = content.text.trim()
  // Strip any markdown code fence (```xml, ```html, ``` etc.)
  const fenceMatch = html.match(/^```\w*\r?\n([\s\S]*?)```\s*$/m)
  if (fenceMatch) {
    html = fenceMatch[1].trim()
  } else {
    // If backticks were already stripped but language tag remains as first line (e.g. "xml")
    html = html.replace(/^(xml|html|liquid)\r?\n/, '')
  }
  return html
}

// ─────────────────────────────────────────────────────────────────
// MAIN HANDLER
// ─────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const body = await request.json()
    const { cms, surveyData, landingId } = body

    if (!cms || !surveyData) {
      return NextResponse.json({ error: 'cms y surveyData son requeridos' }, { status: 400 })
    }

    // Fetch design concept + SEO strategy from the original generation
    const { designConcept, seoStrategy } = await fetchLandingContext(supabase, landingId)

    // ── SHOPIFY: returns a downloadable OS 2.0 theme ZIP ────────
    if (cms === 'shopify') {
      const liquidContent = await withRetry(() => generateShopify(surveyData, designConcept, seoStrategy))

      if (landingId && landingId !== 'preview' && user) {
        await supabase.from('landings')
          .update({ status: 'exported', final_code: liquidContent })
          .eq('id', landingId).eq('user_id', user.id)
      }
      return NextResponse.json({ code: liquidContent })
    }

    // ── ODOO: returns a downloadable module ZIP ──────────────────
    if (cms === 'odoo') {
      const sectionsHtml = await withRetry(() => generateOdoo(surveyData, designConcept, seoStrategy))
      const bi = surveyData.businessInfo as Record<string, unknown> | null | undefined
      const businessName = String(bi?.businessName || surveyData.keyword || 'landing')

      // Build CSS server-side (no AI tokens wasted on CSS)
      const isDark = surveyData.theme === 'dark'
      const odooCss = buildOdooCss(
        (surveyData.primaryColor as string) || '#6366F1',
        (surveyData.secondaryColor as string) || '#F43F5E',
        isDark ? '#0A0E17' : '#FFFFFF',
        isDark ? '#111827' : '#F8FAFC',
        isDark ? '#F1F5F9' : '#0F172A',
        isDark ? '#94A3B8' : '#64748B',
        isDark ? '#1E293B' : '#E2E8F0',
        isDark,
      )

      const { moduleName, manifestPy, initPy, viewsXml } = buildOdooModuleFiles(sectionsHtml, odooCss, businessName)

      const zip = new JSZip()
      const folder = zip.folder(moduleName)!
      folder.file('__manifest__.py', manifestPy)
      folder.file('__init__.py', initPy)
      const viewsFolder = folder.folder('views')!
      viewsFolder.file('landing_page.xml', viewsXml)
      const zipBuffer = await zip.generateAsync({ type: 'arraybuffer' })

      if (landingId && landingId !== 'preview' && user) {
        await supabase.from('landings')
          .update({ status: 'exported', final_code: viewsXml })
          .eq('id', landingId).eq('user_id', user.id)
      }
      return new Response(zipBuffer, {
        headers: {
          'Content-Type': 'application/zip',
          'Content-Disposition': `attachment; filename="${moduleName}.zip"`,
        },
      })
    }

    // ── OTHER CMS: returns code as JSON ──────────────────────────
    let generatedContent: string

    switch (cms) {
      case 'elementor': {
        generatedContent = await withRetry(() => generateElementor(surveyData, designConcept, seoStrategy))
        break
      }
      case 'gutenberg': {
        generatedContent = await withRetry(() => generateGutenberg(surveyData, designConcept, seoStrategy))
        break
      }
      default:
        return NextResponse.json({ error: `CMS no soportado: ${cms}` }, { status: 400 })
    }

    // Update landing status in DB
    if (landingId && landingId !== 'preview' && user) {
      await supabase.from('landings')
        .update({ status: 'exported', final_code: generatedContent })
        .eq('id', landingId).eq('user_id', user.id)
    }

    return NextResponse.json({ code: generatedContent })

  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Export error:', msg)
    return NextResponse.json({ error: `Error al exportar: ${msg}` }, { status: 500 })
  }
}
