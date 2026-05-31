import obrasData from "@/data/obras.json";

export type Category = string;
export type ObraCategory = "pintura" | "artesania";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: Category;
  width: number;
  height: number;
}

export interface ObraImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: ObraCategory;
  technique?: string;
  dimensions?: string;
}

function loadObras(): ObraImage[] {
  const data = obrasData as {
    pinturas: {
      id: string;
      imagen: string;
      titulo: string;
      descripcion: string;
      tecnica?: string;
      dimensiones?: string;
    }[];
    artesanias: {
      id: string;
      imagen: string;
      titulo: string;
      descripcion: string;
    }[];
  };

  const pinturas: ObraImage[] = data.pinturas.map((p) => ({
    id: p.id,
    src: p.imagen,
    alt: p.titulo,
    title: p.titulo,
    description: p.descripcion,
    category: "pintura" as ObraCategory,
    technique: p.tecnica,
    dimensions: p.dimensiones,
  }));

  const artesanias: ObraImage[] = data.artesanias.map((a) => ({
    id: a.id,
    src: a.imagen,
    alt: a.titulo,
    title: a.titulo,
    description: a.descripcion,
    category: "artesania" as ObraCategory,
  }));

  return [...pinturas, ...artesanias];
}

const obras = loadObras();

export function getObrasByCategory(category: ObraCategory): ObraImage[] {
  return obras.filter((o) => o.category === category);
}

export function getAllObras(): ObraImage[] {
  return obras;
}

export function getFeaturedObras(count: number = 6): ObraImage[] {
  return obras.filter((o) => o.category === "pintura").slice(0, count);
}
