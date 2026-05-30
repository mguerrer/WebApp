---
name: web-dev
description: Use when building, structuring, or reviewing web projects. Covers HTML, CSS, JS/TS, responsive design, performance, accessibility (a11y), SEO, security, image optimization, and framework conventions.
---

# Web Development Best Practices

## General Principles

- **Mobile-first responsive design** — build for smallest screen first, then enhance with `@media (min-width: ...)`.
- **Progressive enhancement** — core content/functionality works without JS; JS enhances UX.
- **Semantic HTML** — use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`.
- **Separation of concerns** — HTML (structure), CSS (presentation), JS (behavior).
- **Accessibility (a11y)** — meet WCAG 2.2 AA minimum. Use correct heading hierarchy (`h1`-`h6`), `alt` text on images, `aria-*` attributes when native HTML is insufficient, `role` only as last resort.
- **Security** — sanitize all user input, use CSP headers, never trust `innerHTML` with user data.

## HTML

- Always `<!DOCTYPE html>` and `<html lang="es">` (or appropriate lang).
- `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- Use `<picture>`, `<source>`, and `srcset` for responsive images with WebP/AVIF formats.
- Lazy-load below-fold images with `loading="lazy"`.
- `<form>`: associate labels with inputs via `for`/`id` or wrapping, validate with constraint API, never rely solely on client-side validation.
- Always set `type` on `<button>` elements (`button`, `submit`, `reset`).

## CSS

- Use CSS custom properties (variables) for theming: `--color-primary`, `--spacing-unit`, etc.
- Prefer modern layout: `grid` for 2D, `flexbox` for 1D. Avoid float-based layouts.
- Use `clamp()`, `min()`, `max()` for fluid typography and spacing.
- `box-sizing: border-box` globally.
- Avoid `!important` — use specificity and cascade intentionally.
- Mobile-first breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- Contain styles with BEM, CSS Modules, or utility-first (Tailwind).
- Optimize: purge unused CSS, use `content-visibility: auto` for off-screen sections.

## JavaScript / TypeScript

- **TypeScript preferred** over plain JS for anything non-trivial.
- `strict: true` in `tsconfig.json`. Avoid `any` — use `unknown` and narrow.
- Use `const` by default, `let` only when rebinding. Never `var`.
- Modern syntax: arrow functions, optional chaining (`?.`), nullish coalescing (`??`), destructuring, spread, template literals.
- Async: prefer `async/await` over raw promises. Handle errors with try/catch, never swallow errors.
- Avoid manipulating DOM directly — use a framework (React, Vue, Svelte).
- Bundle: use Vite for modern builds (fast HMR, tree-shaking, code splitting).
- Lint: ESLint with `@typescript-eslint`, `jsx-ally` (a11y), `import` plugins.
- Format: Prettier with consistent config (single quotes, trailing commas, 2-space indent, 80-100 print width).

## Images

- **Formats**: AVIF (best compression) → WebP → PNG/JPEG as fallback.
- `<picture>` element for format fallback and art-direction.
- `srcset` + `sizes` for resolution switching.
- `loading="lazy"` + `decoding="async"` for below-fold images.
- Always set explicit `width` and `height` to prevent CLS (Cumulative Layout Shift).
- Use `aspect-ratio` CSS property as fallback.
- For icons: inline SVG or SVG sprite sheet. Avoid icon fonts.
- For background images: use `image-set()` in CSS for resolution/format switching.
- Compress: aim for < 100-200 KB per image. Use tools like sharp, squoosh, or service-level optimization.

## Performance (Core Web Vitals)

- **LCP** (Largest Contentful Paint): optimize hero images (preload, compress, serve responsive), avoid render-blocking resources.
- **FID/INP** (Interaction to Next Paint): break up long tasks, use `requestIdleCallback`, debounce/throttle event handlers.
- **CLS** (Cumulative Layout Shift): set explicit dimensions on all media, avoid injecting content above existing content without reserve space.
- Preload critical assets: `<link rel="preload" href="hero.webp" as="image">`.
- Preconnect to third-party origins: `<link rel="preconnect" href="https://fonts.googleapis.com">`.
- Code-split by route with dynamic `import()`.
- Minimize main-thread work: use Web Workers for heavy computation.

## SEO

- Unique `<title>` and `<meta name="description">` per page.
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Cards.
- Semantic heading hierarchy.
- Clean URL structure: `/productos/categoria-zapatos` not `/products.php?id=5&cat=3`.
- `robots.txt` and XML sitemap.
- Structured data (JSON-LD) for breadcrumbs, products, articles, FAQ, etc.

## This Project: WebApp

| Aspect | Choice |
|---|---|
| Framework | **Next.js 16** (App Router) |
| Styling | **Tailwind CSS v4** (`@theme inline`, `@import "tailwindcss"`) |
| Language | **TypeScript** strict mode |
| Images | `next/image` con `remotePatterns` para Unsplash |
| Components | Client Components (`"use client"`) con Server Components donde sea posible |
| Linting | ESLint (`eslint-config-next/core-web-vitals`, `typescript`) |
| Package mgr | npm |

### Estructura actual

```
src/
  app/
    layout.tsx        # Root layout con Header + Footer
    page.tsx          # Home: hero + featured gallery
    globals.css       # Tailwind v4 + variables
    portfolio/
      page.tsx        # Galería completa con filtro
      GalleryPageClient.tsx  # Filtro categorías (client component)
  components/
    Header.tsx        # Nav responsive con menú mobile
    Footer.tsx        # Footer simple
    GalleryGrid.tsx   # Grid de imágenes + lightbox
    ImageCard.tsx     # Card con hover overlay
    Lightbox.tsx      # Modal con navegación (teclado)
  lib/
    images.ts         # Datos de imágenes y helpers
```

### Convenciones del proyecto

- **Categorías**: naturaleza, arquitectura, retrato, urbano, abstracto
- **Imágenes**: desde Unsplash (URLs remotas), configuradas en `next.config.ts` → `images.remotePatterns`
- **Layout**: sticky header, footer, max-width 6xl, padding responsive
- **Lightbox**: modal fullscreen con navegación por teclado (← → ESC) y clicks
- **Rutas**: `/` (hero + destacadas), `/portfolio` (galería completa con filtro)
- **Build**: estático (`○ Static`), todo prerendered
- **No uses** `params` como objeto directo — en Next.js 16 es `Promise`, usa `const { slug } = await params`
- **No uses** `searchParams` como objeto directo — también es `Promise`

### Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build producción |
| `npm start` | Servir build |
| `npm run lint` | ESLint |
