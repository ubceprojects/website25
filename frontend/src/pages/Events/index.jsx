import "./style.css";
import MenuBar from "../../components/MenuBar";
import EventItem from "../../components/Event";

const Events = () => {
    
    return (
        <div className="events-container">
            <MenuBar />


            <div className="events-upcoming-container">
                <div className="events-upcoming-heading">
                    <h2>Upcoming Events</h2>
            </div>
                <EventItem
                image= "about-heading.png"
                title="Launch Party"
                description="Join us to kick off the year! Meet new members, network, and enjoy food and games."
                />
                <EventItem
                image="https://cdn.prod.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg"
                title="Hackathon"
                description="A 24-hour hackathon to build innovative solutions with your team."
                />

            </div>

            <div className="events-bottom-curve"></div>

            <div className="events-sponsors-section">
            <h2>Our Sponsors</h2>
            <p>Thank you to our sponsors for supporting UBC eProjects’ mission and goals!</p>
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

