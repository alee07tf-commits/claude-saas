import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre LandForge: IA y Landing Pages",
  description:
    "Conoce al equipo de LandForge. Alejandro Bethencourt, especialista en IA y landing pages, creó la herramienta que genera tu web en 30 segundos.",
  alternates: {
    canonical: "https://landforge.digital/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre LandForge: IA y Landing Pages | LandForge",
    description:
      "Conoce al equipo de LandForge. Alejandro Bethencourt, especialista en IA y landing pages, creó la herramienta que genera tu web en 30 segundos.",
    url: "https://landforge.digital/sobre-nosotros",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alejandro Bethencourt Rodríguez",
  jobTitle: "Fundador y CEO de LandForge",
  url: "https://landforge.digital/sobre-nosotros",
  sameAs: [
    "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "LandForge",
    url: "https://landforge.digital",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Graduado en Marketing Digital y Publicidad",
    },
  ],
  knowsAbout: [
    "Marketing Digital",
    "SEO",
    "Publicidad Digital",
    "Monetización de Tráfico",
    "Captación y Retención de Leads",
    "Inteligencia Artificial aplicada al Marketing",
    "Automatización de Procesos",
    "Landing Pages de Alta Conversión",
    "Lanzamiento de Productos Digitales",
  ],
  description:
    "Experto en marketing digital, SEO y automatización con IA. Fundador de LandForge, plataforma SaaS que genera landing pages con inteligencia artificial para agencias.",
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
      name: "Sobre Nosotros",
      item: "https://landforge.digital/sobre-nosotros",
    },
  ],
};

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main className="max-w-4xl mx-auto pt-28 pb-20 px-6">

          {/* ── Breadcrumb ── */}
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[#6B7280]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#9D4EDD] transition">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#1A1A2E] font-medium">Sobre Nosotros</li>
            </ol>
          </nav>

          {/* ── Hero ── */}
          <section className="text-center mb-16">
            <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#7B2CBF] flex items-center justify-center text-white text-4xl font-extrabold mb-6 shadow-lg"
              style={{ fontFamily: "'Space Mono', monospace" }}>
              AB
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Alejandro Bethencourt Rodríguez
            </h1>
            <p className="text-lg text-[#9D4EDD] font-semibold mb-2">
              Fundador y CEO de LandForge
            </p>
            <p className="text-[#6B7280] text-sm">
              San Cristóbal de La Laguna, Canarias, España
            </p>
          </section>

          {/* ── Misión ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-5">Nuestra misión</h2>
            <p className="text-[#1A1A2E]/85 leading-relaxed mb-4">
              LandForge nació con un objetivo claro: <strong>democratizar el acceso a landing pages
              de alta conversión</strong> para agencias de marketing y profesionales que necesitan
              resultados, no complicaciones técnicas.
            </p>
            <p className="text-[#1A1A2E]/85 leading-relaxed">
              Después de años trabajando con empresas de todos los tamaños y ver cómo
              perdían tiempo y dinero creando páginas que no convertían, decidí construir
              una herramienta que combinase lo mejor de la inteligencia artificial con las
              mejores prácticas de conversión. Así nació LandForge: una plataforma donde
              describes tu negocio y en 30 segundos tienes una landing page lista para
              captar clientes, con <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold hover:underline">Forgi, nuestro chatbot de IA</Link>, atendiendo a tus leads 24/7.
            </p>
          </section>

          {/* ── Quién está detrás ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-5">Quién está detrás de LandForge</h2>

            <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#9D4EDD] to-[#7B2CBF] flex items-center justify-center text-white text-2xl font-extrabold flex-shrink-0"
                  style={{ fontFamily: "'Space Mono', monospace" }}>
                  AB
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Alejandro Bethencourt Rodríguez</h3>
                  <p className="text-[#9D4EDD] font-semibold text-sm mb-4">
                    Fundador y CEO · Especialista en Marketing Digital e IA
                  </p>
                  <p className="text-[#1A1A2E]/85 leading-relaxed mb-4">
                    <strong>Graduado en Marketing Digital y Publicidad</strong>, con formación
                    avanzada en posicionamiento web (<strong>Máster en SEO</strong>) y en
                    estrategia comercial online (<strong>Máster en Lanzamiento de Productos
                    Digitales</strong>).
                  </p>
                  <p className="text-[#1A1A2E]/85 leading-relaxed mb-4">
                    Con <strong>más de 3 años de experiencia como consultor freelance</strong>,
                    he trabajado con múltiples empresas escalando proyectos de publicidad digital
                    con resultados medibles. Mi especialización abarca la monetización de tráfico,
                    la captación y retención de leads, y la automatización de procesos mediante
                    herramientas de inteligencia artificial.
                  </p>
                  <p className="text-[#1A1A2E]/85 leading-relaxed">
                    LandForge es la culminación de toda esa experiencia: una plataforma que
                    aplica todo lo que he aprendido sobre conversión, SEO y automatización para
                    que las agencias puedan generar landing pages profesionales sin depender de
                    diseñadores ni programadores.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Experiencia y especialización ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-5">Áreas de especialización</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Monetización de tráfico",
                  desc: "Estrategias para convertir visitantes en clientes rentables mediante embudos optimizados y publicidad de alto rendimiento.",
                },
                {
                  title: "SEO y posicionamiento web",
                  desc: "Optimización técnica y de contenidos para posicionar en Google y generar tráfico orgánico cualificado de forma sostenible.",
                },
                {
                  title: "Captación y retención de leads",
                  desc: "Diseño de sistemas de captación de leads con landing pages, chatbots y automatizaciones que maximizan la conversión.",
                },
                {
                  title: "Inteligencia artificial aplicada",
                  desc: "Implementación de herramientas de IA para automatizar la creación de contenido, atención al cliente y procesos de marketing.",
                },
                {
                  title: "Publicidad digital",
                  desc: "Gestión y escalado de campañas en Meta Ads, Google Ads y otras plataformas con enfoque en ROAS y rentabilidad.",
                },
                {
                  title: "Lanzamiento de productos digitales",
                  desc: "Estrategia completa para llevar un producto digital al mercado: desde la validación hasta la escala con publicidad y SEO.",
                },
              ].map((area) => (
                <div
                  key={area.title}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#E0AAFF] transition"
                >
                  <h3 className="font-bold text-sm mb-2 text-[#1A1A2E]">{area.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Formación ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-5">Formación</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-[#1A1A2E] mb-1">Graduado en Marketing Digital y Publicidad</h3>
                <p className="text-[#6B7280] text-sm">Formación universitaria en estrategia digital, publicidad online, comportamiento del consumidor y análisis de datos.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-[#1A1A2E] mb-1">Máster en SEO</h3>
                <p className="text-[#6B7280] text-sm">Formación avanzada en posicionamiento orgánico: SEO técnico, on-page, off-page, link building, análisis de SERPs y herramientas profesionales.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-[#1A1A2E] mb-1">Máster en Lanzamiento de Productos Digitales</h3>
                <p className="text-[#6B7280] text-sm">Estrategia de go-to-market para productos SaaS y digitales: validación, pricing, funnels de venta, growth hacking y escalado con publicidad.</p>
              </div>
            </div>
          </section>

          {/* ── Por qué confiar en LandForge ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-5">Por qué confiar en LandForge</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Tecnología propia",
                  desc: "Plataforma desarrollada desde cero con Next.js, inteligencia artificial de Anthropic (Claude) y una arquitectura pensada para la velocidad y la conversión.",
                },
                {
                  title: "Experiencia real en marketing",
                  desc: "LandForge no fue creado por programadores que no entienden marketing. Fue creado por un profesional del marketing digital que entiende qué necesitan las agencias.",
                },
                {
                  title: "Empresa española",
                  desc: "Domiciliada en Canarias, España. Cumplimos con la legislación europea (RGPD, LSSI-CE) y ofrecemos soporte en español.",
                },
                {
                  title: "Mejora continua basada en datos",
                  desc: "Cada funcionalidad se diseña y mejora analizando datos reales de conversión, no suposiciones. El Conversion Score de cada landing lo demuestra.",
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="bg-[#FAF5FF] rounded-xl border border-[#E0AAFF] p-5"
                >
                  <h3 className="font-bold text-sm mb-2 text-[#1A1A2E]">{point.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA + Contacto ── */}
          <section className="text-center bg-white rounded-2xl border border-[#E0AAFF] p-10 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">¿Quieres saber más?</h2>
            <p className="text-[#6B7280] mb-6 max-w-lg mx-auto">
              Si tienes preguntas sobre LandForge o quieres colaborar con nosotros,
              no dudes en escribirnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hola@landforge.digital"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm"
                style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}
              >
                hola@landforge.digital
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#E0AAFF] text-[#9D4EDD] font-semibold text-sm hover:bg-[#FAF5FF] transition"
              >
                LinkedIn de Alejandro
              </a>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <Link
                href="/precios"
                className="text-[#9D4EDD] font-semibold text-sm hover:underline"
              >
                Ver planes y precios →
              </Link>
              <span className="text-[#6B7280] hidden sm:inline">·</span>
              <Link
                href="/features/forgi-chatbot"
                className="text-[#9D4EDD] font-semibold text-sm hover:underline"
              >
                Forgi, nuestro chatbot de IA →
              </Link>
              <span className="text-[#6B7280] hidden sm:inline">·</span>
              <Link
                href="/blog/como-aumentar-conversion-landing-page"
                className="text-[#9D4EDD] font-semibold text-sm hover:underline"
              >
                Guía: Aumentar la conversión de tu landing →
              </Link>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
