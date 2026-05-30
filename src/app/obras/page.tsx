import type { Metadata } from "next";
import { getAllObras } from "@/lib/images";
import { ObrasClient } from "./ObrasClient";

export const metadata: Metadata = {
  title: "Mis Obras",
  description:
    "Pintura, cuadros, artesanías y creaciones exclusivas de Laura Harfagar",
};

const subcategories = [
  { id: "todas" as const, label: "Todas" },
  { id: "pintura" as const, label: "Pintura, cuadros" },
  { id: "artesania" as const, label: "Artesanías" },
];

export default function ObrasPage() {
  const obras = getAllObras();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Mis Obras
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400">
          Pintura, cuadros, artesanías y creaciones personales
        </p>
      </div>
      <ObrasClient obras={obras} subcategories={subcategories} />
    </div>
  );
}
