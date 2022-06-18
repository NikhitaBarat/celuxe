import React from "react";
import { Child, Plate } from "../../assets";
import "./home.style.css";

const Home = () => {
  return (
    <div className="page">
      <div className="home-head-content">
        <div className="intro-content">
          <h2 className="solid trans-from-top">TOGETHER, WE</h2>
          <h2 className="outline trans-from-left">CAN CREATE</h2>
          <h2 className="outline trans-from-left">WORTH WITH</h2>
          <h1 className="solid trans-from-buttom">NO HUNGER</h1>
        </div>
        <img className="plate trans-from-right" src={Plate} alt="" />
      </div>

      <div className="solve-hunger-section">
        <div className="solve-content">
          <h2 className="agenda">AGENDA</h2>
          <p>
            Prior to the onset of the Covid-19 pandemic, between 30-40% of
            university students in were food insecure. Now the gap has widened.
            This requires us to go beyond just eliminating hunger, and ensure
            that all students have easy access to nutritious meals and the
            knowledge of the assistance services available to them.
          </p>
          <div className="more-about-it">
            <span>More about agenda </span>   
            <span>+</span>
          </div>
        </div>
        <div className="quote solid">
            <h1>HELP</h1>
            <h1>SOLVE</h1>
            <div className="red-outline trans-from-left">
                <h1 className="trans-from-right">HUNGER</h1>
            </div>
        </div>
        <img className="child" src={Child} alt="" />
      </div>


      <div className="home-stats">
        <div className="stats-content">
            <h1>3000+</h1>
            <p>children die every day from hunger.</p>
        </div>

        <div className="stats-content">
            <h1>60%</h1>
            <p>Women account for 60 percent of India’s hungry population.</p>
        </div>

        <div className="stats-content">
            <h1>30%</h1>
            <p>Around 30 percent of newborns die from lack of nutrition.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
