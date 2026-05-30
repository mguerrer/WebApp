import Image from "next/image";
import type { GalleryImage } from "@/lib/images";

export function ImageCard({
  image,
  onSelect,
}: {
  image: GalleryImage;
  onSelect: (image: GalleryImage) => void;
}) {
  return (
    <button
      onClick={() => onSelect(image)}
      className="group relative overflow-hidden rounded-xl bg-stone-200 dark:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-sm font-semibold">{image.title}</h3>
        <p className="text-xs text-white/70">{image.description}</p>
      </div>
    </button>
  );
}
