import "./style.css";
import MenuBar from "../../components/MenuBar";
import EventItem from "../../components/Event";
import { useRef, useState, useEffect } from "react";
import ImageTeam from "/Justin-eProjects-Tech-Intra-Picks-20.jpg";
import Image from "/Events & Sponsorships.svg";
import Image2 from "/Group 39.svg";
import Launch from "/Launch Party Post.png";
const Events = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    // const eventItemsRef = useRef([]);

    // Sample event data
    const events = [
        {
            image: Launch,
            title: "Launch Party",
            description: `The Launch Party is the official kick-off event for eProjects! This networking event is your chance to step into the world of innovation, creativity and leadership. Whether you’re a seasoned entrepreneur or just curious, this is a perfect opportunity to meet like-minded students, connect with future founders and industry leaders, and get an inside look at what the club has planned for the upcoming academic year.`,
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
