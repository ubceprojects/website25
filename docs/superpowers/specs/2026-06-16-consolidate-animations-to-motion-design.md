# Consolidate animations to Motion (drop GSAP)

- Date: 2026-06-16
- Branch: perf-optimization-investi
- Status: Approved design

## Goal

Standardize all animation on the `motion` library and remove `gsap` from the
bundle. Same look and feel, one fewer animation engine shipped to every visitor.

## Context

Two animation libraries currently ship:

- `motion` — used by `Home`, `GridBackground`, and the app-level `MotionConfig`.
- `gsap` — used only by `MenuBar` and `Masonry`.

`@gsap/react` (an unused helper) was already removed. Consolidating means porting
the two GSAP components to Motion, then deleting the `gsap` dependency.
`MotionConfig reducedMotion="user"` is already wrapped around the app, so
reduced-motion is handled centrally and ported components inherit it.

## Decisions

1. **Masonry reveal**: animate when the gallery scrolls into view (Motion
   in-view detection), replacing the hardcoded `window.scrollY > 2700` threshold.
   Fixes the case where short viewports never cross 2700 and the gallery never
   reveals.
2. **MenuBar dead home-entrance**: delete it, along with the unused `type` prop
   and the render-time `sessionStorage` access. Port only the live mobile
   slide-in menu.
3. **Porting style**: declarative Motion (`variants` / `whileInView` /
   `whileHover`), not the imperative `animate()` API.

## Design

### Masonry (`src/components/Masonry/index.jsx`)

- Position each tile via inline styles (`left`/`top`/`width`/`height`) from the
  existing grid `useMemo`, so layout is correct independent of animation state.
  This is the change that removes the 2700px fragility.
- Each tile becomes a `motion.div`:
  - Entrance: `initial` = `{ opacity: 0, <x/y offset per animateFrom>, filter: "blur(10px)" }`
    to `whileInView` = `{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }`, with
    `viewport={{ once: true }}` and `transition={{ delay: index * stagger, duration: 0.8, ease }}`.
  - Hover: `whileHover={{ scale: hoverScale }}`; the color overlay's opacity is
    driven by hover state.
- Remove: the `gsap` import, the scroll `useLayoutEffect` + listener + 2700
  threshold, and `getInitialPosition`'s window-coordinate branches (replaced by
  direction offsets relative to the resting position).
- Keep: `useMedia`, `useMeasure`, the grid `useMemo`, and `preloadImages`.

### MenuBar (`src/components/MenuBar/index.jsx`)

- Mobile slide-in menu: `AnimatePresence` to mount/unmount it, a `motion.div`
  sliding `x: "100%" -> "0%"`, and parent/child `variants` with `staggerChildren`
  for the menu items and social icons. Motion owns the transform; CSS keeps the
  static styling.
- Remove: the dead home-entrance `useEffect`, the `type === "home"` branch, the
  inline `sessionStorage` transform, the now-unused `type` prop, and the `gsap`
  import.

### Dependency

- Remove `gsap` from `package.json` and the lockfile.

## Verification

- Production build passes (`npm run build`).
- `grep -rn "gsap" src` returns nothing.
- Manual: mobile menu slides in with staggered items; gallery tiles reveal with
  blur-to-focus on scroll-into-view; tiles scale on hover; reduced-motion users
  get opacity-only (no transforms).

## Risks

- Masonry positioning switch (now CSS-driven) — verify the rendered layout
  matches the grid math, since the grid already computes exact coordinates.
- MenuBar's existing CSS (`.mobile-menu` transform, `.open`) can fight Motion —
  Motion owns the transform, CSS keeps static styling only.
- GSAP eases (`power3.out`, `power2.out`) map to near-equivalent Motion
  cubic-beziers; the feel is very close, not byte-identical.

## Out of scope

- The SPA to static-prerender migration (separate effort).
- Other perf items (hero WebP conversion, font subsetting, orphan images, build
  config, responsive images).
