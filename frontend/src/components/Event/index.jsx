import "./style.css";
import { useEffect, useRef } from "react";

const EventItem = ({ index, image, title, description, setActiveIndex }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const rect = itemRef.current.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const screenCenter = window.innerHeight / 2;

            // how close the item is to center
            const distance = Math.abs(itemCenter - screenCenter);

            // small threshold so it's only "active" when near center
            if (distance < rect.height / 2) {
                console.log("active");
                setActiveIndex(index);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run on mount to check initial position

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="event-item" ref={itemRef}>
            <div className="event-image-container">
                <img src={image} alt={title} className="event-image" />
            </div>
            <div className="event-content">
                <h3 className="event-title">{title}</h3>
                <p className="event-description">{description}</p>
            </div>
        </div>
    );
};

export default EventItem;
