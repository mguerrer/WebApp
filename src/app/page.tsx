import Link from "next/link";
import Image from "next/image";
import { GalleryGrid } from "@/components/GalleryGrid";
import { obraImagesToGallery } from "@/lib/adapters";
import { getFeaturedObras } from "@/lib/images";

export default function Home() {
  const featured = getFeaturedObras(6);

  return (
    <>
      <section className="relative flex min-h-[80dvh] items-center justify-center overflow-hidden">
        <Image
          src={featured[0].src}
          alt=""
          fill
          className="object-cover brightness-[0.35]"
          priority
          loading="eager"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-white/60">
            Laura Harfagar
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            PULSOCRUDO
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70">
            Arte pictórico y artesanía analógica. Obras exclusivas donde el
            gesto humano y la materia sustituyen cualquier intervención
            tecnológica.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/obras"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-stone-900 transition-all hover:bg-white/90"
            >
              Ver Obras
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="prose-artist">
          <h1 className="mb-8 text-[var(--foreground)]">Sobre la Artista</h1>
          <p className="mb-6 text-lg leading-relaxed">
            Soy un artista profesional con trayectoria y estudios académicos que
            elaboro obras exclusivas de alta calidad técnica con diferentes
            materiales y estéticas.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            <strong>PULSO CRUDO</strong> alude al trabajo que realizo, el cual
            prescinde por completo del entorno digital, rigiéndose
            exclusivamente por procesos analógicos y de ejecución manual. Cada
            pieza es fruto de un proceso puramente táctil y físico que canaliza
            ideas y emociones, donde el gesto humano y la materia sustituyen
            cualquier intervención tecnológica.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Mi propuesta es la práctica del arte que siente y conecta, evocando
            desde sensaciones terrenales, energías vitales, necesidades urgentes
            de expresar, impulsos que laten con fuerza, hasta lo etéreo, lo
            intangible o espiritual, incorporándolo a un estado natural y
            desnudo que pretende ser honesto mostrando una experiencia intuitiva
            y visceral de mi oficio como artista.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Manejo la reproducción de imágenes, fotografías, retratos o
            pinturas. Realizo creaciones de estilo personal en pintura sobre
            lienzo, madera y papel. Domino variados insumos artísticos como el
            acrílico, óleo, acuarela, témpera con huevo, técnicas mixtas,
            vellón bidimensional y tridimensional, artesanías y manualidades.
            Ofrezco productos en stock de diferentes estilos y recibo pedidos.
            Dicto clases y talleres en modalidad presencial y remoto.
          </p>
        </div>
      </section>

      <section className="border-t border-stone-200/80 bg-stone-100/50 py-20 dark:border-stone-800/80 dark:bg-stone-900/30 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Obras Destacadas
              </h2>
              <p className="mt-2 text-stone-500 dark:text-stone-400">
                Una selección de pinturas
              </p>
            </div>
            <Link
              href="/obras"
              className="hidden text-sm font-medium text-stone-600 underline underline-offset-4 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 sm:block"
            >
              Ver todo →
            </Link>
          </div>
          <GalleryGrid images={obraImagesToGallery(featured)} />
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/obras"
              className="inline-flex h-11 items-center justify-center rounded-full border border-stone-300 px-6 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
            >
              Ver colección completa →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
