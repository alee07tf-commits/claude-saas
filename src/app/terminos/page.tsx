import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de LandForge. Obligaciones, pagos, propiedad intelectual y limitaciones del servicio.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Términos y Condiciones",
    description:
      "Términos y condiciones de uso de LandForge. Obligaciones, pagos, propiedad intelectual y limitaciones del servicio.",
    url: "https://landforge.digital/terminos",
  },
};

export default function TerminosCondiciones() {
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
              <li className="text-[#1A1A2E] font-medium">Términos y Condiciones</li>
            </ol>
          </nav>

          {/* ── Encabezado ── */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-[#6B7280] text-sm mb-10">
            Última actualización: 28 de marzo de 2026
          </p>

          <hr className="border-[#E0AAFF] mb-10" />

          <p className="text-[#6B7280] leading-relaxed mb-10">
            Los presentes Términos y Condiciones (en adelante, &laquo;Términos&raquo;) regulan el
            acceso y uso de la plataforma <strong className="text-[#1A1A2E]">LandForge</strong>,
            accesible desde{" "}
            <Link href="/" className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors">
              https://landforge.digital
            </Link>
            , propiedad de <strong className="text-[#1A1A2E]">Alejandro Manuel Bethencourt Rodríguez</strong> (en
            adelante, &laquo;LandForge&raquo;, &laquo;nosotros&raquo; o &laquo;la
            Empresa&raquo;), con NIF <strong className="text-[#1A1A2E]">42266036V</strong> y
            domicilio fiscal en <strong className="text-[#1A1A2E]">Calle Abreu y Valdés, 5, San Cristóbal de La Laguna, Santa Cruz de Tenerife</strong>.
          </p>

          {/* ── 1. Definiciones ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">1. Definiciones</h2>
            <ul className="space-y-3 text-[#6B7280] leading-relaxed">
              <li>
                <strong className="text-[#1A1A2E]">Plataforma:</strong> El sitio web landforge.digital
                y todas las funcionalidades asociadas, incluyendo el generador de landing pages con
                IA, Forgi Chatbot, Forgi Editor y el panel de control del usuario.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Usuario:</strong> Toda persona física o jurídica
                que accede a la Plataforma, se registra o utiliza cualquiera de sus servicios.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Contenido:</strong> Todo material generado,
                subido o publicado por el Usuario a través de la Plataforma, incluyendo textos,
                imágenes, configuraciones de landing pages y datos introducidos en el chatbot o el
                editor.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Servicio:</strong> El conjunto de
                funcionalidades ofrecidas por LandForge, incluyendo la generación automatizada de
                landing pages mediante inteligencia artificial, la edición con Forgi Editor, la
                atención automatizada con Forgi Chatbot y el análisis de conversión (Conversion
                Score).
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Suscripción:</strong> El plan contratado por el
                Usuario que determina las funcionalidades disponibles, los límites de uso y el
                precio correspondiente.
              </li>
            </ul>
          </section>

          {/* ── 2. Aceptación de los términos ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">2. Aceptación de los términos</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Al registrarte en LandForge, acceder a la Plataforma o utilizar cualquiera de
              nuestros servicios, aceptas quedar vinculado por estos Términos y por nuestra{" "}
              <Link
                href="/politica-privacidad"
                className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
              >
                Política de Privacidad
              </Link>{" "}
              y{" "}
              <Link
                href="/politica-cookies"
                className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
              >
                Política de Cookies
              </Link>.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Si no estás de acuerdo con alguna de las condiciones establecidas en estos
              Términos, te rogamos que no utilices la Plataforma. El uso continuado del
              servicio tras cualquier modificación de estos Términos constituirá tu aceptación
              de dichas modificaciones.
            </p>
          </section>

          {/* ── 3. Descripción del servicio ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">3. Descripción del servicio</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              LandForge es una plataforma SaaS (Software como Servicio) que permite a usuarios
              y agencias de marketing crear landing pages de alta conversión mediante
              inteligencia artificial. El servicio incluye:
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed list-disc list-inside">
              <li>
                <strong className="text-[#1A1A2E]">Generador de landing pages con IA:</strong>{" "}
                Creación automatizada de páginas de aterrizaje completas a partir de una
                descripción del negocio o producto.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Forgi Chatbot:</strong> Chatbot de ventas
                impulsado por inteligencia artificial que se integra en las landing pages
                generadas para atender visitantes y facilitar conversiones.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Forgi Editor:</strong> Editor asistido por IA
                que permite al Usuario modificar y personalizar sus landing pages sin
                necesidad de conocimientos de programación.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Conversion Score:</strong> Sistema de
                puntuación que analiza y evalúa el potencial de conversión de cada landing
                page.
              </li>
            </ul>
          </section>

          {/* ── 4. Registro y cuenta ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">4. Registro y cuenta</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Para acceder a las funcionalidades de LandForge, debes crear una cuenta
              proporcionando información veraz, completa y actualizada. Al registrarte, te
              comprometes a:
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed list-disc list-inside">
              <li>
                Proporcionar datos exactos y verídicos durante el proceso de registro.
              </li>
              <li>
                Mantener la seguridad de tus credenciales de acceso (correo electrónico y
                contraseña). No compartir tu cuenta con terceros.
              </li>
              <li>
                Notificar a LandForge de inmediato ante cualquier uso no autorizado de tu
                cuenta o cualquier brecha de seguridad.
              </li>
              <li>
                Asumir la responsabilidad de todas las actividades que se realicen desde tu
                cuenta, tanto por ti como por cualquier persona que acceda con tus
                credenciales.
              </li>
            </ul>
            <p className="text-[#6B7280] leading-relaxed mt-4">
              LandForge se reserva el derecho a suspender o cancelar cuentas que contengan
              información falsa o que incumplan estos Términos.
            </p>
          </section>

          {/* ── 5. Planes y precios ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">5. Planes y precios</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              LandForge ofrece distintos planes de suscripción adaptados a las necesidades de
              cada usuario. Puedes consultar los detalles completos y actualizados en nuestra{" "}
              <Link
                href="/precios"
                className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
              >
                página de precios
              </Link>. Actualmente, los planes disponibles son:
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed list-disc list-inside">
              <li>
                <strong className="text-[#1A1A2E]">Free:</strong> 1 landing page activa, ideal
                para probar la plataforma. Sin coste.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Starter (49 &euro;/mes):</strong> 5 landing
                pages activas, generación con IA, edición con Forgi Editor, Forgi Chatbot y
                Conversion Score.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Agency (97 &euro;/mes):</strong> 20 landing
                pages activas, dominio propio, análisis de competidores y todas las funciones
                del plan Starter.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Agency Pro (197 &euro;/mes):</strong> Landing
                pages ilimitadas, white label, soporte prioritario y todas las funciones del
                plan Agency.
              </li>
            </ul>
            <p className="text-[#6B7280] leading-relaxed mt-4">
              Todos los planes de pago ofrecen una opción de facturación anual con un
              descuento del 20%. Los precios pueden modificarse en cualquier momento, con un
              preaviso mínimo de <strong className="text-[#1A1A2E]">30 días</strong> antes de que
              el cambio afecte a las suscripciones activas.
            </p>
          </section>

          {/* ── 6. Pagos y facturación ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">6. Pagos y facturación</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Todos los pagos se procesan de forma segura a través de{" "}
              <strong className="text-[#1A1A2E]">Stripe</strong>, una pasarela de pago certificada
              PCI-DSS. LandForge no almacena datos de tarjetas de crédito ni información
              financiera sensible en sus servidores.
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed list-disc list-inside">
              <li>
                La facturación es recurrente, ya sea mensual o anual, según el ciclo elegido
                por el Usuario en el momento de la contratación.
              </li>
              <li>
                El cobro se realiza automáticamente al inicio de cada período de facturación.
              </li>
              <li>
                <strong className="text-[#1A1A2E]">No se realizan reembolsos</strong> por meses
                parciales o períodos no utilizados dentro de un ciclo de facturación ya
                iniciado.
              </li>
              <li>
                Los precios indicados incluyen el IVA aplicable en su caso. En función de tu
                ubicación fiscal, pueden aplicarse impuestos adicionales.
              </li>
              <li>
                En caso de impago o fallo en el cobro, LandForge podrá suspender el acceso a
                la cuenta hasta que se regularice la situación.
              </li>
            </ul>
          </section>

          {/* ── 7. Cancelación ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">7. Cancelación</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              El Usuario puede cancelar su suscripción en cualquier momento desde el panel de
              control de su cuenta. La cancelación se hará efectiva de la siguiente manera:
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed list-disc list-inside">
              <li>
                El acceso a las funcionalidades del plan contratado se mantendrá hasta el
                final del período de facturación en curso.
              </li>
              <li>
                Una vez finalizado dicho período, la cuenta pasará automáticamente al plan
                Free.
              </li>
              <li>
                Los datos y las landing pages del Usuario se conservarán durante un período de{" "}
                <strong className="text-[#1A1A2E]">30 días</strong> tras la cancelación. Transcurrido
                ese plazo, LandForge se reserva el derecho a eliminar dichos datos de forma
                permanente.
              </li>
              <li>
                Si el Usuario desea recuperar sus datos durante el período de retención de 30
                días, puede contactar con nuestro equipo de soporte.
              </li>
            </ul>
          </section>

          {/* ── 8. Propiedad intelectual ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">8. Propiedad intelectual</h2>

            <h3 className="font-bold mb-2 text-[#1A1A2E]">Propiedad de LandForge</h3>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              La plataforma LandForge, su código fuente, diseño, logotipos, marca, textos
              propios, algoritmos de inteligencia artificial y toda la tecnología subyacente
              son propiedad exclusiva de <strong className="text-[#1A1A2E]">LandForge / ZappyApps</strong> y
              están protegidos por las leyes de propiedad intelectual e industrial aplicables.
              Queda prohibida su reproducción, distribución o modificación sin autorización
              expresa.
            </p>

            <h3 className="font-bold mb-2 text-[#1A1A2E]">Contenido del Usuario</h3>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Las landing pages generadas por el Usuario a través de LandForge son{" "}
              <strong className="text-[#1A1A2E]">propiedad del Usuario</strong>. Esto incluye los
              textos, imágenes y configuraciones que el Usuario introduzca o genere utilizando
              la plataforma.
            </p>

            <h3 className="font-bold mb-2 text-[#1A1A2E]">Contenido generado por IA</h3>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              El contenido generado automáticamente por la inteligencia artificial (textos,
              sugerencias de diseño, respuestas del chatbot) se proporciona como herramienta
              de ayuda. El <strong className="text-[#1A1A2E]">Usuario es el único responsable</strong> de
              revisar, verificar y validar la exactitud, legalidad y adecuación de dicho
              contenido antes de publicarlo o utilizarlo.
            </p>

            <h3 className="font-bold mb-2 text-[#1A1A2E]">Licencia de uso</h3>
            <p className="text-[#6B7280] leading-relaxed">
              Al utilizar la Plataforma, el Usuario otorga a LandForge una licencia limitada,
              no exclusiva y revocable para alojar, mostrar y transmitir su Contenido
              exclusivamente con el fin de prestar el Servicio contratado. Esta licencia se
              extingue cuando el Usuario elimina su contenido o cancela su cuenta (sin
              perjuicio del período de retención de datos de 30 días indicado en la sección de
              cancelación).
            </p>
          </section>

          {/* ── 9. Uso aceptable ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">9. Uso aceptable</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              El Usuario se compromete a utilizar LandForge de manera responsable y conforme a
              la legislación vigente. Queda expresamente prohibido:
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed list-disc list-inside">
              <li>
                Crear, alojar o distribuir contenido ilegal, difamatorio, fraudulento,
                pornográfico, violento o que incite al odio.
              </li>
              <li>
                Utilizar la plataforma para el envío de spam, correos no solicitados o
                comunicaciones masivas no autorizadas.
              </li>
              <li>
                Introducir malware, virus, código malicioso o cualquier elemento que pueda
                dañar la Plataforma o los dispositivos de otros usuarios.
              </li>
              <li>
                Realizar scraping, ingeniería inversa o cualquier acción destinada a extraer
                datos o código de la Plataforma de forma automatizada.
              </li>
              <li>
                Revender, sublicenciar o redistribuir el acceso a la Plataforma a terceros,
                salvo en el caso del plan <strong className="text-[#1A1A2E]">Agency Pro</strong>, que
                permite el uso de white label para ofrecer el servicio a los clientes del
                Usuario.
              </li>
              <li>
                Intentar acceder a cuentas, datos o sistemas ajenos sin autorización.
              </li>
              <li>
                Utilizar la plataforma de cualquier forma que pueda sobrecargar, dañar o
                deteriorar el funcionamiento del Servicio.
              </li>
            </ul>
            <p className="text-[#6B7280] leading-relaxed mt-4">
              El incumplimiento de estas normas podrá dar lugar a la suspensión o cancelación
              inmediata de la cuenta del Usuario, sin derecho a reembolso y sin perjuicio de
              las acciones legales que pudieran corresponder.
            </p>
          </section>

          {/* ── 10. Limitación de responsabilidad ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">10. Limitación de responsabilidad</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              LandForge proporciona el Servicio <strong className="text-[#1A1A2E]">&laquo;tal cual&raquo;</strong> (as
              is) y <strong className="text-[#1A1A2E]">&laquo;según disponibilidad&raquo;</strong> (as
              available), sin garantías expresas ni implícitas de ningún tipo, salvo las
              exigidas por la legislación aplicable.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              En particular, LandForge <strong className="text-[#1A1A2E]">no garantiza</strong>:
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed list-disc list-inside mb-4">
              <li>
                Resultados comerciales específicos derivados del uso de la Plataforma
                (conversiones, ventas, captación de leads, etc.).
              </li>
              <li>
                La exactitud, integridad o adecuación del contenido generado por la
                inteligencia artificial.
              </li>
              <li>
                La disponibilidad ininterrumpida y libre de errores del Servicio.
              </li>
            </ul>
            <p className="text-[#6B7280] leading-relaxed">
              En la máxima medida permitida por la ley, la responsabilidad total de LandForge
              frente al Usuario por cualquier reclamación derivada de o relacionada con estos
              Términos o el uso del Servicio estará limitada al{" "}
              <strong className="text-[#1A1A2E]">
                importe total de las cuotas abonadas por el Usuario durante los últimos 12
                meses
              </strong>{" "}
              anteriores al hecho que originó la reclamación.
            </p>
          </section>

          {/* ── 11. Disponibilidad del servicio ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">11. Disponibilidad del servicio</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              LandForge se esfuerza por mantener la Plataforma operativa y accesible las 24
              horas del día, los 7 días de la semana. No obstante, el Servicio puede verse
              interrumpido por:
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed list-disc list-inside mb-4">
              <li>
                Tareas de mantenimiento programadas o de emergencia.
              </li>
              <li>
                Actualizaciones de la plataforma o de sus proveedores externos (Vercel,
                Supabase, Stripe, Anthropic).
              </li>
              <li>
                Causas de fuerza mayor, fallos de red o circunstancias fuera de nuestro
                control.
              </li>
            </ul>
            <p className="text-[#6B7280] leading-relaxed">
              LandForge no será responsable de los daños o perjuicios que puedan derivarse de
              interrupciones o fallos temporales en el Servicio, ni de la pérdida de datos que
              pudiera producirse como consecuencia de dichas interrupciones. Recomendamos al
              Usuario mantener copias de seguridad de su contenido importante.
            </p>
          </section>

          {/* ── 12. Protección de datos ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">12. Protección de datos</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              LandForge trata los datos personales del Usuario conforme a lo establecido en el
              Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5
              de diciembre, de Protección de Datos Personales y garantía de los derechos
              digitales (LOPDGDD).
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Para obtener información detallada sobre cómo recopilamos, utilizamos,
              almacenamos y protegemos tus datos personales, así como sobre tus derechos
              (acceso, rectificación, supresión, portabilidad, oposición y limitación del
              tratamiento), consulta nuestra{" "}
              <Link
                href="/politica-privacidad"
                className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
              >
                Política de Privacidad
              </Link>.
            </p>
          </section>

          {/* ── 13. Modificaciones de los términos ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">13. Modificaciones de los términos</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              LandForge se reserva el derecho a modificar estos Términos en cualquier momento.
              Cuando se produzcan cambios sustanciales, se notificará a los Usuarios con un
              preaviso mínimo de <strong className="text-[#1A1A2E]">30 días</strong> a través del
              correo electrónico asociado a su cuenta.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              El uso continuado de la Plataforma tras la entrada en vigor de los Términos
              modificados constituirá la aceptación de dichos cambios. Si el Usuario no está
              de acuerdo con las modificaciones, deberá dejar de utilizar el Servicio y podrá
              cancelar su suscripción en cualquier momento.
            </p>
          </section>

          {/* ── 14. Legislación aplicable ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">14. Legislación aplicable y jurisdicción</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Estos Términos se rigen e interpretan de conformidad con la legislación
              española. Para la resolución de cualquier controversia derivada de la
              interpretación o el cumplimiento de estos Términos, las partes se someten a la
              jurisdicción de los Juzgados y Tribunales de{" "}
              San Cristóbal de La Laguna (Santa Cruz de Tenerife), con renuncia expresa a
              cualquier otro fuero que pudiera corresponderles.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Si alguna disposición de estos Términos se declarase nula o inaplicable, las
              restantes disposiciones seguirán siendo plenamente válidas y eficaces.
            </p>
          </section>

          {/* ── 15. Contacto ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">15. Contacto</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Si tienes cualquier pregunta, duda o reclamación relacionada con estos Términos
              y Condiciones, puedes contactarnos a través de:
            </p>
            <ul className="space-y-2 text-[#6B7280] leading-relaxed">
              <li>
                <strong className="text-[#1A1A2E]">Correo electrónico:</strong>{" "}
                <a
                  href="mailto:hola@landforge.digital"
                  className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
                >
                  hola@landforge.digital
                </a>
              </li>
              <li>
                <strong className="text-[#1A1A2E]">Sitio web:</strong>{" "}
                <Link
                  href="/"
                  className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
                >
                  https://landforge.digital
                </Link>
              </li>
            </ul>
          </section>

          <hr className="border-[#E0AAFF] mb-6" />

          {/* ── Links a otras páginas legales ── */}
          <div className="text-sm text-[#6B7280] space-y-1">
            <p>Consulta también:</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              <li>
                <Link
                  href="/aviso-legal"
                  className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
                >
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="text-[#9D4EDD] underline hover:text-[#7B2CBF] transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

        </article>
      </main>
    </div>
  );
}
