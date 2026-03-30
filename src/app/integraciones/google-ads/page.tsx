import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Google Ads con IA",
  description:
    "Crea landing pages optimizadas para Google Ads con IA. Mejora tu Quality Score, baja CPC y aumenta conversiones. Genera en 30 segundos.",
  keywords: [
    "landing page google ads",
    "landing page para campañas google ads",
    "crear landing para google ads",
    "quality score landing page",
    "landing page adwords",
  ],
  alternates: {
    canonical: "https://landforge.digital/integraciones/google-ads",
  },
  openGraph: {
    title: "Landing Pages para Google Ads con IA | LandForge",
    description:
      "Crea landing pages optimizadas para Google Ads con IA. Mejora tu Quality Score, baja CPC y aumenta conversiones. Genera en 30 segundos.",
    url: "https://landforge.digital/integraciones/google-ads",
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
      name: "Google Ads",
      item: "https://landforge.digital/integraciones/google-ads",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo mejora LandForge el Quality Score de mis campañas de Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge mejora el Quality Score de tres formas: (1) La IA genera copy relevante que incluye las keywords de tu campaña de forma natural en el H1, subtítulos y cuerpo de texto, lo que aumenta la relevancia del anuncio. (2) Las landing pages generadas tienen excelentes Core Web Vitals (velocidad de carga, LCP, CLS), factor que Google evalúa para el Quality Score. (3) La estructura de la landing está optimizada para conversión, lo que mejora la experiencia del usuario posterior al clic.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo crear una landing page diferente para cada grupo de anuncios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, y es la estrategia más efectiva para Google Ads. Cada grupo de anuncios debería apuntar a una landing page con el copy y mensaje alineado con las keywords de ese grupo. Con LandForge, generar una landing por grupo de anuncios lleva 30 segundos. Puedes tener 20 landing pages para 20 grupos de anuncios en menos de una hora.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge soporta tracking de Google Ads y conversiones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes añadir el tag de Google Ads (gtag.js), el código de seguimiento de conversiones y el remarketing pixel directamente en tu landing page. LandForge también captura automáticamente los parámetros UTM (utm_source, utm_medium, utm_campaign, gclid) para que puedas atribuir cada lead a la campaña y palabra clave exacta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta crear landing pages para Google Ads con LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge tiene un plan gratuito que permite crear 1 landing page con IA y chatbot Forgi incluido. El plan Starter (49€/mes) permite múltiples landing pages, ideal para campañas con varios grupos de anuncios. El plan Agency (97€/mes) es ilimitado, pensado para agencias que gestionan campañas de Google Ads de múltiples clientes.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge — Landing Pages para Google Ads",
  applicationCategory: "BusinessApplication",
  description:
    "Generador de landing pages con IA optimizadas para campañas de Google Ads. Mejora Quality Score, reduce CPC y aumenta conversiones con landing pages relevantes generadas en 30 segundos.",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function IntegracionGoogleAds() {
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
              Integración — LandForge + Google Ads
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Landing Pages para Google Ads que{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mejoran tu Quality Score
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Cada campaña de Google Ads necesita una landing page específica y
              relevante. LandForge genera en 30 segundos landing pages
              optimizadas para tus keywords,{" "}
              <strong className="text-[#1A1A2E]">
                con copy alineado a tu anuncio, velocidad de carga excelente y
                chatbot Forgi que convierte clics en leads
              </strong>
              . Mejora tu Quality Score, baja tu CPC y deja de enviar tráfico
              de pago a tu homepage.
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
                Crear landing para Google Ads →
              </Link>
              <Link
                href="#por-que"
                className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition"
              >
                Por qué importa
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">
              Sin tarjeta · Plan gratuito · Quality Score optimizado
            </p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[
                ["30s", "Generas la landing"],
                ["Quality Score", "Mejora por relevancia"],
                ["CPC", "Baja con mejor landing"],
                ["24/7", "Forgi convierte clics en leads"],
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

          {/* ═══ 2. POR QUÉ LANDING PAGES ESPECÍFICAS PARA GOOGLE ADS ═══ */}
          <section id="por-que" className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Por qué Google Ads necesita landing pages específicas
              </h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                Enviar tráfico de Google Ads a tu homepage o a una página
                genérica es el error más caro en publicidad digital. Google lo
                penaliza con un Quality Score bajo, y tú lo pagas con un CPC
                más alto y menos conversiones.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Quality Score bajo = CPC alto",
                  text: "Google evalúa tres factores para tu Quality Score: relevancia del anuncio, CTR esperado y experiencia de la landing page. Si tu landing no está alineada con la keyword del anuncio, tu Quality Score baja. Un Quality Score de 4 puede costar el doble por clic que un Quality Score de 8. Cada punto importa.",
                },
                {
                  icon: "🏠",
                  title: "Tu homepage no es una landing page",
                  text: "Tu homepage tiene menú de navegación, 5 secciones, 10 enlaces y 3 CTAs distintos. El visitante de Google Ads llegó buscando algo específico. Si tiene que buscar la respuesta entre toda esa información, se va. Una landing page específica = un mensaje, un CTA, una acción clara.",
                },
                {
                  icon: "🔄",
                  title: "Un grupo de anuncios = una landing page",
                  text: "La mejor práctica en Google Ads es crear una landing page específica para cada grupo de anuncios. Si tu grupo apunta a 'abogado laboral Madrid', la landing debe tener esa frase en el H1, en el copy y en el CTA. Esa alineación es lo que dispara el Quality Score.",
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

          {/* ═══ 3. CÓMO LANDFORGE OPTIMIZA PARA GOOGLE ADS ═══ */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">
                  Optimización automática para Ads
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Cómo LandForge crea landing pages que Google Ads adora
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Cada landing generada por LandForge cumple los tres pilares
                  que Google evalúa para el Quality Score: relevancia,
                  velocidad y experiencia del usuario.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    num: "01",
                    title: "Keyword matching automático",
                    text: "La IA de LandForge toma la keyword de tu campaña y la integra de forma natural en el H1, subtítulos, primer párrafo y CTAs de la landing page. No tienes que escribir una sola línea de copy. El resultado es una página que Google percibe como altamente relevante para el anuncio, subiendo tu Quality Score de forma directa.",
                    badge: "Relevancia del anuncio: alta",
                  },
                  {
                    num: "02",
                    title: "Core Web Vitals excelentes de serie",
                    text: "Las landing pages de LandForge están construidas sobre Next.js/React con renderizado del servidor. LCP menor a 1.5s, CLS cercano a 0 y FID inferior a 100ms. Google premia la velocidad de carga en el Quality Score. Mientras otras herramientas generan páginas pesadas, las de LandForge son ligeras y rápidas por defecto.",
                    badge: "Experiencia de landing: excelente",
                  },
                  {
                    num: "03",
                    title: "Forgi convierte clics en leads",
                    text: "El visitante hace clic en tu anuncio y llega a la landing. Forgi lo recibe, responde sus dudas en tiempo real y lo guía hasta el formulario de contacto o la compra. Esa interacción reduce la tasa de rebote y aumenta el tiempo en página, dos señales que Google interpreta como buena experiencia de usuario.",
                    badge: "Tasa de rebote: baja",
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

          {/* ═══ 4. INTEGRACIÓN TÉCNICA ═══ */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">
                  Integración técnica con Google Ads
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Todo lo que necesitas para conectar tus landing pages de
                  LandForge con tus campañas de Google Ads y medir resultados
                  con precisión.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "🏷️",
                    title: "Google Ads Tag (gtag.js)",
                    text: "Añade el código de seguimiento de Google Ads directamente en tu landing page. Cada conversión (formulario, clic en CTA, interacción con Forgi) se registra como evento y se envía a Google Ads para optimizar tus campañas con datos reales de conversión.",
                  },
                  {
                    icon: "🔗",
                    title: "Captura automática de UTM y GCLID",
                    text: "LandForge captura automáticamente los parámetros utm_source, utm_medium, utm_campaign y el gclid de Google Ads. Cada lead incluye la información de la campaña y palabra clave exacta que lo trajo, permitiendo atribución precisa en tu CRM.",
                  },
                  {
                    icon: "🎯",
                    title: "Pixel de remarketing",
                    text: "Configura el pixel de remarketing de Google Ads en tus landing pages para crear audiencias de visitantes que no convirtieron. Luego impacta a esos visitantes con anuncios de remarketing específicos para cerrar la conversión en un segundo contacto.",
                  },
                  {
                    icon: "📈",
                    title: "Conversiones importadas al CRM",
                    text: "A través de la integración con Zapier, cada lead capturado en tu landing de Google Ads se envía automáticamente a tu CRM (HubSpot, Salesforce, Pipedrive) con los parámetros de campaña incluidos. Cierra el loop entre inversión publicitaria y revenue real.",
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
                Resultados reales: lo que cambia cuando usas landing pages
                específicas para Google Ads
              </h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                Dejar de enviar tráfico de pago a tu homepage y empezar a usar
                landing pages dedicadas es la optimización con mayor impacto
                inmediato en cualquier cuenta de Google Ads. Aprende más en
                nuestra guía sobre{" "}
                <Link
                  href="/blog/como-aumentar-conversion-landing-page"
                  className="text-white underline underline-offset-2 hover:text-[#E0AAFF] transition"
                >
                  cómo aumentar la conversión de tu landing page
                </Link>
                .
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "⬆️",
                  title: "Quality Score +2 a +4 puntos",
                  text: "Una landing page relevante con keywords alineadas y velocidad de carga rápida puede subir tu Quality Score entre 2 y 4 puntos. Eso se traduce en un CPC significativamente menor y mejor posición del anuncio por el mismo presupuesto.",
                },
                {
                  icon: "⬇️",
                  title: "CPC entre un 20% y 50% menor",
                  text: "Google premia a los anunciantes con buen Quality Score con un coste por clic más bajo. Si actualmente pagas 2€ por clic con Quality Score 5, mejorar a Quality Score 8 puede bajar tu CPC a 1.20-1.60€. Multiplicado por miles de clics, el ahorro es enorme.",
                },
                {
                  icon: "📈",
                  title: "Conversión x2 a x3 vs homepage",
                  text: "Las landing pages específicas para Google Ads convierten entre 2x y 3x más que una homepage genérica. Un mensaje alineado con la búsqueda del usuario, sin distracciones de navegación y con CTA claro es la fórmula de conversión más efectiva en paid search.",
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
                Preguntas frecuentes sobre landing pages para Google Ads
              </h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿Cómo mejora LandForge el Quality Score de mis campañas?",
                    a: "LandForge mejora el Quality Score con keyword matching automático en el copy, Core Web Vitals excelentes de serie y estructura optimizada para conversión. Los tres factores que Google evalúa.",
                  },
                  {
                    q: "¿Puedo crear una landing diferente para cada grupo de anuncios?",
                    a: "Sí, y es la estrategia más efectiva. Con LandForge generas una landing por grupo en 30 segundos. Puedes tener 20 landing pages para 20 grupos de anuncios en menos de una hora.",
                  },
                  {
                    q: "¿LandForge soporta tracking de Google Ads y conversiones?",
                    a: "Sí. Puedes añadir el tag de Google Ads, código de conversiones y remarketing pixel. LandForge captura UTM y gclid automáticamente para atribución precisa.",
                  },
                  {
                    q: "¿Cuánto cuesta crear landing pages para Google Ads con LandForge?",
                    a: "Plan Free: 1 landing con IA + chatbot. Starter 49€/mes: múltiples landings. Agency 97€/mes: ilimitado, ideal para agencias de Google Ads con múltiples clientes.",
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
                Deja de enviar tráfico de pago a tu homepage
              </h2>
              <p className="text-[#E0AAFF] text-lg mb-10 leading-relaxed">
                Cada clic de Google Ads que llega a una página genérica es
                dinero desperdiciado. Crea landing pages específicas en 30
                segundos con IA y mejora tu Quality Score desde hoy. Consulta
                nuestros{" "}
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
                Crear landing para Google Ads →
              </Link>
              <p className="text-[#E0AAFF] mt-5 text-sm">
                Sin tarjeta · Plan Free disponible · Tracking de Ads incluido
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
                  ["/integraciones/facebook-ads", "Landing Pages para Facebook Ads"],
                  ["/integraciones/zapier", "Integración con Zapier"],
                  ["/features/conversion-score", "Conversion Score"],
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
