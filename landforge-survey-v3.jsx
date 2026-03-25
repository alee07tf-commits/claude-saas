import { useState, useEffect, useRef } from "react";

const T = {
  bg: "#0A0E17", bgCard: "#111827", bgHover: "#1A2332",
  border: "#1E293B", accent: "#00E5A0", accentAlt: "#00B8D4",
  white: "#F1F5F9", gray: "#94A3B8", grayDark: "#64748B",
  warning: "#FDCB6E",
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
};

// ============================================
// PAGE TYPES + SECTIONS
// ============================================
const PAGE_TYPES = {
  homepage: { label: "Homepage", icon: "🏠", desc: "Página principal del negocio", sections: [
    { id: "hero", label: "Hero principal con CTA", default: true },
    { id: "services", label: "Servicios / Qué ofrecemos", default: true },
    { id: "about_preview", label: "Sobre nosotros (resumen)", default: true },
    { id: "benefits", label: "Beneficios / Por qué elegirnos", default: true },
    { id: "testimonials", label: "Testimonios de clientes", default: true },
    { id: "portfolio", label: "Portfolio / Trabajos", default: false },
    { id: "stats", label: "Cifras / Estadísticas", default: false },
    { id: "team", label: "Equipo", default: false },
    { id: "faq", label: "Preguntas frecuentes", default: true },
    { id: "cta_banner", label: "Banner CTA final", default: true },
    { id: "contact_form", label: "Formulario de contacto", default: true },
    { id: "map", label: "Mapa / Ubicación", default: false },
    { id: "blog_preview", label: "Últimos artículos del blog", default: false },
    { id: "partners", label: "Partners / Marcas colaboradoras", default: false },
  ]},
  about: { label: "Quiénes somos", icon: "👥", desc: "Página sobre la empresa", sections: [
    { id: "hero_about", label: "Hero con titular de marca", default: true },
    { id: "story", label: "Nuestra historia / Misión", default: true },
    { id: "values", label: "Valores de la empresa", default: true },
    { id: "team", label: "Equipo", default: true },
    { id: "timeline", label: "Línea temporal / Hitos", default: false },
    { id: "stats", label: "Cifras / Logros", default: true },
    { id: "certifications", label: "Certificaciones / Premios", default: false },
    { id: "gallery", label: "Galería de imágenes", default: false },
    { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
  services: { label: "Servicios", icon: "⚙️", desc: "Catálogo de servicios con detalle", sections: [
    { id: "hero_services", label: "Hero con propuesta de valor", default: true },
    { id: "services_grid", label: "Grid de servicios", default: true },
    { id: "service_detail", label: "Detalle de servicio destacado", default: false },
    { id: "process", label: "Cómo trabajamos (proceso)", default: true },
    { id: "benefits", label: "Beneficios / Ventajas", default: true },
    { id: "pricing", label: "Tabla de precios", default: false },
    { id: "testimonials", label: "Testimonios", default: true },
    { id: "faq", label: "Preguntas frecuentes", default: true },
    { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
  contact: { label: "Contacto", icon: "📬", desc: "Página de contacto con formulario", sections: [
    { id: "hero_contact", label: "Hero con info de contacto", default: true },
    { id: "contact_form", label: "Formulario de contacto", default: true },
    { id: "contact_info", label: "Datos de contacto", default: true },
    { id: "map", label: "Mapa interactivo", default: true },
    { id: "hours", label: "Horarios de atención", default: true },
    { id: "social", label: "Redes sociales", default: false },
    { id: "faq", label: "Preguntas frecuentes", default: false },
  ]},
  landing: { label: "Landing Page", icon: "🚀", desc: "Página de aterrizaje para campañas", sections: [
    { id: "hero_landing", label: "Hero con CTA potente", default: true },
    { id: "problem", label: "Problema que resolvemos", default: true },
    { id: "solution", label: "Nuestra solución", default: true },
    { id: "benefits", label: "Beneficios clave (3-4)", default: true },
    { id: "social_proof", label: "Social proof / Testimonios", default: true },
    { id: "how_it_works", label: "Cómo funciona (3 pasos)", default: true },
    { id: "pricing", label: "Pricing / Oferta", default: false },
    { id: "guarantee", label: "Garantía / Sin compromiso", default: false },
    { id: "faq", label: "Preguntas frecuentes", default: true },
    { id: "final_cta", label: "CTA final con urgencia", default: true },
  ]},
  reviews: { label: "Reseñas", icon: "⭐", desc: "Testimonios y casos de éxito", sections: [
    { id: "hero_reviews", label: "Hero con puntuación media", default: true },
    { id: "featured_reviews", label: "Reseñas destacadas", default: true },
    { id: "reviews_grid", label: "Grid de reseñas", default: true },
    { id: "video_testimonials", label: "Video testimonios", default: false },
    { id: "case_studies", label: "Casos de éxito detallados", default: false },
    { id: "platforms", label: "Badges de plataformas (Google, Trustpilot...)", default: true },
    { id: "stats", label: "Cifras", default: true },
    { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
  portfolio: { label: "Portfolio", icon: "🎨", desc: "Muestra de proyectos y trabajos", sections: [
    { id: "hero_portfolio", label: "Hero con muestra visual", default: true },
    { id: "filter_bar", label: "Filtros por categoría", default: true },
    { id: "projects_grid", label: "Grid de proyectos", default: true },
    { id: "project_detail", label: "Proyecto destacado", default: false },
    { id: "clients", label: "Logos de clientes", default: true },
    { id: "testimonials", label: "Testimonios", default: false },
    { id: "cta_banner", label: "Banner CTA", default: true },
  ]},
  product: { label: "Producto", icon: "🛍️", desc: "Página de producto eCommerce", sections: [
    { id: "hero_product", label: "Hero con imagen + CTA de compra", default: true },
    { id: "features", label: "Características del producto", default: true },
    { id: "gallery", label: "Galería de imágenes", default: true },
    { id: "specs", label: "Especificaciones técnicas", default: false },
    { id: "reviews_product", label: "Reseñas de compradores", default: true },
    { id: "related", label: "Productos relacionados", default: true },
    { id: "faq", label: "Preguntas frecuentes", default: true },
    { id: "guarantee", label: "Garantía y devoluciones", default: true },
  ]},
  pricing_page: { label: "Precios", icon: "💰", desc: "Tabla comparativa de planes", sections: [
    { id: "hero_pricing", label: "Hero con propuesta de valor", default: true },
    { id: "pricing_table", label: "Tabla de precios (2-4 planes)", default: true },
    { id: "comparison_matrix", label: "Matriz comparativa de features", default: true },
    { id: "faq_pricing", label: "FAQs sobre pricing", default: true },
    { id: "testimonials", label: "Testimonios", default: false },
    { id: "guarantee", label: "Garantía / Prueba gratuita", default: true },
    { id: "cta_banner", label: "Banner CTA final", default: true },
  ]},
};

const CMS_OPTIONS = [
  { id: "elementor", label: "Elementor", desc: "WordPress — JSON importable", color: "#92003B", icon: "E" },
  { id: "gutenberg", label: "Gutenberg", desc: "WordPress — Bloques nativos", color: "#0073AA", icon: "G" },
  { id: "odoo", label: "Odoo", desc: "Website Builder — QWeb snippets", color: "#714B67", icon: "O" },
  { id: "shopify", label: "Shopify", desc: "Theme Editor — Secciones Liquid", color: "#96BF48", icon: "S" },
];

const OBJECTIVES = [
  { id: "leads", label: "Captar leads", desc: "Formularios, llamadas a la acción" },
  { id: "sales", label: "Vender online", desc: "Compra directa" },
  { id: "inform", label: "Informar", desc: "Presentar empresa o servicio" },
  { id: "booking", label: "Reservar citas", desc: "Agendar reuniones" },
  { id: "download", label: "Descargar recurso", desc: "Lead magnet, ebook" },
  { id: "branding", label: "Branding", desc: "Imagen de marca" },
];

const TONES = [
  { id: "professional", label: "Profesional", emoji: "💼" },
  { id: "friendly", label: "Cercano", emoji: "😊" },
  { id: "premium", label: "Premium", emoji: "✨" },
  { id: "dynamic", label: "Dinámico", emoji: "⚡" },
  { id: "technical", label: "Técnico", emoji: "🔬" },
  { id: "creative", label: "Creativo", emoji: "🎨" },
];

const SECTORS = [
  "Salud / Clínicas", "Fitness / Deporte", "Belleza / Estética", "Inmobiliaria",
  "Legal / Abogados", "Restauración", "Educación", "Tecnología / SaaS",
  "eCommerce", "Servicios profesionales", "Marketing / Agencia",
  "Arquitectura / Diseño", "Consultoría", "Otro"
];

const SOCIAL_PLATFORMS = [
  { id: "instagram", label: "Instagram", icon: "📸" },
  { id: "facebook", label: "Facebook", icon: "👤" },
  { id: "twitter", label: "X (Twitter)", icon: "🐦" },
  { id: "linkedin", label: "LinkedIn", icon: "💼" },
  { id: "tiktok", label: "TikTok", icon: "🎵" },
  { id: "youtube", label: "YouTube", icon: "▶️" },
];

// ============================================
// REUSABLE COMPONENTS
// ============================================
const StepIndicator = ({ current, total }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "40px" }}>
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} style={{ height: "3px", flex: 1, borderRadius: "2px", background: i <= current ? `linear-gradient(90deg, ${T.accent}, ${T.accentAlt})` : T.border, transition: "all 0.5s ease" }} />
    ))}
    <span style={{ fontSize: "12px", color: T.grayDark, fontFamily: T.mono, marginLeft: "12px", whiteSpace: "nowrap" }}>{current + 1}/{total}</span>
  </div>
);

const StepTitle = ({ step, title, subtitle }) => (
  <div style={{ marginBottom: "32px" }}>
    <span style={{ fontSize: "12px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "2px", fontFamily: T.mono }}>Paso {step}</span>
    <h2 style={{ fontSize: "28px", fontWeight: 800, color: T.white, margin: "8px 0 8px", letterSpacing: "-0.5px" }}>{title}</h2>
    {subtitle && <p style={{ fontSize: "15px", color: T.gray, lineHeight: 1.6 }}>{subtitle}</p>}
  </div>
);

const SelectCard = ({ selected, onClick, children, style = {} }) => (
  <div onClick={onClick} style={{
    background: selected ? `${T.accent}08` : T.bgCard, border: `2px solid ${selected ? T.accent : T.border}`,
    borderRadius: "12px", padding: "16px", cursor: "pointer", transition: "all 0.2s ease", position: "relative",
    boxShadow: selected ? `0 0 20px ${T.accent}15` : "none", ...style,
  }} onMouseEnter={(e) => { if (!selected) e.currentTarget.style.borderColor = T.grayDark; }}
     onMouseLeave={(e) => { if (!selected) e.currentTarget.style.borderColor = selected ? T.accent : T.border; }}
  >{children}</div>
);

const TextInput = ({ label, value, onChange, placeholder, maxLen, multiline, optional, type = "text" }) => (
  <div style={{ marginBottom: "20px" }}>
    <label style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "8px" }}>
      <span>{label}{optional && <span style={{ color: T.grayDark, fontWeight: 400 }}> (opcional)</span>}</span>
      {maxLen && <span style={{ fontFamily: T.mono, fontSize: "11px", color: T.grayDark }}>{(value || "").length}/{maxLen}</span>}
    </label>
    {multiline ? (
      <textarea value={value || ""} onChange={(e) => onChange(maxLen ? e.target.value.slice(0, maxLen) : e.target.value)} placeholder={placeholder} rows={3}
        style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: `1px solid ${T.border}`, background: T.bg, color: T.white, fontSize: "14px", fontFamily: T.font, outline: "none", resize: "vertical", transition: "border-color 0.2s", boxSizing: "border-box" }}
        onFocus={(e) => e.target.style.borderColor = T.accent} onBlur={(e) => e.target.style.borderColor = T.border} />
    ) : (
      <input type={type} value={value || ""} onChange={(e) => onChange(maxLen ? e.target.value.slice(0, maxLen) : e.target.value)} placeholder={placeholder}
        style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: `1px solid ${T.border}`, background: T.bg, color: T.white, fontSize: "14px", fontFamily: T.font, outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" }}
        onFocus={(e) => e.target.style.borderColor = T.accent} onBlur={(e) => e.target.style.borderColor = T.border} />
    )}
  </div>
);

const NavButtons = ({ onBack, onNext, nextLabel = "Siguiente", nextDisabled = false, showBack = true }) => (
  <div style={{ display: "flex", justifyContent: showBack ? "space-between" : "flex-end", marginTop: "40px", paddingTop: "24px", borderTop: `1px solid ${T.border}` }}>
    {showBack && <button onClick={onBack} style={{ padding: "12px 24px", borderRadius: "10px", border: `1px solid ${T.border}`, background: "transparent", color: T.gray, fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: T.font }} onMouseEnter={(e) => e.target.style.borderColor = T.gray} onMouseLeave={(e) => e.target.style.borderColor = T.border}>← Atrás</button>}
    <button onClick={onNext} disabled={nextDisabled} style={{ padding: "12px 32px", borderRadius: "10px", border: "none", background: nextDisabled ? T.grayDark : `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`, color: nextDisabled ? T.gray : T.bg, fontSize: "14px", fontWeight: 700, cursor: nextDisabled ? "not-allowed" : "pointer", fontFamily: T.font, opacity: nextDisabled ? 0.5 : 1 }}>{nextLabel} →</button>
  </div>
);

const SectionLabel = ({ children }) => <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "10px", display: "block" }}>{children}</label>;

const ChipSelect = ({ options, selected, onSelect, multi = false }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
    {options.map((opt) => {
      const val = typeof opt === "string" ? opt : opt.id;
      const label = typeof opt === "string" ? opt : (opt.emoji ? `${opt.emoji} ${opt.label}` : opt.label);
      const isSelected = multi ? (selected || []).includes(val) : selected === val;
      return (
        <div key={val} onClick={() => { if (multi) { const arr = selected || []; onSelect(isSelected ? arr.filter(x => x !== val) : [...arr, val]); } else { onSelect(val); } }} style={{
          padding: "8px 14px", borderRadius: "8px", fontSize: "13px", cursor: "pointer",
          background: isSelected ? `${T.accent}15` : T.bgCard, border: `1px solid ${isSelected ? T.accent : T.border}`,
          color: isSelected ? T.accent : T.gray, fontWeight: isSelected ? 600 : 400, transition: "all 0.2s",
        }}>{label}</div>
      );
    })}
  </div>
);

const Block = ({ title, children, badge }) => (
  <div style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "14px", padding: "20px", marginBottom: "24px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
      <span style={{ fontSize: "12px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", fontFamily: T.mono }}>{title}</span>
      {badge && <span style={{ fontSize: "10px", color: T.grayDark, padding: "2px 8px", borderRadius: "4px", background: `${T.accent}08`, border: `1px solid ${T.border}` }}>{badge}</span>}
    </div>
    {children}
  </div>
);

// ============================================
// STEP 0: CMS
// ============================================
const StepCMS = ({ data, setData, onNext }) => (
  <div>
    <StepTitle step={1} title="Elige tu plataforma" subtitle="¿En qué CMS vas a importar la página generada?" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
      {CMS_OPTIONS.map((cms) => (
        <SelectCard key={cms.id} selected={data.cms === cms.id} onClick={() => setData({ ...data, cms: cms.id })}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${cms.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 800, color: cms.color, fontFamily: T.mono, flexShrink: 0 }}>{cms.icon}</div>
            <div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: T.white }}>{cms.label}</div>
              <div style={{ fontSize: "12px", color: T.grayDark, marginTop: "2px" }}>{cms.desc}</div>
            </div>
          </div>
        </SelectCard>
      ))}
    </div>
    <NavButtons onNext={onNext} nextDisabled={!data.cms} showBack={false} />
  </div>
);

// ============================================
// STEP 1: PAGE TYPE
// ============================================
const StepPageType = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={2} title="Tipo de página" subtitle="¿Qué tipo de página quieres crear?" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      {Object.entries(PAGE_TYPES).map(([key, pt]) => (
        <SelectCard key={key} selected={data.pageType === key} onClick={() => {
          const defaults = {}; pt.sections.forEach(s => { defaults[s.id] = s.default; });
          setData({ ...data, pageType: key, sections: defaults });
        }} style={{ textAlign: "center", padding: "20px 12px" }}>
          <div style={{ fontSize: "28px", marginBottom: "8px" }}>{pt.icon}</div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: T.white }}>{pt.label}</div>
          <div style={{ fontSize: "11px", color: T.grayDark, marginTop: "4px", lineHeight: 1.4 }}>{pt.desc}</div>
        </SelectCard>
      ))}
    </div>
    <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!data.pageType} />
  </div>
);

// ============================================
// STEP 2: BUSINESS INFO + CONTACT DATA
// ============================================
const StepBusiness = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={3} title="Sobre el negocio" subtitle="Toda esta información aparecerá directamente en la página generada, sin placeholders." />

    <Block title="Información general">
      <TextInput label="Nombre del negocio" value={data.businessName} onChange={(v) => setData({ ...data, businessName: v })} placeholder="Ej: Clínica Dental Sonrisa" />
      <SectionLabel>Sector</SectionLabel>
      <ChipSelect options={SECTORS} selected={data.sector} onSelect={(v) => setData({ ...data, sector: v })} />
      <TextInput label="Servicio o producto principal" value={data.mainService} onChange={(v) => setData({ ...data, mainService: v })} placeholder="Ej: Implantes dentales de última generación" maxLen={200} />
      <TextInput label="Propuesta de valor única" value={data.uvp} onChange={(v) => setData({ ...data, uvp: v })} placeholder="¿Qué hace diferente a este negocio de su competencia?" maxLen={300} />
      <TextInput label="Público objetivo" value={data.audience} onChange={(v) => setData({ ...data, audience: v })} placeholder="Ej: Mujeres de 30-50 años preocupadas por su salud dental" maxLen={200} />
    </Block>

    <Block title="Datos de contacto" badge="Aparecerán en la página">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
        <TextInput label="Teléfono" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} placeholder="+34 612 345 678" optional />
        <TextInput label="Email" value={data.email} onChange={(v) => setData({ ...data, email: v })} placeholder="info@negocio.com" optional type="email" />
      </div>
      <TextInput label="Dirección física" value={data.address} onChange={(v) => setData({ ...data, address: v })} placeholder="Calle Mayor 15, 38001 Santa Cruz de Tenerife" optional />
      <TextInput label="Horarios" value={data.hours} onChange={(v) => setData({ ...data, hours: v })} placeholder="L-V: 9:00-20:00 | Sáb: 10:00-14:00" optional />
      <TextInput label="URL actual" value={data.url} onChange={(v) => setData({ ...data, url: v })} placeholder="https://..." optional />

      <SectionLabel>Redes sociales</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        {SOCIAL_PLATFORMS.map((sp) => (
          <div key={sp.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px", width: "24px", textAlign: "center" }}>{sp.icon}</span>
            <input type="text" value={data.socials?.[sp.id] || ""} placeholder={`URL de ${sp.label}`}
              onChange={(e) => setData({ ...data, socials: { ...data.socials, [sp.id]: e.target.value } })}
              style={{ flex: 1, padding: "8px 10px", borderRadius: "8px", border: `1px solid ${T.border}`, background: T.bg, color: T.white, fontSize: "12px", fontFamily: T.font, outline: "none", boxSizing: "border-box" }}
              onFocus={(e) => e.target.style.borderColor = T.accent} onBlur={(e) => e.target.style.borderColor = T.border} />
          </div>
        ))}
      </div>
    </Block>

    <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!data.businessName || !data.sector} />
  </div>
);

// ============================================
// STEP 3: OBJECTIVE, TONE, STYLE & OFFERS
// ============================================
const StepObjective = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={4} title="Objetivo, tono y estilo" subtitle="Define qué debe conseguir la página, cómo comunicar y su apariencia." />

    <SectionLabel>Objetivo principal</SectionLabel>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "24px" }}>
      {OBJECTIVES.map((obj) => (
        <SelectCard key={obj.id} selected={data.objective === obj.id} onClick={() => setData({ ...data, objective: obj.id })}>
          <div style={{ fontSize: "14px", fontWeight: 600, color: data.objective === obj.id ? T.accent : T.white }}>{obj.label}</div>
          <div style={{ fontSize: "11px", color: T.grayDark, marginTop: "4px" }}>{obj.desc}</div>
        </SelectCard>
      ))}
    </div>

    <SectionLabel>Tono de comunicación</SectionLabel>
    <ChipSelect options={TONES} selected={data.tone} onSelect={(v) => setData({ ...data, tone: v })} />

    <SectionLabel>Enfoque de la página</SectionLabel>
    <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
      {[{ id: "conversion", label: "Conversión", desc: "CTAs directos, urgencia, beneficios" }, { id: "informative", label: "Informativa", desc: "Contenido detallado, educativo" }, { id: "balanced", label: "Equilibrada", desc: "Mix de información y conversión" }].map((f) => (
        <SelectCard key={f.id} selected={data.focus === f.id} onClick={() => setData({ ...data, focus: f.id })} style={{ flex: 1 }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: data.focus === f.id ? T.accent : T.white }}>{f.label}</div>
          <div style={{ fontSize: "11px", color: T.grayDark, marginTop: "4px" }}>{f.desc}</div>
        </SelectCard>
      ))}
    </div>

    <TextInput label="Texto del botón principal (CTA)" value={data.ctaText} onChange={(v) => setData({ ...data, ctaText: v })} placeholder="Ej: Pide tu cita gratis, Comprar ahora, Solicitar presupuesto..." />

    {/* Theme + Colors */}
    <SectionLabel>Tema de color</SectionLabel>
    <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
      {[{ id: "light", label: "Light", bg: "linear-gradient(135deg, #FFFFFF, #F3F4F6)", tc: "#111" }, { id: "dark", label: "Dark", bg: "linear-gradient(135deg, #0A0E17, #1A1A2E)", tc: "#fff" }, { id: "mixed", label: "Mixto", bg: "linear-gradient(135deg, #0A0E17 50%, #FFFFFF 50%)", tc: "#fff" }].map((theme) => (
        <SelectCard key={theme.id} selected={data.theme === theme.id} onClick={() => setData({ ...data, theme: theme.id })} style={{ flex: 1, textAlign: "center" }}>
          <div style={{ width: "100%", height: "44px", borderRadius: "8px", background: theme.bg, marginBottom: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 600, color: theme.tc }}>{theme.label}</div>
          <div style={{ fontSize: "13px", fontWeight: 600, color: T.white }}>{theme.label}</div>
        </SelectCard>
      ))}
    </div>

    <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
      {[{ key: "primaryColor", label: "Color primario", def: "#00E5A0" }, { key: "secondaryColor", label: "Color secundario", def: "#0073AA" }].map((c) => (
        <div key={c.key} style={{ flex: 1 }}>
          <label style={{ fontSize: "12px", color: T.gray, marginBottom: "8px", display: "block" }}>{c.label}</label>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input type="color" value={data[c.key] || c.def} onChange={(e) => setData({ ...data, [c.key]: e.target.value })} style={{ width: "40px", height: "40px", border: "none", borderRadius: "8px", cursor: "pointer", background: "transparent" }} />
            <input type="text" value={data[c.key] || c.def} onChange={(e) => setData({ ...data, [c.key]: e.target.value })} style={{ flex: 1, padding: "8px 10px", borderRadius: "8px", border: `1px solid ${T.border}`, background: T.bg, color: T.white, fontSize: "12px", fontFamily: T.mono, outline: "none" }} />
          </div>
        </div>
      ))}
    </div>
    <p style={{ fontSize: "11px", color: T.grayDark, marginBottom: "24px" }}>Déjalo como está si quieres que la IA elija colores según el sector.</p>

    <SectionLabel>Idioma de la página</SectionLabel>
    <ChipSelect options={["Español", "Inglés", "Portugués", "Francés", "Alemán", "Italiano"]} selected={data.language} onSelect={(v) => setData({ ...data, language: v })} />

    {/* Offers */}
    <Block title="🔥 Oferta o urgencia" badge="opcional">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
        {[{ id: "discount", label: "Descuento activo" }, { id: "free_trial", label: "Prueba gratis" }, { id: "limited", label: "Plazas limitadas" }, { id: "launch", label: "Precio de lanzamiento" }, { id: "bonus", label: "Regalo o bonus" }, { id: "seasonal", label: "Oferta de temporada" }, { id: "none", label: "Ninguna" }].map((offer) => {
          const isSel = (data.offerTypes || []).includes(offer.id);
          return (
            <div key={offer.id} onClick={() => {
              const arr = data.offerTypes || [];
              if (offer.id === "none") setData({ ...data, offerTypes: ["none"], offerDetails: "" });
              else setData({ ...data, offerTypes: isSel ? arr.filter(x => x !== offer.id) : [...arr.filter(x => x !== "none"), offer.id] });
            }} style={{ padding: "8px 14px", borderRadius: "8px", fontSize: "13px", cursor: "pointer", background: isSel ? `${T.warning}15` : T.bg, border: `1px solid ${isSel ? T.warning : T.border}`, color: isSel ? T.warning : T.gray, fontWeight: isSel ? 600 : 400 }}>{offer.label}</div>
          );
        })}
      </div>
      {data.offerTypes?.length > 0 && !data.offerTypes.includes("none") && (
        <TextInput label="Detalle de la oferta" value={data.offerDetails} onChange={(v) => setData({ ...data, offerDetails: v })} placeholder="Ej: 20% descuento este mes, Solo quedan 5 plazas..." maxLen={200} />
      )}
    </Block>

    <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!data.objective || !data.tone} />
  </div>
);

// ============================================
// STEP 4: SEO & COMPETITORS
// ============================================
const StepSEO = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={5} title="SEO y competencia" subtitle="Keywords para optimizar los textos y competidores como referencia para la IA." />
    <Block title="Keywords SEO">
      <p style={{ fontSize: "12px", color: T.grayDark, marginBottom: "16px" }}>La IA integrará estas palabras clave de forma natural en títulos, textos y estructura HTML.</p>
      <TextInput label="Keyword principal" value={data.seoMain} onChange={(v) => setData({ ...data, seoMain: v })} placeholder="Ej: dentista en Tenerife" />
      <TextInput label="Keywords secundarias (separadas por comas)" value={data.seoSecondary} onChange={(v) => setData({ ...data, seoSecondary: v })} placeholder="Ej: implantes dentales, ortodoncia invisible, clínica dental" optional />
      <TextInput label="Localización SEO" value={data.seoLocation} onChange={(v) => setData({ ...data, seoLocation: v })} placeholder="Ej: Santa Cruz de Tenerife, Canarias" optional />
    </Block>
    <Block title="Competidores" badge="opcional">
      <p style={{ fontSize: "12px", color: T.grayDark, marginBottom: "16px" }}>Hasta 3 URLs. La IA analizará su estructura para crear algo superior.</p>
      {[0, 1, 2].map((i) => (
        <TextInput key={i} label={`Competidor ${i + 1}`} value={data.competitors?.[i]} onChange={(v) => { const arr = [...(data.competitors || ["", "", ""])]; arr[i] = v; setData({ ...data, competitors: arr }); }} placeholder="https://competidor.com" optional />
      ))}
    </Block>
    <NavButtons onBack={onBack} onNext={onNext} />
  </div>
);

// ============================================
// STEP 5: TRUST SIGNALS
// ============================================
const StepTrust = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={6} title="Credibilidad y confianza" subtitle="Datos reales de social proof. Cuantos más, mejor convierte la página." />
    <Block title="Cifras del negocio">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
        <TextInput label="Años de experiencia" value={data.trustYears} onChange={(v) => setData({ ...data, trustYears: v })} placeholder="Ej: 15" optional />
        <TextInput label="Nº de clientes" value={data.trustClients} onChange={(v) => setData({ ...data, trustClients: v })} placeholder="Ej: +500" optional />
        <TextInput label="Nº de proyectos" value={data.trustProjects} onChange={(v) => setData({ ...data, trustProjects: v })} placeholder="Ej: +200" optional />
        <TextInput label="Valoración media (1-5)" value={data.trustRating} onChange={(v) => setData({ ...data, trustRating: v })} placeholder="Ej: 4.8" optional />
      </div>
    </Block>
    <Block title="Certificaciones y premios" badge="opcional">
      <TextInput label="Certificaciones" value={data.trustCerts} onChange={(v) => setData({ ...data, trustCerts: v })} placeholder="Ej: ISO 9001, Google Partner, RGPD compliant..." optional />
      <TextInput label="Premios" value={data.trustAwards} onChange={(v) => setData({ ...data, trustAwards: v })} placeholder="Ej: Mejor clínica dental de Canarias 2024..." optional />
    </Block>
    <Block title="Partners y medios" badge="opcional">
      <TextInput label="Partners o marcas" value={data.trustPartners} onChange={(v) => setData({ ...data, trustPartners: v })} placeholder="Ej: Invisalign, Straumann, Philips Zoom..." optional />
      <TextInput label="Apariciones en medios" value={data.trustMedia} onChange={(v) => setData({ ...data, trustMedia: v })} placeholder="Ej: Mencionado en El País, Cadena SER..." optional />
    </Block>
    <NavButtons onBack={onBack} onNext={onNext} />
  </div>
);

// ============================================
// STEP 6: INSPIRATION
// ============================================
const StepInspiration = ({ data, setData, onNext, onBack }) => {
  const fileRef = useRef();
  const handleFile = (e) => { const file = e.target.files[0]; if (file) { const reader = new FileReader(); reader.onload = (ev) => setData({ ...data, inspirationImage: ev.target.result, inspirationName: file.name }); reader.readAsDataURL(file); } };
  return (
    <div>
      <StepTitle step={7} title="Inspiración" subtitle="Sube una captura de una página que te guste como referencia visual. Esto es opcional pero ayuda a la IA." />
      <div onClick={() => fileRef.current?.click()} style={{ border: `2px dashed ${data.inspirationImage ? T.accent : T.border}`, borderRadius: "16px", padding: "40px 20px", textAlign: "center", cursor: "pointer", background: data.inspirationImage ? `${T.accent}05` : T.bgCard }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = T.accent} onMouseLeave={(e) => { if (!data.inspirationImage) e.currentTarget.style.borderColor = T.border; }}>
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: "none" }} />
        {data.inspirationImage ? (
          <div>
            <img src={data.inspirationImage} alt="" style={{ maxWidth: "100%", maxHeight: "280px", borderRadius: "10px", marginBottom: "12px", border: `1px solid ${T.border}` }} />
            <p style={{ fontSize: "13px", color: T.accent, fontWeight: 600 }}>✓ {data.inspirationName}</p>
            <p style={{ fontSize: "12px", color: T.grayDark, marginTop: "4px" }}>Click para cambiar</p>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: "40px", marginBottom: "12px", opacity: 0.5 }}>📸</div>
            <p style={{ fontSize: "15px", color: T.gray, fontWeight: 600 }}>Arrastra o haz click para subir</p>
            <p style={{ fontSize: "12px", color: T.grayDark, marginTop: "6px" }}>PNG, JPG o WEBP</p>
          </div>
        )}
      </div>
      <div style={{ marginTop: "24px" }}>
        <TextInput label="¿Qué te gusta de esta referencia?" value={data.inspirationNotes} onChange={(v) => setData({ ...data, inspirationNotes: v })} placeholder="Ej: Me gusta la estructura del hero, los colores, cómo presenta los servicios..." multiline optional />
      </div>
      <NavButtons onBack={onBack} onNext={onNext} />
    </div>
  );
};

// ============================================
// STEP 7: SECTIONS
// ============================================
const StepSections = ({ data, setData, onNext, onBack }) => {
  const pc = PAGE_TYPES[data.pageType]; if (!pc) return null;
  const toggle = (id) => setData({ ...data, sections: { ...data.sections, [id]: !data.sections[id] } });
  const selAll = () => { const a = {}; pc.sections.forEach(s => { a[s.id] = true; }); setData({ ...data, sections: a }); };
  const resetDef = () => { const d = {}; pc.sections.forEach(s => { d[s.id] = s.default; }); setData({ ...data, sections: d }); };
  const count = Object.values(data.sections || {}).filter(Boolean).length;
  return (
    <div>
      <StepTitle step={8} title="Estructura de la página" subtitle={`Selecciona las secciones para tu ${pc.label}. Las recomendadas ya están marcadas.`} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <span style={{ fontSize: "13px", color: T.grayDark }}><strong style={{ color: T.accent }}>{count}</strong> secciones</span>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={selAll} style={{ padding: "6px 12px", borderRadius: "6px", border: `1px solid ${T.border}`, background: "transparent", color: T.gray, fontSize: "12px", cursor: "pointer", fontFamily: T.font }}>Todas</button>
          <button onClick={resetDef} style={{ padding: "6px 12px", borderRadius: "6px", border: `1px solid ${T.border}`, background: "transparent", color: T.gray, fontSize: "12px", cursor: "pointer", fontFamily: T.font }}>Por defecto</button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {pc.sections.map((s) => {
          const on = data.sections?.[s.id] || false;
          return (
            <div key={s.id} onClick={() => toggle(s.id)} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", borderRadius: "10px", background: on ? `${T.accent}08` : T.bgCard, border: `1px solid ${on ? `${T.accent}44` : T.border}`, cursor: "pointer", transition: "all 0.15s" }}
              onMouseEnter={(e) => e.currentTarget.style.background = on ? `${T.accent}12` : T.bgHover} onMouseLeave={(e) => e.currentTarget.style.background = on ? `${T.accent}08` : T.bgCard}>
              <div style={{ width: "24px", height: "24px", borderRadius: "6px", flexShrink: 0, border: `2px solid ${on ? T.accent : T.grayDark}`, background: on ? T.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {on && <span style={{ color: T.bg, fontSize: "14px", fontWeight: 800 }}>✓</span>}
              </div>
              <span style={{ flex: 1, fontSize: "14px", fontWeight: 600, color: on ? T.white : T.gray }}>{s.label}</span>
              {s.default && <span style={{ fontSize: "10px", fontFamily: T.mono, color: T.grayDark, padding: "2px 8px", borderRadius: "4px", background: `${T.accent}10` }}>recomendada</span>}
            </div>
          );
        })}
      </div>
      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Ver resumen" nextDisabled={count === 0} />
    </div>
  );
};

// ============================================
// STEP 8: SUMMARY
// ============================================
const StepSummary = ({ data, onBack, onGenerate }) => {
  const pc = PAGE_TYPES[data.pageType];
  const cms = CMS_OPTIONS.find(c => c.id === data.cms);
  const sels = pc?.sections.filter(s => data.sections?.[s.id]) || [];
  const Row = ({ l, v }) => v ? <div style={{ display: "flex", padding: "8px 0", borderBottom: `1px solid ${T.border}22` }}><span style={{ width: "170px", fontSize: "12px", color: T.grayDark, flexShrink: 0 }}>{l}</span><span style={{ fontSize: "13px", color: T.white, fontWeight: 500 }}>{v}</span></div> : null;
  const SBlock = ({ title, children }) => <div style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "14px", padding: "20px", marginBottom: "16px" }}><div style={{ fontSize: "11px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px", fontFamily: T.mono }}>{title}</div>{children}</div>;

  const hasTrust = data.trustYears || data.trustClients || data.trustProjects || data.trustRating || data.trustCerts || data.trustAwards || data.trustPartners;
  const hasSEO = data.seoMain || data.seoSecondary;
  const hasComp = data.competitors?.some(c => c);
  const hasOffer = data.offerTypes?.length > 0 && !data.offerTypes.includes("none");
  const hasSocials = data.socials && Object.values(data.socials).some(v => v);

  return (
    <div>
      <StepTitle step={9} title="Resumen final" subtitle="Revisa todo antes de generar. Puedes volver a cualquier paso." />
      <SBlock title="Configuración">
        <Row l="Plataforma" v={`${cms?.label} — ${cms?.desc}`} />
        <Row l="Tipo de página" v={`${pc?.icon} ${pc?.label}`} />
        <Row l="Tema" v={data.theme === "light" ? "Claro" : data.theme === "dark" ? "Oscuro" : "Mixto"} />
        <Row l="Idioma" v={data.language} />
      </SBlock>
      <SBlock title="Negocio">
        <Row l="Nombre" v={data.businessName} />
        <Row l="Sector" v={data.sector} />
        <Row l="Servicio principal" v={data.mainService} />
        <Row l="Propuesta de valor" v={data.uvp} />
        <Row l="Público" v={data.audience} />
        <Row l="Teléfono" v={data.phone} />
        <Row l="Email" v={data.email} />
        <Row l="Dirección" v={data.address} />
        <Row l="Horarios" v={data.hours} />
        {hasSocials && <Row l="Redes sociales" v={Object.entries(data.socials || {}).filter(([,v]) => v).map(([k]) => k).join(", ")} />}
      </SBlock>
      <SBlock title="Objetivo y tono">
        <Row l="Objetivo" v={OBJECTIVES.find(o => o.id === data.objective)?.label} />
        <Row l="Tono" v={TONES.find(t => t.id === data.tone)?.label} />
        <Row l="Enfoque" v={data.focus === "conversion" ? "Conversión" : data.focus === "informative" ? "Informativa" : "Equilibrada"} />
        <Row l="CTA" v={data.ctaText} />
        <Row l="Colores" v={`${data.primaryColor || "#00E5A0"} / ${data.secondaryColor || "#0073AA"}`} />
        {hasOffer && <Row l="Oferta" v={`${data.offerTypes.join(", ")}${data.offerDetails ? ` — ${data.offerDetails}` : ""}`} />}
      </SBlock>
      {(hasSEO || hasComp) && (
        <SBlock title="SEO y competencia">
          <Row l="Keyword principal" v={data.seoMain} />
          <Row l="Keywords secundarias" v={data.seoSecondary} />
          <Row l="Localización" v={data.seoLocation} />
          {hasComp && <Row l="Competidores" v={data.competitors.filter(c => c).join(", ")} />}
        </SBlock>
      )}
      {hasTrust && (
        <SBlock title="Trust signals">
          <Row l="Años experiencia" v={data.trustYears} />
          <Row l="Clientes" v={data.trustClients} />
          <Row l="Proyectos" v={data.trustProjects} />
          <Row l="Valoración" v={data.trustRating} />
          <Row l="Certificaciones" v={data.trustCerts} />
          <Row l="Premios" v={data.trustAwards} />
          <Row l="Partners" v={data.trustPartners} />
          <Row l="Medios" v={data.trustMedia} />
        </SBlock>
      )}
      <SBlock title={`Secciones (${sels.length})`}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {sels.map(s => <span key={s.id} style={{ padding: "5px 10px", borderRadius: "6px", fontSize: "11px", background: `${T.accent}10`, border: `1px solid ${T.accent}22`, color: T.accent, fontWeight: 500 }}>{s.label}</span>)}
        </div>
      </SBlock>
      {data.inspirationImage && (
        <SBlock title="Inspiración">
          <img src={data.inspirationImage} alt="" style={{ maxWidth: "180px", borderRadius: "8px", border: `1px solid ${T.border}` }} />
          {data.inspirationNotes && <p style={{ fontSize: "12px", color: T.gray, marginTop: "10px" }}>{data.inspirationNotes}</p>}
        </SBlock>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px", paddingTop: "24px", borderTop: `1px solid ${T.border}` }}>
        <button onClick={onBack} style={{ padding: "12px 24px", borderRadius: "10px", border: `1px solid ${T.border}`, background: "transparent", color: T.gray, fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: T.font }}>← Atrás</button>
        <button onClick={onGenerate} style={{ padding: "14px 40px", borderRadius: "12px", border: "none", background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`, color: T.bg, fontSize: "16px", fontWeight: 800, cursor: "pointer", fontFamily: T.font, boxShadow: `0 4px 20px ${T.accent}33`, transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 8px 30px ${T.accent}44`; }}
          onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 4px 20px ${T.accent}33`; }}>
          🚀 Generar página
        </button>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function LandForgeSurvey() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    cms: null, pageType: null, sections: {},
    businessName: "", sector: "", mainService: "", uvp: "", audience: "", url: "",
    phone: "", email: "", address: "", hours: "", socials: {},
    objective: null, tone: null, focus: "balanced", ctaText: "", language: "Español",
    theme: "light", primaryColor: "#00E5A0", secondaryColor: "#0073AA",
    offerTypes: [], offerDetails: "",
    seoMain: "", seoSecondary: "", seoLocation: "", competitors: ["", "", ""],
    trustYears: "", trustClients: "", trustProjects: "", trustRating: "",
    trustCerts: "", trustAwards: "", trustPartners: "", trustMedia: "",
    inspirationImage: null, inspirationName: "", inspirationNotes: "",
  });
  const [generating, setGenerating] = useState(false);
  const containerRef = useRef();
  const TOTAL_STEPS = 9;

  useEffect(() => { containerRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }, [step]);

  if (generating) {
    return (
      <div style={{ minHeight: "100vh", background: T.bg, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", fontFamily: T.font }}>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <div style={{ width: "60px", height: "60px", borderRadius: "50%", border: `3px solid ${T.border}`, borderTopColor: T.accent, animation: "spin 1s linear infinite" }} />
        <h3 style={{ color: T.white, fontSize: "22px", marginTop: "24px", fontWeight: 700 }}>Generando tu página...</h3>
        <p style={{ color: T.gray, fontSize: "14px", marginTop: "8px" }}>La IA está creando estructura, copy y código nativo</p>
        <div style={{ display: "flex", gap: "24px", marginTop: "32px" }}>
          {["Analizando sector", "Generando copy", `Empaquetando para ${CMS_OPTIONS.find(c => c.id === data.cms)?.label || "..."}`].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: T.accent, animation: `pulse 1.5s ease-in-out ${i * 0.3}s infinite` }} />
              <span style={{ fontSize: "12px", color: T.grayDark }}>{t}</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } } @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: T.font, display: "flex", justifyContent: "center" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div ref={containerRef} style={{ width: "100%", maxWidth: "720px", padding: "40px 24px", overflowY: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "16px", color: T.bg, fontFamily: T.mono }}>L</div>
          <span style={{ fontWeight: 700, fontSize: "18px", color: T.white, fontFamily: T.mono }}>LandForge</span>
          <span style={{ marginLeft: "auto", fontSize: "12px", color: T.grayDark, padding: "4px 10px", borderRadius: "6px", background: T.bgCard, border: `1px solid ${T.border}`, fontFamily: T.mono }}>Encuesta</span>
        </div>
        <StepIndicator current={step} total={TOTAL_STEPS} />
        {step === 0 && <StepCMS data={data} setData={setData} onNext={() => setStep(1)} />}
        {step === 1 && <StepPageType data={data} setData={setData} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
        {step === 2 && <StepBusiness data={data} setData={setData} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <StepObjective data={data} setData={setData} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
        {step === 4 && <StepSEO data={data} setData={setData} onNext={() => setStep(5)} onBack={() => setStep(3)} />}
        {step === 5 && <StepTrust data={data} setData={setData} onNext={() => setStep(6)} onBack={() => setStep(4)} />}
        {step === 6 && <StepInspiration data={data} setData={setData} onNext={() => setStep(7)} onBack={() => setStep(5)} />}
        {step === 7 && <StepSections data={data} setData={setData} onNext={() => setStep(8)} onBack={() => setStep(6)} />}
        {step === 8 && <StepSummary data={data} onBack={() => setStep(7)} onGenerate={() => setGenerating(true)} />}
      </div>
      <style>{`* { margin: 0; padding: 0; box-sizing: border-box; } ::selection { background: ${T.accent}33; } input[type="color"] { -webkit-appearance: none; } input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; } input[type="color"]::-webkit-color-swatch { border: 2px solid ${T.border}; border-radius: 6px; }`}</style>
    </div>
  );
}
