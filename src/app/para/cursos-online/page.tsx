import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Cursos Online con IA",
  description:
    "Crea landing pages para vender cursos online con IA. Forgi cualifica alumnos, genera urgencia y cierra inscripciones 24/7. Desde 0€.",
  keywords: [
    "landing page cursos online",
    "landing page para infoproductos",
    "landing page para formación online",
    "landing page cursos",
    "vender cursos online landing page",
  ],
  alternates: {
    canonical: "https://landforge.digital/para/cursos-online",
  },
  openGraph: {
    title: "Landing Pages para Cursos Online con IA | LandForge",
    description:
      "Crea landing pages para vender cursos online con IA. Forgi cualifica alumnos, genera urgencia y cierra inscripciones 24/7. Desde 0€.",
    url: "https://landforge.digital/para/cursos-online",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://landforge.digital",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Landing Pages para Cursos Online",
      item: "https://landforge.digital/para/cursos-online",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Forgi puede responder preguntas sobre el contenido de mi curso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Entrenas a Forgi con la información de tu curso: temario, duración, precio, requisitos previos, certificación y garantía. Cuando un visitante llega a tu landing page, Forgi responde sus dudas en tiempo real y lo guía hacia la inscripción. Es como tener un comercial experto en tu curso disponible las 24 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo crear landing pages diferentes para cada curso o webinar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, y es la estrategia que mejor funciona para vender formación online. Una landing específica para 'Curso de Marketing Digital' y otra para 'Masterclass de SEO Avanzado' convierten mucho más que una página general de 'todos mis cursos'. Con LandForge, cada landing nueva se genera en 30 segundos con IA.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge integra con plataformas de cursos como Teachable o Hotmart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, a través de la integración con Zapier. Puedes conectar LandForge con Teachable, Hotmart, Thinkific, Kajabi y cualquier plataforma de cursos online. Cuando un lead se inscribe a través de tu landing, Zapier lo envía automáticamente a tu plataforma de formación y a tu email marketing.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge — Landing Pages para Cursos Online",
  applicationCategory: "BusinessApplication",
  description:
    "Generador de landing pages con IA para creadores de cursos online, infoproductos y formación digital. Incluye chatbot Forgi para cualificar alumnos 24/7.",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function CursosOnlineLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)",
              }}
            />

            <nav
              aria-label="Breadcrumb"
              className="text-xs text-[#6B7280] mb-6 flex gap-1"
            >
              <Link href="/" className="hover:text-[#9D4EDD]">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/para" className="hover:text-[#9D4EDD]">
                Soluciones
              </Link>
              <span>/</span>
              <span className="text-[#9D4EDD]">Cursos Online</span>
            </nav>

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Plataforma de Captación para Creadores de Cursos Online
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Vende más cursos online con landing pages{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                que convierten mientras duermes.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Dile a LandForge de qué trata tu curso: marketing digital, cocina
              saludable, programación, diseño. {" "}
              <strong className="text-[#1A1A2E]">
                En 30 segundos la IA crea una landing page de venta profesional
              </strong>
              , con copy persuasivo, testimonios, módulos del curso y el chatbot
              Forgi respondiendo dudas de alumnos potenciales 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/register"
                className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                  boxShadow: "0 8px 24px rgba(157,78,221,0.3)",
                }}
              >
                Crear landing para mi curso →
              </Link>
              <Link
                href="#como-funciona"
                className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition"
              >
                Cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">
              Sin tarjeta · Plan gratuito · Chatbot Forgi incluido
            </p>
          </section>

          {/* ── 2. DOLOR ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                El problema de vender cursos online en 2026
              </h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                Crear un buen curso es solo la mitad del trabajo. La otra mitad
                es conseguir que la gente lo compre. Y ahí es donde la mayoría
                de creadores se atascan.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📉",
                  title: "Baja conversión en la página de venta",
                  text: "Tienes un curso increíble pero tu página de venta no convierte. El diseño no transmite profesionalidad, el copy no genera urgencia y no hay nadie respondiendo las dudas de los visitantes indecisos. El 95% de los visitantes se van sin comprar.",
                },
                {
                  icon: "⏳",
                  title: "Semanas diseñando la landing en vez de creando contenido",
                  text: "Cada hora que pasas ajustando colores, probando fuentes y escribiendo copy para tu landing page es una hora que no estás grabando módulos, respondiendo alumnos o creando tu próximo curso. Tu tiempo debe estar en el contenido, no en el diseño web.",
                },
                {
                  icon: "🤷",
                  title: "Dudas sin responder = ventas perdidas",
                  text: "¿El curso tiene certificado? ¿Puedo pagar a plazos? ¿Sirve para principiantes? Cada pregunta sin respuesta inmediata es un alumno potencial que se va a buscar otro curso. Sin un chatbot que responda 24/7, pierdes ventas mientras duermes.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3. CÓMO FUNCIONA ── */}
          <section id="como-funciona" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">
                  Tu sistema de ventas de cursos con IA
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  De idea de curso a landing de ventas en 30 segundos
                </h2>
              </div>
              <div className="flex flex-col gap-10">
                {[
                  {
                    num: "01",
                    title:
                      "Describe tu curso: temática, nivel y público objetivo",
                    text: "Cuéntale a LandForge de qué va tu curso: 'Curso de fotografía para principiantes', 'Masterclass de SEO para emprendedores' o 'Programa de coaching nutricional'. La IA adapta el copy, la estructura y el tono al tipo de alumno que quieres atraer. Si tu formación es técnica, el lenguaje será profesional. Si es creativa, será inspirador.",
                    badge: "Copy adaptado a tu tipo de alumno",
                  },
                  {
                    num: "02",
                    title:
                      "Landing page de venta profesional generada con IA",
                    text: "En 30 segundos tienes una landing completa con headline magnético, descripción del curso, módulos del temario, beneficios para el alumno, testimonios, pricing y CTAs estratégicos. El Forgi Editor te permite personalizar cada sección después. El Conversion Score analiza tu landing y te recomienda mejoras concretas para vender más.",
                    badge: "Estructura de venta probada para infoproductos",
                  },
                  {
                    num: "03",
                    title: "Forgi responde dudas y cierra inscripciones 24/7",
                    text: "Forgi conoce los detalles de tu curso: precio, duración, módulos, requisitos, certificación y garantía de devolución. Cuando un visitante pregunta '¿es para principiantes?' o '¿hay opción de pago a plazos?', Forgi responde al instante y lo guía hacia la inscripción. Es tu mejor comercial, disponible a las 3 de la mañana de un domingo.",
                    badge:
                      "Chatbot entrenado con la información de tu curso",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-xl border border-[#E0AAFF] bg-[#F3E8FF] text-[#9D4EDD]">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-[#6B7280] leading-relaxed mb-3">
                        {step.text}
                      </p>
                      <span className="inline-block text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1 rounded-full">
                        ✓ {step.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. CASOS DE USO ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold">
                  Tipos de formación online que escalan con LandForge
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Cada formato de formación online tiene su propio tipo de
                  landing. LandForge genera la estructura y el copy optimizado
                  para cada uno en segundos.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🎓",
                    title: "Cursos grabados (evergreen)",
                    text: "Cursos pregrabados que se venden todo el año. La landing necesita generar urgencia sin una fecha límite real: descuento por tiempo limitado, plazas limitadas o bonus por compra temprana. Forgi gestiona objeciones de precio y contenido las 24 horas.",
                    examples:
                      "Cursos en Hotmart, Teachable, Thinkific, Kajabi",
                  },
                  {
                    icon: "📡",
                    title: "Webinars y masterclasses en vivo",
                    text: "La landing page para un webinar necesita fecha, hora, speaker y un formulario de registro. La urgencia es natural porque el evento tiene fecha límite. Forgi recuerda a los registrados y responde dudas antes del evento para maximizar la asistencia.",
                    examples: "Webinars con Zoom, Eventos con StreamYard",
                  },
                  {
                    icon: "🔄",
                    title: "Membresías y suscripciones",
                    text: "Las membresías de formación requieren landing pages que transmitan valor continuo: nuevo contenido cada mes, comunidad, soporte directo del mentor. Forgi puede explicar los beneficios de la membresía y comparar planes de suscripción para cada visitante.",
                    examples: "Membresías en Patreon, Circle, Skool",
                  },
                ].map((caso) => (
                  <div
                    key={caso.title}
                    className="bg-white rounded-2xl border border-[#E0AAFF] p-8"
                  >
                    <div className="text-4xl mb-4">{caso.icon}</div>
                    <h3 className="font-bold text-lg mb-3">{caso.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed mb-4">
                      {caso.text}
                    </p>
                    <span className="text-xs font-semibold text-[#9D4EDD]">
                      {caso.examples}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. SOCIAL PROOF ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">
                Creadores de cursos que ya usan LandForge
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    text: "Antes tardaba 2 semanas en tener la landing de un curso nuevo. Con LandForge la genero en 30 segundos, la ajusto en 10 minutos y la lanzo el mismo día. Ahora puedo probar ideas de cursos rápidamente sin invertir días en diseño.",
                    name: "Laura G.",
                    role: "Creadora de cursos de marketing, Madrid",
                    result: "→ De 2 semanas a 30 minutos por landing",
                  },
                  {
                    text: "El chatbot Forgi me ahorra responder las mismas 5 preguntas sobre mi curso 100 veces. ¿Tiene certificado? ¿Es para principiantes? ¿Puedo pagar a plazos? Forgi las contesta 24/7 y los alumnos llegan ya convencidos a la página de pago.",
                    name: "Carlos R.",
                    role: "Formador online, programación web",
                    result: "→ 40% más inscripciones desde que activó Forgi",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="bg-[#FAFAFA] rounded-2xl border border-[#E0AAFF] p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex gap-0.5 text-[#FFB800] mb-4">
                        {"★★★★★".split("").map((s, i) => (
                          <span key={i}>{s}</span>
                        ))}
                      </div>
                      <p className="text-[#6B7280] italic leading-relaxed mb-4">
                        &ldquo;{t.text}&rdquo;
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1.5 rounded-lg inline-block mb-3">
                        {t.result}
                      </div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-xs text-[#6B7280]">{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 6. BENEFICIOS CLAVE ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Por qué LandForge es la mejor herramienta para vender cursos
                online
              </h2>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Una landing por curso en 30 segundos",
                  text: "Cada curso, webinar o masterclass merece su propia landing page optimizada. Con LandForge generas una landing específica para cada formación en 30 segundos. Puedes tener 10 cursos con 10 landing pages distintas sin invertir semanas de diseño. Más landings = más canales de venta activos.",
                },
                {
                  icon: "💬",
                  title: "Forgi cierra inscripciones 24/7",
                  text: "El 60% de las visitas a tu landing de cursos ocurren fuera de tu horario de trabajo. Forgi está disponible a las 2AM del domingo, responde las dudas del alumno potencial sobre precio, contenido y certificación, y lo guía hasta la página de pago. Es un vendedor que nunca duerme.",
                },
                {
                  icon: "📊",
                  title: "Conversion Score optimiza tus ventas",
                  text: "El Conversion Score analiza tu landing page de curso y te dice exactamente qué mejorar: si el headline no tiene gancho, si falta urgencia, si los testimonios no son suficientes o si el CTA no es visible. Optimización basada en datos, no en intuición.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{b.title}</h3>
                  <p className="text-white/60 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 7. FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">
                Preguntas frecuentes de creadores de cursos sobre LandForge
              </h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿Forgi puede responder preguntas sobre el contenido de mi curso?",
                    a: "Sí. Entrenas a Forgi con la información de tu curso: temario, duración, precio, requisitos, certificación y garantía. Cuando un visitante pregunta, Forgi responde al instante y lo guía hacia la inscripción.",
                  },
                  {
                    q: "¿Puedo crear landing pages diferentes para cada curso o webinar?",
                    a: "Sí, y es la estrategia que mejor funciona. Una landing específica para cada curso convierte mucho más que una página general. Con LandForge, cada landing nueva se genera en 30 segundos.",
                  },
                  {
                    q: "¿LandForge integra con plataformas de cursos como Teachable o Hotmart?",
                    a: "Sí, a través de Zapier. Puedes conectar LandForge con Teachable, Hotmart, Thinkific, Kajabi y cualquier plataforma de formación. Cuando un lead se inscribe, Zapier lo envía a tu plataforma automáticamente.",
                  },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#1A1A2E]">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform flex-shrink-0 text-xl">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── 8. CTA ── */}
          <section
            className="px-6 py-24 text-center"
            style={{
              background:
                "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)",
            }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
                Tu próximo alumno está buscando un curso como el tuyo ahora
                mismo
              </h2>
              <p className="text-[#E0AAFF] text-lg mb-10">
                ¿Va a encontrar tu landing de venta o la de otro creador? Genera
                la tuya en 30 segundos con IA y chatbot incluido. Consulta
                nuestros{" "}
                <Link
                  href="/precios"
                  className="text-white font-semibold underline underline-offset-2 hover:text-[#F3E8FF] transition"
                >
                  planes y precios
                </Link>{" "}
                para creadores de cursos.
              </p>
              <Link
                href="/register"
                className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl"
              >
                Crear landing para mi curso →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más sectores y recursos</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/para"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Todos los sectores
                </Link>
                <Link
                  href="/para/coaches"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → LandForge para Coaches
                </Link>
                <Link
                  href="/features/forgi-chatbot"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Forgi Chatbot IA
                </Link>
                <Link
                  href="/features/forgi-editor"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Forgi Editor
                </Link>
                <Link
                  href="/blog/como-crear-landing-page-alta-conversion"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Cómo crear landing pages de alta conversión
                </Link>
                <Link
                  href="/precios"
                  className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                >
                  → Planes y Precios
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
