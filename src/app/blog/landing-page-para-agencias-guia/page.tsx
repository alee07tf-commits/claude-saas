import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Agencias: Guía Definitiva para Escalar en 2026",
  description:
    "Cómo crear, entregar y escalar landing pages como agencia de marketing. Automatización con IA, white label, pricing para clientes y flujo de trabajo profesional.",
  keywords: [
    "landing pages para agencias de marketing",
    "como crear landing pages para clientes",
    "software landing pages agencia",
    "automatizar creacion landing pages",
    "white label landing page builder",
  ],
  alternates: {
    canonical: "https://landforge.digital/blog/landing-page-para-agencias-guia",
  },
  openGraph: {
    title: "Landing Pages para Agencias: Guía Definitiva para Escalar en 2026",
    description:
      "Cómo crear, entregar y escalar landing pages como agencia de marketing.",
    url: "https://landforge.digital/blog/landing-page-para-agencias-guia",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Landing Pages para Agencias de Marketing: Guía Definitiva para Escalar en 2026",
  description:
    "Cómo crear, entregar y escalar landing pages como agencia de marketing. Automatización con IA, white label, pricing para clientes y flujo de trabajo profesional.",
  author: { "@type": "Organization", name: "LandForge" },
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  image: "https://landforge.digital/og-image.png",
  publisher: {
    "@type": "Organization",
    name: "LandForge",
    logo: { "@type": "ImageObject", url: "https://landforge.digital/logo.png" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo usar LandForge con white label para mis clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. LandForge permite publicar las landing pages en dominios personalizados de tus clientes, sin ninguna referencia visible a LandForge. Tus clientes ven tu marca, tu proceso y tu entrega. Tú controlas todo desde un panel multi-cliente donde gestionas todas las landings de todos tus clientes en un solo lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas landing pages puede generar una agencia al mes con IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hay límite técnico. Cada landing se genera en menos de 30 segundos. Una agencia con un proceso bien definido (briefing estandarizado + encuesta inteligente + generación IA + revisión rápida) puede producir entre 30 y 80 landing pages al mes con un solo account manager dedicado. El cuello de botella deja de ser la producción y pasa a ser la captación de clientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi cliente quiere cambios después de la entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge incluye Forgi Editor, un editor visual en tiempo real que permite hacer ajustes de copy, imágenes, colores y estructura sin tocar código. Puedes hacer las revisiones tú mismo en minutos o, si tienes un plan de mantenimiento, cobrar un fee por ronda de cambios. La mayoría de agencias incluyen 1-2 rondas de revisión en el precio inicial y cobran las adicionales.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Landing Pages para Agencias: Guía Definitiva",
      item: "https://landforge.digital/blog/landing-page-para-agencias-guia",
    },
  ],
};

const tocItems = [
  { label: "El problema: por qué las agencias pierden dinero con las landing pages", anchor: "#problema" },
  { label: "Los 3 modelos de negocio de landing pages para agencias", anchor: "#modelos" },
  { label: "Cómo automatizar la creación de landing pages con IA", anchor: "#automatizar" },
  { label: "Qué buscar en un software de landing pages para agencias", anchor: "#software" },
  { label: "Cómo hacer pricing de landing pages para tus clientes", anchor: "#pricing" },
  { label: "El flujo de trabajo profesional: de briefing a entrega", anchor: "#flujo" },
  { label: "Case study: cómo escalar de 5 a 50 landings al mes", anchor: "#case-study" },
];

export default function LandingPageParaAgenciasGuia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">

            {/* Breadcrumb visible */}
            <nav className="text-xs text-[#6B7280] mb-8 flex items-center gap-2">
              <Link href="/" className="hover:text-[#9D4EDD] transition">Inicio</Link>
              <span>&rsaquo;</span>
              <Link href="/blog" className="hover:text-[#9D4EDD] transition">Blog</Link>
              <span>&rsaquo;</span>
              <span className="text-[#1A1A2E]">Landing Pages para Agencias</span>
            </nav>

            {/* HERO DEL ARTICULO */}
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">
                Guia para Agencias &middot; TOFU &middot; Prioridad Alta
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Landing Pages para Agencias de Marketing: Guia Definitiva para Escalar en 2026
              </h1>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                Tus clientes necesitan landing pages para cada campana de Ads, cada servicio y cada promocion.
                Pero construirlas manualmente te cuesta 4 a 8 horas por pagina, erosiona tus margenes y frena
                el crecimiento de tu agencia. Esta guia te muestra como pasar de producir 5 landings al mes
                a mas de 50 sin ampliar equipo, usando automatizacion con IA y un flujo de trabajo profesional.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                <span>Marzo 2026</span>
                <span>12 min de lectura</span>
                <span>LandForge Team</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* INDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-12">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">Lo que vas a aprender en esta guia</p>
              <ol className="space-y-1.5 text-sm">
                {tocItems.map((item, i) => (
                  <li key={item.anchor}>
                    <a href={item.anchor} className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                      <span className="text-[#9D4EDD] font-bold">{i + 1}.</span>{item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* METRICAS CLAVE */}
            <div className="bg-[#1A1A2E] text-white rounded-2xl p-8 mb-12">
              <p className="font-bold text-[#E0AAFF] text-sm mb-6 uppercase tracking-wider">La realidad de las agencias y las landing pages</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  ["4-8h", "Tiempo medio para crear una landing manualmente"],
                  ["30s", "Tiempo con LandForge IA"],
                  ["67%", "Agencias que pierden margen en landing pages"],
                  ["10x", "Capacidad de escala con automatizacion IA"],
                ].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="text-2xl font-extrabold text-[#9D4EDD] mb-1">{v}</div>
                    <div className="text-white/60 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCION 1 — PROBLEMA */}
            <section id="problema">
              <h2 className="text-2xl font-extrabold mb-4">1. El problema: por que las agencias pierden dinero con las landing pages</h2>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                La mayoria de agencias de marketing digital ofrecen landing pages como parte de sus paquetes de Google Ads, SEO o social media. El problema es que la produccion de esas landings se convierte en el cuello de botella operativo que nadie quiere admitir.
              </p>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                Hagamos numeros reales. Un disenador web junior cobra entre 20 y 35 euros por hora. Una landing page personalizada tarda entre 4 y 8 horas en crearse: briefing con el cliente, wireframe, diseno, maquetacion, copywriting, revision y publicacion. Eso son entre 80 y 280 euros de coste interno por landing. Si cobras al cliente 300 euros por landing, tu margen real es de entre 20 y 220 euros, sin contar el tiempo del project manager, las rondas de revision y las modificaciones post-entrega.
              </p>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                Pero el problema mas grave no es el margen unitario, es el coste de oportunidad. Mientras tu equipo dedica 8 horas a una sola landing page para un cliente, esta dejando de atender a otros tres clientes que tambien la necesitan para manana. El resultado: retrasos, clientes frustrados y, en ultima instancia, perdida de cuentas.
              </p>

              <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#9D4EDD] text-sm mb-3">Las expectativas del cliente vs la realidad de la agencia:</p>
                <div className="space-y-3 text-sm text-[#6B7280]">
                  <div className="flex gap-3">
                    <span className="font-bold text-[#9D4EDD] flex-shrink-0">Cliente:</span>
                    <span>&ldquo;Necesito la landing para el lunes, la campana empieza el martes.&rdquo;</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-[#9D4EDD] flex-shrink-0">Agencia:</span>
                    <span>&ldquo;Tenemos cola de 2 semanas, el disenador esta en otro proyecto.&rdquo;</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-[#9D4EDD] flex-shrink-0">Resultado:</span>
                    <span>El cliente lanza la campana con una pagina generica que convierte al 1%. Culpa a la agencia. No renueva.</span>
                  </div>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                Esta situacion se repite en agencias de todos los tamanos. Las que sobreviven y escalan son las que automatizan la produccion de landing pages para poder entregar rapidez sin sacrificar calidad ni margen.
              </p>
            </section>

            {/* SECCION 2 — MODELOS DE NEGOCIO */}
            <section id="modelos" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-4">2. Los 3 modelos de negocio de landing pages para agencias</h2>

              <p className="text-[#6B7280] leading-relaxed mb-6">
                Antes de hablar de herramientas, necesitas definir como encaja la creacion de landing pages en el modelo de negocio de tu agencia. Hay tres enfoques, cada uno con sus ventajas y limitaciones.
              </p>

              <div className="space-y-6 mb-6">
                {/* Modelo A */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono font-bold text-xl text-[#9D4EDD]">A</span>
                    <h3 className="font-extrabold text-lg">Incluida en paquete SEO / Ads</h3>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
                    La landing page es un entregable mas dentro de un paquete mensual de Google Ads o SEO. El cliente paga un fee mensual (por ejemplo 800 a 2.000 euros/mes) y la agencia incluye la creacion de 1-3 landing pages como parte del servicio.
                  </p>
                  <div className="flex gap-4 text-xs">
                    <span className="text-green-600 font-bold">Ventaja: facil de vender, el cliente ve valor integral</span>
                    <span className="text-red-500 font-bold">Riesgo: el coste de produccion erosiona el margen del paquete</span>
                  </div>
                </div>

                {/* Modelo B */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono font-bold text-xl text-[#9D4EDD]">B</span>
                    <h3 className="font-extrabold text-lg">Servicio independiente de landing pages</h3>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
                    Ofreces la creacion de landing pages como un servicio separado, con su propio pricing. El cliente paga por landing (entre 200 y 500 euros por unidad) o por proyecto. Funciona bien para clientes puntuales y lanzamientos especificos.
                  </p>
                  <div className="flex gap-4 text-xs">
                    <span className="text-green-600 font-bold">Ventaja: margen claro por unidad, facil de presupuestar</span>
                    <span className="text-red-500 font-bold">Riesgo: ingresos irregulares, dificil de escalar sin equipo</span>
                  </div>
                </div>

                {/* Modelo C */}
                <div className="rounded-2xl border border-[#9D4EDD] bg-[#FAF5FF] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono font-bold text-xl text-[#9D4EDD]">C</span>
                    <h3 className="font-extrabold text-lg">Productizacion: Landing Page as a Service (LPaaS)</h3>
                    <span className="text-xs bg-[#9D4EDD] text-white px-2 py-0.5 rounded-full">Recomendado</span>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
                    El modelo mas escalable. Creas un servicio productizado donde el cliente paga una suscripcion mensual (entre 500 y 2.000 euros/mes) que incluye la creacion de un numero determinado de landing pages al mes, mas mantenimiento, optimizacion y analytics. Es recurrente, predecible y automatizable.
                  </p>
                  <div className="flex gap-4 text-xs">
                    <span className="text-green-600 font-bold">Ventaja: ingresos recurrentes (MRR), alta escalabilidad con IA</span>
                    <span className="text-red-500 font-bold">Riesgo: requiere procesos bien definidos desde el dia uno</span>
                  </div>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                El modelo C (LPaaS) es el que mas se beneficia de la automatizacion con IA. Cuando puedes generar una landing page en 30 segundos en lugar de 8 horas, el coste de produccion se reduce a casi cero y el margen por cliente se dispara. Pero para que funcione, necesitas un software que soporte multi-cliente, white label y velocidad de ejecucion.
              </p>
            </section>

            {/* SECCION 3 — AUTOMATIZAR CON IA */}
            <section id="automatizar" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-4">3. Como automatizar la creacion de landing pages con IA</h2>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                La automatizacion no significa perder control creativo. Significa eliminar las 6-7 horas de trabajo mecanico (maquetar, ajustar responsive, configurar formularios, optimizar velocidad) y centrarte en lo unico que realmente importa: la estrategia y el mensaje.
              </p>

              <p className="text-[#6B7280] leading-relaxed mb-6">
                Asi funciona el flujo automatizado con LandForge:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { step: "01", title: "Briefing estandarizado", time: "5 min", desc: "El cliente (o tu como agencia) completa la encuesta inteligente de LandForge: sector, publico objetivo, propuesta de valor, servicios, tono de comunicacion. Esta encuesta reemplaza la tipica reunion de 1 hora que nunca termina de concretar nada." },
                  { step: "02", title: "Generacion con IA", time: "30 seg", desc: "La IA de LandForge genera la landing page completa: estructura, copywriting (con framework PAS), secciones de social proof, CTAs optimizados, formularios y chatbot de ventas (Forgi). Todo en menos de 30 segundos." },
                  { step: "03", title: "Revision y ajustes", time: "15-30 min", desc: "Tu equipo revisa la landing generada. Con Forgi Editor, puedes ajustar textos, imagenes, colores y estructura en tiempo real sin tocar codigo. La mayoria de ajustes son cosmeticos: cambiar una foto, afinar un titular, ajustar colores de marca." },
                  { step: "04", title: "Publicacion", time: "2 min", desc: "Publicas la landing en el dominio del cliente (white label). El chatbot Forgi se activa automaticamente, ya entrenado con el contenido del negocio. El tracking de conversiones queda configurado desde el primer momento." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg border-2 border-[#9D4EDD] bg-[#F3E8FF] text-[#9D4EDD]">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-extrabold">{item.title}</h3>
                        <span className="text-xs font-bold text-[#9D4EDD] bg-[#F3E8FF] px-2 py-0.5 rounded-full">{item.time}</span>
                      </div>
                      <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-3">El resultado:</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Antes (manual)", "4-8 horas por landing"],
                    ["Despues (con IA)", "30-45 minutos por landing"],
                    ["Ahorro de tiempo", "85-90% por unidad"],
                    ["Capacidad mensual", "De 5 landings a 50+"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="text-xs text-white/60 mb-1">{label}</div>
                      <div className="text-lg font-extrabold text-[#9D4EDD]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCION 4 — SOFTWARE */}
            <section id="software" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-4">4. Que buscar en un software de landing pages para agencias</h2>

              <p className="text-[#6B7280] leading-relaxed mb-6">
                No cualquier page builder sirve para agencias. Hay una diferencia enorme entre un constructor de paginas para freelancers y un software disenado para produccion profesional a escala. Estos son los criterios que debes evaluar:
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { feature: "White label completo", desc: "Dominio del cliente, sin branding del software visible. Tu marca, tu entrega.", critical: true },
                  { feature: "Gestion multi-cliente", desc: "Panel centralizado para gestionar las landings de 10, 50 o 200 clientes desde un solo lugar.", critical: true },
                  { feature: "Velocidad de produccion", desc: "Generacion en segundos, no en dias. La IA debe hacer el trabajo pesado: estructura, copy, responsive, SEO.", critical: true },
                  { feature: "Tracking de conversiones", desc: "Analytics integrado: visitas, leads, tasa de conversion por landing y por cliente. Sin depender de herramientas externas.", critical: true },
                  { feature: "Chatbot de ventas incluido", desc: "Un chatbot IA que se entrene automaticamente con el contenido del negocio y empiece a convertir desde el dia uno.", critical: false },
                  { feature: "Editor visual (sin codigo)", desc: "Para hacer ajustes rapidos sin necesitar desarrolladores. Cambiar textos, imagenes y colores en tiempo real.", critical: false },
                  { feature: "Optimizacion SEO nativa", desc: "Meta tags, Schema markup, velocidad de carga, Core Web Vitals optimizados desde la generacion.", critical: false },
                  { feature: "Pricing escalable", desc: "Modelo de precios que escale contigo: que no te penalice por tener mas clientes ni por generar mas landings.", critical: false },
                ].map((item) => (
                  <div key={item.feature} className={`flex gap-4 items-start rounded-xl p-4 ${item.critical ? "bg-[#F3E8FF] border border-[#E0AAFF]" : "bg-white border border-gray-200"}`}>
                    <span className={`flex-shrink-0 mt-0.5 text-sm font-bold ${item.critical ? "text-[#9D4EDD]" : "text-[#6B7280]"}`}>
                      {item.critical ? "CRITICO" : "IMPORTANTE"}
                    </span>
                    <div>
                      <span className="font-bold text-sm">{item.feature}: </span>
                      <span className="text-[#6B7280] text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                LandForge cumple todos estos criterios. Fue disenado desde el principio para agencias que necesitan producir landing pages a escala con white label, gestion multi-cliente y generacion con IA en segundos. Puedes explorar las funcionalidades del <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold hover:underline">editor visual Forgi Editor</Link> y del <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold hover:underline">chatbot de ventas Forgi</Link> en sus paginas dedicadas.
              </p>
            </section>

            {/* SECCION 5 — PRICING */}
            <section id="pricing" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-4">5. Como hacer pricing de landing pages para tus clientes</h2>

              <p className="text-[#6B7280] leading-relaxed mb-6">
                El pricing es donde la mayoria de agencias deja dinero sobre la mesa. Si tu coste de produccion baja un 85% gracias a la IA, no necesitas trasladar todo ese ahorro al cliente. Necesitas encontrar el punto donde el precio refleje el valor que recibe el cliente, no el coste que tienes tu.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Modelo de pricing</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Rango de precio</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Mejor para</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Margen estimado*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Por landing (one-shot)", "200 - 500 EUR", "Clientes puntuales, lanzamientos", "75-90%"],
                      ["Retainer mensual", "500 - 2.000 EUR/mes", "Clientes con campanas activas", "80-92%"],
                      ["Bundled con Ads", "800 - 3.000 EUR/mes", "Clientes que quieren gestion completa", "60-75%"],
                      ["LPaaS (productizado)", "500 - 1.500 EUR/mes", "Escala maxima, MRR predecible", "85-95%"],
                    ].map(([modelo, precio, mejor, margen]) => (
                      <tr key={modelo}>
                        <td className="p-4 font-semibold">{modelo}</td>
                        <td className="p-4 text-[#9D4EDD] font-bold">{precio}</td>
                        <td className="p-4 text-[#6B7280]">{mejor}</td>
                        <td className="p-4 text-green-600 font-bold">{margen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-[#6B7280] mb-6">
                *Margen estimado usando LandForge como herramienta de produccion (coste de produccion &lt; 15 min por landing). Sin incluir costes fijos de la agencia.
              </p>

              <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold mb-3 text-[#9D4EDD]">Consejo de pricing avanzado</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Nunca vendas &ldquo;una landing page&rdquo;. Vende &ldquo;un sistema de captacion de leads que incluye landing page optimizada para conversion + chatbot IA de ventas 24h + analytics de rendimiento&rdquo;. El valor percibido se multiplica por 3 y justifica precios de 500 euros o mas por unidad. La landing es el medio, no el producto. El producto es el resultado: leads cualificados.
                </p>
              </div>
            </section>

            {/* SECCION 6 — FLUJO DE TRABAJO */}
            <section id="flujo" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-4">6. El flujo de trabajo profesional: de briefing a entrega</h2>

              <p className="text-[#6B7280] leading-relaxed mb-6">
                Un flujo de trabajo estandarizado es lo que separa a una agencia que entrega &ldquo;cuando puede&rdquo; de una que entrega en 48 horas de forma consistente. Aqui tienes el proceso completo, paso a paso.
              </p>

              <div className="space-y-0 mb-6">
                {[
                  { step: "1", title: "Briefing con el cliente", time: "30 min", desc: "Reunion o formulario estandarizado donde recoges: objetivo de la campana, publico objetivo, propuesta de valor, diferenciadores, tono de marca y elementos obligatorios (logo, colores, legal). Usa siempre el mismo formulario para todos los clientes." },
                  { step: "2", title: "Encuesta inteligente de LandForge", time: "5 min", desc: "Trasladas la informacion del briefing a la encuesta inteligente de LandForge. La IA necesita contexto de negocio para generar copy efectivo, no solo datos genericos. Cuanto mejor sea el input, mejor sera la landing resultante." },
                  { step: "3", title: "Generacion con IA", time: "30 seg", desc: "LandForge genera la landing completa: hero, social proof, seccion de problema, solucion, testimonios, CTA, formulario de contacto y chatbot Forgi. Todo optimizado para conversion y SEO desde el primer render." },
                  { step: "4", title: "Revision interna (QA)", time: "15 min", desc: "Tu account manager o disenador revisa la landing generada: verifica que el copy refleja la marca del cliente, que las imagenes son relevantes, que el CTA es claro y que no hay errores. Usa Forgi Editor para ajustes en tiempo real." },
                  { step: "5", title: "Ajustes y personalizacion", time: "15-30 min", desc: "Aplicas los ajustes cosmeticos: colores de marca, foto del equipo, logo, testimonios reales del cliente. Tambien puedes anadir secciones especificas si el cliente las solicito en el briefing." },
                  { step: "6", title: "Aprobacion del cliente", time: "Variable", desc: "Envias un enlace de preview al cliente. La mayoria aprueba con 0-2 cambios menores. Si incluyes una ronda de revision en tu pricing, cobras las rondas adicionales por separado." },
                  { step: "7", title: "Publicacion y activacion", time: "2 min", desc: "Publicas en el dominio del cliente (white label). Forgi se activa como chatbot de ventas. El tracking de conversiones queda operativo. Envias al cliente el enlace final y el acceso al dashboard de analytics." },
                ].map((item, idx) => (
                  <div key={item.step} className="flex gap-5 items-start py-5 border-b border-gray-100 last:border-b-0">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-[#9D4EDD] text-white">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-extrabold text-sm">{item.title}</h3>
                        <span className="text-xs font-bold text-[#9D4EDD]">{item.time}</span>
                      </div>
                      <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-xl px-5 py-3.5 mb-4">
                <span className="text-xs font-extrabold text-[#9D4EDD] uppercase tracking-wider">Tiempo total: </span>
                <span className="text-sm text-[#6B7280]">De briefing a landing publicada en menos de 48 horas (la mayoria en el mismo dia). Comparado con las 1-2 semanas del proceso manual tradicional.</span>
              </div>
            </section>

            {/* SECCION 7 — CASE STUDY */}
            <section id="case-study" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-4">7. Case study: como escalar de 5 a 50 landings al mes</h2>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                Para ilustrar como funciona todo esto en la practica, veamos un caso hipotetico pero basado en patrones reales de agencias que usan herramientas de generacion con IA.
              </p>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
                <h3 className="font-extrabold mb-3">Agencia DigiScale (caso hipotetico)</h3>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-[#6B7280]">Equipo:</span>
                    <span className="font-bold ml-2">4 personas (fundador + 1 ads + 1 disenador + 1 account manager)</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Clientes:</span>
                    <span className="font-bold ml-2">12 activos</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Servicio:</span>
                    <span className="font-bold ml-2">Google Ads + landing pages</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280]">Problema:</span>
                    <span className="font-bold ml-2">No pueden aceptar mas clientes por falta de capacidad</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-extrabold mb-3">Antes (proceso manual):</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7280] text-sm">
                <li>El disenador crea 5 landing pages al mes (una por semana, a veces menos)</li>
                <li>Cada landing tarda 6-8 horas entre diseno, maquetacion y revisiones</li>
                <li>El account manager dedica 2 horas extra por landing en briefings y revisiones</li>
                <li>Coste total por landing: ~240 EUR (tiempo del equipo)</li>
                <li>Cobran 350 EUR por landing = margen de 110 EUR por unidad</li>
                <li>Revenue mensual por landings: 1.750 EUR (5 x 350)</li>
                <li>Margen mensual: 550 EUR</li>
                <li>No pueden crecer sin contratar otro disenador (coste fijo de 1.800-2.500 EUR/mes)</li>
              </ul>

              <h3 className="text-lg font-extrabold mb-3">Despues (con LandForge IA):</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-[#6B7280] text-sm">
                <li>El account manager genera las landings directamente con LandForge (sin depender del disenador)</li>
                <li>Cada landing se genera en 30 segundos + 30 minutos de revision y personalizacion</li>
                <li>El disenador se enfoca en proyectos de alto valor (webs completas, branding)</li>
                <li>Coste total por landing: ~25 EUR (30 min de tiempo del account manager)</li>
                <li>Migran a modelo LPaaS: 800 EUR/mes por cliente (incluye hasta 5 landings + chatbot + analytics)</li>
                <li>Pasan de 12 a 25 clientes en 3 meses (sin contratar)</li>
                <li>Revenue mensual: 20.000 EUR</li>
                <li>Margen mensual: ~16.000 EUR</li>
                <li>Produccion: 50+ landings al mes con el mismo equipo de 4 personas</li>
              </ul>

              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-3">Impacto del cambio:</p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    ["Revenue", "De 1.750 a 20.000 EUR/mes"],
                    ["Margen", "De 550 a 16.000 EUR/mes"],
                    ["Landings/mes", "De 5 a 50+"],
                  ].map(([label, value]) => (
                    <div key={label} className="text-center">
                      <div className="text-xs text-white/60 mb-1">{label}</div>
                      <div className="text-lg font-extrabold text-[#9D4EDD]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                La clave no fue solo adoptar una herramienta de IA. Fue cambiar el modelo de negocio (de cobrar por landing a cobrar un retainer LPaaS) y estandarizar el flujo de trabajo para que una sola persona pudiera gestionar la produccion de 50 landings al mes.
              </p>
            </section>

            {/* CONCLUSION */}
            <section className="mt-14">
              <h2 className="text-2xl font-extrabold mb-4">Conclusion: el futuro de las agencias esta en la automatizacion inteligente</h2>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                Las agencias que siguen produciendo landing pages manualmente estan compitiendo con las manos atadas. El mercado exige velocidad, calidad y escala, y eso solo se consigue con automatizacion inteligente que no sacrifique la personalizacion.
              </p>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                La combinacion de un modelo de negocio productizado (LPaaS), un flujo de trabajo estandarizado y un software de generacion con IA como LandForge permite a agencias de 3-5 personas competir en produccion con equipos de 15-20. No se trata de reemplazar personas, sino de multiplicar su capacidad.
              </p>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                Si diriges una agencia de marketing y quieres escalar tu servicio de landing pages sin contratar, sin perder margen y sin comprometer la calidad de entrega, LandForge es la herramienta que necesitas probar. Para entender como funciona especificamente para agencias, visita nuestra <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold hover:underline">pagina dedicada a agencias de marketing</Link>.
              </p>
            </section>

            {/* CTA PRINCIPAL */}
            <section className="mt-14 rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">Escala tu agencia con LandForge</h2>
              <p className="text-[#E0AAFF] leading-relaxed mb-6">
                Genera landing pages profesionales para tus clientes en 30 segundos. White label, chatbot de ventas IA, gestion multi-cliente y analytics integrado. Todo lo que necesitas para pasar de 5 a 50+ landings al mes sin ampliar equipo.
              </p>
              <ol className="space-y-2 text-[#E0AAFF] text-sm mb-6">
                <li className="flex gap-3"><span className="font-bold text-white flex-shrink-0">1.</span>Crea tu cuenta gratuita en LandForge</li>
                <li className="flex gap-3"><span className="font-bold text-white flex-shrink-0">2.</span>Genera tu primera landing en 30 segundos</li>
                <li className="flex gap-3"><span className="font-bold text-white flex-shrink-0">3.</span>Publica con white label en el dominio de tu cliente</li>
                <li className="flex gap-3"><span className="font-bold text-white flex-shrink-0">4.</span>Empieza a escalar con el modelo LPaaS</li>
              </ol>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Empezar gratis ahora &rarr;
              </Link>
            </section>

            {/* FAQ visible */}
            <section className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre landing pages para agencias</h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "Puedo usar LandForge con white label para mis clientes?",
                    a: "Si. LandForge permite publicar las landing pages en dominios personalizados de tus clientes, sin ninguna referencia visible a LandForge. Tus clientes ven tu marca, tu proceso y tu entrega. Tu controlas todo desde un panel multi-cliente donde gestionas todas las landings de todos tus clientes en un solo lugar.",
                  },
                  {
                    q: "Cuantas landing pages puede generar una agencia al mes con IA?",
                    a: "No hay limite tecnico. Cada landing se genera en menos de 30 segundos. Una agencia con un proceso bien definido (briefing estandarizado + encuesta inteligente + generacion IA + revision rapida) puede producir entre 30 y 80 landing pages al mes con un solo account manager dedicado. El cuello de botella deja de ser la produccion y pasa a ser la captacion de clientes.",
                  },
                  {
                    q: "Que pasa si mi cliente quiere cambios despues de la entrega?",
                    a: "LandForge incluye Forgi Editor, un editor visual en tiempo real que permite hacer ajustes de copy, imagenes, colores y estructura sin tocar codigo. Puedes hacer las revisiones tu mismo en minutos o, si tienes un plan de mantenimiento, cobrar un fee por ronda de cambios. La mayoria de agencias incluyen 1-2 rondas de revision en el precio inicial y cobran las adicionales.",
                  },
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

            {/* ENLAZADO INTERNO */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="font-bold text-sm text-[#6B7280] mb-4">Articulos y paginas relacionadas</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  &rarr; LandForge para Agencias de Marketing
                </Link>
                <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  &rarr; Forgi Editor Visual
                </Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  &rarr; Forgi Chatbot de Ventas IA
                </Link>
                <Link href="/blog/como-crear-landing-page-alta-conversion" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  &rarr; Como Crear Landing Page Alta Conversion
                </Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  &rarr; LandForge vs Webflow
                </Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
