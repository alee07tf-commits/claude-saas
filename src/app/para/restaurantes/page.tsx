import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Restaurantes y Hostelería con IA | LandForge",
  description:
    "Genera la web de tu restaurante en 30 segundos. Forgi gestiona reservas y consultas sobre menú, alergenos y horarios mientras atiendes las mesas. Sin programar.",
  keywords: [
    "landing page restaurante ia",
    "web restaurante ia gratis",
    "captacion reservas restaurante chatbot",
    "marketing digital hosteleria",
    "pagina web bar cafeteria ia",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Forgi puede gestionar reservas para mi restaurante?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forgi recoge la información de la reserva (fecha, hora, número de personas, alergias relevantes) y te la envía al móvil para que la confirmes en tu sistema de reservas actual. La integración directa con sistemas de reservas como Cover Manager o TheFork está en el roadmap para 2026.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo incluir el menú completo con precios en la landing de LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cuando configuras la landing de tu restaurante, incluyes el menú con precios y Forgi lo absorbe para responder preguntas sobre platos concretos, ingredientes, alérgenos y precios. También puedes estructurar el menú en secciones (entrantes, principales, postres, bebidas) visibles directamente en la landing.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué tipo de hostelería es útil LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge sirve para cualquier tipo de negocio de hostelería: restaurantes, bares, cafeterías, food trucks, servicios de catering, pastelerías, panaderías, restaurantes de cocina para llevar y dark kitchens. Cada concepto puede tener su propia landing con el tono y el diseño que le corresponde.",
      },
    },
  ],
};

export default function RestaurantesLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Web y Reservas con IA para Restaurantes y Hostelería
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Tu restaurante lleno.{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Forgi gestiona las reservas.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Mientras estás en cocina o atendiendo a tus clientes, <strong className="text-[#1A1A2E]">LandForge genera tu web de restaurante en 30 segundos</strong> y Forgi atiende las consultas sobre reservas, menú, horarios y alérgenos a cualquier hora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Crear la web de mi restaurante →
              </Link>
              <Link href="#demo" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver demo
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · 14 días gratis · Sin conocimientos técnicos</p>
            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["30s", "Web de tu restaurante lista"], ["24/7", "Forgi atiende reservas"], ["+40%", "Más reservas online"], ["0€", "Para empezar"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 2. DOLOR ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Los problemas de hostelería que LandForge resuelve</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">El 62% de los comensales busca el restaurante online antes de decidir. Si no te encuentran o no pueden reservar fácilmente, esa mesa la llena la competencia.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "📵", title: "Llamadas perdidas en horas de servicio", text: "A las 21:00 tienes el restaurante lleno y el teléfono sonando con reservas para el fin de semana. Sin atenderlas, esas mesas van a otro restaurante que sí contestó por WhatsApp." },
                { icon: "🌐", title: "Una web del 2015 que no convierte", text: "Tu web tiene el menú en PDF, un formulario de contacto que nadie revisa y una galería de fotos que carga lento en móvil. El comensal de 2026 necesita ver el menú, los precios y reservar en 30 segundos." },
                { icon: "❓", title: "Preguntas de siempre que te quitan tiempo", text: "¿Tienen opciones veganas? ¿Admiten perros en la terraza? ¿Hay parking cerca? ¿El menú del día incluye bebida? Forgi responde estas preguntas las 24 horas para que tú te centres en el servicio." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── DEMO VIDEO ── */}
          <section id="demo" className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Demo</span>
                <h2 className="text-3xl font-extrabold">Mira cómo funciona LandForge</h2>
              </div>
              <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #E0AAFF", boxShadow: "0 24px 64px rgba(157,78,221,0.14)", position: "relative", paddingBottom: "56.25%", height: 0, background: "#000" }}>
                <iframe
                  src="https://www.youtube.com/embed/MRS2BdlK8gs?autoplay=1&mute=1&loop=1&playlist=MRS2BdlK8gs&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                  title="Demo de LandForge"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "16px" }}
                />
              </div>
            </div>
          </section>

          {/* ── 3. CÓMO FUNCIONA ── */}
          <section id="como-funciona" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold">Tu restaurante online en 3 pasos</h2>
              </div>
              <div className="flex flex-col gap-10">
                {[
                  { num: "01", title: "Describe tu concepto gastronómico", text: "Tipo de cocina, horarios, zona, capacidad, opciones especiales (menú infantil, platos sin gluten, opción vegana) y el ambiente del local. La IA construye la presentación perfecta para tu concepto.", badge: "Diseño adaptado al tono de tu restaurante" },
                  { num: "02", title: "Web de restaurante publicada en 30 segundos", text: "La landing incluye: descripción del concepto, menú con precios, horarios y ubicación, galería de platos, sistema de reservas y un CTA claro hacia el teléfono o el formulario de reserva. Optimizada para móvil y Google.", badge: "Optimizada para búsquedas locales" },
                  { num: "03", title: "Forgi gestiona consultas y reservas", text: "Cuando alguien entra a las 23:00 a curiosear tu menú del fin de semana, Forgi le responde sobre precios, disponibilidad, alérgenos y cómo reservar. Tú recibes el lead ya cualificado con todos los datos de la reserva.", badge: "Cero llamadas perdidas en hora punta" },
                ].map((step) => (
                  <div key={step.num} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-xl border border-[#E0AAFF] bg-[#F3E8FF] text-[#9D4EDD]">{step.num}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-[#6B7280] leading-relaxed mb-3">{step.text}</p>
                      <span className="inline-block text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1 rounded-full">✓ {step.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. SOCIAL PROOF ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">Usuarios de hostelería que han probado LandForge</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { text: "Antes de LandForge, perdíamos todas las reservas que entraban por la noche. Ahora Forgi pregunta cuántas personas son, la fecha y si tienen alguna alergia, y nos lo manda todo por la mañana. Sin perder ninguna. En el primer mes de uso reservamos 24 mesas extra que antes se perdían.", name: "Javier A.", role: "Hostelero, Zaragoza", result: "→ 24 reservas nuevas en el primer mes" },
                  { text: "Le costaba mucho tiempo a mi encargado responder siempre las mismas preguntas sobre el menú del día. Forgi lo tiene todo y responde en segundos. Ahora mi personal se centra en dar un mejor servicio y las valoraciones en Google nos han subido del 4.1 al 4.7.", name: "Ana G.", role: "Gerente de restaurante, Valencia", result: "→ Valoración Google de 4.1 a 4.7 en 2 meses" },
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
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes de restaurantes sobre LandForge</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Forgi puede gestionar reservas para mi restaurante?", a: "Forgi recoge la información de la reserva (fecha, hora, personas, alergias) y te la envía para que la confirmes en tu sistema actual. La integración directa con Cover Manager o TheFork está en el roadmap para 2026." },
                  { q: "¿Puedo incluir el menú completo con precios?", a: "Sí. Cuando configuras la landing, incluyes el menú con precios y Forgi lo absorbe para responder preguntas sobre platos concretos, ingredientes, alérgenos y precios." },
                  { q: "¿Para qué tipo de hostelería es útil LandForge?", a: "Sirve para restaurantes, bares, cafeterías, food trucks, catering, pastelerías, dark kitchens y cualquier negocio de hostelería. Cada concepto puede tener su propia landing." },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu restaurante merece una web que trabaje tan duro como tú</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Primera web lista en 30 segundos. Primera reserva esta misma noche.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Crear la web de mi restaurante →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más sectores con LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/clinicas-dentales" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Clínicas Dentales</Link>
                <Link href="/para/coaches" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Coaches y Formadores</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot 24/7</Link>
                <Link href="/blog/que-es-una-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Qué es una Landing Page</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
