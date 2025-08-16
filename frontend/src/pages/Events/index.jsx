import "./style.css";
import MenuBar from "../../components/MenuBar";
import EventItem from "../../components/Event";
import { useRef, useState, useEffect } from "react";

const Events = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    // const eventItemsRef = useRef([]);

    // Sample event data
    const events = [
        {
            image: "about-heading.png",
            title: "Launch Party",
            description: "Join us to kick off the year! Meet new members, network, and enjoy food and games.",
        },
        {
            image: "https://cdn.prod.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg",
            title: "Hackathon",
            description: "A 24-hour hackathon to build innovative solutions with your team.",
        },

        {
            image: "about-heading.png",
            title: "Workshop",
            description: "Learn new skills from industry experts.",
        },
        {
            image: "https://cdn.prod.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg",
            title: "Networking Event",
            description: "Connect with professionals in your field.",
        },
    ];

    return (
        <div className="events-container" ref={containerRef}>
            <MenuBar />

            <div className="events-upcoming-container">
                <div className="events-upcoming-heading">
                    <h2>Upcoming Events</h2>
                </div>

                {/* Timeline elements */}
                <div className="timeline-line"></div>

                <div className="events-list">
                    {events.map((event, index) => (
                        <div key={index} className={`event-wrapper ${index === activeIndex ? "active" : ""}`}>
                            <div className="timeline-circle"></div>
                            <EventItem index={index} image={event.image} title={event.title} description={event.description} setActiveIndex={setActiveIndex} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="events-bottom-curve"></div>

            <div className="events-sponsors-section">
                <h2>Our Sponsors</h2>
                <p>Thank you to our sponsors for supporting UBC eProjects' mission and goals!</p>
                <div className="events-sponsors-logos">
                    <div className="sponsor-logo">versionone</div>
                    <div className="sponsor-logo">MOTIONGREY</div>
                </div>
                <button className="events-sponsor-button">Become a Sponsor →</button>
            </div>
        </div>
    );
};

export default Events;
