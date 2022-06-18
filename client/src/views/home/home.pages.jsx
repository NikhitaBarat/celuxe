import React from "react";
import { Plate } from "../../assets";
import "./home.style.css";

const Home = () => {
  return (
    <div className="page">
      <div className="home-head-content">
        <div className="intro-content">
          <h2 className="solid">TOGETHER, WE</h2>
          <h2 className="outline">CAN CREATE</h2>
          <h2 className="outline">WORTH WITH</h2>
          <h1 className="solid">NO HUNGER</h1>
        </div>
        <img className="plate" src={Plate} alt="" />
      </div>
    </div>
  );
};

export default Home;
