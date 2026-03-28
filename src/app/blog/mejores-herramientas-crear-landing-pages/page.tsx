import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Mejores Herramientas Landing Pages (2026)",
  description:
    "Comparativa de las 10 mejores herramientas para crear landing pages en 2026. Precio, facilidad, IA, conversión y para quién es cada una.",
  keywords: [
    "mejores herramientas crear landing pages",
    "herramientas landing pages 2026",
    "comparativa landing page builders",
    "mejor software crear landing pages",
    "alternativas unbounce leadpages",
  ],
  alternates: {
    canonical: "https://landforge.digital/blog/mejores-herramientas-crear-landing-pages",
  },
  openGraph: {
    title: "10 Mejores Herramientas Landing Pages (2026)",
    description:
      "Comparativa actualizada de las 10 mejores herramientas para crear landing pages en 2026.",
    url: "https://landforge.digital/blog/mejores-herramientas-crear-landing-pages",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Las 10 Mejores Herramientas para Crear Landing Pages en 2026",
  description: "Comparativa actualizada de las 10 mejores herramientas para crear landing pages en 2026. Precio, facilidad de uso, IA, conversion y para quien es cada una.",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge", sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/" },
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  image: "https://landforge.digital/og-image.png",
  publisher: { "@type": "Organization", name: "LandForge", logo: { "@type": "ImageObject", url: "https://landforge.digital/logo.png" } },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cual es la mejor herramienta gratuita para crear landing pages en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge ofrece un plan gratuito que incluye generacion de landing pages con IA, chatbot de ventas Forgi y publicacion sin coste. Para paginas muy simples, Carrd (19$/ano) y Canva (plan gratuito limitado) son alternativas economicas, aunque carecen de funcionalidades de conversion avanzadas como A/B testing o chatbot IA.",
      },
    },
    {
      "@type": "Question",
      name: "Que herramienta para crear landing pages tiene mejor conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las herramientas con mayor impacto en conversion son las que incluyen A/B testing nativo y chatbot de ventas IA. LandForge destaca por integrar ambas funcionalidades desde el plan gratuito, ademas de generar el copy optimizado para conversion con IA. Instapage y Unbounce tambien ofrecen A/B testing avanzado, pero a precios significativamente mas altos (desde 99-199$/mes).",
      },
    },
    {
      "@type": "Question",
      name: "Necesito saber programar para crear una landing page profesional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Todas las herramientas de esta lista permiten crear landing pages sin escribir codigo. LandForge va un paso mas alla: su IA genera la landing completa (estructura, copy, diseno y chatbot de ventas) a partir de una encuesta sobre tu negocio. Herramientas como Webflow y Framer ofrecen mas control visual pero requieren una curva de aprendizaje mayor.",
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
    { "@type": "ListItem", position: 3, name: "Las 10 Mejores Herramientas para Crear Landing Pages", item: "https://landforge.digital/blog/mejores-herramientas-crear-landing-pages" },
  ],
};

const herramientas = [
  {
    num: "01",
    name: "LandForge",
    tagline: "El generador con IA más rápido para agencias",
    price: "Desde 0 EUR",
    description: "LandForge es la única plataforma que genera landing pages completas con inteligencia artificial en menos de 30 segundos. Pensada desde el día uno para agencias de marketing hispanohablantes, incluye Forgi, un chatbot de ventas IA que se entrena automáticamente con el contenido de cada landing. Ideal para quien necesita lanzar campañas rápidamente sin sacrificar calidad de copy ni de conversión.",
    pros: [
      "Genera landing completa con IA en 30 segundos (estructura, copy, diseño y chatbot)",
      "Chatbot de ventas Forgi incluido en todos los planes, entrenado automáticamente con tu contenido",
      "Pensada para agencias: multiproyecto, en español nativo, con encuesta inteligente para cada cliente",
    ],
    cons: [
      "Plataforma más joven que competidores como Unbounce o Leadpages",
      "Menos integraciones nativas con CRMs enterprise (Salesforce, HubSpot avanzado) de momento",
      "Galería de templates manuales más reducida (la IA compensa generando diseños a medida)",
    ],
    ideal: "Agencias de marketing, freelancers y negocios que quieren landing pages de alta conversión sin dedicar días al diseño",
    highlight: true,
  },
  {
    num: "02",
    name: "Unbounce",
    tagline: "El clásico con Smart Builder",
    price: "Desde $99/mes",
    description: "Unbounce fue uno de los pioneros del mercado de landing page builders y sigue siendo una referencia sólida. Su Smart Builder usa IA para sugerir estructuras basadas en tu industria, aunque el nivel de generación automática no es tan completo como el de herramientas más modernas. Su punto fuerte es la madurez de su editor drag-and-drop y la amplia base de templates.",
    pros: [
      "Editor drag-and-drop maduro y estable con años de desarrollo",
      "Smart Builder con sugerencias basadas en datos de conversión de su propia base de clientes",
      "Amplia biblioteca de templates organizadas por industria y objetivo",
    ],
    cons: [
      "Precio de entrada elevado ($99/mes) para freelancers y pymes",
      "La IA sugiere pero no genera la landing completa automáticamente",
      "Interfaz puede resultar compleja para usuarios sin experiencia previa en diseño web",
    ],
    ideal: "Equipos de marketing medianos con presupuesto para invertir en una herramienta consolidada",
    highlight: false,
  },
  {
    num: "03",
    name: "Leadpages",
    tagline: "Simplicidad y templates para pymes",
    price: "Desde $49/mes",
    description: "Leadpages ha construido su reputación sobre la simplicidad. Es una de las opciones más fáciles de usar para crear landing pages con un catálogo extenso de plantillas orientadas a pymes y negocios locales. No tiene las funcionalidades IA más avanzadas, pero para quien busca algo sencillo y funcional, cumple bien su papel.",
    pros: [
      "Interfaz extremadamente sencilla, ideal para usuarios no técnicos",
      "Gran catálogo de plantillas optimizadas para diferentes industrias",
      "Buena relación calidad-precio para negocios pequeños ($49/mes incluye dominio y hosting)",
    ],
    cons: [
      "Sin generación de contenido con IA ni chatbot de ventas integrado",
      "Personalización limitada comparada con Webflow o Unbounce",
      "A/B testing solo disponible en el plan Pro ($99/mes)",
    ],
    ideal: "Pymes y emprendedores que buscan algo sencillo, rápido y sin curva de aprendizaje",
    highlight: false,
  },
  {
    num: "04",
    name: "Webflow",
    tagline: "Control visual total para diseñadores",
    price: "Desde $14/mes",
    description: "Webflow no es un landing page builder al uso: es un constructor web visual de nivel profesional. Ofrece control pixel-perfect sobre cada elemento, con un sistema de diseño basado en clases CSS reales. Su potencia es también su debilidad: la curva de aprendizaje es pronunciada y crear una landing desde cero puede llevar días.",
    pros: [
      "Control total sobre el diseño: pixel-perfect sin limitaciones de templates",
      "Genera código limpio y semántico, excelente para SEO técnico",
      "Sistema de CMS integrado muy potente para webs con múltiples páginas",
    ],
    cons: [
      "Curva de aprendizaje significativa, requiere conocimientos de diseño web",
      "No incluye funcionalidades de conversión nativas (A/B testing, chatbot, popups de captura)",
      "Crear una landing page desde cero puede llevar 2-5 días frente a los 30 segundos de una herramienta con IA",
    ],
    ideal: "Diseñadores web y agencias de diseño que priorizan el control visual absoluto sobre la velocidad de ejecución",
    highlight: false,
  },
  {
    num: "05",
    name: "Carrd",
    tagline: "El más barato para páginas simples",
    price: "$19/año",
    description: "Carrd es la opción minimalista por excelencia. Con solo $19 al año, puedes crear páginas de una sola sección (one-pagers) con diseño limpio y responsive. Es perfecto para freelancers que necesitan una página de presentación rápida, pero no está pensado para landing pages con múltiples secciones, formularios complejos ni estrategias de conversión.",
    pros: [
      "Precio imbatible: $19 al año por hasta 10 sitios",
      "Extremadamente fácil de usar, landing publicada en menos de una hora",
      "Diseños limpios y responsive por defecto",
    ],
    cons: [
      "Solo permite one-pagers muy básicos, sin secciones múltiples complejas",
      "Sin A/B testing, chatbot, integraciones CRM ni analytics avanzado",
      "Personalización muy limitada, no apto para campañas de conversión serias",
    ],
    ideal: "Freelancers y creadores que necesitan una página personal o de enlace rápida y barata",
    highlight: false,
  },
  {
    num: "06",
    name: "Instapage",
    tagline: "A/B testing avanzado para enterprise",
    price: "$199/mes",
    description: "Instapage se posiciona como la herramienta premium de landing pages para equipos enterprise que ejecutan campañas de paid media a gran escala. Su punto fuerte es el A/B testing avanzado con mapas de calor integrados y la personalización dinámica de contenido según la fuente de tráfico. Su precio refleja este posicionamiento.",
    pros: [
      "A/B testing avanzado con mapas de calor y analytics de conversión integrados",
      "Personalización dinámica: muestra contenido diferente según la fuente de tráfico (Google Ads, Facebook, email)",
      "Colaboración en equipo en tiempo real sobre el editor de la landing",
    ],
    cons: [
      "Precio muy elevado ($199/mes mínimo), prohibitivo para pymes y freelancers",
      "Sin chatbot de ventas IA integrado",
      "Sobreingeniería para quien solo necesita publicar 1-5 landing pages al mes",
    ],
    ideal: "Equipos enterprise de performance marketing con presupuesto de paid media superior a $10.000/mes",
    highlight: false,
  },
  {
    num: "07",
    name: "ClickFunnels",
    tagline: "Embudos de venta completos",
    price: "Desde $147/mes",
    description: "ClickFunnels no es solo un creador de landing pages: es una plataforma completa de embudos de venta. Incluye páginas de captura, páginas de venta, order bumps, upsells y áreas de miembros. Su filosofía es todo-en-uno, lo que es una ventaja si necesitas el embudo completo y una desventaja si solo necesitas una landing.",
    pros: [
      "Embudo de venta completo en una sola plataforma (landing, checkout, upsell, área de miembros)",
      "Comunidad enorme y formación incluida (Funnel Hackers)",
      "Templates de embudos probados con altas tasas de conversión para infoproductos",
    ],
    cons: [
      "Precio alto ($147/mes) para quien solo necesita una landing page",
      "Editor menos flexible que Webflow o Unbounce para diseño personalizado",
      "Páginas generadas tienden a ser lentas y con código pesado, penalizando el SEO",
    ],
    ideal: "Creadores de infoproductos, coaches y negocios que necesitan embudos de venta completos, no solo landing pages",
    highlight: false,
  },
  {
    num: "08",
    name: "Elementor (WordPress)",
    tagline: "Plugin de diseño para WordPress",
    price: "Desde $59/año",
    description: "Elementor es el constructor visual más popular del ecosistema WordPress. Si ya tienes un sitio en WordPress, Elementor te permite crear landing pages visualmente atractivas sin salir de tu CMS habitual. Su versión Pro incluye popups, formularios y WooCommerce builder. El inconveniente es que heredas todos los problemas de WordPress: actualizaciones, seguridad, hosting, velocidad.",
    pros: [
      "Se integra nativamente con WordPress y todo su ecosistema de plugins",
      "Precio competitivo ($59/año) con editor visual potente y completo",
      "Gran comunidad, miles de addons y templates de terceros disponibles",
    ],
    cons: [
      "Dependencia total de WordPress: hosting, actualizaciones, seguridad y velocidad son tu problema",
      "Las páginas tienden a ser pesadas (DOM excesivo), penalizando Core Web Vitals y SEO",
      "Sin IA generativa ni chatbot de ventas integrado",
    ],
    ideal: "Negocios que ya tienen un sitio WordPress y no quieren migrar a otra plataforma",
    highlight: false,
  },
  {
    num: "09",
    name: "Canva",
    tagline: "Diseño fácil con landing pages básicas",
    price: "Gratis / $12.99/mes",
    description: "Canva sorprendió al mercado al añadir la creación de páginas web y landing pages a su plataforma de diseño. La experiencia es coherente con la filosofía Canva: extremadamente fácil de usar, con templates visuales atractivos. Sin embargo, las landing pages generadas son muy básicas en funcionalidad, sin integraciones de marketing, analytics ni optimización de conversión.",
    pros: [
      "Interfaz que ya conocen millones de usuarios, sin curva de aprendizaje",
      "Templates visualmente atractivos y profesionales para múltiples industrias",
      "Plan gratuito funcional para páginas básicas, plan Pro muy económico ($12.99/mes)",
    ],
    cons: [
      "Landing pages muy básicas: sin formularios avanzados, A/B testing, chatbot ni integraciones CRM",
      "SEO limitado: poco control sobre meta tags, velocidad de carga y estructura semántica",
      "No está diseñada para conversión, es una herramienta de diseño con función de landing añadida",
    ],
    ideal: "Emprendedores y creadores que necesitan una página visual rápida sin objetivos de conversión avanzados",
    highlight: false,
  },
  {
    num: "10",
    name: "Framer",
    tagline: "El nuevo jugador para diseñadores modernos",
    price: "Desde $5/mes",
    description: "Framer se ha posicionado como la alternativa moderna a Webflow, con una interfaz más intuitiva y un enfoque en animaciones e interacciones fluidas. Originalmente una herramienta de prototipado, ha evolucionado hacia un constructor web completo. Su precio de entrada es muy accesible y su rendimiento de carga es excelente.",
    pros: [
      "Animaciones e interacciones avanzadas con interfaz intuitiva, más fácil que Webflow",
      "Rendimiento de carga excelente: genera sitios rápidos con buen Core Web Vitals",
      "Precio de entrada muy accesible ($5/mes) con funcionalidades de diseño profesionales",
    ],
    cons: [
      "Ecosistema más pequeño que Webflow: menos integraciones, comunidad y recursos de aprendizaje",
      "Sin funcionalidades nativas de conversión (A/B testing, chatbot, popups de captura)",
      "CMS limitado comparado con Webflow, menos adecuado para webs con mucho contenido",
    ],
    ideal: "Diseñadores y startups que buscan páginas visualmente impactantes con buen rendimiento a bajo coste",
    highlight: false,
  },
];

const tablaComparativa = [
  ["LandForge", "Desde 0 EUR", "Muy fácil", "Completa (generativa)", "Forgi incluido", "Agencias, freelancers"],
  ["Unbounce", "Desde $99/mes", "Media", "Smart Builder", "No", "Equipos marketing"],
  ["Leadpages", "Desde $49/mes", "Muy fácil", "No", "No", "Pymes"],
  ["Webflow", "Desde $14/mes", "Difícil", "No", "No", "Diseñadores"],
  ["Carrd", "$19/año", "Muy fácil", "No", "No", "Freelancers"],
  ["Instapage", "$199/mes", "Media", "Parcial", "No", "Enterprise"],
  ["ClickFunnels", "Desde $147/mes", "Media", "No", "No", "Infoproductos"],
  ["Elementor", "Desde $59/año", "Media", "No", "No", "Usuarios WordPress"],
  ["Canva", "Gratis / $12.99/mes", "Muy fácil", "No", "No", "Emprendedores"],
  ["Framer", "Desde $5/mes", "Media-difícil", "No", "No", "Diseñadores, startups"],
];

export default function MejoresHerramientasLandingPages() {
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
              <span className="text-[#1A1A2E]">Mejores herramientas para crear landing pages</span>
            </nav>

            {/* HERO DEL ARTICULO */}
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">Comparativa &middot; MOFU &middot; Actualizado 2026</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Las 10 mejores herramientas para crear landing pages en 2026
              </h1>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                Elegir la herramienta equivocada para crear landing pages te puede costar meses de trabajo, cientos de euros y una tasa de conversión mediocre. Hemos analizado las 10 opciones más populares del mercado en 2026 comparando precio, facilidad de uso, inteligencia artificial, conversión y para qué perfil encaja cada una. Sin rodeos, con pros y contras reales.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                <span>Marzo 2026</span>
                <span>12 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">✍️ Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* INDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-12">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">En este artículo</p>
              <ol className="space-y-1.5 text-sm">
                {herramientas.map((h, i) => (
                  <li key={h.num}>
                    <a href={`#herramienta-${h.num}`} className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                      <span className="text-[#9D4EDD] font-bold">{i + 1}.</span>{h.name} &mdash; {h.tagline}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#tabla-comparativa" className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                    <span className="text-[#9D4EDD] font-bold">11.</span>Tabla comparativa resumen
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                    <span className="text-[#9D4EDD] font-bold">12.</span>Conclusión: cuál es la mejor herramienta para ti
                  </a>
                </li>
                <li>
                  <a href="#faq" className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                    <span className="text-[#9D4EDD] font-bold">13.</span>Preguntas frecuentes
                  </a>
                </li>
              </ol>
            </div>

            {/* INTRO */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold mb-4">Por qué esta comparativa es diferente</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                La mayoría de artículos de &laquo;mejores herramientas para landing pages&raquo; son listas de afiliados que repiten las mismas 5 herramientas sin haberlas probado realmente. Aquí hemos evaluado cada herramienta con criterios concretos: precio real (no el precio gancho que solo aplica al plan anual), facilidad de uso para un usuario no técnico, capacidades de inteligencia artificial, funcionalidades de conversión (A/B testing, chatbot, analytics) y para qué tipo de profesional o empresa encaja.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Somos transparentes: LandForge es nuestro producto y aparece en la posición número uno porque creemos genuinamente que es la mejor opción para agencias y freelancers que necesitan velocidad, calidad de copy y conversión. Pero no por eso vamos a ignorar las ventajas reales de cada competidor. Si tu perfil encaja mejor con otra herramienta, te lo diremos.
              </p>
            </section>

            {/* DATOS CLAVE */}
            <div className="bg-[#1A1A2E] text-white rounded-2xl p-8 mb-12">
              <p className="font-bold text-[#E0AAFF] text-sm mb-6 uppercase tracking-wider">El mercado de landing page builders en 2026</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  ["$7.9B", "Tamaño del mercado global de landing page builders"],
                  ["68%", "Empresas que usan IA para crear landing pages"],
                  ["2.35%", "Tasa de conversión media de landing pages B2B"],
                  ["30s", "Tiempo para generar una landing con LandForge IA"],
                ].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="text-2xl font-extrabold text-[#9D4EDD] mb-1">{v}</div>
                    <div className="text-white/60 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CRITERIOS DE EVALUACION */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold mb-4">Criterios de evaluación</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">Cada herramienta ha sido evaluada en 5 dimensiones:</p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
                {[
                  ["Precio", "Coste real mensual o anual, incluyendo limitaciones del plan básico"],
                  ["Facilidad", "Tiempo desde cero hasta landing publicada para un usuario no técnico"],
                  ["IA", "Nivel de inteligencia artificial: desde sugerencias básicas hasta generación completa"],
                  ["Conversión", "A/B testing, chatbot, analytics, popups y otras funcionalidades orientadas a convertir"],
                  ["Perfil ideal", "Para qué tipo de profesional o empresa encaja mejor"],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-4">
                    <div className="font-bold text-[#9D4EDD] text-sm mb-1">{title}</div>
                    <div className="text-xs text-[#6B7280]">{desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* LAS 10 HERRAMIENTAS */}
            <div className="space-y-14">
              {herramientas.map((h) => (
                <section key={h.num} id={`herramienta-${h.num}`}>
                  <div className={`rounded-2xl border p-8 ${h.highlight ? "border-[#9D4EDD] bg-[#FAF5FF]" : "border-gray-200 bg-white"}`}>
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono font-bold text-2xl text-[#9D4EDD]">{h.num}</span>
                        <div>
                          <h2 className="text-xl font-extrabold leading-tight">{h.name}</h2>
                          <p className="text-sm text-[#6B7280]">{h.tagline}</p>
                        </div>
                        {h.highlight && <span className="text-xs bg-[#9D4EDD] text-white px-3 py-1 rounded-full font-bold">Recomendada</span>}
                      </div>
                      <span className="text-sm font-bold text-[#9D4EDD] bg-[#F3E8FF] px-4 py-2 rounded-xl">{h.price}</span>
                    </div>

                    <p className="text-[#6B7280] leading-relaxed mb-6">{h.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-2">Ventajas</p>
                        <ul className="space-y-2">
                          {h.pros.map((pro) => (
                            <li key={pro} className="flex gap-2 text-sm text-[#6B7280]">
                              <span className="text-green-500 flex-shrink-0 font-bold">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">Desventajas</p>
                        <ul className="space-y-2">
                          {h.cons.map((con) => (
                            <li key={con} className="flex gap-2 text-sm text-[#6B7280]">
                              <span className="text-red-400 flex-shrink-0 font-bold">&minus;</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-xl px-5 py-3">
                      <span className="text-xs font-extrabold text-[#9D4EDD] uppercase tracking-wider">Ideal para: </span>
                      <span className="text-sm text-[#6B7280]">{h.ideal}</span>
                    </div>
                  </div>

                  {/* Contextual internal links after specific tools */}
                  {h.name === "LandForge" && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-xs border border-[#E0AAFF] rounded-lg px-3 py-1.5 hover:bg-[#F3E8FF] transition">Conoce a Forgi, el chatbot IA &rarr;</Link>
                      <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-xs border border-[#E0AAFF] rounded-lg px-3 py-1.5 hover:bg-[#F3E8FF] transition">LandForge para agencias &rarr;</Link>
                    </div>
                  )}
                  {h.name === "Unbounce" && (
                    <div className="mt-4">
                      <Link href="/comparar/landforge-vs-unbounce" className="text-[#9D4EDD] font-semibold text-xs border border-[#E0AAFF] rounded-lg px-3 py-1.5 hover:bg-[#F3E8FF] transition">Comparativa detallada: LandForge vs Unbounce &rarr;</Link>
                    </div>
                  )}
                  {h.name === "Leadpages" && (
                    <div className="mt-4">
                      <Link href="/comparar/alternativas-leadpages" className="text-[#9D4EDD] font-semibold text-xs border border-[#E0AAFF] rounded-lg px-3 py-1.5 hover:bg-[#F3E8FF] transition">Alternativas a Leadpages en 2026 &rarr;</Link>
                    </div>
                  )}
                  {h.name === "Webflow" && (
                    <div className="mt-4">
                      <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-xs border border-[#E0AAFF] rounded-lg px-3 py-1.5 hover:bg-[#F3E8FF] transition">Comparativa detallada: LandForge vs Webflow &rarr;</Link>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* TABLA COMPARATIVA */}
            <section id="tabla-comparativa" className="mt-16">
              <h2 className="text-2xl font-extrabold mb-6">Tabla comparativa resumen</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF]">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Herramienta</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Precio</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Facilidad</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">IA</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Chatbot</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Perfil ideal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tablaComparativa.map(([name, price, ease, ai, chatbot, profile], i) => (
                      <tr key={name} className={i === 0 ? "bg-[#FAF5FF]" : ""}>
                        <td className="p-4 font-semibold">
                          {i === 0 && <span className="text-[#9D4EDD]">{name}</span>}
                          {i !== 0 && name}
                        </td>
                        <td className="p-4 text-[#6B7280]">{price}</td>
                        <td className="p-4 text-[#6B7280]">{ease}</td>
                        <td className="p-4 text-[#6B7280]">{ai}</td>
                        <td className="p-4 text-[#6B7280]">{chatbot}</td>
                        <td className="p-4 text-[#6B7280]">{profile}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CONCLUSION */}
            <section id="conclusion" className="mt-16">
              <h2 className="text-2xl font-extrabold mb-6">Conclusión: cuál es la mejor herramienta para ti</h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                No existe una única &laquo;mejor herramienta&raquo; universal. La elección correcta depende de tu perfil, tu presupuesto y tus objetivos. Aquí va nuestra recomendación honesta según quién eres:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    profile: "Agencia de marketing digital",
                    rec: "LandForge",
                    why: "Necesitas lanzar landing pages para múltiples clientes, rápido, con copy de calidad y con un diferencial real (Forgi chatbot). El plan gratuito te permite probar sin compromiso y escalar cuando lo necesites. La generación con IA elimina las horas de diseño y copywriting que matan la rentabilidad de cada proyecto.",
                  },
                  {
                    profile: "Freelancer o consultor de marketing",
                    rec: "LandForge o Carrd",
                    why: "Si creas landing pages para clientes, LandForge te permite entregar en horas lo que antes tardabas días. Si solo necesitas una página personal de presentación sin objetivos de conversión, Carrd a $19/año es imbatible.",
                  },
                  {
                    profile: "Empresa enterprise con equipo de performance",
                    rec: "Instapage o Unbounce",
                    why: "Si tu equipo gestiona campañas de paid media con presupuesto superior a $10.000/mes y necesita A/B testing avanzado, mapas de calor e integraciones enterprise con Salesforce o HubSpot, Instapage ($199/mes) o Unbounce ($99/mes) son opciones sólidas y probadas.",
                  },
                  {
                    profile: "Diseñador web que prioriza el control visual",
                    rec: "Webflow o Framer",
                    why: "Si tu valor diferencial es el diseño pixel-perfect y tienes el tiempo para construir desde cero, Webflow te da control total. Si buscas algo más moderno y con mejor rendimiento de carga, Framer está ganando terreno rápido a un precio más accesible.",
                  },
                  {
                    profile: "Pyme o emprendedor que empieza",
                    rec: "LandForge (gratis) o Leadpages",
                    why: "LandForge te permite empezar sin coste y tener tu landing lista en minutos con IA. Si prefieres elegir plantillas manualmente y configurar a tu ritmo, Leadpages ($49/mes) es sencilla y funcional. Evita herramientas caras como Instapage o ClickFunnels en esta fase.",
                  },
                ].map((item) => (
                  <div key={item.profile} className="border border-gray-200 rounded-2xl p-6 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-extrabold">{item.profile}</h3>
                      <span className="text-xs bg-[#F3E8FF] text-[#9D4EDD] px-3 py-1 rounded-full font-bold">{item.rec}</span>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{item.why}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#6B7280] leading-relaxed">
                El mercado de herramientas para crear landing pages se ha transformado radicalmente con la irrupción de la inteligencia artificial. Las herramientas que hace dos años eran la referencia (Unbounce, Leadpages) siguen siendo sólidas, pero ya no son las únicas opciones. La pregunta ya no es &laquo;qué editor drag-and-drop es mejor&raquo;, sino &laquo;qué herramienta entiende mi negocio y genera una landing que convierte, no solo que queda bonita&raquo;. Ahí es donde LandForge ha decidido competir.
              </p>
            </section>

            {/* CTA */}
            <section className="mt-16 rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">Deja de comparar. Empieza a convertir.</h2>
              <p className="text-[#E0AAFF] leading-relaxed mb-6">
                LandForge genera tu landing page con IA en 30 segundos: estructura optimizada, copy de conversión, diseño profesional y chatbot de ventas Forgi incluido. Plan gratuito, sin tarjeta, sin compromiso.
              </p>
              <ol className="space-y-2 text-[#E0AAFF] text-sm mb-6">
                <li><span className="text-white font-bold">1.</span> Crea tu cuenta gratuita</li>
                <li><span className="text-white font-bold">2.</span> Describe tu negocio con la encuesta inteligente (5 minutos)</li>
                <li><span className="text-white font-bold">3.</span> La IA genera tu landing + activa Forgi automáticamente</li>
                <li><span className="text-white font-bold">4.</span> Publica y empieza a recibir leads</li>
              </ol>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Prueba LandForge gratis &rarr;
              </Link>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre herramientas para crear landing pages</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cuál es la mejor herramienta gratuita para crear landing pages en 2026?", a: "LandForge ofrece un plan gratuito que incluye generación de landing pages con IA, chatbot de ventas Forgi y publicación sin coste. Para páginas muy simples, Carrd ($19/año) y Canva (plan gratuito limitado) son alternativas económicas, aunque carecen de funcionalidades de conversión avanzadas como A/B testing o chatbot IA." },
                  { q: "¿Qué herramienta para crear landing pages tiene mejor tasa de conversión?", a: "Las herramientas con mayor impacto en conversión son las que incluyen A/B testing nativo y chatbot de ventas IA. LandForge destaca por integrar ambas funcionalidades desde el plan gratuito, además de generar el copy optimizado para conversión con IA. Instapage y Unbounce también ofrecen A/B testing avanzado, pero a precios significativamente más altos (desde $99-199/mes)." },
                  { q: "¿Necesito saber programar para crear una landing page profesional?", a: "No. Todas las herramientas de esta lista permiten crear landing pages sin escribir código. LandForge va un paso más allá: su IA genera la landing completa (estructura, copy, diseño y chatbot de ventas) a partir de una encuesta sobre tu negocio. Herramientas como Webflow y Framer ofrecen más control visual pero requieren una curva de aprendizaje mayor." },
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
              <p className="font-bold text-sm text-[#6B7280] mb-4">Artículos y páginas relacionadas</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/comparar/landforge-vs-unbounce" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">&rarr; LandForge vs Unbounce</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">&rarr; LandForge vs Webflow</Link>
                <Link href="/comparar/alternativas-leadpages" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">&rarr; Alternativas a Leadpages</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">&rarr; Forgi Chatbot IA</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">&rarr; LandForge para Agencias</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
