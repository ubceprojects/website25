import "./style.css";
import MenuBar from "../../components/MenuBar";
import HomeIllus from "../../components/HomeIllus";
import { GridBackground } from "../../components/GridBackground";
import { useEffect } from "react";
import { motion } from "motion/react";

const EASE = [0.4, 0, 0.2, 1];

// Staggered entrance: 0.4s between phases
// T=0      mesh / GridBackground fades in (handled inside GridBackground)
// T=0.4    eyebrow + subtitle + illustration appear together
// T=0.8    title pops + underline scribbles left→right
// T=1.2    button pops

const popUp = (delay) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { delay },
});

const Home = () => {
    useEffect(() => {
        document.title = "UBC eProjects | Entrepreneurship Club at University of British Columbia";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'UBC eProjects is the premier student entrepreneurship club at the University of British Columbia. Join UBC eprojects to connect with entrepreneurs, attend networking events, and build your startup in Vancouver.');
        }
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://eprojectsubc.com/');
        }
    }, []);

    return (
        <div className="home-container">
            <MenuBar />
            <GridBackground />

            <div className="text-container">
                {/* Phase 2 — eyebrow */}
                <motion.p className="home-eyebrow" {...popUp(0.4)}>
                    2025–2026 SCHOOL YEAR
                </motion.p>

                {/* Phase 3 — title pop + underline scribble (same start, different motion) */}
                <motion.div className="home-title" {...popUp(0.8)}>
                    <h1>
                        <span className="club-name">
                            UBC eProjects
                            <svg
                                className="svg-underline"
                                viewBox="0 0 422 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <motion.path
                                    d="M3 8.5C70.5 -2 200 11.5 419 4.5"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
                                />
                            </svg>
                        </span>
                    </h1>
                </motion.div>

                {/* Phase 2 — subtitle with highlight block (fires together with eyebrow + illus) */}
                <motion.div className="home-subtitle" {...popUp(0.4)}>
                    <p>
                        <span className="highlight-mark">
                            Connecting aspiring entrepreneurs and start-up founders in Vancouver.
                        </span>
                    </p>
                </motion.div>

                {/* Phase 4 — button */}
                <motion.a
                    className="home-button"
                    href="https://www.bouncelife.com/events/68ca445c9f698c2d07cb283d"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...popUp(1.2)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Become a Member →
                </motion.a>
            </div>

            {/* Phase 2 — illustration slides in from the right */}
            <motion.div
                className="home-illus"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
            >
                <HomeIllus />
            </motion.div>
        </div>
    );
};

export default Home;
