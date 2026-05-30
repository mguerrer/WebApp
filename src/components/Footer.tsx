import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-sm text-stone-500 dark:text-stone-400 sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-[var(--foreground)] dark:text-stone-200">
            PULSOCRUDO
          </p>
          <p className="text-xs">Laura Harfagar</p>
        </div>
        <div className="flex gap-6">
          <Link
            href="/obras"
            className="text-xs underline-offset-2 hover:underline"
          >
            Obras
          </Link>
          <Link
            href="/clases"
            className="text-xs underline-offset-2 hover:underline"
          >
            Clases
          </Link>
          <Link
            href="/contacto"
            className="text-xs underline-offset-2 hover:underline"
          >
            Contacto
          </Link>
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} PULSOCRUDO
        </p>
      </div>
    </footer>
  );
}
