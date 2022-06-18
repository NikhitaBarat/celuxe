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
        <div>
          <Eventcard />
        </div>
      </div>
    </div>
  );
};

export default Events;
