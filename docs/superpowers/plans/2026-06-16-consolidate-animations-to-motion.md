# Consolidate Animations to Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port `MenuBar` and `Masonry` from GSAP to Motion, then remove the `gsap` dependency, with no intended change to look and feel.

**Architecture:** Declarative Motion (`motion.div`, `whileInView`, `whileHover`, `AnimatePresence`, `variants`). The app is already wrapped in `MotionConfig reducedMotion="user"`, so ported components inherit reduced-motion handling. Masonry tiles move from GSAP-supplied coordinates to CSS-driven positioning so layout is correct independent of animation.

**Tech Stack:** React 19, Vite 7, `motion` v12.

> **No test runner in this project** (scripts are dev/build/lint/preview; lint config is broken pre-existing). Verification per task is: production build passes, `grep` confirms no `gsap` left, and manual checks by running the app. There are no unit tests to write; animation behavior is verified visually.

---

## File Structure

- `src/components/Masonry/index.jsx` — modify: drop GSAP, position tiles via style, Motion entrance + hover.
- `src/components/Masonry/Masonry.css` — modify: give `.list` real height handling; overlay hover via CSS.
- `src/components/MenuBar/index.jsx` — modify: drop GSAP + dead code, Motion mobile menu.
- `src/components/MenuBar/style.css` — modify: fix `.menu-bar` default transform; let Motion own the mobile slide.
- `package.json` / `package-lock.json` — modify: remove `gsap`.

---

## Task 1: Port Masonry to Motion

**Files:**
- Modify: `src/components/Masonry/index.jsx`
- Modify: `src/components/Masonry/Masonry.css`

- [ ] **Step 1: Compute a container height and an entrance-offset helper.**

In the component, after the `grid` `useMemo`, derive the gallery height so the absolutely-positioned tiles reserve space:

```js
const containerHeight = grid.length ? Math.max(...grid.map((i) => i.y + i.h)) : 0;
```

Replace `getInitialPosition` (which used `window.innerWidth/Height`) with an offset helper returning a transform delta from the tile's resting position:

```js
const getEntranceOffset = (item) => {
    switch (animateFrom) {
        case "top": return { x: 0, y: -80 };
        case "bottom": return { x: 0, y: 80 };
        case "left": return { x: -80, y: 0 };
        case "right": return { x: 80, y: 0 };
        case "center": return {
            x: (width / 2) - (item.x + item.w / 2),
            y: (containerHeight / 2) - (item.y + item.h / 2),
        };
        default: return { x: 0, y: 40 };
    }
};
```

- [ ] **Step 2: Remove the GSAP machinery.**

Delete: `import { gsap } from "gsap";`, the entire scroll `useLayoutEffect` (the `handleScroll` + `window.scrollY > 2700` block), `hasMounted`/`hasAnimatedRef`, and `handleMouseEnter`/`handleMouseLeave`. Keep `useMedia`, `useMeasure`, `preloadImages`, the `grid` `useMemo`, and `imagesReady`.

- [ ] **Step 3: Render tiles as `motion.div` positioned by style.**

```jsx
import { motion } from "motion/react";
// ...
<div ref={containerRef} className="list" style={{ height: containerHeight }}>
    {grid.map((item, index) => {
        const offset = getEntranceOffset(item);
        return (
            <motion.div
                key={item.id}
                className="item-wrapper"
                style={{ left: item.x, top: item.y, width: item.w, height: item.h }}
                initial={{ opacity: 0, x: offset.x, y: offset.y, filter: blurToFocus ? "blur(10px)" : "blur(0px)" }}
                whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * stagger }}
                whileHover={scaleOnHover ? { scale: hoverScale } : undefined}
            >
                <div className="item-img" style={{ backgroundImage: `url(${item.img})` }}>
                    {colorShiftOnHover && (
                        <div className="color-overlay">{item.title}</div>
                    )}
                </div>
            </motion.div>
        );
    })}
</div>
```

Note: `imagesReady` no longer gates the animation (whileInView handles timing); keep the `preloadImages` effect but it only needs to avoid layout shift. The `color-overlay`'s inline style object moves to CSS (next step) so a CSS `:hover` can drive it.

- [ ] **Step 4: Move the color overlay to CSS hover.**

In `Masonry.css` add:

```css
.color-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: var(--font-custom);
    font-size: 1.3vw;
    text-transform: capitalize;
}
.item-wrapper:hover .color-overlay { opacity: 1; }
```

(Removes the need for JS hover handlers on the overlay; the inline style block on `.color-overlay` in JSX is deleted.)

- [ ] **Step 5: Verify.**

```bash
npm run build
grep -rn "gsap" src/components/Masonry
```
Expected: build succeeds; grep returns nothing. Then run the app (`npm run dev`), scroll to the gallery: tiles fade/blur in staggered as the section enters view, hover scales a tile and shows the overlay.

- [ ] **Step 6: Commit.**

```bash
git add src/components/Masonry/index.jsx src/components/Masonry/Masonry.css
git commit -m "refactor(masonry): port GSAP reveal + hover to Motion (whileInView)"
```

---

## Task 2: Port MenuBar to Motion

**Files:**
- Modify: `src/components/MenuBar/index.jsx`
- Modify: `src/components/MenuBar/style.css`

- [ ] **Step 1: Remove GSAP + dead code in `index.jsx`.**

Delete: `import gsap from "gsap";`, the `type` prop (change signature to `const MenuBar = () => {`), the `type === "home"` entrance `useEffect`, and the inline `style={{ transform: ... sessionStorage ... }}` on the `.menu-bar` div (remove the `style` prop entirely). Keep `navigate`, `isMobileMenuOpen` state, and `handleNav`.

- [ ] **Step 2: Fix the desktop menu-bar default in `style.css`.**

The inline transform we just deleted was the only thing showing the bar. Change line 14:

```css
/* .menu-bar */
transform: translateY(25%);   /* was: translateY(-100%) */
```

The mobile `transform: translateY(0) !important` override stays.

- [ ] **Step 3: Let Motion own the mobile slide; stop the CSS `right` slide.**

In `style.css`, change `.mobile-menu` so it sits at its final spot and Motion's `x` transform does the sliding:

```css
/* .mobile-menu */
right: 0;            /* was: right: -100% */
/* delete: transition: right 0.4s ease; */
```
Delete the `.mobile-menu.open { right: 0; }` rule (no longer used).

- [ ] **Step 4: Render the mobile menu with AnimatePresence + staggered variants.**

```jsx
import { motion, AnimatePresence } from "motion/react";

const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0, transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
};
```

Replace the static `.mobile-menu` block with:

```jsx
<AnimatePresence>
    {isMobileMenuOpen && (
        <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
        >
            <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <motion.div className="menu-item hover" variants={itemVariants} onClick={() => handleNav("/")}>Home</motion.div>
            <motion.div className="menu-item hover" variants={itemVariants} onClick={() => handleNav("/about")}>About Us</motion.div>
            <motion.div className="menu-item hover" variants={itemVariants} onClick={() => handleNav("/team")}>Meet the Team</motion.div>
            <motion.div className="menu-item hover" variants={itemVariants} onClick={() => handleNav("/events")}>Events & Sponsors</motion.div>
            <motion.div className="menu-socials" variants={itemVariants}>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-solid fa-envelope"></i>
            </motion.div>
        </motion.div>
    )}
</AnimatePresence>
```

The desktop `.menu-bar` div stays a plain `<div>` (no Motion, no animation, no `style` prop).

- [ ] **Step 5: Verify.**

```bash
npm run build
grep -rn "gsap\|sessionStorage\|type ===" src/components/MenuBar
```
Expected: build succeeds; grep returns nothing. Run the app at a mobile width: the desktop bar is visible at its normal spot; tapping the hamburger slides the panel in from the right with items staggering; closing slides it out.

- [ ] **Step 6: Commit.**

```bash
git add src/components/MenuBar/index.jsx src/components/MenuBar/style.css
git commit -m "refactor(menubar): port mobile menu to Motion, drop GSAP + dead entrance"
```

---

## Task 3: Remove the gsap dependency

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Confirm nothing imports gsap.**

```bash
grep -rn "gsap" src
```
Expected: nothing.

- [ ] **Step 2: Uninstall.**

```bash
npm uninstall gsap
```

- [ ] **Step 3: Verify the build with the dependency gone.**

```bash
npm run build
```
Expected: build succeeds.

- [ ] **Step 4: Commit.**

```bash
git add package.json package-lock.json
git commit -m "chore(deps): remove gsap (consolidated onto Motion)"
```

---

## Self-Review

- **Spec coverage:** Masonry in-view reveal (Task 1) ✓; Masonry hover (Task 1) ✓; MenuBar mobile menu in Motion + delete dead entrance/type/sessionStorage (Task 2) ✓; remove gsap dep (Task 3) ✓; declarative style throughout ✓; reduced-motion via existing MotionConfig ✓.
- **Risks handled:** Masonry positioning now CSS-driven with a real `.list` height (Task 1); MenuBar default-transform exposure fixed (Task 2 Step 2); CSS `right` slide vs Motion reconciled (Task 2 Step 3).
- **Naming consistency:** `getEntranceOffset`, `containerHeight`, `menuVariants`/`itemVariants` used consistently; props (`animateFrom`, `stagger`, `scaleOnHover`, `hoverScale`, `blurToFocus`, `colorShiftOnHover`) unchanged so `Gallery`'s call site stays valid.
