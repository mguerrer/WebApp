import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clases de Arte",
  description:
    "Clases de acrílico, acuarela, óleo, vellón, manualidades y artesanías. Presencial o remoto.",
};

const classTypes = [
  {
    title: "Acrílico",
    description:
      "Técnicas de pintura acrílica sobre lienzo, madera y papel. Desde nivel básico hasta avanzado.",
  },
  {
    title: "Acuarela",
    description:
      "Exploración de la acuarela: transparencias, veladuras, técnicas húmedas y secas.",
  },
  {
    title: "Óleo",
    description:
      "Pintura al óleo clásica y contemporánea. Manejo del color, la luz, la materialidad y textura.",
  },
  {
    title: "Vellón Bidimensional",
    description:
      "Técnica de fieltro con vellón sobre plano. Creación de cuadros y piezas decorativas textiles.",
  },
  {
    title: "Vellón Tridimensional",
    description:
      "Escultura en vellón. Modelado de figuras y objetos tridimensionales con fibras naturales.",
  },
  {
    title: "Manualidades y Artesanías",
    description:
      "Talleres variados de técnicas manuales: papel hecho a mano, cerámica, tejido y más.",
  },
];

export default function ClasesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Clases de Arte
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-stone-500 dark:text-stone-400">
          Clases de acrílico, acuarela, óleo, vellón bidimensional o
          tridimensional, manualidades y artesanías. Modalidad presencial o
          remoto.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {classTypes.map((clase) => (
          <div
            key={clase.title}
            className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900/50"
          >
            <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
              {clase.title}
            </h3>
            <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
              {clase.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-stone-200 bg-stone-100/50 p-6 text-center dark:border-stone-800 dark:bg-stone-900/30">
        <p className="mb-1 text-sm font-medium text-stone-500 dark:text-stone-400">
          Modalidades
        </p>
        <p className="text-lg font-semibold text-[var(--foreground)]">
          Presencial · Remoto
        </p>
        <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
          Consulta por horarios, valores y materiales incluidos a través de la{" "}
          <a
            href="/contacto"
            className="font-medium text-[var(--foreground)] underline underline-offset-2"
          >
            sección de contacto
          </a>
          .
        </p>
      </div>
    </div>
  );
}
