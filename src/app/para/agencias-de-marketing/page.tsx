import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages IA para Agencias Marketing",
  description:
    "Genera landing pages para tus clientes en 30 segundos con IA. White label, chatbot Forgi y entrega con tu marca. Escala tu agencia sin ampliar equipo.",
  keywords: [
    "generador landing pages para agencias",
    "software landing pages marca blanca white label",
    "crear landing pages para clientes",
    "herramienta automatizar agencia marketing",
    "inteligencia artificial agencias seo",
  ],
  alternates: {
    canonical: "https://landforge.digital/para/agencias-de-marketing",
  },
  openGraph: {
    title: "Landing Pages IA para Agencias Marketing",
    description:
      "Genera landing pages para tus clientes en 30 segundos con IA. White label, chatbot Forgi y entrega con tu marca. Escala tu agencia sin ampliar equipo.",
    url: "https://landforge.digital/para/agencias-de-marketing",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Soluciones por Sector", item: "https://landforge.digital/para" },
    { "@type": "ListItem", position: 3, name: "Agencias de Marketing", item: "https://landforge.digital/para/agencias-de-marketing" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuántas landings puedo generar para mis clientes?",
      acceptedAnswer: { "@type": "Answer", text: "El plan Agency incluye hasta 20 landings activas y el plan Agency Pro es 100% ilimitado. Cambia la URL de tu cliente y la IA genera una landing nueva en 30 segundos." },
    },
    {
      "@type": "Question",
      name: "¿Puedo eliminar la marca de LandForge y usar la mía propia?",
      acceptedAnswer: { "@type": "Answer", text: "Sí, con el plan Agency Pro activas el White Label completo. Tu cliente ve tu marca y tu dominio en todas las pantallas, sin ninguna mención a LandForge." },
    },
    {
      "@type": "Question",
      name: "¿Forgi Chatbot se puede configurar con la voz y datos de cada cliente?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutamente. Para cada landing que generas, Forgi absorbe automáticamente la información del negocio de tu cliente (servicios, precios, zona, tono). Cada chatbot es único para cada cliente tuyo." },
    },
    {
      "@type": "Question",
      name: "¿Cuántos usuarios de mi equipo pueden acceder?",
      acceptedAnswer: { "@type": "Answer", text: "El plan Agency Pro incluye acceso para todo tu equipo, ideal para coordinación entre diseñador, trafficker y account manager trabajando al mismo tiempo." },
    },
  ],
};

export default function AgenciasLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />

            <nav aria-label="Breadcrumb" className="text-xs text-[#6B7280] mb-6 flex gap-1">
              <Link href="/" className="hover:text-[#9D4EDD]">Inicio</Link><span>/</span>
              <Link href="/para" className="hover:text-[#9D4EDD]">Soluciones</Link><span>/</span>
              <span className="text-[#9D4EDD]">Agencias de Marketing</span>
            </nav>

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Plataforma B2B White Label para Agencias y Freelancers
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Landing Pages para Agencias de Marketing{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                que Convierten en 30 Segundos
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Las landing pages para agencias de marketing son el cuello de botella que frena tu escalabilidad. <strong className="text-[#1A1A2E]">Con LandForge, cada nueva landing para un cliente tarda 30 segundos, no 3 días.</strong> La IA se encarga del copy, del diseño y del chatbot de ventas. Tú te llevas el margen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition duration-200 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Probar gratis (Plan Agencia) →
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition duration-200">
                Ver cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · 14 días gratis · White Label disponible desde el Plan Unlimited</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["30s", "De briefing a landing publicada"], ["5 usuarios", "En el Plan Unlimited"], ["100%", "White Label, cero branding de LandForge"], ["∞", "Landings en Plan Unlimited"]].map(([v, l]) => (
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Captar clientes para tu agencia empieza por entregar landing pages más rápido</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">El 68% del tiempo que paga tu cliente en las facturas de tu agencia va a maquetación repetitiva, no a estrategia. LandForge cierra ese sangrado.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "⏱️", title: "El diseñador bloqueado por los clientes urgentes", text: "Tienes 4 clientes activos y todos quieren su landing nueva para el lunes. Tu diseñador junior tarda 2 días mínimo en cada una aunque sea el mismo template." },
                { icon: "💬", title: "El cliente que quiere cambios infinitos", text: "El cliente ve el diseño y quiere cambiar el color del botón, mover el logo a la derecha y reescribir el H1. Lo que era una landing facturable termina siendo 6 horas extra sin cobrar." },
                { icon: "🔌", title: "El chatbot de soporte que hay que configurar aparte", text: "Tu cliente espera soporte automático en la landing. Te toca contratar Intercom, ManyChat o Tidio, pagar por separado y configurarlo desde cero para cada cliente. Tiempo y dinero tirados." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
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
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Flujo de trabajo de tu agencia</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">Tu nuevo proceso para entregar landings en el mismo día</h2>
              </div>
              <div className="flex flex-col gap-10">
                {[
                  { num: "01", title: "Introduces el briefing del cliente (5 min)", text: "Sector, servicios, público objetivo, competidores, tono de voz y colores. LandForge hace el análisis de competidores automáticamente. Sin entrevistas largas ni formularios de 30 páginas.", badge: "Análisis de competidores incluido" },
                  { num: "02", title: "La IA genera la landing completa", text: "Dos agentes IA trabajan en paralelo creando copy orientado a conversión (no a leer) y una estructura diseñada para la búsqueda que hace el cliente de tu cliente. En menos de 1 minuto tienes una propuesta real.", badge: "Copy + Diseño en un solo paso" },
                  { num: "03", title: "Forgi se entrena solo para ese cliente", text: "El chatbot de la landing lee los datos del formulario y aprende las preguntas más frecuentes del sector de tu cliente. Tu agencia no configura nada: Forgi atiende los leads directamente desde el minuto uno.", badge: "Soporte 24/7 sin configuración" },
                  { num: "04", title: "Entregas con tu White Label", text: "Activa el White Label del plan Agency Pro: tu logo, tu dominio, tu panel de cliente. El cliente ve tu marca en todo momento. LandForge trabaja entre bastidores sin aparecer en ningún sitio.", badge: "Invisible para tu cliente" },
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

          {/* ── 4. CALCULADORA ROI ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold mb-4">Calcula tu ahorro como Agencia</h2>
              <p className="text-[#6B7280] mb-14 max-w-xl mx-auto">Una landing page estándar toma entre 8 y 20 horas de un diseñador junior. A 25€/h, eso son 200–500€ de coste interno antes de cobrarla.</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Coste por landing (agencia tradicional)", value: "200–500€", sub: "8–20h de diseño y redacción", color: "#EF4444" },
                  { title: "Coste por landing (LandForge Agency Pro)", value: "~6,50€", sub: "197€/mes ÷ 30 landings = 6,57€ c/u", color: "#9D4EDD" },
                  { title: "Margen extra mensual por agencia", value: "+1.500€", sub: "Estimación conservadora para 5 clientes activos", color: "#10B981" },
                ].map((card) => (
                  <div key={card.title} className="bg-white rounded-2xl border border-[#E0AAFF] p-8 text-center">
                    <div className="text-3xl font-extrabold mb-2" style={{ color: card.color }}>{card.value}</div>
                    <div className="font-bold text-[#1A1A2E] mb-2">{card.title}</div>
                    <div className="text-xs text-[#6B7280]">{card.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. SOCIAL PROOF ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">Usuarios que han probado LandForge antes de su lanzamiento</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { text: "Cerramos la reunión de ventas y el mismo día entregamos la propuesta con una landing real del negocio del cliente. La tasa de cierre se disparó al 80%.", name: "Carlos R.", role: "Consultor de marketing, Madrid", result: "→ 80% tasa de cierre desde día 1" },
                  { text: "LandForge nos ha eliminado completamente la figura del 'diseñador de landings'. Ahora un trafficker genera la página en el mismo proceso de configuración de campaña.", name: "Ana P.", role: "Especialista en performance, Barcelona", result: "→ 0 horas de diseño por landing" },
                  { text: "El White Label es la feature que necesitaba. Soy freelance y mis clientes ahora piensan que tengo un equipo de desarrollo detrás. Lo que soy es un cliente de LandForge Agency Pro.", name: "Jorge L.", role: "Freelance SEO & Ads, Valencia", result: "→ Posicionado como profesional completo en solitario" },
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

          {/* ── 6. FAQ ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes de agencias sobre LandForge</h2>
              <div className="divide-y divide-[#E0AAFF]">
                {[
                  { q: "¿Cuántas landings puedo generar para mis clientes?", a: "El plan Agency incluye hasta 20 landings activas y el plan Agency Pro es 100% ilimitado. Cambia la URL de tu cliente y la IA genera una landing nueva en 30 segundos." },
                  { q: "¿Puedo eliminar la marca de LandForge y usar la mía propia?", a: "Sí, con el plan Agency Pro activas el White Label completo. Tu cliente ve tu marca y tu dominio en todas las pantallas, sin ninguna mención a LandForge." },
                  { q: "¿Forgi Chatbot se puede configurar con la voz y datos de cada cliente?", a: "Absolutamente. Para cada landing que generas, Forgi absorbe automáticamente la información del negocio de tu cliente. Cada chatbot es único." },
                  { q: "¿Cuántos usuarios de mi equipo pueden acceder?", a: "El plan Agency Pro incluye acceso para todo tu equipo, ideal para coordinación entre diseñador, trafficker y account manager." },
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

          {/* ── 7. CTA FINAL ── */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Empieza a escalar tu Agencia hoy</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Tu próximo cliente podría ver una landing de su negocio en la misma reunión de firma. Sin esperas, sin diseñador bloqueado, sin coste de producción. Compara nuestros <Link href="/precios" className="text-white font-semibold underline underline-offset-2 hover:text-[#F3E8FF] transition">planes y precios</Link> para agencias.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition duration-200 shadow-xl">
                Probar gratis 14 días (sin tarjeta) →
              </Link>
              <p className="text-[#E0AAFF] mt-5 text-sm">Sin tarjeta · White Label en el plan Agency Pro · Landings ilimitadas</p>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-[#1A1A2E] mb-6 text-lg">Sectores que ya usan LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/coaches" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Coaches</Link>
                <Link href="/para/clinicas-dentales" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Clínicas Dentales</Link>
                <Link href="/para/ecommerce" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para eCommerce</Link>
                <Link href="/para/abogados" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Abogados</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi: Chatbot de Ventas IA</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
