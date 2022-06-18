import React from "react";
import { HostEventBg } from "../../assets";
import { HostCard } from "../../components";
import "./host.styles.css";

const Host = () => {
  return (
    <div className="host-page">
      <div className="event-bg">
        <img className="host-event-bg" src={HostEventBg} alt="" />
        <div className="overlay-bg"></div>
        <div className="overlay-bg"></div>
      </div>
      <div className="create-event-container">
        <div className="go-back-icon">
        
        </div>
        <div className="input-event-container">
          <p className="logo form-logo">
            <p>
              CEL<span>UXE</span>
            </p>
          </p>
          <form action="">
            <div className="event-title event-inp-fields">
              <h2>Event Name</h2>
              <input
                type="text"
                className="event-inputs"
                placeholder="Enter name of the event"
              />
            </div>
            <div className="event-date event-inp-fields">
              <h2>Date</h2>
              <input type="date" className="event-inputs" />
            </div>
            <div className="event-title event-inp-fields">
              <h2>Enter co-hosting members email</h2>
              <input
                type="email"
                placeholder="Enter name of the event"
                className="event-inputs"
              />
            </div>
            <div className="event-title event-inp-fields">
              <h2>Description</h2>
              <textarea
                type="email"
                placeholder="Enter event description"
                className="event-inputs event-textarea"
              />
            </div>
            <button type="submit" className="schedule-btn">
              Schedule Event
            </button>
          </form>
        </div>
        <div className="hosting-user-container">
          <HostCard />
        </div>
        </div>
        {/* host card */}
    </div>
  );
};

export default Host;
