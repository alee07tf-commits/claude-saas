import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de LandForge. Cómo recogemos, usamos y protegemos tus datos personales según el RGPD.",
  alternates: {
    canonical: "https://landforge.digital/politica-privacidad",
  },
  openGraph: {
    title: "Política de Privacidad",
    description:
      "Política de privacidad de LandForge. Cómo recogemos, usamos y protegemos tus datos personales según el RGPD.",
    url: "https://landforge.digital/politica-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
      <main className="max-w-3xl mx-auto pt-32 pb-20 px-6">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#6B7280]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#9D4EDD] transition">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#1A1A2E] font-medium">
              Política de Privacidad
            </li>
          </ol>
        </nav>

        {/* ── Encabezado ── */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Política de Privacidad
        </h1>
        <p className="text-sm text-[#6B7280] mb-12">
          Última actualización: 28 de marzo de 2026
        </p>

        <div className="space-y-10 leading-relaxed text-[#1A1A2E]/90">

          {/* ── 1. Responsable del tratamiento ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              1. Responsable del tratamiento
            </h2>
            <p className="mb-4">
              De conformidad con el Reglamento (UE) 2016/679 General de Protección de
              Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección
              de Datos Personales y garantía de los derechos digitales (LOPDGDD), te
              informamos de que el responsable del tratamiento de tus datos personales
              es:
            </p>
            <ul className="space-y-2 ml-1">
              <li>
                <span className="font-semibold">Denominación social:</span>{" "}
                Alejandro Manuel Bethencourt Rodríguez (en adelante, &ldquo;LandForge&rdquo;)
              </li>
              <li>
                <span className="font-semibold">CIF / NIF:</span>{" "}
                42266036V
              </li>
              <li>
                <span className="font-semibold">Domicilio social:</span>{" "}
                Calle Abreu y Valdés, 5, San Cristóbal de La Laguna, Santa Cruz de Tenerife
              </li>
              <li>
                <span className="font-semibold">Correo electrónico:</span>{" "}
                <a
                  href="mailto:hola@landforge.digital"
                  className="text-[#9D4EDD] hover:underline"
                >
                  hola@landforge.digital
                </a>
              </li>
              <li>
                <span className="font-semibold">Sitio web:</span>{" "}
                <a
                  href="https://landforge.digital"
                  className="text-[#9D4EDD] hover:underline"
                >
                  https://landforge.digital
                </a>
              </li>
            </ul>
          </section>

          {/* ── 2. Qué datos recogemos ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              2. Qué datos recogemos
            </h2>
            <p className="mb-4">
              En función de la interacción del usuario con nuestra plataforma, podemos
              recoger las siguientes categorías de datos personales:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#1A1A2E]/85">
              <li>
                <strong>Datos de registro:</strong> nombre, dirección de correo
                electrónico y contraseña (almacenada de forma cifrada).
              </li>
              <li>
                <strong>Datos de pago:</strong> los datos de tarjeta de crédito o débito
                son procesados directamente por{" "}
                <a
                  href="https://stripe.com/es/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9D4EDD] hover:underline"
                >
                  Stripe
                </a>{" "}
                como procesador de pagos certificado PCI DSS. LandForge{" "}
                <strong>no almacena</strong> datos de tarjeta en sus servidores. Únicamente
                conservamos un identificador de cliente de Stripe y el estado de la
                suscripción.
              </li>
              <li>
                <strong>Datos técnicos y de navegación:</strong> dirección IP, tipo de
                navegador, sistema operativo, páginas visitadas, fecha y hora de acceso,
                y otros datos de uso recogidos de forma automática.
              </li>
              <li>
                <strong>Contenido generado:</strong> las landing pages, textos e imágenes
                que el usuario crea a través de la plataforma utilizando la inteligencia
                artificial.
              </li>
              <li>
                <strong>Datos de comunicación:</strong> cualquier información que el
                usuario nos proporcione voluntariamente a través de formularios de
                contacto, correo electrónico o el chatbot de soporte.
              </li>
            </ul>
          </section>

          {/* ── 3. Finalidad del tratamiento ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              3. Finalidad del tratamiento
            </h2>
            <p className="mb-4">
              Los datos personales recogidos son tratados para las siguientes
              finalidades:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#1A1A2E]/85">
              <li>
                <strong>Gestión de la cuenta de usuario:</strong> registro, autenticación
                y mantenimiento de la cuenta en la plataforma.
              </li>
              <li>
                <strong>Prestación del servicio:</strong> generación de landing pages
                mediante IA, edición con Forgi Editor, funcionamiento del chatbot Forgi y
                demás funcionalidades contratadas.
              </li>
              <li>
                <strong>Facturación y cobro:</strong> gestión de suscripciones, emisión
                de facturas y procesamiento de pagos a través de Stripe.
              </li>
              <li>
                <strong>Comunicaciones relacionadas con el servicio:</strong> envío de
                correos transaccionales (confirmación de cuenta, cambios en la
                suscripción, notificaciones de seguridad) y, previo consentimiento,
                comunicaciones comerciales.
              </li>
              <li>
                <strong>Mejora del servicio:</strong> análisis de uso de la plataforma
                para optimizar la experiencia del usuario, corregir errores y desarrollar
                nuevas funcionalidades.
              </li>
              <li>
                <strong>Cumplimiento legal:</strong> atender obligaciones legales,
                fiscales y administrativas.
              </li>
            </ul>
          </section>

          {/* ── 4. Base legal del tratamiento ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              4. Base legal del tratamiento
            </h2>
            <p className="mb-4">
              El tratamiento de los datos personales se fundamenta en las siguientes
              bases jurídicas del artículo 6.1 del RGPD:
            </p>
            <ul className="list-disc ml-6 space-y-3 text-[#1A1A2E]/85">
              <li>
                <strong>Ejecución de un contrato (Art. 6.1.b RGPD):</strong> el
                tratamiento es necesario para la prestación de los servicios contratados
                por el usuario (registro en la plataforma, generación de landing pages,
                gestión de la suscripción).
              </li>
              <li>
                <strong>Consentimiento del interesado (Art. 6.1.a RGPD):</strong> para el
                envío de comunicaciones comerciales y newsletters, así como para el uso de
                cookies no esenciales. El consentimiento puede ser retirado en cualquier
                momento.
              </li>
              <li>
                <strong>Interés legítimo del responsable (Art. 6.1.f RGPD):</strong> para
                la mejora del servicio, la prevención del fraude, la seguridad de la
                plataforma y el análisis estadístico agregado de uso.
              </li>
              <li>
                <strong>Cumplimiento de obligaciones legales (Art. 6.1.c RGPD):</strong>{" "}
                para el cumplimiento de obligaciones fiscales, contables y de otra índole
                que sean de aplicación.
              </li>
            </ul>
          </section>

          {/* ── 5. Destinatarios de los datos ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              5. Destinatarios de los datos (encargados del tratamiento)
            </h2>
            <p className="mb-4">
              Para la prestación de nuestros servicios, compartimos datos personales con
              los siguientes proveedores, que actúan como encargados del tratamiento en
              virtud de los correspondientes contratos de encargo de tratamiento:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left bg-white text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-[#FAF5FF]">
                    <th className="p-4 font-bold text-[#6B7280]">Proveedor</th>
                    <th className="p-4 font-bold text-[#6B7280]">Finalidad</th>
                    <th className="p-4 font-bold text-[#6B7280]">Garantías</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-semibold">
                      Supabase Inc.
                      <span className="block text-xs text-[#6B7280] font-normal mt-0.5">
                        EE.UU.
                      </span>
                    </td>
                    <td className="p-4 text-[#1A1A2E]/85">
                      Hosting de base de datos y servicio de autenticación de usuarios.
                    </td>
                    <td className="p-4 text-[#1A1A2E]/85">
                      Cláusulas contractuales tipo (SCCs) de la Comisión Europea.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">
                      Stripe Inc.
                      <span className="block text-xs text-[#6B7280] font-normal mt-0.5">
                        EE.UU.
                      </span>
                    </td>
                    <td className="p-4 text-[#1A1A2E]/85">
                      Procesamiento de pagos y gestión de suscripciones.
                    </td>
                    <td className="p-4 text-[#1A1A2E]/85">
                      Certificación PCI DSS Nivel 1. Cláusulas contractuales tipo
                      (SCCs).
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">
                      Vercel Inc.
                      <span className="block text-xs text-[#6B7280] font-normal mt-0.5">
                        EE.UU.
                      </span>
                    </td>
                    <td className="p-4 text-[#1A1A2E]/85">
                      Hosting de la aplicación web y red de distribución de contenido
                      (CDN).
                    </td>
                    <td className="p-4 text-[#1A1A2E]/85">
                      Cláusulas contractuales tipo (SCCs) de la Comisión Europea.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">
                      Anthropic PBC
                      <span className="block text-xs text-[#6B7280] font-normal mt-0.5">
                        EE.UU.
                      </span>
                    </td>
                    <td className="p-4 text-[#1A1A2E]/85">
                      Generación de contenido mediante inteligencia artificial (modelo
                      Claude).
                    </td>
                    <td className="p-4 text-[#1A1A2E]/85">
                      Cláusulas contractuales tipo (SCCs). Los datos enviados a la API
                      no se utilizan para entrenar modelos.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-[#6B7280]">
              Tus datos personales no se cederán a terceros salvo obligación legal o
              los encargados del tratamiento aquí indicados.
            </p>
          </section>

          {/* ── 6. Transferencias internacionales ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              6. Transferencias internacionales de datos
            </h2>
            <p className="mb-4">
              Los proveedores de servicios indicados en la sección anterior tienen sus
              servidores ubicados en Estados Unidos. Estas transferencias internacionales
              de datos están amparadas por las siguientes garantías, de conformidad con
              lo dispuesto en los artículos 46 y 49 del RGPD:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#1A1A2E]/85">
              <li>
                <strong>Cláusulas contractuales tipo (SCCs):</strong> todos los
                proveedores han suscrito las cláusulas contractuales tipo aprobadas por
                la Comisión Europea (Decisión de Ejecución 2021/914), que garantizan un
                nivel adecuado de protección de datos.
              </li>
              <li>
                <strong>Medidas complementarias:</strong> cifrado de datos en tránsito y
                en reposo, controles de acceso estrictos y evaluaciones de impacto de
                transferencia (TIA) cuando corresponde.
              </li>
              <li>
                <strong>Marco de Privacidad de Datos UE-EE.UU.:</strong> cuando el
                proveedor esté adherido al EU-U.S. Data Privacy Framework, dicha
                certificación se aplica como garantía adicional.
              </li>
            </ul>
          </section>

          {/* ── 7. Plazo de conservación ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              7. Plazo de conservación de los datos
            </h2>
            <p className="mb-4">
              Los datos personales se conservarán durante el tiempo necesario para
              cumplir con la finalidad para la que fueron recogidos, y posteriormente
              durante los plazos legalmente establecidos:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#1A1A2E]/85">
              <li>
                <strong>Datos de la cuenta de usuario:</strong> mientras la cuenta
                permanezca activa, y durante un plazo adicional de 5 años tras la baja o
                cancelación para atender posibles responsabilidades legales.
              </li>
              <li>
                <strong>Datos de facturación y pagos:</strong> durante el plazo exigido
                por la normativa fiscal vigente (actualmente, 4 años conforme al artículo
                66 de la Ley General Tributaria, ampliable a 5 años por normativa
                mercantil).
              </li>
              <li>
                <strong>Registros de uso y datos técnicos:</strong> 12 meses desde su
                recogida, salvo obligación legal de conservación superior.
              </li>
              <li>
                <strong>Datos de comunicaciones comerciales:</strong> hasta que el usuario
                retire su consentimiento.
              </li>
            </ul>
            <p className="mt-4">
              Transcurridos los plazos indicados, los datos serán suprimidos o
              anonimizados de forma irreversible.
            </p>
          </section>

          {/* ── 8. Derechos del usuario ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              8. Derechos del usuario
            </h2>
            <p className="mb-4">
              De conformidad con el RGPD y la LOPDGDD, tienes derecho a:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#1A1A2E]/85">
              <li>
                <strong>Derecho de acceso:</strong> conocer si estamos tratando tus datos
                personales y, en su caso, obtener una copia de los mismos.
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> solicitar la corrección de
                datos inexactos o incompletos.
              </li>
              <li>
                <strong>Derecho de supresión (&ldquo;derecho al olvido&rdquo;):</strong>{" "}
                solicitar la eliminación de tus datos cuando ya no sean necesarios para
                la finalidad para la que fueron recogidos.
              </li>
              <li>
                <strong>Derecho a la portabilidad:</strong> recibir tus datos en un
                formato estructurado, de uso común y lectura mecánica, y transmitirlos a
                otro responsable.
              </li>
              <li>
                <strong>Derecho de oposición:</strong> oponerte al tratamiento de tus
                datos en determinadas circunstancias, incluido el tratamiento con fines
                de marketing directo.
              </li>
              <li>
                <strong>Derecho a la limitación del tratamiento:</strong> solicitar la
                suspensión del tratamiento en determinados supuestos.
              </li>
              <li>
                <strong>Derecho a no ser objeto de decisiones automatizadas:</strong> no
                ser objeto de una decisión basada únicamente en el tratamiento
                automatizado que produzca efectos jurídicos o te afecte
                significativamente.
              </li>
            </ul>

            <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-semibold mb-2">
                ¿Cómo ejercer tus derechos?
              </p>
              <p className="text-[#1A1A2E]/85 mb-3">
                Puedes ejercer cualquiera de estos derechos enviando un correo
                electrónico a{" "}
                <a
                  href="mailto:hola@landforge.digital"
                  className="text-[#9D4EDD] hover:underline font-medium"
                >
                  hola@landforge.digital
                </a>{" "}
                indicando en el asunto &ldquo;Ejercicio de derechos RGPD&rdquo;, acompañado de una
                copia de tu DNI o documento identificativo equivalente.
              </p>
              <p className="text-[#1A1A2E]/85">
                Responderemos a tu solicitud en el plazo máximo de un mes. Si consideras
                que tus derechos no han sido debidamente atendidos, tienes derecho a
                presentar una reclamación ante la{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9D4EDD] hover:underline font-medium"
                >
                  Agencia Española de Protección de Datos (AEPD)
                </a>{" "}
                — C/ Jorge Juan, 6, 28001 Madrid —{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9D4EDD] hover:underline"
                >
                  www.aepd.es
                </a>
                .
              </p>
            </div>
          </section>

          {/* ── 9. Seguridad de los datos ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              9. Seguridad de los datos
            </h2>
            <p className="mb-4">
              LandForge implementa las medidas técnicas y organizativas adecuadas para
              garantizar la seguridad de los datos personales y evitar su alteración,
              pérdida, tratamiento no autorizado o acceso ilícito, habida cuenta del
              estado de la tecnología, la naturaleza de los datos y los riesgos a los
              que están expuestos. Entre otras, aplicamos las siguientes medidas:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#1A1A2E]/85">
              <li>
                <strong>Cifrado en tránsito:</strong> todas las comunicaciones entre el
                navegador del usuario y nuestros servidores se realizan a través de
                protocolo HTTPS con cifrado SSL/TLS.
              </li>
              <li>
                <strong>Cifrado de contraseñas:</strong> las contraseñas de los usuarios
                se almacenan utilizando algoritmos de hash seguros (bcrypt) y nunca se
                guardan en texto plano.
              </li>
              <li>
                <strong>Control de acceso:</strong> acceso restringido a los datos
                personales mediante políticas de mínimo privilegio y autenticación
                reforzada.
              </li>
              <li>
                <strong>Infraestructura segura:</strong> alojamiento en proveedores con
                certificaciones de seguridad reconocidas (SOC 2, ISO 27001) y
                monitorización continua.
              </li>
              <li>
                <strong>Copias de seguridad:</strong> realizadas de forma periódica y
                almacenadas de forma cifrada.
              </li>
            </ul>
          </section>

          {/* ── 10. Cookies ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              10. Cookies
            </h2>
            <p>
              El sitio web de LandForge utiliza cookies propias y de terceros con
              diferentes finalidades. Para conocer en detalle qué cookies utilizamos,
              con qué finalidad y cómo puedes configurarlas o rechazarlas, consulta
              nuestra{" "}
              <Link
                href="/politica-cookies"
                className="text-[#9D4EDD] font-semibold hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </section>

          {/* ── 11. Modificaciones ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              11. Modificaciones de esta Política de Privacidad
            </h2>
            <p>
              LandForge se reserva el derecho de actualizar o modificar la presente
              Política de Privacidad en cualquier momento para adaptarla a cambios
              legislativos, jurisprudenciales, criterios de la AEPD o del Comité Europeo
              de Protección de Datos, o a nuevas prácticas del sector. Cualquier
              modificación será publicada en esta misma página con la fecha de última
              actualización. En caso de cambios sustanciales que afecten a la forma en
              que tratamos tus datos, te lo notificaremos por correo electrónico o
              mediante un aviso visible en la plataforma. El uso continuado del servicio
              tras la publicación de las modificaciones constituirá la aceptación de las
              mismas.
            </p>
          </section>

        </div>

        {/* ── Enlace de vuelta ── */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link
            href="/aviso-legal"
            className="text-[#9D4EDD] font-semibold hover:underline"
          >
            Aviso Legal
          </Link>
          <Link
            href="/politica-cookies"
            className="text-[#9D4EDD] font-semibold hover:underline"
          >
            Política de Cookies
          </Link>
          <Link
            href="/"
            className="text-[#9D4EDD] font-semibold hover:underline"
          >
            Volver al inicio
          </Link>
        </div>

      </main>
    </div>
  );
}
