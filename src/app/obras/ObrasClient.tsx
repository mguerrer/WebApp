"use client";

import { useState } from "react";
import Image from "next/image";
import type { ObraImage, ObraCategory } from "@/lib/images";
import { Lightbox } from "@/components/Lightbox";

export function ObrasClient({
  obras,
  subcategories,
}: {
  obras: ObraImage[];
  subcategories: { id: "todas" | ObraCategory; label: string }[];
}) {
  const [active, setActive] = useState<"todas" | ObraCategory>("todas");
  const [selected, setSelected] = useState<ObraImage | null>(null);

  const filtered =
    active === "todas"
      ? obras
      : obras.filter((o) => o.category === active);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {subcategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === cat.id
                ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                : "bg-stone-200 text-stone-600 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filtered.map((obra) => (
          <button
            key={obra.id}
            onClick={() => setSelected(obra)}
            className="group mb-6 w-full overflow-hidden rounded-xl bg-stone-100 text-left dark:bg-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          >
            <div className="relative overflow-hidden">
              <Image
                src={obra.src}
                alt={obra.alt}
                width={800}
                height={800}
                className="w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 p-4">
              <h3 className="font-semibold text-[var(--foreground)]">
                {obra.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                {obra.description}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-xs font-medium text-stone-400 dark:text-stone-500">
                {obra.technique && <span>{obra.technique}</span>}
                {obra.dimensions && <span>{obra.dimensions}</span>}
                
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <Lightbox
          image={{
            id: selected.id,
            src: selected.src,
            alt: selected.alt,
            title: selected.title,
            description: selected.description,
            category: "pintura" as const,
            width: 800,
            height: 800,
          }}
          onClose={() => setSelected(null)}
          onPrev={
            filtered.indexOf(selected) > 0
              ? () => setSelected(filtered[filtered.indexOf(selected) - 1])
              : undefined
          }
          onNext={
            filtered.indexOf(selected) < filtered.length - 1
              ? () => setSelected(filtered[filtered.indexOf(selected) + 1])
              : undefined
          }
        />
      )}
    </>
  );
}
