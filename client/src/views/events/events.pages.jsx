import React from "react";
import Event from "../../assets/event.png";
import "./events.styles.css";
import Eventcard from "../../components/eventcard/eventcard.components";

const Events = () => {
  return (
    <div className="event-page">
      <div className="row-event">
        <div className="event-bg">
          <img className="host-event-bg" src={Event} alt="" />
          <div className="overlay-bg"></div>
          <div className="overlay-bg"></div>
        </div>
        <div className="event-header">
          <h1>Events</h1>
        </div>
        <div className="events-list">
          <Eventcard />
        </div>
      </div>
    </div>
  );
};

export default Events;
