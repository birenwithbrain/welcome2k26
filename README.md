# ZENITH: A Brighter Tomorrow

A responsive Next.js recreation inspired by the supplied desktop/mobile reference. The generated hero artwork is used as a separate background image, while headings, cards, decorative rules, the central flower illustration, and foreground petal cutouts remain independent layers.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Artwork and typography

- `public/images/hero-bg.webp` is the optimized panoramic background used by the hero and echoed subtly in the event section.
- `public/images/hero-bg-original.png` preserves the generated high-resolution source artwork.
- `public/images/flower-orb.svg` is an independent vector illustration for the luminous flower.
- `public/images/petal.svg` is a reusable transparent petal cutout.
- Display type uses Bodoni Moda with Cormorant Garamond as fallbacks; utility/navigation text uses Manrope.

The supplied reference is a flattened screenshot, so the original artwork and exact proprietary typeface cannot be extracted from it. The generated scene and fonts are close visual interpretations.
