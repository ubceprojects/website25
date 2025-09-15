import "./style.css";
import MenuBar from "../../components/MenuBar";
import EventItem from "../../components/Event";
import { useRef, useState, useEffect } from "react";
import Image from "/Events & Sponsorships.png";
import ImageTeam from "/Justin-eProjects-Tech-Intra-Picks-20.jpg";

const Events = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    // const eventItemsRef = useRef([]);

    // Sample event data
    const events = [
        {
            image: "about-heading.png",
            title: "Launch Party",
            description: `3...2...1...It's time for takeoff 🚀 Join us at eProjects' first event of the year: LAUNCH PARTY!✨ Meet real-life entrepreneurs 🎯 Discover our mission + vision for the year

🍽️ Free food + awesome giveaways!

🗓️ When: September 18, 2025 | 5:30pm to 8:30pm
📍 Where: Abdul Ladha Science Centre
👔 Dress code: Smart casual
🏷️ Price: FREE

RSVP now by clicking the photo!`,
            link: "https://luma.com/pakkqm8p", // Replace with actual RSVP link
        },
        {
            image: ImageTeam,
            title: "Coming Soon",
            description: "",
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

            <div className="sponsor-photo">
                <img src={Image} alt="My pic" style={{ width: "100%", height: "auto" }} />
                <a href="https://forms.gle/WxBdWx9Uq8DCYziB9" target="_blank" rel="noopener noreferrer">
                    <button className="sponsor-button">Become a Sponsor →</button>
                </a>
            </div>
        </div>
    );
};

export default Events;
