"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const T = {
  bg: "#FAFAFA",
  bgAlt: "#F3E8FF",
  card: "#FFFFFF",
  border: "#E0AAFF",
  accent: "#9D4EDD",
  accentAlt: "#7B2CBF",
  accentLight: "#E0AAFF",
  text: "#1A1A2E",
  white: "#FFFFFF",
  gray: "#6B7280",
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
};

// ─── Step 1: Page Type ───────────────────────────────────────────
const PAGE_TYPES = [
  { id: "local_business", icon: "🏪", label: "Negocio Local",             examples: "Fontanero, Carpintero, Electricista, Peluquería..." },
  { id: "services",       icon: "💼", label: "Servicios Profesionales",   examples: "Consultoría, Abogados, Contabilidad, Marketing..." },
  { id: "health",         icon: "🏥", label: "Salud & Bienestar",         examples: "Clínica, Dentista, Psicólogo, Gimnasio, Nutrición..." },
  { id: "restaurant",     icon: "🍽️", label: "Restaurante & Hostelería", examples: "Restaurante, Cafetería, Bar, Catering..." },
  { id: "ecommerce",      icon: "🛒", label: "eCommerce & Tienda",        examples: "Tienda online, Producto físico, Dropshipping..." },
  { id: "portfolio",      icon: "🎨", label: "Portfolio & Creativo",      examples: "Diseñador, Fotógrafo, Ilustrador, Videógrafo..." },
  { id: "saas",           icon: "⚡", label: "SaaS & Tecnología",         examples: "App, Software, Plataforma digital, Startup..." },
  { id: "education",      icon: "📚", label: "Educación & Formación",     examples: "Academia, Cursos online, Coach, Tutor..." },
  { id: "real_estate",    icon: "🏠", label: "Inmobiliaria",              examples: "Agencia inmobiliaria, Alquiler, Promotora..." },
  { id: "events",         icon: "🎉", label: "Eventos & Bodas",           examples: "Wedding planner, Fotógrafo bodas, Catering..." },
];

// ─── Step 6: Sections ────────────────────────────────────────────
const ALL_SECTIONS = [
  { id: "hero",         label: "Hero principal",         icon: "✦", desc: "Cabecera con CTA principal" },
  { id: "services",     label: "Servicios",              icon: "⚙", desc: "Tus servicios o productos" },
  { id: "how_it_works", label: "Cómo funciona",          icon: "↳", desc: "Proceso en pasos numerados" },
  { id: "about",        label: "Sobre nosotros",         icon: "◉", desc: "Historia y valores" },
  { id: "benefits",     label: "Beneficios",             icon: "✓", desc: "Por qué elegirnos" },
  { id: "stats",        label: "Cifras destacadas",      icon: "#", desc: "Estadísticas y logros" },
  { id: "testimonials", label: "Testimonios",            icon: "❝", desc: "Reseñas de clientes" },
  { id: "gallery",      label: "Galería",                icon: "⬛", desc: "Fotos de trabajos o productos" },
  { id: "team",         label: "Equipo",                 icon: "👥", desc: "Presentación del equipo" },
  { id: "pricing",      label: "Precios / Tarifas",      icon: "€", desc: "Planes y precios" },
  { id: "faq",          label: "FAQ",                    icon: "?", desc: "Preguntas frecuentes" },
  { id: "contact_form", label: "Formulario de contacto", icon: "✉", desc: "Formulario de contacto" },
  { id: "cta_final",    label: "CTA final",              icon: "→", desc: "Llamada a la acción de cierre" },
];

const RECOMMENDED: Record<string, string[]> = {
  local_business: ["hero", "services", "benefits", "testimonials", "contact_form"],
  services:       ["hero", "services", "how_it_works", "testimonials", "faq", "contact_form"],
  health:         ["hero", "services", "about", "testimonials", "faq", "contact_form"],
  restaurant:     ["hero", "about", "gallery", "testimonials", "contact_form"],
  ecommerce:      ["hero", "services", "benefits", "stats", "testimonials", "faq", "cta_final"],
  portfolio:      ["hero", "services", "gallery", "testimonials", "contact_form"],
  saas:           ["hero", "benefits", "how_it_works", "pricing", "faq", "cta_final"],
  education:      ["hero", "services", "how_it_works", "testimonials", "pricing", "faq"],
  real_estate:    ["hero", "services", "stats", "testimonials", "contact_form"],
  events:         ["hero", "services", "gallery", "testimonials", "faq", "contact_form"],
};

// ─── Step 7: Visual Style ────────────────────────────────────────
const PALETTES = [
  { id: "mint",   label: "Mint Pro",        primary: "#00E5A0", accent: "#00B8D4", preview: ["#00E5A0", "#00B8D4", "#0A1628"] },
  { id: "blue",   label: "Azul Confianza",  primary: "#2563EB", accent: "#0EA5E9", preview: ["#2563EB", "#0EA5E9", "#0A1628"] },
  { id: "coral",  label: "Coral Moderno",   primary: "#F97316", accent: "#FBBF24", preview: ["#F97316", "#FBBF24", "#1A0A05"] },
  { id: "violet", label: "Violeta Premium", primary: "#7C3AED", accent: "#A78BFA", preview: ["#7C3AED", "#A78BFA", "#100A1A"] },
  { id: "red",    label: "Rojo Impacto",    primary: "#EF4444", accent: "#F97316", preview: ["#EF4444", "#F97316", "#180A0A"] },
  { id: "gold",   label: "Dorado Elegante", primary: "#D97706", accent: "#F59E0B", preview: ["#D97706", "#F59E0B", "#120D02"] },
  { id: "pink",   label: "Rosa Creativo",   primary: "#EC4899", accent: "#A855F7", preview: ["#EC4899", "#A855F7", "#180A14"] },
  { id: "mono",   label: "Negro Minimal",   primary: "#F1F5F9", accent: "#94A3B8", preview: ["#F1F5F9", "#64748B", "#0A0A0A"] },
];

const TYPOGRAPHY_OPTS = [
  { id: "bold",     label: "Impactante",  desc: "Bold, versátil, agencias",         preview: { heading: "Montserrat", body: "Open Sans" } },
  { id: "minimal",  label: "Minimal",     desc: "Tech, startups, clean",            preview: { heading: "Space Grotesk", body: "DM Sans" } },
  { id: "friendly", label: "Amigable",    desc: "B2C, salud, cercanía",             preview: { heading: "Poppins", body: "Nunito" } },
  { id: "luxury",   label: "Premium",     desc: "Lujo, clínicas, high-end",         preview: { heading: "Cormorant Garamond", body: "Lato" } },
  { id: "custom",   label: "Personalizada", desc: "Elige tu propia tipografía",     preview: { heading: "—", body: "—" } },
];

// ─── Google Fonts for custom typography picker ────────────────
const GOOGLE_FONTS = [
  { name: "Poppins",             cat: "Sans" },
  { name: "Inter",               cat: "Sans" },
  { name: "Montserrat",          cat: "Sans" },
  { name: "Open Sans",           cat: "Sans" },
  { name: "Lato",                cat: "Sans" },
  { name: "Raleway",             cat: "Sans" },
  { name: "Nunito",              cat: "Sans" },
  { name: "DM Sans",             cat: "Sans" },
  { name: "Space Grotesk",       cat: "Sans" },
  { name: "Outfit",              cat: "Sans" },
  { name: "Plus Jakarta Sans",   cat: "Sans" },
  { name: "Manrope",             cat: "Sans" },
  { name: "Work Sans",           cat: "Sans" },
  { name: "Rubik",               cat: "Sans" },
  { name: "Syne",                cat: "Sans" },
  { name: "Josefin Sans",        cat: "Sans" },
  { name: "Playfair Display",    cat: "Serif" },
  { name: "Cormorant Garamond",  cat: "Serif" },
  { name: "Merriweather",        cat: "Serif" },
  { name: "Lora",                cat: "Serif" },
];

const GFONTS_PREVIEW_URL = "https://fonts.googleapis.com/css2?" + GOOGLE_FONTS.map(f =>
  `family=${f.name.replace(/ /g, "+")}:wght@400;700;800`
).join("&") + "&display=swap";

// ─── Step 4: Objective & Strategy ────────────────────────────────
const OBJECTIVES = [
  { id: "leads",    icon: "📞", label: "Captar leads",          desc: "Formulario de contacto / llamadas" },
  { id: "sell",     icon: "🛒", label: "Vender online",         desc: "Producto o servicio online" },
  { id: "bookings", icon: "📅", label: "Conseguir reservas",    desc: "Citas o reservas" },
  { id: "download", icon: "📥", label: "Descargar algo",        desc: "Lead magnet, catálogo, ebook" },
  { id: "branding", icon: "🏢", label: "Presentar la empresa",  desc: "Branding / informativa" },
  { id: "offer",    icon: "📣", label: "Promocionar oferta",    desc: "Oferta o evento especial" },
];

const TONES = [
  { id: "professional", icon: "💼", label: "Profesional" },
  { id: "friendly",     icon: "😊", label: "Cercano" },
  { id: "premium",      icon: "✨", label: "Premium" },
  { id: "direct",       icon: "⚡", label: "Directo y vendedor" },
  { id: "creative",     icon: "🎨", label: "Creativo" },
];

const OFFER_CHIPS = [
  { id: "discount",     label: "Descuento activo" },
  { id: "free_trial",   label: "Prueba gratis" },
  { id: "limited_spots",label: "Plazas limitadas" },
  { id: "launch_price", label: "Precio de lanzamiento" },
  { id: "bonus",        label: "Regalo o bonus" },
];

const CTA_SUGGESTIONS: Record<string, string[]> = {
  leads:    ["Solicitar presupuesto", "Contactar ahora", "Pide información"],
  sell:     ["Comprar ahora", "Añadir al carrito", "Ver precio"],
  bookings: ["Reservar cita", "Agendar ahora", "Pide tu cita"],
  download: ["Descargar gratis", "Obtener guía", "Quiero el ebook"],
  branding: ["Conocer más", "Descubrir", "Ver más"],
  offer:    ["Aprovechar oferta", "Quiero mi descuento", "Ver oferta"],
};

// ─── Progress ────────────────────────────────────────────────────
const STEP_LABELS = ["Tipo", "Negocio", "Análisis", "Estrategia", "Credibilidad", "Secciones", "Estilo", "Resumen"];

function Progress({ step }: { step: number }) {
  const total = STEP_LABELS.length;
  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <span style={{ fontSize: "13px", color: T.gray, fontFamily: T.mono }}>
          Paso {step} de {total}
        </span>
        <span style={{ fontSize: "13px", fontWeight: 700, color: T.accent, fontFamily: T.mono }}>
          {STEP_LABELS[step - 1]}
        </span>
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        {STEP_LABELS.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: "3px", borderRadius: "2px",
            background: i + 1 <= step
              ? `linear-gradient(90deg, ${T.accent}, ${T.accentAlt})`
              : T.border,
            transition: "background 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding: "14px 28px", borderRadius: "12px",
      background: "transparent", border: `1px solid ${T.border}`,
      color: T.gray, fontSize: "15px", cursor: "pointer",
    }}>← Atrás</button>
  );
}

function NextBtn({ onClick, disabled, label = "Siguiente →" }: { onClick: () => void; disabled?: boolean; label?: string }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      padding: "14px 40px", borderRadius: "12px", border: "none",
      background: disabled ? T.border : `linear-gradient(135deg, #9D4EDD, #7B2CBF)`,
      color: disabled ? T.gray : T.white, fontSize: "16px", fontWeight: 800,
      cursor: disabled ? "not-allowed" : "pointer", transition: "transform 0.2s",
    }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
    >{label}</button>
  );
}

// ─── Analysis Result ─────────────────────────────────────────────
type BusinessInfo = {
  businessName?: string; sector?: string; services?: string[];
  phone?: string | null; email?: string | null; address?: string | null;
  city?: string | null; description?: string; usp?: string;
  tone?: string; keywords?: string[]; confidence?: string;
};

function AnalysisResult({ data }: { data: BusinessInfo }) {
  const fields: [string, string | null | undefined, string][] = [
    ["Nombre", data.businessName, "🏷"],
    ["Sector", data.sector, "📂"],
    ["Servicios", data.services?.slice(0, 3).join(", "), "⚙"],
    ["Teléfono", data.phone, "📞"],
    ["Email", data.email, "✉"],
    ["Ciudad", data.city, "📍"],
    ["Descripción", data.description, "📝"],
    ["Propuesta de valor", data.usp, "✦"],
  ];
  return (
    <div style={{
      background: T.card, border: `1px solid ${T.accent}30`,
      borderRadius: "14px", padding: "20px 24px",
      boxShadow: `0 0 40px ${T.accent}08`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: T.accent }} />
        <span style={{ fontSize: "14px", fontWeight: 700, color: T.accent }}>
          Análisis completado — {data.confidence === "high" ? "Alta" : data.confidence === "medium" ? "Media" : "Baja"} confianza
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        {fields.map(([label, value, icon]) => (
          <div key={label} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <span style={{ flexShrink: 0, fontSize: "13px" }}>{value ? icon : "✗"}</span>
            <div>
              <div style={{ fontSize: "11px", color: T.gray, textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: value ? T.text : T.gray + "80" }}>
                {value || "No encontrado"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Input style helper ───────────────────────────────────────────
function inputStyle(filled: boolean): React.CSSProperties {
  return {
    width: "100%", padding: "13px 16px", borderRadius: "10px",
    background: T.card, border: `1.5px solid ${filled ? T.accent + "50" : T.border}`,
    color: T.text, fontSize: "15px", fontFamily: T.font, outline: "none",
    transition: "border-color 0.2s",
  };
}

// ────────────────────────────────────────────────────────────────
export default function SurveyPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [generatePhase, setGeneratePhase] = useState("");
  const [error, setError] = useState("");
  const [retryable, setRetryable] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const elapsedRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Elapsed timer — cleanup on unmount
  useEffect(() => {
    return () => { if (elapsedRef.current) clearInterval(elapsedRef.current); };
  }, []);

  function startElapsed() {
    setElapsed(0);
    if (elapsedRef.current) clearInterval(elapsedRef.current);
    elapsedRef.current = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
  }

  function stopElapsed() {
    if (elapsedRef.current) { clearInterval(elapsedRef.current); elapsedRef.current = null; }
    setElapsed(0);
  }

  // ── Step 1 ──────────────────────────────────────────────────────
  const [pageType, setPageType] = useState("");
  const [sections, setSections] = useState<Record<string, boolean>>({});

  // ── Step 2: Business + Web ──────────────────────────────────────
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [domain, setDomain] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzeError, setAnalyzeError] = useState("");
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);

  // Step 2: Competitors
  const [competitors, setCompetitors] = useState(["", "", ""]);
  const [analyzingCompetitors, setAnalyzingCompetitors] = useState(false);
  const [competitorAnalyses, setCompetitorAnalyses] = useState<(BusinessInfo | null)[]>([null, null, null]);
  const [competitorsAnalyzed, setCompetitorsAnalyzed] = useState(false);

  // ── Step 4: Objective & Strategy ───────────────────────────────
  const [objective, setObjective] = useState("");
  const [tone, setTone] = useState("professional");
  const [hasOffer, setHasOffer] = useState(false);
  const [offerTypes, setOfferTypes] = useState<string[]>([]);
  const [offerDetail, setOfferDetail] = useState("");
  const [ctaText, setCtaText] = useState("");

  // ── Step 5: Trust Signals ───────────────────────────────────────
  const [yearsExperience, setYearsExperience] = useState("");
  const [clientsCount, setClientsCount] = useState("");
  const [rating, setRating] = useState("");
  const [certifications, setCertifications] = useState("");
  const [generateFakeStats, setGenerateFakeStats] = useState(false);

  // ── Step 7: Visual Style ────────────────────────────────────────
  const [palette, setPalette] = useState("mint");
  const [customPrimary, setCustomPrimary] = useState("#6366F1");
  const [customAccent, setCustomAccent] = useState("#F43F5E");
  const [typography, setTypography] = useState("bold");
  const [customHeadingFont, setCustomHeadingFont] = useState("Montserrat");
  const [customBodyFont, setCustomBodyFont] = useState("Open Sans");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<"es" | "en">("es");

  // ── Derived ─────────────────────────────────────────────────────
  const selectedPalette = palette === "custom"
    ? { id: "custom", label: "Personalizado", primary: customPrimary, accent: customAccent, preview: [customPrimary, customAccent, "#0A0E17"] }
    : PALETTES.find((p) => p.id === palette)!;
  const activeSections = Object.entries(sections).filter(([, v]) => v).map(([k]) => k);
  const filledCompetitors = competitors.filter((c) => c.trim());

  // ── Handlers ─────────────────────────────────────────────────────
  function selectPageType(id: string) {
    setPageType(id);
    const rec = RECOMMENDED[id] || ["hero", "services", "testimonials", "contact_form"];
    const initial: Record<string, boolean> = {};
    ALL_SECTIONS.forEach((s) => { initial[s.id] = rec.includes(s.id); });
    setSections(initial);
  }

  function toggleSection(id: string) {
    if (id === "hero") return;
    setSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function toggleOfferType(id: string) {
    setOfferTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }

  async function runAnalysis(andAdvance = false) {
    if (!domain.trim()) {
      if (andAdvance) setStep(3);
      return;
    }
    setAnalyzing(true);
    setAnalyzeError("");
    setBusinessInfo(null);
    try {
      const res = await fetch("/api/analyze-domain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: domain.trim() }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        setBusinessInfo(data.data);
      } else {
        setAnalyzeError(data.error || "No se pudo analizar el dominio");
      }
    } catch {
      setAnalyzeError("Error de conexión al analizar el dominio");
    } finally {
      setAnalyzing(false);
      if (andAdvance) setStep(3);
    }
  }

  async function analyzeCompetitorUrls() {
    if (!filledCompetitors.length) return;
    setAnalyzingCompetitors(true);
    try {
      const results = await Promise.allSettled(
        competitors.map(async (url) => {
          if (!url.trim()) return null;
          try {
            const res = await fetch("/api/analyze-domain", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ domain: url.trim() }),
            });
            const data = await res.json();
            return data.success && data.data ? (data.data as BusinessInfo) : null;
          } catch {
            return null;
          }
        })
      );
      setCompetitorAnalyses(results.map((r) => (r.status === "fulfilled" ? r.value : null)));
      setCompetitorsAnalyzed(true);
    } finally {
      setAnalyzingCompetitors(false);
    }
  }

  async function handleStep2Next() {
    if (domain.trim() && !businessInfo) {
      await runAnalysis(true);
    } else {
      setStep(3);
    }
  }

  async function generate() {
    const MAX_RETRIES = 2;
    setLoading(true);
    setError("");
    startElapsed();
    setRetryable(false);
    setLimitReached(false);
    setGeneratePhase("Iniciando...");

    const surveyData = {
      pageType, sections,
      keyword, location, domain,
      businessInfo,
      competitors: filledCompetitors,
      competitorAnalyses: competitorAnalyses.filter(Boolean),
      objective, tone,
      hasOffer, offerTypes, offerDetail, ctaText,
      yearsExperience, clientsCount, rating, certifications,
      generateFakeStats,
      primaryColor: selectedPalette.primary,
      secondaryColor: selectedPalette.accent,
      typography, theme, language,
      ...(typography === "custom" ? { customFonts: { heading: customHeadingFont, body: customBodyFont } } : {}),
    };

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        if (attempt > 0) {
          setGeneratePhase(`Reintentando (${attempt}/${MAX_RETRIES})...`);
          await new Promise(r => setTimeout(r, 1500 * attempt)); // backoff: 1.5s, 3s
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 150_000); // 2.5 min timeout

        let res: Response;
        try {
          res = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ surveyData, platform: "html" }),
            signal: controller.signal,
          });
        } catch (fetchErr) {
          clearTimeout(timeout);
          const isAbort = fetchErr instanceof DOMException && fetchErr.name === "AbortError";
          const msg = isAbort ? "La generación tardó demasiado" : "Error de conexión";
          if (attempt < MAX_RETRIES) continue; // retry silently
          throw new Error(msg);
        }

        // Non-SSE error (auth/limits return JSON) — don't retry auth/limit errors
        if (!res.ok) {
          clearTimeout(timeout);
          const d = await res.json().catch(() => ({})) as { error?: string; overloaded?: boolean };
          if (res.status === 403) { setLimitReached(true); throw new Error(d.error || `Error ${res.status}`); }
          if (res.status === 401) throw new Error(d.error || "No autorizado");
          if (d.overloaded || res.status === 529) {
            if (attempt < MAX_RETRIES) continue; // retry overloaded
            setRetryable(true);
          }
          if (attempt < MAX_RETRIES && res.status >= 500) continue; // retry server errors
          throw new Error(d.error || `Error ${res.status}`);
        }
        if (!res.body) { clearTimeout(timeout); throw new Error("No se recibió respuesta del servidor"); }

        // Consume SSE stream
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buf = "";
        let landingId = "";
        const htmlChunks: string[] = [];
        let streamError: string | null = null;

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buf += decoder.decode(value, { stream: true });
            const parts = buf.split("\n\n");
            buf = parts.pop() ?? "";
            for (const part of parts) {
              if (!part.startsWith("data: ")) continue; // skip keepalive comments
              try {
                const ev = JSON.parse(part.slice(6)) as { type: string; msg?: string; html?: string; id?: string; overloaded?: boolean };
                if (ev.type === "progress" && ev.msg) setGeneratePhase(ev.msg);
                else if (ev.type === "chunk" && ev.html) htmlChunks.push(ev.html);
                else if (ev.type === "done") landingId = ev.id || "preview";
                else if (ev.type === "error") {
                  if (ev.overloaded) setRetryable(true);
                  streamError = ev.msg || "Error al generar";
                }
              } catch (parseErr) {
                if (parseErr instanceof Error && parseErr.message !== "Unexpected end of JSON input") throw parseErr;
              }
            }
          }
        } finally {
          reader.releaseLock();
          clearTimeout(timeout);
        }

        // If the stream sent an error event, check if retryable
        if (streamError) {
          const isRetryable = streamError.includes("saturado") || streamError.includes("overloaded");
          if (isRetryable && attempt < MAX_RETRIES) continue;
          throw new Error(streamError);
        }

        const fullHtml = htmlChunks.join("");
        if (!fullHtml || !fullHtml.toLowerCase().includes("<html")) {
          if (attempt < MAX_RETRIES) continue; // retry empty/invalid responses
          throw new Error("No se recibió HTML válido del servidor");
        }

        stopElapsed();
        sessionStorage.setItem("previewHtml", fullHtml);
        sessionStorage.setItem("surveyData", JSON.stringify(surveyData));
        router.push(`/preview/${landingId || "preview"}`);
        return; // success — exit retry loop
      } catch (err) {
        if (attempt >= MAX_RETRIES) {
          stopElapsed();
          setError(err instanceof Error ? err.message : "Error desconocido");
          setLoading(false);
          return;
        }
        // else: continue to next attempt
      }
    }
  }

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div style={{
      minHeight: "100vh", background: T.bg, color: T.text,
      fontFamily: T.font, display: "flex", flexDirection: "column", alignItems: "center",
      padding: "0 0 80px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* ── APP HEADER ── */}
      <header style={{
        width: "100%", borderBottom: `1px solid ${T.border}`,
        background: `${T.bg}F2`, backdropFilter: "blur(16px)",
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: "56px",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{
            width: "26px", height: "26px", borderRadius: "7px",
            background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "13px", color: "#fff", fontFamily: T.mono,
          }}>L</div>
          <span style={{ fontWeight: 700, fontSize: "15px", color: T.text, fontFamily: T.mono }}>LandForge</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a href="/dashboard" style={{
            fontSize: "13px", fontWeight: 600, color: T.gray,
            textDecoration: "none", padding: "6px 12px", borderRadius: "8px",
            border: `1px solid ${T.border}`, background: T.card,
          }}>Mis landings</a>
          <form action="/api/auth/signout" method="POST">
            <button type="submit" style={{
              fontSize: "13px", fontWeight: 600, color: T.gray,
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 12px", borderRadius: "8px",
            }}>Cerrar sesión</button>
          </form>
        </div>
      </header>

      <div style={{ width: "100%", maxWidth: "820px", padding: "40px 24px 0" }}>

        <Progress step={step} />

        {/* ══════════════════════════════════════════════════════════
            STEP 1: Tipo de página
        ══════════════════════════════════════════════════════════ */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px" }}>
              ¿Qué tipo de página necesitas?
            </h1>
            <p style={{ color: T.gray, fontSize: "15px", marginBottom: "32px" }}>
              Elige la categoría más cercana al negocio.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
              {PAGE_TYPES.map((pt) => (
                <button key={pt.id} onClick={() => selectPageType(pt.id)} style={{
                  background: pageType === pt.id ? T.bgAlt : T.card,
                  border: `1.5px solid ${pageType === pt.id ? T.accent : T.border}`,
                  borderRadius: "14px", padding: "20px", cursor: "pointer", textAlign: "left",
                  transition: "border-color 0.2s, transform 0.2s",
                  transform: pageType === pt.id ? "translateY(-2px)" : "translateY(0)",
                }}
                  onMouseEnter={(e) => { if (pageType !== pt.id) e.currentTarget.style.borderColor = T.gray; }}
                  onMouseLeave={(e) => { if (pageType !== pt.id) e.currentTarget.style.borderColor = T.border; }}
                >
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>{pt.icon}</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: T.text, marginBottom: "6px" }}>{pt.label}</div>
                  <div style={{ fontSize: "12px", color: T.gray, lineHeight: 1.5 }}>{pt.examples}</div>
                  {pageType === pt.id && (
                    <div style={{
                      marginTop: "12px", display: "inline-block",
                      background: T.accent + "20", color: T.accent,
                      fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px",
                    }}>Seleccionado ✓</div>
                  )}
                </button>
              ))}
            </div>
            <div style={{ marginTop: "40px" }}>
              <NextBtn onClick={() => setStep(2)} disabled={!pageType} />
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            STEP 2: Negocio + Web + Competidores
        ══════════════════════════════════════════════════════════ */}
        {step === 2 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Cuéntanos sobre el negocio
            </h1>
            <p style={{ color: T.gray, fontSize: "15px", marginBottom: "32px" }}>
              La IA analizará el negocio y buscará qué quiere Google para posicionar esta página.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
              {/* Keyword */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: 700, color: T.text, display: "block", marginBottom: "8px" }}>
                  ¿Para qué servicio o producto es la landing? *
                </label>
                <input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Ej: implantes dentales, reformas de cocina, clases de yoga..."
                  style={inputStyle(!!keyword)}
                  onFocus={(e) => (e.target.style.borderColor = T.accent + "80")}
                  onBlur={(e) => (e.target.style.borderColor = keyword ? T.accent + "50" : T.border)}
                />
                <p style={{ fontSize: "12px", color: T.gray, marginTop: "6px" }}>
                  Usaremos esto para buscar qué contenido posiciona mejor en Google para este servicio.
                </p>
              </div>

              {/* Location */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: 700, color: T.text, display: "block", marginBottom: "8px" }}>
                  Ciudad o zona geográfica <span style={{ color: T.gray, fontWeight: 400 }}>(opcional)</span>
                </label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej: Madrid, Barcelona, España..."
                  style={inputStyle(!!location)}
                  onFocus={(e) => (e.target.style.borderColor = T.accent + "80")}
                  onBlur={(e) => (e.target.style.borderColor = location ? T.accent + "50" : T.border)}
                />
              </div>

              {/* Domain */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: 700, color: T.text, display: "block", marginBottom: "8px" }}>
                  Web actual del cliente <span style={{ color: T.gray, fontWeight: 400 }}>(opcional — la IA extraerá su información)</span>
                </label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    value={domain}
                    onChange={(e) => { setDomain(e.target.value); setBusinessInfo(null); setAnalyzeError(""); }}
                    placeholder="https://tuclinica.es"
                    style={{ ...inputStyle(!!domain), flex: 1 }}
                    onFocus={(e) => (e.target.style.borderColor = T.accent + "80")}
                    onBlur={(e) => (e.target.style.borderColor = domain ? T.accent + "50" : T.border)}
                  />
                  {domain.trim() && !businessInfo && (
                    <button
                      onClick={() => runAnalysis(false)}
                      disabled={analyzing}
                      style={{
                        padding: "13px 20px", borderRadius: "10px", border: "none",
                        background: analyzing ? T.border : T.accent + "20",
                        color: analyzing ? T.gray : T.accent,
                        fontSize: "14px", fontWeight: 700, cursor: analyzing ? "default" : "pointer",
                        flexShrink: 0, transition: "background 0.2s",
                        display: "flex", alignItems: "center", gap: "8px",
                        outline: `1px solid ${T.accent}30`,
                      } as React.CSSProperties}
                    >
                      {analyzing
                        ? <><span style={{ display: "inline-block", animation: "spin 0.9s linear infinite" }}>⟳</span> Analizando...</>
                        : "🔍 Analizar"}
                    </button>
                  )}
                  {businessInfo && (
                    <div style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      padding: "0 16px", borderRadius: "10px",
                      background: T.accent + "15", border: `1px solid ${T.accent}40`,
                      fontSize: "13px", fontWeight: 700, color: T.accent, flexShrink: 0,
                    }}>✓ Analizado</div>
                  )}
                </div>
                {analyzeError && !analyzing && (
                  <p style={{ fontSize: "12px", color: "#EF4444", marginTop: "6px" }}>⚠ {analyzeError}</p>
                )}
                <p style={{ fontSize: "12px", color: T.gray, marginTop: "6px" }}>
                  La IA extraerá nombre, servicios, teléfono, dirección y propuesta de valor automáticamente.
                </p>
              </div>

              {/* Competitors */}
              <div>
                <label style={{ fontSize: "14px", fontWeight: 700, color: T.text, display: "block", marginBottom: "4px" }}>
                  ¿Quiénes son tus principales competidores? <span style={{ color: T.gray, fontWeight: 400 }}>(opcional)</span>
                </label>
                <p style={{ fontSize: "12px", color: T.gray, marginBottom: "12px" }}>
                  Analizaremos su web para crear algo superior.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {competitors.map((url, i) => (
                    <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <input
                        value={url}
                        onChange={(e) => {
                          const next = [...competitors];
                          next[i] = e.target.value;
                          setCompetitors(next);
                          setCompetitorsAnalyzed(false);
                          const next2 = [...competitorAnalyses];
                          next2[i] = null;
                          setCompetitorAnalyses(next2);
                        }}
                        placeholder={`https://competidor${i + 1}.com`}
                        style={{ ...inputStyle(!!url), flex: 1 }}
                        onFocus={(e) => (e.target.style.borderColor = T.accent + "80")}
                        onBlur={(e) => (e.target.style.borderColor = url ? T.accent + "50" : T.border)}
                      />
                      {competitorAnalyses[i] && (
                        <span style={{ fontSize: "12px", color: T.accent, flexShrink: 0, fontWeight: 700 }}>✓</span>
                      )}
                    </div>
                  ))}
                </div>
                {filledCompetitors.length > 0 && (
                  <button
                    onClick={analyzeCompetitorUrls}
                    disabled={analyzingCompetitors}
                    style={{
                      marginTop: "10px", padding: "10px 18px", borderRadius: "10px",
                      background: competitorsAnalyzed ? T.accent + "15" : T.card,
                      border: `1px solid ${competitorsAnalyzed ? T.accent + "40" : T.border}`,
                      color: competitorsAnalyzed ? T.accent : T.gray,
                      fontSize: "13px", fontWeight: 700, cursor: analyzingCompetitors ? "default" : "pointer",
                      display: "flex", alignItems: "center", gap: "8px",
                    }}
                  >
                    {analyzingCompetitors
                      ? <><span style={{ display: "inline-block", animation: "spin 0.9s linear infinite" }}>⟳</span> Analizando competidores...</>
                      : competitorsAnalyzed
                        ? `✓ ${filledCompetitors.length} competidor(es) analizado(s)`
                        : `🔍 Analizar ${filledCompetitors.length} competidor(es)`}
                  </button>
                )}
              </div>
            </div>

            {/* Analysis loading */}
            {analyzing && (
              <div style={{
                background: T.card, border: `1px solid ${T.border}`,
                borderRadius: "14px", padding: "24px",
                display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px",
              }}>
                <div style={{ fontSize: "24px", animation: "spin 2s linear infinite" }}>🔍</div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: T.text, marginBottom: "4px" }}>
                    Analizando {domain}...
                  </div>
                  <div style={{ fontSize: "13px", color: T.gray }}>
                    Extrayendo información del negocio · ~15 segundos
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
              <BackBtn onClick={() => setStep(1)} />
              <NextBtn
                onClick={handleStep2Next}
                disabled={!keyword.trim() || analyzing}
                label={domain.trim() && !businessInfo && !analyzeError ? "Analizar y continuar →" : "Siguiente →"}
              />
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            STEP 3: Análisis completado
        ══════════════════════════════════════════════════════════ */}
        {step === 3 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Análisis completado
            </h1>
            <p style={{ color: T.gray, fontSize: "15px", marginBottom: "28px" }}>
              Esto es lo que la IA encontró sobre el negocio.
            </p>

            {businessInfo ? (
              <>
                <AnalysisResult data={businessInfo} />
                <p style={{ fontSize: "13px", color: T.gray, marginTop: "12px" }}>
                  Esta información se usará para personalizar el contenido de tu landing. ✓
                </p>
              </>
            ) : (
              <div style={{
                background: T.card, border: `1px solid ${T.border}`,
                borderRadius: "14px", padding: "32px", textAlign: "center",
              }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>📋</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: T.text, marginBottom: "8px" }}>
                  Sin análisis previo
                </div>
                <div style={{ fontSize: "14px", color: T.gray }}>
                  {analyzeError
                    ? `No se pudo analizar el dominio. La IA generará contenido basado en el tipo de negocio y keyword.`
                    : "No se proporcionó URL del negocio. La IA generará contenido basado en el tipo de negocio y keyword."}
                </div>
              </div>
            )}

            {/* Competitor results */}
            {competitorsAnalyzed && competitorAnalyses.some(Boolean) && (
              <div style={{ marginTop: "20px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: T.gray, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Competidores analizados
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {competitorAnalyses.map((ci, i) =>
                    ci ? (
                      <div key={i} style={{
                        background: T.card, border: `1px solid ${T.border}`,
                        borderRadius: "10px", padding: "12px 16px",
                        display: "flex", gap: "12px", alignItems: "center",
                      }}>
                        <span style={{ fontSize: "13px", color: T.accent }}>✓</span>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: T.text }}>
                            {ci.businessName || competitors[i] || `Competidor ${i + 1}`}
                          </div>
                          <div style={{ fontSize: "12px", color: T.gray }}>
                            {ci.services?.slice(0, 2).join(", ") || "Datos extraídos"}
                          </div>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
              <BackBtn onClick={() => setStep(2)} />
              <NextBtn onClick={() => setStep(4)} />
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            STEP 4: Objetivo y estrategia (NUEVA)
        ══════════════════════════════════════════════════════════ */}
        {step === 4 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Objetivo y estrategia
            </h1>
            <p style={{ color: T.gray, fontSize: "15px", marginBottom: "36px" }}>
              Esta información es clave — es lo que el scraping nunca puede detectar.
            </p>

            {/* 1. Objetivo */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>
                ¿Cuál es el objetivo principal de esta landing?
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
                {OBJECTIVES.map((obj) => (
                  <button key={obj.id} onClick={() => setObjective(obj.id)} style={{
                    background: objective === obj.id ? T.bgAlt : T.card,
                    border: `1.5px solid ${objective === obj.id ? T.accent : T.border}`,
                    borderRadius: "12px", padding: "16px 18px", cursor: "pointer", textAlign: "left",
                    transition: "border-color 0.2s, transform 0.2s",
                    transform: objective === obj.id ? "translateY(-2px)" : "translateY(0)",
                  }}>
                    <div style={{ fontSize: "22px", marginBottom: "8px" }}>{obj.icon}</div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: objective === obj.id ? T.text : T.gray }}>
                      {obj.label}
                    </div>
                    <div style={{ fontSize: "12px", color: T.gray, marginTop: "3px" }}>{obj.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Tono */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>
                ¿Qué tono quieres para la página?
              </h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {TONES.map((t) => (
                  <button key={t.id} onClick={() => setTone(t.id)} style={{
                    padding: "10px 18px", borderRadius: "24px",
                    background: tone === t.id ? T.bgAlt : T.card,
                    border: `1.5px solid ${tone === t.id ? T.accent : T.border}`,
                    color: tone === t.id ? T.text : T.gray,
                    fontSize: "14px", fontWeight: 600, cursor: "pointer",
                    transition: "all 0.2s", display: "flex", alignItems: "center", gap: "6px",
                  }}>
                    <span>{t.icon}</span> {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Oferta */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>
                ¿Hay alguna oferta o urgencia activa?
              </h3>
              <div style={{ display: "flex", gap: "10px", marginBottom: hasOffer ? "20px" : 0 }}>
                {(["Sí", "No"] as const).map((opt) => (
                  <button key={opt} onClick={() => setHasOffer(opt === "Sí")} style={{
                    padding: "10px 28px", borderRadius: "10px",
                    background: (hasOffer ? "Sí" : "No") === opt ? (opt === "Sí" ? T.accent + "20" : T.card) : T.card,
                    border: `1.5px solid ${(hasOffer ? "Sí" : "No") === opt ? (opt === "Sí" ? T.accent : T.gray) : T.border}`,
                    color: (hasOffer ? "Sí" : "No") === opt ? T.text : T.gray,
                    fontSize: "14px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                  }}>{opt}</button>
                ))}
              </div>

              {hasOffer && (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {OFFER_CHIPS.map((chip) => (
                      <button key={chip.id} onClick={() => toggleOfferType(chip.id)} style={{
                        padding: "8px 16px", borderRadius: "20px",
                        background: offerTypes.includes(chip.id) ? T.accent + "20" : T.card,
                        border: `1.5px solid ${offerTypes.includes(chip.id) ? T.accent : T.border}`,
                        color: offerTypes.includes(chip.id) ? T.accent : T.gray,
                        fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                      }}>{chip.label}</button>
                    ))}
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: T.gray, display: "block", marginBottom: "8px" }}>
                      Detalla la oferta
                    </label>
                    <input
                      value={offerDetail}
                      onChange={(e) => setOfferDetail(e.target.value)}
                      placeholder="Ej: 20% descuento este mes, Solo quedan 5 plazas..."
                      style={inputStyle(!!offerDetail)}
                      onFocus={(e) => (e.target.style.borderColor = T.accent + "80")}
                      onBlur={(e) => (e.target.style.borderColor = offerDetail ? T.accent + "50" : T.border)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 4. CTA text */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
                ¿Texto del botón principal?
              </h3>
              <p style={{ fontSize: "13px", color: T.gray, marginBottom: "14px" }}>
                Escribe el texto o elige una sugerencia.
              </p>
              {objective && CTA_SUGGESTIONS[objective] && (
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                  {CTA_SUGGESTIONS[objective].map((s) => (
                    <button key={s} onClick={() => setCtaText(s)} style={{
                      padding: "7px 14px", borderRadius: "20px",
                      background: ctaText === s ? T.accent + "20" : T.card,
                      border: `1px solid ${ctaText === s ? T.accent : T.border}`,
                      color: ctaText === s ? T.accent : T.gray,
                      fontSize: "13px", cursor: "pointer", transition: "all 0.2s",
                    }}>{s}</button>
                  ))}
                </div>
              )}
              <input
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                placeholder={objective ? (CTA_SUGGESTIONS[objective]?.[0] || "Ej: Contactar ahora") : "Ej: Solicitar presupuesto, Comprar ahora..."}
                style={inputStyle(!!ctaText)}
                onFocus={(e) => (e.target.style.borderColor = T.accent + "80")}
                onBlur={(e) => (e.target.style.borderColor = ctaText ? T.accent + "50" : T.border)}
              />
              {!ctaText && (
                <p style={{ fontSize: "12px", color: T.gray, marginTop: "6px" }}>
                  Si lo dejas en blanco, la IA elegirá el mejor texto automáticamente.
                </p>
              )}
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <BackBtn onClick={() => setStep(3)} />
              <NextBtn onClick={() => setStep(5)} disabled={!objective} />
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            STEP 5: Credibilidad (NUEVA)
        ══════════════════════════════════════════════════════════ */}
        {step === 5 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Datos que generan confianza
            </h1>
            <p style={{ color: T.gray, fontSize: "15px", marginBottom: "8px" }}>
              Cuantos más, mejor convierte la página. Todo es opcional.
            </p>
            <p style={{ fontSize: "13px", color: T.accent + "99", marginBottom: "32px" }}>
              Estos datos aparecerán en la sección de estadísticas y en el hero.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
              {[
                { label: "Años de experiencia", value: yearsExperience, setter: setYearsExperience, placeholder: "Ej: 15" },
                { label: "Nº de clientes atendidos", value: clientsCount, setter: setClientsCount, placeholder: "Ej: +500" },
                { label: "Valoración media", value: rating, setter: setRating, placeholder: "Ej: 4.8/5" },
                { label: "Certificaciones o premios", value: certifications, setter: setCertifications, placeholder: "Ej: ISO 9001, Google Partner" },
              ].map(({ label, value, setter, placeholder }) => (
                <div key={label}>
                  <label style={{ fontSize: "13px", fontWeight: 700, color: T.gray, display: "block", marginBottom: "8px" }}>
                    {label}
                  </label>
                  <input
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    placeholder={placeholder}
                    style={inputStyle(!!value)}
                    onFocus={(e) => (e.target.style.borderColor = T.accent + "80")}
                    onBlur={(e) => (e.target.style.borderColor = value ? T.accent + "50" : T.border)}
                  />
                </div>
              ))}
            </div>

            {/* Toggle fake stats */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: T.card, border: `1px solid ${T.border}`,
              borderRadius: "12px", padding: "16px 20px",
            }}>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: T.text, marginBottom: "3px" }}>
                  ¿Que la IA genere estadísticas de ejemplo?
                </div>
                <div style={{ fontSize: "12px", color: T.gray }}>
                  Si no tienes datos reales, la IA creará cifras plausibles del sector
                </div>
              </div>
              <button
                onClick={() => setGenerateFakeStats((v) => !v)}
                style={{
                  width: "48px", height: "26px", borderRadius: "13px", border: "none",
                  background: generateFakeStats ? T.accent : T.border,
                  cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0,
                }}
              >
                <div style={{
                  width: "20px", height: "20px", borderRadius: "50%", background: T.white,
                  position: "absolute", top: "3px",
                  left: generateFakeStats ? "25px" : "3px",
                  transition: "left 0.2s",
                }} />
              </button>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
              <BackBtn onClick={() => setStep(4)} />
              <NextBtn onClick={() => setStep(6)} />
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            STEP 6: Secciones
        ══════════════════════════════════════════════════════════ */}
        {step === 6 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Elige las secciones
            </h1>
            <p style={{ color: T.gray, fontSize: "15px", marginBottom: "6px" }}>
              Las recomendadas ya están marcadas. Ajusta según necesites.
            </p>
            <p style={{ fontSize: "13px", color: T.accent + "99", marginBottom: "28px" }}>
              Hero siempre incluido · {activeSections.length} secciones seleccionadas
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
              {ALL_SECTIONS.map((s) => {
                const on = s.id === "hero" || !!sections[s.id];
                const locked = s.id === "hero";
                return (
                  <button key={s.id} onClick={() => toggleSection(s.id)} style={{
                    background: on ? T.bgAlt : T.card,
                    border: `1.5px solid ${on ? T.accent : T.border}`,
                    borderRadius: "12px", padding: "16px", cursor: locked ? "default" : "pointer",
                    textAlign: "left", display: "flex", gap: "12px", alignItems: "flex-start",
                    transition: "border-color 0.2s", opacity: locked ? 0.8 : 1,
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
                      background: on ? T.accent + "20" : T.border + "66",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", color: on ? T.accent : T.gray,
                      fontFamily: T.mono, fontWeight: 700,
                    }}>{s.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "14px", fontWeight: 700, color: on ? T.text : T.gray }}>{s.label}</span>
                        <div style={{
                          width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0,
                          background: on ? T.accent : "transparent",
                          border: `1.5px solid ${on ? T.accent : T.border}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "10px", color: T.white,
                        }}>{on ? "✓" : ""}</div>
                      </div>
                      <div style={{ fontSize: "12px", color: T.gray, marginTop: "3px" }}>{s.desc}</div>
                      {locked && <div style={{ fontSize: "11px", color: T.gray, marginTop: "3px" }}>Obligatoria</div>}
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
              <BackBtn onClick={() => setStep(5)} />
              <NextBtn onClick={() => setStep(7)} disabled={activeSections.length < 2} />
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            STEP 7: Estilo visual
        ══════════════════════════════════════════════════════════ */}
        {step === 7 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Estilo visual
            </h1>
            <p style={{ color: T.gray, fontSize: "15px", marginBottom: "36px" }}>
              Define la paleta y el carácter tipográfico de la plantilla.
            </p>

            {/* Paleta */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>Paleta de color</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px" }}>
                {PALETTES.map((p) => (
                  <button key={p.id} onClick={() => setPalette(p.id)} style={{
                    background: palette === p.id ? T.bgAlt : T.card,
                    border: `1.5px solid ${palette === p.id ? T.accent : T.border}`,
                    borderRadius: "12px", padding: "14px 16px", cursor: "pointer",
                    textAlign: "left", display: "flex", alignItems: "center", gap: "12px",
                    transition: "border-color 0.2s",
                  }}>
                    <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
                      {p.preview.map((c, i) => (
                        <div key={i} style={{ width: "18px", height: "18px", borderRadius: "4px", background: c }} />
                      ))}
                    </div>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: palette === p.id ? T.text : T.gray }}>
                      {p.label}
                    </span>
                    {palette === p.id && (
                      <div style={{
                        marginLeft: "auto", width: "16px", height: "16px", borderRadius: "50%",
                        background: T.accent, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "9px", color: T.white, flexShrink: 0,
                      }}>✓</div>
                    )}
                  </button>
                ))}
                {/* Custom color option */}
                <button onClick={() => setPalette("custom")} style={{
                  background: palette === "custom" ? T.bgAlt : T.card,
                  border: `1.5px solid ${palette === "custom" ? T.accent : T.border}`,
                  borderRadius: "12px", padding: "14px 16px", cursor: "pointer",
                  textAlign: "left", display: "flex", alignItems: "center", gap: "12px",
                  transition: "border-color 0.2s",
                }}>
                  <div style={{
                    width: "18px", height: "18px", borderRadius: "4px", flexShrink: 0,
                    background: `conic-gradient(#EF4444, #F59E0B, #10B981, #3B82F6, #8B5CF6, #EF4444)`,
                  }} />
                  <span style={{ fontSize: "13px", fontWeight: 600, color: palette === "custom" ? T.text : T.gray }}>
                    Personalizado
                  </span>
                  {palette === "custom" && (
                    <div style={{
                      marginLeft: "auto", width: "16px", height: "16px", borderRadius: "50%",
                      background: T.accent, display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "9px", color: T.white, flexShrink: 0,
                    }}>✓</div>
                  )}
                </button>
              </div>

              {/* Custom color picker panel */}
              {palette === "custom" && (
                <div style={{
                  marginTop: "16px", padding: "20px", borderRadius: "12px",
                  background: T.card, border: `1px solid ${T.accent}30`,
                }}>
                  <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                    {/* Primary */}
                    <div style={{ flex: 1, minWidth: "160px" }}>
                      <label style={{ fontSize: "13px", fontWeight: 700, color: T.gray, display: "block", marginBottom: "10px" }}>
                        Color principal
                      </label>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <input
                          type="color"
                          value={customPrimary}
                          onChange={(e) => setCustomPrimary(e.target.value)}
                          style={{
                            width: "44px", height: "44px", border: "none", borderRadius: "10px",
                            cursor: "pointer", padding: 0, background: "transparent",
                          }}
                        />
                        <input
                          value={customPrimary}
                          onChange={(e) => { if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) setCustomPrimary(e.target.value); }}
                          maxLength={7}
                          style={{
                            ...inputStyle(true), width: "110px", fontFamily: T.mono,
                            fontSize: "14px", textTransform: "uppercase",
                          }}
                        />
                      </div>
                    </div>
                    {/* Accent */}
                    <div style={{ flex: 1, minWidth: "160px" }}>
                      <label style={{ fontSize: "13px", fontWeight: 700, color: T.gray, display: "block", marginBottom: "10px" }}>
                        Color secundario
                      </label>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <input
                          type="color"
                          value={customAccent}
                          onChange={(e) => setCustomAccent(e.target.value)}
                          style={{
                            width: "44px", height: "44px", border: "none", borderRadius: "10px",
                            cursor: "pointer", padding: 0, background: "transparent",
                          }}
                        />
                        <input
                          value={customAccent}
                          onChange={(e) => { if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) setCustomAccent(e.target.value); }}
                          maxLength={7}
                          style={{
                            ...inputStyle(true), width: "110px", fontFamily: T.mono,
                            fontSize: "14px", textTransform: "uppercase",
                          }}
                        />
                      </div>
                    </div>
                    {/* Preview */}
                    <div style={{ flex: 1, minWidth: "160px" }}>
                      <label style={{ fontSize: "13px", fontWeight: 700, color: T.gray, display: "block", marginBottom: "10px" }}>
                        Vista previa
                      </label>
                      <div style={{
                        height: "44px", borderRadius: "10px", overflow: "hidden",
                        display: "flex",
                      }}>
                        <div style={{ flex: 1, background: customPrimary }} />
                        <div style={{ flex: 1, background: customAccent }} />
                        <div style={{ flex: 0.6, background: "#0A0E17" }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tipografía */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>Tipografía</h3>
              {/* Load preview fonts for preset options */}
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans:wght@400;600&family=Space+Grotesk:wght@700&family=DM+Sans:wght@400;700&family=Poppins:wght@700;800&family=Nunito:wght@400;600&family=Cormorant+Garamond:wght@700&family=Lato:wght@400;600&display=swap" rel="stylesheet" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
                {TYPOGRAPHY_OPTS.map((t) => (
                  <button key={t.id} onClick={() => setTypography(t.id)} style={{
                    padding: "16px 18px", borderRadius: "12px",
                    background: typography === t.id ? T.bgAlt : T.card,
                    border: `1.5px solid ${typography === t.id ? T.accent : T.border}`,
                    cursor: "pointer", textAlign: "left",
                    transition: "border-color 0.2s, transform 0.2s",
                    transform: typography === t.id ? "translateY(-2px)" : "translateY(0)",
                  }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: typography === t.id ? T.text : T.gray }}>
                      {t.label}
                    </div>
                    <div style={{ fontSize: "12px", color: T.gray, marginTop: "2px" }}>{t.desc}</div>
                    {t.id !== "custom" && (
                      <div style={{ marginTop: "10px", borderTop: `1px solid ${T.border}`, paddingTop: "10px" }}>
                        <div style={{ fontFamily: `'${t.preview.heading}', sans-serif`, fontWeight: 700, fontSize: "18px", color: T.text, lineHeight: 1.2 }}>
                          Aa Titular
                        </div>
                        <div style={{ fontFamily: `'${t.preview.body}', sans-serif`, fontWeight: 400, fontSize: "13px", color: T.gray, marginTop: "4px" }}>
                          {t.preview.heading} + {t.preview.body}
                        </div>
                      </div>
                    )}
                    {t.id === "custom" && (
                      <div style={{ marginTop: "10px", borderTop: `1px solid ${T.border}`, paddingTop: "10px" }}>
                        <div style={{ fontSize: "13px", color: T.accent }}>
                          Elige heading + body
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Custom font picker */}
              {typography === "custom" && (
                <div style={{
                  marginTop: "16px", padding: "20px", borderRadius: "12px",
                  background: T.card, border: `1px solid ${T.accent}30`,
                }}>
                  {/* Load all Google Fonts for preview */}
                  <link href={GFONTS_PREVIEW_URL} rel="stylesheet" />

                  {/* Heading font */}
                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: T.gray, display: "block", marginBottom: "10px" }}>
                      Fuente de titulares
                    </label>
                    <div style={{
                      display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "8px",
                      maxHeight: "200px", overflowY: "auto", padding: "4px",
                    }}>
                      {GOOGLE_FONTS.map((f) => (
                        <button key={f.name} onClick={() => setCustomHeadingFont(f.name)} style={{
                          padding: "10px 12px", borderRadius: "8px",
                          background: customHeadingFont === f.name ? T.bgAlt : "transparent",
                          border: `1.5px solid ${customHeadingFont === f.name ? T.accent : T.border}`,
                          cursor: "pointer", textAlign: "left",
                          transition: "border-color 0.2s",
                        }}>
                          <div style={{
                            fontFamily: `'${f.name}', sans-serif`, fontWeight: 700,
                            fontSize: "16px", color: customHeadingFont === f.name ? T.text : T.gray,
                            lineHeight: 1.3,
                          }}>
                            Aa Bb Cc
                          </div>
                          <div style={{ fontSize: "10px", color: T.gray, marginTop: "2px", fontFamily: T.font }}>
                            {f.name} <span style={{ opacity: 0.6 }}>{f.cat}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Body font */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: T.gray, display: "block", marginBottom: "10px" }}>
                      Fuente de texto
                    </label>
                    <div style={{
                      display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "8px",
                      maxHeight: "200px", overflowY: "auto", padding: "4px",
                    }}>
                      {GOOGLE_FONTS.map((f) => (
                        <button key={f.name} onClick={() => setCustomBodyFont(f.name)} style={{
                          padding: "10px 12px", borderRadius: "8px",
                          background: customBodyFont === f.name ? T.bgAlt : "transparent",
                          border: `1.5px solid ${customBodyFont === f.name ? T.accent : T.border}`,
                          cursor: "pointer", textAlign: "left",
                          transition: "border-color 0.2s",
                        }}>
                          <div style={{
                            fontFamily: `'${f.name}', sans-serif`, fontWeight: 400,
                            fontSize: "14px", color: customBodyFont === f.name ? T.text : T.gray,
                            lineHeight: 1.4,
                          }}>
                            El texto se ve asi
                          </div>
                          <div style={{ fontSize: "10px", color: T.gray, marginTop: "2px", fontFamily: T.font }}>
                            {f.name} <span style={{ opacity: 0.6 }}>{f.cat}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Combined preview */}
                  <div style={{
                    padding: "16px", borderRadius: "10px",
                    background: T.bg, border: `1px solid ${T.border}`,
                  }}>
                    <div style={{ fontSize: "11px", color: T.gray, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px", fontFamily: T.mono }}>
                      Vista previa
                    </div>
                    <div style={{
                      fontFamily: `'${customHeadingFont}', sans-serif`,
                      fontWeight: 700, fontSize: "22px", color: T.text, lineHeight: 1.2,
                    }}>
                      Tu landing page profesional
                    </div>
                    <div style={{
                      fontFamily: `'${customBodyFont}', sans-serif`,
                      fontWeight: 400, fontSize: "14px", color: T.gray, marginTop: "6px", lineHeight: 1.5,
                    }}>
                      Este es un ejemplo del texto del cuerpo que aparecerá en la landing page generada con estas fuentes.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fondo + Idioma */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>Fondo</h3>
                <div style={{ display: "flex", background: T.card, borderRadius: "10px", border: `1px solid ${T.border}`, overflow: "hidden" }}>
                  {(["dark", "light"] as const).map((t) => (
                    <button key={t} onClick={() => setTheme(t)} style={{
                      padding: "10px 24px", border: "none",
                      background: theme === t ? T.accent : "transparent",
                      color: theme === t ? T.white : T.gray,
                      fontSize: "14px", fontWeight: 700, cursor: "pointer", transition: "background 0.2s",
                    }}>{t === "dark" ? "🌙 Oscuro" : "☀️ Claro"}</button>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>Idioma</h3>
                <div style={{ display: "flex", background: T.card, borderRadius: "10px", border: `1px solid ${T.border}`, overflow: "hidden" }}>
                  {(["es", "en"] as const).map((l) => (
                    <button key={l} onClick={() => setLanguage(l)} style={{
                      padding: "10px 28px", border: "none",
                      background: language === l ? T.accent : "transparent",
                      color: language === l ? T.white : T.gray,
                      fontSize: "14px", fontWeight: 700, cursor: "pointer", transition: "background 0.2s",
                    }}>{l === "es" ? "🇪🇸 Español" : "🇬🇧 English"}</button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
              <BackBtn onClick={() => setStep(6)} />
              <NextBtn onClick={() => setStep(8)} />
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            STEP 8: Resumen y generar
        ══════════════════════════════════════════════════════════ */}
        {step === 8 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "8px" }}>
              Resumen y generar
            </h1>
            <p style={{ color: T.gray, fontSize: "15px", marginBottom: "28px" }}>
              Revisa todo antes de que la IA empiece a generar.
            </p>

            {/* Summary grid */}
            <div style={{
              background: T.card, border: `1px solid ${T.border}`,
              borderRadius: "16px", padding: "24px",
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
              marginBottom: "28px",
            }}>
              {[
                ["Tipo", PAGE_TYPES.find((p) => p.id === pageType)?.label || "—"],
                ["Keyword", keyword || "—"],
                ["Ubicación", location || "—"],
                ["Análisis web", businessInfo?.businessName ? `✓ ${businessInfo.businessName}` : "—"],
                ["Competidores", filledCompetitors.length > 0 ? `${filledCompetitors.length} añadido(s)` : "—"],
                ["Objetivo", OBJECTIVES.find((o) => o.id === objective)?.label || "—"],
                ["Tono", TONES.find((t) => t.id === tone)?.label || "—"],
                ["CTA", ctaText || "(automático)"],
                ["Oferta activa", hasOffer ? (offerDetail || "Sí") : "No"],
                ["Trust signals", [yearsExperience, clientsCount, rating, certifications].filter(Boolean).length > 0
                  ? `${[yearsExperience, clientsCount, rating, certifications].filter(Boolean).length} dato(s)`
                  : generateFakeStats ? "IA generará" : "—"],
                ["Secciones", `${activeSections.length} incluidas`],
                ["Paleta", palette === "custom" ? `Personalizado (${customPrimary} / ${customAccent})` : PALETTES.find((p) => p.id === palette)?.label || ""],
                ["Tipografía", typography === "custom" ? `${customHeadingFont} + ${customBodyFont}` : TYPOGRAPHY_OPTS.find((t) => t.id === typography)?.label || ""],
                ["Idioma", language === "es" ? "Español" : "English"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <div style={{ fontSize: "11px", color: T.gray, textTransform: "uppercase", letterSpacing: "1px", fontFamily: T.mono }}>
                    {k}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>

            {/* Error */}
            {error && (
              <div style={{
                marginBottom: "16px", padding: "14px 20px", borderRadius: "10px",
                background: limitReached ? "#9D4EDD15" : "#EF444415",
                border: `1px solid ${limitReached ? "#9D4EDD40" : "#EF444430"}`,
                color: limitReached ? "#7B2CBF" : "#EF4444", fontSize: "14px",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
              }}>
                <span>⚠ {error}</span>
                {limitReached && (
                  <a href="/#pricing" style={{
                    flexShrink: 0, padding: "6px 16px", borderRadius: "8px", border: "none",
                    background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", color: "#fff",
                    fontSize: "13px", fontWeight: 700, cursor: "pointer", textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}>✨ Ver planes</a>
                )}
                {retryable && !limitReached && (
                  <button onClick={generate} style={{
                    flexShrink: 0, padding: "6px 16px", borderRadius: "8px", border: "none",
                    background: "#EF4444", color: "#fff", fontSize: "13px", fontWeight: 700, cursor: "pointer",
                  }}>↺ Reintentar</button>
                )}
              </div>
            )}

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <BackBtn onClick={() => setStep(7)} />
              <button
                onClick={generate}
                disabled={loading}
                style={{
                  flex: 1, padding: "16px 32px", borderRadius: "14px", border: "none",
                  background: loading ? T.border : `linear-gradient(135deg, #9D4EDD, #7B2CBF)`,
                  color: loading ? T.gray : T.white,
                  fontSize: "17px", fontWeight: 800,
                  cursor: loading ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {loading
                  ? <><span style={{ display: "inline-block", animation: "spin 0.9s linear infinite" }}>⟳</span> {generatePhase || "Iniciando..."}</>
                  : "🚀 Generar landing page"}
              </button>
            </div>
            {loading && (
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                {/* Elapsed timer */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  background: `linear-gradient(135deg, ${T.accent}18, ${T.accentAlt}18)`,
                  border: `1px solid ${T.border}`,
                  borderRadius: "12px", padding: "14px 20px",
                }}>
                  {/* Spinning ring */}
                  <div style={{ position: "relative", width: "44px", height: "44px", flexShrink: 0 }}>
                    <div style={{
                      position: "absolute", inset: 0, borderRadius: "50%",
                      border: `3px solid ${T.border}`,
                    }} />
                    <div style={{
                      position: "absolute", inset: 0, borderRadius: "50%",
                      border: `3px solid transparent`,
                      borderTopColor: T.accent,
                      animation: "spin 1s linear infinite",
                    }} />
                    <div style={{
                      position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: T.mono, fontWeight: 700, fontSize: "12px", color: T.accent,
                    }}>
                      {elapsed}s
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: T.text }}>
                      {generatePhase || "Preparando..."}
                    </span>
                    <span style={{ fontSize: "11px", color: T.gray }}>
                      {elapsed < 30
                        ? "La IA está diseñando tu landing..."
                        : elapsed < 75
                        ? "Generando el HTML y el copy..."
                        : elapsed < 110
                        ? "Casi lista, puliendo los detalles..."
                        : "Finalizando..."}
                    </span>
                  </div>
                </div>
                {/* Progress bar */}
                <div style={{ width: "240px", height: "3px", background: T.border, borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%", borderRadius: "2px",
                    background: `linear-gradient(90deg, ${T.accent}, ${T.accentAlt})`,
                    animation: "progress-slide 2s ease-in-out infinite",
                  }} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes progress-slide { 0%{width:15%;margin-left:0} 50%{width:60%;margin-left:20%} 100%{width:15%;margin-left:85%} }
        input:focus { outline: none; }
      `}</style>
    </div>
  );
}
