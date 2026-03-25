import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comparativas: LandForge vs Competencia — ¿Cuál es la Mejor Opción?",
  description:
    "Comparativas honestas de LandForge con las principales herramientas de landing pages: Webflow, Unbounce y Leadpages. Encuentra la herramienta que mejor encaja con tu negocio.",
  keywords: [
    "comparativa herramientas landing pages",
    "landforge vs alternativas",
    "mejor herramienta landing page ia agencias",
    "alternativas landing page builder",
  ],
};

const comparativas = [
  {
    title: "LandForge vs Webflow",
    desc: "Webflow es el referente en control visual. LandForge es la opción IA para agencias que necesitan velocidad. Descubre cuándo elegir cada uno.",
    badge: "IA vs Control Visual",
    link: "/comparar/landforge-vs-webflow",
    icon: "🎨",
    winner: "LandForge para velocidad · Webflow para branding premium",
  },
  {
    title: "LandForge vs Unbounce",
    desc: "Unbounce fue el rey del landing page builder durante una década. ¿Sigue siéndolo con la llegada de la IA generativa? Analizamos precio, velocidad y conversión.",
    badge: "IA vs Smart Traffic",
    link: "/comparar/landforge-vs-unbounce",
    icon: "⚡",
    winner: "LandForge para agencias · Unbounce para SmartTraffic enterprise",
  },
  {
    title: "Alternativas a Leadpages",
    desc: "¿Leadpages se queda corto para tu agencia? Ranking de las 3 mejores alternativas con IA nativa en 2026, comparativa de precios y análisis de funcionalidades.",
    badge: "Ranking 2026",
    link: "/comparar/alternativas-leadpages",
    icon: "🏆",
    winner: "LandForge como mejor alternativa con IA nativa integrada",
  },
];

export default function ComparativasHub() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
      <main>

        {/* ── HERO ── */}
        <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
            Comparativas de Herramientas SEO
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl tracking-tight leading-tight mb-6">
            LandForge vs la{" "}
            <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              competencia
            </span>
          </h1>
          <p className="text-lg text-[#6B7280] max-w-xl leading-relaxed mb-8">
            Análisis honestos de las principales herramientas de landing pages. Sin afiliaciones que distorsionen los resultados. Elige la herramienta correcta para tu negocio o agencia.
          </p>
        </section>

        {/* ── COMPARATIVAS ── */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {comparativas.map((c) => (
              <div key={c.title} className="border border-[#E0AAFF] rounded-2xl p-8 hover:border-[#9D4EDD] hover:shadow-lg transition group">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{c.icon}</span>
                    <div>
                      <span className="text-xs font-bold text-[#9D4EDD] bg-[#F3E8FF] px-2 py-0.5 rounded-full block mb-1">{c.badge}</span>
                      <h2 className="text-xl font-extrabold">{c.title}</h2>
                    </div>
                  </div>
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-4">{c.desc}</p>
                <div className="bg-[#F3E8FF] rounded-lg px-4 py-2 text-xs font-semibold text-[#9D4EDD] mb-5 inline-block">
                  💡 Conclusión: {c.winner}
                </div>
                <div>
                  <Link href={c.link} className="inline-block px-6 py-3 rounded-xl font-bold text-sm text-white transition hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}>
                    Ver comparativa completa →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TABLA RESUMEN ── */}
        <section className="px-6 py-24 bg-[#F3E8FF]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12">Resumen: LandForge vs el Mercado</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF]">
              <table className="w-full text-sm bg-white">
                <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                  <tr>
                    <th className="p-5 text-left font-bold text-[#6B7280]">Criterio clave</th>
                    <th className="p-5 text-center font-bold text-[#9D4EDD]">LandForge</th>
                    <th className="p-5 text-center font-bold text-[#6B7280]">Webflow</th>
                    <th className="p-5 text-center font-bold text-[#6B7280]">Unbounce</th>
                    <th className="p-5 text-center font-bold text-[#6B7280]">Leadpages</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-center">
                  {[
                    ["Precio inicial", "0€ gratis", "14$/mes", "99$/mes", "49$/mes"],
                    ["IA generativa completa", "✅", "❌", "⚠️ Parcial", "⚠️ Parcial"],
                    ["Chatbot de ventas nativo", "✅ Forgi", "❌", "❌", "❌"],
                    ["Velocidad de creación", "30 segundos", "Días", "Horas", "Horas"],
                    ["Ideal para agencias", "✅", "⚠️", "✅", "⚠️"],
                    ["Idioma en español", "✅ Nativo", "⚠️", "⚠️", "⚠️"],
                  ].map(([criterio, lf, wf, ub, lp]) => (
                    <tr key={criterio}>
                      <td className="p-4 text-left font-semibold">{criterio}</td>
                      <td className="p-4 font-bold text-[#9D4EDD] bg-[#FAF5FF]">{lf}</td>
                      <td className="p-4 text-[#6B7280]">{wf}</td>
                      <td className="p-4 text-[#6B7280]">{ub}</td>
                      <td className="p-4 text-[#6B7280]">{lp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-5">¿Convencido? Prueba LandForge gratis hoy.</h2>
            <p className="text-[#E0AAFF] text-lg mb-10">Primera landing en 30 segundos. Sin tarjeta. Sin compromiso.</p>
            <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
              Empezar gratis →
            </Link>
          </div>
        </section>

        {/* Enlazado interno */}
        <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-bold mb-5">Explora más sobre LandForge</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot IA</Link>
              <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
              <Link href="/blog/que-es-una-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Qué es una Landing Page</Link>
              <Link href="/" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Inicio — LandForge</Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
