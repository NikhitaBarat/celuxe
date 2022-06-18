import React from "react";
import { NewsBG } from "../../assets";
import "./news.styles.css";
const News = () => {
  return (
    <div className="news-page">
      <div className="bg-relative">
        <img className="news-bg" src={NewsBG} alt="" />
        <div className="news-overlays"></div>
        <div className="news-overlays"></div>
      </div>
      <div className="news-header-content">
        <h1>
          Covid spotlights hunger struggles for Australia’s overseas students
        </h1>
        <p>
          Students collaborate to combat food shortages, as Covid widens the gap
          between Australia’s haves and have-nots
        </p>
      </div>
    </div>
  );
};

export default News;
