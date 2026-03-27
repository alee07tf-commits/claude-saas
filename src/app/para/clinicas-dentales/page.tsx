import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crear Landing Pages para Clínicas Dentales con IA | LandForge",
  description:
    "Capta más pacientes para tu clínica dental. Genera tu página de captación en 30 segundos con IA, lanza un chatbot que agenda citas 24/7 y convierte el tráfico de Google Ads en consultas reales.",
  keywords: [
    "crear landing page clinica dental",
    "software landing pages dentistas",
    "chatbot para dentistas ia",
    "captar pacientes clinica dental",
    "marketing digital clinicas dentales",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda LandForge en generar una landing para mi clínica dental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menos de 30 segundos. Rellenas un formulario de 5 preguntas sobre tu clínica (especialidades, zona, público objetivo) y la IA genera la landing completa con copy persuasivo, structure, CTAs y Forgi Chatbot activado.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge cumple la normativa RGPD para datos de pacientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cumplimos el Reglamento General de Protección de Datos europeo (RGPD). Todos los leads capturados por Forgi se almacenan cifrados, nunca se comparten con terceros y puedes exportar o eliminar los datos cuando quieras.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito saber diseño o programación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cero. Rellenas el formulario con la información de tu clínica (tratamientos, horarios, zona) y LandForge se encarga de todo: el código, los colores corporativos, la estructura y los textos diseñados para vender.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo conectar la landing a Google Ads para mis campañas de ortodoncia o implantes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, y es para lo que está perfectamente diseñada. Las landings de LandForge cargan en menos de 1 segundo (Core Web Vitals en verde), lo que maximiza el Nivel de Calidad de tus anuncios y reduce tu CPC.",
      },
    },
    {
      "@type": "Question",
      name: "¿Forgi Chatbot puede responder sobre precios de mis tratamientos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Forgi aprende directamente de la información que introduces sobre tu clínica: precios orientativos de Invisalign, servicios de implantes, horarios de atención, seguro médicos aceptados. Responde con precisión sin que tengas que configurar nada.",
      },
    },
  ],
};

const logoSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge para Clínicas Dentales",
  applicationCategory: "BusinessApplication",
  description: "Generador de landing pages con IA especializado en captación de pacientes para clínicas dentales.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function ClinicasDentalesLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(logoSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />

            {/* SEO Kicker */}
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Software de Captación B2B para el Sector Odontológico
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Tu Clínica Dental necesita más pacientes,{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                no semanas de programación.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Describe en 5 minutos tu clínica: tratamientos (Invisalign, Implantes, Blanqueamientos), zona y público objetivo. <strong className="text-[#1A1A2E]">La IA genera tu página de captación completa en 30 segundos</strong>, lista para recibir tráfico de Google Ads. Forgi, tu asistente inteligente, atiende consultas de pacientes y agenda citas mientras duermes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition duration-200 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Generar mi landing dental gratis →
              </Link>
              <Link href="#demo" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition duration-200">
                Ver demo clínica real
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta de crédito · 14 días gratis · Cancelación inmediata</p>

            {/* Stat strip */}
            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["30 seg", "Tiempo de generación"], ["+200%", "Media de conversión"], ["0€", "Coste de la prueba"], ["24/7", "Atención con Forgi"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 2. DOLOR → AGITAR (Empatía con el Problema) ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">¿Te suena alguna de estas situaciones?</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">El 73% de las clínicas dentales en España pierde entre el 40% y el 60% de su presupuesto en Google Ads por enviar el tráfico a su web corporativa en lugar de a una landing específica.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "💸", title: "Gastas en Ads pero el teléfono no suena", text: "Tu web tarda 4 segundos en cargar, tiene el menú de navegación completo y tu paciente potencial se va a la competencia antes de ver el precio de implantes." },
                { icon: "🕐", title: "La agencia de diseño tarda 3 semanas", text: "Necesitas una landing para tu campaña de verano de blanqueamientos. Tu agencia pide un mes de plazo y 1.500€. La campaña empieza en 5 días." },
                { icon: "📵", title: "Los pacientes llaman fuera de horario y nadie atiende", text: "El 40% de las búsquedas de 'clínica dental cerca de mí' ocurren entre las 20h y las 2h de la madrugada. Si tu web no tiene ningún canal de respuesta, estás perdiendo esos leads." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3. SOLUCIÓN (Cómo lo resuelve LandForge) ── */}
          <section id="demo" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Cómo lo resuelve LandForge</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Convierte clics de Google Ads en pacientes sentados en tu sala de espera
                </h2>
              </div>
              {/* Video demo */}
              <div className="mb-16 mx-auto" style={{ maxWidth: "800px", borderRadius: "16px", overflow: "hidden", border: "1px solid #E0AAFF", boxShadow: "0 24px 64px rgba(157,78,221,0.14)" }}>
                <video src="/demo-landforge.mp4" autoPlay muted loop playsInline disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px", pointerEvents: "none" }} />
              </div>

              <div className="flex flex-col gap-12">
                {[
                  {
                    num: "01", title: "Rellena el briefing de tu clínica (5 min)",
                    text: "Cuéntale a LandForge en qué especialidades destaca tu clínica: ortodoncia con Invisalign, implantes All-on-4, odontopediatría... Añade tu zona geográfica y el perfil de tu paciente ideal. Nada de tecnicismos.",
                    badge: "Copywriting Persuasivo Incluido",
                  },
                  {
                    num: "02", title: "La IA genera tu landing en 30 segundos",
                    text: "Dos agentes de IA trabajan en paralelo: uno diseña la estructura visual (bloques de herramienta, secciones de testimonios, tabla de tratamientos) y otro redacta el copy orientado a que el paciente llame o rellene el formulario.",
                    badge: "Core Web Vitals en verde",
                  },
                  {
                    num: "03", title: "Forgi atiende a tus nuevos pacientes 24/7",
                    text: "Desde que publicas la landing, Forgi —tu asistente de captación inteligente— aprende toda la información de tu consulta. Responde dudas sobre precios de Invisalign, horarios de urgencias o qué seguros médicos aceptas, aunque sean las 3 de la madrugada.",
                    badge: "Datos de contacto en tu CRM automáticamente",
                  },
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

          {/* ── 4. FORGI EN ACCIÓN (Feature Expandida) ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-5">Forgi Chatbot</span>
                <h2 className="text-3xl font-extrabold mb-6">Tu recepcionista digital especializado en odontología</h2>
                <p className="text-[#6B7280] leading-relaxed mb-8">
                  Forgi no es un chatbot genérico de preguntas y respuestas. Se entrena automáticamente con los datos de <strong>tu</strong> clínica dental: los tratamientos que ofreces, tus precios orientativos, los seguros que aceptas y tu zona de cobertura. El resultado: respuestas precisas que generan confianza en el paciente y lo mueven hacia la consulta.
                </p>
                <ul className="space-y-3">
                  {[
                    "Cualifica al paciente antes de que llegue a consulta (presupuesto, urgencia, finalidad)",
                    "Responde sobre precio de Invisalign, implantes o blanqueamiento sin revelar cifras exactas si no quieres",
                    "Guía al paciente al formulario de cita con un lenguaje natural y empático",
                    "Funciona en móvil, tablet y escritorio sin configuración adicional",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[#6B7280]">
                      <span className="text-[#9D4EDD] font-bold flex-shrink-0 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mock chat */}
              <div className="bg-white rounded-2xl border border-[#E0AAFF] shadow-xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E0AAFF] bg-[#F3E8FF]">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}>F</div>
                  <div>
                    <div className="font-bold text-sm">Forgi · Clínica Dental Sonrisa</div>
                    <div className="text-xs text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />En línea</div>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {[
                    { role: "forgi", text: "¡Hola! Soy Forgi, el asistente de la Clínica Dental Sonrisa. ¿En qué puedo ayudarte hoy? 😊" },
                    { role: "user", text: "¿Hacéis Invisalign? ¿Cuánto cuesta más o menos?" },
                    { role: "forgi", text: "Sí, somos Centro Oficial Invisalign. El precio depende del caso, pero las alineaciones parciales arrancan desde 1.800€ y los tratamientos completos desde 3.200€. ¿Quieres que te pida cita para una valoración gratuita sin compromiso? 📅" },
                  ].map((msg, i) => (
                    <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${msg.role === "forgi" ? "bg-[#F3E8FF] text-[#9D4EDD] border border-[#E0AAFF]" : "bg-[#1A1A2E] text-white"}`}>{msg.role === "forgi" ? "F" : "Tú"}</div>
                      <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "forgi" ? "bg-[#FAFAFA] text-[#1A1A2E] border border-gray-100" : "text-white"} ${msg.role === "user" ? "rounded-tr-none" : "rounded-tl-none"}`} style={msg.role === "user" ? { background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" } : {}}>{msg.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 5. SOCIAL PROOF ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">Usuarios del sector dental que han probado LandForge</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    text: "Antes tardábamos 4 semanas y 1.200€ en montar una landing para cada campaña nueva. Con LandForge lo tenemos en 10 minutos por 97€ al mes. La calculadora es fácil.",
                    name: "Laura M.", role: "Directora de clínica dental, Madrid",
                    result: "→ De 4 semanas a 10 minutos por landing",
                  },
                  {
                    text: "Forgi nos ahorra contestar 30 llamadas diarias de presupuesto de Invisalign. El chatbot cualifica al paciente y cuando llega a nuestra consulta ya viene informado y convencido.",
                    name: "Alejandro S.", role: "Odontólogo, Barcelona",
                    result: "→ 30% más de citas confirmadas al mes",
                  },
                  {
                    text: "Lanzamos LandForge para la campaña de blanqueamientos de verano el mismo día que cerramos el contrato con la radio local. Imposible haberlo hecho con otro software.",
                    name: "Marta C.", role: "Responsable de marketing dental, Málaga",
                    result: "→ Landing lista el mismo día del lanzamiento",
                  },
                ].map((t) => (
                  <div key={t.name} className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8 flex flex-col justify-between">
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

          {/* ── 6. COMPARATIVA vs ALTERNATIVAS ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-4">LandForge vs Alternativas para Clínicas Dentales</h2>
              <p className="text-center text-[#6B7280] mb-14 max-w-xl mx-auto">Un análisis honesto de las opciones que tienes hoy para publicar una página de captación de nuevos pacientes.</p>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
                <table className="w-full text-left bg-white">
                  <thead>
                    <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                      <th className="p-5 font-bold text-[#6B7280] text-sm">Característica</th>
                      <th className="p-5 font-bold text-[#9D4EDD]">LandForge IA</th>
                      <th className="p-5 font-bold text-[#6B7280]">Agencia Web</th>
                      <th className="p-5 font-bold text-[#6B7280]">Elementor (WP)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {[
                      ["Tiempo de lanzamiento", "30 segundos", "3–6 semanas", "2–5 días"],
                      ["Coste aproximado", "Desde 0€/mes", "1.000–3.000€ por landing", "Coste de licencia + tiempo"],
                      ["Chatbot de ventas incluido", "✅ Forgi (nativo)", "❌ Extra €€", "❌ Plugin adicional"],
                      ["Velocidad de carga (Core Web Vitals)", "✅ superior", "⚠️ Variable", "❌ Suele penalizar"],
                      ["Edición con IA", "✅ Forgi Editor", "❌ Depende de la agencia", "❌ Solo manual"],
                      ["Adaptación al sector dental", "✅ Copy especializado", "⚠️ Copy genérico", "❌ Temflate base"],
                    ].map(([feat, lf, ag, el]) => (
                      <tr key={feat}>
                        <td className="p-5 font-semibold text-[#1A1A2E]">{feat}</td>
                        <td className="p-5 text-[#1A1A2E] font-medium">{lf}</td>
                        <td className="p-5 text-[#6B7280]">{ag}</td>
                        <td className="p-5 text-[#6B7280]">{el}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── 7. FAQ (Schema-Ready) ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre LandForge para Clínicas Dentales</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cuánto tarda LandForge en generar una landing para mi clínica dental?", a: "Menos de 30 segundos. Rellenas un formulario de 5 preguntas sobre tu clínica y la IA genera la landing completa con copy persuasivo, estructura, CTAs y Forgi Chatbot activado." },
                  { q: "¿LandForge cumple la normativa RGPD para datos de pacientes?", a: "Sí. Cumplimos el Reglamento General de Protección de Datos europeo (RGPD). Todos los leads capturados por Forgi se almacenan cifrados, nunca se comparten con terceros y puedes exportar o eliminar los datos cuando quieras." },
                  { q: "¿Puedo conectar la landing a Google Ads para mis campañas de ortodoncia?", a: "Sí, y es para lo que está diseñada. Las landings cargan en menos de 1 segundo (Core Web Vitals en verde), lo que maximiza el Nivel de Calidad de tus anuncios y reduce tu CPC directamente." },
                  { q: "¿Forgi Chatbot puede responder sobre precios de mis tratamientos?", a: "Sí. Forgi aprende de la información que introduces sobre tu clínica: precios orientativos de Invisalign, servicios de implantes, horarios de atención y seguros médicos aceptados. Responde con precisión sin necesidad de configuración." },
                  { q: "¿Necesito saber diseño o programación?", a: "Cero. Rellenas el formulario con la información de tu clínica y LandForge se encarga de todo: el código, los colores corporativos, la estructura y los textos diseñados para vender." },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#1A1A2E]">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0 text-xl">+</span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── 8. CTA FINAL (BOFU) ── */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu agenda de pacientes puede empezar a llenarse hoy</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Crea tu primera landing para clínica dental gratis. Sin tarjeta, sin configuraciones técnicas. Tu competencia en el barrio ya está captando pacientes online.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition duration-200 shadow-xl">
                Generar mi landing dental ahora (Gratis) →
              </Link>
              <p className="text-[#E0AAFF] mt-5 text-sm">Sin tarjeta · 14 días de prueba completa · Cancela cuando quieras</p>
            </div>
          </section>

          {/* ── ENLAZADO INTERNO ── */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-[#1A1A2E] mb-6 text-lg">También te puede interesar</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias de Marketing</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow: Comparativa Completa</Link>
                <Link href="/integraciones/wordpress" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Integración con WordPress</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Cómo Aumentar la Conversión de tu Landing Page</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
