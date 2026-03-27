"use client";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

const BRAND = {
  name: "LandForge",
  accent: "#9D4EDD",
  accentAlt: "#7B2CBF",
  accentLight: "#E0AAFF",
  bg: "#FAFAFA",
  bgAlt: "#F3E8FF",
  bgCard: "#FFFFFF",
  border: "#E0AAFF",
  text: "#1A1A2E",
  gray: "#6B7280",
};

/* ─── SVG Icons ─── */
const CheckIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill={BRAND.accent} opacity="0.12" />
    <path d="M6 10.5L8.5 13L14 7.5" stroke={BRAND.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarFull = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#FFB800">
    <path d="M7 1l1.545 4.254H13l-3.614 2.748 1.41 4.254L7 9.508l-3.796 2.748 1.41-4.254L.999 5.254H5.455z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 3L13 13M13 3L3 13" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
  </svg>
);


/* ─── Avatar Stack ─── */
const avatars = [
  { initials: "CM", bg: "#7C3AED" },
  { initials: "AL", bg: "#DB2777" },
  { initials: "RV", bg: "#D97706" },
  { initials: "PG", bg: "#059669" },
  { initials: "MF", bg: "#2563EB" },
];

const AvatarStack = ({ count = "200+" }: { count?: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <div style={{ display: "flex" }}>
      {avatars.map((a, i) => (
        <div key={i} style={{
          width: "34px", height: "34px", borderRadius: "50%",
          background: a.bg, border: "2px solid #fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "12px", fontWeight: 700, color: "#fff",
          marginLeft: i === 0 ? 0 : "-10px", zIndex: avatars.length - i,
          position: "relative",
        }}>{a.initials}</div>
      ))}
    </div>
    <div>
      <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
        {[...Array(5)].map((_, i) => <StarFull key={i} />)}
      </div>
      <span style={{ fontSize: "13px", color: BRAND.gray }}>
        <strong style={{ color: BRAND.text }}>{count} agencias</strong> ya lo usan
      </span>
    </div>
  </div>
);

/* ─── Step Card ─── */
const StepCard = ({ number, title, description, delay }: {
  number: string; title: string; description: string; delay: number;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      background: BRAND.bgCard,
      border: `1px solid ${BRAND.border}`,
      borderRadius: "16px", padding: "32px",
      flex: 1, minWidth: "260px", position: "relative", overflow: "hidden",
      boxShadow: "0 2px 16px rgba(157,78,221,0.07)",
    }}>
      <div style={{
        position: "absolute", top: "-20px", right: "-10px",
        fontSize: "120px", fontWeight: 800, color: BRAND.accent,
        opacity: 0.04, lineHeight: 1, fontFamily: "'Space Mono', monospace",
      }}>{number}</div>
      <div style={{
        width: "48px", height: "48px", borderRadius: "12px",
        background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "20px", fontWeight: 700, color: BRAND.accent,
        fontFamily: "'Space Mono', monospace", marginBottom: "20px",
      }}>{number}</div>
      <h3 style={{ fontSize: "20px", fontWeight: 700, color: BRAND.text, marginBottom: "12px" }}>{title}</h3>
      <p style={{ fontSize: "15px", lineHeight: 1.7, color: BRAND.gray }}>{description}</p>
    </div>
  );
};

/* ─── Testimonial Card ─── */
const TestimonialCard = ({ text, name, role, result, delay }: {
  text: string; name: string; role: string; result: string; delay: number;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2);
  const hue = name.charCodeAt(0) * 137 % 360;
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      background: BRAND.bgCard, border: `1px solid ${BRAND.border}`,
      borderRadius: "16px", padding: "28px",
      display: "flex", flexDirection: "column", gap: "16px",
      boxShadow: "0 2px 16px rgba(157,78,221,0.06)",
    }}>
      <div style={{ display: "flex", gap: "2px" }}>
        {[...Array(5)].map((_, i) => <StarFull key={i} />)}
      </div>
      <p style={{ fontSize: "15px", color: BRAND.gray, lineHeight: 1.75, fontStyle: "italic" }}>
        &ldquo;{text}&rdquo;
      </p>
      <div style={{
        background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
        borderRadius: "8px", padding: "10px 14px",
        fontSize: "13px", color: BRAND.accent, fontWeight: 600,
      }}>{result}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
        <div style={{
          width: "38px", height: "38px", borderRadius: "50%",
          background: `hsl(${hue}, 55%, 45%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "14px", fontWeight: 700, color: "#fff", flexShrink: 0,
        }}>{initials}</div>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: BRAND.text }}>{name}</div>
          <div style={{ fontSize: "13px", color: BRAND.gray }}>{role}</div>
        </div>
      </div>
    </div>
  );
};

/* ─── FAQ ─── */
const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: `1px solid ${BRAND.border}`, padding: "20px 0", cursor: "pointer" }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "17px", fontWeight: 600, color: BRAND.text }}>{question}</span>
        <span style={{
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease", color: BRAND.gray,
          flexShrink: 0, marginLeft: "16px",
        }}><ChevronDown /></span>
      </div>
      <div style={{
        maxHeight: open ? "300px" : "0", overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: BRAND.gray, marginTop: "12px" }}>{answer}</p>
      </div>
    </div>
  );
};

/* ─── Demo Video ─── */
const DEMO_VIDEO_ID = "MRS2BdlK8gs";
const DemoVideo = () => (
  <div style={{
    borderRadius: "16px", overflow: "hidden",
    border: `1px solid ${BRAND.border}`,
    boxShadow: `0 24px 64px rgba(157,78,221,0.14)`,
    maxWidth: "900px", margin: "0 auto",
    position: "relative", paddingBottom: "56.25%", height: 0,
    background: "#000",
  }}>
    <iframe
      src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${DEMO_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
      title="Demo de LandForge"
      allow="autoplay; encrypted-media"
      allowFullScreen
      style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        border: "none", borderRadius: "16px",
      }}
    />
  </div>
);

/* ─── Section badge helper ─── */
const SectionBadge = ({ label }: { label: string }) => (
  <span style={{
    display: "inline-block",
    fontSize: "12px", fontWeight: 700, color: BRAND.accent,
    textTransform: "uppercase", letterSpacing: "2px",
    fontFamily: "'Space Mono', monospace",
    background: BRAND.bgAlt, padding: "4px 14px", borderRadius: "20px",
    border: `1px solid ${BRAND.border}`,
  }}>{label}</span>
);


/* ─── Main Page ─── */
export default function LandForgeLanding() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 80); }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setIsLoggedIn(!!data.user));
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingInterval, setBillingInterval] = useState<'month' | 'year'>('month');
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleSubscribe = async (planId: string) => {
    if (!isLoggedIn) {
      window.location.href = `/register?next=/pricing-redirect&plan=${planId}&interval=${billingInterval}`;
      return;
    }
    setLoadingPlan(planId);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, interval: billingInterval }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Error al iniciar checkout');
      }
    } catch {
      alert('Error de conexión');
    } finally {
      setLoadingPlan(null);
    }
  };

  const testimonials = [
    {
      text: "Antes tardaba 3 horas en montar una landing. Ahora en 10 minutos tengo una página profesional publicada y con Forgi atendiendo clientes mientras duermo.",
      name: "Carlos M.", role: "Agencia Creative, Madrid",
      result: "→ De 3h a 10 min. Forgi convierte visitantes en leads automáticamente.",
    },
    {
      text: "Mis clientes flipan cuando les muestro la landing generada en la misma reunión de briefing. Y que además incluya un chatbot que ya sabe todo sobre su negocio es el cierre.",
      name: "María L.", role: "Diseñadora web freelance",
      result: "→ Cierra más proyectos mostrando resultado en vivo.",
    },
    {
      text: "Lo usamos para todos los clientes nuevos. La landing sale lista para vender y Forgi nos ahorra contratar soporte. El Conversion Score nos ayuda a mejorar cada página.",
      name: "Agencia Pulse", role: "Agencia digital, Barcelona",
      result: "→ Tasa de cierre del 80% mostrando la preview al cliente.",
    },
  ];

  const faqs = [
    {
      q: "¿Puedo editar la landing después de generarla?",
      a: "Sí. Forgi Editor te permite seleccionar cualquier sección y pedirle cambios con lenguaje natural. También puedes editar textos directamente haciendo doble clic. Sin tocar código.",
    },
    {
      q: "¿Necesito saber programar?",
      a: "No. Todo funciona con formularios y con Forgi. Describes lo que quieres y la IA lo hace por ti.",
    },
    {
      q: "¿Qué tipo de landing pages genera?",
      a: "Landing pages de servicios, captación de leads, producto, restaurantes, clínicas, eCommerce, SaaS y más. La IA adapta estructura y copy al sector.",
    },
    {
      q: "¿Puedo usarlo para mis clientes como agencia?",
      a: "Exactamente para eso está diseñado. Cada landing es tuya para usar con tus clientes. El plan Unlimited incluye white label para que no aparezca la marca LandForge.",
    },
    {
      q: "¿Qué es Forgi Chatbot?",
      a: "Es un asistente de ventas IA que se activa automáticamente en tu landing publicada. Se entrena con los datos de tu negocio y atiende a los visitantes 24/7, resolviendo dudas y guiándolos hacia la conversión. Sin configurar nada.",
    },
    {
      q: "¿Dónde se publica mi landing?",
      a: "Se publica automáticamente en un subdominio gratuito tipo tu-negocio.landforge.app. En los planes Pro y Unlimited puedes conectar tu propio dominio.",
    },
    {
      q: "¿Cuánto tarda en generar una landing?",
      a: "Entre 30 segundos y 2 minutos dependiendo de la complejidad. El formulario se completa en 5 minutos máximo.",
    },
  ];

  const pricing = [
    {
      id: "starter", name: "Starter", price: 49, period: "/mes",
      desc: "Perfecto para empezar a testear ideas.",
      cta: "Empezar con Starter", ctaNote: "Sin tarjeta · 14 días gratis",
      features: [
        "5 Landings activas",
        "10 Generaciones AI al mes",
        "30 Ediciones Forgi al mes",
        "500 Mensajes en el Chatbot",
        "Conversion Score",
      ],
      highlight: false,
    },
    {
      id: "agency", name: "Agency", price: 97, period: "/mes",
      desc: "Para agencias que manejan varios clientes.",
      cta: "Empezar con Agency", ctaNote: "Popular · 14 días gratis",
      features: [
        "20 Landings activas",
        "100 Generaciones AI al mes",
        "200 Ediciones Forgi al mes",
        "3.000 Mensajes en el Chatbot",
        "Conversion Score",
        "Análisis de competidores",
        "Dominio propio",
      ],
      highlight: true,
    },
    {
      id: "agency_pro", name: "Agency Pro", price: 197, period: "/mes",
      desc: "El plan definitivo sin límites.",
      cta: "Ser Pro", ctaNote: "Soporte prioritario",
      features: [
        "Landings Ilimitadas",
        "Generaciones AI Ilimitadas",
        "Ediciones Forgi Ilimitadas",
        "Chatbot Ilimitado",
        "White label (tu marca)",
        "Soporte prioritario",
      ],
      highlight: false,
    },
  ];

  return (
    <div style={{
      minHeight: "100vh", background: BRAND.bg, color: BRAND.text,
      fontFamily: "'DM Sans', -apple-system, sans-serif", overflowX: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      <main>

      {/* ── NAV ── */}
      <nav className="lf-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "14px 32px",
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${BRAND.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "9px",
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "16px", color: "#fff",
            fontFamily: "'Space Mono', monospace",
          }}>L</div>
          <span style={{ fontWeight: 700, fontSize: "18px", letterSpacing: "-0.5px", fontFamily: "'Space Mono', monospace", color: BRAND.text }}>
            {BRAND.name}
          </span>
        </div>

        {/* Desktop links */}
        <div className="lf-nav-links" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {["Cómo funciona", "Precios"].map((item) => (
            <a key={item}
              href={`#${item === "Cómo funciona" ? "comofunciona" : "pricing"}`}
              style={{ color: BRAND.gray, textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = BRAND.text)}
              onMouseLeave={e => (e.currentTarget.style.color = BRAND.gray)}
            >{item}</a>
          ))}
          {!isLoggedIn && (
            <a href="/login"
              style={{ color: BRAND.gray, textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = BRAND.text)}
              onMouseLeave={e => (e.currentTarget.style.color = BRAND.gray)}
            >Entrar</a>
          )}
          <a href={isLoggedIn ? "/dashboard" : "/register"} style={{
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            color: "#fff", padding: "8px 20px", borderRadius: "8px",
            fontSize: "14px", fontWeight: 700, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 4px 20px ${BRAND.accent}44`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >{isLoggedIn ? "Mis landings →" : "Pruébalo gratis"}</a>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="lf-nav-mobile" style={{ display: "none", alignItems: "center", gap: "10px" }}>
          <a href={isLoggedIn ? "/dashboard" : "/register"} style={{
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            color: "#fff", padding: "7px 16px", borderRadius: "8px",
            fontSize: "13px", fontWeight: 700, textDecoration: "none",
          }}>{isLoggedIn ? "Dashboard →" : "Pruébalo gratis"}</a>
          <button
            onClick={() => setMobileMenuOpen(o => !o)}
            style={{
              background: "none", border: `1px solid ${BRAND.border}`, borderRadius: "8px",
              width: "38px", height: "38px", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px",
            }}
          >
            <span style={{ width: "18px", height: "2px", background: mobileMenuOpen ? "transparent" : BRAND.text, transition: "all .2s", transform: mobileMenuOpen ? "rotate(45deg) translate(5px,5px)" : "none", display: "block" }} />
            <span style={{ width: "18px", height: "2px", background: BRAND.text, transition: "all .2s", transform: mobileMenuOpen ? "rotate(-45deg)" : "none", display: "block" }} />
            <span style={{ width: "18px", height: "2px", background: mobileMenuOpen ? "transparent" : BRAND.text, transition: "all .2s", transform: mobileMenuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none", display: "block" }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lf-mobile-menu" style={{
          position: "fixed", top: "61px", left: 0, right: 0, zIndex: 99,
          background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${BRAND.border}`,
          padding: "20px 24px 28px",
          display: "flex", flexDirection: "column", gap: "4px",
          animation: "forgiSlideUp .2s ease",
        }}>
          <a href="#comofunciona" onClick={() => setMobileMenuOpen(false)} style={{ padding: "14px 0", fontSize: "17px", fontWeight: 600, color: BRAND.text, textDecoration: "none", borderBottom: `1px solid ${BRAND.border}` }}>Cómo funciona</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ padding: "14px 0", fontSize: "17px", fontWeight: 600, color: BRAND.text, textDecoration: "none", borderBottom: `1px solid ${BRAND.border}` }}>Precios</a>
          {!isLoggedIn && <a href="/login" onClick={() => setMobileMenuOpen(false)} style={{ padding: "14px 0", fontSize: "17px", fontWeight: 600, color: BRAND.text, textDecoration: "none", borderBottom: `1px solid ${BRAND.border}` }}>Entrar</a>}
          <a href={isLoggedIn ? "/dashboard" : "/register"} style={{
            marginTop: "12px", display: "block", textAlign: "center", padding: "14px",
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            color: "#fff", borderRadius: "10px", fontSize: "16px", fontWeight: 800, textDecoration: "none",
          }}>{isLoggedIn ? "Mis landings →" : "Empezar gratis"}</a>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "120px 24px 80px", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: "25%", left: "50%", transform: "translate(-50%, -50%)",
          width: "700px", height: "700px",
          background: `radial-gradient(circle, ${BRAND.accent}08 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />

        {/* Badge */}
        <div style={{
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)", marginBottom: "32px",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 16px 6px 8px", borderRadius: "100px",
            background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
            fontSize: "13px", color: BRAND.accent, fontWeight: 600,
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: BRAND.accent, flexShrink: 0, animation: "pulse 2s infinite",
            }} />
            ✨ Early Access — Precio de lanzamiento
          </div>
        </div>

        {/* SEO Kicker (H1 Dual) */}
        <p style={{
          fontSize: "14px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1.5px", color: BRAND.accent, 
          opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", 
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s", marginBottom: "16px"
        }}>
          El Mejor Generador de Landing Pages con Inteligencia Artificial
        </p>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(38px, 6vw, 74px)", fontWeight: 800,
          lineHeight: 1.04, maxWidth: "820px", letterSpacing: "-2.5px",
          marginBottom: "24px", color: BRAND.text,
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
        }}>
          Tu landing page lista para vender.{" "}
          <span style={{
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>En minutos.</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)", color: BRAND.gray,
          maxWidth: "560px", lineHeight: 1.7, marginBottom: "40px",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}>
          Describe tu negocio en 5 minutos. LandForge crea tu{" "}
          <strong style={{ color: BRAND.text }}>landing page de alta conversión</strong> en 30 segundos.{" "}
          <strong>Forgi</strong> la optimiza contigo y realiza una <strong>Atención al cliente automática 24/7</strong> como experto en ventas.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
        }}>
          <div className="lf-hero-ctas" style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/register" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
              color: "#fff", padding: "15px 34px", borderRadius: "12px",
              fontSize: "16px", fontWeight: 800, textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 32px ${BRAND.accent}33`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Generar mi primera landing <ArrowRight />
            </a>
            <a href="#demo" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: BRAND.accent,
              padding: "15px 32px", borderRadius: "12px",
              fontSize: "16px", fontWeight: 600, textDecoration: "none",
              border: `1px solid ${BRAND.border}`, transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = BRAND.accent}
              onMouseLeave={e => e.currentTarget.style.borderColor = BRAND.border}
            >Ver demo</a>
          </div>
          <p style={{ fontSize: "13px", color: BRAND.gray, margin: 0 }}>
            Sin tarjeta · 1 landing gratis · Cancela cuando quieras
          </p>
        </div>

        {/* Avatar stack */}
        <div style={{
          marginTop: "52px",
          opacity: heroVisible ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
        }}>
          <AvatarStack count="200+" />
        </div>
      </section>

      {/* ── DEMO PREVIEW ── */}
      <section id="demo" style={{ padding: "0 24px 100px", maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionBadge label="ASÍ QUEDA" />
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-1px", marginTop: "16px", color: BRAND.text }}>
            Genera tu landing page con IA en 30 segundos
          </h2>
          <p style={{ color: BRAND.gray, fontSize: "16px", maxWidth: "500px", margin: "12px auto 0" }}>
            Lo que ves es exactamente lo que tus visitantes ven. Publicada, online, lista para recibir tráfico.
          </p>
        </div>
        <DemoVideo />
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="comofunciona" style={{ padding: "80px 24px 100px", background: BRAND.bgAlt }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionBadge label="CÓMO FUNCIONA" />
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-1px", marginTop: "16px", color: BRAND.text }}>
              Crea tu landing page con IA en 3 pasos. Sin código.
            </h2>
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <StepCard number="01" title="Rellena la encuesta"
              description="Cuéntanos sobre el negocio: sector, servicios, público, tono, colores y CTA. Analizamos tu web y la de tus competidores. Máximo 5 minutos."
              delay={0} />
            <StepCard number="02" title="La IA genera tu landing"
              description="Dos agentes de IA crean la estructura completa: copy persuasivo, secciones profesionales, CTAs optimizados y Forgi activado. Todo adaptado a tu sector."
              delay={0.15} />
            <StepCard number="03" title="Publica y vende"
              description="Tu landing se publica al instante con su propio dominio. Forgi atiende a tus visitantes 24/7 como asistente de ventas. Edita cualquier sección con IA cuando quieras."
              delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── FORGI ── */}
      <section id="forgi" aria-label="Forgi: asistente IA para landing pages" style={{ padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <SectionBadge label="CONOCE A FORGI" />
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-1px", marginTop: "16px", color: BRAND.text }}>
              Forgi: el asistente IA para tus landing pages
            </h2>
            <p style={{ color: BRAND.gray, fontSize: "16px", maxWidth: "520px", margin: "14px auto 0", lineHeight: 1.7 }}>
              Forgi no es un chatbot genérico. Se entrena automáticamente con la información de tu negocio.
            </p>
          </div>
          <div className="lf-forgi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px" }}>
            {/* Forgi Editor */}
            <div style={{
              background: BRAND.bgCard, border: `1px solid ${BRAND.border}`,
              borderRadius: "20px", padding: "36px",
              boxShadow: "0 2px 20px rgba(157,78,221,0.07)",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: BRAND.bgAlt, border: `1px solid ${BRAND.border}`,
                borderRadius: "10px", padding: "8px 16px",
                fontSize: "16px", fontWeight: 700, color: BRAND.text, marginBottom: "16px",
              }}>✏️ Forgi Editor</div>
              <p style={{ fontSize: "15px", color: BRAND.gray, lineHeight: 1.7, marginBottom: "24px" }}>
                Selecciona cualquier sección de tu landing y dile a Forgi qué cambiar. Modifica textos, estructura, colores o añade secciones nuevas. Sin tocar código.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Edición por sección con IA", "Chat general para cambios globales", "Añadir/eliminar secciones", "Historial con deshacer"].map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckIcon size={18} />
                    <span style={{ fontSize: "14px", color: BRAND.text }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Forgi Chatbot */}
            <div style={{
              background: `linear-gradient(135deg, ${BRAND.accent}09, ${BRAND.accentAlt}06)`,
              border: `1px solid ${BRAND.accent}35`,
              borderRadius: "20px", padding: "36px",
              boxShadow: `0 2px 20px ${BRAND.accent}10`,
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                borderRadius: "10px", padding: "8px 16px",
                fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "16px",
              }}>💬 Forgi Chatbot</div>
              <p style={{ fontSize: "15px", color: BRAND.gray, lineHeight: 1.7, marginBottom: "24px" }}>
                Se activa automáticamente en tu landing publicada. Atiende a cada visitante 24/7, resuelve dudas con datos reales de tu negocio y guía hacia la venta.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Entrenado con tus datos automáticamente", "Responde sobre servicios, precios, horarios", "Guía al visitante hacia la conversión", "Funciona 24/7 sin configuración"].map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckIcon size={18} />
                    <span style={{ fontSize: "14px", color: BRAND.text }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONVERSION SCORE ── */}
      <section id="conversion-score" aria-label="Conversion Score: análisis de tu landing page con IA" style={{ padding: "80px 24px 100px", background: BRAND.bgAlt }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <SectionBadge label="OPTIMIZACIÓN" />
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-1px", marginTop: "16px", color: BRAND.text }}>
              Conversion Score: tu landing page analizada por IA.
            </h2>
            <p style={{ color: BRAND.gray, fontSize: "16px", maxWidth: "520px", margin: "14px auto 0", lineHeight: 1.7 }}>
              Antes de publicar, Forgi analiza tu landing y te dice exactamente qué mejorar para convertir más.
            </p>
          </div>
          {/* Score mockup */}
          <div style={{
            background: BRAND.bgCard, border: `1px solid ${BRAND.border}`,
            borderRadius: "20px", padding: "40px", maxWidth: "620px", margin: "0 auto",
            boxShadow: "0 4px 32px rgba(157,78,221,0.10)",
          }}>
            <div className="lf-score-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: BRAND.gray, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Conversion Score</div>
                <div style={{ fontSize: "52px", fontWeight: 800, color: BRAND.accent, lineHeight: 1, fontFamily: "'Space Mono', monospace" }}>
                  78<span style={{ fontSize: "24px", color: BRAND.gray }}>/100</span>
                </div>
              </div>
              <div style={{
                width: "80px", height: "80px", borderRadius: "50%",
                border: `6px solid ${BRAND.bgAlt}`,
                borderTopColor: BRAND.accent, borderRightColor: BRAND.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", fontWeight: 800, color: BRAND.accent,
              }}>78</div>
            </div>
            {/* Bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
              {[["Headline", 85], ["CTAs", 70], ["Social Proof", 90], ["Estructura", 75]].map(([label, score]) => (
                <div key={label as string}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: BRAND.text }}>{label}</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: BRAND.accent }}>{score}</span>
                  </div>
                  <div style={{ height: "8px", background: BRAND.bgAlt, borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: "4px", width: `${score}%`,
                      background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accentLight})`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
            {/* Recommendations */}
            <div style={{ borderTop: `1px solid ${BRAND.border}`, paddingTop: "20px", marginBottom: "24px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: BRAND.text, marginBottom: "12px" }}>Recomendaciones de Forgi</div>
              {[
                "Añade urgencia al CTA principal para aumentar conversión",
                "El testimonio 2 podría incluir un resultado numérico concreto",
                "Considera añadir un badge de garantía o certificación",
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "8px" }}>
                  <span style={{ color: BRAND.accent, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>→</span>
                  <span style={{ fontSize: "13px", color: BRAND.gray, lineHeight: 1.5 }}>{r}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => {
                const el = document.getElementById('forgi');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                width: "100%", padding: "12px", borderRadius: "10px", border: "none",
                background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                color: "#fff", fontSize: "14px", fontWeight: 700, cursor: "pointer",
              }}
            >
              Aplicar mejora con Forgi
            </button>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section id="comparativa" aria-label="Antes y después de usar LandForge para crear landing pages" style={{ padding: "80px 24px", maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-1px", color: BRAND.text }}>
            Crear landing pages para agencias: antes y después de LandForge
          </h2>
          <p style={{ color: BRAND.gray, fontSize: "16px", marginTop: "12px" }}>
            Para agencias que crean landing pages para sus clientes.
          </p>
        </div>
        <div className="lf-comp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {/* Before */}
          <div style={{
            background: BRAND.bgCard, border: "1px solid #FCA5A530",
            borderRadius: "16px", padding: "28px",
            boxShadow: "0 2px 12px rgba(239,68,68,0.04)",
          }}>
            <div style={{
              display: "inline-block", background: "#EF444415", color: "#EF4444",
              fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", marginBottom: "20px",
            }}>Sin LandForge</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "3+ horas montando estructura desde cero",
                "Copy genérico que no vende",
                "Sin chatbot de atención al cliente",
                "Landing estática que no se optimiza",
                "El visitante se va sin contactar",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ marginTop: "2px", flexShrink: 0 }}><XIcon /></div>
                  <span style={{ fontSize: "14px", color: BRAND.gray, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          {/* After */}
          <div style={{
            background: BRAND.bgCard, border: `1px solid ${BRAND.accent}30`,
            borderRadius: "16px", padding: "28px",
            boxShadow: `0 2px 20px ${BRAND.accent}10`,
          }}>
            <div style={{
              display: "inline-block", background: BRAND.bgAlt, color: BRAND.accent,
              fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", marginBottom: "20px",
            }}>Con LandForge</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Landing profesional en 10 minutos",
                "Copy persuasivo adaptado a tu sector",
                "Forgi atiende visitantes 24/7",
                "Conversion Score que mejora tu página",
                "Cada visitante es guiado hacia la venta",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ marginTop: "2px", flexShrink: 0 }}><CheckIcon size={18} /></div>
                  <span style={{ fontSize: "14px", color: BRAND.text, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonios" aria-label="Testimonios de agencias que usan LandForge" style={{ padding: "80px 24px 100px", background: BRAND.bgAlt }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <SectionBadge label="TESTIMONIOS" />
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-1px", marginTop: "16px", color: BRAND.text }}>
              Agencias digitales que ya crean landing pages con LandForge
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <SectionBadge label="PRECIOS" />
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-1px", marginTop: "16px", color: BRAND.text }}>
              Precios para agencias y freelancers. Sin sorpresas.
            </h2>
            <p style={{ color: BRAND.gray, fontSize: "14px", marginTop: "10px", fontFamily: "'Space Mono', monospace" }}>
              ✨ Precios de lanzamiento — empieza gratis, sin tarjeta
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
            <span style={{ fontSize: "14px", fontWeight: 600, color: billingInterval === 'month' ? BRAND.text : BRAND.gray }}>Mensual</span>
            <button 
              onClick={() => setBillingInterval(billingInterval === 'month' ? 'year' : 'month')}
              style={{
                position: "relative", width: "48px", height: "24px", 
                background: billingInterval === 'year' ? BRAND.accent : "#E5E7EB",
                borderRadius: "100px", padding: "2px", border: "none", cursor: "pointer",
                transition: "background 0.3s ease",
              }}
            >
              <div style={{ 
                width: "20px", height: "20px", background: "#fff", borderRadius: "50%",
                transform: billingInterval === 'year' ? "translateX(24px)" : "translateX(0)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: billingInterval === 'year' ? BRAND.text : BRAND.gray }}>Anual</span>
              <span style={{ 
                background: "#DEF7EC", color: "#03543F", fontSize: "10px", fontWeight: 800, 
                padding: "2px 8px", borderRadius: "100px", textTransform: "uppercase" 
              }}>Ahorra 20%</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
            {pricing.map((plan) => {
              const displayPrice = billingInterval === 'month' ? plan.price : Math.round(plan.price * 0.8);
              const displayInterval = billingInterval === 'month' ? "/mes" : "/mes (anual)";
              
              return (
                <div key={plan.name} style={{
                  background: plan.highlight ? `linear-gradient(135deg, ${BRAND.accent}08, ${BRAND.accentAlt}05)` : BRAND.bgCard,
                  border: `1px solid ${plan.highlight ? BRAND.accent + "55" : BRAND.border}`,
                  borderRadius: "16px", padding: "36px 30px",
                  flex: "1 1 280px", maxWidth: "340px", position: "relative", overflow: "hidden",
                  boxShadow: plan.highlight ? `0 8px 40px ${BRAND.accent}18` : "0 2px 12px rgba(157,78,221,0.06)",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}>
                  {plan.highlight && (
                    <div style={{
                      position: "absolute", top: "16px", right: "16px",
                      background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                      color: "#fff", fontSize: "11px", fontWeight: 800,
                      padding: "4px 12px", borderRadius: "100px",
                      textTransform: "uppercase", letterSpacing: "1px",
                    }}>Popular</div>
                  )}
                  <p style={{ fontSize: "13px", color: BRAND.gray, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{plan.name}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px", margin: "14px 0 6px" }}>
                    <span style={{ fontSize: "52px", fontWeight: 800, fontFamily: "'Space Mono', monospace", lineHeight: 1, color: BRAND.text }}>€{displayPrice}</span>
                    <span style={{ color: BRAND.gray, fontSize: "14px" }}>{displayInterval}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: BRAND.gray, marginBottom: "24px" }}>{plan.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "28px" }}>
                    {plan.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ flexShrink: 0 }}><CheckIcon size={18} /></div>
                        <span style={{ fontSize: "14px", color: BRAND.text }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={loadingPlan === plan.id}
                    style={{
                      display: "block", width: "100%", textAlign: "center",
                      padding: "13px 24px", borderRadius: "10px", cursor: loadingPlan === plan.id ? "wait" : "pointer",
                      background: plan.highlight ? `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})` : "transparent",
                      color: plan.highlight ? "#fff" : BRAND.accent,
                      border: plan.highlight ? "none" : `1px solid ${BRAND.accent}`,
                      fontWeight: 700, fontSize: "15px",
                      transition: "transform 0.2s",
                      opacity: loadingPlan === plan.id ? 0.7 : 1,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                  >{loadingPlan === plan.id ? "Procesando..." : plan.cta}</button>
                  <p style={{ textAlign: "center", fontSize: "12px", color: BRAND.gray, marginTop: "10px" }}>{plan.ctaNote}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" aria-label="Preguntas frecuentes sobre LandForge" style={{ padding: "80px 24px 100px", maxWidth: "680px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-1px", color: BRAND.text }}>
            Preguntas frecuentes
          </h2>
        </div>
        {faqs.map((f, i) => <FAQ key={i} question={f.q} answer={f.a} />)}
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "80px 24px 120px", background: BRAND.bgAlt }}>
        <div className="lf-final-cta" style={{
          maxWidth: "640px", margin: "0 auto", textAlign: "center",
          background: BRAND.bgCard, border: `1px solid ${BRAND.accent}30`,
          borderRadius: "24px", padding: "64px 40px", position: "relative", overflow: "hidden",
          boxShadow: `0 8px 60px ${BRAND.accent}12`,
        }}>
          <div style={{
            position: "absolute", top: "-120px", right: "-120px",
            width: "340px", height: "340px",
            background: `radial-gradient(circle, ${BRAND.accent}0A, transparent 70%)`,
            pointerEvents: "none",
          }} />
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: "16px", color: BRAND.text }}>
            Tu próxima landing está<br />a 10 minutos.
          </h2>
          <p style={{ color: BRAND.gray, fontSize: "17px", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto 36px" }}>
            Genera tu primera landing gratis. Con Forgi incluido. Sin tarjeta. Sin compromisos.
          </p>
          <a href="/register" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            color: "#fff", padding: "16px 40px", borderRadius: "12px",
            fontSize: "17px", fontWeight: 800, textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 32px ${BRAND.accent}33`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Empezar gratis <ArrowRight />
          </a>
          <p style={{ fontSize: "13px", color: BRAND.gray, marginTop: "14px" }}>
            Sin tarjeta · 1 landing gratis · Cancela cuando quieras
          </p>
          <div style={{ marginTop: "28px", display: "flex", justifyContent: "center" }}>
            <AvatarStack count="200+" />
          </div>
        </div>
      </section>

      {/* ── ENLAZADO INTERNO JERÁRQUICO ── SEO Hub Section ── */}
      <section style={{ padding: "80px 24px", borderTop: `1px solid ${BRAND.border}`, background: BRAND.bg }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: BRAND.accent, marginBottom: "8px" }}>
              Explora LandForge
            </p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: BRAND.text, letterSpacing: "-0.5px" }}>
              Todo lo que necesitas para dominar landing pages con IA
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "32px" }}>

            {/* Hub 1: Funcionalidades */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ fontSize: "18px" }}>⚡</span>
                <span style={{ fontWeight: 800, fontSize: "14px", color: BRAND.text }}>Funcionalidades</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Forgi Chatbot — Ventas 24/7", href: "/features/forgi-chatbot" },
                  { label: "Forgi Editor — Edita con IA", href: "/features/forgi-editor" },
                  { label: "Precios y Planes", href: "/#pricing" },
                ].map(item => (
                  <li key={item.href}>
                    <a href={item.href} style={{ fontSize: "14px", color: BRAND.gray, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
                      onMouseEnter={e => (e.currentTarget.style.color = BRAND.accent)}
                      onMouseLeave={e => (e.currentTarget.style.color = BRAND.gray)}>
                      <span style={{ color: BRAND.accent, flexShrink: 0 }}>→</span>{item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hub 2: Sectores */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ fontSize: "18px" }}>🏢</span>
                <span style={{ fontWeight: 800, fontSize: "14px", color: BRAND.text }}>LandForge para tu Sector</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Agencias de Marketing", href: "/para/agencias-de-marketing" },
                  { label: "Clínicas Dentales", href: "/para/clinicas-dentales" },
                  { label: "eCommerce y Tiendas Online", href: "/para/ecommerce" },
                  { label: "Agencias Inmobiliarias", href: "/para/inmobiliarias" },
                  { label: "Coaches y Formadores", href: "/para/coaches" },
                  { label: "Despachos de Abogados", href: "/para/abogados" },
                ].map(item => (
                  <li key={item.href}>
                    <a href={item.href} style={{ fontSize: "14px", color: BRAND.gray, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
                      onMouseEnter={e => (e.currentTarget.style.color = BRAND.accent)}
                      onMouseLeave={e => (e.currentTarget.style.color = BRAND.gray)}>
                      <span style={{ color: BRAND.accent, flexShrink: 0 }}>→</span>{item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hub 3: Comparativas */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ fontSize: "18px" }}>⚖️</span>
                <span style={{ fontWeight: 800, fontSize: "14px", color: BRAND.text }}>Comparativas</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "LandForge vs Webflow", href: "/comparar/landforge-vs-webflow" },
                  { label: "LandForge vs Unbounce", href: "/comparar/landforge-vs-unbounce" },
                  { label: "Alternativas a Leadpages", href: "/comparar/alternativas-leadpages" },
                  { label: "WordPress vs LandForge", href: "/integraciones/wordpress" },
                ].map(item => (
                  <li key={item.href}>
                    <a href={item.href} style={{ fontSize: "14px", color: BRAND.gray, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
                      onMouseEnter={e => (e.currentTarget.style.color = BRAND.accent)}
                      onMouseLeave={e => (e.currentTarget.style.color = BRAND.gray)}>
                      <span style={{ color: BRAND.accent, flexShrink: 0 }}>→</span>{item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hub 4: Blog y Recursos */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ fontSize: "18px" }}>📚</span>
                <span style={{ fontWeight: 800, fontSize: "14px", color: BRAND.text }}>Blog y Recursos</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Qué es una Landing Page", href: "/blog/que-es-una-landing-page" },
                  { label: "Cómo Aumentar la Conversión", href: "/blog/como-aumentar-conversion-landing-page" },
                  { label: "Chatbot de Ventas para tu Web", href: "/blog/chatbot-ventas-para-web" },
                  { label: "Ver todos los artículos", href: "/blog" },
                ].map(item => (
                  <li key={item.href}>
                    <a href={item.href} style={{ fontSize: "14px", color: BRAND.gray, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
                      onMouseEnter={e => (e.currentTarget.style.color = BRAND.accent)}
                      onMouseLeave={e => (e.currentTarget.style.color = BRAND.gray)}>
                      <span style={{ color: BRAND.accent, flexShrink: 0 }}>→</span>{item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "36px 24px", borderTop: `1px solid ${BRAND.border}`,
        textAlign: "center", background: BRAND.bg,
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "10px" }}>
          <div style={{
            width: "22px", height: "22px", borderRadius: "6px",
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "11px", color: "#fff",
            fontFamily: "'Space Mono', monospace",
          }}>L</div>
          <span style={{ fontWeight: 700, fontSize: "14px", fontFamily: "'Space Mono', monospace", color: BRAND.text }}>{BRAND.name}</span>
        </div>
        <p style={{ color: BRAND.gray, fontSize: "13px" }}>
          © 2026 {BRAND.name} · Creado para agencias que valoran su tiempo
        </p>
      </footer>

      {/* Forgi chat widget is rendered globally via layout.tsx → ForgiChatWidget */}
    </div>
  );
}
