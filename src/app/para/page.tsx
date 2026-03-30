import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones por Sector",
  description:
    "Landing pages con IA para cada industria: agencias, clínicas dentales, eCommerce, abogados, coaches, inmobiliarias, restaurantes, gimnasios, startups SaaS y cursos online.",
  alternates: {
    canonical: "https://landforge.digital/para",
  },
  openGraph: {
    title: "Soluciones por Sector | LandForge",
    description:
      "Landing pages con IA para cada industria: agencias, clínicas dentales, eCommerce, abogados, coaches, inmobiliarias, restaurantes, gimnasios, startups SaaS y cursos online.",
    url: "https://landforge.digital/para",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Soluciones por Sector", item: "https://landforge.digital/para" },
  ],
};

const SECTORS = [
  {
    href: "/para/agencias-de-marketing",
    title: "Agencias de Marketing",
    desc: "White label, generación con IA en 30s y Forgi Chatbot para escalar tu agencia sin ampliar equipo.",
    emoji: "📈",
  },
  {
    href: "/para/clinicas-dentales",
    title: "Clínicas Dentales",
    desc: "Capta más pacientes con landing pages optimizadas y un chatbot que agenda citas 24/7.",
    emoji: "🦷",
  },
  {
    href: "/para/ecommerce",
    title: "eCommerce",
    desc: "Landing pages de producto para Shopify y WooCommerce. Forgi reduce el abandono de carrito.",
    emoji: "🛒",
  },
  {
    href: "/para/abogados",
    title: "Abogados",
    desc: "Genera tu web de despacho legal en 30s. Forgi cualifica consultas y filtra casos 24/7.",
    emoji: "⚖️",
  },
  {
    href: "/para/coaches",
    title: "Coaches y Formadores",
    desc: "Landing pages para coaching que cualifican prospectos antes de la llamada de descubrimiento.",
    emoji: "🎯",
  },
  {
    href: "/para/inmobiliarias",
    title: "Inmobiliarias",
    desc: "Landing pages de inmuebles con chatbot que responde sobre precio, zona y visitas 24/7.",
    emoji: "🏠",
  },
  {
    href: "/para/restaurantes",
    title: "Restaurantes",
    desc: "Web de tu restaurante en 30s. Forgi gestiona reservas, consultas de menú y alérgenos.",
    emoji: "🍽️",
  },
  {
    href: "/para/gimnasios",
    title: "Gimnasios",
    desc: "Capta socios con landing pages optimizadas para Google Ads y chatbot sobre horarios y precios.",
    emoji: "💪",
  },
  {
    href: "/para/startups-saas",
    title: "Startups SaaS",
    desc: "Product Hunt launches, free trials, demo requests y pricing pages. Forgi cualifica leads B2B.",
    emoji: "🚀",
  },
  {
    href: "/para/cursos-online",
    title: "Cursos Online",
    desc: "Landing pages para vender cursos y formaciones online. Forgi resuelve dudas de alumnos y cierra matrículas 24/7.",
    emoji: "🎓",
  },
];

export default function SolucionesPorSectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main className="max-w-5xl mx-auto pt-28 pb-20 px-6">

          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#6B7280]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#9D4EDD] transition">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#1A1A2E] font-medium">Soluciones por Sector</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Landing Pages con IA para tu Sector
          </h1>
          <p className="text-[#6B7280] text-lg mb-12 max-w-2xl">
            Cada industria tiene sus propias necesidades. LandForge genera landing pages optimizadas
            para tu sector con inteligencia artificial y un chatbot de ventas que entiende tu negocio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTORS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#E0AAFF] hover:shadow-md transition group"
              >
                <span className="text-2xl mb-3 block">{s.emoji}</span>
                <h2 className="font-bold text-lg mb-2 group-hover:text-[#9D4EDD] transition">
                  {s.title}
                </h2>
                <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-[#6B7280] mb-4">¿No encuentras tu sector? LandForge funciona para cualquier negocio.</p>
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
