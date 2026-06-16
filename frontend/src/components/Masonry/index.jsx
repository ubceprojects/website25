import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

import "./Masonry.css";

const useMedia = (queries, values, defaultValue) => {
    const get = () => values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

    const [value, setValue] = useState(get);

    useEffect(() => {
        const handler = () => setValue(get);
        queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
        return () => queries.forEach((q) => matchMedia(q).removeEventListener("change", handler));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queries]);

    return value;
};

const useMeasure = () => {
    const ref = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size];
};

const preloadImages = async (urls) => {
    await Promise.all(
        urls.map(
            (src) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = img.onerror = () => resolve();
                })
        )
    );
};

const Masonry = ({ items, ease = "power3.out", duration = 0.6, stagger = 0.05, animateFrom = "bottom", scaleOnHover = true, hoverScale = 0.95, blurToFocus = true, colorShiftOnHover = false }) => {
    const columns = useMedia(["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)", "(min-width:400px)"], [5, 4, 3, 2], 1);

    const [containerRef, { width }] = useMeasure();

    const grid = useMemo(() => {
        if (!width) return [];

        const colHeights = new Array(columns).fill(0);
        const columnWidth = width / columns;
        const gap = 20; // Gap between items
        const padding = 30; // Padding around items

        // Calculate total grid width to center it
        const totalGridWidth = (columns * columnWidth) + ((columns - 1) * gap);
        const startOffset = (width - totalGridWidth) / 2;

        return items.map((child) => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = startOffset + (columnWidth * col) + (col * gap);
            const height = child.height / 2;
            const y = colHeights[col];

            colHeights[col] += height + gap;

            return { ...child, x, y, w: columnWidth - padding, h: height };
        });
    }, [columns, items, width]);

    // The tiles are absolutely positioned, so the container needs an explicit
    // height to reserve their vertical space.
    const containerHeight = grid.length ? Math.max(...grid.map((i) => i.y + i.h)) : 0;

    // Transform offset (relative to a tile's resting position) that each tile
    // animates in from. "center" converges every tile from the container middle.
    const getEntranceOffset = (item) => {
        switch (animateFrom) {
            case "top":
                return { x: 0, y: -80 };
            case "bottom":
                return { x: 0, y: 80 };
            case "left":
                return { x: -80, y: 0 };
            case "right":
                return { x: 80, y: 0 };
            case "center":
                return {
                    x: width / 2 - (item.x + item.w / 2),
                    y: containerHeight / 2 - (item.y + item.h / 2),
                };
            default:
                return { x: 0, y: 40 };
        }
    };

    // Warm the image cache so tiles don't pop in as they reveal.
    useEffect(() => {
        preloadImages(items.map((i) => i.img));
    }, [items]);

    return (
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
                            {colorShiftOnHover && <div className="color-overlay">{item.title}</div>}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Masonry;
