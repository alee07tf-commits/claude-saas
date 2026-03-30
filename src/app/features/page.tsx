import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funcionalidades IA para Landing Pages",
  description:
    "Descubre las funcionalidades de LandForge: generador IA, Forgi Chatbot de ventas 24/7, Forgi Editor y Conversion Score para landing pages.",
  alternates: {
    canonical: "https://landforge.digital/features",
  },
  openGraph: {
    title: "Funcionalidades IA para Landing Pages | LandForge",
    description:
      "Descubre las funcionalidades de LandForge: generador IA, Forgi Chatbot de ventas 24/7, Forgi Editor y Conversion Score para landing pages.",
    url: "https://landforge.digital/features",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Funcionalidades", item: "https://landforge.digital/features" },
  ],
};

const FEATURES = [
  {
    href: "/features/forgi-chatbot",
    title: "Forgi Chatbot",
    subtitle: "Ventas IA 24/7",
    desc: "Chatbot de ventas con inteligencia artificial que atiende, cualifica y convierte visitantes de tu landing page las 24 horas. Se entrena solo en 30 segundos.",
    gradient: "from-[#9D4EDD] to-[#7B2CBF]",
  },
  {
    href: "/features/forgi-editor",
    title: "Forgi Editor",
    subtitle: "Edita con lenguaje natural",
    desc: "Describe en español lo que quieres cambiar y Forgi lo aplica al instante. Edición por bloques asistida por IA, sin tocar código.",
    gradient: "from-[#7B2CBF] to-[#5A189A]",
  },
  {
    href: "/features/conversion-score",
    title: "Conversion Score",
    subtitle: "Analiza tu landing con IA",
    desc: "Puntuación de 0 a 100 en 8 categorías con recomendaciones accionables para mejorar la conversión de cada landing page.",
    gradient: "from-[#5A189A] to-[#3C096C]",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main className="max-w-4xl mx-auto pt-28 pb-20 px-6">

          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#6B7280]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#9D4EDD] transition">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#1A1A2E] font-medium">Funcionalidades</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Funcionalidades de LandForge
          </h1>
          <p className="text-[#6B7280] text-lg mb-12 max-w-2xl">
            Todo lo que necesitas para crear, optimizar y convertir con landing pages generadas por IA.
          </p>

          <div className="space-y-6">
            {FEATURES.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="block bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#E0AAFF] hover:shadow-lg transition group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0`}
                    style={{ fontFamily: "'Space Mono', monospace" }}>
                    {f.title.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold group-hover:text-[#9D4EDD] transition">
                      {f.title} <span className="text-[#6B7280] font-normal text-base">— {f.subtitle}</span>
                    </h2>
                    <p className="text-[#6B7280] mt-2 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}
            >
              Ver planes y precios →
            </Link>
          </div>

        </main>
      </div>
    </>
  );
}
