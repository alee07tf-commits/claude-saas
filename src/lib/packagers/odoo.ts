/**
 * ODOO PACKAGER
 * All 11 section types. Uses Bootstrap 5 (bundled with Odoo).
 * Import: Odoo Website Builder > Edit mode, or Settings > Technical > Views
 * Content is editable via Odoo's website builder "Edit" button.
 */

type BlueprintSection = { type: string; data: Record<string, any> }
type Blueprint = { meta?: Record<string, any>; sections: BlueprintSection[]; design?: Record<string, any> }

function esc(s: string = '') {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function packOdoo(blueprint: Blueprint): string {
  const primary = blueprint.design?.primaryColor || '#00E5A0'
  const accent = blueprint.design?.accentColor || '#0073AA'

  const BG1 = '#07111F'
  const BG2 = '#0C1826'
  const TXT = '#EEF5FF'
  const TXT2 = '#7B98B8'

  const snippets: string[] = []

  for (const { type, data } of blueprint.sections) {

    // ── HERO ────────────────────────────────────────────────────────────
    if (type === 'hero') {
      snippets.push(`
    <section class="o_hero_section" style="background:${BG1};padding:clamp(80px,10vw,120px) clamp(24px,6vw,80px);text-align:center;overflow:hidden;">
      <div class="container" style="position:relative;z-index:1;">
        ${data.trust_badge ? `<div style="display:inline-flex;align-items:center;gap:7px;background:${primary}18;border:1px solid ${primary}35;border-radius:40px;padding:7px 18px;margin-bottom:28px;font-size:13px;color:${primary};font-weight:600;"><span style="width:7px;height:7px;border-radius:50%;background:${primary};display:inline-block;"></span>${esc(data.trust_badge)}</div>` : ''}
        <h1 style="font-size:clamp(34px,5.5vw,68px);font-weight:900;color:${TXT};line-height:1.08;letter-spacing:-2.5px;margin-bottom:24px;">${esc(data.headline)}</h1>
        ${data.subheadline ? `<p style="font-size:clamp(16px,2vw,21px);color:${TXT2};line-height:1.7;max-width:560px;margin:0 auto 40px;">${esc(data.subheadline)}</p>` : ''}
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          ${data.cta_text ? `<a href="#contact" class="btn btn-lg" style="background:${primary};color:${BG1};border-radius:12px;font-weight:800;font-size:17px;padding:16px 42px;box-shadow:0 0 40px ${primary}40;text-decoration:none;">${esc(data.cta_text)}</a>` : ''}
          ${data.cta_secondary ? `<a href="#" class="btn btn-lg" style="background:transparent;color:${TXT};border:1px solid #1E3350;border-radius:12px;font-weight:600;font-size:17px;padding:16px 42px;text-decoration:none;">${esc(data.cta_secondary)}</a>` : ''}
        </div>
      </div>
    </section>`)
    }

    // ── BENEFITS / FEATURES ─────────────────────────────────────────────
    else if (type === 'benefits' || type === 'features') {
      const bg = BG2
      const iconBg = `${primary}18`
      const cards = (data.items || []).map((item: any) => `
          <div class="col-lg-4 col-md-6">
            <div style="background:${BG1};border:1px solid #182A40;border-radius:20px;padding:30px 26px;height:100%;">
              <div style="width:52px;height:52px;border-radius:14px;background:${iconBg};display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:18px;">${esc(item.icon || '')}</div>
              <h3 style="font-size:17px;font-weight:700;color:${TXT};margin-bottom:10px;line-height:1.3;">${esc(item.title || '')}</h3>
              <p style="font-size:14px;color:${TXT2};line-height:1.68;margin:0;">${esc(item.desc || '')}</p>
            </div>
          </div>`).join('')
      snippets.push(`
    <section style="background:${bg};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container">
        ${data.title ? `<h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">${esc(data.title)}</h2>` : ''}
        <div class="row g-4">${cards}</div>
      </div>
    </section>`)
    }

    // ── PROBLEM ─────────────────────────────────────────────────────────
    else if (type === 'problem') {
      const cards = (data.items || []).map((item: any) => `
          <div class="col-lg-4 col-md-6">
            <div style="background:${BG2};border:1px solid rgba(239,68,68,0.2);border-radius:18px;padding:26px;height:100%;display:flex;gap:16px;align-items:flex-start;">
              <div style="width:50px;height:50px;border-radius:13px;background:rgba(239,68,68,0.1);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">${esc(item.icon || '')}</div>
              <div>
                <h3 style="font-size:15px;font-weight:700;color:${TXT};margin-bottom:8px;line-height:1.3;">${esc(item.title || '')}</h3>
                <p style="font-size:13px;color:${TXT2};line-height:1.68;margin:0;">${esc(item.desc || '')}</p>
              </div>
            </div>
          </div>`).join('')
      snippets.push(`
    <section style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container">
        ${data.title ? `<h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">${esc(data.title)}</h2>` : ''}
        <div class="row g-4">${cards}</div>
      </div>
    </section>`)
    }

    // ── SOCIAL PROOF ────────────────────────────────────────────────────
    else if (type === 'social_proof') {
      const cards = (data.testimonials || []).map((t: any) => `
          <div class="col-lg-4 col-md-6">
            <div style="background:${BG2};border:1px solid #182A40;border-radius:20px;padding:28px 26px;height:100%;display:flex;flex-direction:column;">
              <div style="color:#F59E0B;font-size:16px;margin-bottom:14px;">★★★★★</div>
              <p style="font-size:15px;color:${TXT2};line-height:1.75;font-style:italic;flex:1;margin-bottom:18px;">"${esc(t.text)}"</p>
              <div style="display:flex;align-items:center;gap:12px;">
                <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,${primary},${accent});display:flex;align-items:center;justify-content:center;font-weight:700;color:${BG1};font-size:15px;flex-shrink:0;">${esc((t.name || 'A').charAt(0).toUpperCase())}</div>
                <div><strong style="color:${TXT};font-size:14px;">${esc(t.name || '')}</strong><p style="font-size:12px;color:#445F78;margin:2px 0 0;">${esc(t.role || '')}</p></div>
              </div>
            </div>
          </div>`).join('')
      snippets.push(`
    <section style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container">
        ${data.title ? `<h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">${esc(data.title)}</h2>` : ''}
        <div class="row g-4">${cards}</div>
      </div>
    </section>`)
    }

    // ── HOW IT WORKS ────────────────────────────────────────────────────
    else if (type === 'how_it_works') {
      const steps = (data.steps || []).map((step: any) => `
          <div style="display:flex;gap:20px;align-items:flex-start;background:${BG1};border:1px solid #182A40;border-radius:16px;padding:22px 26px;margin-bottom:14px;">
            <div style="min-width:46px;height:46px;border-radius:12px;background:${primary}18;border:1px solid ${primary}35;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${primary};flex-shrink:0;">${esc(String(step.number || ''))}</div>
            <div>
              <h3 style="font-size:16px;font-weight:700;color:${TXT};margin-bottom:6px;">${esc(step.title || '')}</h3>
              <p style="font-size:14px;color:${TXT2};line-height:1.68;margin:0;">${esc(step.desc || '')}</p>
            </div>
          </div>`).join('')
      snippets.push(`
    <section style="background:${BG2};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container" style="max-width:680px;">
        ${data.title ? `<h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">${esc(data.title)}</h2>` : ''}
        ${steps}
      </div>
    </section>`)
    }

    // ── FAQ ─────────────────────────────────────────────────────────────
    else if (type === 'faq') {
      const items = (data.items || []).map((item: any, i: number) => `
          <div class="accordion-item" style="background:${BG2};border:1px solid #182A40;border-radius:14px;margin-bottom:10px;overflow:hidden;">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq_${i}" style="background:${BG2};color:${TXT};font-weight:600;font-size:15px;border:none;box-shadow:none;">
                ${esc(item.q)}
                <span style="margin-left:auto;color:${primary};font-size:20px;flex-shrink:0;line-height:1;">+</span>
              </button>
            </h2>
            <div id="faq_${i}" class="accordion-collapse collapse">
              <div class="accordion-body" style="color:${TXT2};font-size:14px;line-height:1.72;">${esc(item.a)}</div>
            </div>
          </div>`).join('')
      snippets.push(`
    <section style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container" style="max-width:720px;">
        ${data.title ? `<h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">${esc(data.title)}</h2>` : ''}
        <div class="accordion">${items}</div>
      </div>
    </section>`)
    }

    // ── CTA FINAL ───────────────────────────────────────────────────────
    else if (type === 'cta_final') {
      snippets.push(`
    <section style="background:${BG2};padding:clamp(80px,10vw,120px) clamp(24px,6vw,80px);text-align:center;">
      <div class="container">
        <h2 style="font-size:clamp(28px,4vw,52px);font-weight:900;color:${TXT};margin-bottom:16px;letter-spacing:-1.5px;line-height:1.08;">${esc(data.headline || '')}</h2>
        ${data.subheadline ? `<p style="font-size:18px;color:${TXT2};margin-bottom:40px;max-width:520px;margin-left:auto;margin-right:auto;line-height:1.65;">${esc(data.subheadline)}</p>` : ''}
        ${data.cta_text ? `<a href="#contact" class="btn btn-lg" style="background:${primary};color:${BG1};border-radius:14px;font-weight:800;font-size:18px;padding:18px 56px;box-shadow:0 0 60px ${primary}50;text-decoration:none;">${esc(data.cta_text)}</a>` : ''}
        ${data.disclaimer ? `<p style="margin-top:18px;font-size:13px;color:#445F78;">${esc(data.disclaimer)}</p>` : ''}
      </div>
    </section>`)
    }

    // ── STATS ───────────────────────────────────────────────────────────
    else if (type === 'stats') {
      const items = data.items || data.stats || []
      const statCols = items.map((item: any) => `
          <div class="col-lg-3 col-md-6">
            <div style="text-align:center;background:${BG1};border:1px solid #182A40;border-radius:20px;padding:36px 24px;">
              <div style="font-size:clamp(38px,5vw,56px);font-weight:900;color:${primary};font-family:monospace;letter-spacing:-2px;line-height:1;margin-bottom:8px;">${esc(String(item.value || item.number || ''))}</div>
              <div style="font-size:14px;color:${TXT2};">${esc(item.label || item.title || '')}</div>
            </div>
          </div>`).join('')
      snippets.push(`
    <section style="background:${BG2};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container">
        ${data.title ? `<h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:52px;letter-spacing:-1px;">${esc(data.title)}</h2>` : ''}
        <div class="row g-4 justify-content-center">${statCols}</div>
      </div>
    </section>`)
    }

    // ── PRICING ─────────────────────────────────────────────────────────
    else if (type === 'pricing') {
      const planCols = (data.plans || []).map((plan: any) => {
        const bg = plan.featured ? `${primary}15` : BG2
        const border = plan.featured ? `${primary}55` : '#182A40'
        const priceColor = plan.featured ? primary : TXT
        const feats = (plan.features || []).map((f: string) =>
          `<li style="font-size:14px;color:${TXT2};margin-bottom:8px;list-style:none;display:flex;gap:9px;align-items:flex-start;"><span style="color:${primary};font-weight:700;flex-shrink:0;">✓</span>${esc(f)}</li>`
        ).join('')
        return `
          <div class="col-lg-4 col-md-6">
            <div style="background:${bg};border:1px solid ${border};border-radius:22px;padding:32px 28px;position:relative;height:100%;">
              ${plan.badge ? `<div style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:${primary};color:${BG1};border-radius:20px;padding:5px 16px;font-size:12px;font-weight:700;white-space:nowrap;">${esc(plan.badge)}</div>` : ''}
              <h3 style="color:${TXT};font-size:18px;font-weight:700;margin-bottom:10px;">${esc(plan.name || '')}</h3>
              <div style="font-size:48px;font-weight:900;color:${priceColor};letter-spacing:-2px;line-height:1;">${esc(String(plan.price || ''))}</div>
              <div style="font-size:13px;color:#445F78;margin-bottom:22px;">${esc(plan.period || plan.billing || '')}</div>
              <ul style="padding:0;margin:0 0 24px;">${feats}</ul>
              ${plan.cta ? `<a href="#contact" style="display:block;padding:14px;border-radius:11px;text-align:center;font-weight:700;font-size:15px;text-decoration:none;${plan.featured ? `background:${primary};color:${BG1};` : `background:transparent;color:${TXT};border:1px solid #182A40;`}">${esc(plan.cta)}</a>` : ''}
            </div>
          </div>`
      }).join('')
      snippets.push(`
    <section style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container">
        ${data.title ? `<h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:${data.subtitle ? '12px' : '48px'};letter-spacing:-1px;">${esc(data.title)}</h2>` : ''}
        ${data.subtitle ? `<p style="text-align:center;color:${TXT2};font-size:17px;margin-bottom:48px;">${esc(data.subtitle)}</p>` : ''}
        <div class="row g-4 justify-content-center">${planCols}</div>
      </div>
    </section>`)
    }

    // ── CONTACT FORM ────────────────────────────────────────────────────
    else if (type === 'contact_form') {
      const fields = data.fields || ['Nombre', 'Email', 'Teléfono']
      const inputsHtml = fields.slice(0, 3).map((f: string) => `
              <div class="mb-3">
                <label class="form-label" style="font-size:13px;font-weight:600;color:${TXT2};">${esc(f)}</label>
                <input type="text" name="${esc(f.toLowerCase())}" placeholder="${esc(f)}" class="form-control" style="background:${BG1};border:1px solid #182A40;color:${TXT};border-radius:10px;padding:12px 16px;font-size:14px;" />
              </div>`).join('')
      snippets.push(`
    <section id="contact" style="background:${BG2};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container">
        ${data.title ? `<h2 style="text-align:center;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${TXT};margin-bottom:${data.subtitle ? '12px' : '48px'};letter-spacing:-1px;">${esc(data.title)}</h2>` : ''}
        ${data.subtitle ? `<p style="text-align:center;color:${TXT2};font-size:16px;margin-bottom:48px;line-height:1.65;">${esc(data.subtitle)}</p>` : ''}
        <div style="max-width:560px;margin:0 auto;background:${BG1};border:1px solid #182A40;border-radius:22px;padding:36px 32px;">
          <form>
            ${inputsHtml}
            <div class="mb-3">
              <label class="form-label" style="font-size:13px;font-weight:600;color:${TXT2};">${esc(data.fields?.[3] || 'Mensaje')}</label>
              <textarea name="message" placeholder="¿En qué podemos ayudarte?" class="form-control" rows="4" style="background:${BG1};border:1px solid #182A40;color:${TXT};border-radius:10px;padding:12px 16px;font-size:14px;resize:vertical;"></textarea>
            </div>
            <button type="submit" class="btn btn-lg w-100" style="background:${primary};color:${BG1};border:none;border-radius:12px;font-weight:800;font-size:16px;padding:16px;">${esc(data.cta || data.cta_text || 'Enviar mensaje')}</button>
            ${data.disclaimer ? `<p style="text-align:center;font-size:12px;color:#445F78;margin-top:12px;">${esc(data.disclaimer)}</p>` : ''}
          </form>
        </div>
      </div>
    </section>`)
    }

    // ── FALLBACK (unknown types) ─────────────────────────────────────────
    else {
      const items = data.items || data.steps || data.testimonials || data.plans || []
      const cards = items.map((item: any) => `
          <div class="col-lg-4 col-md-6">
            <div style="background:${BG2};border:1px solid #182A40;border-radius:14px;padding:22px 20px;height:100%;">
              ${item.icon ? `<div style="font-size:26px;margin-bottom:12px;">${esc(item.icon)}</div>` : ''}
              <h3 style="font-size:16px;font-weight:700;color:${TXT};margin-bottom:8px;">${esc(item.title || item.name || '')}</h3>
              <p style="font-size:13px;color:${TXT2};line-height:1.65;margin:0;">${esc(item.desc || item.text || '')}</p>
            </div>
          </div>`).join('')
      const title = data.title || data.headline || ''
      snippets.push(`
    <section style="background:${BG1};padding:clamp(60px,8vw,96px) clamp(24px,6vw,80px);">
      <div class="container">
        ${title ? `<h2 style="text-align:center;font-size:32px;font-weight:800;color:${TXT};margin-bottom:48px;letter-spacing:-1px;">${esc(String(title))}</h2>` : ''}
        <div class="row g-4">${cards}</div>
      </div>
    </section>`)
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated by LandForge for Odoo Website Builder v16/v17 -->
<!-- Import: Settings > Technical > User Interface > Views, create a new view with this XML -->
<!-- Or add to a custom module's views/ folder and install the module -->
<odoo>
  <template id="landforge_page" name="${esc(blueprint.meta?.title || 'LandForge Page')}" inherit_id="website.layout">
    <xpath expr="//div[@id='wrap']" position="inside">
${snippets.join('\n')}
    </xpath>
  </template>
</odoo>`
}
