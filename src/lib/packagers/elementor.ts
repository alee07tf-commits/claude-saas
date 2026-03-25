/**
 * ELEMENTOR PACKAGER
 * All 11 section types. Everything editable via Elementor's visual panel.
 * Import: Elementor > Templates > Import Template
 */

type BlueprintSection = { type: string; data: Record<string, any> }
type Blueprint = { meta?: Record<string, any>; sections: BlueprintSection[]; design?: Record<string, any> }

const BG1 = '#07111F'
const BG2 = '#0C1826'
const TXT = '#EEF5FF'
const TXT2 = '#7B98B8'

function uid() { return Math.floor(Math.random() * 90000000) + 10000000 }

function w(widgetType: string, settings: Record<string, any>) {
  return { id: uid(), elType: 'widget', settings, elements: [], widgetType }
}

function PAD(v: number, h = 40) {
  return { unit: 'px', top: v, right: h, bottom: v, left: h }
}

function singleCol(widgets: any[], settings: Record<string, any> = {}) {
  return {
    id: uid(), elType: 'section',
    settings: { layout: 'full_width', gap: 'no', ...settings },
    elements: [{ id: uid(), elType: 'column', settings: { _column_size: 100 }, elements: widgets }],
  }
}

function multiCol(colsContent: any[][], settings: Record<string, any> = {}) {
  const size = Math.floor(100 / Math.max(colsContent.length, 1))
  return {
    id: uid(), elType: 'section',
    settings: { layout: 'full_width', gap: 'default', ...settings },
    elements: colsContent.map(els => ({ id: uid(), elType: 'column', settings: { _column_size: size }, elements: els })),
  }
}

function heading(title: string, level: string, align: string, color: string, size: number, weight = '800') {
  return w('heading', { title, header_size: level, align, title_color: color, typography_font_size: { unit: 'px', size }, typography_font_weight: weight })
}

function html(content: string) {
  return w('html', { html: content })
}

function textEditor(content: string) {
  return w('text-editor', { editor: content })
}

function btn(text: string, bg: string, color: string, align = 'center') {
  return w('button', {
    text, align,
    background_color: bg, button_text_color: color,
    border_radius: { unit: 'px', top: 12, right: 12, bottom: 12, left: 12, isLinked: true },
    text_padding: PAD(16, 40),
    typography_font_size: { unit: 'px', size: 17 }, typography_font_weight: '700',
  })
}

export function packElementor(blueprint: Blueprint): string {
  const primary = blueprint.design?.primaryColor || '#00E5A0'
  const accent = blueprint.design?.accentColor || '#0073AA'
  const elements: any[] = []

  for (const { type, data } of blueprint.sections) {

    if (type === 'hero') {
      elements.push(singleCol([
        ...(data.trust_badge ? [textEditor(`<p style="color:${primary};font-size:13px;font-weight:600;text-align:center;">✓ ${data.trust_badge}</p>`)] : []),
        heading(data.headline || '', 'h1', 'center', TXT, 52, '900'),
        textEditor(`<p style="text-align:center;font-size:18px;color:${TXT2};line-height:1.7;max-width:580px;margin:0 auto;">${data.subheadline || ''}</p>`),
        ...(data.cta_text ? [btn(data.cta_text, primary, BG1)] : []),
        ...(data.cta_secondary ? [btn(data.cta_secondary, 'transparent', TXT)] : []),
      ], { background_color: BG1, padding: PAD(100) }))
    }

    else if (type === 'benefits' || type === 'features' || type === 'problem') {
      const bg = type === 'problem' ? BG1 : BG2
      const iconBg = type === 'problem' ? '#EF444415' : `${primary}18`
      if (data.title) {
        elements.push(singleCol(
          [heading(data.title, 'h2', 'center', TXT, 36)],
          { background_color: bg, padding: PAD(64, 40) }
        ))
      }
      const cols = (data.items || []).map((item: any) => [
        html(`<div style="width:52px;height:52px;border-radius:14px;background:${iconBg};display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px;">${item.icon || ''}</div>`),
        heading(item.title || '', 'h3', 'center', TXT, 16),
        textEditor(`<p style="text-align:center;font-size:14px;color:${TXT2};line-height:1.65;">${item.desc || ''}</p>`),
      ])
      if (cols.length) elements.push(multiCol(cols, { background_color: bg, padding: PAD(data.title ? 16 : 64, 40) }))
    }

    else if (type === 'social_proof') {
      if (data.title) {
        elements.push(singleCol([heading(data.title, 'h2', 'center', TXT, 36)], { background_color: BG1, padding: PAD(64, 40) }))
      }
      const cols = (data.testimonials || []).map((t: any) => [
        html(`<div style="background:${BG2};border:1px solid #182A40;border-radius:18px;padding:26px;">
  <div style="color:#F59E0B;font-size:16px;margin-bottom:14px;">★★★★★</div>
  <p style="font-size:15px;color:${TXT2};line-height:1.75;font-style:italic;margin-bottom:18px;">"${t.text}"</p>
  <strong style="color:${TXT};font-size:14px;">${t.name}</strong>
  <p style="font-size:12px;color:#445F78;margin:2px 0 0;">${t.role}</p>
</div>`),
      ])
      if (cols.length) elements.push(multiCol(cols, { background_color: BG1, padding: PAD(data.title ? 16 : 64, 40) }))
    }

    else if (type === 'how_it_works') {
      if (data.title) {
        elements.push(singleCol([heading(data.title, 'h2', 'center', TXT, 36)], { background_color: BG2, padding: PAD(64, 40) }))
      }
      const steps = (data.steps || []).map((step: any) =>
        html(`<div style="display:flex;gap:20px;align-items:flex-start;background:${BG1};border:1px solid #182A40;border-radius:16px;padding:22px 26px;margin-bottom:14px;">
  <div style="min-width:46px;height:46px;border-radius:12px;background:${primary}18;border:1px solid ${primary}35;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${primary};">${step.number || ''}</div>
  <div><strong style="color:${TXT};font-size:16px;display:block;margin-bottom:6px;">${step.title || ''}</strong><p style="color:${TXT2};font-size:14px;line-height:1.68;margin:0;">${step.desc || ''}</p></div>
</div>`)
      )
      if (steps.length) elements.push(singleCol(steps, { background_color: BG2, padding: PAD(data.title ? 16 : 64, 100) }))
    }

    else if (type === 'faq') {
      elements.push(singleCol([
        ...(data.title ? [heading(data.title, 'h2', 'center', TXT, 36)] : []),
        w('accordion', {
          tabs: (data.items || []).map((item: any) => ({
            tab_title: item.q,
            tab_content: item.a,
            tab_icon: { value: 'fas fa-plus', library: 'fa-solid' },
            tab_icon_active: { value: 'fas fa-minus', library: 'fa-solid' },
          })),
        }),
      ], { background_color: BG1, padding: PAD(64) }))
    }

    else if (type === 'cta_final') {
      elements.push(singleCol([
        heading(data.headline || '', 'h2', 'center', TXT, 48, '900'),
        ...(data.subheadline ? [textEditor(`<p style="text-align:center;font-size:18px;color:${TXT2};line-height:1.65;">${data.subheadline}</p>`)] : []),
        ...(data.cta_text ? [btn(data.cta_text, primary, BG1)] : []),
        ...(data.disclaimer ? [textEditor(`<p style="text-align:center;font-size:12px;color:#445F78;">${data.disclaimer}</p>`)] : []),
      ], { background_color: BG2, padding: PAD(100) }))
    }

    else if (type === 'stats') {
      if (data.title) {
        elements.push(singleCol([heading(data.title, 'h2', 'center', TXT, 36)], { background_color: BG2, padding: PAD(64, 40) }))
      }
      const cols = (data.items || data.stats || []).map((item: any) => [
        html(`<div style="text-align:center;padding:36px 24px;background:${BG1};border:1px solid #182A40;border-radius:20px;">
  <div style="font-size:52px;font-weight:900;color:${primary};font-family:monospace;letter-spacing:-2px;line-height:1;margin-bottom:8px;">${item.value || item.number || ''}</div>
  <div style="font-size:14px;color:${TXT2};">${item.label || item.title || ''}</div>
</div>`),
      ])
      if (cols.length) elements.push(multiCol(cols, { background_color: BG2, padding: PAD(data.title ? 16 : 64, 40) }))
    }

    else if (type === 'pricing') {
      if (data.title) {
        elements.push(singleCol([
          heading(data.title, 'h2', 'center', TXT, 36),
          ...(data.subtitle ? [textEditor(`<p style="text-align:center;font-size:17px;color:${TXT2};">${data.subtitle}</p>`)] : []),
        ], { background_color: BG1, padding: PAD(64, 40) }))
      }
      const planCols = (data.plans || []).map((plan: any) => {
        const bg = plan.featured ? `${primary}15` : BG2
        const border = plan.featured ? `${primary}55` : '#182A40'
        const priceColor = plan.featured ? primary : TXT
        const feats = (plan.features || []).map((f: string) =>
          `<li style="color:${TXT2};font-size:14px;margin-bottom:8px;list-style:none;display:flex;gap:8px;"><span style="color:${primary};font-weight:700;">✓</span>${f}</li>`
        ).join('')
        return [html(`<div style="background:${bg};border:1px solid ${border};border-radius:20px;padding:28px;position:relative;">
  ${plan.badge ? `<div style="display:inline-block;background:${primary};color:${BG1};border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;margin-bottom:12px;">${plan.badge}</div>` : ''}
  <h3 style="color:${TXT};font-size:18px;font-weight:700;margin-bottom:10px;">${plan.name || ''}</h3>
  <div style="font-size:48px;font-weight:900;color:${priceColor};letter-spacing:-2px;line-height:1;">${plan.price || ''}</div>
  <div style="font-size:13px;color:#445F78;margin-bottom:22px;">${plan.period || plan.billing || ''}</div>
  <ul style="padding:0;margin:0 0 24px;">${feats}</ul>
  ${plan.cta ? `<div style="padding:14px;border-radius:10px;text-align:center;font-weight:700;cursor:pointer;border:${plan.featured ? 'none' : `1px solid #182A40`};background:${plan.featured ? primary : 'transparent'};color:${plan.featured ? BG1 : TXT};">${plan.cta}</div>` : ''}
</div>`)]
      })
      if (planCols.length) elements.push(multiCol(planCols, { background_color: BG1, padding: PAD(data.title ? 16 : 64, 40) }))
    }

    else if (type === 'contact_form') {
      const fields = data.fields || ['Nombre', 'Email', 'Teléfono']
      const inputsHtml = fields.slice(0, 3).map((f: string) =>
        `<div style="margin-bottom:18px;"><label style="display:block;font-size:13px;font-weight:600;color:${TXT2};margin-bottom:8px;">${f}</label><input type="text" placeholder="${f}" style="width:100%;padding:12px 16px;border-radius:10px;border:1px solid #182A40;background:${BG2};color:${TXT};font-size:14px;" /></div>`
      ).join('')
      elements.push(singleCol([
        ...(data.title ? [heading(data.title, 'h2', 'center', TXT, 36)] : []),
        ...(data.subtitle ? [textEditor(`<p style="text-align:center;font-size:16px;color:${TXT2};">${data.subtitle}</p>`)] : []),
        html(`<div style="max-width:560px;margin:0 auto;background:${BG1};border:1px solid #182A40;border-radius:22px;padding:36px;">
  ${inputsHtml}
  <div style="margin-bottom:18px;"><label style="display:block;font-size:13px;font-weight:600;color:${TXT2};margin-bottom:8px;">${data.fields?.[3] || 'Mensaje'}</label><textarea placeholder="¿En qué podemos ayudarte?" style="width:100%;padding:12px 16px;border-radius:10px;border:1px solid #182A40;background:${BG2};color:${TXT};font-size:14px;min-height:100px;resize:vertical;"></textarea></div>
  <button style="width:100%;padding:16px;border-radius:12px;border:none;background:${primary};color:${BG1};font-weight:800;font-size:16px;cursor:pointer;">${data.cta || data.cta_text || 'Enviar mensaje'}</button>
  ${data.disclaimer ? `<p style="text-align:center;font-size:12px;color:#445F78;margin-top:12px;">${data.disclaimer}</p>` : ''}
</div>`),
      ], { background_color: BG2, padding: PAD(64) }))
    }

    // Unknown types: render as generic content block so nothing is lost
    else {
      const fallbackTitle = data.title || data.headline || type
      const fallbackContent = data.items || data.steps || data.testimonials || data.plans || []
      elements.push(singleCol([
        ...(fallbackTitle ? [heading(String(fallbackTitle), 'h2', 'center', TXT, 32)] : []),
        ...(fallbackContent.length ? [html(`<div style="color:${TXT2};font-size:14px;line-height:1.7;">${fallbackContent.map((i: any) => `<p>• ${i.title || i.name || JSON.stringify(i)}</p>`).join('')}</div>`)] : []),
      ], { background_color: BG1, padding: PAD(64) }))
    }
  }

  return JSON.stringify({
    version: '0.4',
    title: blueprint.meta?.title || 'LandForge Page',
    type: 'page',
    export_date: new Date().toISOString(),
    plugins: [{ name: 'Elementor', slug: 'elementor', version: '3.0.0' }],
    content: elements,
    page_settings: {},
  }, null, 2)
}
