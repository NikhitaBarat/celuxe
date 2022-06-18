import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./hostcard.styles.css";

const Hostcard = () => {
  const { user } = useAuth0()
  return (
    <div className="hostcard">
      <div className="green-spreader"></div>
      <div className="green-bg"></div>
      <div className="host-top-card-container">
        <div className="host-contents">
          <div className="host-img-name">
            <img
              className="host-image"
              src={ user ? user.picture : "https://upload.wikimedia.org/wikipedia/commons/9/9a/MattIPv4_Avatar.png"}
              alt=""
            />
            { user ? <h3>{user.given_name} {user.family_name}</h3> : <h3>No Name</h3>}
          </div>

          <div className="points-container">
            <h3>Points</h3>
            <p>468</p>
          </div>
        </div>
      </div>
      <div className="profile-status">
        <div className="event-stats evt-comp">
          <p>Events Completed</p>
          <span>12</span>
        </div>
        <div className="event-stats evt-sche">
          <p>Events Scheduled</p>
          <span>4</span>
        </div>
      </div>
    </div>
  );
};

export default Hostcard;
