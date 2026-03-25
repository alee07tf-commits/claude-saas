import { useState, useEffect, useRef } from "react";

// ============================================
// DESIGN TOKENS
// ============================================
const T = {
  bg: "#0A0E17",
  bgCard: "#111827",
  bgHover: "#1A2332",
  border: "#1E293B",
  borderActive: "#00E5A0",
  accent: "#00E5A0",
  accentAlt: "#00B8D4",
  white: "#F1F5F9",
  gray: "#94A3B8",
  grayDark: "#64748B",
  danger: "#EF4444",
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
};

// ============================================
// PAGE TYPES WITH DEFAULT SECTIONS
// ============================================
const PAGE_TYPES = {
  homepage: {
    label: "Homepage",
    icon: "🏠",
    desc: "Página principal del negocio",
    sections: [
      { id: "hero", label: "Hero principal con CTA", default: true },
      { id: "services", label: "Servicios / Qué ofrecemos", default: true },
      { id: "about_preview", label: "Sobre nosotros (resumen)", default: true },
      { id: "benefits", label: "Beneficios / Por qué elegirnos", default: true },
      { id: "testimonials", label: "Testimonios de clientes", default: true },
      { id: "portfolio", label: "Portfolio / Trabajos realizados", default: false },
      { id: "stats", label: "Cifras / Estadísticas", default: false },
      { id: "team", label: "Equipo", default: false },
      { id: "faq", label: "Preguntas frecuentes", default: true },
      { id: "cta_banner", label: "Banner CTA final", default: true },
      { id: "contact_form", label: "Formulario de contacto", default: true },
      { id: "map", label: "Mapa / Ubicación", default: false },
      { id: "blog_preview", label: "Últimos artículos del blog", default: false },
      { id: "partners", label: "Partners / Marcas colaboradoras", default: false },
    ]
  },
  about: {
    label: "Quiénes somos",
    icon: "👥",
    desc: "Página sobre la empresa y su historia",
    sections: [
      { id: "hero_about", label: "Hero con titular de marca", default: true },
      { id: "story", label: "Nuestra historia / Misión", default: true },
      { id: "values", label: "Valores de la empresa", default: true },
      { id: "team", label: "Equipo", default: true },
      { id: "timeline", label: "Línea temporal / Hitos", default: false },
      { id: "stats", label: "Cifras / Logros", default: true },
      { id: "certifications", label: "Certificaciones / Premios", default: false },
      { id: "gallery", label: "Galería de imágenes", default: false },
      { id: "testimonials", label: "Testimonios", default: false },
      { id: "cta_banner", label: "Banner CTA", default: true },
    ]
  },
  services: {
    label: "Servicios",
    icon: "⚙️",
    desc: "Catálogo de servicios con detalle",
    sections: [
      { id: "hero_services", label: "Hero con propuesta de valor", default: true },
      { id: "services_grid", label: "Grid de servicios", default: true },
      { id: "service_detail", label: "Detalle de servicio destacado", default: false },
      { id: "process", label: "Cómo trabajamos (proceso)", default: true },
      { id: "benefits", label: "Beneficios / Ventajas", default: true },
      { id: "pricing", label: "Tabla de precios", default: false },
      { id: "case_studies", label: "Casos de éxito", default: false },
      { id: "testimonials", label: "Testimonios", default: true },
      { id: "faq", label: "Preguntas frecuentes", default: true },
      { id: "cta_banner", label: "Banner CTA", default: true },
    ]
  },
  contact: {
    label: "Contacto",
    icon: "📬",
    desc: "Página de contacto con formulario",
    sections: [
      { id: "hero_contact", label: "Hero con info de contacto", default: true },
      { id: "contact_form", label: "Formulario de contacto", default: true },
      { id: "contact_info", label: "Datos de contacto (teléfono, email, dirección)", default: true },
      { id: "map", label: "Mapa interactivo", default: true },
      { id: "hours", label: "Horarios de atención", default: true },
      { id: "social", label: "Redes sociales", default: false },
      { id: "faq", label: "Preguntas frecuentes", default: false },
    ]
  },
  landing: {
    label: "Landing Page",
    icon: "🚀",
    desc: "Página de aterrizaje para campañas",
    sections: [
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
    ]
  },
  reviews: {
    label: "Reseñas / Testimonios",
    icon: "⭐",
    desc: "Página dedicada a reseñas y casos de éxito",
    sections: [
      { id: "hero_reviews", label: "Hero con puntuación media", default: true },
      { id: "featured_reviews", label: "Reseñas destacadas", default: true },
      { id: "reviews_grid", label: "Grid de reseñas", default: true },
      { id: "video_testimonials", label: "Video testimonios", default: false },
      { id: "case_studies", label: "Casos de éxito detallados", default: false },
      { id: "platforms", label: "Badges de plataformas (Google, Trustpilot...)", default: true },
      { id: "stats", label: "Cifras (clientes atendidos, valoración media...)", default: true },
      { id: "cta_banner", label: "Banner CTA", default: true },
    ]
  },
  portfolio: {
    label: "Portfolio / Trabajos",
    icon: "🎨",
    desc: "Muestra de proyectos y trabajos realizados",
    sections: [
      { id: "hero_portfolio", label: "Hero con muestra visual", default: true },
      { id: "filter_bar", label: "Barra de filtros por categoría", default: true },
      { id: "projects_grid", label: "Grid de proyectos", default: true },
      { id: "project_detail", label: "Proyecto destacado con detalle", default: false },
      { id: "process", label: "Nuestro proceso creativo", default: false },
      { id: "clients", label: "Logos de clientes", default: true },
      { id: "testimonials", label: "Testimonios de clientes", default: false },
      { id: "cta_banner", label: "Banner CTA / Solicitar presupuesto", default: true },
    ]
  },
  product: {
    label: "Página de Producto",
    icon: "🛍️",
    desc: "Página de producto para eCommerce",
    sections: [
      { id: "hero_product", label: "Hero con imagen de producto + CTA de compra", default: true },
      { id: "features", label: "Características del producto", default: true },
      { id: "gallery", label: "Galería de imágenes", default: true },
      { id: "specs", label: "Especificaciones técnicas", default: false },
      { id: "comparison", label: "Comparativa con otros productos", default: false },
      { id: "reviews_product", label: "Reseñas de compradores", default: true },
      { id: "related", label: "Productos relacionados", default: true },
      { id: "faq", label: "Preguntas frecuentes", default: true },
      { id: "guarantee", label: "Garantía y devoluciones", default: true },
    ]
  },
  pricing_page: {
    label: "Página de Precios",
    icon: "💰",
    desc: "Tabla comparativa de planes o servicios",
    sections: [
      { id: "hero_pricing", label: "Hero con propuesta de valor", default: true },
      { id: "pricing_table", label: "Tabla de precios (2-4 planes)", default: true },
      { id: "comparison_matrix", label: "Matriz comparativa de features", default: true },
      { id: "faq_pricing", label: "FAQs sobre pricing", default: true },
      { id: "testimonials", label: "Testimonios", default: false },
      { id: "guarantee", label: "Garantía / Prueba gratuita", default: true },
      { id: "cta_banner", label: "Banner CTA final", default: true },
    ]
  },
};

const CMS_OPTIONS = [
  { id: "elementor", label: "Elementor", desc: "WordPress — JSON importable", color: "#92003B", icon: "E" },
  { id: "gutenberg", label: "Gutenberg", desc: "WordPress — Bloques nativos", color: "#0073AA", icon: "G" },
  { id: "odoo", label: "Odoo", desc: "Website Builder — QWeb snippets", color: "#714B67", icon: "O" },
  { id: "shopify", label: "Shopify", desc: "Theme Editor — Secciones Liquid", color: "#96BF48", icon: "S" },
];

const OBJECTIVES = [
  { id: "leads", label: "Captar leads", desc: "Formularios, llamadas a la acción" },
  { id: "sales", label: "Vender online", desc: "Compra directa de producto/servicio" },
  { id: "inform", label: "Informar", desc: "Presentar la empresa o servicio" },
  { id: "booking", label: "Reservar citas", desc: "Agendar reuniones o servicios" },
  { id: "download", label: "Descargar recurso", desc: "Lead magnet, ebook, guía" },
  { id: "branding", label: "Branding", desc: "Reforzar imagen de marca" },
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

// ============================================
// REUSABLE COMPONENTS
// ============================================
const StepIndicator = ({ current, total, labels }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "40px" }}>
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", gap: "4px", flex: 1 }}>
        <div style={{
          height: "3px", flex: 1, borderRadius: "2px",
          background: i <= current
            ? `linear-gradient(90deg, ${T.accent}, ${T.accentAlt})`
            : T.border,
          transition: "all 0.5s ease",
        }} />
      </div>
    ))}
    <span style={{
      fontSize: "12px", color: T.grayDark, fontFamily: T.mono,
      marginLeft: "12px", whiteSpace: "nowrap",
    }}>{current + 1}/{total}</span>
  </div>
);

const StepTitle = ({ step, title, subtitle }) => (
  <div style={{ marginBottom: "32px" }}>
    <span style={{
      fontSize: "12px", fontWeight: 700, color: T.accent,
      textTransform: "uppercase", letterSpacing: "2px", fontFamily: T.mono,
    }}>Paso {step}</span>
    <h2 style={{
      fontSize: "28px", fontWeight: 800, color: T.white,
      margin: "8px 0 8px", letterSpacing: "-0.5px", fontFamily: T.font,
    }}>{title}</h2>
    {subtitle && <p style={{ fontSize: "15px", color: T.gray, lineHeight: 1.6 }}>{subtitle}</p>}
  </div>
);

const SelectCard = ({ selected, onClick, children, style = {} }) => (
  <div
    onClick={onClick}
    style={{
      background: selected ? `${T.accent}08` : T.bgCard,
      border: `2px solid ${selected ? T.accent : T.border}`,
      borderRadius: "12px", padding: "16px", cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: selected ? `0 0 20px ${T.accent}15` : "none",
      ...style,
    }}
    onMouseEnter={(e) => { if (!selected) e.currentTarget.style.borderColor = T.grayDark; }}
    onMouseLeave={(e) => { if (!selected) e.currentTarget.style.borderColor = T.border; }}
  >
    {children}
  </div>
);

const TextInput = ({ label, value, onChange, placeholder, maxLen, multiline, optional }) => (
  <div style={{ marginBottom: "20px" }}>
    <label style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "8px",
    }}>
      <span>{label}{optional && <span style={{ color: T.grayDark, fontWeight: 400 }}> (opcional)</span>}</span>
      {maxLen && <span style={{ fontFamily: T.mono, fontSize: "11px", color: T.grayDark }}>{(value || "").length}/{maxLen}</span>}
    </label>
    {multiline ? (
      <textarea
        value={value || ""}
        onChange={(e) => onChange(maxLen ? e.target.value.slice(0, maxLen) : e.target.value)}
        placeholder={placeholder}
        rows={3}
        style={{
          width: "100%", padding: "12px 14px", borderRadius: "10px",
          border: `1px solid ${T.border}`, background: T.bg, color: T.white,
          fontSize: "14px", fontFamily: T.font, outline: "none", resize: "vertical",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => e.target.style.borderColor = T.accent}
        onBlur={(e) => e.target.style.borderColor = T.border}
      />
    ) : (
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(maxLen ? e.target.value.slice(0, maxLen) : e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%", padding: "12px 14px", borderRadius: "10px",
          border: `1px solid ${T.border}`, background: T.bg, color: T.white,
          fontSize: "14px", fontFamily: T.font, outline: "none",
          transition: "border-color 0.2s", boxSizing: "border-box",
        }}
        onFocus={(e) => e.target.style.borderColor = T.accent}
        onBlur={(e) => e.target.style.borderColor = T.border}
      />
    )}
  </div>
);

const NavButtons = ({ onBack, onNext, nextLabel = "Siguiente", nextDisabled = false, showBack = true }) => (
  <div style={{
    display: "flex", justifyContent: showBack ? "space-between" : "flex-end",
    marginTop: "40px", paddingTop: "24px", borderTop: `1px solid ${T.border}`,
  }}>
    {showBack && (
      <button onClick={onBack} style={{
        padding: "12px 24px", borderRadius: "10px", border: `1px solid ${T.border}`,
        background: "transparent", color: T.gray, fontSize: "14px", fontWeight: 600,
        cursor: "pointer", fontFamily: T.font, transition: "all 0.2s",
      }}
        onMouseEnter={(e) => e.target.style.borderColor = T.gray}
        onMouseLeave={(e) => e.target.style.borderColor = T.border}
      >← Atrás</button>
    )}
    <button onClick={onNext} disabled={nextDisabled} style={{
      padding: "12px 32px", borderRadius: "10px", border: "none",
      background: nextDisabled ? T.grayDark : `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
      color: nextDisabled ? T.gray : T.bg, fontSize: "14px", fontWeight: 700,
      cursor: nextDisabled ? "not-allowed" : "pointer", fontFamily: T.font,
      transition: "all 0.2s", opacity: nextDisabled ? 0.5 : 1,
    }}>{nextLabel} →</button>
  </div>
);

// ============================================
// STEP COMPONENTS
// ============================================

// STEP 0: CMS Selection
const StepCMS = ({ data, setData, onNext }) => (
  <div>
    <StepTitle step={1} title="Elige tu plataforma" subtitle="¿En qué CMS vas a importar la página generada?" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
      {CMS_OPTIONS.map((cms) => (
        <SelectCard
          key={cms.id}
          selected={data.cms === cms.id}
          onClick={() => setData({ ...data, cms: cms.id })}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "10px",
              background: `${cms.color}20`, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "18px", fontWeight: 800,
              color: cms.color, fontFamily: T.mono, flexShrink: 0,
            }}>{cms.icon}</div>
            <div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: T.white }}>{cms.label}</div>
              <div style={{ fontSize: "12px", color: T.grayDark, marginTop: "2px" }}>{cms.desc}</div>
            </div>
          </div>
          {data.cms === cms.id && (
            <div style={{
              position: "absolute", top: "8px", right: "8px",
              width: "20px", height: "20px", borderRadius: "50%",
              background: T.accent, display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: T.bg, fontSize: "12px", fontWeight: 800 }}>✓</span>
            </div>
          )}
        </SelectCard>
      ))}
    </div>
    <NavButtons onNext={onNext} nextDisabled={!data.cms} showBack={false} />
  </div>
);

// STEP 1: Page Type
const StepPageType = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={2} title="Tipo de página" subtitle="¿Qué tipo de página quieres crear?" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      {Object.entries(PAGE_TYPES).map(([key, pt]) => (
        <SelectCard
          key={key}
          selected={data.pageType === key}
          onClick={() => {
            const defaults = {};
            pt.sections.forEach(s => { defaults[s.id] = s.default; });
            setData({ ...data, pageType: key, sections: defaults });
          }}
          style={{ textAlign: "center", padding: "20px 12px", position: "relative" }}
        >
          <div style={{ fontSize: "28px", marginBottom: "8px" }}>{pt.icon}</div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: T.white }}>{pt.label}</div>
          <div style={{ fontSize: "11px", color: T.grayDark, marginTop: "4px", lineHeight: 1.4 }}>{pt.desc}</div>
        </SelectCard>
      ))}
    </div>
    <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!data.pageType} />
  </div>
);

// STEP 2: Business Info
const StepBusiness = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={3} title="Sobre el negocio" subtitle="Cuéntanos sobre el negocio para el que crearemos la página." />
    <TextInput label="Nombre del negocio" value={data.businessName} onChange={(v) => setData({ ...data, businessName: v })} placeholder="Ej: Clínica Dental Sonrisa" />
    <div style={{ marginBottom: "20px" }}>
      <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "8px", display: "block" }}>Sector</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {SECTORS.map((s) => (
          <div key={s} onClick={() => setData({ ...data, sector: s })} style={{
            padding: "8px 14px", borderRadius: "8px", fontSize: "13px", cursor: "pointer",
            background: data.sector === s ? `${T.accent}15` : T.bgCard,
            border: `1px solid ${data.sector === s ? T.accent : T.border}`,
            color: data.sector === s ? T.accent : T.gray, fontWeight: data.sector === s ? 600 : 400,
            transition: "all 0.2s",
          }}>{s}</div>
        ))}
      </div>
    </div>
    <TextInput label="Servicio o producto principal" value={data.mainService} onChange={(v) => setData({ ...data, mainService: v })} placeholder="Ej: Implantes dentales de última generación" maxLen={200} />
    <TextInput label="Propuesta de valor única" value={data.uvp} onChange={(v) => setData({ ...data, uvp: v })} placeholder="¿Qué hace diferente a este negocio?" maxLen={300} />
    <TextInput label="Público objetivo" value={data.audience} onChange={(v) => setData({ ...data, audience: v })} placeholder="Ej: Mujeres de 30-50 años interesadas en estética dental" maxLen={200} />
    <TextInput label="URL actual del negocio" value={data.url} onChange={(v) => setData({ ...data, url: v })} placeholder="https://..." optional />
    <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!data.businessName || !data.sector} />
  </div>
);

// STEP 3: Objective & Tone
const StepObjective = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={4} title="Objetivo y tono" subtitle="¿Qué debe conseguir esta página y cómo debe comunicar?" />

    <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "10px", display: "block" }}>Objetivo principal de la página</label>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "28px" }}>
      {OBJECTIVES.map((obj) => (
        <SelectCard key={obj.id} selected={data.objective === obj.id} onClick={() => setData({ ...data, objective: obj.id })}>
          <div style={{ fontSize: "14px", fontWeight: 600, color: data.objective === obj.id ? T.accent : T.white }}>{obj.label}</div>
          <div style={{ fontSize: "11px", color: T.grayDark, marginTop: "4px" }}>{obj.desc}</div>
        </SelectCard>
      ))}
    </div>

    <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "10px", display: "block" }}>Tono de comunicación</label>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
      {TONES.map((tone) => (
        <div key={tone.id} onClick={() => setData({ ...data, tone: tone.id })} style={{
          padding: "10px 16px", borderRadius: "10px", cursor: "pointer",
          background: data.tone === tone.id ? `${T.accent}15` : T.bgCard,
          border: `1px solid ${data.tone === tone.id ? T.accent : T.border}`,
          color: data.tone === tone.id ? T.accent : T.gray, fontSize: "13px", fontWeight: 600,
          display: "flex", alignItems: "center", gap: "6px", transition: "all 0.2s",
        }}>{tone.emoji} {tone.label}</div>
      ))}
    </div>

    <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "10px", display: "block" }}>Enfoque de la página</label>
    <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
      {[
        { id: "conversion", label: "Orientada a conversión", desc: "CTAs agresivos, urgencia, beneficios" },
        { id: "informative", label: "Orientada a informar", desc: "Contenido detallado, educativo" },
        { id: "balanced", label: "Equilibrada", desc: "Mix de información y conversión" },
      ].map((f) => (
        <SelectCard key={f.id} selected={data.focus === f.id} onClick={() => setData({ ...data, focus: f.id })} style={{ flex: 1 }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: data.focus === f.id ? T.accent : T.white }}>{f.label}</div>
          <div style={{ fontSize: "11px", color: T.grayDark, marginTop: "4px" }}>{f.desc}</div>
        </SelectCard>
      ))}
    </div>

    <TextInput label="Texto del botón principal (CTA)" value={data.ctaText} onChange={(v) => setData({ ...data, ctaText: v })} placeholder="Ej: Pide tu cita gratis, Comprar ahora, Solicitar presupuesto..." />
    <TextInput label="Idioma de la página" value={data.language} onChange={(v) => setData({ ...data, language: v })} placeholder="Español" />

    <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!data.objective || !data.tone} />
  </div>
);

// STEP 4: Style & Animations
const StepStyle = ({ data, setData, onNext, onBack }) => (
  <div>
    <StepTitle step={5} title="Estilo visual" subtitle="Define la apariencia y efectos de la página." />

    <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "10px", display: "block" }}>Tema de color</label>
    <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
      {[
        { id: "light", label: "Light", preview: "linear-gradient(135deg, #FFFFFF, #F3F4F6)", textColor: "#111" },
        { id: "dark", label: "Dark", preview: "linear-gradient(135deg, #0A0E17, #1A1A2E)", textColor: "#fff" },
        { id: "mixed", label: "Mixto", preview: "linear-gradient(135deg, #0A0E17, #FFFFFF)", textColor: "#fff" },
      ].map((theme) => (
        <SelectCard key={theme.id} selected={data.theme === theme.id} onClick={() => setData({ ...data, theme: theme.id })} style={{ flex: 1, textAlign: "center" }}>
          <div style={{
            width: "100%", height: "48px", borderRadius: "8px", background: theme.preview, marginBottom: "8px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "11px", fontWeight: 600, color: theme.textColor,
          }}>{theme.label}</div>
          <div style={{ fontSize: "13px", fontWeight: 600, color: T.white }}>{theme.label}</div>
        </SelectCard>
      ))}
    </div>

    <div style={{ display: "flex", gap: "16px", marginBottom: "28px" }}>
      <div style={{ flex: 1 }}>
        <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "8px", display: "block" }}>Color primario</label>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input type="color" value={data.primaryColor || "#00E5A0"} onChange={(e) => setData({ ...data, primaryColor: e.target.value })}
            style={{ width: "44px", height: "44px", border: "none", borderRadius: "8px", cursor: "pointer", background: "transparent" }} />
          <input type="text" value={data.primaryColor || "#00E5A0"} onChange={(e) => setData({ ...data, primaryColor: e.target.value })}
            style={{
              flex: 1, padding: "10px 12px", borderRadius: "8px", border: `1px solid ${T.border}`,
              background: T.bg, color: T.white, fontSize: "13px", fontFamily: T.mono, outline: "none",
            }} />
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "8px", display: "block" }}>Color secundario</label>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input type="color" value={data.secondaryColor || "#0073AA"} onChange={(e) => setData({ ...data, secondaryColor: e.target.value })}
            style={{ width: "44px", height: "44px", border: "none", borderRadius: "8px", cursor: "pointer", background: "transparent" }} />
          <input type="text" value={data.secondaryColor || "#0073AA"} onChange={(e) => setData({ ...data, secondaryColor: e.target.value })}
            style={{
              flex: 1, padding: "10px 12px", borderRadius: "8px", border: `1px solid ${T.border}`,
              background: T.bg, color: T.white, fontSize: "13px", fontFamily: T.mono, outline: "none",
            }} />
        </div>
      </div>
    </div>
    <div style={{ marginBottom: "8px" }}>
      <span style={{ fontSize: "11px", color: T.grayDark }}>¿No tienes colores definidos? Déjalo así y la IA elegirá los más adecuados para tu sector.</span>
    </div>

    <div style={{ marginTop: "20px", marginBottom: "28px" }}>
      <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, marginBottom: "10px", display: "block" }}>Animaciones CSS</label>
      <div style={{ display: "flex", gap: "10px" }}>
        {[
          { id: "none", label: "Sin animaciones", desc: "Carga rápida, estático" },
          { id: "subtle", label: "Sutiles", desc: "Fade-in al scroll, hovers suaves" },
          { id: "full", label: "Animaciones completas", desc: "Parallax, slide-in, micro-interacciones" },
        ].map((anim) => (
          <SelectCard key={anim.id} selected={data.animations === anim.id} onClick={() => setData({ ...data, animations: anim.id })} style={{ flex: 1 }}>
            <div style={{ fontSize: "13px", fontWeight: 600, color: data.animations === anim.id ? T.accent : T.white }}>{anim.label}</div>
            <div style={{ fontSize: "11px", color: T.grayDark, marginTop: "4px" }}>{anim.desc}</div>
          </SelectCard>
        ))}
      </div>
    </div>

    <NavButtons onBack={onBack} onNext={onNext} />
  </div>
);

// STEP 5: Inspiration
const StepInspiration = ({ data, setData, onNext, onBack }) => {
  const fileRef = useRef();
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setData({ ...data, inspirationImage: ev.target.result, inspirationName: file.name });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <StepTitle step={6} title="Inspiración" subtitle="Sube una captura de una página que te guste como referencia. Esto es opcional pero ayuda mucho a la IA." />

      <div
        onClick={() => fileRef.current?.click()}
        style={{
          border: `2px dashed ${data.inspirationImage ? T.accent : T.border}`,
          borderRadius: "16px", padding: "40px 20px", textAlign: "center",
          cursor: "pointer", transition: "all 0.2s",
          background: data.inspirationImage ? `${T.accent}05` : T.bgCard,
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = T.accent}
        onMouseLeave={(e) => { if (!data.inspirationImage) e.currentTarget.style.borderColor = T.border; }}
      >
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: "none" }} />
        {data.inspirationImage ? (
          <div>
            <img src={data.inspirationImage} alt="Inspiración" style={{
              maxWidth: "100%", maxHeight: "300px", borderRadius: "10px", marginBottom: "12px",
              border: `1px solid ${T.border}`,
            }} />
            <p style={{ fontSize: "13px", color: T.accent, fontWeight: 600 }}>✓ {data.inspirationName}</p>
            <p style={{ fontSize: "12px", color: T.grayDark, marginTop: "4px" }}>Click para cambiar</p>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: "40px", marginBottom: "12px", opacity: 0.5 }}>📸</div>
            <p style={{ fontSize: "15px", color: T.gray, fontWeight: 600 }}>Arrastra o haz click para subir</p>
            <p style={{ fontSize: "12px", color: T.grayDark, marginTop: "6px" }}>PNG, JPG o WEBP — Captura de la página que te inspira</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: "24px" }}>
        <TextInput
          label="Notas sobre la inspiración"
          value={data.inspirationNotes}
          onChange={(v) => setData({ ...data, inspirationNotes: v })}
          placeholder="Ej: Me gusta cómo estructura el hero, quiero algo similar con esos colores..."
          multiline optional
        />
      </div>

      <NavButtons onBack={onBack} onNext={onNext} />
    </div>
  );
};

// STEP 6: Sections Selector
const StepSections = ({ data, setData, onNext, onBack }) => {
  const pageConfig = PAGE_TYPES[data.pageType];
  if (!pageConfig) return null;

  const toggleSection = (id) => {
    setData({ ...data, sections: { ...data.sections, [id]: !data.sections[id] } });
  };

  const selectAll = () => {
    const all = {};
    pageConfig.sections.forEach(s => { all[s.id] = true; });
    setData({ ...data, sections: all });
  };

  const resetDefaults = () => {
    const defaults = {};
    pageConfig.sections.forEach(s => { defaults[s.id] = s.default; });
    setData({ ...data, sections: defaults });
  };

  const selectedCount = Object.values(data.sections || {}).filter(Boolean).length;

  return (
    <div>
      <StepTitle
        step={7}
        title="Estructura de la página"
        subtitle={`Selecciona las secciones que quieres incluir en tu ${pageConfig.label}. Hemos preseleccionado las más comunes.`}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <span style={{ fontSize: "13px", color: T.grayDark }}>
          <strong style={{ color: T.accent }}>{selectedCount}</strong> secciones seleccionadas
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={selectAll} style={{
            padding: "6px 12px", borderRadius: "6px", border: `1px solid ${T.border}`,
            background: "transparent", color: T.gray, fontSize: "12px", cursor: "pointer", fontFamily: T.font,
          }}>Seleccionar todas</button>
          <button onClick={resetDefaults} style={{
            padding: "6px 12px", borderRadius: "6px", border: `1px solid ${T.border}`,
            background: "transparent", color: T.gray, fontSize: "12px", cursor: "pointer", fontFamily: T.font,
          }}>Restaurar por defecto</button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {pageConfig.sections.map((section, i) => {
          const isSelected = data.sections?.[section.id] || false;
          return (
            <div
              key={section.id}
              onClick={() => toggleSection(section.id)}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "14px 16px", borderRadius: "10px",
                background: isSelected ? `${T.accent}08` : T.bgCard,
                border: `1px solid ${isSelected ? `${T.accent}44` : T.border}`,
                cursor: "pointer", transition: "all 0.15s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = isSelected ? `${T.accent}12` : T.bgHover}
              onMouseLeave={(e) => e.currentTarget.style.background = isSelected ? `${T.accent}08` : T.bgCard}
            >
              <div style={{
                width: "24px", height: "24px", borderRadius: "6px", flexShrink: 0,
                border: `2px solid ${isSelected ? T.accent : T.grayDark}`,
                background: isSelected ? T.accent : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}>
                {isSelected && <span style={{ color: T.bg, fontSize: "14px", fontWeight: 800 }}>✓</span>}
              </div>
              <div style={{ flex: 1 }}>
                <span style={{
                  fontSize: "14px", fontWeight: 600,
                  color: isSelected ? T.white : T.gray,
                }}>{section.label}</span>
              </div>
              <span style={{
                fontSize: "11px", fontFamily: T.mono, color: T.grayDark,
                padding: "2px 8px", borderRadius: "4px",
                background: section.default ? `${T.accent}10` : "transparent",
              }}>
                {section.default ? "recomendada" : ""}
              </span>
            </div>
          );
        })}
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Ver resumen" nextDisabled={selectedCount === 0} />
    </div>
  );
};

// STEP 7: Summary
const StepSummary = ({ data, onBack, onGenerate }) => {
  const pageConfig = PAGE_TYPES[data.pageType];
  const cmsConfig = CMS_OPTIONS.find(c => c.id === data.cms);
  const selectedSections = pageConfig?.sections.filter(s => data.sections?.[s.id]) || [];

  const SummaryRow = ({ label, value }) => (
    <div style={{ display: "flex", padding: "10px 0", borderBottom: `1px solid ${T.border}` }}>
      <span style={{ width: "180px", fontSize: "13px", color: T.grayDark, flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: "14px", color: T.white, fontWeight: 500 }}>{value || "—"}</span>
    </div>
  );

  return (
    <div>
      <StepTitle step={8} title="Resumen" subtitle="Revisa todo antes de generar. Puedes volver a cualquier paso para hacer cambios." />

      <div style={{
        background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "14px",
        padding: "24px", marginBottom: "24px",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", fontFamily: T.mono }}>Configuración</div>
        <SummaryRow label="Plataforma" value={`${cmsConfig?.label} — ${cmsConfig?.desc}`} />
        <SummaryRow label="Tipo de página" value={`${pageConfig?.icon} ${pageConfig?.label}`} />
        <SummaryRow label="Tema" value={data.theme === "light" ? "Claro" : data.theme === "dark" ? "Oscuro" : "Mixto"} />
        <SummaryRow label="Animaciones" value={data.animations === "none" ? "Sin animaciones" : data.animations === "subtle" ? "Sutiles" : "Completas"} />
      </div>

      <div style={{
        background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "14px",
        padding: "24px", marginBottom: "24px",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", fontFamily: T.mono }}>Negocio</div>
        <SummaryRow label="Nombre" value={data.businessName} />
        <SummaryRow label="Sector" value={data.sector} />
        <SummaryRow label="Servicio principal" value={data.mainService} />
        <SummaryRow label="Propuesta de valor" value={data.uvp} />
        <SummaryRow label="Público objetivo" value={data.audience} />
      </div>

      <div style={{
        background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "14px",
        padding: "24px", marginBottom: "24px",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", fontFamily: T.mono }}>Objetivo y tono</div>
        <SummaryRow label="Objetivo" value={OBJECTIVES.find(o => o.id === data.objective)?.label} />
        <SummaryRow label="Tono" value={TONES.find(t => t.id === data.tone)?.label} />
        <SummaryRow label="Enfoque" value={data.focus === "conversion" ? "Conversión" : data.focus === "informative" ? "Informativo" : "Equilibrado"} />
        <SummaryRow label="CTA" value={data.ctaText} />
      </div>

      <div style={{
        background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "14px",
        padding: "24px", marginBottom: "24px",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", fontFamily: T.mono }}>
          Secciones ({selectedSections.length})
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {selectedSections.map(s => (
            <span key={s.id} style={{
              padding: "6px 12px", borderRadius: "6px", fontSize: "12px",
              background: `${T.accent}10`, border: `1px solid ${T.accent}22`,
              color: T.accent, fontWeight: 500,
            }}>{s.label}</span>
          ))}
        </div>
      </div>

      {data.inspirationImage && (
        <div style={{
          background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: "14px",
          padding: "24px", marginBottom: "24px",
        }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", fontFamily: T.mono }}>Inspiración</div>
          <img src={data.inspirationImage} alt="" style={{ maxWidth: "200px", borderRadius: "8px", border: `1px solid ${T.border}` }} />
          {data.inspirationNotes && <p style={{ fontSize: "13px", color: T.gray, marginTop: "10px" }}>{data.inspirationNotes}</p>}
        </div>
      )}

      <div style={{
        display: "flex", justifyContent: "space-between", marginTop: "40px",
        paddingTop: "24px", borderTop: `1px solid ${T.border}`,
      }}>
        <button onClick={onBack} style={{
          padding: "12px 24px", borderRadius: "10px", border: `1px solid ${T.border}`,
          background: "transparent", color: T.gray, fontSize: "14px", fontWeight: 600,
          cursor: "pointer", fontFamily: T.font,
        }}>← Atrás</button>
        <button onClick={onGenerate} style={{
          padding: "14px 40px", borderRadius: "12px", border: "none",
          background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
          color: T.bg, fontSize: "16px", fontWeight: 800, cursor: "pointer",
          fontFamily: T.font, transition: "all 0.2s",
          boxShadow: `0 4px 20px ${T.accent}33`,
        }}
          onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 8px 30px ${T.accent}44`; }}
          onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 4px 20px ${T.accent}33`; }}
        >🚀 Generar página</button>
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
    objective: null, tone: null, focus: "balanced", ctaText: "", language: "Español",
    theme: "light", primaryColor: "#00E5A0", secondaryColor: "#0073AA",
    animations: "subtle",
    inspirationImage: null, inspirationName: "", inspirationNotes: "",
  });
  const [generating, setGenerating] = useState(false);
  const containerRef = useRef();

  const TOTAL_STEPS = 8;

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 3000);
  };

  if (generating) {
    return (
      <div style={{
        minHeight: "100vh", background: T.bg, display: "flex",
        alignItems: "center", justifyContent: "center", flexDirection: "column",
        fontFamily: T.font,
      }}>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <div style={{
          width: "60px", height: "60px", borderRadius: "50%",
          border: `3px solid ${T.border}`, borderTopColor: T.accent,
          animation: "spin 1s linear infinite",
        }} />
        <h3 style={{ color: T.white, fontSize: "22px", marginTop: "24px", fontWeight: 700 }}>Generando tu página...</h3>
        <p style={{ color: T.gray, fontSize: "14px", marginTop: "8px" }}>La IA está creando la estructura y el contenido</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh", background: T.bg, fontFamily: T.font,
      display: "flex", justifyContent: "center",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div ref={containerRef} style={{
        width: "100%", maxWidth: "720px", padding: "40px 24px",
        overflowY: "auto",
      }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px",
        }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "8px",
            background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "16px", color: T.bg, fontFamily: T.mono,
          }}>L</div>
          <span style={{ fontWeight: 700, fontSize: "18px", color: T.white, fontFamily: T.mono }}>LandForge</span>
          <span style={{
            marginLeft: "auto", fontSize: "12px", color: T.grayDark,
            padding: "4px 10px", borderRadius: "6px", background: T.bgCard,
            border: `1px solid ${T.border}`, fontFamily: T.mono,
          }}>Encuesta de generación</span>
        </div>

        <StepIndicator current={step} total={TOTAL_STEPS} />

        {/* Steps */}
        {step === 0 && <StepCMS data={data} setData={setData} onNext={() => setStep(1)} />}
        {step === 1 && <StepPageType data={data} setData={setData} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
        {step === 2 && <StepBusiness data={data} setData={setData} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <StepObjective data={data} setData={setData} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
        {step === 4 && <StepStyle data={data} setData={setData} onNext={() => setStep(5)} onBack={() => setStep(3)} />}
        {step === 5 && <StepInspiration data={data} setData={setData} onNext={() => setStep(6)} onBack={() => setStep(4)} />}
        {step === 6 && <StepSections data={data} setData={setData} onNext={() => setStep(7)} onBack={() => setStep(5)} />}
        {step === 7 && <StepSummary data={data} onBack={() => setStep(6)} onGenerate={handleGenerate} />}
      </div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: ${T.accent}33; }
        input[type="color"] { -webkit-appearance: none; }
        input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
        input[type="color"]::-webkit-color-swatch { border: 2px solid ${T.border}; border-radius: 6px; }
      `}</style>
    </div>
  );
}
