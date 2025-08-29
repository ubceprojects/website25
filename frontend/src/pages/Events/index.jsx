import "./style.css";
import MenuBar from "../../components/MenuBar";
import EventItem from "../../components/Event";
import { useRef, useState, useEffect } from "react";
import Image from "/Events & Sponsorships.png";

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
            title: "Coming Soon",
            description: "",
        },
    ];

    return (
        <div className="events-container" ref={containerRef}>
            <MenuBar />

            <div className="events-upcoming-container">
                <div className="events-upcoming-heading">
                    <h2>Upcoming Events</h2>
                </div>

                <div
                    className="timeline-line"
                    style={{
                        height: `${(events.length - 1) * 58}vw`,
                    }}
                ></div>

                <div className="events-list">
                    {events.map((event, index) => (
                        <div key={index} className={`event-wrapper ${index === activeIndex ? "active" : ""}`}>
                            <div className="timeline-circle"></div>
                            <EventItem index={index} image={event.image} title={event.title} description={event.description} setActiveIndex={setActiveIndex} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="sponsor-photo">
                <img src={Image} alt="My pic" style={{ width: "100%", height: "auto" }} />
                <button className="sponsor-button">Become a Sponsor →</button>
            </div>
        </div>
    );
};

export default Events;
