import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de LandForge. Qué cookies usamos, para qué sirven y cómo puedes gestionarlas.",
  alternates: {
    canonical: "https://landforge.digital/politica-cookies",
  },
  openGraph: {
    title: "Política de Cookies",
    description:
      "Política de cookies de LandForge. Qué cookies usamos, para qué sirven y cómo puedes gestionarlas.",
    url: "https://landforge.digital/politica-cookies",
  },
};

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
      <main>
        <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">

          {/* ── Breadcrumb ── */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#6B7280]">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-[#9D4EDD] transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#1A1A2E] font-medium">Política de Cookies</li>
            </ol>
          </nav>

          {/* ── Encabezado ── */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Política de Cookies
          </h1>
          <p className="text-[#6B7280] text-sm mb-10">
            Última actualización: 28 de marzo de 2026
          </p>

          <hr className="border-[#E0AAFF] mb-10" />

          <p className="text-[#6B7280] leading-relaxed mb-10">
            En <strong className="text-[#1A1A2E]">LandForge</strong> (accesible desde{" "}
            <Link href="/" className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors">
              https://landforge.digital
            </Link>
            ), respetamos tu privacidad y queremos que entiendas cómo y por qué utilizamos cookies
            en nuestra plataforma. Esta política explica qué son las cookies, cuáles usamos,
            para qué sirven y cómo puedes gestionarlas.
          </p>

          {/* ── 1. ¿Qué son las cookies? ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">1. ¿Qué son las cookies?</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando
              visitas un sitio web. Permiten que el sitio recuerde información sobre tu visita,
              como tus preferencias de idioma, datos de inicio de sesión o la configuración de
              la página. Esto facilita tu próxima visita y hace que el sitio sea más útil para ti.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Las cookies pueden ser &laquo;propias&raquo; (establecidas directamente por el sitio
              que visitas) o &laquo;de terceros&raquo; (establecidas por servicios externos que el
              sitio utiliza, como proveedores de pagos o analítica).
            </p>
          </section>

          {/* ── 2. ¿Qué cookies utilizamos? ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">2. ¿Qué cookies utilizamos?</h2>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              A continuación detallamos las cookies que LandForge puede almacenar en tu
              navegador. Actualmente, todas las cookies que utilizamos son <strong className="text-[#1A1A2E]">esenciales</strong> para
              el correcto funcionamiento de la plataforma.
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E0AAFF] shadow-sm">
              <table className="w-full text-left bg-white text-sm">
                <thead>
                  <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                    <th className="p-4 font-bold text-[#9D4EDD]">Cookie</th>
                    <th className="p-4 font-bold text-[#9D4EDD]">Proveedor</th>
                    <th className="p-4 font-bold text-[#9D4EDD]">Tipo</th>
                    <th className="p-4 font-bold text-[#9D4EDD]">Duración</th>
                    <th className="p-4 font-bold text-[#9D4EDD]">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-mono text-xs">sb-*-auth-token</td>
                    <td className="p-4 text-[#6B7280]">Supabase</td>
                    <td className="p-4 text-[#6B7280]">Esencial</td>
                    <td className="p-4 text-[#6B7280]">Sesión</td>
                    <td className="p-4 text-[#6B7280]">Autenticación de usuario. Permite mantener la sesión iniciada de forma segura.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">__stripe_mid</td>
                    <td className="p-4 text-[#6B7280]">Stripe</td>
                    <td className="p-4 text-[#6B7280]">Esencial</td>
                    <td className="p-4 text-[#6B7280]">1 año</td>
                    <td className="p-4 text-[#6B7280]">Prevención de fraude en pagos. Identifica el dispositivo para proteger las transacciones.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">__stripe_sid</td>
                    <td className="p-4 text-[#6B7280]">Stripe</td>
                    <td className="p-4 text-[#6B7280]">Esencial</td>
                    <td className="p-4 text-[#6B7280]">30 min</td>
                    <td className="p-4 text-[#6B7280]">Sesión de pago. Gestiona la sesión mientras se procesa un pago.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">_vercel_jwt</td>
                    <td className="p-4 text-[#6B7280]">Vercel</td>
                    <td className="p-4 text-[#6B7280]">Esencial</td>
                    <td className="p-4 text-[#6B7280]">Sesión</td>
                    <td className="p-4 text-[#6B7280]">Verificación de despliegue. Necesaria para el correcto funcionamiento del hosting.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 3. Categorías de cookies ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">3. Categorías de cookies</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  Cookies esenciales (siempre activas)
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Son imprescindibles para que la plataforma funcione correctamente. Incluyen
                  las cookies de autenticación (Supabase), procesamiento de pagos (Stripe) y
                  funcionamiento del hosting (Vercel). <strong className="text-[#1A1A2E]">No pueden desactivarse</strong>, ya que sin
                  ellas no sería posible iniciar sesión, realizar pagos ni acceder al servicio.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  Cookies analíticas (opcionales)
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Nos ayudan a entender cómo los usuarios interactúan con la plataforma: qué
                  páginas visitan, cuánto tiempo permanecen y dónde encuentran dificultades.
                  Esta información nos permite mejorar la experiencia de uso.{" "}
                  <strong className="text-[#1A1A2E]">Actualmente no tenemos cookies analíticas activas</strong>, pero es
                  posible que las incorporemos en el futuro. Si lo hacemos, actualizaremos esta
                  política y solicitaremos tu consentimiento previamente.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  Cookies de marketing (opcionales)
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Se utilizan para ofrecer contenido personalizado y medir la eficacia de las
                  campañas publicitarias.{" "}
                  <strong className="text-[#1A1A2E]">Actualmente no tenemos cookies de marketing activas</strong>. Si en
                  el futuro decidimos implementarlas, actualizaremos esta política y
                  solicitaremos tu consentimiento explícito antes de activarlas.
                </p>
              </div>
            </div>
          </section>

          {/* ── 4. ¿Cómo gestionar las cookies? ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">4. ¿Cómo gestionar las cookies?</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Puedes controlar y eliminar las cookies desde la configuración de tu navegador.
              Ten en cuenta que, si desactivas las cookies esenciales, es posible que algunas
              funciones de LandForge no estén disponibles (como el inicio de sesión o el
              procesamiento de pagos).
            </p>

            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="font-bold mb-3">Instrucciones por navegador:</h3>
              <ul className="space-y-2 text-[#6B7280] text-sm">
                <li>
                  <strong className="text-[#1A1A2E]">Google Chrome:</strong>{" "}
                  Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios
                </li>
                <li>
                  <strong className="text-[#1A1A2E]">Mozilla Firefox:</strong>{" "}
                  Configuración &gt; Privacidad y seguridad &gt; Cookies y datos de sitios
                </li>
                <li>
                  <strong className="text-[#1A1A2E]">Safari:</strong>{" "}
                  Preferencias &gt; Privacidad &gt; Gestionar datos del sitio web
                </li>
                <li>
                  <strong className="text-[#1A1A2E]">Microsoft Edge:</strong>{" "}
                  Configuración &gt; Cookies y permisos del sitio &gt; Administrar y eliminar cookies
                </li>
              </ul>
            </div>

            <p className="text-[#6B7280] leading-relaxed">
              Para modificar tus preferencias de cookies en cualquier momento, puedes hacer clic
              en &laquo;Configurar cookies&raquo; en el pie de página de cualquier página del sitio.
            </p>
          </section>

          {/* ── 5. Consentimiento ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">5. Consentimiento</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Cuando visitas LandForge por primera vez, se muestra un banner de cookies que te
              informa sobre el uso de cookies y te permite aceptarlas o configurar tus
              preferencias. Tu elección queda registrada en el almacenamiento local
              (localStorage) de tu navegador para que no volvamos a mostrarte el banner en
              visitas posteriores.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Las cookies esenciales se activan automáticamente, ya que son necesarias para el
              funcionamiento del servicio. Para las cookies opcionales (analíticas o de marketing,
              si se implementan en el futuro), solicitaremos tu consentimiento explícito antes de
              activarlas.
            </p>
          </section>

          {/* ── 6. Más información ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">6. Más información</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Para obtener información adicional sobre cómo tratamos tus datos personales y
              tus derechos, consulta nuestras otras páginas legales:
            </p>
            <ul className="space-y-2 text-[#6B7280]">
              <li>
                <Link
                  href="/aviso-legal"
                  className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
                >
                  Aviso Legal
                </Link>{" "}
                — Información sobre el titular del sitio web y condiciones generales.
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
                >
                  Política de Privacidad
                </Link>{" "}
                — Cómo recopilamos, usamos y protegemos tus datos personales.
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
                >
                  Términos y Condiciones
                </Link>{" "}
                — Condiciones de uso del servicio LandForge.
              </li>
            </ul>
          </section>

          {/* ── 7. Modificaciones ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">7. Modificaciones de esta política</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              LandForge se reserva el derecho a modificar esta Política de Cookies en cualquier
              momento para adaptarla a novedades legislativas, jurisprudenciales o técnicas. Si
              se producen cambios significativos (por ejemplo, la incorporación de nuevas
              categorías de cookies), te lo notificaremos a través de un nuevo banner de cookies
              o mediante un aviso en la plataforma.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Te recomendamos revisar esta página periódicamente para estar al día de cualquier
              actualización. La fecha de la última modificación se indica al inicio de esta
              política.
            </p>
          </section>

          <hr className="border-[#E0AAFF] mb-6" />

          {/* ── Contacto ── */}
          <p className="text-[#6B7280] text-sm leading-relaxed">
            Si tienes alguna duda sobre esta Política de Cookies, puedes contactarnos en{" "}
            <a
              href="mailto:hola@landforge.digital"
              className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
            >
              hola@landforge.digital
            </a>.
          </p>

        </article>
      </main>
    </div>
  );
}
