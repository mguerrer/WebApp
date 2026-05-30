"use client";

import { useState } from "react";
import type { GalleryImage } from "@/lib/images";
import { ImageCard } from "./ImageCard";
import { Lightbox } from "./Lightbox";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onSelect={setSelectedImage}
          />
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrev={
            images.indexOf(selectedImage) > 0
              ? () => setSelectedImage(images[images.indexOf(selectedImage) - 1])
              : undefined
          }
          onNext={
            images.indexOf(selectedImage) < images.length - 1
              ? () => setSelectedImage(images[images.indexOf(selectedImage) + 1])
              : undefined
          }
        />
      )}
    </>
  );
}
