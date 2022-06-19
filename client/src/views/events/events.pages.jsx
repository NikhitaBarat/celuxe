import React, { useEffect, useState } from "react";
import Event from "../../assets/event.png";
import "./events.styles.css";
import Eventcard from "../../components/eventcard/eventcard.components";
import axios from "../../config/axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("/api/event/all")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);
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
          {events.map((event) => (
            <Eventcard
              event_name={event.event_name}
              description={event.description}
              date={event.date}
              venue={event.venue}
              hostedby={event.hostedby}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
