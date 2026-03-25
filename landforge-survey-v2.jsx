import { useState, useEffect, useRef } from "react";

const T = {
  bg: "#0A0E17", bgCard: "#111827", bgHover: "#1A2332",
  border: "#1E293B", accent: "#00E5A0", accentAlt: "#00B8D4",
  white: "#F1F5F9", gray: "#94A3B8", grayDark: "#64748B",
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
};

const PAGE_TYPES = {
  homepage: { label: "Homepage", icon: "🏠", desc: "Página principal del negocio", sections: [
    { id: "hero", label: "Hero principal con CTA", default: true }, { id: "services", label: "Servicios / Qué ofrecemos", default: true },
    { id: "about_preview", label: "Sobre nosotros (resumen)", default: true }, { id: "benefits", label: "Beneficios / Por qué elegirnos", default: true },
    { id: "testimonials", label: "Testimonios de clientes", default: true }, { id: "portfolio", label: "Portfolio / Trabajos", default: false },
    { id: "stats", label: "Cifras / Estadísticas", default: false }, { id: "team", label: "Equipo", default: false },
    { id: "faq", label: "Preguntas frecuentes", default: true }, { id: "cta_banner", label: "Banner CTA final", default: true },
    { id: "contact_form", label: "Formulario de contacto", default: true }, { id: "map", label: "Mapa / Ubicación", default: false },
    { id: "blog_preview", label: "Últimos artículos del blog", default: false }, { id: "partners", label: "Partners / Marcas", default: false },
  ]},
  about: { label: "Quiénes somos", icon: "👥", desc: "Sobre la empresa", sections: [
    { id: "hero_about", label: "Hero de marca", default: true }, { id: "story", label: "Historia / Misión", default: true },
    { id: "values", label: "Valores", default: true }, { id: "team", label: "Equipo", default: true },
    { id: "timeline", label: "Línea temporal", default: false }, { id: "stats", label: "Cifras", default: true },
    { id: "certifications", label: "Certificaciones", default: false }, { id: "gallery", label: "Galería", default: false },
    { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
  services: { label: "Servicios", icon: "⚙️", desc: "Catálogo de servicios", sections: [
    { id: "hero_services", label: "Hero con propuesta de valor", default: true }, { id: "services_grid", label: "Grid de servicios", default: true },
    { id: "process", label: "Cómo trabajamos", default: true }, { id: "benefits", label: "Beneficios", default: true },
    { id: "pricing", label: "Tabla de precios", default: false }, { id: "testimonials", label: "Testimonios", default: true },
    { id: "faq", label: "Preguntas frecuentes", default: true }, { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
  contact: { label: "Contacto", icon: "📬", desc: "Página de contacto", sections: [
    { id: "hero_contact", label: "Hero con info de contacto", default: true }, { id: "contact_form", label: "Formulario", default: true },
    { id: "contact_info", label: "Datos de contacto", default: true }, { id: "map", label: "Mapa", default: true },
    { id: "hours", label: "Horarios", default: true }, { id: "faq", label: "FAQ", default: false },
  ]},
  landing: { label: "Landing Page", icon: "🚀", desc: "Para campañas", sections: [
    { id: "hero_landing", label: "Hero con CTA potente", default: true }, { id: "problem", label: "Problema que resolvemos", default: true },
    { id: "solution", label: "Nuestra solución", default: true }, { id: "benefits", label: "Beneficios clave", default: true },
    { id: "social_proof", label: "Social proof", default: true }, { id: "how_it_works", label: "Cómo funciona", default: true },
    { id: "pricing", label: "Pricing / Oferta", default: false }, { id: "faq", label: "FAQ", default: true },
    { id: "final_cta", label: "CTA final", default: true },
  ]},
  reviews: { label: "Reseñas", icon: "⭐", desc: "Testimonios y casos de éxito", sections: [
    { id: "hero_reviews", label: "Hero con puntuación", default: true }, { id: "featured_reviews", label: "Reseñas destacadas", default: true },
    { id: "reviews_grid", label: "Grid de reseñas", default: true }, { id: "platforms", label: "Badges plataformas", default: true },
    { id: "stats", label: "Cifras", default: true }, { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
  portfolio: { label: "Portfolio", icon: "🎨", desc: "Muestra de trabajos", sections: [
    { id: "hero_portfolio", label: "Hero visual", default: true }, { id: "filter_bar", label: "Filtros", default: true },
    { id: "projects_grid", label: "Grid de proyectos", default: true }, { id: "clients", label: "Logos clientes", default: true },
    { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
  product: { label: "Producto", icon: "🛍️", desc: "Página de producto eCommerce", sections: [
    { id: "hero_product", label: "Hero producto + CTA", default: true }, { id: "features", label: "Características", default: true },
    { id: "gallery", label: "Galería", default: true }, { id: "reviews_product", label: "Reseñas", default: true },
    { id: "related", label: "Productos relacionados", default: true }, { id: "faq", label: "FAQ", default: true },
    { id: "guarantee", label: "Garantía", default: true },
  ]},
  pricing_page: { label: "Precios", icon: "💰", desc: "Tabla de planes", sections: [
    { id: "hero_pricing", label: "Hero pricing", default: true }, { id: "pricing_table", label: "Tabla de precios", default: true },
    { id: "comparison_matrix", label: "Matriz comparativa", default: true }, { id: "faq_pricing", label: "FAQ pricing", default: true },
    { id: "guarantee", label: "Garantía", default: true }, { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
};

const CMS_OPTIONS = [
  { id: "elementor", label: "Elementor", desc: "WordPress — JSON importable", color: "#92003B", icon: "E" },
  { id: "gutenberg", label: "Gutenberg", desc: "WordPress — Bloques nativos", color: "#0073AA", icon: "G" },
  { id: "odoo", label: "Odoo", desc: "Website Builder — QWeb snippets", color: "#714B67", icon: "O" },
  { id: "shopify", label: "Shopify", desc: "Theme Editor — Secciones Liquid", color: "#96BF48", icon: "S" },
];

const OBJECTIVES = [
  { id: "leads", label: "Captar leads", desc: "Formularios, CTAs" }, { id: "sales", label: "Vender online", desc: "Compra directa" },
  { id: "inform", label: "Informar", desc: "Presentar empresa" }, { id: "booking", label: "Reservar citas", desc: "Agendar servicios" },
  { id: "download", label: "Descargar recurso", desc: "Lead magnet" }, { id: "branding", label: "Branding", desc: "Imagen de marca" },
];
const TONES = [
  { id: "professional", label: "Profesional", emoji: "💼" }, { id: "friendly", label: "Cercano", emoji: "😊" },
  { id: "premium", label: "Premium", emoji: "✨" }, { id: "dynamic", label: "Dinámico", emoji: "⚡" },
  { id: "technical", label: "Técnico", emoji: "🔬" }, { id: "creative", label: "Creativo", emoji: "🎨" },
];
const SECTORS = ["Salud / Clínicas","Fitness / Deporte","Belleza / Estética","Inmobiliaria","Legal / Abogados","Restauración","Educación","Tecnología / SaaS","eCommerce","Servicios profesionales","Marketing / Agencia","Arquitectura / Diseño","Consultoría","Otro"];
const FONT_STYLES = [
  { id: "modern_sans", label: "Moderna Sans", family: "'DM Sans', sans-serif", preview: "Aa Bb Cc", desc: "Limpia, actual" },
  { id: "geometric", label: "Geométrica", family: "'Space Grotesk', sans-serif", preview: "Aa Bb Cc", desc: "Tech, startups" },
  { id: "elegant_serif", label: "Serif Elegante", family: "'Playfair Display', serif", preview: "Aa Bb Cc", desc: "Premium, lujo" },
  { id: "humanist", label: "Humanista", family: "'Source Sans 3', sans-serif", preview: "Aa Bb Cc", desc: "Accesible, salud" },
  { id: "bold_impact", label: "Bold / Impacto", family: "'Archivo Black', sans-serif", preview: "Aa Bb Cc", desc: "Fitness, potencia" },
  { id: "minimal", label: "Minimalista", family: "'Inter', sans-serif", preview: "Aa Bb Cc", desc: "Ultra limpia" },
  { id: "editorial", label: "Editorial", family: "'Lora', serif", preview: "Aa Bb Cc", desc: "Blog, revista" },
  { id: "custom", label: "Tengo la mía", family: "inherit", preview: "Abc", desc: "Tipografía propia" },
];
const SOCIALS = [
  { id: "instagram", label: "Instagram", icon: "📷" }, { id: "facebook", label: "Facebook", icon: "👤" },
  { id: "linkedin", label: "LinkedIn", icon: "💼" }, { id: "twitter", label: "X / Twitter", icon: "🐦" },
  { id: "tiktok", label: "TikTok", icon: "🎵" }, { id: "youtube", label: "YouTube", icon: "▶️" },
  { id: "whatsapp", label: "WhatsApp", icon: "💬" }, { id: "google_business", label: "Google Business", icon: "📍" },
];

// ============================================
// UI PRIMITIVES
// ============================================
const StepIndicator = ({ current, total }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "36px" }}>
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} style={{ height: "3px", flex: 1, borderRadius: "2px", background: i <= current ? `linear-gradient(90deg, ${T.accent}, ${T.accentAlt})` : T.border, transition: "all 0.5s" }} />
    ))}
    <span style={{ fontSize: "11px", color: T.grayDark, fontFamily: T.mono, marginLeft: "10px", whiteSpace: "nowrap" }}>{current + 1}/{total}</span>
  </div>
);

const StepTitle = ({ step, title, subtitle }) => (
  <div style={{ marginBottom: "28px" }}>
    <span style={{ fontSize: "11px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "2px", fontFamily: T.mono }}>Paso {step}</span>
    <h2 style={{ fontSize: "26px", fontWeight: 800, color: T.white, margin: "6px 0", letterSpacing: "-0.5px" }}>{title}</h2>
    {subtitle && <p style={{ fontSize: "14px", color: T.gray, lineHeight: 1.6 }}>{subtitle}</p>}
  </div>
);

const Label = ({ children, style = {} }) => (
  <div style={{ fontSize: "11px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", fontFamily: T.mono, marginBottom: "12px", marginTop: "24px", ...style }}>{children}</div>
);

const SelectCard = ({ selected, onClick, children, style = {} }) => (
  <div onClick={onClick} style={{
    background: selected ? `${T.accent}08` : T.bgCard, border: `2px solid ${selected ? T.accent : T.border}`,
    borderRadius: "12px", padding: "14px", cursor: "pointer", transition: "all 0.2s", position: "relative",
    boxShadow: selected ? `0 0 20px ${T.accent}15` : "none", ...style,
  }} onMouseEnter={e => { if (!selected) e.currentTarget.style.borderColor = T.grayDark; }}
     onMouseLeave={e => { if (!selected) e.currentTarget.style.borderColor = selected ? T.accent : T.border; }}
  >{children}</div>
);

const Input = ({ label, value, onChange, placeholder, maxLen, multiline, optional, icon }) => (
  <div style={{ marginBottom: "14px" }}>
    {label && <label style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 600, color: T.gray, marginBottom: "5px" }}>
      <span>{icon ? `${icon} ` : ""}{label}{optional ? <span style={{ color: T.grayDark, fontWeight: 400 }}> (opcional)</span> : ""}</span>
      {maxLen && <span style={{ fontFamily: T.mono, fontSize: "10px", color: T.grayDark }}>{(value||"").length}/{maxLen}</span>}
    </label>}
    {multiline ? (
      <textarea value={value||""} onChange={e => onChange(maxLen ? e.target.value.slice(0,maxLen) : e.target.value)} placeholder={placeholder} rows={3}
        style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: `1px solid ${T.border}`, background: T.bg, color: T.white, fontSize: "13px", fontFamily: T.font, outline: "none", resize: "vertical", boxSizing: "border-box" }}
        onFocus={e => e.target.style.borderColor = T.accent} onBlur={e => e.target.style.borderColor = T.border} />
    ) : (
      <input type="text" value={value||""} onChange={e => onChange(maxLen ? e.target.value.slice(0,maxLen) : e.target.value)} placeholder={placeholder}
        style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: `1px solid ${T.border}`, background: T.bg, color: T.white, fontSize: "13px", fontFamily: T.font, outline: "none", boxSizing: "border-box" }}
        onFocus={e => e.target.style.borderColor = T.accent} onBlur={e => e.target.style.borderColor = T.border} />
    )}
  </div>
);

const Chips = ({ options, value, onChange, multi }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
    {options.map(opt => {
      const v = typeof opt === "string" ? opt : opt.id, lb = typeof opt === "string" ? opt : (opt.emoji ? `${opt.emoji} ${opt.label}` : opt.label);
      const sel = multi ? (value||[]).includes(v) : value === v;
      return <div key={v} onClick={() => multi ? onChange(sel ? (value||[]).filter(x=>x!==v) : [...(value||[]),v]) : onChange(v)} style={{
        padding: "7px 12px", borderRadius: "8px", fontSize: "12px", cursor: "pointer",
        background: sel ? `${T.accent}15` : T.bgCard, border: `1px solid ${sel ? T.accent : T.border}`,
        color: sel ? T.accent : T.gray, fontWeight: sel ? 600 : 400, transition: "all 0.15s",
      }}>{lb}</div>;
    })}
  </div>
);

const Nav = ({ onBack, onNext, nextLabel = "Siguiente", nextDisabled, showBack = true }) => (
  <div style={{ display: "flex", justifyContent: showBack ? "space-between" : "flex-end", marginTop: "36px", paddingTop: "20px", borderTop: `1px solid ${T.border}` }}>
    {showBack && <button onClick={onBack} style={{ padding: "10px 20px", borderRadius: "10px", border: `1px solid ${T.border}`, background: "transparent", color: T.gray, fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: T.font }}>← Atrás</button>}
    <button onClick={onNext} disabled={nextDisabled} style={{
      padding: "10px 28px", borderRadius: "10px", border: "none",
      background: nextDisabled ? T.grayDark : `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
      color: nextDisabled ? T.gray : T.bg, fontSize: "13px", fontWeight: 700,
      cursor: nextDisabled ? "not-allowed" : "pointer", fontFamily: T.font, opacity: nextDisabled ? 0.5 : 1,
    }}>{nextLabel} →</button>
  </div>
);

const FileUp = ({ label, file, onFile, accept = "image/*", preview, compact }) => {
  const r = useRef();
  return (
    <div onClick={() => r.current?.click()} style={{
      border: `2px dashed ${file ? T.accent : T.border}`, borderRadius: compact ? "10px" : "14px",
      padding: compact ? "14px" : "28px 16px", textAlign: "center", cursor: "pointer",
      background: file ? `${T.accent}05` : T.bgCard, transition: "all 0.2s",
    }} onMouseEnter={e => e.currentTarget.style.borderColor = T.accent}
       onMouseLeave={e => { if (!file) e.currentTarget.style.borderColor = T.border; }}>
      <input ref={r} type="file" accept={accept} onChange={e => { const f=e.target.files[0]; if(f){const rd=new FileReader();rd.onload=ev=>onFile({data:ev.target.result,name:f.name});rd.readAsDataURL(f);} }} style={{ display: "none" }} />
      {file ? (<div>
        {preview && file.data && <img src={file.data} alt="" style={{ maxWidth: compact?"80px":"100%", maxHeight: compact?"50px":"220px", borderRadius: "8px", marginBottom: "6px", border: `1px solid ${T.border}` }} />}
        <p style={{ fontSize: "11px", color: T.accent, fontWeight: 600 }}>✓ {file.name}</p>
        <p style={{ fontSize: "10px", color: T.grayDark }}>Click para cambiar</p>
      </div>) : (<div>
        <p style={{ fontSize: compact?"12px":"13px", color: T.gray, fontWeight: 600 }}>{label}</p>
        <p style={{ fontSize: "10px", color: T.grayDark, marginTop: "3px" }}>Click o arrastra</p>
      </div>)}
    </div>
  );
};

// ============================================
// STEPS
// ============================================
const S0 = ({ d, set, next }) => (
  <div>
    <StepTitle step={1} title="Elige tu plataforma" subtitle="¿En qué CMS vas a importar la página?" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
      {CMS_OPTIONS.map(c => (
        <SelectCard key={c.id} selected={d.cms===c.id} onClick={() => set({...d, cms:c.id})}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: `${c.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: 800, color: c.color, fontFamily: T.mono, flexShrink: 0 }}>{c.icon}</div>
            <div><div style={{ fontSize: "15px", fontWeight: 700, color: T.white }}>{c.label}</div><div style={{ fontSize: "11px", color: T.grayDark, marginTop: "2px" }}>{c.desc}</div></div>
          </div>
        </SelectCard>
      ))}
    </div>
    <Nav onNext={next} nextDisabled={!d.cms} showBack={false} />
  </div>
);

const S1 = ({ d, set, next, back }) => (
  <div>
    <StepTitle step={2} title="Tipo de página" subtitle="¿Qué tipo de página quieres crear?" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      {Object.entries(PAGE_TYPES).map(([k,v]) => (
        <SelectCard key={k} selected={d.pageType===k} onClick={() => { const defs={}; v.sections.forEach(s=>defs[s.id]=s.default); set({...d,pageType:k,sections:defs}); }} style={{ textAlign: "center", padding: "18px 10px" }}>
          <div style={{ fontSize: "26px", marginBottom: "6px" }}>{v.icon}</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: T.white }}>{v.label}</div>
          <div style={{ fontSize: "10px", color: T.grayDark, marginTop: "3px" }}>{v.desc}</div>
        </SelectCard>
      ))}
    </div>
    <Nav onBack={back} onNext={next} nextDisabled={!d.pageType} />
  </div>
);

const S2 = ({ d, set, next, back }) => (
  <div>
    <StepTitle step={3} title="Sobre el negocio" subtitle="Info del negocio, contacto real y branding." />
    <Label style={{ marginTop: 0 }}>Información básica</Label>
    <Input label="Nombre del negocio" value={d.businessName} onChange={v=>set({...d,businessName:v})} placeholder="Ej: Clínica Dental Sonrisa" />
    <div style={{ marginBottom: "14px" }}><label style={{ fontSize: "12px", fontWeight: 600, color: T.gray, marginBottom: "6px", display: "block" }}>Sector</label><Chips options={SECTORS} value={d.sector} onChange={v=>set({...d,sector:v})} /></div>
    <Input label="Servicio o producto principal" value={d.mainService} onChange={v=>set({...d,mainService:v})} placeholder="Ej: Implantes dentales de última generación" maxLen={200} />
    <Input label="Propuesta de valor única" value={d.uvp} onChange={v=>set({...d,uvp:v})} placeholder="¿Qué hace diferente a este negocio?" maxLen={300} />
    <Input label="Público objetivo" value={d.audience} onChange={v=>set({...d,audience:v})} placeholder="Ej: Mujeres de 30-50 años..." maxLen={200} />
    <Label>Logo de marca</Label>
    <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
      <div style={{ flex: 1 }}><FileUp label="📎 Logo principal" file={d.logo} onFile={f=>set({...d,logo:f})} preview compact /></div>
      <div style={{ flex: 1 }}><FileUp label="📎 Logo alt (blanco)" file={d.logoAlt} onFile={f=>set({...d,logoAlt:f})} preview compact /></div>
    </div>
    <Label>Datos de contacto reales</Label>
    <p style={{ fontSize: "11px", color: T.grayDark, marginBottom: "10px", marginTop: "-6px" }}>Se integran directamente — sin placeholders.</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 10px" }}>
      <Input icon="📞" label="Teléfono" value={d.phone} onChange={v=>set({...d,phone:v})} placeholder="+34 600 000 000" optional />
      <Input icon="✉️" label="Email" value={d.email} onChange={v=>set({...d,email:v})} placeholder="info@negocio.com" optional />
      <Input icon="📍" label="Dirección" value={d.address} onChange={v=>set({...d,address:v})} placeholder="Calle, Ciudad, CP" optional />
      <Input icon="🕐" label="Horario" value={d.hours} onChange={v=>set({...d,hours:v})} placeholder="Lun-Vie: 9-18h" optional />
    </div>
    <Input icon="🌐" label="URL actual" value={d.url} onChange={v=>set({...d,url:v})} placeholder="https://..." optional />
    <Label>Redes sociales</Label>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 10px" }}>
      {SOCIALS.map(s => <Input key={s.id} icon={s.icon} label={s.label} value={d.socials?.[s.id]} onChange={v=>set({...d,socials:{...d.socials,[s.id]:v}})} placeholder={`URL de ${s.label}`} optional />)}
    </div>
    <Nav onBack={back} onNext={next} nextDisabled={!d.businessName||!d.sector} />
  </div>
);

const S3 = ({ d, set, next, back }) => (
  <div>
    <StepTitle step={4} title="Objetivo, tono y ofertas" subtitle="¿Qué debe conseguir y cómo debe comunicar?" />
    <Label style={{ marginTop: 0 }}>Objetivo principal</Label>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "4px" }}>
      {OBJECTIVES.map(o => <SelectCard key={o.id} selected={d.objective===o.id} onClick={()=>set({...d,objective:o.id})}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: d.objective===o.id?T.accent:T.white }}>{o.label}</div>
        <div style={{ fontSize: "10px", color: T.grayDark, marginTop: "3px" }}>{o.desc}</div>
      </SelectCard>)}
    </div>
    <Label>Tono de comunicación</Label>
    <Chips options={TONES} value={d.tone} onChange={v=>set({...d,tone:v})} />
    <Label>Enfoque</Label>
    <div style={{ display: "flex", gap: "8px" }}>
      {[{id:"conversion",label:"Conversión",desc:"CTAs, urgencia"},{id:"informative",label:"Informativa",desc:"Contenido detallado"},{id:"balanced",label:"Equilibrada",desc:"Mix info + conversión"}].map(f =>
        <SelectCard key={f.id} selected={d.focus===f.id} onClick={()=>set({...d,focus:f.id})} style={{ flex: 1 }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: d.focus===f.id?T.accent:T.white }}>{f.label}</div>
          <div style={{ fontSize: "10px", color: T.grayDark, marginTop: "3px" }}>{f.desc}</div>
        </SelectCard>)}
    </div>
    <Label>CTA principal</Label>
    <Input value={d.ctaText} onChange={v=>set({...d,ctaText:v})} placeholder="Ej: Pide tu cita gratis, Comprar ahora..." />
    <Label>🔥 Oferta o urgencia activa</Label>
    <p style={{ fontSize: "11px", color: T.grayDark, marginBottom: "8px", marginTop: "-6px" }}>La IA la integra en CTAs y banners.</p>
    <Chips options={[{id:"discount",label:"🏷️ Descuento"},{id:"free_trial",label:"🆓 Prueba gratis"},{id:"limited",label:"⏳ Plazas limitadas"},{id:"seasonal",label:"🎉 Oferta temporada"},{id:"first_visit",label:"👋 Primera visita gratis"},{id:"none",label:"Sin oferta"}]}
      value={d.offers} onChange={v => { if(v.includes("none")) set({...d,offers:["none"],offerDetail:""}); else set({...d,offers:v.filter(x=>x!=="none")}); }} multi />
    {d.offers?.length > 0 && !d.offers?.includes("none") && <div style={{ marginTop: "10px" }}><Input label="Detalle de la oferta" value={d.offerDetail} onChange={v=>set({...d,offerDetail:v})} placeholder='"20% dto en tu primera sesión hasta el 30 de abril"' /></div>}
    <Nav onBack={back} onNext={next} nextDisabled={!d.objective||!d.tone} />
  </div>
);

const S4 = ({ d, set, next, back }) => (
  <div>
    <StepTitle step={5} title="Estilo visual" subtitle="Apariencia, tipografías y efectos." />
    <Label style={{ marginTop: 0 }}>Tema de color</Label>
    <div style={{ display: "flex", gap: "10px", marginBottom: "4px" }}>
      {[{id:"light",label:"Light",bg:"linear-gradient(135deg,#FFF,#F3F4F6)",tc:"#111"},{id:"dark",label:"Dark",bg:"linear-gradient(135deg,#0A0E17,#1A1A2E)",tc:"#fff"},{id:"mixed",label:"Mixto",bg:"linear-gradient(135deg,#0A0E17 50%,#FFF 50%)",tc:"#fff"}].map(t =>
        <SelectCard key={t.id} selected={d.theme===t.id} onClick={()=>set({...d,theme:t.id})} style={{ flex: 1, textAlign: "center" }}>
          <div style={{ height: "40px", borderRadius: "8px", background: t.bg, marginBottom: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 600, color: t.tc }}>{t.label}</div>
          <div style={{ fontSize: "12px", fontWeight: 600, color: T.white }}>{t.label}</div>
        </SelectCard>)}
    </div>
    <Label>Colores de marca</Label>
    <p style={{ fontSize: "10px", color: T.grayDark, marginBottom: "10px", marginTop: "-6px" }}>Déjalos por defecto y la IA elige según sector.</p>
    <div style={{ display: "flex", gap: "14px", marginBottom: "4px" }}>
      {[{k:"primaryColor",l:"Primario",def:"#00E5A0"},{k:"secondaryColor",l:"Secundario",def:"#0073AA"}].map(c =>
        <div key={c.k} style={{ flex: 1 }}>
          <label style={{ fontSize: "11px", color: T.gray, marginBottom: "5px", display: "block" }}>{c.l}</label>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <input type="color" value={d[c.k]||c.def} onChange={e=>set({...d,[c.k]:e.target.value})} style={{ width: "36px", height: "36px", border: "none", borderRadius: "8px", cursor: "pointer", background: "transparent" }} />
            <input type="text" value={d[c.k]||c.def} onChange={e=>set({...d,[c.k]:e.target.value})} style={{ flex: 1, padding: "7px 8px", borderRadius: "8px", border: `1px solid ${T.border}`, background: T.bg, color: T.white, fontSize: "11px", fontFamily: T.mono, outline: "none" }} />
          </div>
        </div>)}
    </div>
    <Label>Tipografía</Label>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Space+Grotesk:wght@700&family=Source+Sans+3:wght@700&family=Archivo+Black&family=Inter:wght@700&family=Lora:wght@700&family=DM+Sans:wght@700&display=swap" rel="stylesheet" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
      {FONT_STYLES.map(f => <SelectCard key={f.id} selected={d.fontStyle===f.id} onClick={()=>set({...d,fontStyle:f.id})} style={{ padding: "12px" }}>
        <div style={{ fontSize: "24px", fontWeight: 700, color: d.fontStyle===f.id?T.white:T.gray, fontFamily: f.family, marginBottom: "4px", lineHeight: 1 }}>{f.preview}</div>
        <div style={{ fontSize: "12px", fontWeight: 600, color: d.fontStyle===f.id?T.accent:T.white }}>{f.label}</div>
        <div style={{ fontSize: "10px", color: T.grayDark, marginTop: "2px" }}>{f.desc}</div>
      </SelectCard>)}
    </div>
    {d.fontStyle==="custom" && <div style={{ marginTop: "10px" }}><Input label="Nombre de la tipografía" value={d.customFont} onChange={v=>set({...d,customFont:v})} placeholder="Ej: Montserrat, Poppins..." /></div>}
    <Label>Animaciones CSS</Label>
    <div style={{ display: "flex", gap: "8px" }}>
      {[{id:"none",label:"Sin animaciones",desc:"Estático"},{id:"subtle",label:"Sutiles",desc:"Fade-in, hovers"},{id:"full",label:"Completas",desc:"Parallax, slide-in"}].map(a =>
        <SelectCard key={a.id} selected={d.animations===a.id} onClick={()=>set({...d,animations:a.id})} style={{ flex: 1 }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: d.animations===a.id?T.accent:T.white }}>{a.label}</div>
          <div style={{ fontSize: "10px", color: T.grayDark, marginTop: "3px" }}>{a.desc}</div>
        </SelectCard>)}
    </div>
    <Nav onBack={back} onNext={next} />
  </div>
);

const S5 = ({ d, set, next, back }) => (
  <div>
    <StepTitle step={6} title="SEO y competencia" subtitle="Keywords y competidores para textos optimizados." />
    <Label style={{ marginTop: 0 }}>🔍 Keywords SEO</Label>
    <p style={{ fontSize: "11px", color: T.grayDark, marginBottom: "8px", marginTop: "-6px" }}>La IA las integra naturalmente en títulos, textos y meta tags.</p>
    <Input label="Keyword principal" value={d.keywordMain} onChange={v=>set({...d,keywordMain:v})} placeholder='"dentista en Madrid", "abogado laboralista Barcelona"' />
    <Input label="Keywords secundarias (separar con comas)" value={d.keywordsSecondary} onChange={v=>set({...d,keywordsSecondary:v})} placeholder='"implantes dentales precio", "clínica dental centro"' />
    <Label>🏆 Competidores</Label>
    <p style={{ fontSize: "11px", color: T.grayDark, marginBottom: "8px", marginTop: "-6px" }}>La IA analiza su estructura para crear algo superior.</p>
    <Input icon="🔗" label="Competidor 1" value={d.comp1} onChange={v=>set({...d,comp1:v})} placeholder="https://competidor1.com" optional />
    <Input icon="🔗" label="Competidor 2" value={d.comp2} onChange={v=>set({...d,comp2:v})} placeholder="https://competidor2.com" optional />
    <Input icon="🔗" label="Competidor 3" value={d.comp3} onChange={v=>set({...d,comp3:v})} placeholder="https://competidor3.com" optional />
    <Nav onBack={back} onNext={next} />
  </div>
);

const S6 = ({ d, set, next, back }) => (
  <div>
    <StepTitle step={7} title="Trust signals" subtitle="Datos reales que generan confianza en la página." />
    <Label style={{ marginTop: 0 }}>📊 Cifras del negocio</Label>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 10px" }}>
      <Input label="Años de experiencia" value={d.trustYears} onChange={v=>set({...d,trustYears:v})} placeholder="Ej: 15" optional />
      <Input label="Nº de clientes" value={d.trustClients} onChange={v=>set({...d,trustClients:v})} placeholder="Ej: +500" optional />
      <Input label="Proyectos completados" value={d.trustProjects} onChange={v=>set({...d,trustProjects:v})} placeholder="Ej: +200" optional />
      <Input label="Valoración media" value={d.trustRating} onChange={v=>set({...d,trustRating:v})} placeholder="Ej: 4.8/5" optional />
    </div>
    <Label>🏅 Certificaciones y premios</Label>
    <Input value={d.trustCerts} onChange={v=>set({...d,trustCerts:v})} placeholder="Ej: ISO 9001, Google Partner, Colegio de Abogados..." multiline optional />
    <Label>🤝 Partners y marcas</Label>
    <Input value={d.trustPartners} onChange={v=>set({...d,trustPartners:v})} placeholder="Ej: Invisalign, Philips, Google..." optional />
    <Label>💬 Testimonios reales</Label>
    <p style={{ fontSize: "11px", color: T.grayDark, marginBottom: "8px", marginTop: "-6px" }}>Mucho más efectivos que los generados por IA. Deja vacío para placeholders.</p>
    {[0,1,2].map(i => (
      <div key={i} style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
        <Input label={`Nombre ${i+1}`} value={d[`tName${i}`]} onChange={v=>set({...d,[`tName${i}`]:v})} placeholder="Nombre del cliente" optional />
        <Input label="Testimonio" value={d[`tText${i}`]} onChange={v=>set({...d,[`tText${i}`]:v})} placeholder='"Excelente servicio..."' optional />
      </div>
    ))}
    <Nav onBack={back} onNext={next} />
  </div>
);

const S7 = ({ d, set, next, back }) => (
  <div>
    <StepTitle step={8} title="Inspiración" subtitle="Sube una captura de una página que te guste como referencia." />
    <FileUp label="📸 Sube una captura de inspiración" file={d.inspiration} onFile={f=>set({...d,inspiration:f})} preview />
    <div style={{ marginTop: "16px" }}><Input label="Notas sobre la inspiración" value={d.inspirationNotes} onChange={v=>set({...d,inspirationNotes:v})} placeholder="Me gusta el hero, los colores, la estructura..." multiline optional /></div>
    <Nav onBack={back} onNext={next} />
  </div>
);

const S8 = ({ d, set, next, back }) => {
  const pc = PAGE_TYPES[d.pageType]; if (!pc) return null;
  const cnt = Object.values(d.sections||{}).filter(Boolean).length;
  return (
    <div>
      <StepTitle step={9} title="Estructura" subtitle={`Secciones para tu ${pc.label}. Las recomendadas están activas.`} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <span style={{ fontSize: "12px", color: T.grayDark }}><strong style={{ color: T.accent }}>{cnt}</strong> secciones</span>
        <div style={{ display: "flex", gap: "6px" }}>
          <button onClick={()=>{const a={};pc.sections.forEach(s=>a[s.id]=true);set({...d,sections:a});}} style={{ padding: "4px 10px", borderRadius: "6px", border: `1px solid ${T.border}`, background: "transparent", color: T.gray, fontSize: "11px", cursor: "pointer" }}>Todas</button>
          <button onClick={()=>{const a={};pc.sections.forEach(s=>a[s.id]=s.default);set({...d,sections:a});}} style={{ padding: "4px 10px", borderRadius: "6px", border: `1px solid ${T.border}`, background: "transparent", color: T.gray, fontSize: "11px", cursor: "pointer" }}>Defecto</button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {pc.sections.map(s => {
          const on = d.sections?.[s.id]||false;
          return <div key={s.id} onClick={()=>set({...d,sections:{...d.sections,[s.id]:!on}})} style={{
            display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "8px",
            background: on?`${T.accent}08`:T.bgCard, border: `1px solid ${on?`${T.accent}44`:T.border}`, cursor: "pointer",
          }}>
            <div style={{ width: "20px", height: "20px", borderRadius: "5px", flexShrink: 0, border: `2px solid ${on?T.accent:T.grayDark}`, background: on?T.accent:"transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {on && <span style={{ color: T.bg, fontSize: "12px", fontWeight: 800 }}>✓</span>}
            </div>
            <span style={{ flex: 1, fontSize: "13px", fontWeight: 600, color: on?T.white:T.gray }}>{s.label}</span>
            {s.default && <span style={{ fontSize: "9px", fontFamily: T.mono, color: T.grayDark, background: `${T.accent}10`, padding: "2px 5px", borderRadius: "3px" }}>rec</span>}
          </div>;
        })}
      </div>
      <Nav onBack={back} onNext={next} nextLabel="Ver resumen" nextDisabled={cnt===0} />
    </div>
  );
};

const S9 = ({ d, back, gen }) => {
  const pc = PAGE_TYPES[d.pageType], cms = CMS_OPTIONS.find(c=>c.id===d.cms);
  const secs = pc?.sections.filter(s=>d.sections?.[s.id])||[];
  const R = ({l,v}) => v ? <div style={{ display: "flex", padding: "6px 0", borderBottom: `1px solid ${T.border}15` }}><span style={{ width: "160px", fontSize: "11px", color: T.grayDark, flexShrink: 0 }}>{l}</span><span style={{ fontSize: "12px", color: T.white, fontWeight: 500 }}>{v}</span></div> : null;
  const B = ({title,children}) => <div style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "12px", padding: "16px", marginBottom: "12px" }}><div style={{ fontSize: "10px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px", fontFamily: T.mono }}>{title}</div>{children}</div>;
  return (
    <div>
      <StepTitle step={10} title="Resumen final" subtitle="Revisa todo antes de generar." />
      <B title="Configuración"><R l="Plataforma" v={`${cms?.label} — ${cms?.desc}`}/><R l="Tipo" v={`${pc?.icon} ${pc?.label}`}/><R l="Tema" v={{light:"Claro",dark:"Oscuro",mixed:"Mixto"}[d.theme]}/><R l="Tipografía" v={FONT_STYLES.find(f=>f.id===d.fontStyle)?.label}/><R l="Animaciones" v={{none:"Sin",subtle:"Sutiles",full:"Completas"}[d.animations]}/></B>
      <B title="Negocio"><R l="Nombre" v={d.businessName}/><R l="Sector" v={d.sector}/><R l="Servicio" v={d.mainService}/><R l="UVP" v={d.uvp}/><R l="Público" v={d.audience}/><R l="Teléfono" v={d.phone}/><R l="Email" v={d.email}/><R l="Dirección" v={d.address}/>{d.logo&&<R l="Logo" v={`✓ ${d.logo.name}`}/>}</B>
      <B title="Objetivo y tono"><R l="Objetivo" v={OBJECTIVES.find(o=>o.id===d.objective)?.label}/><R l="Tono" v={TONES.find(t=>t.id===d.tone)?.label}/><R l="Enfoque" v={{conversion:"Conversión",informative:"Informativa",balanced:"Equilibrada"}[d.focus]}/><R l="CTA" v={d.ctaText}/><R l="Oferta" v={d.offerDetail}/></B>
      <B title="SEO"><R l="Keyword principal" v={d.keywordMain}/><R l="Secundarias" v={d.keywordsSecondary}/><R l="Competidores" v={[d.comp1,d.comp2,d.comp3].filter(Boolean).join(", ")||null}/></B>
      <B title="Trust signals"><R l="Años" v={d.trustYears}/><R l="Clientes" v={d.trustClients}/><R l="Valoración" v={d.trustRating}/><R l="Certificaciones" v={d.trustCerts}/><R l="Partners" v={d.trustPartners}/></B>
      <B title={`Secciones (${secs.length})`}><div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>{secs.map(s=><span key={s.id} style={{ padding: "3px 8px", borderRadius: "5px", fontSize: "10px", background: `${T.accent}10`, border: `1px solid ${T.accent}22`, color: T.accent }}>{s.label}</span>)}</div></B>
      {d.inspiration && <B title="Inspiración"><img src={d.inspiration.data} alt="" style={{ maxWidth: "160px", borderRadius: "8px", border: `1px solid ${T.border}` }}/>{d.inspirationNotes&&<p style={{ fontSize: "11px", color: T.gray, marginTop: "6px" }}>{d.inspirationNotes}</p>}</B>}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "28px", paddingTop: "16px", borderTop: `1px solid ${T.border}` }}>
        <button onClick={back} style={{ padding: "10px 20px", borderRadius: "10px", border: `1px solid ${T.border}`, background: "transparent", color: T.gray, fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>← Atrás</button>
        <button onClick={gen} style={{ padding: "13px 36px", borderRadius: "12px", border: "none", background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`, color: T.bg, fontSize: "15px", fontWeight: 800, cursor: "pointer", boxShadow: `0 4px 20px ${T.accent}33` }}>🚀 Generar página</button>
      </div>
    </div>
  );
};

// ============================================
// MAIN
// ============================================
export default function LandForgeSurvey() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState({
    cms:null,pageType:null,sections:{},businessName:"",sector:"",mainService:"",uvp:"",audience:"",url:"",
    logo:null,logoAlt:null,phone:"",email:"",address:"",hours:"",socials:{},
    objective:null,tone:null,focus:"balanced",ctaText:"",offers:[],offerDetail:"",
    theme:"light",primaryColor:"#00E5A0",secondaryColor:"#0073AA",fontStyle:null,customFont:"",animations:"subtle",
    keywordMain:"",keywordsSecondary:"",comp1:"",comp2:"",comp3:"",
    trustYears:"",trustClients:"",trustProjects:"",trustRating:"",trustCerts:"",trustPartners:"",
    tName0:"",tText0:"",tName1:"",tText1:"",tName2:"",tText2:"",
    inspiration:null,inspirationNotes:"",
  });
  const [gen, setGen] = useState(false);
  const r = useRef();
  useEffect(()=>{r.current?.scrollTo({top:0,behavior:"smooth"});},[step]);

  if (gen) return (
    <div style={{ minHeight: "100vh", background: T.bg, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", fontFamily: T.font }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: `3px solid ${T.border}`, borderTopColor: T.accent, animation: "spin 1s linear infinite" }} />
      <h3 style={{ color: T.white, fontSize: "20px", marginTop: "20px", fontWeight: 700 }}>Generando tu página...</h3>
      <p style={{ color: T.gray, fontSize: "13px", marginTop: "6px" }}>Creando estructura, contenido y código nativo</p>
      <div style={{ display: "flex", gap: "20px", marginTop: "28px" }}>
        {["Analizando sector","Generando copy SEO",`Empaquetando para ${CMS_OPTIONS.find(c=>c.id===d.cms)?.label||"CMS"}`].map((t,i)=>
          <div key={i} style={{ display:"flex",alignItems:"center",gap:"5px",fontSize:"11px",color:T.grayDark }}>
            <div style={{ width:"5px",height:"5px",borderRadius:"50%",background:T.accent,animation:`pulse 1.5s infinite ${i*.3}s` }}/>{t}
          </div>)}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.font, display: "flex", justifyContent: "center" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@700&family=Space+Grotesk:wght@700&family=Source+Sans+3:wght@700&family=Archivo+Black&family=Inter:wght@700&family=Lora:wght@700&display=swap" rel="stylesheet" />
      <div ref={r} style={{ width: "100%", maxWidth: "700px", padding: "36px 24px", overflowY: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
          <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px", color: T.bg, fontFamily: T.mono }}>L</div>
          <span style={{ fontWeight: 700, fontSize: "16px", color: T.white, fontFamily: T.mono }}>LandForge</span>
          <span style={{ marginLeft: "auto", fontSize: "11px", color: T.grayDark, padding: "3px 8px", borderRadius: "6px", background: T.bgCard, border: `1px solid ${T.border}`, fontFamily: T.mono }}>Encuesta</span>
        </div>
        <StepIndicator current={step} total={10} />
        {step===0&&<S0 d={d} set={setD} next={()=>setStep(1)}/>}
        {step===1&&<S1 d={d} set={setD} next={()=>setStep(2)} back={()=>setStep(0)}/>}
        {step===2&&<S2 d={d} set={setD} next={()=>setStep(3)} back={()=>setStep(1)}/>}
        {step===3&&<S3 d={d} set={setD} next={()=>setStep(4)} back={()=>setStep(2)}/>}
        {step===4&&<S4 d={d} set={setD} next={()=>setStep(5)} back={()=>setStep(3)}/>}
        {step===5&&<S5 d={d} set={setD} next={()=>setStep(6)} back={()=>setStep(4)}/>}
        {step===6&&<S6 d={d} set={setD} next={()=>setStep(7)} back={()=>setStep(5)}/>}
        {step===7&&<S7 d={d} set={setD} next={()=>setStep(8)} back={()=>setStep(6)}/>}
        {step===8&&<S8 d={d} set={setD} next={()=>setStep(9)} back={()=>setStep(7)}/>}
        {step===9&&<S9 d={d} back={()=>setStep(8)} gen={()=>setGen(true)}/>}
      </div>
      <style>{`*{margin:0;padding:0;box-sizing:border-box}::selection{background:${T.accent}33}input[type="color"]{-webkit-appearance:none}input[type="color"]::-webkit-color-swatch-wrapper{padding:0}input[type="color"]::-webkit-color-swatch{border:2px solid ${T.border};border-radius:6px}`}</style>
    </div>
  );
}
