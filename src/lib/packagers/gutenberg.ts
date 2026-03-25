/**
 * GUTENBERG PACKAGER
 * All 11 section types. Uses standard WordPress blocks (6.1+).
 * Import: WordPress > Pages > New > Code Editor > paste content
 */

type BlueprintSection = { type: string; data: Record<string, any> }
type Blueprint = { meta?: Record<string, any>; sections: BlueprintSection[]; design?: Record<string, any> }

const BG1 = '#07111F'
const BG2 = '#0C1826'
const TXT = '#EEF5FF'
const TXT2 = '#7B98B8'

function esc(s: string = '') {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function block(name: string, attrs: Record<string, any>, inner: string): string {
  const a = Object.keys(attrs).length ? ' ' + JSON.stringify(attrs) : ''
  return `<!-- wp:${name}${a} -->\n${inner}\n<!-- /wp:${name} -->`
}

function heading(text: string, level = 2, align = 'center', color = TXT, size = '36px'): string {
  return block('heading', {
    level, textAlign: align,
    style: { color: { text: color }, typography: { fontSize: size, fontWeight: '800', letterSpacing: level === 1 ? '-2.5px' : '-1px' } },
  }, `<h${level} class="wp-block-heading${align !== 'left' ? ` has-text-align-${align}` : ''}" style="color:${color};font-size:${size};font-weight:800;">${esc(text)}</h${level}>`)
}

function para(html: string, align = 'left'): string {
  return block('paragraph', align !== 'left' ? { align } : {},
    `<p${align !== 'left' ? ` class="has-text-align-${align}"` : ''}>${html}</p>`)
}

function ctaButton(text: string, primary: string): string {
  return block('buttons', { layout: { type: 'flex', justifyContent: 'center' } },
    block('button', { style: { color: { background: primary, text: BG1 }, border: { radius: '12px' } } },
      `<div class="wp-block-button"><a class="wp-block-button__link wp-element-button has-background" href="#" style="background-color:${primary};color:${BG1};border-radius:12px;padding:16px 40px;font-size:17px;font-weight:700;">${esc(text)}</a></div>`))
}

function groupSection(inner: string, bg: string, padV = 64): string {
  return block('group', {
    align: 'full',
    style: { color: { background: bg }, spacing: { padding: { top: `${padV}px`, bottom: `${padV}px`, left: '40px', right: '40px' } } },
  }, `<div class="wp-block-group alignfull has-background" style="background-color:${bg};padding:${padV}px 40px;">\n${inner}\n</div>`)
}

function columns(colBlocks: string[]): string {
  const inner = colBlocks.map(b => block('column', {}, b)).join('\n')
  return block('columns', { isStackedOnMobile: true }, inner)
}

function rawHtml(content: string): string {
  return block('html', {}, content)
}

export function packGutenberg(blueprint: Blueprint): string {
  const primary = blueprint.design?.primaryColor || '#00E5A0'
  const blocks: string[] = []

  for (const { type, data } of blueprint.sections) {

    if (type === 'hero') {
      const inner = [
        ...(data.trust_badge ? [para(`<span style="color:${primary};font-size:13px;font-weight:600;">✓ ${esc(data.trust_badge)}</span>`, 'center')] : []),
        heading(data.headline || '', 1, 'center', TXT, 'clamp(34px,5.5vw,64px)'),
        ...(data.subheadline ? [para(`<span style="font-size:18px;color:${TXT2};line-height:1.7;">${esc(data.subheadline)}</span>`, 'center')] : []),
        ...(data.cta_text ? [ctaButton(data.cta_text, primary)] : []),
        ...(data.cta_secondary ? [para(`<span style="font-size:16px;color:${TXT2};">${esc(data.cta_secondary)}</span>`, 'center')] : []),
      ].join('\n')
      blocks.push(groupSection(inner, BG1, 100))
    }

    else if (type === 'benefits' || type === 'features' || type === 'problem') {
      const bg = type === 'problem' ? BG1 : BG2
      const iconBg = type === 'problem' ? '#EF444415' : `${primary}18`
      const items = data.items || []
      const colBlocks = items.map((item: any) => [
        para(`<span style="font-size:36px;">${item.icon || ''}</span>`, 'center'),
        heading(item.title || '', 3, 'center', TXT, '17px'),
        para(`<span style="font-size:14px;color:${TXT2};line-height:1.65;">${esc(item.desc || '')}</span>`, 'center'),
      ].join('\n'))
      const inner = [
        ...(data.title ? [heading(data.title, 2, 'center', TXT, '36px')] : []),
        columns(colBlocks),
      ].join('\n')
      blocks.push(groupSection(inner, bg))
    }

    else if (type === 'social_proof') {
      const colBlocks = (data.testimonials || []).map((t: any) =>
        rawHtml(`<div style="background:${BG2};border:1px solid #182A40;border-radius:18px;padding:26px 24px;">
  <div style="color:#F59E0B;font-size:16px;margin-bottom:14px;">★★★★★</div>
  <p style="font-size:15px;color:${TXT2};line-height:1.75;font-style:italic;margin-bottom:18px;">"${esc(t.text)}"</p>
  <strong style="color:${TXT};font-size:14px;">${esc(t.name)}</strong>
  <p style="font-size:12px;color:#445F78;margin:2px 0 0;">${esc(t.role)}</p>
</div>`)
      )
      const inner = [
        ...(data.title ? [heading(data.title, 2, 'center', TXT, '36px')] : []),
        columns(colBlocks),
      ].join('\n')
      blocks.push(groupSection(inner, BG1))
    }

    else if (type === 'how_it_works') {
      const stepBlocks = (data.steps || []).map((step: any) =>
        rawHtml(`<div style="display:flex;gap:20px;align-items:flex-start;background:${BG1};border:1px solid #182A40;border-radius:16px;padding:22px 26px;margin-bottom:14px;">
  <div style="min-width:46px;height:46px;border-radius:12px;background:${primary}18;border:1px solid ${primary}35;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${primary};">${esc(String(step.number || ''))}</div>
  <div><strong style="color:${TXT};font-size:16px;display:block;margin-bottom:6px;">${esc(step.title || '')}</strong><p style="color:${TXT2};font-size:14px;line-height:1.68;margin:0;">${esc(step.desc || '')}</p></div>
</div>`)
      )
      const inner = [
        ...(data.title ? [heading(data.title, 2, 'center', TXT, '36px')] : []),
        ...stepBlocks,
      ].join('\n')
      blocks.push(groupSection(inner, BG2))
    }

    else if (type === 'faq') {
      // wp:details is valid since WordPress 6.1
      const itemBlocks = (data.items || []).map((item: any) =>
        block('details', { showContent: false },
          `<details class="wp-block-details" style="background:${BG2};border:1px solid #182A40;border-radius:14px;padding:18px 22px;margin-bottom:10px;"><summary style="font-weight:600;color:${TXT};font-size:15px;cursor:pointer;">${esc(item.q)}</summary>\n${para(`<span style="font-size:14px;color:${TXT2};line-height:1.72;">${esc(item.a)}</span>`)}</details>`)
      )
      const inner = [
        ...(data.title ? [heading(data.title, 2, 'center', TXT, '36px')] : []),
        ...itemBlocks,
      ].join('\n')
      blocks.push(groupSection(inner, BG1))
    }

    else if (type === 'cta_final') {
      const inner = [
        heading(data.headline || '', 2, 'center', TXT, 'clamp(28px,4vw,48px)'),
        ...(data.subheadline ? [para(`<span style="font-size:18px;color:${TXT2};line-height:1.65;">${esc(data.subheadline)}</span>`, 'center')] : []),
        ...(data.cta_text ? [ctaButton(data.cta_text, primary)] : []),
        ...(data.disclaimer ? [para(`<span style="font-size:12px;color:#445F78;">${esc(data.disclaimer)}</span>`, 'center')] : []),
      ].join('\n')
      blocks.push(groupSection(inner, BG2, 100))
    }

    else if (type === 'stats') {
      const items = data.items || data.stats || []
      const colBlocks = items.map((item: any) => [
        heading(item.value || item.number || '', 2, 'center', primary, '52px'),
        para(`<span style="font-size:14px;color:${TXT2};">${esc(item.label || item.title || '')}</span>`, 'center'),
      ].join('\n'))
      const inner = [
        ...(data.title ? [heading(data.title, 2, 'center', TXT, '36px')] : []),
        columns(colBlocks),
      ].join('\n')
      blocks.push(groupSection(inner, BG2))
    }

    else if (type === 'pricing') {
      const plans = data.plans || []
      const plansHtml = plans.map((plan: any) => {
        const bg = plan.featured ? `${primary}15` : BG2
        const border = plan.featured ? `${primary}55` : '#182A40'
        const priceColor = plan.featured ? primary : TXT
        const feats = (plan.features || []).map((f: string) =>
          `<li style="color:${TXT2};font-size:14px;margin-bottom:8px;list-style:none;display:flex;gap:8px;"><span style="color:${primary};font-weight:700;">✓</span>${esc(f)}</li>`
        ).join('')
        return `<div style="flex:1;min-width:240px;max-width:300px;background:${bg};border:1px solid ${border};border-radius:20px;padding:28px;position:relative;">
  ${plan.badge ? `<div style="display:inline-block;background:${primary};color:${BG1};border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;margin-bottom:12px;">${esc(plan.badge)}</div>` : ''}
  <h3 style="color:${TXT};font-size:18px;font-weight:700;margin-bottom:10px;">${esc(plan.name || '')}</h3>
  <div style="font-size:48px;font-weight:900;color:${priceColor};letter-spacing:-2px;line-height:1;">${esc(String(plan.price || ''))}</div>
  <div style="font-size:13px;color:#445F78;margin-bottom:22px;">${esc(plan.period || plan.billing || '')}</div>
  <ul style="padding:0;margin:0 0 24px;">${feats}</ul>
  ${plan.cta ? `<button style="width:100%;padding:14px;border-radius:10px;border:${plan.featured ? 'none' : '1px solid #182A40'};background:${plan.featured ? primary : 'transparent'};color:${plan.featured ? BG1 : TXT};font-weight:700;cursor:pointer;">${esc(plan.cta)}</button>` : ''}
</div>`
      }).join('\n')
      const content = `<div style="background:${BG1};padding:64px 40px;">
  ${data.title ? `<h2 style="text-align:center;font-size:36px;font-weight:800;color:${TXT};margin-bottom:${data.subtitle ? '12px' : '48px'};">${esc(data.title)}</h2>` : ''}
  ${data.subtitle ? `<p style="text-align:center;color:${TXT2};font-size:17px;margin-bottom:48px;">${esc(data.subtitle)}</p>` : ''}
  <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;max-width:960px;margin:0 auto;">${plansHtml}</div>
</div>`
      blocks.push(rawHtml(content))
    }

    else if (type === 'contact_form') {
      const fields = data.fields || ['Nombre', 'Email', 'Teléfono']
      const inputsHtml = fields.slice(0, 3).map((f: string) =>
        `<div style="margin-bottom:18px;"><label style="display:block;font-size:13px;font-weight:600;color:${TXT2};margin-bottom:8px;">${esc(f)}</label><input type="text" placeholder="${esc(f)}" style="width:100%;padding:12px 16px;border-radius:10px;border:1px solid #182A40;background:${BG2};color:${TXT};font-size:14px;" /></div>`
      ).join('')
      const content = `<section style="background:${BG2};padding:64px 40px;">
  ${data.title ? `<h2 style="text-align:center;font-size:36px;font-weight:800;color:${TXT};margin-bottom:${data.subtitle ? '12px' : '48px'};">${esc(data.title)}</h2>` : ''}
  ${data.subtitle ? `<p style="text-align:center;color:${TXT2};font-size:16px;margin-bottom:48px;">${esc(data.subtitle)}</p>` : ''}
  <div style="max-width:560px;margin:0 auto;background:${BG1};border:1px solid #182A40;border-radius:22px;padding:36px;">
    ${inputsHtml}
    <div style="margin-bottom:18px;"><label style="display:block;font-size:13px;font-weight:600;color:${TXT2};margin-bottom:8px;">${esc(data.fields?.[3] || 'Mensaje')}</label><textarea placeholder="¿En qué podemos ayudarte?" style="width:100%;padding:12px 16px;border-radius:10px;border:1px solid #182A40;background:${BG2};color:${TXT};font-size:14px;min-height:100px;resize:vertical;"></textarea></div>
    <button style="width:100%;padding:16px;border-radius:12px;border:none;background:${primary};color:${BG1};font-weight:800;font-size:16px;cursor:pointer;">${esc(data.cta || data.cta_text || 'Enviar mensaje')}</button>
    ${data.disclaimer ? `<p style="text-align:center;font-size:12px;color:#445F78;margin-top:12px;">${esc(data.disclaimer)}</p>` : ''}
  </div>
</section>`
      blocks.push(rawHtml(content))
    }

    // Unknown types: render as HTML so nothing is lost
    else {
      const title = data.title || data.headline || ''
      const items = data.items || data.steps || data.testimonials || data.plans || []
      const content = `<div style="background:${BG1};padding:64px 40px;">
  ${title ? `<h2 style="text-align:center;font-size:32px;font-weight:800;color:${TXT};margin-bottom:40px;">${esc(String(title))}</h2>` : ''}
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;max-width:960px;margin:0 auto;">
    ${items.map((item: any) => `<div style="background:${BG2};border:1px solid #182A40;border-radius:14px;padding:20px;"><h3 style="color:${TXT};font-size:16px;font-weight:700;margin-bottom:8px;">${esc(item.title || item.name || '')}</h3><p style="color:${TXT2};font-size:13px;line-height:1.65;">${esc(item.desc || item.text || '')}</p></div>`).join('')}
  </div>
</div>`
      blocks.push(rawHtml(content))
    }
  }

  return `<!-- Generated by LandForge | ${new Date().toISOString()} -->\n` + blocks.join('\n\n')
}
