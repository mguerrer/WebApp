"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/images";

export function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev?.();
          break;
        case "ArrowRight":
          onNext?.();
          break;
      }
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Imagen: ${image.title}`}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 transition-colors hover:text-white"
          aria-label="Cerrar"
        >
          <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            aria-label="Anterior"
          >
            <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            aria-label="Siguiente"
          >
            <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="max-h-[85vh] w-auto rounded-lg object-contain"
          priority
        />

        <div className="absolute -bottom-14 left-0 right-0 text-center text-white">
          <h3 className="text-lg font-semibold">{image.title}</h3>
          <p className="text-sm text-white/60">{image.description}</p>
        </div>
      </div>
    </div>
  );
}
