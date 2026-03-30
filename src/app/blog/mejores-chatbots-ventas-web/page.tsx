import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "7 Mejores Chatbots de Ventas para Web (2026)",
  description:
    "Comparativa de los 7 mejores chatbots de ventas para web en 2026. Precios, pros, contras y para quien es ideal cada uno.",
  keywords: [
    "mejores chatbots ventas web",
    "chatbot ventas para web 2026",
    "chatbot IA para ventas",
    "comparativa chatbots ventas",
    "mejor chatbot ventas",
  ],
  alternates: {
    canonical: "/blog/mejores-chatbots-ventas-web",
  },
  openGraph: {
    title: "7 Mejores Chatbots de Ventas para Web (2026) | LandForge",
    description:
      "Comparativa de los 7 mejores chatbots de ventas para web en 2026. Precios, pros, contras y para quien es ideal cada uno.",
    url: "/blog/mejores-chatbots-ventas-web",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
    { "@type": "ListItem", position: 3, name: "Mejores Chatbots de Ventas para Web", item: "https://landforge.digital/blog/mejores-chatbots-ventas-web" },
  ],
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "7 Mejores Chatbots de Ventas para Web en 2026",
  description:
    "Analisis detallado de los 7 mejores chatbots de ventas para web: Forgi (LandForge), Drift, Intercom, Tidio, Crisp, LiveChat y HubSpot Chat. Precios, pros y contras.",
  author: {
    "@type": "Person",
    name: "Alejandro Bethencourt",
    url: "https://landforge.digital/sobre-nosotros",
    jobTitle: "Fundador de LandForge",
    sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  image: "https://landforge.digital/og-mejores-chatbots-ventas.jpg",
  publisher: {
    "@type": "Organization",
    name: "LandForge",
    url: "https://landforge.digital",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cual es el mejor chatbot de ventas para web en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mejor chatbot de ventas depende de tu caso de uso. Para landing pages y generacion de leads, Forgi de LandForge es la mejor opcion por su integracion nativa con la landing page y generacion con IA. Para grandes empresas con equipos de ventas, Drift o Intercom son opciones consolidadas. Para pymes con presupuesto ajustado, Tidio o Crisp ofrecen buena relacion calidad-precio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuanto cuesta un chatbot de ventas para web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los precios varian enormemente: desde gratuito (Forgi con LandForge Free, Tidio Free, Crisp Free) hasta mas de 2.500 dolares al mes (Drift Premium, Intercom Enterprise). La mayoria de chatbots tienen planes intermedios entre 19 y 100 dolares al mes. El coste depende del numero de conversaciones, contactos activos y funcionalidades avanzadas como IA, routing y CRM integrado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito un chatbot si ya tengo un formulario de contacto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Los chatbots de ventas convierten entre un 30% y un 50% mas que los formularios estaticos. La razon es que un chatbot es interactivo: hace preguntas, califica al lead en tiempo real, responde objeciones y puede agendar una reunion automaticamente. Un formulario es pasivo: el visitante rellena campos y espera. La inmediatez del chatbot reduce drasticamente la tasa de abandono.",
      },
    },
  ],
};

export default function MejoresChatbotsVentasWeb() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">

            {/* ── HERO ── */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">TOFU/MOFU Listicle · LandForge Blog</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Los 7 Mejores Chatbots de Ventas para Web en 2026: Comparativa Completa
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                Un <strong className="text-[#1A1A2E]">chatbot de ventas para web</strong> ya no es un &laquo;nice to have&raquo;: es una herramienta que puede multiplicar tus conversiones un 30-50% respecto a un formulario estatico. Pero no todos los chatbots son iguales. En esta comparativa analizamos los 7 mejores del mercado en 2026, con precios reales, pros, contras y para quien es ideal cada uno.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-[#6B7280]">
                <span>Marzo 2026</span>
                <span>11 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* INDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-10">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">Los 7 chatbots analizados</p>
              <ol className="space-y-1.5 text-sm">
                {[
                  { label: "Por que necesitas un chatbot de ventas en tu web", anchor: "#por-que" },
                  { label: "Forgi (LandForge) — El chatbot nativo de landing pages", anchor: "#forgi" },
                  { label: "Drift — El lider en revenue acceleration", anchor: "#drift" },
                  { label: "Intercom — El veterano del customer messaging", anchor: "#intercom" },
                  { label: "Tidio — La mejor opcion para pymes", anchor: "#tidio" },
                  { label: "Crisp — Chat + CRM asequible", anchor: "#crisp" },
                  { label: "LiveChat — El clasico del soporte en vivo", anchor: "#livechat" },
                  { label: "HubSpot Chat — Gratis dentro del ecosistema HubSpot", anchor: "#hubspot" },
                  { label: "Tabla comparativa de los 7 chatbots", anchor: "#comparativa" },
                  { label: "Preguntas frecuentes", anchor: "#faq" },
                ].map((item, i) => (
                  <li key={item.anchor}>
                    <a href={item.anchor} className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                      <span className="text-[#9D4EDD] font-bold">{i + 1}.</span>{item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* SECCION 1 — POR QUE */}
            <section id="por-que">
              <h2 className="text-2xl font-extrabold mb-4">1. Por que un chatbot de ventas convierte mas que un formulario</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Antes de comparar los <strong className="text-[#1A1A2E]">mejores chatbots de ventas para web</strong>, veamos por que funcionan mejor que los formularios tradicionales:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Interactividad: el chatbot hace preguntas y se adapta a las respuestas, creando una conversacion personalizada",
                  "Inmediatez: el visitante recibe respuestas en tiempo real, sin esperar a que alguien revise un formulario",
                  "Cualificacion automatica: el chatbot filtra leads no cualificados antes de pasar los buenos al equipo de ventas",
                  "Disponibilidad 24/7: atiende a visitantes fuera de horario comercial, cuando los formularios acumulan polvo",
                  "Reduccion de abandono: un chatbot proactivo puede interceptar visitantes que estan a punto de irse",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#6B7280]"><span className="text-[#9D4EDD] font-bold flex-shrink-0">→</span>{item}</li>
                ))}
              </ul>
              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-2">Dato clave:</p>
                <p className="text-white/80 text-sm leading-relaxed">Segun estudios de Drift e Intercom, las empresas que usan chatbots de ventas ven un aumento promedio del 35% en la tasa de conversion de sus landing pages. El tiempo medio de respuesta pasa de horas (formulario + email) a segundos (chatbot).</p>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Si quieres entender a fondo que es y como funciona un chatbot de ventas, lee nuestra guia <Link href="/blog/que-es-un-chatbot-de-ventas-ia" className="text-[#9D4EDD] font-semibold hover:underline">que es un chatbot de ventas con IA</Link>.
              </p>
            </section>

            {/* CHATBOT 1 — FORGI */}
            <section id="forgi" className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                <h2 className="text-2xl font-extrabold">Forgi (LandForge) — Chatbot IA nativo para landing pages</h2>
              </div>
              <div className="bg-[#FAF5FF] border border-[#E0AAFF] rounded-2xl p-6 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#9D4EDD] text-white text-xs font-bold px-3 py-1 rounded-full">MEJOR PARA LANDING PAGES</span>
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-3">
                  Forgi es el <strong className="text-[#1A1A2E]">chatbot de ventas con IA</strong> integrado en LandForge. A diferencia de los demas chatbots de esta lista, Forgi no es un widget que pegas en tu web: nace integrado en la landing page desde el momento en que la creas. La IA lee el contenido de tu landing y genera respuestas contextuales automaticamente.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-3">
                  Esto significa que cuando un visitante pregunta &laquo;¿Cuanto cuesta?&raquo; o &laquo;¿Incluye soporte?&raquo;, Forgi responde con la informacion de TU negocio, no con respuestas genericas. El chatbot cualifica leads, agenda reuniones y puede transferir a un humano si la conversacion lo requiere.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Precio</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Incluido en todos los planes de LandForge (desde 0€/mes). Plan Free: 1 landing + chatbot. Starter: 49€/mes. Agency: 97€/mes. Agency Pro: 197€/mes.</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Ideal para</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Emprendedores, pymes y agencias que usan landing pages para generar leads. Especialmente potente cuando la landing page y el chatbot se crean juntos.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Integrado nativamente con la landing page</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>IA contextual que lee tu contenido</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Incluido en el precio (sin coste adicional)</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Se activa automaticamente al crear la landing</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Cualificacion y captacion de leads en tiempo real</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Solo funciona en landing pages de LandForge</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>No se puede usar como standalone en webs externas</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Funcionalidades avanzadas en planes de pago</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed">
                Mas detalles sobre Forgi en nuestra <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold hover:underline">pagina de producto del chatbot Forgi</Link>.
              </p>
            </section>

            {/* CHATBOT 2 — DRIFT */}
            <section id="drift" className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                <h2 className="text-2xl font-extrabold">Drift — Revenue acceleration para empresas B2B</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Drift fue pionero en el concepto de &laquo;conversational marketing&raquo;. Su chatbot esta disenado para empresas B2B con equipos de ventas que necesitan cualificar leads, agendar reuniones y acelerar el pipeline de ventas. Se integra profundamente con Salesforce y otros CRMs enterprise.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Precio</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Desde 2.500$/mes (plan Premium). Los planes Enterprise no publican precio. No tiene plan gratuito real (solo trial de 14 dias).</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Ideal para</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Empresas B2B medianas-grandes con equipos de ventas de 5+ personas y presupuesto de marketing consolidado.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>IA conversacional muy avanzada</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Integracion profunda con Salesforce</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>ABM (Account-Based Marketing) integrado</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Routing inteligente al rep correcto</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Precio prohibitivo para pymes (2.500$/mes minimo)</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Complejidad de configuracion alta</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Overkill para landing pages simples</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CHATBOT 3 — INTERCOM */}
            <section id="intercom" className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                <h2 className="text-2xl font-extrabold">Intercom — Customer messaging todo en uno</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Intercom es una plataforma completa de customer messaging que incluye chatbot, chat en vivo, email marketing, help center y product tours. Su chatbot de ventas (llamado &laquo;Fin&raquo;) usa IA para responder preguntas y cualificar leads basandose en tu base de conocimiento.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Precio</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Desde 39$/mes (Essential). Plan Growth desde 99$/mes. Fin AI tiene un coste adicional de 0,99$ por resolucion.</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Ideal para</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Startups SaaS y empresas tech que necesitan chat en vivo + chatbot + help center en una sola plataforma.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Plataforma todo en uno (chat, email, help center)</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>IA Fin muy potente para respuestas automaticas</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Excelentes integraciones (300+ apps)</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Product tours y onboarding integrado</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Precio escala rapido con volumen de contactos</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Fin AI cobra por resolucion (coste variable)</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Curva de aprendizaje empinada</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CHATBOT 4 — TIDIO */}
            <section id="tidio" className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                <h2 className="text-2xl font-extrabold">Tidio — Chatbot accesible para pymes</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Tidio es una de las opciones mas populares entre pequenas y medianas empresas. Ofrece chatbot con IA (llamado &laquo;Lyro&raquo;), chat en vivo y automatizaciones de email. Su plan gratuito es funcional y su interfaz es de las mas simples del mercado.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Precio</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Plan Free disponible (50 conversaciones). Communicator desde 19€/mes. Chatbots desde 19€/mes. Lyro AI desde 39€/mes.</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Ideal para</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Pymes, ecommerce pequenos y tiendas online que necesitan chat en vivo + automatizaciones basicas sin gastar mucho.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Plan gratuito funcional</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Interfaz muy facil de usar</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Buena integracion con Shopify y WordPress</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Lyro AI bastante capaz para el precio</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>IA menos avanzada que Drift o Intercom</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Limites de conversaciones en plan Free</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Menos integraciones enterprise</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CHATBOT 5 — CRISP */}
            <section id="crisp" className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</span>
                <h2 className="text-2xl font-extrabold">Crisp — Chat en vivo + CRM asequible</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Crisp es una plataforma francesa que combina chat en vivo, chatbot, CRM, base de conocimiento y campanas de email en un solo producto. Su gran ventaja es el plan gratuito con 2 agentes y el plan Pro a un precio muy competitivo.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Precio</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Plan Free (2 agentes). Pro desde 25€/mes (4 agentes). Unlimited desde 95€/mes. Sin limites de conversaciones en ningun plan.</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Ideal para</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Startups y pymes europeas que quieren una alternativa a Intercom sin el precio enterprise. Muy bueno para equipos pequenos.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Sin limites de conversaciones</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>CRM incluido en todos los planes</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Precio muy competitivo</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Empresa europea (RGPD-friendly)</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>IA del chatbot menos desarrollada</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Interfaz menos pulida que la competencia</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Menos integraciones que Intercom o Drift</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CHATBOT 6 — LIVECHAT */}
            <section id="livechat" className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</span>
                <h2 className="text-2xl font-extrabold">LiveChat — El clasico del soporte en vivo</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                LiveChat lleva mas de 20 anos en el mercado y es una de las plataformas de chat en vivo mas consolidadas. Su punto fuerte es la experiencia del agente humano: dashboard potente, transferencia entre agentes, metricas de rendimiento y calidad. Su chatbot (ChatBot.com) es un producto separado.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Precio</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Desde 20$/mes por agente (Starter). Business desde 59$/mes por agente. ChatBot.com se cobra aparte desde 52$/mes.</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Ideal para</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Empresas con equipos de soporte/ventas que priorizan la experiencia del agente humano sobre la automatizacion.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Dashboard de agentes excelente</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>200+ integraciones</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Metricas de calidad de servicio</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Soporte multicanal (web, Facebook, email)</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Chatbot IA es un producto aparte (coste adicional)</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Precio por agente escala rapido</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Menos enfocado en ventas que en soporte</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CHATBOT 7 — HUBSPOT */}
            <section id="hubspot" className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">7</span>
                <h2 className="text-2xl font-extrabold">HubSpot Chat — Gratis dentro del ecosistema HubSpot</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                HubSpot incluye un chat en vivo y un chatbot basico en su CRM gratuito. La ventaja obvia es que esta integrado con todo el ecosistema HubSpot: contactos, deals, email, workflows. Si ya usas HubSpot, activar el chat es cuestion de minutos.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Precio</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Gratuito con HubSpot CRM Free. Funcionalidades avanzadas en Marketing Hub desde 800€/mes o Sales Hub desde 90€/mes.</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] mb-2">Ideal para</p>
                  <p className="text-[#1A1A2E] font-semibold text-sm">Empresas que ya usan HubSpot como CRM y quieren anadir chat sin instalar una herramienta adicional.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Gratuito con HubSpot CRM</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Integracion total con el ecosistema HubSpot</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Leads se crean automaticamente en el CRM</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Workflows de seguimiento automaticos</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Chatbot basico en plan gratuito (sin IA avanzada)</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Funcionalidades avanzadas requieren planes caros</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Branding de HubSpot en plan Free</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* TABLA COMPARATIVA */}
            <section id="comparativa" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">Comparativa chatbots de ventas 2026: tabla resumen</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-3 text-left font-bold text-[#9D4EDD]">Chatbot</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Precio desde</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">IA</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Plan Free</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Mejor para</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Forgi (LandForge)", "0€/mes", "Si (nativa)", "Si", "Landing pages"],
                      ["Drift", "2.500$/mes", "Si", "No", "Enterprise B2B"],
                      ["Intercom", "39$/mes", "Si (Fin)", "No", "SaaS / Startups"],
                      ["Tidio", "0€/mes", "Si (Lyro)", "Si", "Pymes / Ecommerce"],
                      ["Crisp", "0€/mes", "Basica", "Si", "Equipos pequenos"],
                      ["LiveChat", "20$/mes", "Separada", "No", "Soporte en vivo"],
                      ["HubSpot Chat", "0€/mes", "Basica", "Si", "Usuarios HubSpot"],
                    ].map(([name, price, ia, free, best]) => (
                      <tr key={name} className={name?.includes("Forgi") ? "bg-[#FAF5FF]" : ""}>
                        <td className="p-3 font-semibold">{name}</td>
                        <td className="p-3 text-[#6B7280] font-bold">{price}</td>
                        <td className="p-3 text-[#6B7280]">{ia}</td>
                        <td className={`p-3 ${free === "Si" ? "text-green-600 font-bold" : "text-[#6B7280]"}`}>{free}</td>
                        <td className="p-3 text-[#6B7280]">{best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Para mas informacion sobre como implementar un chatbot en tu web, lee <Link href="/blog/chatbot-ventas-para-web" className="text-[#9D4EDD] font-semibold hover:underline">chatbot de ventas para web: guia completa</Link>.
              </p>
            </section>

            {/* CTA NATIVO */}
            <section className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">Activa tu chatbot de ventas en 30 segundos</h2>
              <p className="text-[#E0AAFF] mb-6 max-w-lg mx-auto">
                Con LandForge, el chatbot Forgi se activa automaticamente al crear tu landing page. Sin configuracion, sin codigo, sin coste adicional. Empieza gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                  Crear mi landing + chatbot gratis
                </Link>
                <Link href="/precios" className="inline-block border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition">
                  Ver planes y precios
                </Link>
              </div>
            </section>

            {/* FAQ VISIBLE */}
            <section id="faq" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre chatbots de ventas</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cual es el mejor chatbot de ventas para web?", a: "Depende de tu caso de uso. Para landing pages, Forgi de LandForge es la mejor opcion por su integracion nativa y generacion con IA. Para grandes empresas B2B, Drift o Intercom. Para pymes con presupuesto ajustado, Tidio o Crisp." },
                  { q: "¿Cuanto cuesta un chatbot de ventas?", a: "Desde gratuito (Forgi con LandForge Free, Tidio Free, Crisp Free) hasta mas de 2.500 dolares al mes (Drift Premium). La mayoria tiene planes intermedios entre 19 y 100 dolares mensuales." },
                  { q: "¿Necesito un chatbot si ya tengo un formulario de contacto?", a: "Si. Los chatbots convierten un 30-50% mas que los formularios estaticos. Son interactivos, cualifican leads en tiempo real, responden objeciones y estan disponibles 24/7. Un formulario es pasivo y depende de que alguien lo revise." },
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
              <p className="font-bold text-sm text-[#6B7280] mb-4">Articulos relacionados</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Forgi: Chatbot de Ventas IA</Link>
                <Link href="/blog/que-es-un-chatbot-de-ventas-ia" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Que es un Chatbot de Ventas IA</Link>
                <Link href="/blog/chatbot-ventas-para-web" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Chatbot Ventas para Web: Guia</Link>
                <Link href="/precios" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Planes y Precios</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
