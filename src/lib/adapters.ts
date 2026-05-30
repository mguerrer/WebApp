import type { ObraImage, GalleryImage } from "./images";

export function obraImagesToGallery(obras: ObraImage[]): GalleryImage[] {
  return obras.map((o) => ({
    id: o.id,
    src: o.src,
    alt: o.alt,
    title: o.title,
    description: o.description,
    category: o.category,
    width: 800,
    height: 800,
  }));
}
