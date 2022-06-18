import React from "react";
import "./teamcard.styles.css";
import GitHub from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";

const Teamcard = ({ imgurl, name, giturl, linkurl }) => {
  return (
    <div className="teamcard-division">
      <div className="team-player">
        <img src={imgurl} alt="" className="member" />
        <p>{name}</p>
        <a href={giturl}>
          <img src={GitHub} alt="" className="social-icon" />
        </a>
        <a href={linkurl}>
          <img src={LinkedIn} alt="" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Teamcard;
