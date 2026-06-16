# Performance Optimization — UBC eProjects

A multi-agent audit of this Vite + React 19 SPA found the site shipped a **186 MB**
deploy (136 MB of it unoptimized full-resolution photos) and rendered 100% on the
client. This documents what was changed and what remains.

## Results (this pass)

| Metric | Before | After |
|---|---|---|
| Total deploy (`dist/`) | **186 MB** | **~22 MB** |
| `public/` images | 136 MB | 17 MB |
| Biggest single image (`DSCF1798.jpg`) | 27.7 MB | 356 KB |
| Favicon / navbar logo (`logo-min.png`) | 1.6 MB (13226² px) | 56 KB (256 px) |
| Events page image payload | ~39 MB | ~2 MB |
| Team page (was eagerly preloaded) | ~44 MB up front | lazy-loaded, ~40–80 KB each |
| Gallery (18 images) | ~15 MB AVIF | ~1.8 MB WebP |
| JS bundle | 1 chunk, 474 KB | 6 split chunks, largest 274 KB / 89 KB gzip |
| Dead dependencies | 3 | 0 |
| `/assets` caching | none | `immutable, max-age=1y` |

## What changed (and why)

### Images (the dominant win: 136 MB → 17 MB)
- **Recompressed + resized every photo in `public/`** with `sips`: JPEGs capped at
  1600 px (quality 72); team headshots capped at 600 px (they display at ~150 px).
  Filenames are unchanged, so no code references broke.
- **Converted 3 headshot PNGs → JPEG** (`Cathy-Zhou`, `Chirag-Mishra`, `Furqan`) and
  **`cataclyst.png` → WebP**; updated their imports. PNG is wasteful for photos.
- **Converted the 18 gallery AVIFs → WebP** (6000×4000 / ~3 MB each → ~100 KB at
  1400 px) and updated `Gallery/index.jsx` references; removed the AVIFs.
- **Shrank the favicon/logo** from a 1.6 MB, 13226×13289 px PNG to 256 px (and the
  social/OG `logo.png` to 600 px). Fixed its `type="image/svg+xml"` → `image/png`.

### Killed eager image preloading
- Removed `preloadImages()` (`teamData.js` / `MeetTheTeam`) which force-downloaded all
  25 headshots (~44 MB) on mount, and the duplicate gallery preloads in `Gallery` and
  `Masonry`. Added `loading="lazy"` + `decoding="async"` to `ProfileCard` and `Event`
  images so off-screen photos load only when scrolled into view.

### Code-splitting (1 JS chunk → 6)
- `main.jsx` now uses `React.lazy` + `<Suspense>` per route, so a visitor downloads
  only the JS for the page they're on instead of all four pages at once.

### Bundle / build hygiene
- Removed 3 unused dependencies: `@gsap/react`, `clsx`, `tailwind-merge`.
- Fixed 4 `import "../../../public/…"` references in `Events` that caused the same
  images to be shipped twice (~32 MB of duplication).
- Removed a `console.log(window.scrollY)` that ran on every scroll event in `Masonry`.

### Network / delivery
- Added `public/_headers` to cache content-hashed `/assets/*` forever (`immutable`)
  and gallery images for 30 days.
- Added `<link rel="preconnect">` for Google Fonts + FontAwesome origins in `index.html`.

## Still worth doing (not in this pass)

- **Delete two orphan images** — `about-heading.png` (1.45 MB) and `Jonathan-Li.png`
  (1.28 MB) are not referenced anywhere in `src/`. Removing them saves ~2.7 MB.
- **Server-side rendering / prerendering** (e.g. `vite-react-ssg`) — the site is still
  100% client-rendered, so the page is blank until JS loads, which also hurts SEO.
- **Fonts** — 16 legacy `.woff` files (~1 MB); only ~5 weights are used. Subset the used
  weights to `.woff2` and add `font-display: swap`.
- **Consolidate animation libraries** — both GSAP and Motion ship; only one is needed.
- **Build config** — add `manualChunks` vendor splitting, a compression plugin, and a
  bundle visualizer; consider a Vite image plugin (`vite-imagetools`) for responsive
  `srcset` so phones download smaller variants than desktops.
- **SVGO** the 675 KB Home illustration SVG.

> Image originals are recoverable from git history if any recompression looks too soft.
