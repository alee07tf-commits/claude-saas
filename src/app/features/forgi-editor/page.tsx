import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editor de Landing Pages con IA",
  description:
    "El editor de landing pages más rápido. Describe en lenguaje natural lo que quieres cambiar y Forgi lo aplica al instante. Sin código.",
  keywords: [
    "editor landing pages ia",
    "crear landing page lenguaje natural",
    "editor ia sin codigo",
    "generador paginas ia bloques",
    "forgi editor landforge",
  ],
  alternates: {
    canonical: "https://landforge.digital/features/forgi-editor",
  },
  openGraph: {
    title: "Editor de Landing Pages con IA | LandForge",
    description:
      "El editor de landing pages más rápido. Describe en lenguaje natural lo que quieres cambiar y Forgi lo aplica al instante. Sin código.",
    url: "https://landforge.digital/features/forgi-editor",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Forgi Editor", item: "https://landforge.digital/features/forgi-editor" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Forgi Editor es un editor de arrastrar y soltar (drag and drop)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Forgi Editor funciona en lenguaje natural: tú describes el cambio que quieres (más espaciado, título más impactante, añadir sección de testimonios) y la IA lo implementa al instante. Esto lo hace mucho más rápido que cualquier editor de drag and drop, donde tendrías que buscar, arrastrar, ajustar y revisar cada elemento manualmente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo editar el código HTML de las landings que genera LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En los planes Agency y Agency Pro tienes acceso al código fuente de tus landings, exportable como proyecto Next.js o como HTML estático. Puedes alojarla donde quieras y personalizar cada línea a tu gusto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda Forgi Editor en aplicar un cambio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de cambios (textos, colores, añadir secciones, reordenar bloques) los aplica en menos de 5 segundos. Cambios más complejos que requieren regenerar secciones enteras pueden tardar entre 10 y 20 segundos.",
      },
    },
  ],
};

export default function ForgiEditorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.07) 0%, transparent 65%)" }} />

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Feature — Forgi Editor IA
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Editor de Landing Pages con IA.{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Describe el cambio, listo en 5 segundos.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Olvida el drag and drop. Olvida el CSS. <strong className="text-[#1A1A2E]">Escribe en lenguaje natural lo que quieres y Forgi Editor lo aplica al instante</strong> sobre tu landing page, manteniendo siempre la coherencia de diseño y la velocidad de carga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Editar mi primera landing →
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin cuenta · Sin tarjeta · Listo en 30s</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["5s", "Para aplicar cualquier cambio"], ["0", "Conocimientos técnicos necesarios"], ["+8h", "Ahorro semanal por agencia"], ["∞", "Variantes de diseño posibles"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 2. CÓMO FUNCIONA ── */}
          <section id="como-funciona" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">Así trabaja Forgi Editor</h2>
                <p className="text-[#6B7280] mt-3 max-w-xl mx-auto">En lugar de buscar un botón, arrastrar un elemento y ajustar el padding, simplemente escribes lo que quieres.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg mb-4">❌ Cómo se hacía antes (drag and drop)</h3>
                  {[
                    "1. Buscas el elemento en la librería de bloques",
                    "2. Lo arrastras a la posición que crees que es correcta",
                    "3. Te equivocas y deshaces 3 veces",
                    "4. Ajustas el padding, el margin y el color manualmente",
                    "5. En móvil se ve diferente → empiezas de nuevo",
                    "6. 45 minutos después: el resultado es mediocre",
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-3 text-[#6B7280] text-sm bg-gray-50 rounded-xl p-3">
                      <span className="flex-shrink-0 text-red-400">✗</span>
                      {s}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg mb-4">✅ Cómo funciona con Forgi Editor</h3>
                  {[
                    ["Tú escribes:", "\"Haz el titular más urgente y añade el número de teléfono debajo del CTA\""],
                    ["Forgi aplica:", "El cambio en 5 segundos, adaptado al estilo de la landing"],
                    ["Tú ves:", "El resultado en tiempo real, responsivo para todos los dispositivos"],
                    ["Si no te gusta:", "Escribes \"deshacer\" o describes un ajuste diferente"],
                  ].map(([label, text]) => (
                    <div key={label} className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-xl p-4">
                      <span className="text-xs font-bold text-[#9D4EDD] block mb-1">{label}</span>
                      <span className="text-sm text-[#1A1A2E]">{text}</span>
                    </div>
                  ))}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800 font-semibold">
                    ⏱️ Tiempo total: 30 segundos. Resultado: profesional.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 3. FUNCIONALIDADES ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold mb-4">Todo lo que puedes hacer con Forgi Editor</h2>
                <p className="text-[#E0AAFF]">Solo describiendo lo que quieres, en lenguaje natural.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "✍️", title: "Reescribir cualquier texto", text: "\"Haz el titular más directo y agresivo\", \"Cambia el subtítulo para mencionar el precio gratuito\"" },
                  { icon: "🎨", title: "Cambiar colores y estilos", text: "\"Prueba la paleta en azul marino\", \"Haz el CTA más grande y con sombra\"" },
                  { icon: "📦", title: "Añadir o eliminar secciones", text: "\"Añade una sección de testimonios después de la sección de precios\", \"Elimina el vídeo de la parte superior\"" },
                  { icon: "📱", title: "Optimizar para móvil", text: "\"El Hero se ve mal en móvil, simplifica la estructura\", \"Asegúrate de que el formulario funcione en pantallas pequeñas\"" },
                  { icon: "🔗", title: "Crear variantes A/B", text: "\"Crea una variante de esta landing con el CTA cambiado a 'Solicitar demo' y fondo oscuro\"" },
                  { icon: "🚀", title: "Publicar al instante", text: "\"Publica esta versión ahora mismo\", \"Lanza los cambios a la web real\"" },
                ].map((f) => (
                  <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl mb-3">{f.icon}</div>
                    <h3 className="font-bold mb-2">{f.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed italic">"{f.text.split('"')[1]}"...</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. SOCIAL PROOF ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">Usuarios que han multiplicado su velocidad con Forgi Editor</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { text: "Antes tardábamos una semana en hacer una landing para un cliente. Ahora generamos la base en 30 segundos, el cliente la revisa y en una videollamada de 30 minutos le aplicamos todos sus cambios con Forgi Editor. El mismo día está publicada.", name: "Raúl T.", role: "Consultor digital, Madrid", result: "→ De 1 semana a 1 día por landing de cliente" },
                  { text: "Lo que más me costaba era que el cliente pedía un cambio, yo lo hacía en Elementor, él lo veía y pedía otro. Con Forgi simplemente le doy acceso al editor y él mismo escribe los cambios. Llegamos al resultado final mucho más rápido.", name: "Lucía V.", role: "Diseñadora web freelance, Sevilla", result: "→ Revisiones del cliente reducidas de 6 a 1" },
                ].map((t) => (
                  <div key={t.name} className="bg-white rounded-2xl border border-[#E0AAFF] p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-0.5 text-[#FFB800] mb-4">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                      <p className="text-[#6B7280] italic leading-relaxed mb-4">"{t.text}"</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1.5 rounded-lg inline-block mb-3">{t.result}</div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-xs text-[#6B7280]">{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre Forgi Editor</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Forgi Editor es un editor de arrastrar y soltar?", a: "No. Forgi Editor funciona en lenguaje natural: describes el cambio que quieres y la IA lo implementa al instante. Mucho más rápido que cualquier drag & drop." },
                  { q: "¿Puedo editar el código HTML de las landings?", a: "En los planes Agency y Agency Pro tienes acceso al código fuente exportable como proyecto Next.js o HTML estático para alojar donde quieras." },
                  { q: "¿Cuánto tiempo tarda Forgi Editor en aplicar un cambio?", a: "La mayoría de cambios (textos, colores, secciones) los aplica en menos de 5 segundos. Cambios más complejos pueden tardar 10-20 segundos." },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Edita tu primera landing en lenguaje natural hoy</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Genera tu landing, dile a Forgi cómo mejorarla y publícala. Todo en menos de 5 minutos.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Probar Forgi Editor gratis →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más funcionalidades de LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot: Ventas 24/7</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
