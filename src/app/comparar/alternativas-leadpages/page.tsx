import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alternativas a Leadpages con IA (2026)",
  description:
    "¿Buscas alternativa a Leadpages con IA? Comparativa de las mejores opciones 2026 para agencias: velocidad, chatbot y precio justo.",
  keywords: [
    "alternativas leadpages",
    "alternativa leadpages agencias",
    "mejor que leadpages landing page ia",
    "leadpages precio alternativa",
    "herramientas landing pages alternativas",
  ],
  alternates: {
    canonical: "https://landforge.digital/comparar/alternativas-leadpages",
  },
  openGraph: {
    title: "Alternativas a Leadpages con IA (2026)",
    description:
      "¿Buscas alternativa a Leadpages con IA? Comparativa de las mejores opciones 2026 para agencias: velocidad, chatbot y precio justo.",
    url: "https://landforge.digital/comparar/alternativas-leadpages",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Las 5 Mejores Alternativas a Leadpages para Agencias en 2026",
  description: "Análisis y comparativa de alternativas a Leadpages para agencias digitales que buscan mayor velocidad, IA nativa y precio más justo.",
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
      name: "¿Por qué buscar alternativas a Leadpages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leadpages es una herramienta sólida pero con limitaciones importantes para agencias: su plan Standard (49$/mes) no incluye A/B testing, el editor puede sentirse anticuado frente a opciones modernas con IA y el soporte telefónico solo está disponible en planes superiores. Muchas agencias buscan alternativas con IA nativa y mayor velocidad de producción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la alternativa a Leadpages más barata en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge ofrece un plan gratuito (1 landing) y su plan de agencias desde 97€/mes para dominios ilimitados. Es significativamente más económico que Leadpages Pro (99$/mes) o el plan Advanced (239$/mes), con la ventaja adicional de incluir IA generativa y chatbot de ventas nativo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Leadpages tiene inteligencia artificial para crear landing pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leadpages tiene funcionalidades básicas de IA para sugerir textos, pero no genera la página completa de forma autónoma. LandForge genera la landing completa (estructura, copy, diseño y chatbot) a partir de un briefing en lenguaje natural en 30 segundos.",
      },
    },
  ],
};

const alternatives = [
  {
    rank: "01",
    name: "LandForge",
    badge: "⭐ Mejor para Agencias con IA",
    desc: "La única herramienta del mercado que genera la landing completa con IA en 30 segundos e incluye un chatbot de ventas nativo sin coste extra. Ideal para agencias que necesitan escalar producción sin escalar plantilla.",
    pros: ["IA generativa completa (copy + estructura + diseño)", "Chatbot de ventas Forgi incluido", "30 segundos de la idea a la landing publicada", "Plan de agencias a precio razonable (97€/mes, dominios ilimitados)"],
    contras: ["Menor control visual que Leadpages en diseños muy personalizados", "A/B testing en desarrollo (Q2 2026)"],
    price: "Gratis / desde 49€/mes",
    link: "/register",
    cta: "Probar gratis →",
    highlight: true,
  },
  {
    rank: "02",
    name: "Unbounce",
    badge: "Clásico empresarial",
    desc: "El referente histórico del sector. Muy potente en SmartTraffic (IA de enrutamiento A/B) y popups. Precio elevado para lo que ofrece en generación por IA.",
    pros: ["SmartTraffic — enrutamiento IA entre variantes", "Editor muy maduro con muchas plantillas", "Popups y sticky bars integrados"],
    contras: ["99$/mes el plan más barato (1 dominio)", "Sin chatbot de ventas nativo", "Curva de aprendizaje elevada"],
    price: "Desde 99$/mes",
    link: "/comparar/landforge-vs-unbounce",
    cta: "Ver comparativa completa →",
    highlight: false,
  },
  {
    rank: "03",
    name: "Webflow",
    badge: "Control visual máximo",
    desc: "Para diseñadores con tiempo y budget ilimitado. El editor más potente del mercado, pero con curva de aprendizaje alta y sin IA generativa ni chatbot.",
    pros: ["Control visual al píxel", "CMS muy potente para contenido editorial", "Ideal para proyectos de branding premium"],
    contras: ["Alta curva de aprendizaje", "Sin IA generativa de landing pages", "Sin chatbot nativo"],
    price: "Desde 14$/mes + hosting",
    link: "/comparar/landforge-vs-webflow",
    cta: "Ver comparativa completa →",
    highlight: false,
  },
];

export default function AlternativasLeadpages() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-16 text-center flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Comparativa — Alternativas a Leadpages
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl tracking-tight leading-tight mb-6">
              Las mejores alternativas a Leadpages{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                con IA en 2026
              </span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-8">
              Leadpages lleva siendo una referencia desde 2013. En 2026, con la IA generativa cambiando las reglas de juego, analiza si todavía es la mejor opción para tu agencia o si hay herramientas que te dan más por menos.
            </p>
          </section>

          {/* ── 2. LISTA DE ALTERNATIVAS ── */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-4xl mx-auto space-y-8">
              {alternatives.map((alt) => (
                <div key={alt.name} className={`rounded-2xl border p-8 ${alt.highlight ? "border-[#9D4EDD] bg-[#FAF5FF] shadow-lg shadow-[#9D4EDD]/10" : "border-gray-200 bg-white"}`}>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <div className="flex items-center gap-4">
                      <span className="font-mono font-bold text-2xl text-[#9D4EDD]">{alt.rank}</span>
                      <div>
                        <h2 className="text-xl font-extrabold">{alt.name}</h2>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${alt.highlight ? "bg-[#9D4EDD] text-white" : "bg-gray-100 text-[#6B7280]"}`}>{alt.badge}</span>
                      </div>
                    </div>
                    <span className="font-bold text-[#9D4EDD]">{alt.price}</span>
                  </div>
                  <p className="text-[#6B7280] mb-5 leading-relaxed">{alt.desc}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div>
                      <h3 className="font-bold text-sm mb-2 text-green-700">✅ Puntos Fuertes</h3>
                      <ul className="space-y-1">{alt.pros.map((p) => <li key={p} className="text-sm text-[#6B7280] flex gap-2"><span className="text-green-500 flex-shrink-0">✓</span>{p}</li>)}</ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2 text-red-600">⚠️ Limitaciones</h3>
                      <ul className="space-y-1">{alt.contras.map((c) => <li key={c} className="text-sm text-[#6B7280] flex gap-2"><span className="text-red-400 flex-shrink-0">×</span>{c}</li>)}</ul>
                    </div>
                  </div>
                  <Link href={alt.link} className={`inline-block px-6 py-3 rounded-xl font-bold text-sm transition hover:-translate-y-0.5 ${alt.highlight ? "text-white" : "border border-[#E0AAFF] text-[#9D4EDD] hover:bg-[#F3E8FF]"}`} style={alt.highlight ? { background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" } : {}}>
                    {alt.cta}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3. TABLE COMPARATIVA PRECIOS ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-12">Comparativa de precios: Leadpages vs las alternativas</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF]">
                <table className="w-full text-left bg-white text-sm">
                  <thead>
                    <tr className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                      <th className="p-5 font-bold text-[#6B7280]">Herramienta</th>
                      <th className="p-5 font-bold text-[#6B7280]">Plan básico</th>
                      <th className="p-5 font-bold text-[#6B7280]">Plan agencias</th>
                      <th className="p-5 font-bold text-[#6B7280]">IA nativa</th>
                      <th className="p-5 font-bold text-[#6B7280]">Chatbot ventas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["LandForge", "0€ (1 landing gratis)", "97€/mes (ilimitado)", "✅ Completa (30s)", "✅ Forgi nativo"],
                      ["Leadpages", "49$/mes", "239$/mes", "⚠️ Parcial", "❌ Sin chatbot"],
                      ["Unbounce", "99$/mes", "575$/mes", "⚠️ SmartTraffic", "❌ Sin chatbot"],
                      ["Webflow", "14$/mes", "N/A (por proyecto)", "❌ Ninguna", "❌ Sin chatbot"],
                    ].map(([tool, basic, agency, ai, chatbot]) => (
                      <tr key={tool} className={tool === "LandForge" ? "bg-[#FAF5FF] font-semibold" : ""}>
                        <td className="p-5 font-bold">{tool}</td>
                        <td className="p-5">{basic}</td>
                        <td className="p-5">{agency}</td>
                        <td className="p-5">{ai}</td>
                        <td className="p-5">{chatbot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── 4. FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre alternativas a Leadpages</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Por qué buscar alternativas a Leadpages?", a: "Leadpages es sólida pero con limitaciones: su plan Standard (49$/mes) no incluye A/B testing, el editor es anticuado frente a opciones con IA y el soporte solo está disponible en planes superiores." },
                  { q: "¿Cuál es la alternativa más barata en 2026?", a: "LandForge ofrece un plan gratuito (1 landing) y su plan de agencias desde 97€/mes para dominios ilimitados. Es más económico que Leadpages Pro (99$/mes), con IA generativa y chatbot de ventas incluidos." },
                  { q: "¿Leadpages tiene inteligencia artificial?", a: "Leadpages tiene sugerencias básicas de IA para textos, pero no genera la página completa. LandForge genera landing completa (estructura, copy, diseño y chatbot) desde un briefing en 30 segundos." },
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
              <h2 className="text-3xl font-extrabold text-white mb-5">La alternativa a Leadpages que tu agencia estaba esperando</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Prueba LandForge gratis hoy. Sin tarjeta de crédito. Tu primera landing en 30 segundos.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Empezar gratis →
              </Link>
            </div>
          </section>

          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más comparativas</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/comparar/landforge-vs-unbounce" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Unbounce</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot: Ventas 24/7</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
