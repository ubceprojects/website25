import "./style.css";
import { motion } from "motion/react";

export function GridBackground() {
    return (
        <motion.div
            className="grid-bg-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="grid-pattern"></div>
            <div className="grid-fade"></div>
        </motion.div>
    );
}
