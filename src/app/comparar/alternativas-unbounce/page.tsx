import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Las 4 Mejores Alternativas a Unbounce con IA en 2026",
  description:
    "Unbounce sube precios cada año. Descubre las 4 mejores alternativas a Unbounce para agencias en 2026: comparativa de precios, funcionalidades IA y tasas de conversión reales.",
  keywords: [
    "alternativas unbounce",
    "mejor alternativa unbounce agencias",
    "unbounce competidores 2026",
    "herramientas landing pages ia alternativas unbounce",
    "landing page builder sin unbounce",
  ],
  alternates: {
    canonical: "https://landforge.digital/comparar/alternativas-unbounce",
  },
  openGraph: {
    title: "Las 4 Mejores Alternativas a Unbounce con IA en 2026",
    description:
      "Unbounce sube precios cada año. Descubre las 4 mejores alternativas a Unbounce para agencias en 2026: comparativa de precios, funcionalidades IA y tasas de conversión reales.",
    url: "https://landforge.digital/comparar/alternativas-unbounce",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Las 4 Mejores Alternativas a Unbounce con IA en 2026",
  description: "Ranking de alternativas a Unbounce para agencias en 2026 con comparativa de precio y funcionalidades IA.",
  author: { "@type": "Organization", name: "LandForge" },
  datePublished: "2026-03-01",
  dateModified: "2026-03-25",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Por qué Unbounce es tan caro para agencias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plan Grow de Unbounce cuesta 149$/mes (hasta 500 conversiones) y sube a 199$/mes con más visitas. Para agencias que gestionan 10-20 clientes, el coste escala radicalmente. Además no incluye chatbot de ventas nativo, lo que obliga a contratar herramientas adicionales como Drift o Intercom.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puede LandForge reemplazar a Unbounce para una agencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, con ventajas clave. LandForge genera la landing completa con IA en 30 segundos (Unbounce requiere construcción manual desde plantillas), incluye chatbot de ventas Forgi de forma nativa, y el plan Unlimited para agencias cuesta 97€/mes vs los 199$/mes de Unbounce. El único punto donde Unbounce sigue siendo superior es en Smart Traffic (distribución automática de tráfico por segmento).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son las alternativas a Unbounce con mejor ratio precio/valor en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para agencias: 1) LandForge (97€/mes, IA generativa + chatbot nativo). 2) Leadpages (99$/mes, buen editor visual). 3) Systeme.io (27€/mes, todo en uno pero menos foco en landing pages). Para empresas enterprise que necesitan Smart Traffic, Unbounce sigue siendo la opción.",
      },
    },
  ],
};

const alternatives = [
  {
    rank: "01",
    name: "LandForge",
    price: "Desde 0€ (plan gratuito) · Pro 49€/mes · Unlimited 97€/mes",
    badge: "⭐ Mejor alternativa para agencias",
    pros: ["IA generativa: landing completa en 30s", "Chatbot de ventas Forgi incluido en todos los planes", "Plan Unlimited para agencias: 97€/mes sin límite de clientes", "White label disponible", "Editor por bloques con IA"],
    cons: ["Sin Smart Traffic (distribución automática)", "Dominio nuevo (autoridad en construcción)"],
    bestFor: "Agencias que priorizan velocidad de creación y chatbot IA nativo",
    highlight: true,
    cta: "/register",
    ctaLabel: "Probar LandForge gratis →",
  },
  {
    rank: "02",
    name: "Leadpages",
    price: "Estándar 49$/mes · Pro 99$/mes · Avanzado 199$/mes",
    badge: "Buena alternativa económica",
    pros: ["Editor visual drag & drop maduro", "Buena biblioteca de plantillas", "Integraciones nativas (Stripe, MailChimp)", "LeadMeter para scoring de copy"],
    cons: ["Sin IA generativa real (solo sugerencias básicas)", "Sin chatbot de ventas nativo", "Precio sube rápido al escalar", "Menos control sobre el diseño que Unbounce"],
    bestFor: "Negocios que buscan editor visual sin pagar el premium de Unbounce",
    highlight: false,
    cta: null,
    ctaLabel: null,
  },
  {
    rank: "03",
    name: "Systeme.io",
    price: "Freemium · Startup 27€/mes · Webinar 47€/mes · Unlimited 97€/mes",
    badge: "Mejor opción todo-en-uno para infoproductos",
    pros: ["Todo en uno (email + funnel + membresías + landing)", "Plan gratuito muy generoso", "Sin comisiones en ventas", "Precio muy competitivo"],
    cons: ["Editor de landing pages limitado vs Unbounce", "Sin IA generativa ni chatbot nativo", "Diseños menos profesionales", "No adecuado para agencias con múltiples clientes"],
    bestFor: "Infoproductores o coaches que quieren todo en una herramienta sin pagar mucho",
    highlight: false,
    cta: null,
    ctaLabel: null,
  },
  {
    rank: "04",
    name: "Instapage",
    price: "Create 99$/mes · Optimize 199$/mes · Convert (precio enterprise)",
    badge: "Mejor para tests A/B avanzados",
    pros: ["Collaboration en tiempo real", "Heatmaps y A/B testing avanzado", "AdMap para alinear anuncios con landing pages", "Velocidad de carga muy alta (AMP)"],
    cons: ["El más caro del mercado para equipos", "Sin IA generativa real", "Curva de aprendizaje elevada", "Precio no escala bien para agencias"],
    bestFor: "Equipos enterprise con inversión alta en Google Ads que necesitan test A/B muy sofisticado",
    highlight: false,
    cta: null,
    ctaLabel: null,
  },
];

export default function AlternativasUnbounce() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">

            {/* HERO */}
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
                Comparativa MOFU · Marzo 2026
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                Las 4 mejores alternativas a{" "}
                <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Unbounce
                </span>{" "}
                en 2026
              </h1>
              <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                Unbounce sube precios cada año y ya cuesta <strong className="text-[#1A1A2E]">hasta 799$/mes</strong> en el plan Concierge. Para agencias y pymes, hay opciones mejores. Analizamos las 4 alternativas reales con datos.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-[#6B7280]">
                <span>📅 Actualizado: Marzo 2026</span>
                <span>⏱️ 8 min de lectura</span>
                <span>✍️ LandForge Team</span>
              </div>
            </div>

            {/* POR QUÉ DEJAR UNBOUNCE */}
            <section className="mb-14 bg-[#1A1A2E] text-white rounded-2xl p-8">
              <h2 className="text-xl font-extrabold mb-6">¿Por qué los usuarios buscan alternativas a Unbounce?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "💸", title: "Precios que escalan mal", text: "El plan Grow cuesta 149$/mes para solo 500 conversiones. Para agencias con múltiples clientes, el coste es insostenible." },
                  { icon: "🤖", title: "Sin IA generativa real", text: "La 'IA' de Unbounce (Smart Traffic) redistribuye tráfico, pero no genera contenido ni copy. Tienes que construir la landing a mano desde plantillas." },
                  { icon: "💬", title: "Sin chatbot de ventas nativo", text: "Requiere integrar Drift, Intercom o similar (otro gasto de 50-500$/mes) para tener chatbot en las landing pages." },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* TABLA RESUMEN */}
            <section className="mb-14">
              <h2 className="text-2xl font-extrabold mb-6">Tabla comparativa: Unbounce vs alternativas 2026</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF]">
                <table className="w-full text-sm bg-white">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Herramienta</th>
                      <th className="p-4 text-center font-bold text-[#6B7280]">Precio/mes</th>
                      <th className="p-4 text-center font-bold text-[#6B7280]">IA Generativa</th>
                      <th className="p-4 text-center font-bold text-[#6B7280]">Chatbot Nativo</th>
                      <th className="p-4 text-center font-bold text-[#6B7280]">Agencias</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-center">
                    {[
                      ["LandForge ⭐", "0€ - 97€", "✅ Generativa", "✅ Forgi", "✅ White label"],
                      ["Unbounce", "99$ - 799$", "⚠️ Smart Traffic", "❌", "⚠️ Sin white label"],
                      ["Leadpages", "49$ - 199$", "⚠️ Parcial", "❌", "⚠️ Limitado"],
                      ["Systeme.io", "0€ - 97€", "❌", "❌", "❌ No orientado"],
                      ["Instapage", "99$ - 299$+", "❌", "❌", "⚠️ Enterprise"],
                    ].map(([nombre, precio, ia, chat, agencias]) => (
                      <tr key={nombre} className={nombre.includes("⭐") ? "bg-[#FAF5FF]" : ""}>
                        <td className="p-4 text-left font-bold">{nombre}</td>
                        <td className="p-4 font-semibold text-[#9D4EDD]">{precio}</td>
                        <td className="p-4">{ia}</td>
                        <td className="p-4">{chat}</td>
                        <td className="p-4">{agencias}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* RANKING DETALLADO */}
            <section className="mb-14">
              <h2 className="text-2xl font-extrabold mb-8">Ranking detallado de las 4 mejores alternativas a Unbounce</h2>
              <div className="space-y-8">
                {alternatives.map((alt) => (
                  <div key={alt.name} className={`rounded-2xl border-2 p-8 ${alt.highlight ? "border-[#9D4EDD] bg-[#FAF5FF]" : "border-gray-200 bg-white"}`}>
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono font-extrabold text-2xl text-[#9D4EDD]">{alt.rank}</span>
                        <div>
                          <h3 className="text-xl font-extrabold">{alt.name}</h3>
                          <span className="text-xs font-bold text-[#9D4EDD] bg-[#F3E8FF] px-2 py-0.5 rounded-full">{alt.badge}</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-[#9D4EDD]">{alt.price}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-2">✅ Ventajas</p>
                        <ul className="space-y-1">
                          {alt.pros.map(p => <li key={p} className="text-sm text-[#6B7280]">• {p}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">❌ Desventajas</p>
                        <ul className="space-y-1">
                          {alt.cons.map(c => <li key={c} className="text-sm text-[#6B7280]">• {c}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/60 border border-[#E0AAFF] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#9D4EDD] inline-block mb-4">
                      💡 Ideal para: {alt.bestFor}
                    </div>

                    {alt.cta && (
                      <div>
                        <Link href={alt.cta} className="inline-block px-6 py-3 rounded-xl font-bold text-sm text-white transition hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}>
                          {alt.ctaLabel}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre alternativas a Unbounce</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Por qué Unbounce es tan caro para agencias?", a: "El plan Grow cuesta 149$/mes para solo 500 conversiones. Para agencias con múltiples clientes, el coste escala radicalmente. Además, no incluye chatbot de ventas nativo." },
                  { q: "¿Puede LandForge reemplazar a Unbounce para una agencia?", a: "Sí, con ventajas clave. LandForge genera la landing completa con IA en 30 segundos (Unbounce requiere construcción manual), incluye Forgi de forma nativa, y el plan Unlimited cuesta 97€/mes vs 199$/mes de Unbounce." },
                  { q: "¿Cuáles son las alternativas con mejor ratio precio/valor en 2026?", a: "Para agencias: 1) LandForge (97€/mes, IA + chatbot nativo). 2) Leadpages (99$/mes, buen editor visual). 3) Systeme.io (27€/mes, todo en uno). Para enterprise con Smart Traffic, Unbounce sigue siendo válido." },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform flex-shrink-0 text-xl">+</span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl p-8 text-center mb-10" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">Prueba la alternativa a Unbounce que más convierte</h2>
              <p className="text-[#E0AAFF] mb-6">Primera landing en 30 segundos. Forgi activado. Sin tarjeta.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Empezar gratis con LandForge →
              </Link>
            </section>

            {/* Enlazado interno */}
            <div className="pt-8 border-t border-gray-100">
              <p className="font-bold text-sm text-[#6B7280] mb-4">Más comparativas</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/comparar/landforge-vs-unbounce" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Unbounce (directo)</Link>
                <Link href="/comparar/alternativas-leadpages" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Alternativas a Leadpages</Link>
                <Link href="/comparar" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Todas las Comparativas</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot IA</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
