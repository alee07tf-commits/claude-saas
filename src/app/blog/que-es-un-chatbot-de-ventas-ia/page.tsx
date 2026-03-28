import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chatbot de Ventas con IA: Guía 2026",
  description:
    "Descubre qué es un chatbot de ventas con IA, cómo funciona, tipos, beneficios y cómo implementarlo en tu web para multiplicar leads.",
  openGraph: {
    title: "Chatbot de Ventas con IA: Guía Definitiva 2026",
    description:
      "Guía definitiva sobre chatbots de ventas con IA: cómo funcionan, beneficios, comparativa de herramientas y pasos para implementarlo.",
    type: "article",
    publishedTime: "2026-03-15T10:00:00Z",
    modifiedTime: "2026-03-27T10:00:00Z",
    authors: ["Alejandro Bethencourt"],
  },
  alternates: {
    canonical: "https://landforge.digital/blog/que-es-un-chatbot-de-ventas-ia",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Que es un Chatbot de Ventas con IA y Como Puede Triplicar tus Leads",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge", sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/" },
  publisher: { "@type": "Organization", name: "LandForge" },
  datePublished: "2026-03-15",
  dateModified: "2026-03-27",
  description:
    "Guia definitiva sobre chatbots de ventas con inteligencia artificial: definicion, funcionamiento tecnico, beneficios, comparativa y guia de implementacion.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://landforge.digital/blog/que-es-un-chatbot-de-ventas-ia",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cual es la diferencia entre un chatbot de ventas con IA y uno basado en reglas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un chatbot basado en reglas sigue flujos predefinidos y solo puede responder a opciones programadas. Un chatbot de ventas con IA utiliza procesamiento de lenguaje natural (NLP) y machine learning para entender la intencion del usuario, mantener contexto conversacional y generar respuestas personalizadas. Esto le permite manejar preguntas imprevistas y cualificar leads de forma natural.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto cuesta implementar un chatbot de ventas con inteligencia artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los precios varian segun la plataforma. Soluciones enterprise como Drift o Intercom pueden costar entre 500 y 2500 euros al mes. Sin embargo, plataformas como LandForge incluyen su chatbot de IA Forgi en todos sus planes, desde el plan gratuito. Los planes de pago comienzan en 49 euros al mes.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto tiempo se tarda en configurar un chatbot de ventas con IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la plataforma. Las soluciones tradicionales pueden requerir semanas de configuracion, entrenamiento y pruebas. Forgi de LandForge se entrena automaticamente a partir del contenido de tu landing page en aproximadamente 30 segundos, eliminando la configuracion manual.",
      },
    },
    {
      "@type": "Question",
      name: "Un chatbot de ventas con IA puede reemplazar a mi equipo comercial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, un chatbot de ventas con IA no reemplaza a tu equipo comercial, sino que lo potencia. Se encarga de la atencion inicial 24/7, la cualificacion automatica de leads y las respuestas a preguntas frecuentes, dejando que tu equipo se enfoque en cerrar ventas con leads ya cualificados y en las negociaciones complejas.",
      },
    },
    {
      "@type": "Question",
      name: "Que sectores se benefician mas de un chatbot de ventas con IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practicamente cualquier sector con presencia digital se beneficia: clinicas dentales y medicas, inmobiliarias, SaaS, eCommerce, gimnasios, coaches y consultores, y despachos de abogados. Los sectores con alto volumen de consultas repetitivas y procesos de decision complejos son los que mas ROI obtienen.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.site" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.site/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Que es un Chatbot de Ventas con IA",
      item: "https://landforge.site/blog/que-es-un-chatbot-de-ventas-ia",
    },
  ],
};

const tocItems = [
  { id: "que-es", label: "Qué es un chatbot de ventas con IA" },
  { id: "como-funciona", label: "Cómo funciona técnicamente" },
  { id: "beneficios", label: "5 beneficios clave con datos" },
  { id: "tipos", label: "Tipos de chatbots de ventas" },
  { id: "comparativa", label: "Top 5 chatbots de ventas en 2026" },
  { id: "implementacion", label: "Cómo implementar un chatbot de ventas" },
  { id: "casos-uso", label: "Casos de uso por industria" },
  { id: "errores", label: "Errores comunes al usar chatbots" },
  { id: "faq", label: "Preguntas frecuentes" },
];

export default function BlogChatbotVentasIA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#6B7280]">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#9D4EDD] transition-colors">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-[#9D4EDD] transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-[#9D4EDD]">Chatbot de ventas con IA</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD]">
            Guía definitiva
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] mt-3 mb-6 leading-tight">
            Qué es un Chatbot de Ventas con IA y Cómo Puede Triplicar tus Leads
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
            Un chatbot de ventas con inteligencia artificial es mucho más que un widget de
            &quot;preguntas frecuentes&quot;. Es un agente conversacional capaz de entender a tus
            visitantes, cualificar leads en tiempo real y guiarlos por tu embudo de ventas las 24
            horas del día, los 7 días de la semana. En esta guía completa te explicamos exactamente
            cómo funciona, qué tipos existen, cuáles son los mejores del mercado en 2026 y cómo
            puedes implementarlo hoy mismo sin necesidad de conocimientos técnicos.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
            <Link href="/sobre-nosotros" className="hover:underline">✍️ Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
            <span className="w-1 h-1 rounded-full bg-[#6B7280]" />
            <time dateTime="2026-03-15">15 marzo 2026</time>
            <span className="w-1 h-1 rounded-full bg-[#6B7280]" />
            <span>18 min de lectura</span>
          </div>
        </header>

        {/* Table of contents */}
        <nav className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-14">
          <p className="font-bold text-[#1A1A2E] mb-3 text-lg">Tabla de contenidos</p>
          <ol className="space-y-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[#7B2CBF] hover:text-[#9D4EDD] transition-colors"
                >
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ───────────────── Section 1 ───────────────── */}
        <section id="que-es" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            1. Qué es un chatbot de ventas con inteligencia artificial
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Un <strong>chatbot de ventas con IA</strong> es un programa de software que utiliza
            tecnologías de inteligencia artificial conversacional &mdash;como el procesamiento de
            lenguaje natural (NLP) y el machine learning&mdash; para interactuar con los visitantes
            de tu web, identificar sus necesidades y guiarlos hacia la conversión. A diferencia de
            los chatbots tradicionales basados en reglas, que solo pueden responder a opciones
            predefinidas, un chatbot de ventas con IA entiende la <em>intención</em> detrás de
            cada mensaje y genera respuestas contextualizadas.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Para entenderlo mejor, imagina la diferencia entre un contestador automático con
            opciones numéricas (&quot;pulse 1 para ventas, pulse 2 para soporte&quot;) y una
            conversación real con un vendedor experto que conoce tu producto al detalle. El primero
            es un chatbot basado en reglas; el segundo se acerca mucho más a lo que hace un
            chatbot de ventas potenciado por inteligencia artificial.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Es importante distinguirlo también de los chatbots de soporte. Mientras un chatbot de
            atención al cliente se centra en resolver problemas postventa (estado de pedido,
            devoluciones, FAQ técnico), un <strong>chatbot de ventas IA para web</strong> está
            diseñado para la parte superior y media del embudo: captar atención, responder dudas
            previas a la compra, cualificar al lead con preguntas estratégicas y, si procede,
            agendar una reunión o redirigir al equipo comercial.
          </p>
          <p className="text-[#6B7280] leading-relaxed">
            Un ejemplo concreto es{" "}
            <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
              Forgi, el chatbot de ventas de LandForge
            </Link>, que se entrena automáticamente a partir del contenido de tu landing page.
            En lugar de programar flujos manualmente, Forgi lee tu página, comprende tu propuesta
            de valor y empieza a conversar con tus visitantes en menos de 30 segundos. Esto
            representa un salto cualitativo respecto a las soluciones tradicionales que requieren
            semanas de configuración. Si aún no tienes claro qué es una landing page y por qué la
            necesitas,{" "}
            <Link href="/blog/que-es-una-landing-page" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
              nuestra guía sobre landing pages
            </Link>{" "}
            te lo explica desde cero.
          </p>
        </section>

        {/* ───────────────── Section 2 ───────────────── */}
        <section id="como-funciona" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            2. Cómo funciona un chatbot de ventas con IA: el proceso técnico simplificado
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Cuando un visitante escribe un mensaje en el chatbot, se desencadena un proceso de
            cuatro pasos que ocurre en milésimas de segundo. Entender este flujo te ayudará a
            comprender por qué los chatbots con IA son tan superiores a los basados en reglas.
          </p>

          <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
            <p className="font-bold text-lg mb-4">Flujo de procesamiento del chatbot IA</p>
            <ol className="space-y-3 text-[#E0AAFF]">
              <li>
                <strong className="text-white">1. Detección de intención (Intent Detection)</strong>
                <br />
                <span className="text-gray-300">
                  El modelo de NLP analiza el mensaje y determina qué quiere el usuario: pedir
                  información, comparar precios, agendar una cita, etc.
                </span>
              </li>
              <li>
                <strong className="text-white">2. Extracción de entidades (Entity Extraction)</strong>
                <br />
                <span className="text-gray-300">
                  Identifica datos relevantes del mensaje: nombre del servicio, presupuesto,
                  ubicación, horario preferido, número de empleados, etc.
                </span>
              </li>
              <li>
                <strong className="text-white">3. Gestión de contexto (Context Management)</strong>
                <br />
                <span className="text-gray-300">
                  Mantiene el hilo de la conversación. Si el visitante preguntó antes por precios
                  y ahora dice &quot;¿y el siguiente plan?&quot;, el chatbot sabe a qué se refiere.
                </span>
              </li>
              <li>
                <strong className="text-white">4. Generación de respuesta</strong>
                <br />
                <span className="text-gray-300">
                  Con la intención, las entidades y el contexto, genera una respuesta natural y
                  relevante. Los chatbots generativos (como Forgi) crean la respuesta en tiempo
                  real; los basados en reglas seleccionan una respuesta predefinida.
                </span>
              </li>
            </ol>
          </div>

          <p className="text-[#6B7280] leading-relaxed mb-4">
            Los modelos de lenguaje grande (LLM) que impulsan a los chatbots de ventas más
            avanzados como Forgi añaden una capa adicional: la capacidad de <em>razonar</em> sobre
            la información de tu negocio. Forgi no solo entiende que el usuario quiere saber el
            precio, sino que sabe contextualizar la respuesta dentro de tu propuesta de valor
            específica porque ha sido entrenado directamente con el contenido de tu landing.
          </p>
          <p className="text-[#6B7280] leading-relaxed">
            Este procesamiento de lenguaje natural avanzado es lo que permite que el chatbot
            mantenga conversaciones fluidas sin que el visitante sienta que habla con una máquina.
            Según un estudio de Salesforce (2025), el 69% de los consumidores prefiere interactuar
            con chatbots de IA que con formularios estáticos cuando la experiencia conversacional
            es natural y personalizada.
          </p>
        </section>

        {/* ───────────────── Section 3 ───────────────── */}
        <section id="beneficios" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            3. 5 beneficios clave de usar un chatbot de ventas con IA (con datos)
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Implementar un <strong>chatbot de ventas automático</strong> en tu web no es una cuestión
            de tendencia tecnológica, es una decisión respaldada por métricas de negocio contundentes.
            Estas son las cinco ventajas principales, acompañadas de datos reales de la industria.
          </p>

          {/* Benefit 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
              3.1 Aumento dramático en la generación de leads cualificados
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Las empresas que implementan chatbots de ventas con IA reportan un incremento medio del
              67% en leads cualificados (Drift, State of Conversational Marketing 2025). Esto se debe
              a que el chatbot interactúa proactivamente con visitantes que, de otro modo, habrían
              abandonado la página sin dejar sus datos. Además, al cualificar en tiempo real, el
              equipo comercial recibe solo leads con alta probabilidad de conversión, mejorando la
              eficiencia de todo el funnel de conversión. Si te interesa profundizar en{" "}
              <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
                cómo mejorar la tasa de conversión de tu landing page
              </Link>, tenemos una guía específica.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
              3.2 Atención al cliente 24/7 sin coste operativo adicional
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Un chatbot IA para empresas nunca duerme. Atiende consultas a las 3 de la mañana de un
              domingo igual que a las 10 de un martes. Según HubSpot (2025), el 82% de los
              consumidores esperan una respuesta inmediata a sus preguntas de ventas. Cada minuto de
              espera reduce la probabilidad de conversión un 7%. Con un chatbot de ventas IA
              funcionando permanentemente, eliminas este cuello de botella por completo.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
              3.3 Reducción del coste por lead entre un 40% y un 60%
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Al automatizar la primera interacción y la cualificación, tu equipo dedica su tiempo
              exclusivamente a leads calientes. Juniper Research estima que los chatbots ahorrarán a
              las empresas más de 11.000 millones de dólares anuales en 2026 solo en costes de
              atención al cliente y ventas. Para pymes y startups, esto significa poder competir en
              captación de leads con empresas mucho más grandes sin necesidad de ampliar el equipo
              comercial.
            </p>
          </div>

          <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
            <p className="font-bold text-lg mb-3">Datos clave del impacto de chatbots IA en ventas</p>
            <ul className="space-y-2 text-gray-300">
              <li>+67% de leads cualificados de media (Drift, 2025)</li>
              <li>82% de consumidores esperan respuesta inmediata (HubSpot, 2025)</li>
              <li>-50% en coste por lead de media (Juniper Research, 2026)</li>
              <li>3x más conversaciones iniciadas vs formularios estáticos (Intercom, 2025)</li>
              <li>35% de tasa de respuesta en horario no laboral (Tidio, 2025)</li>
            </ul>
          </div>

          {/* Benefit 4 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
              3.4 Cualificación automática con lead scoring inteligente
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Los chatbots de ventas más avanzados incorporan sistemas de lead scoring integrados.
              Durante la conversación, el chatbot asigna una puntuación al lead basada en sus
              respuestas: presupuesto, urgencia, tamaño de empresa, etc. Esto permite que tu CRM
              reciba leads ya priorizados. Forgi, por ejemplo, utiliza preguntas de cualificación
              configurables que se adaptan al contexto de cada conversación, y los datos se
              exportan directamente para su seguimiento.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
              3.5 Experiencia de usuario superior que refuerza la marca
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Un chatbot de ventas bien implementado no solo genera leads, sino que mejora la
              percepción de tu marca. El visitante siente que recibe atención personalizada desde
              el primer segundo. Gartner predice que en 2026, el 75% de las interacciones B2B de
              ventas se gestionarán a través de canales digitales, y las empresas con experiencias
              conversacionales superarán en un 25% en satisfacción a las que usen solo formularios.
            </p>
          </div>
        </section>

        {/* ───────────────── Section 4 ───────────────── */}
        <section id="tipos" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            4. Tipos de chatbots de ventas: cuál necesitas
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            No todos los chatbots son iguales. Antes de elegir una solución, es fundamental
            entender las cuatro categorías principales y en qué caso encaja cada una.
          </p>

          <div className="space-y-6 mb-6">
            <div className="border border-[#E0AAFF] rounded-2xl p-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">Chatbot basado en reglas</h3>
              <p className="text-[#6B7280] leading-relaxed mb-2">
                Funciona con árboles de decisión. El usuario selecciona opciones predefinidas
                (botones) y el chatbot sigue un flujo fijo. Es predecible, fácil de configurar y
                barato, pero extremadamente limitado: no entiende texto libre, no maneja
                conversaciones complejas y abandona al usuario si la pregunta no está en el árbol.
              </p>
              <p className="text-sm text-[#9D4EDD]">
                Mejor para: negocios con menos de 5 preguntas frecuentes y flujos muy lineales.
              </p>
            </div>

            <div className="border border-[#E0AAFF] rounded-2xl p-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">Chatbot con NLP (procesamiento de lenguaje natural)</h3>
              <p className="text-[#6B7280] leading-relaxed mb-2">
                Utiliza modelos de NLP para entender texto libre. Puede detectar intenciones y
                extraer entidades, pero sus respuestas siguen siendo seleccionadas de un banco
                predefinido. Más flexible que el basado en reglas, aunque requiere entrenamiento
                manual con ejemplos de frases por cada intención.
              </p>
              <p className="text-sm text-[#9D4EDD]">
                Mejor para: empresas medianas con equipo técnico disponible para entrenamiento.
              </p>
            </div>

            <div className="border border-[#E0AAFF] rounded-2xl p-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">Chatbot híbrido (reglas + NLP)</h3>
              <p className="text-[#6B7280] leading-relaxed mb-2">
                Combina flujos guiados con comprensión de lenguaje natural. El usuario puede
                seguir botones o escribir libremente. La mayoría de plataformas del mercado
                (Drift, Intercom, Tidio) funcionan en este modelo. Ofrece un buen equilibrio entre
                control y flexibilidad, pero el entrenamiento sigue siendo manual y costoso en
                tiempo.
              </p>
              <p className="text-sm text-[#9D4EDD]">
                Mejor para: empresas que necesitan flujos predecibles pero con algo de flexibilidad.
              </p>
            </div>

            <div className="border border-[#9D4EDD] bg-[#F3E8FF] rounded-2xl p-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                Chatbot generativo con IA (LLM-powered)
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-2">
                La generación más reciente. Utiliza modelos de lenguaje grandes (LLM) para generar
                respuestas en tiempo real, manteniendo conversaciones naturales, contextuales y
                persuasivas. No necesita banco de respuestas predefinidas ni entrenamiento manual
                con intenciones.{" "}
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
                  Forgi de LandForge
                </Link>{" "}
                pertenece a esta categoría: se entrena automáticamente leyendo el contenido de tu
                landing page y genera respuestas basadas en tu propuesta de valor concreta.
              </p>
              <p className="text-sm text-[#9D4EDD]">
                Mejor para: cualquier negocio que quiera máxima calidad conversacional con mínimo esfuerzo.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────── Section 5 ───────────────── */}
        <section id="comparativa" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            5. Top 5 chatbots de ventas con IA en 2026: comparativa completa
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Hemos analizado las principales plataformas de <strong>bot de ventas para web</strong>{" "}
            del mercado. Esta es nuestra comparativa actualizada a marzo de 2026, ordenada por
            relación calidad-precio para pymes y agencias.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-[#E0AAFF] rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-[#FAF5FF]">
                  <th className="text-left p-3 font-bold text-[#1A1A2E] border-b border-[#E0AAFF]">Herramienta</th>
                  <th className="text-left p-3 font-bold text-[#1A1A2E] border-b border-[#E0AAFF]">Tipo</th>
                  <th className="text-left p-3 font-bold text-[#1A1A2E] border-b border-[#E0AAFF]">Precio desde</th>
                  <th className="text-left p-3 font-bold text-[#1A1A2E] border-b border-[#E0AAFF]">Mejor para</th>
                  <th className="text-left p-3 font-bold text-[#1A1A2E] border-b border-[#E0AAFF]">Destacado</th>
                </tr>
              </thead>
              <tbody className="text-[#6B7280]">
                <tr className="bg-[#F3E8FF]">
                  <td className="p-3 font-bold text-[#9D4EDD] border-b border-[#E0AAFF]">Forgi (LandForge)</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Generativo (LLM)</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Gratis (incluido)</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Pymes, agencias, freelancers</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Auto-entrena desde landing en 30s</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#1A1A2E] border-b border-[#E0AAFF]">Drift</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Híbrido + IA</td>
                  <td className="p-3 border-b border-[#E0AAFF]">~2.500 EUR/mes</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Empresas B2B enterprise</td>
                  <td className="p-3 border-b border-[#E0AAFF]">ABM e integración Salesforce</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#1A1A2E] border-b border-[#E0AAFF]">Intercom</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Híbrido + IA (Fin)</td>
                  <td className="p-3 border-b border-[#E0AAFF]">~74 EUR/mes</td>
                  <td className="p-3 border-b border-[#E0AAFF]">SaaS y startups tech</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Ecosistema completo de soporte + ventas</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#1A1A2E] border-b border-[#E0AAFF]">Tidio</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Híbrido + IA (Lyro)</td>
                  <td className="p-3 border-b border-[#E0AAFF]">~29 EUR/mes</td>
                  <td className="p-3 border-b border-[#E0AAFF]">eCommerce, tiendas online</td>
                  <td className="p-3 border-b border-[#E0AAFF]">Integración Shopify, fácil de usar</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#1A1A2E]">HubSpot Chat</td>
                  <td className="p-3">Híbrido</td>
                  <td className="p-3">Gratis (básico)</td>
                  <td className="p-3">Usuarios del ecosistema HubSpot</td>
                  <td className="p-3">Integración nativa con HubSpot CRM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[#6B7280] leading-relaxed mb-4">
            La principal ventaja de{" "}
            <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
              Forgi
            </Link>{" "}
            frente al resto es que elimina la barrera de entrada. Mientras Drift requiere un equipo
            dedicado y meses de configuración, e Intercom necesita alimentar su IA con
            documentación de soporte, Forgi se entrena automáticamente leyendo tu landing page.
            Además, está incluido en todos los planes de LandForge &mdash;incluso en el{" "}
            <Link href="/precios" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
              plan gratuito
            </Link>&mdash;, lo que lo convierte en la opción más accesible del mercado para
            pymes, freelancers y agencias.
          </p>
          <p className="text-[#6B7280] leading-relaxed">
            Si ya tienes claro que necesitas un chatbot y quieres ver una guía paso a paso de
            implementación práctica,{" "}
            <Link href="/blog/chatbot-ventas-para-web" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
              lee nuestra guía práctica para implementar un chatbot de ventas en tu web
            </Link>.
          </p>
        </section>

        {/* ───────────────── Section 6 ───────────────── */}
        <section id="implementacion" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            6. Cómo implementar un chatbot de ventas con IA: guía paso a paso
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            La implementación depende enormemente de la plataforma que elijas. A continuación, te
            mostramos el proceso general y, en paralelo, cómo{" "}
            <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
              Forgi simplifica cada paso
            </Link>.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9D4EDD] text-white flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <p className="font-bold text-[#1A1A2E] mb-1">Define tu objetivo</p>
                <p className="text-[#6B7280] leading-relaxed">
                  Antes de instalar nada, decide qué quieres que haga el chatbot: captar emails,
                  cualificar leads, agendar reuniones, responder dudas previas a la compra o una
                  combinación. Esto determinará las preguntas de cualificación y el flujo
                  conversacional.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9D4EDD] text-white flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <p className="font-bold text-[#1A1A2E] mb-1">Prepara el contenido base</p>
                <p className="text-[#6B7280] leading-relaxed">
                  El chatbot necesita conocimiento sobre tu producto o servicio. En plataformas
                  tradicionales, esto implica crear una base de conocimiento, redactar respuestas
                  tipo y definir intenciones. Con Forgi, simplemente necesitas tener tu landing
                  page creada en LandForge: el chatbot la lee automáticamente y extrae toda la
                  información necesaria.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9D4EDD] text-white flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <p className="font-bold text-[#1A1A2E] mb-1">Configura las preguntas de cualificación</p>
                <p className="text-[#6B7280] leading-relaxed">
                  Define qué datos necesitas del lead para considerarlo cualificado: presupuesto,
                  tamaño de empresa, necesidad concreta, urgencia. El chatbot incorporará estas
                  preguntas de forma natural en la conversación. Forgi permite configurar preguntas
                  de cualificación personalizadas que se adaptan al contexto de cada chat.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9D4EDD] text-white flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <p className="font-bold text-[#1A1A2E] mb-1">Activa y prueba</p>
                <p className="text-[#6B7280] leading-relaxed">
                  Lanza el chatbot en modo de prueba. Conversas tú mismo simulando distintos tipos
                  de visitante. Verifica que las respuestas sean precisas, el tono adecuado y que
                  la cualificación funcione correctamente. Con Forgi, este proceso es casi
                  inmediato: activas el chatbot y en 30 segundos ya está listo para conversar.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9D4EDD] text-white flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <p className="font-bold text-[#1A1A2E] mb-1">Monitoriza y optimiza</p>
                <p className="text-[#6B7280] leading-relaxed">
                  Revisa las métricas semanalmente: tasa de engagement, leads generados, preguntas
                  sin respuesta, puntuación de satisfacción. Los chatbots con IA mejoran con el
                  tiempo, pero necesitas supervisar que las conversaciones mantienen la calidad.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] rounded-2xl p-8 text-white">
            <p className="text-xl font-bold mb-2">Implementa Forgi en 30 segundos</p>
            <p className="text-white/90 mb-4">
              Mientras la implementación tradicional lleva semanas, con LandForge activas Forgi
              directamente desde tu panel. Se entrena con tu landing, soporta múltiples idiomas y
              está incluido en todos los planes.
            </p>
            <Link
              href="/features/forgi-chatbot"
              className="inline-block bg-white text-[#7B2CBF] font-bold px-6 py-3 rounded-xl hover:bg-[#F3E8FF] transition-colors"
            >
              Descubre Forgi
            </Link>
          </div>
        </section>

        {/* ───────────────── Section 7 ───────────────── */}
        <section id="casos-uso" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            7. Casos de uso de chatbot de ventas IA por industria
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Un chatbot de ventas con inteligencia artificial se adapta a prácticamente cualquier
            sector. Estos son los usos más habituales donde vemos el mayor retorno de inversión.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Clínicas dentales y médicas</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Los pacientes buscan información sobre tratamientos, precios y disponibilidad fuera
                del horario de consulta. Un chatbot de ventas puede resolver dudas frecuentes sobre
                ortodoncia, implantes o blanqueamiento, cualificar al paciente según su necesidad y
                agendar una primera cita automáticamente. Muchas{" "}
                <Link href="/para/clinicas-dentales" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
                  clínicas dentales que usan LandForge
                </Link>{" "}
                han visto duplicarse sus solicitudes de primera visita al activar Forgi.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Inmobiliarias y promotoras</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Los compradores potenciales quieren saber metros cuadrados, ubicación, precio y
                financiación. El chatbot filtra según presupuesto y preferencias, y solo envía al
                agente los leads que realmente encajan. Las{" "}
                <Link href="/para/inmobiliarias" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
                  inmobiliarias que trabajan con landing pages optimizadas
                </Link>{" "}
                combinan la captación con cualificación automática para maximizar cada visita.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Gimnasios y centros deportivos</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Horarios, tarifas, clases disponibles, ubicación. Un chatbot de ventas responde al
                instante y puede ofrecer un pase de prueba gratuito para convertir al curioso en
                visitante. Los{" "}
                <Link href="/para/gimnasios" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
                  gimnasios con landings personalizadas
                </Link>{" "}
                logran tasas de conversión significativamente superiores cuando incluyen un chatbot
                de ventas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">SaaS y startups tecnológicas</h3>
              <p className="text-[#6B7280] leading-relaxed">
                En el mundo SaaS, el chatbot puede explicar funcionalidades, comparar planes,
                resolver dudas técnicas y programar demos. Es especialmente útil para productos
                con varios niveles de precios donde el visitante necesita orientación. Las{" "}
                <Link href="/para/startups-saas" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
                  startups SaaS que optimizan su funnel digital
                </Link>{" "}
                reportan el mayor incremento en conversiones a trial cuando añaden un chatbot IA.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">eCommerce</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Recomendación de productos, resolución de dudas sobre envío, tallas, materiales.
                Un chatbot de ventas puede actuar como un dependiente virtual, aumentando el ticket
                medio y reduciendo el abandono de carrito. Plataformas como Tidio están
                especializadas en este vertical, aunque Forgi ofrece una alternativa más
                potente gracias a su motor generativo.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Coaches, consultores y formadores</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Los{" "}
                <Link href="/para/coaches" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
                  coaches y consultores
                </Link>{" "}
                necesitan transmitir confianza y autoridad antes de que el prospecto se decida.
                Un chatbot de ventas con IA puede explicar la metodología, compartir resultados de
                clientes anteriores y preguntar sobre los objetivos del prospecto para personalizar
                la propuesta de sesión de descubrimiento.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Despachos de abogados</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Las consultas legales requieren una primera toma de contacto donde el cliente
                expone su caso. Un chatbot puede hacer un triaje inicial, determinar el área legal
                relevante (laboral, civil, mercantil) y agendar una consulta con el abogado
                adecuado, eliminando llamadas que no encajan con la especialidad del despacho.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────── Section 8 ───────────────── */}
        <section id="errores" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            8. 5 errores comunes al usar un chatbot de ventas (y cómo evitarlos)
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Implementar un chatbot de ventas automático no garantiza resultados si cometes estos
            errores frecuentes. Hemos visto estos patrones repetirse en cientos de proyectos.
          </p>

          <div className="space-y-5">
            <div className="border-l-4 border-[#9D4EDD] pl-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">
                Error 1: Activar el chatbot antes de tener contenido de calidad
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Si tu landing page no tiene información clara sobre tu producto, precios y
                propuesta de valor, el chatbot no tendrá con qué trabajar. Los chatbots generativos
                como Forgi son tan buenos como el contenido del que aprenden. Asegúrate de que tu
                landing esté completa y optimizada antes de activarlo.
              </p>
            </div>

            <div className="border-l-4 border-[#9D4EDD] pl-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">
                Error 2: No configurar preguntas de cualificación
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Un chatbot que conversa pero no cualifica es un chatbot que genera ruido, no leads.
                Define desde el principio qué información necesitas del visitante (presupuesto,
                urgencia, tamaño de equipo) y configúrala en tu chatbot. Sin cualificación, tu
                equipo comercial perderá tiempo con leads que no van a comprar.
              </p>
            </div>

            <div className="border-l-4 border-[#9D4EDD] pl-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">
                Error 3: Ignorar las analíticas de conversación
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Muchos negocios activan el chatbot y se olvidan de él. Revisa semanalmente las
                conversaciones, identifica preguntas frecuentes sin respuesta adecuada, mide la
                tasa de abandono y ajusta. Un chatbot sin supervisión es una oportunidad perdida
                de mejora continua.
              </p>
            </div>

            <div className="border-l-4 border-[#9D4EDD] pl-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">
                Error 4: Usar un tono genérico e impersonal
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                El chatbot debe reflejar la personalidad de tu marca. Si vendes un servicio premium,
                el tono debe ser profesional y cercano. Si eres una startup desenfadada, el chatbot
                puede ser más casual. Evita el tono robótico y corporativo que hace que el visitante
                sienta que habla con una máquina. Los chatbots generativos permiten ajustar el tono
                fácilmente.
              </p>
            </div>

            <div className="border-l-4 border-[#9D4EDD] pl-5">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">
                Error 5: No tener un plan B para preguntas fuera de alcance
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Ningún chatbot lo sabe todo. Configura una respuesta elegante para cuando el
                chatbot no pueda responder: ofrecer contacto con un humano, invitar a enviar un
                email o dejar un número de teléfono. Un &quot;no lo sé, pero te conecto con alguien
                que sí puede ayudarte&quot; es mil veces mejor que una respuesta inventada.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────── Section 9: FAQ ───────────────── */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">
            9. Preguntas frecuentes sobre chatbots de ventas con IA
          </h2>

          <div className="space-y-3">
            <details className="group border border-[#E0AAFF] rounded-2xl overflow-hidden">
              <summary className="cursor-pointer p-5 font-bold text-[#1A1A2E] hover:bg-[#F3E8FF] transition-colors flex items-center justify-between">
                ¿Cuál es la diferencia entre un chatbot de ventas con IA y uno basado en reglas?
                <span className="text-[#9D4EDD] group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-5 pb-5 text-[#6B7280] leading-relaxed">
                Un chatbot basado en reglas sigue flujos predefinidos tipo &quot;árbol de
                decisiones&quot;: el usuario pulsa botones y el chatbot muestra respuestas
                preprogramadas. Un chatbot con IA utiliza procesamiento de lenguaje natural para
                entender texto libre, detectar intenciones, mantener contexto a lo largo de la
                conversación y generar respuestas personalizadas. Esto le permite manejar
                preguntas imprevistas, mantener conversaciones naturales y cualificar leads de
                forma mucho más efectiva.
              </div>
            </details>

            <details className="group border border-[#E0AAFF] rounded-2xl overflow-hidden">
              <summary className="cursor-pointer p-5 font-bold text-[#1A1A2E] hover:bg-[#F3E8FF] transition-colors flex items-center justify-between">
                ¿Cuánto cuesta implementar un chatbot de ventas con inteligencia artificial?
                <span className="text-[#9D4EDD] group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-5 pb-5 text-[#6B7280] leading-relaxed">
                El rango es muy amplio. Soluciones enterprise como Drift arrancan en unos 2.500
                EUR/mes. Intercom desde 74 EUR/mes. Tidio desde 29 EUR/mes. Sin embargo,{" "}
                <Link href="/precios" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">
                  LandForge incluye su chatbot Forgi en todos los planes
                </Link>, incluso en el gratuito. Los planes de pago empiezan en 49 EUR/mes
                (Starter), 97 EUR/mes (Agency) y 197 EUR/mes (Agency Pro), e incluyen además
                la plataforma completa de creación de landing pages.
              </div>
            </details>

            <details className="group border border-[#E0AAFF] rounded-2xl overflow-hidden">
              <summary className="cursor-pointer p-5 font-bold text-[#1A1A2E] hover:bg-[#F3E8FF] transition-colors flex items-center justify-between">
                ¿Cuánto tiempo se tarda en configurar un chatbot de ventas con IA?
                <span className="text-[#9D4EDD] group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-5 pb-5 text-[#6B7280] leading-relaxed">
                Con plataformas tradicionales, la configuración completa (entrenamiento, pruebas,
                ajuste de flujos, integración con CRM) puede tomar entre 2 y 8 semanas. Con
                Forgi de LandForge, el chatbot se entrena automáticamente a partir del contenido
                de tu landing page en aproximadamente 30 segundos. Solo necesitas configurar las
                preguntas de cualificación y ya está listo para funcionar.
              </div>
            </details>

            <details className="group border border-[#E0AAFF] rounded-2xl overflow-hidden">
              <summary className="cursor-pointer p-5 font-bold text-[#1A1A2E] hover:bg-[#F3E8FF] transition-colors flex items-center justify-between">
                Un chatbot de ventas con IA puede reemplazar a mi equipo comercial?
                <span className="text-[#9D4EDD] group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-5 pb-5 text-[#6B7280] leading-relaxed">
                No, y tampoco es su objetivo. Un chatbot de ventas con IA potencia a tu equipo
                comercial: se encarga de la atención inmediata 24/7, la cualificación automática
                de leads, la respuesta a preguntas frecuentes y el triaje inicial. Esto libera a
                tu equipo para que se concentre en lo que mejor sabe hacer: cerrar ventas con leads
                ya cualificados, gestionar negociaciones complejas y construir relaciones a largo
                plazo con clientes.
              </div>
            </details>

            <details className="group border border-[#E0AAFF] rounded-2xl overflow-hidden">
              <summary className="cursor-pointer p-5 font-bold text-[#1A1A2E] hover:bg-[#F3E8FF] transition-colors flex items-center justify-between">
                ¿Qué sectores se benefician más de un chatbot de ventas con IA?
                <span className="text-[#9D4EDD] group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-5 pb-5 text-[#6B7280] leading-relaxed">
                Prácticamente cualquier negocio con presencia digital se beneficia, pero los
                sectores con mayor impacto son: clínicas dentales y médicas, inmobiliarias,
                empresas SaaS, eCommerce, gimnasios, coaches y consultores, y despachos de
                abogados. El denominador común es que son sectores con alto volumen de consultas
                repetitivas, procesos de decisión que requieren información previa y valor alto
                por cliente captado.
              </div>
            </details>
          </div>
        </section>

        {/* ───────────────── CTA Final ───────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#9D4EDD] via-[#7B2CBF] to-[#1A1A2E] rounded-2xl p-8 md:p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Activa tu chatbot de ventas con IA hoy
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Crea tu landing page con LandForge y Forgi se entrenará automáticamente con tu
              contenido en 30 segundos. Incluido en todos los planes, sin coste adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/features/forgi-chatbot"
                className="inline-block bg-white text-[#7B2CBF] font-bold px-8 py-3 rounded-xl hover:bg-[#F3E8FF] transition-colors"
              >
                Conoce a Forgi
              </Link>
              <Link
                href="/precios"
                className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Ver planes y precios
              </Link>
            </div>
          </div>
        </section>

        {/* ───────────────── Related articles ───────────────── */}
        <section className="border-t border-[#E0AAFF] pt-10">
          <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-4">
            Sigue aprendiendo
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/blog/chatbot-ventas-para-web"
              className="block border border-[#E0AAFF] rounded-2xl p-5 hover:bg-[#F3E8FF] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD]">Guía práctica</span>
              <p className="font-bold text-[#1A1A2E] mt-1">Cómo implementar un chatbot de ventas en tu web</p>
            </Link>
            <Link
              href="/blog/como-aumentar-conversion-landing-page"
              className="block border border-[#E0AAFF] rounded-2xl p-5 hover:bg-[#F3E8FF] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD]">Conversión</span>
              <p className="font-bold text-[#1A1A2E] mt-1">Cómo aumentar la conversión de tu landing page</p>
            </Link>
            <Link
              href="/blog/que-es-una-landing-page"
              className="block border border-[#E0AAFF] rounded-2xl p-5 hover:bg-[#F3E8FF] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD]">Fundamentos</span>
              <p className="font-bold text-[#1A1A2E] mt-1">Qué es una landing page y por qué necesitas una</p>
            </Link>
            <Link
              href="/features/forgi-chatbot"
              className="block border border-[#E0AAFF] rounded-2xl p-5 hover:bg-[#F3E8FF] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD]">Producto</span>
              <p className="font-bold text-[#1A1A2E] mt-1">Forgi: chatbot de ventas IA de LandForge</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
