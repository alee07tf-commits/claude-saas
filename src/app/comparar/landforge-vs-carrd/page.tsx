import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LandForge vs Carrd 2026: Comparativa",
  description:
    "Carrd es barato y simple, pero ¿convierte? Comparativa entre LandForge (IA + chatbot) y Carrd (one-page builder). Descubre cuál necesitas.",
  keywords: [
    "landforge vs carrd",
    "alternativa carrd landing pages",
    "carrd vs generador landing ia",
    "comparativa carrd landforge",
    "mejor que carrd para agencias",
  ],
  alternates: {
    canonical: "https://landforge.digital/comparar/landforge-vs-carrd",
  },
  openGraph: {
    title: "LandForge vs Carrd 2026: Comparativa",
    description:
      "Carrd es barato y simple, pero ¿convierte? Comparativa completa entre LandForge (IA + chatbot + agencias) y Carrd (one-page builder).",
    url: "https://landforge.digital/comparar/landforge-vs-carrd",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "LandForge vs Carrd", item: "https://landforge.digital/comparar/landforge-vs-carrd" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LandForge vs Carrd 2026: Comparativa para Landing Pages de Conversión",
  description: "Análisis detallado de LandForge versus Carrd para profesionales y agencias que necesitan landing pages que conviertan de verdad.",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge" },
  datePublished: "2026-03-15",
  dateModified: "2026-03-27",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es Carrd suficiente para una landing page profesional?",
      acceptedAnswer: { "@type": "Answer", text: "Carrd es excelente para proyectos personales, portfolios sencillos o páginas de enlace tipo Linktree. Sin embargo, para landing pages profesionales orientadas a conversión (campañas de pago, captación de leads, embudos de venta), Carrd se queda corto al no ofrecer chatbot de ventas, A/B testing, scoring de conversión ni secciones múltiples optimizadas." },
    },
    {
      "@type": "Question",
      name: "¿Merece la pena pagar más por LandForge si Carrd cuesta solo 19$/año?",
      acceptedAnswer: { "@type": "Answer", text: "Depende del uso. Si creas una página personal o un enlace bio, Carrd es imbatible en precio. Pero si cada landing page que publicas debe generar leads o ventas para un cliente de agencia, el ROI de LandForge compensa con creces la diferencia de precio: generas en 30 segundos lo que en Carrd te llevaría horas, e incluyes chatbot de ventas y optimización de conversión sin coste extra." },
    },
    {
      "@type": "Question",
      name: "¿Puedo migrar mis páginas de Carrd a LandForge?",
      acceptedAnswer: { "@type": "Answer", text: "No existe una migración automática directa, pero el proceso es muy rápido: describe el objetivo de tu landing en el generador de LandForge y en 30 segundos tendrás una versión nueva, optimizada para conversión y con chatbot integrado. En la mayoría de casos el resultado supera a la versión original de Carrd." },
    },
  ],
};

export default function LandForgeVsCarrd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Comparativa de Software — MOFU
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl tracking-tight leading-tight mb-6">
              LandForge vs Carrd: ¿Cuál genera más conversiones{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                en 2026?
              </span>
            </h1>

            <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Carrd es probablemente el builder más barato del mercado. Pero barato y simple no siempre significa rentable. Analizamos ambas herramientas sin sesgos: cuándo Carrd es suficiente y cuándo necesitas algo más.
            </p>
          </section>

          {/* ── 2. TABLA COMPARATIVA PRINCIPAL ── */}
          <section className="px-6 pb-20">
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                    <th className="p-5 font-bold text-[#6B7280] text-sm w-1/3">Criterio de Comparación</th>
                    <th className="p-5 font-bold text-[#9D4EDD] w-1/3">LandForge</th>
                    <th className="p-5 font-bold text-[#6B7280] w-1/3">Carrd</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {[
                    { cat: "⚡ Velocidad de Creación", lf: "30 segundos — un formulario y listo", cr: "30–90 minutos de diseño manual con drag & drop" },
                    { cat: "📄 Tipo de página", lf: "Landing pages multi-sección con hero, beneficios, testimonios, CTA, FAQ", cr: "Una sola página (one-page) con scroll continuo, sin secciones avanzadas" },
                    { cat: "🤖 Inteligencia Artificial", lf: "Sí — genera copy, estructura, imágenes y chatbot automáticamente", cr: "No — todo el contenido y diseño es 100% manual" },
                    { cat: "💬 Chatbot de Ventas", lf: "Sí — Forgi se entrena solo con el contenido de cada landing", cr: "No disponible. Sin integración nativa de chatbot" },
                    { cat: "📊 Scoring de Conversión", lf: "Sí — puntuación predictiva de conversión antes de publicar", cr: "No — sin métricas de conversión integradas" },
                    { cat: "🧪 A/B Testing", lf: "Sí — nativo, sin herramientas de terceros", cr: "No disponible" },
                    { cat: "💰 Precio", lf: "Desde 0€ (1 landing gratis). Plan Pro desde 29€/mes", cr: "Desde 19$/año (Pro). El plan más barato del mercado" },
                    { cat: "🎨 Plantillas disponibles", lf: "Plantillas por sector generadas con IA + personalización automática", cr: "Plantillas genéricas limitadas. Diseño visual básico con columnas y filas" },
                    { cat: "🏢 White Label", lf: "Sí — disponible en Plan Unlimited (97€/mes)", cr: "No disponible" },
                    { cat: "📱 Responsive", lf: "Sí — todas las landings son mobile-first por defecto", cr: "Sí — responsive automático, aunque con control limitado" },
                    { cat: "🔗 Dominio propio", lf: "Sí — dominio personalizado incluido en todos los planes", cr: "Sí — disponible desde el plan Pro (19$/año)" },
                    { cat: "✅ Ideal para", lf: "Agencias, freelancers, campañas de pago, captación B2B y local", cr: "Páginas personales, enlaces bio, portfolios sencillos, MVPs mínimos" },
                  ].map((row) => (
                    <tr key={row.cat} className="hover:bg-gray-50">
                      <td className="p-5 font-semibold text-[#1A1A2E]">{row.cat}</td>
                      <td className="p-5 text-[#1A1A2E]">{row.lf}</td>
                      <td className="p-5 text-[#6B7280]">{row.cr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 3. CUÁNDO ELEGIR CADA UNO ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8">
                <h2 className="text-2xl font-extrabold mb-6">Elige LandForge si...</h2>
                <ul className="space-y-3">
                  {[
                    "Gestionas campañas de pago y necesitas landings que conviertan, no solo que existan",
                    "Quieres un chatbot de ventas integrado sin pagar herramientas extra",
                    "Necesitas entregar landing pages a clientes de tu agencia en el mismo día",
                    "Buscas A/B testing y scoring de conversión sin configuración técnica",
                    "Quieres escalar de 1 a 100 landings con SEO Programático",
                    "Necesitas white label para presentar las landings bajo tu propia marca",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[#6B7280] text-sm">
                      <span className="text-[#9D4EDD] font-bold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="mt-8 inline-block w-full text-center py-4 rounded-xl font-bold text-white" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}>
                  Probar LandForge gratis →
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-extrabold mb-6 text-[#6B7280]">Elige Carrd si...</h2>
                <ul className="space-y-3">
                  {[
                    "Necesitas una página personal, portfolio o enlace bio por muy poco dinero",
                    "Tu proyecto es un MVP mínimo y solo necesitas validar una idea rápidamente",
                    "No necesitas captar leads ni optimizar conversiones — solo presencia online",
                    "Tu presupuesto es extremadamente limitado (19$/año es difícil de superar)",
                    "Buscas una página estática simple sin funcionalidades avanzadas",
                    "No trabajas con clientes ni necesitas escalar la producción de landings",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[#6B7280] text-sm">
                      <span className="text-gray-400 font-bold flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── 4. FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre LandForge vs Carrd</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Es Carrd suficiente para una landing page profesional?", a: "Carrd es excelente para proyectos personales, portfolios sencillos o páginas de enlace tipo Linktree. Sin embargo, para landing pages profesionales orientadas a conversión (campañas de pago, captación de leads, embudos de venta), Carrd se queda corto al no ofrecer chatbot de ventas, A/B testing, scoring de conversión ni secciones múltiples optimizadas." },
                  { q: "¿Merece la pena pagar más por LandForge si Carrd cuesta solo 19$/año?", a: "Depende del uso. Si creas una página personal o un enlace bio, Carrd es imbatible en precio. Pero si cada landing page que publicas debe generar leads o ventas para un cliente de agencia, el ROI de LandForge compensa con creces la diferencia: generas en 30 segundos lo que en Carrd te llevaría horas, e incluyes chatbot de ventas y optimización de conversión sin coste extra." },
                  { q: "¿Puedo migrar mis páginas de Carrd a LandForge?", a: "No existe una migración automática directa, pero el proceso es muy rápido: describe el objetivo de tu landing en el generador de LandForge y en 30 segundos tendrás una versión nueva, optimizada para conversión y con chatbot integrado. En la mayoría de casos el resultado supera a la versión original de Carrd." },
                ].map((faq) => (
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

          {/* ── 5. CTA ── */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white mb-5">Carrd es barato. LandForge es rentable.</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Si tu landing page tiene que vender, no solo existir, necesitas algo más que un one-page builder. Prueba LandForge gratis y genera tu primera landing con chatbot en 30 segundos.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Probar LandForge gratis →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más comparativas y recursos</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
                <Link href="/comparar/landforge-vs-unbounce" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Unbounce</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias de Marketing</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Guía: Cómo Aumentar la Conversión</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
