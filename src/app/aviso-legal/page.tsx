import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de LandForge. Información del titular, propiedad intelectual y condiciones de uso del sitio web.",
  alternates: {
    canonical: "https://landforge.digital/aviso-legal",
  },
  openGraph: {
    title: "Aviso Legal",
    description:
      "Aviso legal de LandForge. Información del titular, propiedad intelectual y condiciones de uso del sitio web.",
    url: "https://landforge.digital/aviso-legal",
  },
};

export default function AvisoLegalPage() {
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
            <li className="text-[#1A1A2E] font-medium">Aviso Legal</li>
          </ol>
        </nav>

        {/* ── Encabezado ── */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Aviso Legal
        </h1>
        <p className="text-sm text-[#6B7280] mb-12">
          Última actualización: 28 de marzo de 2026
        </p>

        <div className="space-y-10 leading-relaxed text-[#1A1A2E]/90">

          {/* ── 1. Datos identificativos ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              1. Datos identificativos del titular
            </h2>
            <p className="mb-4">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
              Servicios de la Sociedad de la Información y de Comercio Electrónico
              (LSSI-CE), se informa al usuario de los siguientes datos del titular del
              sitio web:
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
                <span className="font-semibold">Nombre de dominio:</span>{" "}
                <a
                  href="https://landforge.digital"
                  className="text-[#9D4EDD] hover:underline"
                >
                  landforge.digital
                </a>
              </li>
            </ul>
          </section>

          {/* ── 2. Objeto del sitio web ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              2. Objeto del sitio web
            </h2>
            <p>
              LandForge es una plataforma SaaS (Software como Servicio) que permite a
              agencias de marketing y profesionales crear landing pages de alta
              conversión mediante inteligencia artificial. El sitio web
              landforge.digital tiene por objeto informar sobre los servicios ofrecidos,
              facilitar el acceso a la plataforma y proporcionar contenido de valor
              relacionado con la optimización de conversiones, landing pages y marketing
              digital.
            </p>
          </section>

          {/* ── 3. Propiedad intelectual e industrial ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              3. Propiedad intelectual e industrial
            </h2>
            <p className="mb-4">
              Todos los contenidos del sitio web, incluyendo a título enunciativo pero
              no limitativo: textos, fotografías, gráficos, imágenes, iconos, código
              fuente, diseño, arquitectura de navegación, bases de datos, nombres
              comerciales, logotipos, marcas y demás signos distintivos, están protegidos
              por los correspondientes derechos de propiedad intelectual e industrial de
              LandForge o de sus legítimos titulares.
            </p>
            <p className="mb-4">
              Queda expresamente prohibida la reproducción, distribución, comunicación
              pública, transformación o cualquier otra forma de explotación, total o
              parcial, de los contenidos de este sitio web sin la autorización previa y
              por escrito de LandForge.
            </p>
            <p>
              <strong>Contenido generado por los usuarios:</strong> las landing pages y
              cualquier otro contenido creado por los usuarios a través de la plataforma
              LandForge son propiedad de sus respectivos autores. LandForge no reclama
              ningún derecho de propiedad sobre el contenido generado por los usuarios,
              sin perjuicio de la licencia de uso necesaria para la prestación del
              servicio conforme a los términos aplicables.
            </p>
          </section>

          {/* ── 4. Condiciones de uso ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              4. Condiciones de uso
            </h2>
            <p className="mb-4">
              El acceso y uso de este sitio web atribuye la condición de usuario e
              implica la aceptación plena y sin reservas de todas y cada una de las
              disposiciones incluidas en este Aviso Legal. El usuario se compromete a
              utilizar el sitio web y sus servicios de conformidad con la ley, el
              presente Aviso Legal y las buenas costumbres generalmente aceptadas.
            </p>
            <p className="mb-2">
              En particular, el usuario se compromete a abstenerse de:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#1A1A2E]/85">
              <li>
                Utilizar los servicios y contenidos del sitio web con fines ilícitos,
                contrarios a lo establecido en este Aviso Legal, lesivos de los derechos
                e intereses de terceros, o que de cualquier forma puedan dañar,
                inutilizar, sobrecargar o deteriorar el sitio web o impedir su normal
                utilización.
              </li>
              <li>
                Intentar acceder, manipular o utilizar las áreas restringidas del
                servidor, del sistema informático o de las redes de servicio conectadas
                al sitio web sin autorización.
              </li>
              <li>
                Realizar ingeniería inversa, descompilar, desensamblar o de cualquier
                otro modo intentar derivar el código fuente del software que compone la
                plataforma LandForge.
              </li>
              <li>
                Introducir o difundir virus informáticos, gusanos, troyanos o cualquier
                otro código malicioso destinado a interrumpir, destruir o limitar la
                funcionalidad de cualquier software o hardware.
              </li>
              <li>
                Suplantar la identidad de otros usuarios o de terceros para acceder a la
                plataforma o a sus servicios.
              </li>
            </ul>
          </section>

          {/* ── 5. Exclusión de responsabilidad ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              5. Exclusión de responsabilidad
            </h2>
            <p className="mb-4">
              LandForge no garantiza la disponibilidad continua e ininterrumpida de los
              servicios del sitio web, quedando exonerada de cualquier responsabilidad
              derivada de posibles daños o perjuicios causados por la falta de
              disponibilidad o continuidad del sitio web o de sus servicios, incluyendo
              fallos en el acceso a las distintas páginas o aquellas desde las que se
              prestan los servicios.
            </p>
            <p className="mb-4">
              LandForge se reserva el derecho de interrumpir el acceso al sitio web, así
              como la prestación de cualquiera de los servicios, en cualquier momento y
              sin previo aviso, ya sea por motivos técnicos, de seguridad, de
              mantenimiento, por caídas de suministro eléctrico o por cualquier otra
              causa justificada.
            </p>
            <p>
              LandForge no se hace responsable de los posibles errores de seguridad que
              se puedan producir por el uso de ordenadores infectados con virus
              informáticos, ni de las consecuencias que pudieran derivarse del mal
              funcionamiento del navegador o del uso de versiones no actualizadas del
              mismo.
            </p>
          </section>

          {/* ── 6. Enlaces a terceros ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              6. Enlaces a terceros
            </h2>
            <p className="mb-4">
              El sitio web de LandForge puede contener enlaces (links) a otros sitios de
              Internet que son gestionados por terceros. LandForge no ejerce ningún tipo
              de control sobre dichos sitios y contenidos, y no asume responsabilidad
              alguna por los contenidos, informaciones o servicios que pudieran aparecer
              en dichos sitios, los cuales tienen una función meramente informativa.
            </p>
            <p>
              La existencia de dichos enlaces no constituye en ningún caso una
              recomendación, patrocinio, invitación o respaldo de LandForge hacia los
              sitios enlazados, y LandForge no será responsable del resultado obtenido a
              través de dichos enlaces ni de las consecuencias derivadas del acceso a los
              mismos por parte de los usuarios.
            </p>
          </section>

          {/* ── 7. Protección de datos ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              7. Protección de datos
            </h2>
            <p>
              LandForge se compromete al cumplimiento de la normativa vigente en materia
              de protección de datos personales, en particular el Reglamento (UE)
              2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018,
              de 5 de diciembre, de Protección de Datos Personales y garantía de los
              derechos digitales (LOPDGDD). Para conocer en detalle cómo tratamos tus
              datos personales, consulta nuestra{" "}
              <Link
                href="/politica-privacidad"
                className="text-[#9D4EDD] font-semibold hover:underline"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </section>

          {/* ── 8. Legislación aplicable y jurisdicción ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              8. Legislación aplicable y jurisdicción
            </h2>
            <p className="mb-4">
              El presente Aviso Legal se rige en todos y cada uno de sus extremos por la
              legislación española. Para la resolución de cualquier controversia que
              pudiera derivarse del acceso o uso de este sitio web, LandForge y el
              usuario acuerdan someterse expresamente a los Juzgados y Tribunales de{" "}
              San Cristóbal de La Laguna (Santa Cruz de Tenerife), con renuncia
              expresa a cualquier otro fuero que pudiera corresponderles, salvo que la
              legislación aplicable disponga imperativamente otro fuero.
            </p>
            <p>
              En el caso de que el usuario tenga su domicilio fuera de España, LandForge
              y el usuario se someten, con renuncia expresa a cualquier otro fuero, a los
              Juzgados y Tribunales de{" "}
              San Cristóbal de La Laguna (Santa Cruz de Tenerife, España).
            </p>
          </section>

          {/* ── 9. Modificaciones ── */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1A1A2E]">
              9. Modificaciones del Aviso Legal
            </h2>
            <p>
              LandForge se reserva el derecho de modificar el presente Aviso Legal en
              cualquier momento, con el fin de adaptarlo a novedades legislativas,
              jurisprudenciales o de práctica empresarial. Cualquier modificación será
              publicada en esta misma página. El uso continuado del sitio web tras la
              publicación de los cambios constituirá la aceptación de los mismos por
              parte del usuario. Se recomienda al usuario revisar periódicamente este
              Aviso Legal.
            </p>
          </section>

        </div>

        {/* ── Enlace de vuelta ── */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link
            href="/politica-privacidad"
            className="text-[#9D4EDD] font-semibold hover:underline"
          >
            Política de Privacidad
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
