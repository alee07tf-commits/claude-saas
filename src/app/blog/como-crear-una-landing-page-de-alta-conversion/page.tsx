import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://landforge.digital";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo Crear una Landing Page de Alta Conversión en 2026 (Guía Completa)",
  description:
    "Guía paso a paso para crear landing pages de alta conversión en 2026. Estructura, copywriting, CTA, velocidad y cómo hacerlo con IA en 30 segundos.",
  url: `${SITE_URL}/blog/como-crear-una-landing-page-de-alta-conversion`,
  datePublished: "2026-01-15",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Organization",
    name: "LandForge",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "LandForge",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/como-crear-una-landing-page-de-alta-conversion`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es una landing page de alta conversión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una landing page de alta conversión es una página web diseñada con un único objetivo: conseguir que el visitante realice una acción específica (registro, compra, llamada). Se diferencia de otras páginas por su foco absoluto en un CTA, sin distracciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo lleva crear una landing page de alta conversión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con herramientas tradicionales (diseñador + desarrollo), entre 3 y 10 días. Con LandForge y su generador de landing pages con IA, puedes tener una landing page completa y optimizada lista en 30 segundos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la tasa de conversión media de una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La tasa de conversión media de una landing page es del 2-5%. Una landing page optimizada puede alcanzar el 10-15%. Los factores clave son: propuesta de valor clara, CTA visible, prueba social y velocidad de carga.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué elementos son imprescindibles en una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los 6 elementos imprescindibles son: 1) Headline con beneficio claro, 2) Subheadline explicativo, 3) Imagen o video del producto, 4) Lista de beneficios, 5) Prueba social (testimonios o números), 6) CTA único y visible.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Cómo Crear una Landing Page de Alta Conversión en 2026 (Guía Completa) | LandForge",
  description:
    "Guía completa para crear una landing page de alta conversión en 2026: estructura, copywriting, CTA, velocidad y herramientas IA. Paso a paso con ejemplos reales.",
  alternates: {
    canonical: `${SITE_URL}/blog/como-crear-una-landing-page-de-alta-conversion`,
  },
  openGraph: {
    title: "Cómo Crear una Landing Page de Alta Conversión en 2026",
    description:
      "Todo lo que necesitas saber para crear landing pages que conviertan. Estructura, copywriting, CTA, velocidad y cómo hacerlo con IA en 30 segundos.",
    url: `${SITE_URL}/blog/como-crear-una-landing-page-de-alta-conversion`,
    siteName: "LandForge",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo crear una landing page de alta conversión en 2026",
    description: "Guía completa con estructura, copy, CTA y herramientas IA. Paso a paso.",
  },
};

export default function LandingPageAltaConversionPage() {
  return (
    <>
      <Script
        id="schema-article-landing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq-landing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero del artículo */}
        <section
          style={{
            background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 100%)",
            padding: "80px 24px 60px",
            color: "#fff",
          }}
          aria-label="Artículo: cómo crear una landing page de alta conversión"
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{ fontSize: "0.8rem", color: "#9CA3AF", marginBottom: 24 }}
            >
              <Link href="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>
                LandForge
              </Link>
              {" › "}
              <Link href="/blog" style={{ color: "#9CA3AF", textDecoration: "none" }}>
                Blog
              </Link>
              {" › "}
              <span style={{ color: "#E0AAFF" }}>Cómo crear una landing page de alta conversión</span>
            </nav>

            <div
              style={{
                display: "inline-block",
                background: "#9D4EDD22",
                border: "1px solid #9D4EDD66",
                color: "#E0AAFF",
                borderRadius: 100,
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 20,
                letterSpacing: "0.04em",
              }}
            >
              GUÍA — LANDING PAGES
            </div>

            <h1
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: 20,
                color: "#fff",
              }}
            >
              Cómo crear una landing page de alta conversión en 2026 (guía completa)
            </h1>

            <p style={{ color: "#C4B5FD", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 24 }}>
              Una landing page sin estructura correcta convierte al 1% o menos. Con la
              estructura adecuada puedes llegar al 10-15%. En esta guía te explico exactamente
              qué elementos necesitas, en qué orden, y cómo hacerlo en 30 segundos con IA.
            </p>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", fontSize: "0.85rem", color: "#9CA3AF" }}>
              <span>📅 Enero 2026</span>
              <span>⏱️ 8 min de lectura</span>
              <span>✍️ LandForge</span>
            </div>
          </div>
        </section>

        {/* Índice */}
        <section
          style={{ padding: "48px 24px", background: "#F3E8FF" }}
          aria-label="Índice del artículo"
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#7B2CBF",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 16,
              }}
            >
              En este artículo
            </h2>
            <ol
              style={{
                paddingLeft: 20,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {[
                ["#que-es", "¿Qué es una landing page de alta conversión?"],
                ["#estructura", "La estructura perfecta de una landing page"],
                ["#copywriting", "Copywriting que convierte: cómo escribir tu landing"],
                ["#cta", "El CTA perfecto: claves para que hagan clic"],
                ["#velocidad", "Velocidad y técnica: el SEO que multiplica conversiones"],
                ["#herramientas", "Herramientas para crear landing pages en 2026"],
                ["#ia", "Cómo crear una landing page con IA en 30 segundos"],
                ["#faq", "Preguntas frecuentes"],
              ].map(([href, label]) => (
                <li key={href as string}>
                  <a
                    href={href as string}
                    style={{ color: "#7B2CBF", textDecoration: "none", fontSize: "0.95rem" }}
                  >
                    {label as string}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contenido */}
        <article
          style={{ padding: "60px 24px", background: "#FAFAFA" }}
          itemScope
          itemType="https://schema.org/Article"
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>

            {/* Sección 1 */}
            <section id="que-es" aria-label="Qué es una landing page de alta conversión">
              <h2 style={h2Style}>¿Qué es una landing page de alta conversión?</h2>
              <p style={pStyle}>
                Una <strong>landing page de alta conversión</strong> es una página web con un
                único objetivo: conseguir que el visitante realice una acción concreta. Puede
                ser registrarse, comprar, solicitar una demo o dejar sus datos.
              </p>
              <p style={pStyle}>
                A diferencia de una web corporativa con múltiples secciones y menús, una landing
                page de alta conversión elimina cualquier elemento que distraiga al visitante de
                ese único objetivo.
              </p>
              <div style={infoBoxStyle}>
                <strong>Dato clave:</strong> La tasa de conversión media de una landing page es
                del 2-5%. Una landing page bien optimizada puede superar el 10%. La diferencia
                está casi siempre en la estructura y el copy.
              </div>
            </section>

            {/* Sección 2 */}
            <section id="estructura" aria-label="Estructura de una landing page de alta conversión">
              <h2 style={h2Style}>La estructura perfecta de una landing page</h2>
              <p style={pStyle}>
                Después de analizar miles de landing pages que convierten, la estructura ganadora
                siempre incluye estos 6 bloques en este orden:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
                {[
                  {
                    num: "1",
                    title: "Headline (H1) — El 80% del trabajo",
                    desc: "El titular debe comunicar el beneficio principal en menos de 10 palabras. No describes el producto. Describes lo que el cliente conseguirá. Ejemplo: \"Genera landing pages que venden solas. En 30 segundos.\"",
                  },
                  {
                    num: "2",
                    title: "Subheadline — La promesa ampliada",
                    desc: "Una o dos frases que amplían el headline y eliminan la principal objeción. Aquí puedes mencionar el mecanismo (\"con IA\"), el tiempo (\"sin esperas\") o el público (\"para agencias\").",
                  },
                  {
                    num: "3",
                    title: "Hero visual — Muestra, no cuentes",
                    desc: "Una imagen o video del producto en acción vale más que mil palabras. Debe mostrar el resultado final, no el proceso. Un GIF de 10 segundos del producto funcionando convierte un 20-30% más.",
                  },
                  {
                    num: "4",
                    title: "Beneficios — Los 3-5 puntos clave",
                    desc: "Lista los beneficios (no características) con iconos. Cada bullet debe responder a la pregunta implícita del usuario: \"¿qué gano yo con esto?\"",
                  },
                  {
                    num: "5",
                    title: "Prueba social — Credibilidad inmediata",
                    desc: "Testimonios reales con foto, nombre y empresa, logos de clientes o números concretos (\"200+ agencias\", \"4.9/5 estrellas\"). Sin prueba social, el visitante duda.",
                  },
                  {
                    num: "6",
                    title: "CTA — Una sola acción posible",
                    desc: "Un solo botón con una sola acción. El CTA debe repetirse 2-3 veces en la página (hero, mitad, final). El texto del botón debe describir la acción y el beneficio: \"Generar mi primera landing gratis\".",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      background: "#fff",
                      border: "1px solid #E0AAFF",
                      borderRadius: 12,
                      padding: "20px 24px",
                      display: "flex",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "#9D4EDD",
                        color: "#fff",
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      {item.num}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: "#1A1A2E", marginBottom: 6, fontSize: "1rem" }}>
                        {item.title}
                      </h3>
                      <p style={{ color: "#4B5563", fontSize: "0.9rem", lineHeight: 1.7 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sección 3 */}
            <section id="copywriting" aria-label="Copywriting para landing pages de alta conversión">
              <h2 style={h2Style}>Copywriting que convierte: cómo escribir tu landing</h2>
              <p style={pStyle}>
                El copywriting es el factor que más influye en la conversión de una landing page.
                Estos son los principios que aplican las landing pages que convierten más:
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <strong>Habla del cliente, no del producto:</strong> "Tú consigues X en Y tiempo"
                  en lugar de "Nuestro producto hace X".
                </li>
                <li style={liStyle}>
                  <strong>Especificidad:</strong> "En 30 segundos" convierte más que "en minutos".
                  "200+ agencias" convierte más que "muchas agencias".
                </li>
                <li style={liStyle}>
                  <strong>Elimina el riesgo:</strong> "Sin tarjeta de crédito", "Sin permanencia",
                  "Cancela cuando quieras" eliminan las objeciones antes de que aparezcan.
                </li>
                <li style={liStyle}>
                  <strong>Urgencia genuina:</strong> No uses falsas urgencias. Usa urgencia real
                  (precio especial de lanzamiento, plazas limitadas) o urgencia de oportunidad
                  ("cada día sin esto es un día perdiendo leads").
                </li>
                <li style={liStyle}>
                  <strong>Lenguaje de tu cliente:</strong> Usa las palabras exactas que usan tus
                  clientes para describir su problema. Extráelas de reviews, entrevistas o soporte.
                </li>
              </ul>
            </section>

            {/* Sección 4 */}
            <section id="cta" aria-label="Cómo crear el CTA perfecto">
              <h2 style={h2Style}>El CTA perfecto: claves para que hagan clic</h2>
              <p style={pStyle}>
                El CTA (Call to Action) es el elemento que convierte visitantes en leads o
                clientes. Estos son los errores más comunes y cómo evitarlos:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    background: "#FEF2F2",
                    border: "1px solid #FECACA",
                    borderRadius: 12,
                    padding: "20px",
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#DC2626", marginBottom: 12 }}>
                    ❌ CTAs que no convierten
                  </div>
                  {["Enviar", "Más información", "Haz clic aquí", "Contactar", "Suscribirse"].map(
                    (item) => (
                      <div
                        key={item}
                        style={{ color: "#991B1B", fontSize: "0.9rem", marginBottom: 6 }}
                      >
                        • {item}
                      </div>
                    )
                  )}
                </div>
                <div
                  style={{
                    background: "#F0FDF4",
                    border: "1px solid #BBF7D0",
                    borderRadius: 12,
                    padding: "20px",
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#15803D", marginBottom: 12 }}>
                    ✅ CTAs que sí convierten
                  </div>
                  {[
                    "Generar mi primera landing gratis",
                    "Quiero más leads ahora",
                    "Probar 14 días sin riesgo",
                    "Empezar gratis, sin tarjeta",
                    "Ver cómo funciona →",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{ color: "#166534", fontSize: "0.9rem", marginBottom: 6 }}
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sección 5 */}
            <section id="velocidad" aria-label="Velocidad y SEO para landing pages">
              <h2 style={h2Style}>Velocidad y técnica: el SEO que multiplica conversiones</h2>
              <p style={pStyle}>
                Una landing page que tarda más de 3 segundos en cargar pierde el 40% de los
                visitantes antes de que vean una sola palabra. Estos son los factores técnicos
                más importantes:
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <strong>LCP (Largest Contentful Paint) &lt; 2.5s:</strong> La imagen o texto
                  principal debe aparecer en menos de 2.5 segundos. Usa imágenes WebP y
                  preload de recursos críticos.
                </li>
                <li style={liStyle}>
                  <strong>CLS (Cumulative Layout Shift) &lt; 0.1:</strong> Los elementos no
                  deben moverse mientras carga la página. Reserva espacio para imágenes con
                  width y height definidos.
                </li>
                <li style={liStyle}>
                  <strong>HTTPS obligatorio:</strong> Sin certificado SSL, los navegadores
                  muestran advertencia de seguridad que destruye la conversión.
                </li>
                <li style={liStyle}>
                  <strong>Meta Title y Description optimizados:</strong> El 80% del tráfico
                  orgánico entra desde resultados de búsqueda. El título debe incluir la
                  keyword principal en los primeros 60 caracteres.
                </li>
                <li style={liStyle}>
                  <strong>Schema.org:</strong> Añade structured data para aparecer con rich
                  snippets en Google (estrellas, FAQ, precios) y aumentar el CTR orgánico.
                </li>
              </ul>
            </section>

            {/* Sección 6 */}
            <section id="herramientas" aria-label="Herramientas para crear landing pages en 2026">
              <h2 style={h2Style}>Herramientas para crear landing pages en 2026</h2>
              <p style={pStyle}>
                El mercado de landing page builders ha cambiado radicalmente con la IA. Estas son
                las principales opciones:
              </p>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #E0AAFF",
                  borderRadius: 16,
                  overflow: "hidden",
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                    background: "#1A1A2E",
                    padding: "14px 20px",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                  }}
                >
                  <span>Herramienta</span>
                  <span style={{ textAlign: "center" }}>Precio</span>
                  <span style={{ textAlign: "center" }}>IA generativa</span>
                  <span style={{ textAlign: "center" }}>Chatbot ventas</span>
                </div>
                {[
                  ["LandForge ⭐ Recomendado", "€0-€97/mes", "✅ Completa", "✅ Incluido"],
                  ["Unbounce", "$99-$199/mes", "⚠️ Solo copy", "❌ No"],
                  ["Instapage", "$199/mes", "⚠️ Básica", "❌ No"],
                  ["Leadpages", "$49/mes", "❌ No", "❌ No"],
                  ["Webflow", "$23-$39/mes", "❌ No", "❌ No"],
                ].map(([name, price, ai, chat], idx) => (
                  <div
                    key={name as string}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                      padding: "12px 20px",
                      borderTop: "1px solid #F3E8FF",
                      background: (name as string).includes("LandForge")
                        ? "#F3E8FF"
                        : idx % 2 === 0
                        ? "#FAFAFA"
                        : "#fff",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: (name as string).includes("LandForge") ? 800 : 600,
                        color: "#1A1A2E",
                      }}
                    >
                      {name}
                    </span>
                    <span style={{ textAlign: "center", fontSize: "0.8rem", color: "#6B7280" }}>
                      {price}
                    </span>
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "0.8rem",
                        color: (ai as string).startsWith("✅") ? "#10B981" : "#9CA3AF",
                      }}
                    >
                      {ai}
                    </span>
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "0.8rem",
                        color: (chat as string).startsWith("✅") ? "#10B981" : "#9CA3AF",
                      }}
                    >
                      {chat}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Sección 7 — CTA interno */}
            <section id="ia" aria-label="Crear landing page con IA en 30 segundos">
              <h2 style={h2Style}>Cómo crear una landing page con IA en 30 segundos</h2>
              <p style={pStyle}>
                La forma más rápida de crear una landing page de alta conversión en 2026 es
                usar un generador de landing pages con IA como LandForge. El proceso es simple:
              </p>
              <ol style={{ ...ulStyle, paddingLeft: 24 }}>
                <li style={{ ...liStyle, marginBottom: 16 }}>
                  <strong>Describe tu oferta en lenguaje natural:</strong> "Landing page para
                  clínica dental en Madrid especializada en ortodoncia invisible, público
                  adultos 25-45 años, precio desde 1.800€"
                </li>
                <li style={{ ...liStyle, marginBottom: 16 }}>
                  <strong>LandForge genera la landing completa:</strong> Headline, subheadline,
                  secciones de beneficios, prueba social, FAQ y CTA — todo optimizado y con
                  diseño responsive.
                </li>
                <li style={{ ...liStyle, marginBottom: 16 }}>
                  <strong>Forgi Editor ajusta los detalles:</strong> Si quieres cambiar algo,
                  díselo a Forgi en lenguaje natural. "Cambia el CTA por algo más urgente" →
                  listo en segundos.
                </li>
                <li style={{ ...liStyle, marginBottom: 16 }}>
                  <strong>Forgi Chatbot activa el asistente de ventas:</strong> Automáticamente
                  se activa el chatbot de ventas que responde dudas y captura leads 24/7.
                </li>
                <li style={liStyle}>
                  <strong>Publicas en tu dominio:</strong> Con un clic, la landing está
                  publicada en tu dominio propio y lista para recibir tráfico.
                </li>
              </ol>

              <div
                style={{
                  background: "linear-gradient(135deg, #9D4EDD 0%, #7B2CBF 100%)",
                  borderRadius: 16,
                  padding: "32px",
                  textAlign: "center",
                  marginTop: 32,
                  marginBottom: 48,
                }}
              >
                <p style={{ color: "#E0AAFF", marginBottom: 16, fontSize: "0.95rem" }}>
                  Genera tu primera landing page de alta conversión con IA
                </p>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    marginBottom: 20,
                  }}
                >
                  Prueba LandForge gratis — sin tarjeta de crédito
                </h3>
                <Link
                  href="/register"
                  style={{
                    background: "#fff",
                    color: "#7B2CBF",
                    padding: "14px 36px",
                    borderRadius: 10,
                    fontWeight: 800,
                    fontSize: 16,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Crear cuenta gratis →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" aria-label="Preguntas frecuentes sobre landing pages de alta conversión">
              <h2 style={h2Style}>Preguntas frecuentes sobre landing pages de alta conversión</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  {
                    q: "¿Qué es una landing page de alta conversión?",
                    a: "Una landing page de alta conversión es una página diseñada con un único objetivo: conseguir que el visitante realice una acción específica (registro, compra, llamada). Se diferencia por eliminar todas las distracciones y focalizarse en un solo CTA.",
                  },
                  {
                    q: "¿Cuánto tiempo lleva crear una landing page de alta conversión?",
                    a: "Con herramientas tradicionales (diseñador + desarrollo), entre 3 y 10 días. Con LandForge y su generador IA, tienes una landing page completa y optimizada lista en 30 segundos.",
                  },
                  {
                    q: "¿Cuál es la tasa de conversión media de una landing page?",
                    a: "La tasa de conversión media es del 2-5%. Una landing page optimizada puede alcanzar el 10-15%. Los factores clave son: propuesta de valor clara, CTA visible, prueba social y velocidad de carga.",
                  },
                  {
                    q: "¿Qué elementos son imprescindibles en una landing page?",
                    a: "Los 6 elementos imprescindibles son: 1) Headline con beneficio claro, 2) Subheadline explicativo, 3) Hero visual del producto, 4) Lista de beneficios, 5) Prueba social (testimonios o números), 6) CTA único y visible.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    style={{
                      background: "#fff",
                      border: "1px solid #E0AAFF",
                      borderRadius: 12,
                      padding: "20px 24px",
                      cursor: "pointer",
                    }}
                  >
                    <summary
                      style={{ fontWeight: 700, color: "#1A1A2E", fontSize: "1rem", listStyle: "none" }}
                    >
                      {item.q}
                    </summary>
                    <p
                      style={{
                        marginTop: 12,
                        color: "#6B7280",
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Artículos relacionados */}
            <section style={{ marginTop: 60 }} aria-label="Artículos relacionados">
              <h2
                style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 20 }}
              >
                Sigue aprendiendo
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    href: "/features/forgi-editor",
                    label: "Forgi Editor: edita tu landing page con IA por bloques",
                  },
                  {
                    href: "/features/forgi-chatbot",
                    label: "Forgi Chatbot: asistente de ventas IA 24/7 en tu landing",
                  },
                  {
                    href: "/comparar/landforge-vs-unbounce",
                    label: "LandForge vs Unbounce: comparativa 2026 para agencias",
                  },
                  {
                    href: "/comparar/alternativas-leadpages",
                    label: "Las 5 mejores alternativas a Leadpages en 2026",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      color: "#9D4EDD",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >
                    <span>→</span> {item.label}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

// Estilos reutilizables del artículo
const h2Style: React.CSSProperties = {
  fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
  fontWeight: 800,
  color: "#1A1A2E",
  marginTop: 48,
  marginBottom: 16,
  paddingTop: 8,
  borderTop: "2px solid #F3E8FF",
};

const pStyle: React.CSSProperties = {
  color: "#374151",
  lineHeight: 1.8,
  fontSize: "1rem",
  marginBottom: 20,
};

const ulStyle: React.CSSProperties = {
  paddingLeft: 0,
  listStyle: "none",
  marginBottom: 32,
};

const liStyle: React.CSSProperties = {
  color: "#374151",
  lineHeight: 1.7,
  fontSize: "0.98rem",
  marginBottom: 12,
  paddingLeft: 20,
  position: "relative",
};

const infoBoxStyle: React.CSSProperties = {
  background: "#F3E8FF",
  border: "1px solid #E0AAFF",
  borderLeft: "4px solid #9D4EDD",
  borderRadius: 8,
  padding: "16px 20px",
  color: "#4B5563",
  fontSize: "0.95rem",
  lineHeight: 1.7,
  marginBottom: 32,
};
