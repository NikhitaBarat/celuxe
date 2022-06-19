import React, { useState } from "react";
import { HostEventBg } from "../../assets";
import { HostCard } from "../../components";
import "./host.styles.css";
import axios from "../../config/axios";
import { useAuth0 } from "@auth0/auth0-react";

const Host = () => {
  const [eventName, setEventName] = useState("");
  const [date, setEventDate] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuth0()

  const scheduleEvent = async () => {
    const resp =  await axios.post('/api/event/create', {
      event_name: eventName,
      date: date,
      hostedby: user.given_name,
      venue: venue,
      description: description
    })
    console.log(resp.data)
  }

  return (
    <div className="host-page">
      <div className="event-bg">
        <img className="host-event-bg" src={HostEventBg} alt="" />
        <div className="overlay-bg"></div>
        <div className="overlay-bg"></div>
      </div>
      <div className="create-event-container">
        <div className="go-back-icon"></div>
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
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                type="text"
                className="event-inputs"
                placeholder="Enter name of the event"
              />
            </div>
            <div className="event-date event-inp-fields">
              <h2>Date</h2>
              <input
                value={date}
                onChange={(e) => setEventDate(e.target.value)}
                type="date"
                className="event-inputs"
              />
            </div>
            <div className="event-title event-inp-fields">
              <h2>Venue</h2>
              <input
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                type="text"
                placeholder="Enter name of the event"
                className="event-inputs"
              />
            </div>
            <div className="event-title event-inp-fields">
              <h2>Description</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="email"
                placeholder="Enter event description"
                className="event-inputs event-textarea"
              />
            </div>
            <button type="submit" className="schedule-btn" onSubmit={() => scheduleEvent()}>
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
