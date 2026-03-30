import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Facebook Ads con IA",
  description:
    "Landing pages optimizadas para Facebook e Instagram Ads con IA. Forgi captura leads de Meta Ads 24/7. Aumenta ROAS desde el primer día.",
  keywords: [
    "landing page facebook ads",
    "landing page para meta ads",
    "landing page instagram ads",
    "landing page campañas facebook",
    "landing page roas facebook",
  ],
  alternates: {
    canonical: "https://landforge.digital/integraciones/facebook-ads",
  },
  openGraph: {
    title: "Landing Pages para Facebook Ads con IA | LandForge",
    description:
      "Landing pages optimizadas para Facebook e Instagram Ads con IA. Forgi captura leads de Meta Ads 24/7. Aumenta ROAS desde el primer día.",
    url: "https://landforge.digital/integraciones/facebook-ads",
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
      name: "Integraciones",
      item: "https://landforge.digital/integraciones",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Facebook Ads",
      item: "https://landforge.digital/integraciones/facebook-ads",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Por qué no debería enviar el tráfico de Facebook Ads a mi homepage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tráfico de Facebook e Instagram Ads es tráfico interrumpido: el usuario no estaba buscando tu producto, lo vio en su feed. Si lo envías a tu homepage con menú, blog, about us y 10 opciones diferentes, se pierde. Una landing page dedicada con un solo mensaje alineado con el anuncio convierte entre 2x y 5x más que una homepage genérica.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge soporta el Meta Pixel (Facebook Pixel)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes añadir el código del Meta Pixel directamente en tu landing page de LandForge. El pixel registra PageView al cargar la landing y eventos de conversión (Lead, Purchase) cuando el visitante completa el formulario o interactúa con Forgi. Esto permite a Meta optimizar la entrega de tus anuncios hacia usuarios con mayor probabilidad de convertir.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo crear una landing page diferente para cada campaña de Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, y es la estrategia recomendada. Cada campaña de Facebook o Instagram Ads suele tener un ángulo, oferta o audiencia diferente. Una landing page específica para cada campaña, con mensaje alineado al anuncio, convierte significativamente más. Con LandForge, generar una landing por campaña lleva 30 segundos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué ventaja tiene usar Forgi en landing pages de Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tráfico de Facebook/Instagram es tráfico frío: el usuario vio tu anuncio pero no estaba buscando activamente tu producto. Forgi actúa como un vendedor que recibe a ese visitante frío, responde sus objeciones en tiempo real y lo guía hacia la conversión. La combinación de anuncio atractivo + landing relevante + chatbot que resuelve dudas es la fórmula más efectiva para convertir tráfico de Meta Ads.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge — Landing Pages para Facebook Ads",
  applicationCategory: "BusinessApplication",
  description:
    "Generador de landing pages con IA optimizadas para campañas de Facebook e Instagram Ads (Meta Ads). Incluye chatbot Forgi para convertir tráfico frío en leads 24/7. Compatible con Meta Pixel.",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function IntegracionFacebookAds() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          {/* ═══ 1. HERO ═══ */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)",
              }}
            />
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Integración — LandForge + Facebook & Instagram Ads
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Landing Pages para Facebook Ads que{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Convierten Tráfico Frío en Leads
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              El tráfico de Meta Ads no estaba buscando tu producto. Lo
              interrumpiste en su feed.{" "}
              <strong className="text-[#1A1A2E]">
                Si lo envías a tu homepage, lo pierdes. Si lo envías a una
                landing page con IA + chatbot Forgi, lo conviertes.
              </strong>{" "}
              LandForge genera landing pages específicas para cada campaña de
              Facebook e Instagram Ads en 30 segundos.
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
                Crear landing para Meta Ads →
              </Link>
              <Link
                href="#por-que"
                className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition"
              >
                Por qué importa
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">
              Sin tarjeta · Plan gratuito · Compatible con Meta Pixel
            </p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[
                ["30s", "Generas la landing"],
                ["Meta Pixel", "Integrado nativamente"],
                ["24/7", "Forgi convierte tráfico frío"],
                ["ROAS", "Mejora desde el día 1"],
              ].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">
                    {v}
                  </div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 2. POR QUÉ LANDING PAGES PARA META ADS ═══ */}
          <section id="por-que" className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Por qué Meta Ads necesita landing pages propias
              </h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                El tráfico de Facebook e Instagram es fundamentalmente diferente
                al de Google. Entender esa diferencia es la clave para
                maximizar tu ROAS.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📱",
                  title: "Tráfico interrumpido, no intencional",
                  text: "En Google, el usuario busca activamente tu solución. En Facebook e Instagram, estaba viendo fotos de amigos y tu anuncio lo interrumpió. Ese tráfico frío necesita una landing page que lo caliente rápidamente: headline impactante, propuesta de valor clara y un camino sin distracciones hacia la conversión.",
                },
                {
                  icon: "🏠",
                  title: "La homepage mata tu ROAS",
                  text: "Enviar tráfico de Meta Ads a tu homepage es como traer a un desconocido a tu oficina y dejarlo solo. No sabe dónde ir, qué hacer ni por qué está ahí. Una landing page dedicada con un solo mensaje y un solo CTA guía a ese visitante frío desde 'esto me interesa' hasta 'quiero saber más' en segundos.",
                },
                {
                  icon: "🎯",
                  title: "Una campaña = una landing = un mensaje",
                  text: "Si tu anuncio de Facebook promete '50% de descuento en tu primer mes', la landing debe abrir con ese descuento. Si tu anuncio de Instagram muestra un caso de éxito, la landing debe ampliar ese caso. La coherencia entre anuncio y landing es lo que convierte clics en leads.",
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

          {/* ═══ 3. CÓMO LANDFORGE AYUDA CON META ADS ═══ */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">
                  Tu sistema de conversión para Meta Ads
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Cómo LandForge convierte tus clics de Facebook en leads
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Tres pasos para pasar de gasto publicitario a retorno real en
                  tus campañas de Meta Ads.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    num: "01",
                    title: "Landing page alineada con cada anuncio",
                    text: "Describe el producto, servicio u oferta de tu campaña de Facebook Ads. La IA de LandForge genera una landing page en 30 segundos con headline, copy, beneficios y CTA alineados con el mensaje del anuncio. Si cambias la creatividad o el ángulo del anuncio, generas una nueva landing en segundos.",
                    badge: "Coherencia anuncio-landing al 100%",
                  },
                  {
                    num: "02",
                    title: "Forgi recibe al tráfico frío y lo calienta",
                    text: "El visitante de Facebook llega con curiosidad pero sin intención clara de compra. Forgi lo recibe con un mensaje contextual, responde sus objeciones en tiempo real ('¿tiene garantía?', '¿envío gratis?', '¿cómo funciona?') y lo guía hacia el formulario de contacto o la compra. Es la pieza que falta entre el clic y la conversión.",
                    badge: "De curiosidad a conversión en una conversación",
                  },
                  {
                    num: "03",
                    title: "Meta Pixel + UTM para optimización",
                    text: "El Meta Pixel se integra en tu landing y envía datos de conversión a Facebook para optimizar la entrega de anuncios. Los parámetros UTM se capturan automáticamente con cada lead. Conecta con tu CRM vía Zapier y cierra el loop entre inversión publicitaria y facturación real.",
                    badge: "ROAS medible de principio a fin",
                  },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="bg-white rounded-2xl border border-[#E0AAFF] p-8"
                  >
                    <div className="text-2xl font-mono font-bold text-[#9D4EDD] mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed mb-4">
                      {step.text}
                    </p>
                    <span className="inline-block text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E0AAFF]">
                      {step.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ 4. INTEGRACIÓN CON META PIXEL ═══ */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">
                  Integración completa con Meta Pixel y eventos de conversión
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Todo lo que necesitas para que Meta optimice tus campañas con
                  datos de conversión reales desde tus landing pages de
                  LandForge.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "📊",
                    title: "PageView automático",
                    text: "El Meta Pixel se dispara con cada visita a tu landing page, registrando el evento PageView. Meta usa esta información para crear audiencias de visitantes y optimizar la entrega de tus anuncios hacia perfiles similares que tienen mayor probabilidad de convertir.",
                  },
                  {
                    icon: "🎯",
                    title: "Eventos de conversión personalizados",
                    text: "Configura eventos Lead o Purchase cuando el visitante completa el formulario de contacto o interactúa con Forgi. Facebook usa estos eventos para optimizar la entrega de anuncios con el objetivo de maximizar conversiones, no solo clics.",
                  },
                  {
                    icon: "👥",
                    title: "Audiencias de remarketing",
                    text: "Crea audiencias personalizadas con los visitantes que llegaron a tu landing pero no convirtieron. Impacta a esos visitantes con anuncios de remarketing específicos en Facebook e Instagram para cerrar la conversión en un segundo o tercer contacto.",
                  },
                  {
                    icon: "🔗",
                    title: "Captura de UTMs y fbclid",
                    text: "LandForge captura automáticamente los parámetros utm_source, utm_medium, utm_campaign y el fbclid de Meta Ads. Cada lead incluye la información de la campaña y el conjunto de anuncios que lo trajo, permitiendo atribución precisa.",
                  },
                ].map((feat) => (
                  <div
                    key={feat.title}
                    className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8"
                  >
                    <div className="text-3xl mb-4">{feat.icon}</div>
                    <h3 className="font-bold text-lg mb-3">{feat.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      {feat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ 5. BENEFICIOS ═══ */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Lo que cambia cuando dejas de enviar tráfico de Meta Ads a tu
                homepage
              </h2>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📈",
                  title: "ROAS mejora desde el día 1",
                  text: "Una landing page dedicada para cada campaña de Meta Ads convierte entre 2x y 5x más que tu homepage. Con el mismo gasto publicitario generas más leads, más ventas y mejor retorno. El ROAS mejora porque la conversión sube sin aumentar la inversión. Forgi añade otra capa de conversión atendiendo a los visitantes indecisos.",
                },
                {
                  icon: "⚡",
                  title: "Una landing por campaña en 30 segundos",
                  text: "La barrera para crear landing pages específicas siempre fue el tiempo: diseñar una landing por campaña es inviable si tardas 4-8 horas cada una. Con LandForge, generas una landing por campaña en 30 segundos. ¿Lanzas 5 campañas de Facebook esta semana? En 5 minutos tienes 5 landing pages listas.",
                },
                {
                  icon: "💬",
                  title: "Forgi convierte tráfico frío en caliente",
                  text: "El 80% del tráfico de Meta Ads es frío: no te conoce, no te buscó, no tiene urgencia. Forgi es el puente entre la curiosidad del clic y la decisión de compra. Responde objeciones, da información adicional y genera confianza en tiempo real. Es tu vendedor disponible a cualquier hora del día.",
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

          {/* ═══ 6. FAQ ═══ */}
          <section className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">
                Preguntas frecuentes sobre landing pages para Facebook Ads
              </h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿Por qué no debería enviar tráfico de Facebook Ads a mi homepage?",
                    a: "El tráfico de Facebook es tráfico interrumpido: el usuario no buscaba tu producto. Si lo envías a tu homepage con 10 opciones, se pierde. Una landing dedicada con un solo mensaje convierte entre 2x y 5x más.",
                  },
                  {
                    q: "¿LandForge soporta el Meta Pixel?",
                    a: "Sí. Puedes añadir el Meta Pixel en tu landing. Registra PageView y eventos de conversión (Lead, Purchase) para que Meta optimice la entrega de anuncios hacia usuarios con mayor probabilidad de convertir.",
                  },
                  {
                    q: "¿Puedo crear una landing diferente para cada campaña de Meta Ads?",
                    a: "Sí, y es la estrategia recomendada. Con LandForge, generar una landing por campaña lleva 30 segundos. Cada landing con mensaje alineado al anuncio convierte significativamente más.",
                  },
                  {
                    q: "¿Qué ventaja tiene usar Forgi en landing pages de Meta Ads?",
                    a: "El tráfico de Facebook es frío. Forgi actúa como un vendedor que recibe al visitante, responde objeciones en tiempo real y lo guía hacia la conversión. Es la pieza que falta entre el clic y el lead.",
                  },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#1A1A2E]">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0 text-xl">
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

          {/* ═══ 7. CTA ═══ */}
          <section
            className="px-6 py-24 text-center"
            style={{
              background:
                "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)",
            }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
                Cada clic de Facebook que llega a tu homepage es dinero perdido
              </h2>
              <p className="text-[#E0AAFF] text-lg mb-10 leading-relaxed">
                Crea landing pages dedicadas para cada campaña de Meta Ads en 30
                segundos. Con chatbot Forgi que convierte tráfico frío en leads.
                Consulta nuestros{" "}
                <Link
                  href="/precios"
                  className="text-white underline underline-offset-2 hover:text-[#E0AAFF] transition"
                >
                  planes y precios
                </Link>
                .
              </p>
              <Link
                href="/register"
                className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl"
              >
                Crear landing para Meta Ads →
              </Link>
              <p className="text-[#E0AAFF] mt-5 text-sm">
                Sin tarjeta · Plan Free disponible · Meta Pixel compatible
              </p>
            </div>
          </section>

          {/* ── ENLAZADO INTERNO ── */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-[#1A1A2E] mb-6 text-lg">
                Más integraciones y recursos
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  ["/integraciones", "Todas las integraciones"],
                  ["/integraciones/google-ads", "Landing Pages para Google Ads"],
                  ["/integraciones/zapier", "Integración con Zapier"],
                  ["/features/forgi-chatbot", "Forgi Chatbot IA"],
                  ["/blog/como-aumentar-conversion-landing-page", "Guía: Aumentar Conversión"],
                  ["/precios", "Planes y Precios"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition"
                  >
                    → {label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
