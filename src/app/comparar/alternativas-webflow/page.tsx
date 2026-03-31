import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alternativas a Webflow para Landings (2026)",
  description: "¿Webflow es caro para tus landings? Las 5 mejores alternativas con IA, chatbot y velocidad para agencias en 2026.",
  keywords: ["alternativas webflow", "alternativa webflow landing pages", "mejor que webflow agencias", "webflow alternativas baratas 2026"],
  alternates: { canonical: "https://landforge.digital/comparar/alternativas-webflow" },
  openGraph: {
    title: "Alternativas a Webflow para Landings (2026)",
    description: "¿Webflow es demasiado complejo o caro para tus landing pages? Las 5 mejores alternativas con IA para agencias en 2026.",
    url: "https://landforge.digital/comparar/alternativas-webflow",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Alternativas a Webflow", item: "https://landforge.digital/comparar/alternativas-webflow" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Las Mejores Alternativas a Webflow para Landing Pages en 2026",
  description: "Comparativa honesta de las 5 mejores alternativas a Webflow para crear landing pages con IA, chatbot y velocidad optimizada para agencias.",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge" },
  datePublished: "2026-03-20", dateModified: "2026-03-27",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Por qué buscar alternativas a Webflow para landing pages?", acceptedAnswer: { "@type": "Answer", text: "Webflow es un editor visual potentísimo, pero para landing pages resulta excesivo: requiere conocimientos de CSS y Flexbox, tiene una curva de aprendizaje alta y su pricing escala rápido cuando gestionas varios proyectos. Para agencias que necesitan producir landing pages rápido, herramientas con IA generativa como LandForge ofrecen mejor relación tiempo-resultado." } },
    { "@type": "Question", name: "¿Cuál es la alternativa a Webflow más barata para agencias?", acceptedAnswer: { "@type": "Answer", text: "LandForge ofrece un plan gratuito con 1 landing y su plan Agency cuesta 97€/mes con dominios ilimitados, IA generativa completa y chatbot de ventas incluido. Carrd es la opción más económica (desde 9$/año) pero muy limitada en funcionalidades." } },
    { "@type": "Question", name: "¿Webflow tiene inteligencia artificial para crear páginas?", acceptedAnswer: { "@type": "Answer", text: "Webflow no tiene IA generativa nativa para crear landing pages completas. Su enfoque es el control visual pixel-perfect. LandForge, en cambio, genera la landing completa (estructura, copy, diseño y chatbot) a partir de un briefing en lenguaje natural en 30 segundos." } },
    { "@type": "Question", name: "¿Puedo migrar mis landing pages de Webflow a otra herramienta?", acceptedAnswer: { "@type": "Answer", text: "No existe una migración directa automática entre Webflow y otras plataformas. Sin embargo, con LandForge puedes recrear cualquier landing en menos de un minuto describiendo lo que necesitas a la IA. La mayoría de agencias que migran encuentran que el tiempo ahorrado compensa con creces el cambio." } },
  ],
};

const alternatives = [
  {
    rank: "01", name: "LandForge", badge: "Mejor para Agencias con IA", highlight: true,
    desc: "La plataforma que genera landing pages completas con IA en 30 segundos e incluye el chatbot de ventas Forgi sin coste adicional. Mientras que Webflow te da control total sobre cada pixel, LandForge prioriza la velocidad de producción: de un briefing a una landing publicada con Core Web Vitals por debajo de 1 segundo.",
    pros: ["IA generativa completa (copy + estructura + diseño) en 30s", "Chatbot de ventas Forgi incluido en todos los planes", "Core Web Vitals optimizados (<1s de carga)", "White label y dominios ilimitados en plan Agency (97€/mes)"],
    contras: ["Menor control visual pixel-perfect que Webflow", "Sin CMS para contenido editorial complejo"],
    price: "Gratis / desde 49€/mes", link: "/register", cta: "Probar gratis",
  },
  {
    rank: "02", name: "Carrd", badge: "Ultra simple y barato", highlight: false,
    desc: "Si tu necesidad es una sola página estática sin complicaciones, Carrd es imbatible en precio. Su editor minimalista permite tener algo online en minutos, aunque la personalización es muy limitada comparada con Webflow.",
    pros: ["Precio imbatible: desde 9$/año", "Simplicidad absoluta, sin curva de aprendizaje", "Ideal para one-pagers rápidos y MVPs"],
    contras: ["Solo páginas de una sección (single-page)", "Sin IA generativa ni chatbot", "Personalización muy limitada"],
    price: "Gratis / desde 9$/año", link: "/comparar/landforge-vs-carrd", cta: "Ver comparativa completa",
  },
  {
    rank: "03", name: "Framer", badge: "Diseño moderno con IA", highlight: false,
    desc: "Framer se ha posicionado como la alternativa moderna para diseñadores. Tiene funciones de IA para generar secciones y un editor visual elegante. Buena opción si vienes de herramientas de diseño como Figma, pero carece de chatbot de ventas.",
    pros: ["Editor visual moderno con animaciones avanzadas", "Funciones de IA para generar secciones", "Buena integración con Figma", "Precio accesible desde 5$/mes"],
    contras: ["Sin chatbot de ventas nativo", "IA limitada a secciones (no genera la landing completa)", "Orientado a diseñadores, no a marketers"],
    price: "Gratis / desde 5$/mes", link: null, cta: null,
  },
  {
    rank: "04", name: "Elementor (WordPress)", badge: "Ecosistema WordPress", highlight: false,
    desc: "El constructor visual más popular de WordPress. Enorme biblioteca de plantillas y widgets, pero arrastra el problema histórico de WordPress: CSS inflado que penaliza los Core Web Vitals.",
    pros: ["Ecosistema de plugins y plantillas gigante", "Plan gratuito funcional", "Comunidad activa y mucha documentación"],
    contras: ["CSS inflado que penaliza Core Web Vitals", "Requiere hosting WordPress y mantenimiento", "Sin IA generativa ni chatbot nativo"],
    price: "Gratis / desde 59$/año Pro", link: null, cta: null,
  },
  {
    rank: "05", name: "Unbounce", badge: "A/B testing avanzado", highlight: false,
    desc: "El veterano de las landing pages con su exclusiva función SmartTraffic, que distribuye tráfico entre variantes de forma automática. Potente para empresas con budget alto, pero su precio de entrada es elevado.",
    pros: ["SmartTraffic: A/B testing con enrutamiento IA", "Editor maduro con muchas plantillas", "Popups y sticky bars integrados"],
    contras: ["99$/mes el plan más barato (1 dominio)", "Sin chatbot de ventas nativo", "Curva de aprendizaje considerable"],
    price: "Desde 99$/mes", link: "/comparar/landforge-vs-unbounce", cta: "Ver comparativa completa",
  },
];

const tableData = [
  ["LandForge", "0–197€/mes", "Completa (30s)", "Forgi incluido", "<1s CWV", "Agencias que escalan"],
  ["Webflow", "Desde 14$/mes", "No", "No", "Variable", "Diseño pixel-perfect"],
  ["Carrd", "Desde 9$/año", "No", "No", "Rápida", "One-pagers simples"],
  ["Framer", "Desde 5$/mes", "Parcial", "No", "Rápida", "Diseñadores de UI"],
  ["Elementor", "Gratis / 59$/año", "No", "No", "Lenta", "Ecosistema WordPress"],
  ["Unbounce", "Desde 99$/mes", "SmartTraffic", "No", "Media", "A/B testing avanzado"],
];

const faqs = [
  { q: "¿Por qué buscar alternativas a Webflow para landing pages?", a: "Webflow es excelente para sitios web completos con diseño pixel-perfect, pero para landing pages de campañas resulta excesivo: alta curva de aprendizaje (CSS/Flexbox), pricing que escala con cada proyecto y ausencia de IA generativa o chatbot de ventas. Las agencias de marketing buscan alternativas webflow para agencias que les permitan producir más rápido." },
  { q: "¿Cuál es la alternativa a Webflow más barata en 2026?", a: "Carrd es la más económica con planes desde 9$/año, pero es muy limitada. LandForge ofrece el mejor equilibrio precio-funcionalidad con plan gratuito (1 landing), Starter a 49€/mes y Agency a 97€/mes con dominios ilimitados, IA generativa completa y chatbot de ventas Forgi incluido." },
  { q: "¿Webflow tiene inteligencia artificial para crear páginas?", a: "Webflow no ofrece IA generativa nativa para crear landing pages completas. Su valor está en el control visual manual. LandForge genera la landing entera (estructura, copy, diseño y chatbot de ventas) a partir de un briefing en 30 segundos mediante IA generativa." },
  { q: "¿Puedo migrar mis landing pages de Webflow a otra herramienta?", a: "No hay migración directa automática. Sin embargo, con LandForge puedes recrear cualquier landing describiendo lo que necesitas a la IA en menos de un minuto. La mayoría de agencias que migran encuentran que el tiempo ahorrado compensa con creces." },
  { q: "¿Qué alternativa a Webflow es mejor para agencias?", a: "LandForge está diseñado específicamente para agencias de marketing: IA que genera landing pages en 30 segundos, chatbot de ventas Forgi incluido, white label en el plan Agency Pro (197€/mes) y Core Web Vitals optimizados por debajo de 1 segundo. Para un análisis completo, consulta la comparativa LandForge vs Webflow." },
];

export default function AlternativasWebflow() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-16 text-center flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Comparativa 2026 — Alternativas a Webflow
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl tracking-tight leading-tight mb-6">
              Las mejores alternativas a Webflow{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                para landing pages en 2026
              </span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-8">
              Webflow es una herramienta excepcional para diseño web sin código, pero para crear landing pages de forma rápida y escalable, existen <strong>alternativas a Webflow</strong> que ofrecen IA generativa, chatbot de ventas y mejor rendimiento en Core Web Vitals. Analizamos las 5 mejores opciones para agencias de marketing en 2026.
            </p>
          </section>

          {/* ── 2. WHY LOOK FOR ALTERNATIVES ── */}
          <section className="px-6 py-20 bg-[#1A1A2E]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white text-center mb-4">Por qué las agencias buscan alternativas a Webflow</h2>
              <p className="text-[#E0AAFF] text-center mb-14 max-w-2xl mx-auto">
                Webflow brilla en control visual, pero para landing pages tiene fricciones reales. Para un análisis más detallado, consulta nuestra{" "}
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] underline underline-offset-2 hover:text-white transition">comparativa directa LandForge vs Webflow</Link>.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-[#9D4EDD]/30 bg-[#1A1A2E] p-8">
                  <div className="text-3xl mb-4">$$$</div>
                  <h3 className="font-bold text-white text-lg mb-3">Precio que escala rápido</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">El plan Site de Webflow arranca en 14$/mes, pero al sumar hosting, CMS y múltiples proyectos, el coste se dispara. Las <strong className="text-gray-300">alternativas webflow baratas</strong> como LandForge ofrecen dominios ilimitados por tarifa plana.</p>
                </div>
                <div className="rounded-2xl border border-[#9D4EDD]/30 bg-[#1A1A2E] p-8">
                  <div className="text-3xl mb-4">CSS</div>
                  <h3 className="font-bold text-white text-lg mb-3">Curva de aprendizaje alta</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Para sacar partido a Webflow necesitas entender CSS, Flexbox y su modelo de clases. Perfecto para diseñadores expertos, pero un freno para agencias que quieren que cualquier miembro del equipo cree landing pages sin formación técnica.</p>
                </div>
                <div className="rounded-2xl border border-[#9D4EDD]/30 bg-[#1A1A2E] p-8">
                  <div className="text-3xl mb-4">LP</div>
                  <h3 className="font-bold text-white text-lg mb-3">Excesivo para landing pages</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Webflow es un CMS completo pensado para sitios web enteros. Si solo necesitas un landing page builder rápido para campañas de captación, es como usar Photoshop para recortar una foto: funciona, pero hay herramientas más adecuadas.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 3. ALTERNATIVES LIST ── */}
          <section className="px-6 py-20 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-4">Las 5 mejores alternativas a Webflow para landing pages</h2>
              <p className="text-[#6B7280] text-center mb-14 max-w-2xl mx-auto">
                Hemos analizado cada alternativa webflow landing pages con criterios reales: velocidad de producción, precio, IA y funcionalidades para agencias. También puedes consultar nuestra{" "}
                <Link href="/blog/mejores-herramientas-crear-landing-pages" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF] transition">guía completa de herramientas para crear landing pages</Link>.
              </p>
              <div className="space-y-8">
                {alternatives.map((alt) => (
                  <div key={alt.name} className={`rounded-2xl border p-8 ${alt.highlight ? "border-[#9D4EDD] bg-[#FAF5FF] shadow-lg shadow-[#9D4EDD]/10" : "border-gray-200 bg-white"}`}>
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                      <div className="flex items-center gap-4">
                        <span className="font-mono font-bold text-2xl text-[#9D4EDD]">{alt.rank}</span>
                        <div>
                          <h3 className="text-xl font-extrabold">{alt.name}</h3>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${alt.highlight ? "bg-[#9D4EDD] text-white" : "bg-gray-100 text-[#6B7280]"}`}>{alt.badge}</span>
                        </div>
                      </div>
                      <span className="font-bold text-[#9D4EDD]">{alt.price}</span>
                    </div>
                    <p className="text-[#6B7280] mb-5 leading-relaxed">{alt.desc}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-5">
                      <div>
                        <h4 className="font-bold text-sm mb-2 text-green-700">Puntos Fuertes</h4>
                        <ul className="space-y-1">{alt.pros.map((p) => <li key={p} className="text-sm text-[#6B7280] flex gap-2"><span className="text-green-500 flex-shrink-0">&#10003;</span>{p}</li>)}</ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-2 text-red-600">Limitaciones</h4>
                        <ul className="space-y-1">{alt.contras.map((c) => <li key={c} className="text-sm text-[#6B7280] flex gap-2"><span className="text-red-400 flex-shrink-0">&times;</span>{c}</li>)}</ul>
                      </div>
                    </div>
                    {alt.link && alt.cta && (
                      <Link href={alt.link} className={`inline-block px-6 py-3 rounded-xl font-bold text-sm transition hover:-translate-y-0.5 ${alt.highlight ? "text-white" : "border border-[#E0AAFF] text-[#9D4EDD] hover:bg-[#F3E8FF]"}`} style={alt.highlight ? { background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" } : {}}>
                        {alt.cta} &rarr;
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6B7280] mt-8 text-center leading-relaxed">
                Si LandForge te interesa, explora las capacidades de su{" "}
                <Link href="/features/forgi-editor" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF] transition">editor visual con IA Forgi</Link>{" "}
                y consulta{" "}
                <Link href="/precios" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF] transition">todos los planes y precios</Link>.
              </p>
            </div>
          </section>

          {/* ── 4. COMPARISON TABLE ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-12">Tabla comparativa: Webflow vs alternativas</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF]">
                <table className="w-full text-left bg-white text-sm">
                  <thead>
                    <tr className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                      {["Herramienta", "Precio", "IA Nativa", "Chatbot", "Velocidad", "Mejor Para"].map((h) => (
                        <th key={h} className="p-5 font-bold text-[#6B7280]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tableData.map(([tool, price, ai, chatbot, speed, bestFor]) => (
                      <tr key={tool} className={tool === "LandForge" ? "bg-[#FAF5FF] font-semibold" : ""}>
                        <td className="p-5 font-bold">{tool}</td>
                        <td className="p-5">{price}</td>
                        <td className="p-5">{ai}</td>
                        <td className="p-5">{chatbot}</td>
                        <td className="p-5">{speed}</td>
                        <td className="p-5">{bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#6B7280] mt-6 text-center">
                Para una comparativa detallada entre LandForge y Carrd, visita nuestra{" "}
                <Link href="/comparar/landforge-vs-carrd" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF] transition">página LandForge vs Carrd</Link>.
              </p>
            </div>
          </section>

          {/* ── 5. WHICH ALTERNATIVE ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-4">¿Cuál es la mejor alternativa a Webflow para ti?</h2>
              <p className="text-[#6B7280] text-center mb-14 max-w-2xl mx-auto">Depende de tu perfil y necesidades. Aquí va nuestra recomendación honesta:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-[#9D4EDD] bg-[#FAF5FF] p-8">
                  <h3 className="font-extrabold text-lg mb-3">Eres una agencia que necesita escalar</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">Necesitas producir muchas landing pages rápido, con chatbot de ventas y sin depender de un diseñador experto en CSS. Tu prioridad es velocidad y ROI.</p>
                  <p className="font-bold text-[#9D4EDD]">Tu alternativa: LandForge</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-8">
                  <h3 className="font-extrabold text-lg mb-3">Necesitas control visual pixel-perfect</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">Tienes un diseñador que domina CSS y Flexbox, el proyecto requiere un sitio web completo con CMS y no te importa invertir más tiempo. Seamos honestos: Webflow sigue siendo superior en control de diseño.</p>
                  <p className="font-bold text-[#6B7280]">Quédate con Webflow</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-8">
                  <h3 className="font-extrabold text-lg mb-3">Tu presupuesto es mínimo</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">Solo necesitas una página sencilla para validar una idea o un proyecto personal. No necesitas IA, chatbot ni funciones avanzadas.</p>
                  <p className="font-bold text-[#6B7280]">Tu alternativa: Carrd (9$/año)</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-8">
                  <h3 className="font-extrabold text-lg mb-3">Tu enfoque es la optimización A/B</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">Tienes budget alto, necesitas SmartTraffic para optimizar variantes automáticamente y tu equipo ya domina herramientas complejas.</p>
                  <p className="font-bold text-[#6B7280]">Tu alternativa: Unbounce</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 6. FAQ ── */}
          <section className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre alternativas a Webflow</h2>
              <div className="divide-y divide-gray-100">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#1A1A2E]">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform flex-shrink-0 text-xl">+</span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── 7. CTA GRADIENT ── */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white mb-5">La alternativa a Webflow que tu agencia necesita</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Deja de pelear con CSS y Flexbox. Genera landing pages con IA en 30 segundos, con chatbot de ventas incluido y Core Web Vitals por debajo de 1 segundo. Prueba LandForge gratis hoy.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Empezar gratis &rarr;
              </Link>
              <p className="text-[#E0AAFF]/70 text-sm mt-5">Sin tarjeta de crédito. Tu primera landing en 30 segundos.</p>
            </div>
          </section>

          {/* ── 8. INTERNAL LINKS FOOTER ── */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más comparativas y recursos</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { href: "/comparar/landforge-vs-webflow", label: "LandForge vs Webflow" },
                  { href: "/comparar/landforge-vs-carrd", label: "LandForge vs Carrd" },
                  { href: "/comparar/landforge-vs-unbounce", label: "LandForge vs Unbounce" },
                  { href: "/features/forgi-editor", label: "Editor Forgi con IA" },
                  { href: "/blog/mejores-herramientas-crear-landing-pages", label: "Mejores herramientas para landing pages" },
                  { href: "/precios", label: "Precios LandForge" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                    &rarr; {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
