import React from "react";
import "./eventcard.styles.css";
const Eventcard = ({ event_name, description, date, venue, hostedby }) => {
  return (
    <div className="eventcard-container">
      <div className="eventcard-content">
        <div className="eventcard-header">
          <div className="eventcard-header-text">
            <h1>{event_name}</h1>
            <div className="description">
              <p>
               {description}
              </p>
              <div className="eventcard__right">
                <span>Date: {date}</span>
                <span>Venue: {venue}</span>
              </div>
            </div>
          </div>
          <div className="booking-btn">
            <h2>{hostedby}</h2>
            <button className="book-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;
