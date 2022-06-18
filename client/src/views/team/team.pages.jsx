import React from "react";
import Teamcard from "../../components/teamcard/teamcard.components";
import Cake from "../../assets/team.png";
import "./team.styles.css";
import Team1 from "../../assets/suvangi.jpeg";
import Team2 from "../../assets/Nikhita.jpeg";
import Team3 from "../../assets/siddhu.jpeg";

const Team = () => {
  return (
    <div className="team-profile">
      <div className="our-team">
        <div className="event-bg">
          <img className="host-event-bg" src={Cake} alt="" />
          <div className="overlay-bg"></div>
          <div className="overlay-bg"></div>
        </div>
        <h1 className="solid">Our Team :)</h1>
      </div>
      <div className="team-row">
        <Teamcard
          imgurl={Team1}
          name="Suvangi Paul"
          giturl="https://github.com/suvangipaul"
          linkurl="https://www.linkedin.com/in/suvangi-p-705955209/"
        />
        <Teamcard
          imgurl={Team2}
          name="Barat Nikhita"
          giturl="https://github.com/NikhitaBarat"
          linkurl="https://www.linkedin.com/in/nikhita-barat/"
        />
        <Teamcard
          imgurl={Team3}
          name="Siddhant Prateek"
          giturl="https://github.com/siddhantprateek"
          linkurl="https://www.linkedin.com/in/siddhantprateek/"
        />
      </div>
    </div>
  );
};

export default Team;
