import "./style.css";
import MenuBar from "../../components/MenuBar";
import GoalCard from "../../components/GoalCard";
import Gallery from "../../components/Gallery";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "About Us | UBC eProjects - Entrepreneurship Club";
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about UBC eProjects, one of UBC\'s top entrepreneurship clubs. Discover our journey, goals, and how we support student entrepreneurs in Vancouver.');
        }
        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://eprojectsubc.com/about');
        }
    }, []);

    return (
        <div className="about-container">
            <MenuBar />

            <div className="about-heading">
                <h1>About Us</h1>
            </div>

            <div className="about-subheading">
                <p>
                As one of UBC's top clubs, eProjects serves as a vital launchpad for emerging student entrepreneurs. We cultivate a dynamic community where aspiring innovators gain access to crucial resources, unparalleled opportunities, and a robust network of highly skilled and diverse industry leaders. Our goal is to empower these emerging talents to not only launch but truly thrive within Vancouver's vibrant startup landscape. This year, we're building on our proven track record with ambitious growth initiatives, expanding our reach and elevating our programs to deliver exceptional value for both our students and our partners.
                </p>
            </div>

            <div className="about-journey-container">
                <div className="about-journey-heading">
                    <h2>Our Journey</h2>
                </div>

                <div className="about-journey-path"></div>

                <div className="about-journey-card journey-1">
                    <div className="journey-number number-1 mobile-number">1</div>
                    <div className="journey-heading">2015 Founded</div>
                    <div className="journey-content">Twelve friends came together to find ways to connect young entrepreneurs.</div>
                    <div className="journey-number number-1">1</div>
                </div>

                <div className="about-journey-card journey-2">
                    <div className="journey-number number-2 mobile-number">2</div>
                    <div className="journey-heading">2017 First Recognition</div>
                    <div className="journey-content">Awarded CUS Top Small Club, recognizing the impact and energy of our growing community.</div>
                    <div className="journey-number number-2">2</div>
                </div>

                <div className="about-journey-card journey-3">
                    <div className="journey-number number-3 mobile-number">3</div>
                    <div className="journey-heading">2025 Expanding Horizons</div>
                    <div className="journey-content">With 150+ members and 5+ new events, we launched Pitchathon with Microsoft and proudly brought home the Top Small Club.</div>
                    <div className="journey-number number-3">3</div>
                </div>
            </div>

            <div className="about-goals-container">
                <div className="about-goals-heading">
                    <h1>Our Goals for 2025/26</h1>
                </div>
                <div className="about-goals-content">
                    <GoalCard number={1} heading="Industry Immersion and Access" content="Foster stronger connections between students and entrepreneurs, offering firsthand industry insights and valuable relationships." />
                    <GoalCard
                        number={2}
                        heading="Scaling Signature Events"
                        content="Expand our presence by maintaining flagship events and introducing large-scale programs to reach wider audiences and enhance networking. "
                    />
                    <GoalCard number={3} heading="Interdisciplinary Collaboration" content="Forge stronger partnerships with various clubs and campus services to underscore entrepreneurship's universal relevance across all academic and business fields." />
                </div>
            </div>

            {/* <div className="about-award-container">
                <div className="award-heading">
                    <h1>Top Small Club</h1>
                </div>
                <div className="award-right"></div>
            </div> */}

            <div className="about-gallery-container">
                <div className="gallery-heading">
                    <h1>Our Gallery</h1>
                </div>
                <Gallery />
            </div>
        </div>
    );
};

export default About;
