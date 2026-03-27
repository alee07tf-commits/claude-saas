import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Startups SaaS con IA: Del MVP al Scale-Up",
  description:
    "Genera landing pages para tu startup SaaS en 30 segundos con IA. Product Hunt launch pages, free trial signups, demo requests y pricing pages. Forgi cualifica leads B2B 24/7 antes de agendar demo.",
  keywords: [
    "landing page startups saas",
    "crear landing page saas",
    "landing page para saas",
    "generador landing pages startups",
    "software landing pages saas",
    "chatbot para saas",
  ],
  alternates: {
    canonical: "https://landforge.digital/para/startups-saas",
  },
  openGraph: {
    title: "Landing Pages para Startups SaaS con IA: Del MVP al Scale-Up",
    description:
      "Genera landing pages para tu startup SaaS en 30 segundos con IA. Product Hunt launch pages, free trial signups, demo requests y pricing pages. Forgi cualifica leads B2B 24/7 antes de agendar demo.",
    url: "https://landforge.digital/para/startups-saas",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo crear una landing page para mi lanzamiento en Product Hunt con LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Describe tu producto SaaS, tu propuesta de valor y el público objetivo. En 30 segundos tendrás una landing optimizada para conversión con CTA de early access, contador de registros y Forgi Chatbot para responder dudas técnicas de los hunters en tiempo real.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge se integra con mi stack de herramientas SaaS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. A través de nuestra integración nativa con Zapier puedes conectar LandForge con HubSpot, Salesforce, Slack, Intercom, Segment y más de 5.000 aplicaciones. Los leads que captura Forgi se envían automáticamente a tu CRM con los datos de cualificación incluidos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacer A/B testing de mis landing pages SaaS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Con LandForge generas variantes de tu landing en segundos: cambia el headline, la propuesta de valor o la estructura completa. Cada variante tiene su propia URL y métricas de conversión. Iteración real en minutos, no en sprints de dos semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge funciona para SaaS B2B con ciclos de venta largos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Especialmente bien. Forgi cualifica al lead preguntando por tamaño de empresa, presupuesto, caso de uso y urgencia antes de derivarlo a tu equipo de ventas. Tu SDR recibe un lead con contexto completo, no un email frío. Esto reduce el tiempo del ciclo de venta y aumenta la tasa de cierre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta LandForge para una startup en etapa early-stage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes empezar con el plan gratuito (0 euros) que incluye una landing con Forgi Chatbot. Para startups en crecimiento, el plan Growth (49 euros/mes) ofrece landings ilimitadas. Si necesitas white label y dominios personalizados, el plan Agency (97 euros/mes) es ideal para escalar.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge para Startups SaaS",
  applicationCategory: "BusinessApplication",
  description:
    "Generador de landing pages con IA especializado en startups SaaS. Crea páginas de captación para product launches, free trials, demo requests y pricing pages en 30 segundos.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function StartupsSaasLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* -- 1. HERO -- */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Generador de Landing Pages con IA para el Ecosistema SaaS
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Landing Pages para Startups SaaS con IA:{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Del MVP al Scale-Up.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Tu developer deberia estar construyendo producto, no maquetando landings de marketing. Describe tu SaaS en 5 minutos: producto, ICP, propuesta de valor y pricing.{" "}
              <strong className="text-[#1A1A2E]">La IA genera tu landing page completa en 30 segundos</strong>, lista para Product Hunt, campanas de paid o tu funnel de free trial.
              Forgi, tu chatbot de cualificacion B2B, atiende leads y agenda demos mientras tu equipo duerme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition duration-200 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Crear mi landing SaaS gratis →
              </Link>
              <Link href="#demo" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition duration-200">
                Ver demo para startups
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta de credito · Plan Free para siempre · Setup en 30 segundos</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["30 seg", "Tiempo de generacion"], ["+200%", "Conversion rate media"], ["0€", "Para empezar"], ["24/7", "Forgi cualificando leads"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* -- 2. DOLOR (Empatia con el Problema SaaS) -- */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Problemas reales de growth en SaaS que te suenan</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">El 68% de las startups SaaS pierde oportunidades de conversion porque su landing page tarda semanas en actualizarse, no cualifica leads correctamente o simplemente no existe para cada caso de uso.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚙️",
                  title: "Tu developer esta construyendo producto, no landing pages",
                  text: "Necesitas una landing page para el lanzamiento en Product Hunt la proxima semana. Tu unico developer esta cerrando el bug critico del onboarding. La landing no existe y el launch es en 5 dias.",
                },
                {
                  icon: "🔄",
                  title: "Pivotar el messaging tarda 2 semanas con tu agencia",
                  text: "Has descubierto que tu ICP real son enterprise, no SMBs. Tu agencia necesita un sprint completo para cambiar headlines, CTAs y copy. Mientras tanto, sigues atrayendo leads que no convierten y tu churn sube.",
                },
                {
                  icon: "🌙",
                  title: "Leads enterprise abandonan tu web a las 11pm sin respuesta",
                  text: "Un VP de Engineering de una empresa Fortune 500 visita tu pricing page a las 23:00. Tiene dudas sobre compliance y seguridad. No hay nadie para responder. Al dia siguiente ya esta evaluando a tu competencia.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* -- 3. SOLUCION (Como lo resuelve LandForge para SaaS) -- */}
          <section id="demo" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Como lo resuelve LandForge</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  De la idea a la landing publicada en menos tiempo que un standup
                </h2>
              </div>

              <div className="mb-16 mx-auto" style={{ maxWidth: "800px", borderRadius: "16px", overflow: "hidden", border: "1px solid #E0AAFF", boxShadow: "0 24px 64px rgba(157,78,221,0.14)" }}>
                <video src="/demo-landforge.mp4" autoPlay muted loop playsInline disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px", pointerEvents: "none" }} />
              </div>

              <div className="flex flex-col gap-12">
                {[
                  {
                    num: "01",
                    title: "Describe tu SaaS y tu ICP (5 min)",
                    text: (
                      <>
                        Cuentale a LandForge que hace tu producto, quien es tu cliente ideal (startup early-stage, mid-market B2B, enterprise) y cual es tu propuesta de valor unica. Indica si necesitas una landing para Product Hunt launch, free trial signup, enterprise demo request, feature announcement o{" "}
                        <Link href="/precios" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">pricing comparison</Link>
                        . La IA adapta estructura y copy a cada caso de uso SaaS.
                      </>
                    ),
                    badge: "Copywriting product-led growth incluido",
                  },
                  {
                    num: "02",
                    title: "La IA genera tu landing SaaS en 30 segundos",
                    text: (
                      <>
                        Dos agentes de IA trabajan en paralelo: uno disena la estructura visual (hero con social proof, feature grid, pricing table, trust badges) y otro redacta el copy orientado a conversion. El resultado es una landing con{" "}
                        <Link href="/features/conversion-score" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">Conversion Score optimizado</Link>
                        , Core Web Vitals en verde y lista para iterar con A/B testing.
                      </>
                    ),
                    badge: "Core Web Vitals < 1 segundo",
                  },
                  {
                    num: "03",
                    title: "Forgi cualifica tus leads B2B 24/7",
                    text: (
                      <>
                        Desde que publicas la landing,{" "}
                        <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">Forgi Chatbot</Link>
                        {" "}aprende todo sobre tu SaaS: features, pricing tiers, integraciones, compliance y roadmap. Cualifica leads preguntando por tamano de empresa, presupuesto y caso de uso antes de derivar a tu equipo de ventas. Conecta con tu CRM via{" "}
                        <Link href="/integraciones/zapier" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">Zapier</Link>
                        {" "}o{" "}
                        <Link href="/integraciones/hubspot" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">HubSpot</Link>
                        {" "}para que tu SDR reciba leads con contexto completo.
                      </>
                    ),
                    badge: "Lead scoring automatico incluido",
                  },
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

          {/* -- 4. FORGI PARA SAAS (Feature Expandida) -- */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-5">Forgi Chatbot para SaaS</span>
                <h2 className="text-3xl font-extrabold mb-6">Tu SDR digital que cualifica leads mientras tu equipo construye producto</h2>
                <p className="text-[#6B7280] leading-relaxed mb-8">
                  Forgi no es un widget de chat generico. Se entrena con la informacion de <strong>tu</strong> SaaS: features, pricing tiers, integraciones disponibles, requisitos de seguridad y compliance. El resultado: un chatbot que habla el idioma de tus buyers, responde preguntas tecnicas con precision y mueve al lead hacia la demo o el signup. Si tu startup trabaja con{" "}
                  <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">agencias de marketing especializadas en SaaS</Link>
                  , Forgi se convierte en una extension de su estrategia de generacion de leads.
                </p>
                <ul className="space-y-3">
                  {[
                    "Cualifica leads por tamano de empresa, presupuesto y caso de uso antes de derivar a ventas",
                    "Responde sobre integraciones, seguridad (SOC 2, GDPR), SLAs y uptime sin inventar datos",
                    "Agenda demos directamente en Calendly o HubSpot Meetings desde el chat",
                    "Reduce el tiempo de respuesta de horas a segundos, incluso a las 3am en otra timezone",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-[#6B7280]">
                      <span className="text-[#9D4EDD] font-bold flex-shrink-0 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mock chat SaaS */}
              <div className="bg-white rounded-2xl border border-[#E0AAFF] shadow-xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E0AAFF] bg-[#F3E8FF]">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}>F</div>
                  <div>
                    <div className="font-bold text-sm">Forgi · Tu SaaS Landing</div>
                    <div className="text-xs text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />En linea</div>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {[
                    { role: "user", text: "Do you integrate with Salesforce?" },
                    { role: "forgi", text: "Si, a traves de nuestra integracion con Zapier puedes conectar con Salesforce, HubSpot y +5,000 apps. Quieres que te cuente sobre nuestros planes para SaaS?" },
                    { role: "user", text: "Cuanto cuesta para una startup de 10 personas?" },
                    { role: "forgi", text: "Nuestro plan Agency (97€/mes) incluye dominios ilimitados, white label y Forgi en todas las landings. Quieres agendar una demo con el equipo?" },
                  ].map((msg, i) => (
                    <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${msg.role === "forgi" ? "bg-[#F3E8FF] text-[#9D4EDD] border border-[#E0AAFF]" : "bg-[#1A1A2E] text-white"}`}>{msg.role === "forgi" ? "F" : "Tu"}</div>
                      <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "forgi" ? "bg-[#FAFAFA] text-[#1A1A2E] border border-gray-100" : "text-white"} ${msg.role === "user" ? "rounded-tr-none" : "rounded-tl-none"}`} style={msg.role === "user" ? { background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" } : {}}>{msg.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* -- 5. SOCIAL PROOF -- */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">Startups SaaS que ya generan landing pages con LandForge</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    text: "Lanzamos en Product Hunt un martes y necesitabamos la landing lista para el lunes. Con LandForge la tuvimos en 20 minutos, incluyendo A/B de dos headlines distintos. Acabamos en el Top 5 del dia.",
                    name: "Carlos R.",
                    role: "Co-founder & CEO, SaaS de productividad B2B",
                    result: "→ Top 5 en Product Hunt con landing creada en 20 min",
                  },
                  {
                    text: "Forgi nos ahorra 15 horas semanales de SDR. Cualifica leads preguntando por tamano de equipo, presupuesto y stack actual. Cuando llega la demo, nuestro AE ya sabe exactamente que necesita el prospect.",
                    name: "Marina G.",
                    role: "Head of Growth, SaaS de analytics mid-market",
                    result: "→ 15 horas/semana ahorradas en cualificacion de leads",
                  },
                  {
                    text: "Pivotamos de SMB a enterprise en 3 meses. Con LandForge regeneramos todas las landings con messaging enterprise en una tarde. Con nuestra agencia anterior habria costado 8.000 euros y 6 semanas.",
                    name: "David L.",
                    role: "CMO, SaaS de ciberseguridad Series A",
                    result: "→ Pivot de messaging completo en una tarde",
                  },
                ].map((t) => (
                  <div key={t.name} className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-0.5 text-[#FFB800] mb-4">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                      <p className="text-[#6B7280] italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
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

          {/* -- 6. COMPARATIVA vs ALTERNATIVAS PARA SAAS -- */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-4">LandForge vs Alternativas para Startups SaaS</h2>
              <p className="text-center text-[#6B7280] mb-14 max-w-xl mx-auto">
                Comparativa honesta de las opciones que tienes para crear landing pages de conversion para tu SaaS. Si quieres un analisis mas detallado, consulta nuestra{" "}
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">comparativa completa LandForge vs Webflow</Link>.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
                <table className="w-full text-left bg-white">
                  <thead>
                    <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                      <th className="p-5 font-bold text-[#6B7280] text-sm">Caracteristica</th>
                      <th className="p-5 font-bold text-[#9D4EDD]">LandForge IA</th>
                      <th className="p-5 font-bold text-[#6B7280]">Custom Dev (React/Next.js)</th>
                      <th className="p-5 font-bold text-[#6B7280]">Webflow</th>
                      <th className="p-5 font-bold text-[#6B7280]">Unbounce</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {[
                      ["Tiempo de lanzamiento", "30 segundos", "1-4 semanas", "2-5 dias", "1-3 dias"],
                      ["Coste mensual", "Desde 0€/mes", "Salario developer + hosting", "29-49 USD/mes + dev time", "99-225 USD/mes"],
                      ["Chatbot cualificacion B2B", "✅ Forgi (nativo)", "❌ Desarrollo custom", "❌ No incluido", "❌ Plugin externo"],
                      ["Core Web Vitals", "✅ < 1 segundo", "✅ Si se optimiza", "⚠️ Variable", "⚠️ Suele penalizar"],
                      ["A/B testing de messaging", "✅ Variantes en 30 seg", "⚠️ Feature flags + sprint", "⚠️ Manual, lento", "✅ Nativo pero caro"],
                      ["Iteracion product-led growth", "✅ Instantanea con IA", "❌ Requiere deploy", "⚠️ Requiere disenador", "⚠️ Drag & drop limitado"],
                      ["Integraciones CRM/SaaS", "✅ Zapier + HubSpot nativo", "✅ Custom pero costoso", "⚠️ Limitado", "✅ Nativo"],
                      ["Copy optimizado por IA", "✅ Incluido", "❌ Hay que redactar", "❌ Hay que redactar", "⚠️ Smart Builder basico"],
                    ].map(([feat, lf, custom, wf, ub]) => (
                      <tr key={feat}>
                        <td className="p-5 font-semibold text-[#1A1A2E]">{feat}</td>
                        <td className="p-5 text-[#1A1A2E] font-medium">{lf}</td>
                        <td className="p-5 text-[#6B7280]">{custom}</td>
                        <td className="p-5 text-[#6B7280]">{wf}</td>
                        <td className="p-5 text-[#6B7280]">{ub}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* -- 7. FAQ (Schema-Ready) -- */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre LandForge para Startups SaaS</h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿Puedo crear una landing page para mi lanzamiento en Product Hunt con LandForge?",
                    a: "Si. Describe tu producto SaaS, tu propuesta de valor y el publico objetivo. En 30 segundos tendras una landing optimizada para conversion con CTA de early access, contador de registros y Forgi Chatbot para responder dudas tecnicas de los hunters en tiempo real.",
                  },
                  {
                    q: "¿LandForge se integra con mi stack de herramientas SaaS?",
                    a: "Si. A traves de nuestra integracion nativa con Zapier puedes conectar LandForge con HubSpot, Salesforce, Slack, Intercom, Segment y mas de 5.000 aplicaciones. Los leads que captura Forgi se envian automaticamente a tu CRM con los datos de cualificacion incluidos.",
                  },
                  {
                    q: "¿Puedo hacer A/B testing de mis landing pages SaaS?",
                    a: "Si. Con LandForge generas variantes de tu landing en segundos: cambia el headline, la propuesta de valor o la estructura completa. Cada variante tiene su propia URL y metricas de conversion. Iteracion real en minutos, no en sprints de dos semanas.",
                  },
                  {
                    q: "¿LandForge funciona para SaaS B2B con ciclos de venta largos?",
                    a: "Especialmente bien. Forgi cualifica al lead preguntando por tamano de empresa, presupuesto, caso de uso y urgencia antes de derivar a tu equipo de ventas. Tu SDR recibe un lead con contexto completo, no un email frio. Esto reduce el tiempo del ciclo de venta y aumenta la tasa de cierre.",
                  },
                  {
                    q: "¿Cuanto cuesta LandForge para una startup en etapa early-stage?",
                    a: "Puedes empezar con el plan gratuito (0 euros) que incluye una landing con Forgi Chatbot. Para startups en crecimiento, el plan Growth (49€/mes) ofrece landings ilimitadas. Si necesitas white label y dominios personalizados, el plan Agency (97€/mes) es ideal para escalar.",
                  },
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

          {/* -- 8. CTA FINAL (BOFU) -- */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu MRR no crece solo. Tu landing page deberia trabajar tan rapido como tu equipo</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">
                Crea tu primera landing para SaaS gratis. Sin tarjeta, sin sprints de desarrollo. Mientras tu competencia espera 3 semanas por una landing, tu ya estaras capturando leads cualificados. Consulta nuestras{" "}
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-white underline underline-offset-2 hover:text-[#F3E8FF]">guias de conversion</Link>
                {" "}para maximizar tu funnel.
              </p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition duration-200 shadow-xl">
                Generar mi landing SaaS ahora (Gratis) →
              </Link>
              <p className="text-[#E0AAFF] mt-5 text-sm">Sin tarjeta · Plan Free disponible · Cancela cuando quieras</p>
            </div>
          </section>

          {/* -- ENLAZADO INTERNO -- */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-[#1A1A2E] mb-6 text-lg">Tambien te puede interesar</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias de Marketing</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow: Comparativa Completa</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot: Asistente de Ventas con IA</Link>
                <Link href="/integraciones/zapier" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Integracion con Zapier (+5,000 Apps)</Link>
                <Link href="/integraciones/hubspot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Integracion con HubSpot CRM</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Como Aumentar la Conversion de tu Landing Page</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
