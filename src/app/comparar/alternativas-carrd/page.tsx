import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Alternativas a Carrd con IA (2026)",
  description:
    "Carrd es simple pero limitado. Compara 5 alternativas con más poder: LandForge, Webflow, Unbounce, Leadpages y WordPress. Con IA incluida.",
  keywords: [
    "alternativas a carrd",
    "alternativa carrd landing pages",
    "carrd alternativas profesionales",
    "mejor alternativa carrd 2026",
    "landing page builder vs carrd",
  ],
  alternates: {
    canonical: "https://landforge.digital/comparar/alternativas-carrd",
  },
  openGraph: {
    title: "5 Alternativas a Carrd con IA (2026) | LandForge",
    description:
      "Carrd es simple pero limitado. Compara 5 alternativas con más poder: LandForge, Webflow, Unbounce, Leadpages y WordPress. Con IA incluida.",
    url: "https://landforge.digital/comparar/alternativas-carrd",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 Alternativas a Carrd para Landing Pages Profesionales en 2026",
  description:
    "Carrd es simple pero limitado. Compara 5 alternativas para crear landing pages profesionales con IA, chatbot y CRO avanzado.",
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
      name: "¿Cuál es la mejor alternativa a Carrd para landing pages profesionales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge es la mejor alternativa a Carrd si necesitas funcionalidades profesionales. Incluye generación con IA en 30 segundos, chatbot de ventas Forgi integrado, Conversion Score para optimizar CRO y un plan gratuito. Carrd no tiene IA, chatbot ni analytics avanzado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué debería dejar Carrd si es tan barato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carrd es perfecto para portfolios y páginas personales, pero no para generar leads ni vender. No tiene chatbot, A/B testing, CRM, formularios avanzados ni IA. Si tu objetivo es captar clientes y convertir tráfico en ventas, necesitas una herramienta con funcionalidades de conversión que Carrd no ofrece.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge tiene un plan gratuito como Carrd?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. LandForge tiene un plan gratuito que permite crear 1 landing page con IA y chatbot Forgi incluido, sin tarjeta de crédito. A diferencia del plan gratuito de Carrd (muy limitado y con marca de agua), el plan Free de LandForge incluye funcionalidades profesionales desde el primer día.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo migrar mi sitio de Carrd a otra plataforma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carrd no ofrece exportación de sitios a otras plataformas. Para migrar necesitas recrear tu página en la nueva herramienta. Con LandForge, puedes describir tu negocio y la IA generará una landing profesional en 30 segundos, eliminando la necesidad de copiar manualmente el diseño de Carrd.",
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
      name: "Alternativas a Carrd",
      item: "https://landforge.digital/comparar/alternativas-carrd",
    },
  ],
};

export default function AlternativasCarrd() {
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
              5 Alternativas a Carrd para{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Landing Pages Profesionales (2026)
              </span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-8">
              Carrd es genial para una página personal rápida. Pero cuando
              necesitas captar leads, cualificar clientes con un chatbot,
              optimizar conversiones o conectar con tu CRM, Carrd se queda
              corto. Si has llegado al límite de lo que Carrd puede hacer, estas
              5 alternativas te dan el salto profesional que necesitas.
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

          {/* ── 2. POR QUÉ BUSCAR ALTERNATIVA A CARRD ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                ¿Por qué Carrd se queda corto para landing pages de negocio?
              </h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                Carrd fue diseñado para one-pages personales y portfolios. Cuando
                intentas usarlo para generar leads y vender, chocas con estas
                4 limitaciones fundamentales.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "🤖",
                  title: "Sin chatbot de ventas",
                  text: "Carrd no permite integrar un chatbot nativo que responda preguntas de visitantes, cualifique leads o cierre ventas 24/7. Cada visitante que tiene una duda y no encuentra respuesta, se va.",
                },
                {
                  icon: "🧪",
                  title: "Sin A/B testing",
                  text: "No puedes probar dos versiones de tu landing page para saber cuál convierte mejor. Sin A/B testing, optimizar la conversión es cuestión de intuición, no de datos.",
                },
                {
                  icon: "🧠",
                  title: "Sin inteligencia artificial",
                  text: "Carrd no tiene IA para generar copy, estructura ni diseño. Cada landing page la creas tú desde cero, arrastrando bloques y escribiendo cada línea de texto manualmente.",
                },
                {
                  icon: "🔗",
                  title: "Sin integraciones CRM",
                  text: "Las opciones de integración de Carrd son muy limitadas. Conectar con un CRM, email marketing avanzado o herramientas de automatización requiere soluciones externas complejas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3. TABLA COMPARATIVA ── */}
          <section id="tabla" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">
                  Tabla comparativa: 5 alternativas a Carrd
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Comparamos las funcionalidades que Carrd no tiene: IA, chatbot,
                  A/B testing, integraciones CRM y precio.
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
                        Chatbot
                      </th>
                      <th className="p-5 font-bold text-[#6B7280] text-sm">
                        Integraciones CRM
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
                        "Zapier + nativas",
                        true,
                      ],
                      [
                        "Webflow",
                        "14$/mes",
                        "No nativa",
                        "No",
                        "Zapier/Make",
                        false,
                      ],
                      [
                        "Unbounce",
                        "99$/mes",
                        "Smart Builder",
                        "No",
                        "Nativas + Zapier",
                        false,
                      ],
                      [
                        "Leadpages",
                        "49$/mes",
                        "Parcial",
                        "No",
                        "Nativas",
                        false,
                      ],
                      [
                        "WordPress",
                        "Gratis*",
                        "Plugins IA",
                        "Plugins",
                        "Plugins",
                        false,
                      ],
                    ].map(([name, price, ai, chat, crm, highlight]) => (
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
                          {crm as string}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6B7280] text-sm mt-4">
                * WordPress es gratuito como software, pero requiere hosting
                (desde 3-10€/mes), tema, plugins y mantenimiento técnico.
              </p>
            </div>
          </section>

          {/* ── 4. ANÁLISIS DE CADA ALTERNATIVA ── */}
          <section className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">
                Análisis detallado de cada alternativa a Carrd
              </h2>

              {/* 4.1 LandForge */}
              <div className="bg-white rounded-2xl border-2 border-[#9D4EDD] p-8 md:p-10 mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#9D4EDD] px-3 py-1 rounded-full">
                    #1 Recomendada
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-[#9D4EDD]">
                  1. LandForge — De Carrd a landing pages profesionales con IA
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  Si estás usando Carrd y sientes que te quedas corto, LandForge
                  es el salto natural. Mantiene la simplicidad de crear una
                  landing rápidamente pero añade todo lo que Carrd no tiene:
                  inteligencia artificial que genera la página completa en 30
                  segundos, el{" "}
                  <Link
                    href="/features/forgi-chatbot"
                    className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]"
                  >
                    chatbot Forgi
                  </Link>{" "}
                  que atiende a tus visitantes 24/7 y cualifica leads sin que
                  tú intervengas, y el Conversion Score que analiza tu landing y
                  te dice exactamente qué cambiar para convertir más.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  La gran ventaja frente a Carrd es que LandForge está diseñado
                  para generar negocio, no solo para tener presencia online.
                  Cada landing incluye formularios de captación, chatbot de
                  ventas y analytics de conversión. Y todo empieza con un plan
                  gratuito que incluye 1 landing con IA y chatbot, sin tarjeta
                  de crédito.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    "IA genera landing completa en 30 segundos",
                    "Chatbot Forgi incluido sin coste adicional",
                    "Plan Free: 1 landing con IA + chatbot",
                    "Starter 49€/mes · Agency 97€/mes",
                    "Conversion Score para optimizar CRO",
                    "Plataforma en español nativo",
                    "Core Web Vitals excelentes",
                    "Integraciones con Zapier, HubSpot, Shopify",
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

              {/* 4.2 Webflow */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-extrabold mb-4">
                  2. Webflow — Control visual total, pero curva de aprendizaje
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Webflow es lo opuesto a Carrd en cuanto a potencia: te da
                  control absoluto sobre cada píxel de tu landing page. Puedes
                  crear animaciones complejas, layouts responsivos avanzados y
                  diseños que rivalizan con código personalizado. Si eres
                  diseñador o tienes un equipo de diseño, Webflow es la
                  herramienta definitiva para landing pages visuales.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  El problema es la curva de aprendizaje. Si vienes de Carrd
                  buscando algo sencillo, Webflow puede abrumarte. No tiene IA
                  nativa para generar páginas, no incluye chatbot y el tiempo
                  de creación de una landing va de 4 a 10 horas. Para quien no
                  es diseñador, Webflow puede ser más frustrante que productivo.
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

              {/* 4.3 Unbounce */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-extrabold mb-4">
                  3. Unbounce — Enterprise con A/B testing avanzado
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Unbounce es el veterano de los landing page builders con
                  funcionalidades de CRO avanzado. Su mayor ventaja sobre Carrd
                  es Smart Traffic: un sistema de IA que distribuye tu tráfico
                  entre variantes de la landing para maximizar conversiones
                  automáticamente. También incluye popups y sticky bars.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  El salto de precio de Carrd (19$/año) a Unbounce (99$/mes) es
                  considerable. Para agencias y equipos grandes que necesitan
                  A/B testing y distribución inteligente de tráfico, puede
                  justificarse. Para freelancers y negocios pequeños que solo
                  necesitan crear landings más profesionales que Carrd, el
                  precio es excesivo.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Desde 99$/mes
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Smart Traffic IA
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Popups y sticky bars
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Sin chatbot nativo
                  </span>
                </div>
              </div>

              {/* 4.4 Leadpages */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-extrabold mb-4">
                  4. Leadpages — Plantillas fáciles, buen equilibrio
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Leadpages es probablemente la alternativa a Carrd más
                  parecida en cuanto a facilidad de uso, pero con
                  funcionalidades muy superiores. Ofrece una amplia biblioteca
                  de plantillas optimizadas para conversión, formularios de
                  captación de leads, integración nativa con email marketing y
                  alertas de leads por email.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Su IA es parcial: puede sugerir copy y optimizar headlines,
                  pero no genera páginas completas desde cero. No incluye chatbot
                  de ventas. Para quien viene de Carrd y necesita algo más
                  profesional sin la complejidad de Webflow, Leadpages es una
                  opción intermedia razonable, aunque LandForge ofrece más
                  funcionalidades por menos precio con su plan Free.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Desde 49$/mes
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Plantillas de conversión
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    IA parcial
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Sin chatbot
                  </span>
                </div>
              </div>

              {/* 4.5 WordPress */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-extrabold mb-4">
                  5. WordPress — Máxima flexibilidad, máximo mantenimiento
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  WordPress con Elementor o Divi es la alternativa a Carrd más
                  flexible en términos de funcionalidad. Puedes crear
                  literalmente cualquier tipo de landing page, añadir chatbots
                  con plugins, integrar CRM, A/B testing y analytics avanzado.
                  Todo es posible con WordPress.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  El problema es el mantenimiento. WordPress requiere hosting
                  propio (desde 3-10€/mes), actualizaciones constantes de
                  plugins y temas, gestión de seguridad y conocimientos
                  técnicos que van mucho más allá de lo que un usuario de Carrd
                  espera. Si no quieres dedicar tiempo a la infraestructura y
                  solo quieres crear landings que conviertan, WordPress puede ser
                  excesivo.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Gratis (+ hosting)
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Flexibilidad total
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Requiere mantenimiento
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    Curva técnica media-alta
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
                  Veredicto: ¿Cuál es la mejor alternativa a Carrd para ti?
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8">
                  <h3 className="text-xl font-extrabold mb-6 text-[#9D4EDD]">
                    Elige LandForge si...
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Quieres pasar de una one-page a una landing que genera negocio",
                      "Necesitas chatbot de ventas incluido sin pagar herramientas extra",
                      "Te importa la velocidad: de idea a landing en 30 segundos con IA",
                      "Buscas una plataforma en español con soporte y documentación",
                      "Quieres un plan gratuito que ya incluya IA y chatbot",
                      "Valoras la optimización de conversión automática con datos",
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
                      "Webflow: Eres diseñador y necesitas control total sobre cada pixel",
                      "Unbounce: Tienes presupuesto enterprise y quieres Smart Traffic + popups",
                      "Leadpages: Buscas algo intermedio con buenas plantillas y facilidad de uso",
                      "WordPress: Necesitas flexibilidad máxima y tienes equipo técnico",
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

          {/* ── 6. LINK A COMPARATIVA DIRECTA ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-8">
                LandForge vs Carrd: comparativa detallada
              </h2>
              <p className="text-[#6B7280] text-center max-w-2xl mx-auto mb-12">
                Si quieres ver una comparativa punto por punto entre LandForge y
                Carrd con tabla de funcionalidades, precios y casos de uso, lee
                nuestro análisis dedicado.
              </p>
              <div className="text-center">
                <Link
                  href="/comparar/landforge-vs-carrd"
                  className="inline-block px-8 py-4 rounded-xl font-bold text-[#9D4EDD] border-2 border-[#E0AAFF] hover:bg-[#F3E8FF] transition text-lg"
                >
                  Leer comparativa LandForge vs Carrd →
                </Link>
              </div>
            </div>
          </section>

          {/* ── 7. FAQ ── */}
          <section className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">
                Preguntas frecuentes sobre alternativas a Carrd
              </h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿Cuál es la mejor alternativa a Carrd para landing pages profesionales?",
                    a: "LandForge es la mejor alternativa si necesitas funcionalidades profesionales. Incluye generación con IA en 30 segundos, chatbot de ventas Forgi integrado, Conversion Score para optimizar CRO y un plan gratuito.",
                  },
                  {
                    q: "¿Por qué debería dejar Carrd si es tan barato?",
                    a: "Carrd es perfecto para portfolios y páginas personales, pero no para generar leads ni vender. No tiene chatbot, A/B testing, CRM ni IA. Si tu objetivo es captar clientes, necesitas funcionalidades de conversión que Carrd no ofrece.",
                  },
                  {
                    q: "¿LandForge tiene un plan gratuito como Carrd?",
                    a: "Sí. LandForge tiene un plan gratuito que permite crear 1 landing page con IA y chatbot Forgi incluido, sin tarjeta de crédito. A diferencia de Carrd, incluye funcionalidades profesionales desde el primer día.",
                  },
                  {
                    q: "¿Puedo migrar mi sitio de Carrd a otra plataforma?",
                    a: "Carrd no ofrece exportación. Para migrar necesitas recrear tu página. Con LandForge, puedes describir tu negocio y la IA genera una landing profesional en 30 segundos.",
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
                Tu negocio merece más que una one-page sin chatbot
              </h2>
              <p className="text-[#E0AAFF] text-lg mb-10">
                Crea tu primera landing profesional con IA en 30 segundos. Con
                chatbot Forgi incluido. Consulta nuestros{" "}
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
                  href="/comparar/landforge-vs-carrd"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → LandForge vs Carrd
                </Link>
                <Link
                  href="/comparar/alternativas-instapage"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Alternativas a Instapage
                </Link>
                <Link
                  href="/comparar/alternativas-unbounce"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Alternativas a Unbounce
                </Link>
                <Link
                  href="/comparar"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Todas las comparativas
                </Link>
                <Link
                  href="/features/forgi-chatbot"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Forgi Chatbot
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
