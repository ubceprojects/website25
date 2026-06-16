import { useState } from "react";
import "./style.css";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

const menuVariants = {
    closed: { x: "100%" },
    open: {
        x: 0,
        transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
};

const MenuBar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNav = (path) => {
        setIsMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <>
            <div className="menu-bar">
                <div className="menu-item menu-logo">
                    <img src="/logo-min.png" alt="Bulb Logo" width={50} height={50} className="rounded-full logo" />
                </div>

                {/* Desktop Nav */}
                <div className="menu-item hover" onClick={() => handleNav("/")}>
                    Home
                </div>
                <div className="menu-item hover" onClick={() => handleNav("/about")}>
                    About Us
                </div>
                <div className="menu-item hover" onClick={() => handleNav("/team")}>
                    Meet the Team
                </div>
                <div className="menu-item hover" onClick={() => handleNav("/events")}>
                    Events & Sponsors
                </div>
                <div className="menu-socials menu-item">
                    <i className="fa-brands fa-linkedin-in" onClick={() => window.open("https://www.linkedin.com/company/ubc-eprojects/", "_blank")}></i>
                    <i className="fa-brands fa-instagram" onClick={() => window.open("https://www.instagram.com/eprojectsubc/", "_blank")}></i>
                    <i className="fa-solid fa-envelope" onClick={() => window.open("mailto:helloeprojectsubc@gmail.com")}></i>
                </div>

                {/* Hamburger for Mobile */}
                <div className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            {/* Mobile Slide-in Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div className="mobile-menu" variants={menuVariants} initial="closed" animate="open" exit="closed">
                        <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <motion.div className="menu-item hover" variants={itemVariants} onClick={() => handleNav("/")}>
                            Home
                        </motion.div>
                        <motion.div className="menu-item hover" variants={itemVariants} onClick={() => handleNav("/about")}>
                            About Us
                        </motion.div>
                        <motion.div className="menu-item hover" variants={itemVariants} onClick={() => handleNav("/team")}>
                            Meet the Team
                        </motion.div>
                        <motion.div className="menu-item hover" variants={itemVariants} onClick={() => handleNav("/events")}>
                            Events & Sponsors
                        </motion.div>
                        <motion.div className="menu-socials" variants={itemVariants}>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-solid fa-envelope"></i>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MenuBar;
