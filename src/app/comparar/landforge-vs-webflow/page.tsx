import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LandForge vs Webflow 2026: Comparativa",
  description:
    "Comparativa entre LandForge (IA en 30s) y Webflow (diseño visual). Descubre cuál necesita tu agencia según velocidad, precio y conversión.",
  keywords: [
    "landforge vs webflow",
    "alternativa webflow landing pages",
    "webflow vs generador landing ia",
    "comparativa herramientas landing pages",
  ],
  alternates: {
    canonical: "https://landforge.digital/comparar/landforge-vs-webflow",
  },
  openGraph: {
    title: "LandForge vs Webflow 2026: Comparativa",
    description:
      "Comparativa entre LandForge (IA en 30s) y Webflow (diseño visual). Descubre cuál necesita tu agencia según velocidad, precio y conversión.",
    url: "https://landforge.digital/comparar/landforge-vs-webflow",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LandForge vs Webflow 2026: Comparativa Completa para Agencias",
  description: "Análisis técnico y estratégico de LandForge versus Webflow para agencias de marketing que necesitan crear landing pages de alta conversión.",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge" },
  datePublished: "2026-03-01",
  dateModified: "2026-03-25",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Para qué tipo de proyecto es mejor Webflow?",
      acceptedAnswer: { "@type": "Answer", text: "Webflow es ideal para proyectos de branding donde el control visual al píxel importa más que la velocidad de entrega: webs corporativas, portfolios de diseño o proyectos con gran presupuesto de desarrollo frontend. Si necesitas muchas iteraciones de diseño y tienes a un developer con experiencia en Webflow, es una opción excelente." },
    },
    {
      "@type": "Question",
      name: "¿Para qué tipo de proyecto es mejor LandForge?",
      acceptedAnswer: { "@type": "Answer", text: "LandForge es la opción correcta cuando la velocidad de entrega y la conversión son la prioridad: landing pages de Google Ads para clientes de agencia, landings de producto para eCommerce, páginas de captación para clínicas, despachos o servicios locales. Si necesitas entregar en el mismo día a un precio sostenible, LandForge gana." },
    },
    {
      "@type": "Question",
      name: "¿LandForge tiene dashboard de edición visual como Webflow?",
      acceptedAnswer: { "@type": "Answer", text: "LandForge ofrece edición por bloques con Forgi Editor (lenguaje natural) y edición directa de textos haciendo doble clic. No es un canvas visual 100% libre como Webflow, pero en el 90% de los casos una agencia no necesita esa libertad para una landing page de conversión." },
    },
  ],
};

export default function LandForgeVsWebflow() {
  return (
    <>
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
              LandForge vs Webflow: La guerra por la conversión{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                en 2026
              </span>
            </h1>

            <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Webflow es una obra maestra del editor visual. Pero cuando tu cliente quiere una landing de Google Ads para el lunes y hoy es viernes, Webflow no es tu aliado. Análisis completo, sin sesgos.
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
                    <th className="p-5 font-bold text-[#6B7280] w-1/3">Webflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {[
                    { cat: "⚡ Velocidad de Entrega", lf: "30 segundos (rellenas un formulario)", wf: "8 a 40 horas de diseño visual" },
                    { cat: "📚 Curva de aprendizaje", lf: "Ninguna — cualquier persona del equipo puede usarlo", wf: "Alta — requiere dominar CSS, Flexbox, Grid y el CMS de Webflow" },
                    { cat: "🤖 IA Generativa integrada", lf: "Sí — genera copy, estructura y Chatbot de ventas", wf: "No — la generación es manual. Plugins de IA son externos" },
                    { cat: "💬 Chatbot de Ventas nativo", lf: "Sí — Forgi se entrena automáticamente con cada landing", wf: "No — requiere integrar Intercom, Tidio o similar (coste extra)" },
                    { cat: "⚡ Core Web Vitals (LCP)", lf: "< 1 segundo en el 95% de los casos", wf: "Variable. Alta personalización suele penalizar el LCP" },
                    { cat: "🎨 Control de diseño visual", lf: "Bloques editables + IA. Sin canvas libre pixel-perfect", wf: "Control total al píxel. El más potente del mercado" },
                    { cat: "💰 Precio de entrada", lf: "Desde 0€ (1 landing gratis)", wf: "Desde 14$/mes + plans de hosting separados" },
                    { cat: "🏢 White Label para agencias", lf: "Sí — disponible en Plan Unlimited (97€/mes)", wf: "Sí — disponible, pero requiere workspace de agencia adicional" },
                    { cat: "📊 SEO Programático", lf: "Escalable con clonación de template en 30s por nicho", wf: "Potente con CMS, pero manual y técnico" },
                    { cat: "✅ Ideal para", lf: "Agencias, freelancers, campañas rápidas, conversión B2B", wf: "Proyectos de branding premium, portfolios, startups con developer" },
                  ].map((row) => (
                    <tr key={row.cat} className="hover:bg-gray-50">
                      <td className="p-5 font-semibold text-[#1A1A2E]">{row.cat}</td>
                      <td className="p-5 text-[#1A1A2E]">{row.lf}</td>
                      <td className="p-5 text-[#6B7280]">{row.wf}</td>
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
                    "Necesitas entregar landings a clientes de tu agencia en el mismo día",
                    "Tu negocio depende de campañas de pago (Google Ads, Meta Ads, TikTok)",
                    "Quieres un chatbot de ventas que no requiera configuración extra",
                    "No tienes un developer de Webflow en plantilla",
                    "El coste por landing es un factor determinante en tu margen",
                    "Necesitas escalar de 1 a 100 landings usando SEO Programático",
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
                <h2 className="text-2xl font-extrabold mb-6 text-[#6B7280]">Elige Webflow si...</h2>
                <ul className="space-y-3">
                  {[
                    "Tu proyecto requiere control visual al píxel en cada elemento",
                    "Tienes un developer o diseñador con experiencia en Webflow en plantilla",
                    "Buscas construir una web corporativa completa, no solo landings",
                    "Tu cliente valora el branding y el diseño por encima de la velocidad",
                    "El proyecto tiene presupuesto holgado de desarrollo frontend",
                    "Necesitas un CMS muy potente para contenido editorial complejo",
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
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre LandForge vs Webflow</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Para qué tipo de proyecto es mejor Webflow?", a: "Webflow es ideal para proyectos de branding donde el control visual al píxel importa más que la velocidad: webs corporativas, portfolios de diseño o proyectos con gran presupuesto de desarrollo frontend." },
                  { q: "¿Para qué tipo de proyecto es mejor LandForge?", a: "LandForge es la opción correcta cuando la velocidad de entrega y la conversión son la prioridad: landing pages de Google Ads para clientes, landings de eCommerce, páginas de captación para clínicas o servicios locales." },
                  { q: "¿LandForge tiene dashboard de edición visual como Webflow?", a: "LandForge ofrece edición por bloques con Forgi Editor en lenguaje natural. No es un canvas visual 100% libre como Webflow, pero en el 90% de los casos una agencia no necesita esa libertad para una landing page de conversión." },
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
              <h2 className="text-3xl font-extrabold text-white mb-5">¿Necesitas speed y conversión? LandForge gana.</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Pruébalo gratis y genera tu primera landing en 30 segundos. Si no es para ti, no habrás perdido nada. Si lo es, habrás ganado horas de trabajo cada semana.</p>
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
                <Link href="/integraciones/wordpress" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge con WordPress (vs Elementor)</Link>
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
