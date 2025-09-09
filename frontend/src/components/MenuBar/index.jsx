import { useEffect, useRef, useState } from "react";
import "./style.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const MenuBar = ({ type = "" }) => {
    const menuBarRef = useRef(null);
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        if (type === "home") {
            setTimeout(() => {
                gsap.fromTo(menuBarRef.current, { y: -100, opacity: 0 }, { y: 20, opacity: 1, duration: 1, ease: "power2.out" });
                gsap.fromTo(".menu-item", { y: -100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: 0.7, duration: 1, ease: "power2.out" });
            }, 1500);
        }
    }, []);

    // Animate mobile menu opening
    useEffect(() => {
        if (isMobileMenuOpen) {
            const tl = gsap.timeline();
            tl.fromTo(mobileMenuRef.current, { x: "100%" }, { x: "0%", duration: 0.3, ease: "power2.out" })
                .fromTo(".mobile-menu .menu-item", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.15, ease: "power3.out" }, "-=0.2")
                .fromTo(".mobile-menu .menu-socials i", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.3");
        }
    }, [isMobileMenuOpen]);

    const handleNav = (path) => {
        setIsMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <>
            <div
                ref={menuBarRef}
                className="menu-bar"
                style={{
                    transform: type === "home" && !sessionStorage.getItem("home-animated") ? "translateY(-100%)" : "translateY(25%)",
                }}
            >
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
            <div ref={mobileMenuRef} className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
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
                <div className="menu-socials">
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-solid fa-envelope"></i>
                </div>
            </div>
        </>
    );
};

export default MenuBar;
