import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Alternativas a Instapage con IA (2026)",
  description:
    "Alternativas a Instapage más baratas y con IA. Compara LandForge, Unbounce, Leadpages, Carrd y Webflow. Precios, features y veredicto.",
  keywords: [
    "alternativas a instapage",
    "alternativa instapage barata",
    "instapage alternativas 2026",
    "mejor alternativa instapage ia",
    "landing page builder alternativa instapage",
  ],
  alternates: {
    canonical: "https://landforge.digital/comparar/alternativas-instapage",
  },
  openGraph: {
    title: "5 Alternativas a Instapage con IA (2026) | LandForge",
    description:
      "Alternativas a Instapage más baratas y con IA. Compara LandForge, Unbounce, Leadpages, Carrd y Webflow. Precios, features y veredicto.",
    url: "https://landforge.digital/comparar/alternativas-instapage",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 Alternativas a Instapage con IA en 2026: Comparativa Completa",
  description:
    "Análisis de las 5 mejores alternativas a Instapage para crear landing pages con IA. Precios, funcionalidades y veredicto para agencias y freelancers.",
  author: {
    "@type": "Person",
    name: "Alejandro Bethencourt",
    url: "https://landforge.digital/sobre-nosotros",
    jobTitle: "Fundador de LandForge",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es la mejor alternativa a Instapage en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge es la mejor alternativa a Instapage en 2026 para quienes buscan velocidad y precio. Genera landing pages con IA en 30 segundos, incluye chatbot de ventas Forgi sin coste extra y su plan gratuito permite crear 1 landing sin tarjeta de crédito. Instapage empieza en 79$/mes sin IA generativa ni chatbot.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué Instapage es tan caro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instapage se posiciona como herramienta enterprise con funcionalidades avanzadas de personalización y A/B testing. Su plan Build cuesta 79$/mes (facturado anual) y el plan Convert requiere presupuesto personalizado. Para la mayoría de agencias y freelancers, esas funcionalidades avanzadas no justifican el precio cuando alternativas como LandForge ofrecen generación con IA desde 0 euros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo migrar mis landing pages de Instapage a otra herramienta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instapage no ofrece exportación directa de landing pages a otras plataformas. La migración implica recrear las páginas en la nueva herramienta. Con LandForge, la IA puede generar una landing equivalente en 30 segundos a partir de una descripción de tu negocio, lo que hace que la transición sea rápida y sencilla.",
      },
    },
    {
      "@type": "Question",
      name: "¿Alguna alternativa a Instapage incluye chatbot de ventas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De las 5 alternativas analizadas, solo LandForge incluye un chatbot de ventas con IA (Forgi) integrado de serie y sin coste adicional. El resto de alternativas (Unbounce, Leadpages, Carrd, Webflow) requieren herramientas externas como Drift o Intercom para añadir chat en la landing page.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://landforge.digital",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Comparativas",
      item: "https://landforge.digital/comparar",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Alternativas a Instapage",
      item: "https://landforge.digital/comparar/alternativas-instapage",
    },
  ],
};

export default function AlternativasInstapage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-16 text-center flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Comparativa — MOFU
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl tracking-tight leading-tight mb-6">
              5 Alternativas a Instapage con IA{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Más Baratas y Potentes (2026)
              </span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-8">
              Instapage fue pionero en landing pages de alta conversión, pero en
              2026 su precio sigue siendo prohibitivo para la mayoría de agencias
              y freelancers. Si buscas alternativas a Instapage que incluyan
              inteligencia artificial, chatbot de ventas y un precio justo, este
              análisis es para ti.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/register"
                className="px-7 py-3.5 rounded-xl font-bold text-white transition hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                }}
              >
                Probar LandForge gratis →
              </Link>
              <Link
                href="#tabla"
                className="px-7 py-3.5 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold hover:border-[#9D4EDD] transition"
              >
                Ver tabla comparativa
              </Link>
            </div>
          </section>

          {/* ── 2. POR QUÉ BUSCAR ALTERNATIVA ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                ¿Por qué buscar una alternativa a Instapage en 2026?
              </h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                Instapage es una herramienta sólida, pero tiene tres problemas
                recurrentes que empujan a miles de usuarios a buscar
                alternativas cada mes.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "Precio excesivo para agencias pequeñas",
                  text: "El plan Build de Instapage cuesta 79$/mes facturado anualmente y el plan Convert requiere contactar con ventas. Para una agencia que gestiona 5-10 clientes pequeños, ese coste se come el margen por completo. No hay plan gratuito para probar.",
                },
                {
                  icon: "🐢",
                  title: "Diseño manual que consume horas",
                  text: "Instapage sigue siendo un editor visual de bloques. Crear una landing page profesional requiere entre 3 y 8 horas de trabajo de diseño. En un mercado donde la IA genera páginas en segundos, ese flujo de trabajo es insostenible.",
                },
                {
                  icon: "🤖",
                  title: "Sin chatbot de ventas integrado",
                  text: "Instapage no incluye un chatbot de ventas nativo. Si quieres atender visitantes 24/7 y cualificar leads automáticamente, necesitas contratar Drift, Intercom o Tidio aparte, sumando 50-100$/mes extra al coste total.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3. TABLA COMPARATIVA RÁPIDA ── */}
          <section id="tabla" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">
                  Tabla comparativa: 5 alternativas a Instapage de un vistazo
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Comparamos precio, velocidad de creación, IA, chatbot y
                  facilidad de uso de las 5 alternativas más relevantes a
                  Instapage en 2026.
                </p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
                <table className="w-full text-left bg-white">
                  <thead>
                    <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                      <th className="p-5 font-bold text-[#6B7280] text-sm">
                        Herramienta
                      </th>
                      <th className="p-5 font-bold text-[#6B7280] text-sm">
                        Precio desde
                      </th>
                      <th className="p-5 font-bold text-[#6B7280] text-sm">
                        IA Generativa
                      </th>
                      <th className="p-5 font-bold text-[#6B7280] text-sm">
                        Chatbot IA
                      </th>
                      <th className="p-5 font-bold text-[#6B7280] text-sm">
                        Velocidad
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {[
                      [
                        "LandForge",
                        "0€/mes",
                        "Completa",
                        "Forgi (incluido)",
                        "30 segundos",
                        true,
                      ],
                      [
                        "Unbounce",
                        "99$/mes",
                        "Smart Builder",
                        "No",
                        "3-6 horas",
                        false,
                      ],
                      [
                        "Leadpages",
                        "49$/mes",
                        "Parcial",
                        "No",
                        "1-3 horas",
                        false,
                      ],
                      [
                        "Carrd",
                        "19$/año",
                        "No",
                        "No",
                        "30-60 min",
                        false,
                      ],
                      [
                        "Webflow",
                        "14$/mes",
                        "No nativa",
                        "No",
                        "4-10 horas",
                        false,
                      ],
                    ].map(([name, price, ai, chat, speed, highlight]) => (
                      <tr
                        key={name as string}
                        className={
                          highlight
                            ? "bg-[#FAF5FF] hover:bg-[#F3E8FF]"
                            : "hover:bg-gray-50"
                        }
                      >
                        <td
                          className={`p-5 font-semibold ${highlight ? "text-[#9D4EDD]" : "text-[#1A1A2E]"}`}
                        >
                          {name as string}
                        </td>
                        <td className="p-5 text-[#1A1A2E]">
                          {price as string}
                        </td>
                        <td className="p-5 text-[#1A1A2E]">{ai as string}</td>
                        <td className="p-5 text-[#1A1A2E]">
                          {chat as string}
                        </td>
                        <td className="p-5 text-[#1A1A2E]">
                          {speed as string}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── 4. ANÁLISIS DE CADA ALTERNATIVA ── */}
          <section className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">
                Análisis detallado de cada alternativa a Instapage
              </h2>

              {/* 4.1 LandForge */}
              <div className="bg-white rounded-2xl border-2 border-[#9D4EDD] p-8 md:p-10 mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#9D4EDD] px-3 py-1 rounded-full">
                    #1 Recomendada
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-[#9D4EDD]">
                  1. LandForge — La alternativa con IA más completa
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  LandForge es la alternativa a Instapage más potente si lo que
                  buscas es velocidad y automatización. Mientras Instapage te
                  obliga a diseñar cada bloque manualmente, LandForge genera una
                  landing page completa en 30 segundos usando inteligencia
                  artificial. Solo necesitas describir tu negocio, producto o
                  servicio y la IA crea el copy, la estructura, los CTAs y hasta
                  el{" "}
                  <Link
                    href="/features/forgi-chatbot"
                    className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]"
                  >
                    chatbot Forgi
                  </Link>{" "}
                  que atiende visitantes 24/7 y cualifica leads
                  automáticamente.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  El{" "}
                  <Link
                    href="/features/forgi-editor"
                    className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]"
                  >
                    Forgi Editor
                  </Link>{" "}
                  permite personalizar cada sección después de la generación,
                  y el{" "}
                  <Link
                    href="/features/conversion-score"
                    className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]"
                  >
                    Conversion Score
                  </Link>{" "}
                  analiza tu landing y te da recomendaciones concretas para
                  mejorar la tasa de conversión. Es como tener un equipo de
                  diseño, copy y CRO en una sola herramienta.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    "Generación con IA en 30 segundos",
                    "Chatbot Forgi incluido sin coste extra",
                    "Plan gratuito con 1 landing",
                    "Starter desde 49€/mes",
                    "Agency desde 97€/mes (ilimitado)",
                    "Plataforma 100% en español",
                    "Core Web Vitals excelentes de serie",
                    "Conversion Score para optimizar CRO",
                  ].map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 text-sm text-[#6B7280]"
                    >
                      <span className="text-[#9D4EDD] font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/precios"
                  className="inline-block px-6 py-3 rounded-xl font-bold text-white text-sm"
                  style={{
                    background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                  }}
                >
                  Ver precios de LandForge →
                </Link>
              </div>

              {/* 4.2 Unbounce */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-extrabold mb-4">
                  2. Unbounce — Para presupuestos enterprise
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Unbounce es el veterano del sector, operando desde 2009. Su
                  principal ventaja es Smart Traffic, un sistema de IA que
                  distribuye automáticamente el tráfico entre variantes de tu
                  landing para maximizar conversiones. Sin embargo, la creación
                  de la landing sigue siendo manual con un editor de bloques.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  A diferencia de Instapage, Unbounce incluye popups y sticky
                  bars, lo que lo convierte en una opción más versátil si
                  necesitas CRO en toda tu web. El problema es el precio: el
                  plan más barato son 99$/mes con solo 1 dominio y 500
                  conversiones. Para agencias, el coste escala rápidamente a
                  575$/mes. Lee nuestra{" "}
                  <Link
                    href="/comparar/landforge-vs-unbounce"
                    className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]"
                  >
                    comparativa LandForge vs Unbounce
                  </Link>{" "}
                  para un análisis más profundo.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Desde 99$/mes
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Smart Traffic (A/B IA)
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Sin chatbot nativo
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Editor manual por bloques
                  </span>
                </div>
              </div>

              {/* 4.3 Leadpages */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-extrabold mb-4">
                  3. Leadpages — Sencilla pero sin IA real
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Leadpages destaca por su facilidad de uso y su amplia
                  biblioteca de plantillas. Si vienes de Instapage buscando algo
                  más intuitivo y con mejor relación calidad-precio, Leadpages
                  cumple ese rol. Ofrece integraciones con las principales
                  herramientas de email marketing y CRM, y sus landing pages
                  cargan razonablemente rápido.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  La limitación principal es que su IA es parcial: puede sugerir
                  textos pero no genera una landing completa desde cero. No
                  incluye chatbot de ventas ni análisis de conversión avanzado.
                  Para agencias que gestionan muchos clientes, el plan Pro de
                  99$/mes con 3 sitios se queda corto rápidamente.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Desde 49$/mes
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Plantillas prediseñadas
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Sin chatbot
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    IA limitada a copy
                  </span>
                </div>
              </div>

              {/* 4.4 Carrd */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-extrabold mb-4">
                  4. Carrd — Barata pero muy limitada
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Carrd es la opción más económica de esta lista: 19$/año para
                  hasta 10 sitios. Es ideal si solo necesitas una one-page
                  minimalista sin funcionalidades avanzadas. La interfaz es
                  limpia y rápida, y las páginas resultantes cargan muy bien.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Sin embargo, Carrd es extremadamente básica como alternativa a
                  Instapage. No tiene IA, no tiene chatbot, no tiene A/B
                  testing, no tiene CRM ni analytics avanzado. Si tu objetivo
                  es generar leads y optimizar conversiones, Carrd se queda muy
                  corta. Es más una herramienta para portfolios y páginas de
                  presentación que un landing page builder profesional. Consulta
                  nuestra{" "}
                  <Link
                    href="/comparar/landforge-vs-carrd"
                    className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]"
                  >
                    comparativa LandForge vs Carrd
                  </Link>{" "}
                  para más detalle.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    19$/año
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Minimalista
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Sin IA
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Sin chatbot ni A/B
                  </span>
                </div>
              </div>

              {/* 4.5 Webflow */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-extrabold mb-4">
                  5. Webflow — Potente pero con curva de aprendizaje
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Webflow es la herramienta más potente en términos de control
                  visual y de diseño. Si necesitas landing pages con animaciones
                  complejas, interacciones avanzadas y control total sobre CSS,
                  Webflow es imbatible. Es la opción preferida por diseñadores
                  y agencias de diseño que priorizan la estética.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  El problema como alternativa a Instapage es que la curva de
                  aprendizaje es pronunciada: necesitas conocimientos de
                  maquetación web para sacarle partido. No incluye IA nativa
                  para generar landing pages, no tiene chatbot y crear una
                  página desde cero puede llevar entre 4 y 10 horas. El precio
                  comienza en 14$/mes por sitio, pero escala rápido con CMS y
                  hosting.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Desde 14$/mes
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Control visual total
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Sin IA nativa
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Curva de aprendizaje alta
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── 5. VEREDICTO ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">
                  Veredicto: ¿Cuál es la mejor alternativa a Instapage para ti?
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8">
                  <h3 className="text-xl font-extrabold mb-6 text-[#9D4EDD]">
                    Elige LandForge si...
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Quieres generar landing pages en segundos, no en horas",
                      "Necesitas un chatbot de ventas integrado sin pagar extra",
                      "Buscas una alternativa a Instapage en español",
                      "Tu agencia gestiona múltiples clientes con presupuesto limitado",
                      "Valoras la optimización de conversión automática (Conversion Score)",
                      "El plan gratuito para probar sin riesgo es importante para ti",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 items-start text-[#6B7280] text-sm"
                      >
                        <span className="text-[#9D4EDD] font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/register"
                    className="mt-8 inline-block w-full text-center py-4 rounded-xl font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                    }}
                  >
                    Probar LandForge gratis →
                  </Link>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h3 className="text-xl font-extrabold mb-6 text-[#6B7280]">
                    Otras alternativas si...
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Unbounce: Necesitas Smart Traffic y A/B testing enterprise con popups",
                      "Leadpages: Quieres plantillas sencillas y no necesitas IA avanzada",
                      "Carrd: Solo necesitas una one-page ultra-básica por menos de 20$/año",
                      "Webflow: Priorizas control visual total y tienes conocimientos de diseño web",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 items-start text-[#6B7280] text-sm"
                      >
                        <span className="text-gray-400 font-bold flex-shrink-0">
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── 6. COMPARATIVA CON INSTAPAGE ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-8">
                LandForge vs Instapage: la comparativa directa
              </h2>
              <p className="text-[#6B7280] text-center max-w-2xl mx-auto mb-12">
                Si quieres comparar LandForge frente a Instapage en
                profundidad con tabla de precios, funcionalidades y
                casos de uso, lee nuestra comparativa dedicada.
              </p>
              <div className="text-center">
                <Link
                  href="/comparar/landforge-vs-instapage"
                  className="inline-block px-8 py-4 rounded-xl font-bold text-[#9D4EDD] border-2 border-[#E0AAFF] hover:bg-[#F3E8FF] transition text-lg"
                >
                  Leer comparativa LandForge vs Instapage →
                </Link>
              </div>
            </div>
          </section>

          {/* ── 7. FAQ ── */}
          <section className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">
                Preguntas frecuentes sobre alternativas a Instapage
              </h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿Cuál es la mejor alternativa a Instapage en 2026?",
                    a: "LandForge es la mejor alternativa a Instapage para quienes buscan velocidad y precio. Genera landing pages con IA en 30 segundos, incluye chatbot de ventas Forgi sin coste extra y su plan gratuito permite crear 1 landing sin tarjeta de crédito.",
                  },
                  {
                    q: "¿Por qué Instapage es tan caro?",
                    a: "Instapage se posiciona como herramienta enterprise con funcionalidades avanzadas de personalización y A/B testing. Su plan Build cuesta 79$/mes y el plan Convert requiere presupuesto personalizado. Para la mayoría de agencias, alternativas como LandForge ofrecen generación con IA desde 0 euros.",
                  },
                  {
                    q: "¿Puedo migrar mis landing pages de Instapage a otra herramienta?",
                    a: "Instapage no ofrece exportación directa. La migración implica recrear las páginas. Con LandForge, la IA genera una landing equivalente en 30 segundos a partir de una descripción de tu negocio.",
                  },
                  {
                    q: "¿Alguna alternativa a Instapage incluye chatbot de ventas?",
                    a: "De las 5 alternativas analizadas, solo LandForge incluye un chatbot de ventas con IA (Forgi) integrado de serie y sin coste adicional. El resto requieren herramientas externas como Drift o Intercom.",
                  },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#1A1A2E]">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform flex-shrink-0 text-xl">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── 8. CTA ── */}
          <section
            className="px-6 py-24 text-center"
            style={{
              background:
                "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)",
            }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white mb-5">
                Deja de pagar 79$/mes por diseñar landings a mano
              </h2>
              <p className="text-[#E0AAFF] text-lg mb-10">
                Prueba LandForge gratis y crea tu primera landing en 30
                segundos. Sin tarjeta de crédito. Consulta nuestros{" "}
                <Link
                  href="/precios"
                  className="text-white font-semibold underline underline-offset-2 hover:text-[#F3E8FF] transition"
                >
                  planes y precios
                </Link>
                .
              </p>
              <Link
                href="/register"
                className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl"
              >
                Empezar gratis — sin tarjeta →
              </Link>
            </div>
          </section>

          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más comparativas</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/comparar/landforge-vs-instapage"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → LandForge vs Instapage
                </Link>
                <Link
                  href="/comparar/alternativas-unbounce"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Alternativas a Unbounce
                </Link>
                <Link
                  href="/comparar/alternativas-carrd"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Alternativas a Carrd
                </Link>
                <Link
                  href="/comparar"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Todas las comparativas
                </Link>
                <Link
                  href="/features/forgi-editor"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Forgi Editor
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
