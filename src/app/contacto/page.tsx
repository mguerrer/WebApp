import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Laura Harfagar para obras, clases o pedidos personalizados",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contacto
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-stone-500 dark:text-stone-400">
          Para consultas, pedidos personalizados, encargos de obras o
          inscripciones a clases y talleres.
        </p>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900/50 sm:p-10">
        <dl className="space-y-8">
          <div>
            <dt className="text-xs font-medium tracking-wider uppercase text-stone-400">
              Artista
            </dt>
            <dd className="mt-1 text-lg font-semibold text-[var(--foreground)]">
              Laura Harfagar
            </dd>
          </div>

          <div>
            <dt className="text-xs font-medium tracking-wider uppercase text-stone-400">
              Teléfono
            </dt>
            <dd className="mt-1">
              <a
                href="tel:+56989212932"
                className="text-lg text-[var(--foreground)] underline underline-offset-2 hover:text-stone-600 dark:hover:text-stone-300"
              >
                +56 9 8921 2932
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-xs font-medium tracking-wider uppercase text-stone-400">
              Correo
            </dt>
            <dd className="mt-1">
              <a
                href="mailto:lau.harfagar@gmail.com"
                className="text-lg text-[var(--foreground)] underline underline-offset-2 hover:text-stone-600 dark:hover:text-stone-300"
              >
                lau.harfagar@gmail.com
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-xs font-medium tracking-wider uppercase text-stone-400">
              Instagram
            </dt>
            <dd className="mt-1">
              <a
                href="https://instagram.com/pulsocrudo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[var(--foreground)] underline underline-offset-2 hover:text-stone-600 dark:hover:text-stone-300"
              >
                @pulsocrudo
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-10 border-t border-stone-200 pt-8 dark:border-stone-800">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            ¿Prefieres que te contacte? Déjame tus datos y te escribiré a la
            brevedad.
          </p>
        </div>
      </div>
    </div>
  );
}
