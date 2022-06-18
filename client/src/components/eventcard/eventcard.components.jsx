import React from "react";
import "./eventcard.styles.css";
const Eventcard = () => {
  return (
    <div className="eventcard-container">
      <div className="eventcard-content">
        <div className="eventcard-header">
          <div className="eventcard-header-text">
            <h1>Strategies for Combating Student Food</h1>
            <div className="description">
              <p>
                Student food insecurity is a widespread, systemic issue
                affecting more and more individuals every year. Due to the
                detrimental effects of food insecurity on the mental wellbeing,
                physical health, and academic performance of students, a growing
                number of ....
              </p>
              <div className="eventcard__right">
                <span>Date: 14 Aug,2002</span>
                <span>Venue: University Community Hall</span>
              </div>
            </div>
          </div>
          <div className="booking-btn">
            <h2>Micheal Angelo</h2>
            <button className="book-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;
