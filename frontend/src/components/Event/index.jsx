import "./style.css";
import { useEffect, useRef } from "react";

const EventItem = ({ index, image, title, description, setActiveIndex, link }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const rect = itemRef.current.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const screenCenter = window.innerHeight / 2;

            // how close the item is to center
            const distance = Math.abs(itemCenter - screenCenter);

            // For the first event (index 0), be more lenient with activation
            // Also check if we're at the top of the page
            const isAtTop = window.scrollY < 100;
            const threshold = (index === 0 && isAtTop) ? rect.height * 1.5 : rect.height / 2;

            if (distance < threshold) {
                setActiveIndex(index);
            }
        };

        // Use throttled scroll for better performance
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledHandleScroll);
        handleScroll(); // run on mount to check initial position

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [index, setActiveIndex]);

    return (
        <div className="event-item" ref={itemRef}>
            <div className="event-image-container">
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={title} className="event-image" loading="lazy" decoding="async" />
                    </a>
                ) : (
                    <img src={image} alt={title} className="event-image" loading="lazy" decoding="async" />
                )}
            </div>
            <div className="event-content">
                <h3 className="event-title">{title}</h3>
                <p className="event-description">{description}</p>
            </div>
        </div>
    );
};

export default EventItem;
