import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LandForge vs Unbounce 2026: Comparativa",
  description:
    "Comparativa entre LandForge (IA + chatbot en 30s) y Unbounce (editor visual). Descubre cuál encaja mejor según precio, velocidad y conversión.",
  keywords: [
    "landforge vs unbounce",
    "alternativa unbounce landing pages",
    "unbounce precio 2026",
    "mejor alternativa unbounce agencias",
    "comparativa herramientas landing page ia",
  ],
  alternates: {
    canonical: "https://landforge.digital/comparar/landforge-vs-unbounce",
  },
  openGraph: {
    title: "LandForge vs Unbounce 2026: Comparativa",
    description:
      "Comparativa entre LandForge (IA + chatbot en 30s) y Unbounce (editor visual). Descubre cuál encaja mejor según precio, velocidad y conversión.",
    url: "https://landforge.digital/comparar/landforge-vs-unbounce",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LandForge vs Unbounce 2026: Comparativa Completa para Agencias",
  description: "Análisis técnico y estratégico de LandForge versus Unbounce para agencias que necesitan escalar la producción de landing pages.",
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
      name: "¿Es LandForge una alternativa directa a Unbounce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, especialmente para agencias y negocios que necesitan velocidad de entrega. LandForge genera landing pages con IA en 30 segundos, incluyendo chatbot de ventas integrado. Unbounce requiere diseño manual por bloques y no incluye chatbot nativo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué Unbounce es tan caro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unbounce empezó en 2009 con un modelo de precios orientado a grandes empresas. Su plan más barato cuesta 99$/mes y solo incluye 1 dominio y 500 conversiones/mes. LandForge ofrece su plan de agencias desde 49€/mes con dominios ilimitados y sin límites de conversiones.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge tiene popup y sticky bar como Unbounce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge se centra en landing pages de alta conversión con chatbot IA integrado. No incluye popups o sticky bars como Unbounce SmartTraffic. Si necesitas esas funcionalidades orientadas a CRO avanzado en tu web existente, Unbounce puede ser un complemento.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "LandForge vs Unbounce", item: "https://landforge.digital/comparar/landforge-vs-unbounce" },
  ],
};

export default function LandForgeVsUnbounce() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-16 text-center flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Comparativa — MOFU
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl tracking-tight leading-tight mb-6">
              LandForge vs Unbounce:{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                ¿Cuál vale tu dinero en 2026?
              </span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-8">
              Unbounce fue el rey del landing page builder durante una década. Pero la IA ha cambiado las reglas del juego. Si tu agencia necesita escalar la producción de landings y reducir el tiempo de entrega, este análisis es para ti.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/register" className="px-7 py-3.5 rounded-xl font-bold text-white transition hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}>
                Probar LandForge gratis →
              </Link>
              <Link href="#tabla" className="px-7 py-3.5 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold hover:border-[#9D4EDD] transition">
                Ver tabla comparativa
              </Link>
            </div>
          </section>

          {/* ── 2. RESUMEN EJECUTIVO ── */}
          <section className="px-6 py-12 bg-[#F3E8FF]">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
              {[
                { label: "Precio de entrada", lf: "0€ (plan gratis)", ub: "99$/mes" },
                { label: "Tiempo para crear 1 landing", lf: "30 segundos (IA)", ub: "3-8 horas (diseño manual)" },
                { label: "Chatbot de ventas integrado", lf: "✅ Forgi (0€ extra)", ub: "❌ Requiere Drift/Intercom" },
              ].map((c) => (
                <div key={c.label} className="bg-white rounded-2xl border border-[#E0AAFF] p-6">
                  <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">{c.label}</p>
                  <div className="flex flex-col gap-2">
                    <div className="text-[#9D4EDD] font-bold">LandForge: {c.lf}</div>
                    <div className="text-[#6B7280] font-semibold">Unbounce: {c.ub}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3. TABLA COMPARATIVA ── */}
          <section id="tabla" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                    <th className="p-5 font-bold text-[#6B7280] text-sm w-1/3">Criterio</th>
                    <th className="p-5 font-bold text-[#9D4EDD] w-1/3">LandForge</th>
                    <th className="p-5 font-bold text-[#6B7280] w-1/3">Unbounce</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {[
                    ["💰 Precio inicial", "0€/mes (plan gratuito 1 landing)", "99$/mes (Build) — solo 1 dominio"],
                    ["💰 Plan agencias", "97€/mes (dominios ilimitados)", "575$/mes (Unbounce Agency)"],
                    ["⚡ Generación de página", "30 segundos con IA generativa", "3-8 horas con editor visual por bloques"],
                    ["🤖 IA para contenido", "Sí — genera copy, estructura y variantes", "Sí — Smart Builder (limitado)"],
                    ["💬 Chatbot de ventas", "Sí — Forgi integrado (0€ extra)", "No — requiere integración externa"],
                    ["📱 Core Web Vitals", "Excelentes de serie (React/Next.js)", "Variables según la complejidad del diseño"],
                    ["🧪 A/B Testing", "En desarrollo (Forgi variants)", "Sí — Smart Traffic (IA de tráfico)"],
                    ["🔗 Dominios incluidos", "Ilimitados en Plan Unlimited", "1 dominio en Build / 3 en Optimize"],
                    ["📊 Analytics integrado", "Panel básico + Google Analytics", "Analytics nativo + Google Analytics"],
                    ["🌍 Idioma de la plataforma", "Español nativo", "Inglés (con soporte en español)"],
                    ["✅ ¿Para quién?", "Agencias, freelancers, velocidad máxima", "Empresas que necesitan SmartTraffic y popups"],
                  ].map(([feat, lf, ub]) => (
                    <tr key={feat} className="hover:bg-gray-50">
                      <td className="p-5 font-semibold text-[#1A1A2E]">{feat}</td>
                      <td className="p-5 text-[#1A1A2E]">{lf}</td>
                      <td className="p-5 text-[#6B7280]">{ub}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 4. CUÁNDO ELEGIR ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8">
                <h2 className="text-2xl font-extrabold mb-6 text-[#9D4EDD]">✅ Elige LandForge si...</h2>
                <ul className="space-y-3">
                  {[
                    "Necesitas crear landings rápido — en horas, no días",
                    "Tu agencia gestiona múltiples clientes con presupuesto ajustado",
                    "Quieres un chatbot de ventas sin pagar otra herramienta",
                    "Priorizas velocidad de carga (Core Web Vitals) sobre flexibilidad visual",
                    "La plataforma en español es importante para tu equipo",
                    "El precio de Unbounce se come tu margen en clientes pequeños",
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
                <h2 className="text-2xl font-extrabold mb-6 text-[#6B7280]">→ Considera Unbounce si...</h2>
                <ul className="space-y-3">
                  {[
                    "Necesitas SmartTraffic (IA de enrutamiento de tráfico A/B)",
                    "Usas popups y sticky bars intensivamente en webs existentes",
                    "Tu equipo ya tiene experiencia con el editor de Unbounce",
                    "El presupuesto del cliente le permite absorber 99-575$/mes",
                    "Necesitas integraciones muy específicas con CRMs empresariales",
                    "Gestionas campañas de alto volumen que requieren analytics avanzado",
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

          {/* ── 5. FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre LandForge vs Unbounce</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Es LandForge una alternativa directa a Unbounce?", a: "Sí, especialmente para agencias que necesitan velocidad. LandForge genera landings con IA en 30 segundos, incluyendo chatbot de ventas integrado. Unbounce requiere diseño manual y no incluye chatbot nativo." },
                  { q: "¿Por qué Unbounce es tan caro?", a: "Unbounce empezó en 2009 con modelo de precios para grandes empresas. Su plan más barato son 99$/mes con 1 dominio y 500 conversiones. LandForge ofrece planes de agencia desde 49€/mes con dominios ilimitados." },
                  { q: "¿LandForge tiene popup y sticky bar como Unbounce?", a: "LandForge se centra en landing pages con chatbot IA integrado. No incluye popups o sticky bars. Si necesitas esas funcionalidades en tu web existente, Unbounce puede ser un complemento." },
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

          {/* ── 6. CTA ── */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white mb-5">¿Tu agencia paga 99$/mes por algo que puedes hacer en 30s?</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Prueba LandForge gratis y crea tu primera landing en 30 segundos. Sin tarjeta de crédito.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Empezar gratis — sin tarjeta →
              </Link>
            </div>
          </section>

          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más comparativas</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
                <Link href="/comparar/alternativas-leadpages" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Alternativas a Leadpages</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
