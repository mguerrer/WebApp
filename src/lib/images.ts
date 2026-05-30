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
  year?: string;
  dimensions?: string;
}

const obras: ObraImage[] = [
  {
    id: "p1",
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    alt: "Pintura abstracta en lienzo",
    title: "Latido Terrenal",
    description: "Acrílico sobre lienzo. Composición que explora las texturas orgánicas y el movimiento visceral.",
    category: "pintura",
    technique: "Acrílico sobre lienzo",
    year: "2025",
    dimensions: "100 × 80 cm",
  },
  {
    id: "p2",
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    alt: "Retrato al óleo",
    title: "Mirada de Tierra",
    description: "Óleo sobre madera. Retrato que captura la esencia cruda del ser.",
    category: "pintura",
    technique: "Óleo sobre madera",
    year: "2024",
    dimensions: "60 × 80 cm",
  },
  {
    id: "p3",
    src: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=800&q=80",
    alt: "Acuarela floral",
    title: "Efímero",
    description: "Acuarela sobre papel. Serie de estudios botánicos con pigmentos naturales.",
    category: "pintura",
    technique: "Acuarela sobre papel",
    year: "2025",
    dimensions: "40 × 50 cm",
  },
  {
    id: "p4",
    src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    alt: "Técnica mixta abstracta",
    title: "Caos Primigenio",
    description: "Técnica mixta con temple al huevo y pigmentos minerales sobre lienzo.",
    category: "pintura",
    technique: "Técnica mixta / Temple al huevo",
    year: "2024",
    dimensions: "120 × 90 cm",
  },
  {
    id: "p5",
    src: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
    alt: "Paisaje al óleo",
    title: "Cordillera Interior",
    description: "Óleo sobre lienzo. Paisaje de la memoria con capas de color y luz.",
    category: "pintura",
    technique: "Óleo sobre lienzo",
    year: "2025",
    dimensions: "80 × 100 cm",
  },
  {
    id: "p6",
    src: "https://images.unsplash.com/photo-1571115764595-644e7a10abf6?w=800&q=80",
    alt: "Abstracto geométrico",
    title: "Estructura del Gesto",
    description: "Acrílico y carboncillo sobre papel. Estudio de la línea y el vacío.",
    category: "pintura",
    technique: "Acrílico y carboncillo sobre papel",
    year: "2024",
    dimensions: "50 × 65 cm",
  },
  {
    id: "a1",
    src: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=80",
    alt: "Escultura en vellón",
    title: "Nido de Lana",
    description: "Vellón tridimensional. Pieza tejida a mano con lana natural teñida.",
    category: "artesania",
    technique: "Vellón tridimensional",
    year: "2025",
    dimensions: "40 × 40 × 20 cm",
  },
  {
    id: "a2",
    src: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?w=800&q=80",
    alt: "Artesanía textil",
    title: "Textura Ancestral",
    description: "Vellón bidimensional con fibras naturales. Inspirado en técnicas precolombinas.",
    category: "artesania",
    technique: "Vellón bidimensional",
    year: "2024",
    dimensions: "60 × 80 cm",
  },
  {
    id: "a3",
    src: "https://images.unsplash.com/photo-1591101763687-12a4a90a8e1f?w=800&q=80",
    alt: "Cerámica artesanal",
    title: "Recipiente del Alma",
    description: "Artesanía en gres esmaltado a mano. Serie de piezas utilitarias con diseño orgánico.",
    category: "artesania",
    technique: "Gres esmaltado",
    year: "2025",
    dimensions: "25 × 20 cm",
  },
  {
    id: "a4",
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    alt: "Manualidad decorativa",
    title: "Mandala Textil",
    description: "Tejido decorativo con lana y fibras vegetales. Pieza única hecha a mano.",
    category: "artesania",
    technique: "Tejido artesanal",
    year: "2024",
    dimensions: "50 cm diámetro",
  },
  {
    id: "a5",
    src: "https://images.unsplash.com/photo-1593012048886-b0c988fac9f4?w=800&q=80",
    alt: "Artesanía de papel",
    title: "Pliegues del Ser",
    description: "Escultura en papel hecho a mano con fibras vegetales y pigmentos naturales.",
    category: "artesania",
    technique: "Papel artesanal / Escultura",
    year: "2025",
    dimensions: "30 × 30 × 15 cm",
  },
  {
    id: "a6",
    src: "https://images.unsplash.com/photo-1605729656580-0b1a3545e28d?w=800&q=80",
    alt: "Artesanía mixta",
    title: "Raíz y Forma",
    description: "Técnica mixta artesanal con maderas recicladas, fibras y pigmentos naturales.",
    category: "artesania",
    technique: "Técnica mixta artesanal",
    year: "2024",
    dimensions: "45 × 35 × 10 cm",
  },
];

export function getObrasByCategory(category: ObraCategory): ObraImage[] {
  return obras.filter((o) => o.category === category);
}

export function getAllObras(): ObraImage[] {
  return obras;
}

export function getFeaturedObras(): ObraImage[] {
  return obras.slice(0, 4);
}
