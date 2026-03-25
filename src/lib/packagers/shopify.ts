/**
 * SHOPIFY PACKAGER
 * All 11 section types. All text editable via Shopify Theme Editor.
 * Contact form uses native Shopify {% form 'contact' %} — fully functional.
 * Install: Upload each .liquid file to Shopify > Online Store > Themes > Edit Code > sections/
 */

type BlueprintSection = { type: string; data: Record<string, any> }
type Blueprint = { meta?: Record<string, any>; sections: BlueprintSection[]; design?: Record<string, any> }

function esc(s: string = '') {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function packShopify(blueprint: Blueprint): Record<string, string> {
  const files: Record<string, string> = {}
  const primary = blueprint.design?.primaryColor || '#00E5A0'
  const accent = blueprint.design?.accentColor || '#0073AA'

  const BG1 = '#07111F'
  const BG2 = '#0C1826'
  const TXT = '#EEF5FF'
  const TXT2 = '#7B98B8'

  const sectionOrder: string[] = []
  const sectionDefs: Record<string, any> = {}

  blueprint.sections.forEach((section, idx) => {
    const { type, data } = section
    const sid = `${type}_${idx}`
    sectionOrder.push(sid)

    // ── HERO ──────────────────────────────────────────────────────────────
    if (type === 'hero') {
      sectionDefs[sid] = {
        type: 'lf-hero',
        settings: {
          heading: data.headline || '',
          subheading: data.subheadline || '',
          button_label: data.cta_text || '',
          button_secondary: data.cta_secondary || '',
          trust_badge: data.trust_badge || '',
        },
      }
      if (!files['sections/lf-hero.liquid']) files['sections/lf-hero.liquid'] = `
<section class="lf-hero" style="background:${BG1};padding:clamp(80px,10vw,120px) clamp(24px,6vw,80px);text-align:center;">
  {% if section.settings.trust_badge != blank %}
    <div style="display:inline-flex;align-items:center;gap:7px;background:${primary}18;border:1px solid ${primary}35;border-radius:40px;padding:7px 18px;margin-bottom:28px;font-size:13px;color:${primary};font-weight:600;">
      <span style="width:7px;height:7px;border-radius:50%;background:${primary};display:inline-block;"></span>
      {{ section.settings.trust_badge }}
    </div>
  {% endif %}
  <h1 style="font-size:clamp(34px,5.5vw,68px);font-weight:900;color:${TXT};line-height:1.08;letter-spacing:-2.5px;margin-bottom:24px;">{{ section.settings.heading }}</h1>
  {% if section.settings.subheading != blank %}
    <p style="font-size:clamp(16px,2vw,21px);color:${TXT2};line-height:1.7;max-width:560px;margin:0 auto 40px;">{{ section.settings.subheading }}</p>
  {% endif %}
  <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
    {% if section.settings.button_label != blank %}
      <a href="#contact" style="display:inline-block;padding:16px 42px;background:${primary};color:${BG1};border-radius:12px;font-weight:800;font-size:17px;text-decoration:none;box-shadow:0 0 40px ${primary}40;">{{ section.settings.button_label }}</a>
    {% endif %}
    {% if section.settings.button_secondary != blank %}
      <a href="#" style="display:inline-block;padding:16px 42px;border:1px solid #1E3350;color:${TXT};border-radius:12px;font-weight:600;font-size:17px;text-decoration:none;">{{ section.settings.button_secondary }}</a>
    {% endif %}
  </div>
</section>
{% schema %}
{"name":"LF Hero","settings":[
  {"type":"text","id":"heading","label":"Headline"},
  {"type":"text","id":"subheading","label":"Subheadline"},
  {"type":"text","id":"button_label","label":"CTA Button"},
  {"type":"text","id":"button_secondary","label":"Secondary Button (optional)"},
  {"type":"text","id":"trust_badge","label":"Trust Badge (optional)"}
]}
{% endschema %}`
    }

    // ── BENEFITS ──────────────────────────────────────────────────────────
    else if (type === 'benefits' || type === 'features') {
      const tpl = type === 'benefits' ? 'lf-benefits' : 'lf-features'
      sectionDefs[sid] = {
        type: tpl,
        settings: { title: data.title || '' },
        blocks: (data.items || []).reduce((acc: any, item: any, i: number) => {
          acc[`b${i}`] = { type: 'item', settings: { icon: item.icon || '', title: item.title || '', desc: item.desc || '' } }
          return acc
        }, {}),
        block_order: (data.items || []).map((_: any, i: number) => `b${i}`),
      }
      if (!files[`sections/${tpl}.liquid`]) files[`sections/${tpl}.liquid`] = `
<section class="${tpl}" style="background:${BG2};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">{{ section.settings.title }}</h2>
  {% endif %}
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;max-width:980px;margin:0 auto;">
    {% for block in section.blocks %}
      <div style="background:${BG1};border:1px solid #182A40;border-radius:20px;padding:30px 26px;">
        <div style="width:52px;height:52px;border-radius:14px;background:${primary}18;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:18px;">{{ block.settings.icon }}</div>
        <h3 style="font-size:17px;font-weight:700;color:${TXT};margin-bottom:10px;line-height:1.3;">{{ block.settings.title }}</h3>
        <p style="font-size:14px;color:${TXT2};line-height:1.68;margin:0;">{{ block.settings.desc }}</p>
      </div>
    {% endfor %}
  </div>
</section>
{% schema %}
{"name":"${type === 'benefits' ? 'LF Benefits' : 'LF Features'}","settings":[{"type":"text","id":"title","label":"Section Title"}],
"blocks":[{"type":"item","name":"Item","settings":[
  {"type":"text","id":"icon","label":"Icon (emoji)"},
  {"type":"text","id":"title","label":"Title"},
  {"type":"textarea","id":"desc","label":"Description"}
]}]}
{% endschema %}`
    }

    // ── PROBLEM ───────────────────────────────────────────────────────────
    else if (type === 'problem') {
      sectionDefs[sid] = {
        type: 'lf-problem',
        settings: { title: data.title || '' },
        blocks: (data.items || []).reduce((acc: any, item: any, i: number) => {
          acc[`b${i}`] = { type: 'item', settings: { icon: item.icon || '', title: item.title || '', desc: item.desc || '' } }
          return acc
        }, {}),
        block_order: (data.items || []).map((_: any, i: number) => `b${i}`),
      }
      if (!files['sections/lf-problem.liquid']) files['sections/lf-problem.liquid'] = `
<section class="lf-problem" style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">{{ section.settings.title }}</h2>
  {% endif %}
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;max-width:980px;margin:0 auto;">
    {% for block in section.blocks %}
      <div style="background:${BG2};border:1px solid rgba(239,68,68,0.2);border-radius:18px;padding:26px;display:flex;gap:16px;align-items:flex-start;">
        <div style="width:50px;height:50px;border-radius:13px;background:rgba(239,68,68,0.1);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">{{ block.settings.icon }}</div>
        <div>
          <h3 style="font-size:15px;font-weight:700;color:${TXT};margin-bottom:8px;line-height:1.3;">{{ block.settings.title }}</h3>
          <p style="font-size:13px;color:${TXT2};line-height:1.68;margin:0;">{{ block.settings.desc }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
{% schema %}
{"name":"LF Problem","settings":[{"type":"text","id":"title","label":"Section Title"}],
"blocks":[{"type":"item","name":"Problem","settings":[
  {"type":"text","id":"icon","label":"Icon (emoji)"},
  {"type":"text","id":"title","label":"Problem Title"},
  {"type":"textarea","id":"desc","label":"Description"}
]}]}
{% endschema %}`
    }

    // ── SOCIAL PROOF ──────────────────────────────────────────────────────
    else if (type === 'social_proof') {
      sectionDefs[sid] = {
        type: 'lf-testimonials',
        settings: { title: data.title || '' },
        blocks: (data.testimonials || []).reduce((acc: any, t: any, i: number) => {
          acc[`b${i}`] = { type: 'item', settings: { name: t.name || '', role: t.role || '', text: t.text || '' } }
          return acc
        }, {}),
        block_order: (data.testimonials || []).map((_: any, i: number) => `b${i}`),
      }
      if (!files['sections/lf-testimonials.liquid']) files['sections/lf-testimonials.liquid'] = `
<section class="lf-testimonials" style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">{{ section.settings.title }}</h2>
  {% endif %}
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;max-width:980px;margin:0 auto;">
    {% for block in section.blocks %}
      <div style="background:${BG2};border:1px solid #182A40;border-radius:20px;padding:28px 26px;">
        <div style="color:#F59E0B;font-size:16px;margin-bottom:14px;">★★★★★</div>
        <p style="font-size:15px;color:${TXT2};line-height:1.75;font-style:italic;margin-bottom:18px;">"{{ block.settings.text }}"</p>
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,${primary},${accent});display:flex;align-items:center;justify-content:center;font-weight:700;color:${BG1};font-size:15px;flex-shrink:0;">{{ block.settings.name | slice: 0 | upcase }}</div>
          <div>
            <strong style="color:${TXT};font-size:14px;">{{ block.settings.name }}</strong>
            <p style="font-size:12px;color:#445F78;margin:2px 0 0;">{{ block.settings.role }}</p>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
{% schema %}
{"name":"LF Testimonials","settings":[{"type":"text","id":"title","label":"Section Title"}],
"blocks":[{"type":"item","name":"Testimonial","settings":[
  {"type":"text","id":"name","label":"Name"},
  {"type":"text","id":"role","label":"Role / Company"},
  {"type":"textarea","id":"text","label":"Quote"}
]}]}
{% endschema %}`
    }

    // ── HOW IT WORKS ──────────────────────────────────────────────────────
    else if (type === 'how_it_works') {
      sectionDefs[sid] = {
        type: 'lf-how-it-works',
        settings: { title: data.title || '' },
        blocks: (data.steps || []).reduce((acc: any, step: any, i: number) => {
          acc[`b${i}`] = { type: 'step', settings: { number: String(step.number || i + 1), title: step.title || '', desc: step.desc || '' } }
          return acc
        }, {}),
        block_order: (data.steps || []).map((_: any, i: number) => `b${i}`),
      }
      if (!files['sections/lf-how-it-works.liquid']) files['sections/lf-how-it-works.liquid'] = `
<section class="lf-how-it-works" style="background:${BG2};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">{{ section.settings.title }}</h2>
  {% endif %}
  <div style="display:flex;flex-direction:column;gap:14px;max-width:660px;margin:0 auto;">
    {% for block in section.blocks %}
      <div style="display:flex;align-items:flex-start;gap:20px;background:${BG1};border:1px solid #182A40;border-radius:16px;padding:22px 26px;">
        <div style="min-width:46px;height:46px;border-radius:12px;background:${primary}18;border:1px solid ${primary}35;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${primary};flex-shrink:0;">{{ block.settings.number }}</div>
        <div>
          <h3 style="font-size:16px;font-weight:700;color:${TXT};margin-bottom:6px;">{{ block.settings.title }}</h3>
          <p style="font-size:14px;color:${TXT2};line-height:1.68;margin:0;">{{ block.settings.desc }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
{% schema %}
{"name":"LF How It Works","settings":[{"type":"text","id":"title","label":"Section Title"}],
"blocks":[{"type":"step","name":"Step","settings":[
  {"type":"text","id":"number","label":"Step Number"},
  {"type":"text","id":"title","label":"Step Title"},
  {"type":"textarea","id":"desc","label":"Description"}
]}]}
{% endschema %}`
    }

    // ── FAQ ───────────────────────────────────────────────────────────────
    else if (type === 'faq') {
      sectionDefs[sid] = {
        type: 'lf-faq',
        settings: { title: data.title || '' },
        blocks: (data.items || []).reduce((acc: any, item: any, i: number) => {
          acc[`b${i}`] = { type: 'item', settings: { question: item.q || '', answer: item.a || '' } }
          return acc
        }, {}),
        block_order: (data.items || []).map((_: any, i: number) => `b${i}`),
      }
      if (!files['sections/lf-faq.liquid']) files['sections/lf-faq.liquid'] = `
<section class="lf-faq" style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">{{ section.settings.title }}</h2>
  {% endif %}
  <div style="max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:10px;">
    {% for block in section.blocks %}
      <details style="background:${BG2};border:1px solid #182A40;border-radius:14px;padding:20px 24px;cursor:pointer;">
        <summary style="font-weight:600;color:${TXT};font-size:15px;list-style:none;display:flex;justify-content:space-between;align-items:center;">
          {{ block.settings.question }}
          <span style="color:${primary};font-size:20px;flex-shrink:0;margin-left:12px;">+</span>
        </summary>
        <p style="margin-top:14px;font-size:14px;color:${TXT2};line-height:1.72;">{{ block.settings.answer }}</p>
      </details>
    {% endfor %}
  </div>
</section>
{% schema %}
{"name":"LF FAQ","settings":[{"type":"text","id":"title","label":"Section Title"}],
"blocks":[{"type":"item","name":"FAQ Item","settings":[
  {"type":"text","id":"question","label":"Question"},
  {"type":"textarea","id":"answer","label":"Answer"}
]}]}
{% endschema %}`
    }

    // ── CTA FINAL ─────────────────────────────────────────────────────────
    else if (type === 'cta_final') {
      sectionDefs[sid] = {
        type: 'lf-cta-final',
        settings: { heading: data.headline || '', subheading: data.subheadline || '', button_label: data.cta_text || '', disclaimer: data.disclaimer || '' },
      }
      if (!files['sections/lf-cta-final.liquid']) files['sections/lf-cta-final.liquid'] = `
<section class="lf-cta-final" style="background:${BG2};padding:clamp(80px,10vw,120px) clamp(24px,6vw,80px);text-align:center;">
  <h2 style="font-size:clamp(28px,4vw,52px);font-weight:900;color:${TXT};margin-bottom:16px;letter-spacing:-1.5px;line-height:1.08;">{{ section.settings.heading }}</h2>
  {% if section.settings.subheading != blank %}
    <p style="font-size:18px;color:${TXT2};margin-bottom:40px;max-width:520px;margin-left:auto;margin-right:auto;line-height:1.65;">{{ section.settings.subheading }}</p>
  {% endif %}
  {% if section.settings.button_label != blank %}
    <a href="#contact" style="display:inline-block;padding:18px 56px;background:${primary};color:${BG1};border-radius:14px;font-weight:800;font-size:18px;text-decoration:none;box-shadow:0 0 60px ${primary}50;">{{ section.settings.button_label }}</a>
  {% endif %}
  {% if section.settings.disclaimer != blank %}
    <p style="margin-top:18px;font-size:13px;color:#445F78;">{{ section.settings.disclaimer }}</p>
  {% endif %}
</section>
{% schema %}
{"name":"LF CTA Final","settings":[
  {"type":"text","id":"heading","label":"Headline"},
  {"type":"text","id":"subheading","label":"Subheadline"},
  {"type":"text","id":"button_label","label":"Button Text"},
  {"type":"text","id":"disclaimer","label":"Disclaimer (optional)"}
]}
{% endschema %}`
    }

    // ── STATS ─────────────────────────────────────────────────────────────
    else if (type === 'stats') {
      const items = data.items || data.stats || []
      sectionDefs[sid] = {
        type: 'lf-stats',
        settings: { title: data.title || '' },
        blocks: items.reduce((acc: any, item: any, i: number) => {
          acc[`b${i}`] = { type: 'stat', settings: { value: String(item.value || item.number || ''), label: item.label || item.title || '' } }
          return acc
        }, {}),
        block_order: items.map((_: any, i: number) => `b${i}`),
      }
      if (!files['sections/lf-stats.liquid']) files['sections/lf-stats.liquid'] = `
<section class="lf-stats" style="background:${BG2};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">{{ section.settings.title }}</h2>
  {% endif %}
  <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;max-width:840px;margin:0 auto;">
    {% for block in section.blocks %}
      <div style="text-align:center;background:${BG1};border:1px solid #182A40;border-radius:20px;padding:36px 32px;min-width:160px;flex:1;">
        <div style="font-size:clamp(38px,5vw,56px);font-weight:900;color:${primary};font-family:monospace;letter-spacing:-2px;line-height:1;margin-bottom:8px;">{{ block.settings.value }}</div>
        <div style="font-size:14px;color:${TXT2};">{{ block.settings.label }}</div>
      </div>
    {% endfor %}
  </div>
</section>
{% schema %}
{"name":"LF Stats","settings":[{"type":"text","id":"title","label":"Section Title"}],
"blocks":[{"type":"stat","name":"Stat","settings":[
  {"type":"text","id":"value","label":"Value (e.g. 500+)"},
  {"type":"text","id":"label","label":"Label"}
]}]}
{% endschema %}`
    }

    // ── PRICING ───────────────────────────────────────────────────────────
    else if (type === 'pricing') {
      const plans = data.plans || []
      sectionDefs[sid] = {
        type: 'lf-pricing',
        settings: { title: data.title || '', subtitle: data.subtitle || '' },
        blocks: plans.reduce((acc: any, plan: any, i: number) => {
          acc[`b${i}`] = {
            type: 'plan', settings: {
              name: plan.name || '', price: String(plan.price || ''),
              period: plan.period || plan.billing || '',
              features: (plan.features || []).join('\n'),
              cta: plan.cta || '', featured: plan.featured ? 'true' : 'false',
              badge: plan.badge || '',
            }
          }
          return acc
        }, {}),
        block_order: plans.map((_: any, i: number) => `b${i}`),
      }
      if (!files['sections/lf-pricing.liquid']) files['sections/lf-pricing.liquid'] = `
<section class="lf-pricing" style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:{% if section.settings.subtitle != blank %}12px{% else %}48px{% endif %};letter-spacing:-1px;">{{ section.settings.title }}</h2>
  {% endif %}
  {% if section.settings.subtitle != blank %}
    <p style="text-align:center;color:${TXT2};font-size:17px;margin-bottom:48px;">{{ section.settings.subtitle }}</p>
  {% endif %}
  <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;max-width:980px;margin:0 auto;">
    {% for block in section.blocks %}
      {% assign is_featured = block.settings.featured == 'true' %}
      <div style="flex:1;min-width:240px;max-width:300px;background:{% if is_featured %}${primary}15{% else %}${BG2}{% endif %};border:1px solid {% if is_featured %}${primary}60{% else %}#182A40{% endif %};border-radius:22px;padding:32px 28px;position:relative;">
        {% if block.settings.badge != blank %}
          <div style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:${primary};color:${BG1};border-radius:20px;padding:5px 16px;font-size:12px;font-weight:700;white-space:nowrap;">{{ block.settings.badge }}</div>
        {% endif %}
        <h3 style="color:${TXT};font-size:18px;font-weight:700;margin-bottom:10px;">{{ block.settings.name }}</h3>
        <div style="font-size:48px;font-weight:900;color:{% if is_featured %}${primary}{% else %}${TXT}{% endif %};letter-spacing:-2px;line-height:1;">{{ block.settings.price }}</div>
        <div style="font-size:13px;color:#445F78;margin-bottom:24px;">{{ block.settings.period }}</div>
        <ul style="list-style:none;padding:0;margin:0 0 26px;display:flex;flex-direction:column;gap:10px;">
          {% assign feat_list = block.settings.features | split: "\\n" %}
          {% for feat in feat_list %}
            {% if feat != blank %}<li style="font-size:14px;color:${TXT2};display:flex;gap:9px;align-items:flex-start;"><span style="color:${primary};font-weight:700;flex-shrink:0;">✓</span>{{ feat }}</li>{% endif %}
          {% endfor %}
        </ul>
        {% if block.settings.cta != blank %}
          <a href="#contact" style="display:block;padding:14px;border-radius:11px;text-align:center;font-weight:700;font-size:15px;text-decoration:none;{% if is_featured %}background:${primary};color:${BG1};border:none;{% else %}background:transparent;color:${TXT};border:1px solid #182A40;{% endif %}">{{ block.settings.cta }}</a>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</section>
{% schema %}
{"name":"LF Pricing","settings":[
  {"type":"text","id":"title","label":"Section Title"},
  {"type":"text","id":"subtitle","label":"Subtitle (optional)"}
],
"blocks":[{"type":"plan","name":"Plan","settings":[
  {"type":"text","id":"name","label":"Plan Name"},
  {"type":"text","id":"price","label":"Price (e.g. €49)"},
  {"type":"text","id":"period","label":"Period (e.g. /mes)"},
  {"type":"textarea","id":"features","label":"Features (one per line)"},
  {"type":"text","id":"cta","label":"CTA Button Text"},
  {"type":"text","id":"featured","label":"Featured? (true/false)"},
  {"type":"text","id":"badge","label":"Badge (optional)"}
]}]}
{% endschema %}`
    }

    // ── CONTACT FORM (native Shopify — fully functional) ──────────────────
    else if (type === 'contact_form') {
      sectionDefs[sid] = {
        type: 'lf-contact',
        settings: {
          title: data.title || 'Contacta con nosotros',
          subtitle: data.subtitle || '',
          button_label: data.cta || data.cta_text || 'Enviar mensaje',
          disclaimer: data.disclaimer || '',
        },
      }
      if (!files['sections/lf-contact.liquid']) files['sections/lf-contact.liquid'] = `
<section class="lf-contact" id="contact" style="background:${BG2};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:{% if section.settings.subtitle != blank %}12px{% else %}48px{% endif %};letter-spacing:-1px;">{{ section.settings.title }}</h2>
  {% endif %}
  {% if section.settings.subtitle != blank %}
    <p style="text-align:center;color:${TXT2};font-size:16px;margin-bottom:48px;line-height:1.65;">{{ section.settings.subtitle }}</p>
  {% endif %}
  <div style="max-width:560px;margin:0 auto;background:${BG1};border:1px solid #182A40;border-radius:22px;padding:36px 32px;">
    {% form 'contact' %}
      {% if form.posted_successfully? %}
        <div style="text-align:center;padding:24px;color:${primary};font-size:16px;font-weight:700;">✓ ¡Mensaje enviado! Te contactaremos pronto.</div>
      {% else %}
        <div style="margin-bottom:18px;">
          <label style="display:block;font-size:13px;font-weight:600;color:${TXT2};margin-bottom:8px;">Nombre</label>
          <input type="text" name="contact[name]" placeholder="Tu nombre" required style="width:100%;padding:12px 16px;border-radius:10px;border:1px solid #182A40;background:${BG2};color:${TXT};font-size:14px;box-sizing:border-box;" />
        </div>
        <div style="margin-bottom:18px;">
          <label style="display:block;font-size:13px;font-weight:600;color:${TXT2};margin-bottom:8px;">Email</label>
          <input type="email" name="contact[email]" placeholder="tu@email.com" required style="width:100%;padding:12px 16px;border-radius:10px;border:1px solid #182A40;background:${BG2};color:${TXT};font-size:14px;box-sizing:border-box;" />
        </div>
        <div style="margin-bottom:18px;">
          <label style="display:block;font-size:13px;font-weight:600;color:${TXT2};margin-bottom:8px;">Mensaje</label>
          <textarea name="contact[body]" placeholder="¿En qué podemos ayudarte?" required style="width:100%;padding:12px 16px;border-radius:10px;border:1px solid #182A40;background:${BG2};color:${TXT};font-size:14px;min-height:120px;resize:vertical;box-sizing:border-box;"></textarea>
        </div>
        <button type="submit" style="width:100%;padding:16px;border-radius:12px;border:none;background:${primary};color:${BG1};font-weight:800;font-size:16px;cursor:pointer;">{{ section.settings.button_label }}</button>
        {% if section.settings.disclaimer != blank %}
          <p style="text-align:center;font-size:12px;color:#445F78;margin-top:12px;">{{ section.settings.disclaimer }}</p>
        {% endif %}
        {% if form.errors %}
          <div style="margin-top:12px;color:#EF4444;font-size:14px;">{{ form.errors | default_errors }}</div>
        {% endif %}
      {% endif %}
    {% endform %}
  </div>
</section>
{% schema %}
{"name":"LF Contact","settings":[
  {"type":"text","id":"title","label":"Section Title"},
  {"type":"text","id":"subtitle","label":"Subtitle (optional)"},
  {"type":"text","id":"button_label","label":"Submit Button"},
  {"type":"text","id":"disclaimer","label":"Disclaimer (optional)"}
]}
{% endschema %}`
    }

    // ── FALLBACK (unknown types) ───────────────────────────────────────────
    else {
      const items = data.items || data.steps || data.testimonials || []
      sectionDefs[sid] = {
        type: 'lf-features',
        settings: { title: data.title || data.headline || type },
        blocks: items.reduce((acc: any, item: any, i: number) => {
          acc[`b${i}`] = { type: 'item', settings: { icon: item.icon || '', title: item.title || item.name || '', desc: item.desc || item.text || '' } }
          return acc
        }, {}),
        block_order: items.map((_: any, i: number) => `b${i}`),
      }
    }
  })

  files['templates/index.json'] = JSON.stringify({ sections: sectionDefs, order: sectionOrder }, null, 2)

  files['README.md'] = `# LandForge — Shopify Export

## Instalación

1. Ve a **Admin Shopify > Tienda Online > Temas > Acciones > Editar código**
2. En la carpeta **sections/**, sube cada archivo \`.liquid\` incluido en este ZIP
3. Ve a **Admin > Tienda Online > Páginas > Nueva página**
4. En la plantilla de la página, selecciona tu tema personalizado
5. En el **Personalizador del tema**, añade las secciones LandForge

## Colores de marca
- Color primario: \`${primary}\`
- Color acento: \`${accent}\`

## Formulario de contacto
La sección **lf-contact** usa el formulario nativo de Shopify (\`{% form 'contact' %}\`).
Los mensajes se reciben en **Admin > Apps > Email** o en el inbox de tu tienda.

## Secciones incluidas
${blueprint.sections.map(s => `- ${s.type}`).join('\n')}
`

  return files
}
