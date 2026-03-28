import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Gimnasios con IA: Capta Más Socios en 30s",
  description:
    "Crea landing pages para tu gimnasio en 30 segundos con IA. Capta socios con páginas optimizadas para Google Ads y un chatbot que responde sobre horarios, precios y clases de prueba 24/7.",
  keywords: [
    "landing page gimnasio",
    "crear landing page para gimnasio",
    "marketing digital gimnasios",
    "captar socios gimnasio",
    "software landing pages fitness",
    "chatbot gimnasio ia",
  ],
  alternates: {
    canonical: "https://landforge.digital/para/gimnasios",
  },
  openGraph: {
    title: "Landing Pages para Gimnasios con IA: Capta Más Socios en 30s",
    description:
      "Crea landing pages para tu gimnasio en 30 segundos con IA. Capta socios con páginas optimizadas para Google Ads y un chatbot que responde sobre horarios, precios y clases de prueba 24/7.",
    url: "https://landforge.digital/para/gimnasios",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda LandForge en generar una landing page para mi gimnasio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menos de 30 segundos. Rellenas un formulario de 5 preguntas sobre tu gimnasio (instalaciones, clases, zona, público objetivo) y la IA genera la landing completa con copy persuasivo, estructura, CTAs y Forgi Chatbot activado para atender leads de día y de noche.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usar LandForge para campañas de captación de septiembre o Black Friday?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes generar una landing específica para cada campaña estacional en menos de un minuto: vuelta al gimnasio en septiembre, promociones Black Friday de matrículas anuales, rebajas de enero o campaña de biquini en mayo. Cada landing tiene su propio copy, CTA y chatbot configurado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Forgi Chatbot puede responder preguntas sobre horarios y precios de mi gimnasio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Forgi aprende automáticamente de la información que introduces: cuota mensual, precio de matrícula, horarios de apertura, clases dirigidas, disponibilidad de piscina o parking. Responde con precisión las 24 horas sin necesidad de configuración técnica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para crear la landing de mi gimnasio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ninguno. Rellenas el formulario con los datos de tu centro de fitness (instalaciones, tarifas, horarios, clases) y LandForge genera automáticamente el diseño, el código y los textos persuasivos optimizados para convertir visitantes en socios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las landings de LandForge funcionan bien con Google Ads para gimnasios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perfectamente. Las landing pages generadas cargan en menos de 1 segundo con Core Web Vitals en verde, lo que mejora tu Nivel de Calidad en Google Ads, reduce el CPC y maximiza cada euro invertido en campañas de captación de socios.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge para Gimnasios",
  applicationCategory: "BusinessApplication",
  description: "Generador de landing pages con IA especializado en captación de socios para gimnasios y centros de fitness.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function GimnasiosLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* -- 1. HERO -- */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Software de Captación B2B para el Sector Fitness
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Tu Gimnasio necesita más socios,{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                no meses esperando a una agencia.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Describe en 5 minutos tu centro de fitness: instalaciones (piscina, sala de spinning, box de crossfit), tarifas y público objetivo. <strong className="text-[#1A1A2E]">La IA genera tu landing page para gimnasio en 30 segundos</strong>, lista para recibir tráfico de Google Ads para gimnasios. Forgi, tu asistente inteligente, responde sobre horarios, cuotas y reserva clases de prueba mientras duermes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition duration-200 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Crear mi landing fitness gratis
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition duration-200">
                Cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta de crédito · 14 días gratis · Cancelación inmediata</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["30 seg", "Tiempo de generación"], ["+180%", "Media de conversión"], ["0€", "Coste de la prueba"], ["24/7", "Atención con Forgi"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* -- 2. DOLOR / PROBLEMA -- */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">¿Te suena alguna de estas situaciones?</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">El 68% de los gimnasios en España pierde entre el 40% y el 60% de su presupuesto en Google Ads por enviar el tráfico a una web genérica en lugar de a una landing page para gimnasio optimizada para captar socios.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "💸", title: "Gastas en Ads pero nadie viene a la clase de prueba", text: "Inviertes 500€ al mes en campañas de captación. Tu web tarda 4 segundos en cargar, tiene el menú completo de navegación y el usuario se va a Basic-Fit o McFit antes de ver tu oferta de matrícula gratuita." },
                { icon: "🕐", title: "La agencia web tarda un mes y cobra 2000€", text: "Necesitas una landing para la campaña de septiembre de vuelta al gimnasio. Tu agencia pide cuatro semanas de plazo y un presupuesto de 2.000€. Las inscripciones de septiembre no esperan a octubre." },
                { icon: "📵", title: "Los leads llaman fuera de horario y nadie contesta", text: "El 45% de las búsquedas de 'gimnasio cerca de mí' ocurren entre las 20h y la medianoche. Si tu web no tiene un canal de respuesta inmediata, esos leads fitness acaban inscribiéndose en la competencia." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* -- 3. SOLUCIÓN -- */}
          <section id="como-funciona" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Cómo lo resuelve LandForge</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Convierte clics de Google Ads en socios entrando por la puerta de tu gimnasio
                </h2>
              </div>

              <div className="flex flex-col gap-12">
                {[
                  {
                    num: "01", title: "Rellena el briefing de tu gimnasio (5 min)",
                    text: "Cuéntale a LandForge qué ofrece tu centro de fitness: sala de musculación, clases dirigidas (spinning, yoga, crossfit, zumba), piscina climatizada, entrenador personal... Añade tu zona geográfica, la cuota mensual y el perfil de tu socio ideal. Si no sabes por dónde empezar, consulta nuestra guía sobre qué es una landing page para entender los fundamentos.",
                    badge: "Copywriting Persuasivo Incluido",
                  },
                  {
                    num: "02", title: "La IA genera tu landing en 30 segundos",
                    text: "Dos agentes de IA trabajan en paralelo: uno diseña la estructura visual (bloques de servicios, galería de instalaciones, tabla de tarifas) y otro redacta el copy orientado a que el visitante reserve su clase de prueba gratuita. El resultado carga en menos de 1 segundo, lo que mejora tu posicionamiento y reduce el coste por clic en tus campañas. Descubre cómo aumentar la conversión de tu landing page para maximizar cada euro invertido.",
                    badge: "Core Web Vitals en verde",
                  },
                  {
                    num: "03", title: "Forgi atiende a tus nuevos leads 24/7",
                    text: "Desde que publicas la landing, Forgi —tu asistente de captación inteligente— aprende toda la información de tu gimnasio. Responde dudas sobre precios de matrícula, horarios de apertura, disponibilidad de piscina o qué llevar a la primera clase, incluso a las 2 de la madrugada. Los datos de contacto de cada lead llegan directamente a tu CRM si conectas la integración con Zapier.",
                    badge: "Datos de contacto en tu CRM automáticamente",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-xl border border-[#E0AAFF] bg-[#F3E8FF] text-[#9D4EDD]">{step.num}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-[#6B7280] leading-relaxed mb-3">{step.text}</p>
                      <span className="inline-block text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1 rounded-full">{step.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* -- 4. FORGI EN ACCIÓN -- */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-5">Forgi Chatbot</span>
                <h2 className="text-3xl font-extrabold mb-6">Tu recepcionista digital especializado en fitness</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Forgi no es un chatbot genérico. Se entrena automáticamente con los datos de <strong>tu</strong> gimnasio: las clases que ofreces, tus tarifas de cuota mensual y matrícula, los horarios de apertura y las instalaciones disponibles. El resultado: respuestas precisas que generan confianza en el visitante y lo mueven a reservar su clase de prueba gratuita. Conoce todas las funcionalidades de <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold underline underline-offset-2 hover:text-[#7B2CBF] transition">Forgi Chatbot</Link> en detalle.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-8">
                  Si además ofreces servicios de <Link href="/para/coaches" className="text-[#9D4EDD] font-semibold underline underline-offset-2 hover:text-[#7B2CBF] transition">coaching personalizado</Link>, LandForge se adapta para crear landings específicas para paquetes de entrenador personal, programas de transformación física o planes de nutrición deportiva.
                </p>
                <ul className="space-y-3">
                  {[
                    "Cualifica al lead antes de que pise el gimnasio (objetivo, presupuesto, experiencia previa)",
                    "Responde sobre cuota mensual, precio de matrícula, clases dirigidas y parking sin intervención humana",
                    "Guía al visitante a reservar su clase de prueba gratuita con lenguaje natural y cercano",
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
                    <div className="font-bold text-sm">Forgi · Gimnasio FitZone</div>
                    <div className="text-xs text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />En línea</div>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {[
                    { role: "forgi", text: "¡Hola! Soy Forgi, el asistente de Gimnasio FitZone. ¿En qué puedo ayudarte?" },
                    { role: "user", text: "¿Cuánto cuesta la matrícula?" },
                    { role: "forgi", text: "La matrícula está en promoción a 29€ este mes. La cuota mensual es de 39€ con acceso ilimitado. ¿Quieres reservar una clase de prueba gratuita?" },
                    { role: "user", text: "¿Tenéis piscina y horarios de mañana?" },
                    { role: "forgi", text: "Sí, tenemos piscina climatizada. Abrimos de 7:00 a 22:00 de lunes a viernes y de 9:00 a 14:00 los sábados. ¿Te apunto a una visita guiada?" },
                  ].map((msg, i) => (
                    <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${msg.role === "forgi" ? "bg-[#F3E8FF] text-[#9D4EDD] border border-[#E0AAFF]" : "bg-[#1A1A2E] text-white"}`}>{msg.role === "forgi" ? "F" : "Tu"}</div>
                      <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "forgi" ? "bg-[#FAFAFA] text-[#1A1A2E] border border-gray-100" : "text-white"} ${msg.role === "user" ? "rounded-tr-none" : "rounded-tl-none"}`} style={msg.role === "user" ? { background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" } : {}}>{msg.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* -- 5. SOCIAL PROOF -- */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">Profesionales del fitness que ya usan LandForge</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    text: "Competimos contra Basic-Fit en precio, así que necesitábamos destacar en experiencia. Con LandForge creamos una landing para cada campaña estacional: septiembre, Black Friday, enero. Antes nos costaba 1.800€ y un mes; ahora lo tenemos en 15 minutos.",
                    name: "Carlos R.", role: "Director de gimnasio independiente, Valencia",
                    result: "De 1 mes a 15 minutos por campaña",
                  },
                  {
                    text: "Forgi nos ahorra contestar 40 WhatsApps diarios preguntando por horarios y precios. El chatbot filtra a quien realmente quiere apuntarse y cuando llegan al gimnasio ya vienen decididos. Nuestra tasa de conversión de clase de prueba a socio subió un 35%.",
                    name: "Patricia L.", role: "Gerente de centro de fitness, Sevilla",
                    result: "35% más de conversión clase de prueba a socio",
                  },
                  {
                    text: "Lanzamos la landing de paquetes de entrenador personal el mismo día que publicamos la promo en Instagram. Conseguimos 23 leads cualificados en 48 horas. Con nuestra web antigua no llegábamos ni a 5.",
                    name: "Daniel F.", role: "Propietario de box de crossfit, Bilbao",
                    result: "23 leads cualificados en 48 horas",
                  },
                ].map((t) => (
                  <div key={t.name} className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-0.5 text-[#FFB800] mb-4">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                      <p className="text-[#6B7280] italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
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

          {/* -- 6. COMPARATIVA vs ALTERNATIVAS -- */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-4">LandForge vs Alternativas para Gimnasios</h2>
              <p className="text-center text-[#6B7280] mb-14 max-w-xl mx-auto">Un análisis honesto de las opciones que tienes hoy para publicar una página de captación de nuevos socios. Si quieres una comparativa técnica más detallada, consulta <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold underline underline-offset-2 hover:text-[#7B2CBF] transition">LandForge vs Webflow</Link>.</p>
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
                      ["Tiempo de lanzamiento", "30 segundos", "3-6 semanas", "2-5 días"],
                      ["Coste aproximado", "Desde 0€/mes", "1.500-3.000€ por landing", "Coste de licencia + tiempo"],
                      ["Chatbot de captación incluido", "Forgi (nativo)", "Extra €€", "Plugin adicional"],
                      ["Core Web Vitals", "Menos de 1s", "Variable", "Suele penalizar"],
                      ["Edición con IA", "Forgi Editor", "Depende de la agencia", "Solo manual"],
                      ["Adaptación al sector fitness", "Copy especializado", "Copy genérico", "Template base"],
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

          {/* -- 7. FAQ (Schema-Ready) -- */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre LandForge para Gimnasios</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cuánto tarda LandForge en generar una landing page para mi gimnasio?", a: "Menos de 30 segundos. Rellenas un formulario de 5 preguntas sobre tu gimnasio (instalaciones, clases, zona, público objetivo) y la IA genera la landing completa con copy persuasivo, estructura, CTAs y Forgi Chatbot activado para atender leads de día y de noche." },
                  { q: "¿Puedo usar LandForge para campañas de captación de septiembre o Black Friday?", a: "Sí. Puedes generar una landing específica para cada campaña estacional en menos de un minuto: vuelta al gimnasio en septiembre, promociones Black Friday de matrículas anuales, rebajas de enero o campaña de bikini en mayo. Cada landing tiene su propio copy, CTA y chatbot configurado." },
                  { q: "¿Forgi Chatbot puede responder preguntas sobre horarios y precios de mi gimnasio?", a: "Sí. Forgi aprende automáticamente de la información que introduces: cuota mensual, precio de matrícula, horarios de apertura, clases dirigidas, disponibilidad de piscina o parking. Responde con precisión las 24 horas sin necesidad de configuración técnica." },
                  { q: "¿Necesito conocimientos técnicos para crear la landing de mi gimnasio?", a: "Ninguno. Rellenas el formulario con los datos de tu centro de fitness y LandForge genera automáticamente el diseño, el código y los textos persuasivos. Puedes consultar nuestros planes en la página de precios para elegir el que mejor se adapte a tu gimnasio." },
                  { q: "¿Las landings funcionan bien con Google Ads para gimnasios?", a: "Perfectamente. Las landing pages generadas cargan en menos de 1 segundo con Core Web Vitals en verde, lo que mejora tu Nivel de Calidad en Google Ads, reduce el CPC y maximiza cada euro invertido en campañas de captación de socios." },
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

          {/* -- 8. CTA FINAL (BOFU) -- */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu gimnasio puede empezar a llenar clases hoy</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Crea tu primera landing para gimnasio gratis. Sin tarjeta, sin configuraciones técnicas. Mientras tu competencia sigue enviando tráfico a su web genérica, tú estarás captando socios con una página diseñada para convertir. Consulta los <Link href="/precios" className="text-white font-semibold underline underline-offset-2 hover:text-[#F3E8FF] transition">planes y precios</Link> y elige el que mejor se adapte a tu centro.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition duration-200 shadow-xl">
                Generar mi landing fitness ahora (Gratis)
              </Link>
              <p className="text-[#E0AAFF] mt-5 text-sm">Sin tarjeta · 14 días de prueba completa · Cancela cuando quieras</p>
            </div>
          </section>

          {/* -- ENLAZADO INTERNO -- */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-[#1A1A2E] mb-6 text-lg">También te puede interesar</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/clinicas-dentales" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">LandForge para Clínicas Dentales</Link>
                <Link href="/para/coaches" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">LandForge para Coaches</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">LandForge vs Webflow</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Forgi Chatbot: Funcionalidades</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Cómo Aumentar la Conversión de tu Landing</Link>
                <Link href="/integraciones/zapier" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Integración con Zapier</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
