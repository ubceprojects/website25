import "./style.css";
import MenuBar from "../../components/MenuBar";
import EventItem from "../../components/Event";
import { useRef, useState, useEffect } from "react";
import ImageTeamAccelerate from "/Doris_eProjects_Accelerate_2025-46.jpg";
import Image2 from "/Group 39.svg";
import Launch from "/LaunchParty.jpg";
import Image3 from "/Sunny-EPROJ-Innovate-38.jpg";
import EL from "/EL.jpg";
import Workshop from "/workshop.png";
const Events = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        document.title = "Events & Sponsorships | UBC eProjects";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Join UBC eProjects events including Launch Party, Innovate, Accelerate, and Executive Lounge. Connect with entrepreneurs and explore sponsorship opportunities.');
        }
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://ubceprojects.netlify.app/events');
        }
    }, []);
    // const eventItemsRef = useRef([]);

    // Sample event data
    const events = [
        {
            image: Launch,
            title: "Launch Party",
            description: `The Launch Party is the official kick-off event for eProjects! This networking event is your chance to step into the world of innovation, creativity and leadership. Whether you’re a seasoned entrepreneur or just curious, this is a perfect opportunity to meet like-minded students, connect with future founders and industry leaders, and get an inside look at what the club has planned for the upcoming academic year.`,
            link: "", // Replace with actual RSVP link
        }, 
        {
            image: Image3,
            title: "Innovate",
            description: `An evening that brings together student entrepreneurs, creators, and innovators to showcase ideas, connect with peers, and gain insights from industry professionals`,
            link: "", // Replace with actual RSVP link
        },
        {
            image: ImageTeamAccelerate,
            title: "Accelerate",
            description: "ACCELERATE is your chance to explore the world of fast-paced Silicon Valley startups! Meet delegates from prestigious accelerator and incubator programs that can help you get your ideas off the ground 🚀🤩",
            link: null, // No link for coming soon events
        },
        {
            image: EL,
            title: "Executive Lounge Night",
            description: "Executive Lounge is your chance to network with entrepreneurs, CEOs, and high-ranking executives in a formal setting. Enjoy gourmet appetizers, live jazz music, and a sophisticated venue while discovering new opportunities for professional growth.",
            link: null, // No link for coming soon events
        },
        {
            image: Workshop,
            title: "Workshop Series Coming Soon..",
            description: "Don’t miss this opportunity to meet THREE successful entrepreneurs who have decades of experience 3 Industries. 3 Weeks. ⚡️ Wednesday, January 21: Health & Biotech with Anthony Fejes ⚡️ Thursday, January 29: The Future of Cleantech with Claude Letourneau⚡️ Wednesday, February 4: Artificial Intelligence with Sev Geraskin",
            link: null, // No link for coming soon events
        },

    ];

    return (
        <div className="events-container" ref={containerRef}>
            <MenuBar />

            <div className="events-upcoming-container">
                <div className="events-upcoming-heading">
                    <h2>Upcoming Events</h2>
                </div>

                <div className="events-list">
                    <div className="timeline-line"></div>
                    {events.map((event, index) => (
                        <div key={index} className={`event-wrapper ${index === activeIndex ? "active" : ""}`}>
                            <div className="timeline-circle"></div>
                            <EventItem index={index} image={event.image} title={event.title} description={event.description} setActiveIndex={setActiveIndex} link={event.link} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="sponsors-section">
                <img src={Image2} alt="Events & Sponsorships" />
                {/* Text content */}
                <div className="sponsors-text">
                    <h2>Our Sponsors</h2>
                    <p>Thank you to our sponsors for supporting UBC eProjects' mission and goals!</p>
                </div>

                {/* Sponsor button */}
                <div className="sponsor-button-container">
                    <a href="https://forms.gle/WxBdWx9Uq8DCYziB9" target="_blank" rel="noopener noreferrer">
                        <button className="sponsor-button">Become a Sponsor →</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Events;
