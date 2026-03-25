import { useState, useEffect, useRef } from "react";

const BRAND = {
  name: "LandForge",
  tagline: "De encuesta a landing page nativa. En minutos.",
  accent: "#00E5A0",
  accentAlt: "#00B8D4",
  dark: "#0A0E17",
  darkCard: "#111827",
  darkBorder: "#1E293B",
  gray: "#94A3B8",
  white: "#F1F5F9",
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill={BRAND.accent} opacity="0.15" />
    <path d="M6 10.5L8.5 13L14 7.5" stroke={BRAND.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlatformLogo = ({ name }) => {
  const logos = {
    Elementor: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#92003B" opacity="0.15" />
        <rect x="10" y="9" width="3" height="14" rx="1" fill="#92003B" />
        <rect x="15" y="9" width="7" height="3" rx="1" fill="#92003B" />
        <rect x="15" y="14.5" width="7" height="3" rx="1" fill="#92003B" />
        <rect x="15" y="20" width="7" height="3" rx="1" fill="#92003B" />
      </svg>
    ),
    Gutenberg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0073AA" opacity="0.15" />
        <rect x="8" y="8" width="7" height="7" rx="2" fill="#0073AA" />
        <rect x="17" y="8" width="7" height="7" rx="2" fill="#0073AA" />
        <rect x="8" y="17" width="7" height="7" rx="2" fill="#0073AA" />
        <rect x="17" y="17" width="7" height="7" rx="2" fill="#0073AA" />
      </svg>
    ),
    Odoo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#714B67" opacity="0.15" />
        <circle cx="16" cy="16" r="6" stroke="#714B67" strokeWidth="3" fill="none" />
      </svg>
    ),
    Shopify: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#96BF48" opacity="0.15" />
        <path d="M21 10.5C21 10.5 20.8 10.4 20.6 10.4C20.4 10.4 19.8 10.5 19.8 10.5C19.8 10.5 19.2 9.9 19 9.8C18.9 9.7 18.8 9.7 18.7 9.7L18.3 22.5L23 21.5L21 10.5Z" fill="#96BF48"/>
        <path d="M18.7 9.7C18.6 9.7 18.5 9.7 18.4 9.7C18.4 9.7 17.4 9.4 16.5 9.4C15 9.4 14.3 10.2 14.3 10.2C14.3 10.2 13 11.5 13 14C13 17.5 15.5 18.5 15.5 18.5L18.3 22.5L18.7 9.7Z" fill="#96BF48" opacity="0.7"/>
      </svg>
    ),
  };
  return logos[name] || null;
};

const StepCard = ({ number, title, description, delay }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        background: BRAND.darkCard,
        border: `1px solid ${BRAND.darkBorder}`,
        borderRadius: "16px",
        padding: "32px",
        flex: 1,
        minWidth: "260px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "-20px", right: "-10px",
        fontSize: "120px", fontWeight: 800, color: BRAND.accent,
        opacity: 0.04, lineHeight: 1, fontFamily: "'Space Mono', monospace",
      }}>{number}</div>
      <div style={{
        width: "48px", height: "48px", borderRadius: "12px",
        background: `linear-gradient(135deg, ${BRAND.accent}22, ${BRAND.accentAlt}22)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "20px", fontWeight: 700, color: BRAND.accent,
        fontFamily: "'Space Mono', monospace", marginBottom: "20px",
        border: `1px solid ${BRAND.accent}33`,
      }}>{number}</div>
      <h3 style={{
        fontSize: "20px", fontWeight: 700, color: BRAND.white,
        marginBottom: "12px", fontFamily: "'Satoshi', 'DM Sans', sans-serif",
      }}>{title}</h3>
      <p style={{
        fontSize: "15px", lineHeight: 1.7, color: BRAND.gray,
        fontFamily: "'Satoshi', 'DM Sans', sans-serif",
      }}>{description}</p>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: `1px solid ${BRAND.darkBorder}`,
        padding: "20px 0",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontSize: "17px", fontWeight: 600, color: BRAND.white,
          fontFamily: "'Satoshi', 'DM Sans', sans-serif",
        }}>{question}</span>
        <span style={{
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease", color: BRAND.gray,
          flexShrink: 0, marginLeft: "16px",
        }}><ChevronDown /></span>
      </div>
      <div style={{
        maxHeight: open ? "200px" : "0", overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <p style={{
          fontSize: "15px", lineHeight: 1.7, color: BRAND.gray,
          marginTop: "12px", fontFamily: "'Satoshi', 'DM Sans', sans-serif",
        }}>{answer}</p>
      </div>
    </div>
  );
};

export default function LandForgeLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  const handleSubmit = () => {
    if (email.includes("@")) {
      setSubmitted(true);
    }
  };

  const benefits = [
    { title: "Bloques 100% editables", desc: "Cada sección se importa como bloque nativo. Arrastra, reordena y personaliza como si lo hubieras construido tú." },
    { title: "Contenido generado por IA", desc: "No solo estructura — textos, CTAs y copy persuasivo adaptado al sector de tu cliente." },
    { title: "Ahorra +3 horas por proyecto", desc: "La estructura base lista en minutos. Tú te enfocas en personalizar y cerrar el cliente." },
    { title: "Multi-plataforma real", desc: "Un mismo briefing, exporta al formato nativo de Elementor, Gutenberg u Odoo." },
  ];

  const platforms = [
    { name: "Elementor", desc: "JSON nativo con widgets editables", color: "#92003B" },
    { name: "Gutenberg", desc: "Bloques nativos de WordPress", color: "#0073AA" },
    { name: "Odoo", desc: "QWeb snippets para Website Builder", color: "#714B67" },
    { name: "Shopify", desc: "Secciones Liquid para Theme Editor", color: "#96BF48" },
  ];

  const faqs = [
    { q: "¿El resultado es realmente editable en mi builder?", a: "Sí. No generamos HTML genérico. Cada plataforma recibe su formato nativo: JSON para Elementor, bloques para Gutenberg, QWeb para Odoo y secciones Liquid para Shopify. Lo importas y cada sección es 100% editable visualmente." },
    { q: "¿Necesito saber programar?", a: "No. Respondes una encuesta sobre el negocio de tu cliente, la IA genera todo, y descargas el archivo listo para importar en tu builder." },
    { q: "¿Qué tipo de landing pages genera?", a: "Landing pages de servicios, captación de leads, lanzamiento de productos, páginas de negocio local, portfolios y más. La IA adapta estructura y copy al sector." },
    { q: "¿Puedo usarlo para mis clientes como agencia?", a: "Exactamente para eso está diseñado. Cada landing que generas es tuya para usar con tus clientes sin restricciones." },
    { q: "¿Cuándo estará disponible?", a: "Estamos en fase de acceso anticipado. Únete a la waitlist para ser de los primeros en probarlo y obtener precio especial de lanzamiento." },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "49",
      period: "/mes",
      desc: "Para freelancers y agencias pequeñas",
      features: ["10 landing pages/mes", "Elementor + Gutenberg", "Encuestas personalizadas", "Soporte por email"],
      highlight: false,
    },
    {
      name: "Agency",
      price: "97",
      period: "/mes",
      desc: "Para agencias en crecimiento",
      features: ["Landing pages ilimitadas", "Todas las plataformas (4)", "Secciones premium y variantes", "Soporte prioritario", "Acceso anticipado a nuevos formatos"],
      highlight: true,
    },
    {
      name: "Agency Pro",
      price: "197",
      period: "/mes",
      desc: "Para agencias que escalan",
      features: ["Todo en Agency", "White label (tu marca)", "Plantillas a medida por sector", "Multi-usuario (hasta 5 seats)", "API access + onboarding dedicado"],
      highlight: false,
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: BRAND.dark,
      color: BRAND.white,
      fontFamily: "'Satoshi', 'DM Sans', -apple-system, sans-serif",
      overflowX: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "16px 32px",
        background: `${BRAND.dark}E6`,
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${BRAND.darkBorder}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "10px",
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "18px", color: BRAND.dark,
            fontFamily: "'Space Mono', monospace",
          }}>L</div>
          <span style={{
            fontWeight: 700, fontSize: "20px", letterSpacing: "-0.5px",
            fontFamily: "'Space Mono', monospace",
          }}>{BRAND.name}</span>
        </div>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Cómo funciona", "Plataformas", "Pricing"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s|ó/g, "")}`} style={{
              color: BRAND.gray, textDecoration: "none", fontSize: "14px",
              fontWeight: 500, transition: "color 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.color = BRAND.white}
              onMouseLeave={(e) => e.target.style.color = BRAND.gray}
            >{item}</a>
          ))}
          <a href="#waitlist" style={{
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            color: BRAND.dark, padding: "8px 20px", borderRadius: "8px",
            fontSize: "14px", fontWeight: 700, textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={(e) => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 4px 20px ${BRAND.accent}44`; }}
            onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
          >Acceso anticipado</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "120px 24px 80px",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)",
          width: "600px", height: "600px",
          background: `radial-gradient(circle, ${BRAND.accent}08 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 16px", borderRadius: "100px",
            background: `${BRAND.accent}11`, border: `1px solid ${BRAND.accent}22`,
            marginBottom: "32px", fontSize: "13px", color: BRAND.accent,
            fontWeight: 600,
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: BRAND.accent, animation: "pulse 2s infinite",
            }} />
            Early Access — Plazas limitadas
          </div>
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800,
          lineHeight: 1.05, maxWidth: "800px", letterSpacing: "-2px",
          marginBottom: "24px",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
        }}>
          De encuesta a{" "}
          <span style={{
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>landing page nativa</span>
          .<br />En minutos.
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)", color: BRAND.gray,
          maxWidth: "580px", lineHeight: 1.7, marginBottom: "40px",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
        }}>
          Tu cliente responde una encuesta. La IA genera una landing page profesional.
          Tú la descargas en formato nativo de{" "}
          <strong style={{ color: BRAND.white }}>Elementor, Gutenberg, Odoo o Shopify</strong>{" "}
          — con bloques 100% editables.
        </p>

        <div style={{
          display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
        }}>
          <a href="#waitlist" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            color: BRAND.dark, padding: "14px 32px", borderRadius: "12px",
            fontSize: "16px", fontWeight: 700, textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 8px 30px ${BRAND.accent}33`; }}
            onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
          >
            Únete a la waitlist <ArrowRight />
          </a>
          <a href="#comofunciona" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "transparent", color: BRAND.white,
            padding: "14px 32px", borderRadius: "12px",
            fontSize: "16px", fontWeight: 600, textDecoration: "none",
            border: `1px solid ${BRAND.darkBorder}`,
            transition: "border-color 0.2s",
          }}
            onMouseEnter={(e) => e.target.style.borderColor = BRAND.gray}
            onMouseLeave={(e) => e.target.style.borderColor = BRAND.darkBorder}
          >
            Ver cómo funciona
          </a>
        </div>

        {/* Platform badges */}
        <div style={{
          display: "flex", gap: "16px", marginTop: "64px", flexWrap: "wrap", justifyContent: "center",
          opacity: heroVisible ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
        }}>
          {platforms.map((p) => (
            <div key={p.name} style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "10px 18px", borderRadius: "10px",
              background: `${BRAND.darkCard}`,
              border: `1px solid ${BRAND.darkBorder}`,
            }}>
              <PlatformLogo name={p.name} />
              <span style={{ fontSize: "14px", fontWeight: 600, color: BRAND.gray }}>{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="comofunciona" style={{
        padding: "100px 24px", maxWidth: "1100px", margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            fontSize: "13px", fontWeight: 700, color: BRAND.accent,
            textTransform: "uppercase", letterSpacing: "2px",
            fontFamily: "'Space Mono', monospace",
          }}>Cómo funciona</span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            letterSpacing: "-1px", marginTop: "16px",
          }}>Tres pasos. Cero código.</h2>
        </div>

        <div style={{
          display: "flex", gap: "24px", flexWrap: "wrap",
        }}>
          <StepCard
            number="01"
            title="Completa la encuesta"
            description="Responde preguntas sobre el negocio de tu cliente: sector, servicios, público objetivo, tono y llamada a la acción. 5 minutos máximo."
            delay={0}
          />
          <StepCard
            number="02"
            title="La IA genera tu landing"
            description="Nuestra IA crea la estructura completa con secciones profesionales, copy persuasivo y CTAs optimizados para conversión. Revisas y ajustas antes de exportar."
            delay={0.15}
          />
          <StepCard
            number="03"
            title="Descarga e importa"
            description="Elige tu plataforma y descarga en formato nativo. Importa en tu builder y cada bloque aparece listo para editar visualmente. Sin tocar código."
            delay={0.3}
          />
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="plataformas" style={{
        padding: "100px 24px",
        background: `linear-gradient(180deg, transparent, ${BRAND.accent}04, transparent)`,
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{
              fontSize: "13px", fontWeight: 700, color: BRAND.accent,
              textTransform: "uppercase", letterSpacing: "2px",
              fontFamily: "'Space Mono', monospace",
            }}>Plataformas</span>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
              letterSpacing: "-1px", marginTop: "16px",
            }}>Formato nativo. No HTML genérico.</h2>
            <p style={{
              color: BRAND.gray, fontSize: "17px", maxWidth: "560px",
              margin: "16px auto 0", lineHeight: 1.7,
            }}>
              Cada plataforma recibe su formato específico para que los bloques
              sean 100% editables en el editor visual.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px" }}>
            {platforms.map((p) => (
              <div key={p.name} style={{
                background: BRAND.darkCard,
                border: `1px solid ${BRAND.darkBorder}`,
                borderRadius: "16px", padding: "28px",
                transition: "border-color 0.3s, transform 0.3s",
                cursor: "default",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color + "66"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = BRAND.darkBorder; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <PlatformLogo name={p.name} />
                <h3 style={{
                  fontSize: "22px", fontWeight: 700, marginTop: "20px",
                  marginBottom: "8px",
                }}>{p.name}</h3>
                <p style={{
                  fontSize: "15px", color: BRAND.gray, lineHeight: 1.6,
                  marginBottom: "20px",
                }}>{p.desc}</p>
                <div style={{
                  padding: "12px 16px", borderRadius: "8px",
                  background: `${p.color}11`, border: `1px solid ${p.color}22`,
                  fontSize: "13px", color: p.color,
                  fontFamily: "'Space Mono', monospace", fontWeight: 600,
                }}>
                  {p.name === "Elementor" && "→ Exporta como JSON importable"}
                  {p.name === "Gutenberg" && "→ Exporta como bloques nativos WP"}
                  {p.name === "Odoo" && "→ Exporta como QWeb snippets"}
                  {p.name === "Shopify" && "→ Exporta como secciones Liquid"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{
        padding: "100px 24px", maxWidth: "900px", margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            fontSize: "13px", fontWeight: 700, color: BRAND.accent,
            textTransform: "uppercase", letterSpacing: "2px",
            fontFamily: "'Space Mono', monospace",
          }}>Para agencias</span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            letterSpacing: "-1px", marginTop: "16px",
          }}>Deja de montar estructuras desde cero</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "20px" }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              display: "flex", gap: "16px", padding: "24px",
              borderRadius: "12px", border: `1px solid ${BRAND.darkBorder}`,
              background: BRAND.darkCard,
              transition: "border-color 0.3s",
            }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${BRAND.accent}33`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = BRAND.darkBorder}
            >
              <div style={{ flexShrink: 0, marginTop: "2px" }}><CheckIcon /></div>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>{b.title}</h4>
                <p style={{ fontSize: "14px", color: BRAND.gray, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{
        padding: "100px 24px",
        background: `linear-gradient(180deg, transparent, ${BRAND.accent}04, transparent)`,
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{
              fontSize: "13px", fontWeight: 700, color: BRAND.accent,
              textTransform: "uppercase", letterSpacing: "2px",
              fontFamily: "'Space Mono', monospace",
            }}>Pricing</span>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
              letterSpacing: "-1px", marginTop: "16px",
            }}>Simple. Sin sorpresas.</h2>
            <p style={{
              color: BRAND.gray, fontSize: "14px", marginTop: "12px",
              fontFamily: "'Space Mono', monospace",
            }}>* Precios de lanzamiento — sujetos a cambios</p>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
            {pricing.map((plan) => (
              <div key={plan.name} style={{
                background: BRAND.darkCard,
                border: `1px solid ${plan.highlight ? BRAND.accent + "44" : BRAND.darkBorder}`,
                borderRadius: "16px", padding: "40px 32px",
                flex: "1 1 280px", maxWidth: "340px",
                position: "relative", overflow: "hidden",
                boxShadow: plan.highlight ? `0 0 60px ${BRAND.accent}11` : "none",
              }}>
                {plan.highlight && (
                  <div style={{
                    position: "absolute", top: "16px", right: "16px",
                    background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                    color: BRAND.dark, fontSize: "11px", fontWeight: 800,
                    padding: "4px 12px", borderRadius: "100px",
                    textTransform: "uppercase", letterSpacing: "1px",
                  }}>Popular</div>
                )}
                <p style={{ fontSize: "14px", color: BRAND.gray, fontWeight: 600 }}>{plan.name}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", margin: "16px 0 8px" }}>
                  <span style={{
                    fontSize: plan.price === "Hablemos" ? "32px" : "48px",
                    fontWeight: 800, fontFamily: "'Space Mono', monospace",
                  }}>
                    {plan.price !== "Hablemos" && "€"}{plan.price}
                  </span>
                  {plan.period && <span style={{ color: BRAND.gray, fontSize: "15px" }}>{plan.period}</span>}
                </div>
                <p style={{ fontSize: "14px", color: BRAND.gray, marginBottom: "24px" }}>{plan.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <CheckIcon />
                      <span style={{ fontSize: "14px", color: BRAND.gray }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#waitlist" style={{
                  display: "block", textAlign: "center", marginTop: "28px",
                  padding: "12px 24px", borderRadius: "10px",
                  background: plan.highlight
                    ? `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`
                    : "transparent",
                  color: plan.highlight ? BRAND.dark : BRAND.white,
                  border: plan.highlight ? "none" : `1px solid ${BRAND.darkBorder}`,
                  fontWeight: 700, fontSize: "15px", textDecoration: "none",
                  transition: "transform 0.2s",
                }}
                  onMouseEnter={(e) => e.target.style.transform = "translateY(-1px)"}
                  onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
                >
                  Acceder a la waitlist
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: "100px 24px", maxWidth: "700px", margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800,
            letterSpacing: "-1px",
          }}>Preguntas frecuentes</h2>
        </div>
        {faqs.map((f, i) => (
          <FAQ key={i} question={f.q} answer={f.a} />
        ))}
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" style={{
        padding: "100px 24px",
      }}>
        <div style={{
          maxWidth: "640px", margin: "0 auto", textAlign: "center",
          background: BRAND.darkCard,
          border: `1px solid ${BRAND.darkBorder}`,
          borderRadius: "24px", padding: "64px 40px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-100px", right: "-100px",
            width: "300px", height: "300px",
            background: `radial-gradient(circle, ${BRAND.accent}0A, transparent 70%)`,
            pointerEvents: "none",
          }} />

          {!submitted ? (
            <>
              <h2 style={{
                fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800,
                letterSpacing: "-1px", marginBottom: "16px",
              }}>
                Sé de los primeros en probarlo
              </h2>
              <p style={{
                color: BRAND.gray, fontSize: "16px", lineHeight: 1.7,
                marginBottom: "32px",
              }}>
                Únete a la waitlist y accede al precio de lanzamiento cuando lancemos.
                Sin spam, solo una notificación cuando esté listo.
              </p>
              <div style={{
                display: "flex", gap: "10px", maxWidth: "440px",
                margin: "0 auto", flexWrap: "wrap", justifyContent: "center",
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  style={{
                    flex: 1, minWidth: "240px", padding: "14px 18px",
                    borderRadius: "10px", border: `1px solid ${BRAND.darkBorder}`,
                    background: BRAND.dark, color: BRAND.white,
                    fontSize: "15px", outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = BRAND.accent}
                  onBlur={(e) => e.target.style.borderColor = BRAND.darkBorder}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                    color: BRAND.dark, padding: "14px 28px",
                    borderRadius: "10px", border: "none",
                    fontSize: "15px", fontWeight: 700, cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 4px 20px ${BRAND.accent}44`; }}
                  onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
                >
                  Quiero acceso
                </button>
              </div>
            </>
          ) : (
            <div>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                background: `${BRAND.accent}15`, display: "flex",
                alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10.5L8 14.5L16 6.5" stroke={BRAND.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>
                ¡Estás dentro!
              </h3>
              <p style={{ color: BRAND.gray, fontSize: "16px", lineHeight: 1.7 }}>
                Te avisamos en cuanto esté listo. Prepárate para dejar de montar landing pages desde cero.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 24px",
        borderTop: `1px solid ${BRAND.darkBorder}`,
        textAlign: "center",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "8px", marginBottom: "12px",
        }}>
          <div style={{
            width: "24px", height: "24px", borderRadius: "6px",
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "12px", color: BRAND.dark,
            fontFamily: "'Space Mono', monospace",
          }}>L</div>
          <span style={{
            fontWeight: 700, fontSize: "15px",
            fontFamily: "'Space Mono', monospace",
          }}>{BRAND.name}</span>
        </div>
        <p style={{ color: BRAND.gray, fontSize: "13px" }}>
          © 2026 {BRAND.name}. Creado para agencias que valoran su tiempo.
        </p>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection {
          background: ${BRAND.accent}33;
          color: ${BRAND.white};
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
