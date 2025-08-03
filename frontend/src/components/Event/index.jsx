import React from "react";
import "./style.css";

const EventItem = ({ image, title, description }) => {
  return (
    <div className="event-item">
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