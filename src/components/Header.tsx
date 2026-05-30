"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/obras", label: "Mis Obras" },
  { href: "/clases", label: "Clases" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[var(--background)]/80 backdrop-blur-md dark:border-stone-800/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tighter text-[var(--foreground)]"
        >
          PULSOCRUDO
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-500 transition-colors hover:text-[var(--foreground)] dark:text-stone-400 dark:hover:text-stone-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-8 items-center justify-center sm:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="sr-only">Menú</span>
          <svg
            className="size-5 text-stone-600 dark:text-stone-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-stone-200/80 px-4 pb-4 pt-2 dark:border-stone-800/80 sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-500 transition-colors hover:text-[var(--foreground)] dark:text-stone-400 dark:hover:text-stone-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
