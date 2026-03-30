import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuanto Cuesta una Landing Page en 2026",
  description:
    "Descubre cuanto cuesta una landing page en 2026: freelancer, agencia, DIY o con IA. Tabla comparativa de precios y ROI real.",
  keywords: [
    "cuanto cuesta una landing page",
    "precio landing page",
    "coste diseno landing page",
    "landing page precio freelancer",
    "landing page precio agencia",
  ],
  alternates: {
    canonical: "/blog/cuanto-cuesta-landing-page",
  },
  openGraph: {
    title: "Cuanto Cuesta una Landing Page en 2026 | LandForge",
    description:
      "Descubre cuanto cuesta una landing page en 2026: freelancer, agencia, DIY o con IA. Tabla comparativa de precios y ROI real.",
    url: "/blog/cuanto-cuesta-landing-page",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
    { "@type": "ListItem", position: 3, name: "Cuanto Cuesta una Landing Page", item: "https://landforge.digital/blog/cuanto-cuesta-landing-page" },
  ],
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cuanto Cuesta una Landing Page en 2026: Guia de Precios",
  description:
    "Analisis detallado de precios de landing pages en 2026: freelancer, agencia, builders DIY y generadores con IA. Tabla comparativa y calculo de ROI.",
  author: {
    "@type": "Person",
    name: "Alejandro Bethencourt",
    url: "https://landforge.digital/sobre-nosotros",
    jobTitle: "Fundador de LandForge",
    sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  image: "https://landforge.digital/og-cuanto-cuesta-landing-page.jpg",
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
      name: "¿Cuanto cobra un freelancer por una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un freelancer cobra entre 200 y 800 euros por una landing page, dependiendo de su experiencia, la complejidad del diseno y si incluye copywriting. Un freelancer junior puede cobrar desde 150 euros, mientras que un especialista senior en CRO puede llegar a los 1.500 euros. El tiempo de entrega suele ser de 1 a 3 semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuanto cobra una agencia por una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una agencia de marketing digital cobra entre 1.000 y 5.000 euros por una landing page. Esto suele incluir estrategia, copywriting profesional, diseno UX/UI, desarrollo, testing y optimizacion inicial. Agencias premium o especializadas en CRO pueden cobrar hasta 10.000 euros por landing pages complejas con A/B testing incluido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede crear una landing page gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Herramientas como LandForge ofrecen un plan gratuito que permite crear una landing page completa con IA, incluyendo chatbot de ventas. Carrd y Google Sites tambien ofrecen opciones gratuitas pero con menos funcionalidades de conversion. La opcion gratuita es ideal para validar ideas o proyectos con presupuesto limitado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es el ROI de una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ROI de una landing page depende del valor de cada conversion y de la tasa de conversion. Por ejemplo: si tu landing recibe 1.000 visitas al mes, convierte al 5% y cada lead vale 100 euros, genera 5.000 euros mensuales. Si la landing te costo 500 euros (freelancer) o 49 euros al mes (builder), el ROI es extremadamente positivo desde el primer mes.",
      },
    },
  ],
};

export default function CuantoCuestaLandingPage() {
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
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">TOFU/MOFU · LandForge Blog</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Cuanto Cuesta una Landing Page en 2026: Precios Reales por Tipo
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                <strong className="text-[#1A1A2E]">Cuanto cuesta una landing page</strong> depende de quien la haga y como la hagas. Un freelancer te cobra entre 200 y 800 euros. Una agencia, entre 1.000 y 5.000. Un builder con IA como LandForge, desde 0 euros. En esta guia desglosamos los precios reales de cada opcion, los factores que afectan al coste y el ROI que puedes esperar.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-[#6B7280]">
                <span>Marzo 2026</span>
                <span>9 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* INDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-10">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">Contenido de este articulo</p>
              <ol className="space-y-1.5 text-sm">
                {[
                  { label: "Tabla resumen de precios por tipo", anchor: "#tabla-precios" },
                  { label: "Precio de landing page con freelancer", anchor: "#freelancer" },
                  { label: "Precio de landing page con agencia", anchor: "#agencia" },
                  { label: "Coste de un builder DIY (hazlo tu mismo)", anchor: "#builder-diy" },
                  { label: "Precio con IA: LandForge y similares", anchor: "#ia" },
                  { label: "Factores que afectan el precio", anchor: "#factores" },
                  { label: "ROI: cuanto genera una buena landing page", anchor: "#roi" },
                  { label: "Cual opcion elegir segun tu situacion", anchor: "#cual-elegir" },
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

            {/* SECCION 1 — TABLA RESUMEN */}
            <section id="tabla-precios">
              <h2 className="text-2xl font-extrabold mb-4">1. Precio de una landing page en 2026: tabla comparativa</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Esta tabla resume el <strong className="text-[#1A1A2E]">coste de una landing page</strong> segun el metodo de creacion. Los precios son para el mercado espanol y latinoamericano en 2026:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-3 text-left font-bold text-[#9D4EDD]">Metodo</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Rango de precio</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Tiempo</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Incluye copy</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Incluye CRO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Freelancer junior", "150 - 400€", "1-2 semanas", "A veces", "No"],
                      ["Freelancer senior", "500 - 1.500€", "1-3 semanas", "Si", "Parcial"],
                      ["Agencia estandar", "1.000 - 3.000€", "2-4 semanas", "Si", "Si"],
                      ["Agencia premium/CRO", "3.000 - 10.000€", "3-6 semanas", "Si", "Si (A/B)"],
                      ["Builder DIY (Carrd, Wix)", "0 - 30€/mes", "1-5 horas", "No (tu lo escribes)", "No"],
                      ["Builder con IA (LandForge)", "0 - 197€/mes", "30 segundos", "Si (IA genera)", "Si"],
                    ].map(([metodo, precio, tiempo, copy, cro]) => (
                      <tr key={metodo} className={metodo?.includes("LandForge") ? "bg-[#FAF5FF]" : ""}>
                        <td className="p-3 font-semibold">{metodo}</td>
                        <td className="p-3 text-[#6B7280] font-bold">{precio}</td>
                        <td className="p-3 text-[#6B7280]">{tiempo}</td>
                        <td className="p-3 text-[#6B7280]">{copy}</td>
                        <td className="p-3 text-[#6B7280]">{cro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECCION 2 — FREELANCER */}
            <section id="freelancer" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">2. Precio landing page freelancer: 200 a 1.500 euros</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Contratar un freelancer es la opcion intermedia entre hacerlo tu mismo y contratar una agencia. El <strong className="text-[#1A1A2E]">precio de una landing page con freelancer</strong> varia enormemente segun la experiencia del profesional y lo que incluya el servicio.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-bold mb-2">Freelancer junior (150 - 400€)</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-2">Disenador web con 1-2 anos de experiencia. Suele usar plantillas de Elementor o Webflow y modificarlas. No incluye copywriting (tu le das el texto). Entrega en 1-2 semanas.</p>
                  <p className="text-[#6B7280] text-sm"><strong className="text-[#1A1A2E]">Lo que obtienes:</strong> una pagina visualmente decente pero sin estrategia de conversion ni copy optimizado.</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-bold mb-2">Freelancer senior (500 - 1.500€)</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-2">Disenador/desarrollador con experiencia en CRO. Incluye copywriting basico, diseno UX pensado para conversion, responsive y entrega en 1-3 semanas. Algunos incluyen una ronda de A/B testing.</p>
                  <p className="text-[#6B7280] text-sm"><strong className="text-[#1A1A2E]">Lo que obtienes:</strong> una landing page profesional con estructura de conversion y copy decente. La calidad depende mucho del freelancer especifico.</p>
                </div>
              </div>

              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-2">El problema del freelancer:</p>
                <p className="text-white/80 text-sm leading-relaxed">Si necesitas hacer cambios despues de la entrega, cada modificacion tiene un coste adicional. Y si necesitas una segunda landing para otra campana, pagas otra vez desde cero. A lo largo de un ano, el coste total de 5-10 landing pages con freelancer supera facilmente los 3.000 euros.</p>
              </div>
            </section>

            {/* SECCION 3 — AGENCIA */}
            <section id="agencia" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">3. Precio landing page con agencia: 1.000 a 10.000 euros</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Una agencia de marketing digital ofrece el servicio mas completo: estrategia, copywriting profesional, diseno UX/UI, desarrollo, testing y optimizacion. El <strong className="text-[#1A1A2E]">coste de diseno de una landing page</strong> con agencia incluye un equipo de 3-5 personas trabajando en tu proyecto.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-bold mb-2">Agencia estandar (1.000 - 3.000€)</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">Incluye brief estrategico, copywriting, diseno responsive, desarrollo en WordPress/Elementor o Webflow, y 1-2 rondas de revision. Entrega en 2-4 semanas. No suele incluir A/B testing ni optimizacion post-lanzamiento.</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-bold mb-2">Agencia premium/CRO (3.000 - 10.000€)</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">Incluye todo lo anterior mas: investigacion de audiencia, A/B testing de al menos 3 variantes, heatmaps, optimizacion continua durante 1-3 meses y reporting de conversion. Entrega en 3-6 semanas. Las mejores agencias garantizan resultados minimos de conversion.</p>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                Las agencias son la opcion correcta para empresas con presupuesto de marketing consolidado y campanas de alto volumen donde cada punto porcentual de conversion representa miles de euros. Para <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold hover:underline">agencias de marketing que gestionan clientes</Link>, la opcion mas rentable a largo plazo es un builder con IA que permita crear multiples landing pages sin depender de desarrollo externo.
              </p>
            </section>

            {/* SECCION 4 — BUILDER DIY */}
            <section id="builder-diy" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">4. Coste de un builder DIY: 0 a 50 euros/mes</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Los builders de landing pages (Carrd, Wix, Squarespace, WordPress + Elementor) te permiten crear la pagina tu mismo con un editor visual. El coste monetario es bajo, pero el coste en tiempo puede ser alto si no tienes experiencia.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-gray-100 mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Builder</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Plan gratis</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Plan de pago</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Tiempo estimado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Carrd", "Si (3 paginas)", "19$/ano", "1-3 horas"],
                      ["Wix", "Si (con anuncios)", "17€/mes", "2-5 horas"],
                      ["WordPress + Elementor", "Si (hosting aparte)", "0-59$/ano", "3-8 horas"],
                      ["Squarespace", "No (trial 14 dias)", "16€/mes", "2-4 horas"],
                    ].map(([builder, gratis, pago, tiempo]) => (
                      <tr key={builder}>
                        <td className="p-3 font-semibold">{builder}</td>
                        <td className="p-3 text-[#6B7280]">{gratis}</td>
                        <td className="p-3 text-[#6B7280]">{pago}</td>
                        <td className="p-3 text-[#6B7280]">{tiempo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                El problema de los builders DIY es que tu eres el disenador, el copywriter y el estratega de conversion. Si no sabes de CRO, tu landing page sera bonita pero no convertira. Para conocer mas alternativas, visita nuestra <Link href="/comparar/" className="text-[#9D4EDD] font-semibold hover:underline">comparativa de herramientas</Link>.
              </p>
            </section>

            {/* SECCION 5 — IA */}
            <section id="ia" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">5. Precio landing page con IA: desde 0 euros/mes</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                La opcion mas nueva del mercado: generadores de landing pages con inteligencia artificial. En lugar de disenar y escribir tu mismo, describes tu negocio y la IA genera todo: estructura, copy, CTA, FAQ y hasta un chatbot de ventas.
              </p>

              <div className="bg-[#FAF5FF] border border-[#E0AAFF] rounded-2xl p-6 mb-6">
                <h3 className="font-bold mb-3">Precios de LandForge en 2026</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { plan: "Free", precio: "0€/mes", desc: "1 landing page, chatbot incluido, generacion con IA" },
                    { plan: "Starter", precio: "49€/mes", desc: "Landing pages ilimitadas, dominio propio, analiticas" },
                    { plan: "Agency", precio: "97€/mes", desc: "Multi-cliente, white label, integraciones avanzadas" },
                    { plan: "Agency Pro", precio: "197€/mes", desc: "Todo Agency + A/B testing, soporte prioritario, API" },
                  ].map((p) => (
                    <div key={p.plan} className="bg-white rounded-xl border border-gray-100 p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-[#9D4EDD]">{p.plan}</span>
                        <span className="font-bold">{p.precio}</span>
                      </div>
                      <p className="text-[#6B7280] text-xs">{p.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[#6B7280] text-sm mt-3">Planes anuales con 20% de descuento. <Link href="/precios" className="text-[#9D4EDD] font-semibold hover:underline">Ver todos los detalles</Link>.</p>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                La ventaja del modelo IA es que elimina los dos costes mas altos de una landing page: el copywriting y el diseno. La IA genera ambos en segundos, y tu solo editas lo que quieras con el <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold hover:underline">editor Forgi</Link>. Para una agencia que necesita crear 10 landing pages al mes, el ahorro respecto a freelancers o agencias externas es enorme.
              </p>
            </section>

            {/* SECCION 6 — FACTORES */}
            <section id="factores" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">6. Factores que afectan el precio de una landing page</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                No todas las landing pages cuestan lo mismo. Estos son los factores que mueven el precio hacia arriba o hacia abajo:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { factor: "Complejidad del diseno", desc: "Una landing con animaciones, video de fondo y efectos parallax cuesta 2-3x mas que una landing limpia y estatica. Pero el diseno complejo no siempre convierte mas — de hecho, las landing pages mas simples suelen tener mejores tasas de conversion." },
                  { factor: "Copywriting profesional", desc: "El copy es el elemento que mas impacto tiene en la conversion. Un copywriter especializado en landing pages cobra entre 300 y 1.000 euros solo por el texto. Si usas un generador con IA como LandForge, el copy esta incluido." },
                  { factor: "Integraciones tecnicas", desc: "Conectar la landing con un CRM (HubSpot, Salesforce), email marketing (Mailchimp, ActiveCampaign) o pasarela de pago (Stripe) anade complejidad y coste. Un freelancer cobrara 100-300 euros adicionales por cada integracion." },
                  { factor: "A/B testing y optimizacion", desc: "Crear la landing es el primer paso. Optimizarla con A/B testing (probar variantes de headline, CTA, imagenes) es lo que realmente maximiza la conversion. Esto suele estar incluido solo en servicios de agencia premium." },
                  { factor: "Urgencia del proyecto", desc: "Si necesitas la landing para manana, pagaras un 30-50% mas. Planificar con al menos 1-2 semanas de antelacion te ahorra dinero. O usa un generador con IA y tenla en 30 segundos." },
                ].map((item) => (
                  <div key={item.factor} className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h3 className="font-bold mb-1">{item.factor}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCION 7 — ROI */}
            <section id="roi" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">7. ROI de una landing page: cuanto genera una buena landing</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                La pregunta no es solo <strong className="text-[#1A1A2E]">cuanto cuesta una landing page</strong>, sino cuanto genera. Veamos un calculo real:
              </p>
              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-3">Ejemplo de ROI real:</p>
                <div className="space-y-2 text-sm text-white/80">
                  <p>Trafico mensual a la landing: <strong className="text-white">1.000 visitas</strong></p>
                  <p>Tasa de conversion: <strong className="text-white">5%</strong> (media-alta)</p>
                  <p>Leads generados: <strong className="text-white">50 leads/mes</strong></p>
                  <p>Tasa de cierre: <strong className="text-white">10%</strong></p>
                  <p>Clientes nuevos: <strong className="text-white">5 clientes/mes</strong></p>
                  <p>Valor medio por cliente: <strong className="text-white">500€</strong></p>
                  <hr className="border-white/20 my-3" />
                  <p className="text-lg">Ingresos generados: <strong className="text-[#E0AAFF] text-xl">2.500€/mes</strong></p>
                  <p className="mt-2 text-white/60">Si la landing te costo 500€ (freelancer), se amortizo en la primera semana. Si usas LandForge a 49€/mes, el ROI es de 51x desde el primer mes.</p>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                Este calculo es conservador. Muchas landing pages bien optimizadas convierten al 10-15% (especialmente las de lead magnets y webinars), lo que duplica o triplica los numeros. Si quieres aprender a crear una que convierta, lee <Link href="/blog/como-crear-landing-page-gratis" className="text-[#9D4EDD] font-semibold hover:underline">como crear una landing page gratis</Link>.
              </p>
            </section>

            {/* SECCION 8 — CUAL ELEGIR */}
            <section id="cual-elegir" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">8. Que opcion elegir segun tu situacion</h2>
              <div className="space-y-3 mb-6">
                {[
                  { perfil: "Emprendedor validando una idea", opcion: "LandForge Free o Carrd", razon: "Coste cero, resultado en minutos. Valida la idea antes de invertir." },
                  { perfil: "Pequeno negocio con primera campana", opcion: "LandForge Starter (49€/mes) o freelancer junior", razon: "Buena relacion calidad-precio. LandForge si necesitas rapidez; freelancer si quieres algo mas personalizado." },
                  { perfil: "Agencia de marketing con multiples clientes", opcion: "LandForge Agency (97€/mes)", razon: "Creas multiples landing pages para diferentes clientes sin depender de disenadores externos. El ahorro se multiplica con cada cliente." },
                  { perfil: "Empresa con presupuesto de marketing alto", opcion: "Agencia CRO (3.000-10.000€) + LandForge Agency Pro", razon: "La agencia para la estrategia macro; LandForge para ejecucion rapida y testing continuo." },
                ].map((item) => (
                  <div key={item.perfil} className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h3 className="font-bold mb-1 text-[#9D4EDD]">{item.perfil}</h3>
                    <p className="text-[#1A1A2E] font-semibold text-sm mb-1">Opcion recomendada: {item.opcion}</p>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{item.razon}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA NATIVO */}
            <section className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">Crea tu landing page sin coste inicial</h2>
              <p className="text-[#E0AAFF] mb-6 max-w-lg mx-auto">
                El plan Free de LandForge incluye generacion con IA, chatbot de ventas y una landing page completa. Sin tarjeta de credito, sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                  Crear mi landing gratis
                </Link>
                <Link href="/precios" className="inline-block border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition">
                  Comparar todos los planes
                </Link>
              </div>
            </section>

            {/* FAQ VISIBLE */}
            <section id="faq" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre precios de landing pages</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cuanto cobra un freelancer por una landing page?", a: "Entre 200 y 1.500 euros, dependiendo de su experiencia. Un junior cobra 150-400 euros; un senior especializado en CRO puede cobrar hasta 1.500 euros. El tiempo de entrega es de 1 a 3 semanas." },
                  { q: "¿Cuanto cobra una agencia por una landing page?", a: "Entre 1.000 y 10.000 euros. Una agencia estandar cobra 1.000-3.000 euros; una agencia premium especializada en CRO puede llegar a 10.000 euros por landing con A/B testing incluido." },
                  { q: "¿Se puede crear una landing page gratis?", a: "Si. LandForge ofrece un plan gratuito con generacion por IA y chatbot incluido. Carrd y Google Sites tambien tienen opciones gratuitas pero con menos funcionalidades de conversion." },
                  { q: "¿Cual es el ROI de una landing page?", a: "Si tu landing recibe 1.000 visitas al mes, convierte al 5% y cada cliente vale 500 euros, genera 2.500 euros mensuales. El ROI de una landing de 49 euros/mes seria de 51x desde el primer mes." },
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
                <Link href="/precios" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Planes y Precios LandForge</Link>
                <Link href="/comparar/" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Comparativa de Herramientas</Link>
                <Link href="/blog/como-crear-landing-page-gratis" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Crear Landing Page Gratis</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">LandForge para Agencias</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
