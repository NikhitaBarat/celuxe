import React from "react";
import "./about.styles.css";
import { Mid, Profile } from "../../assets";

const About = () => {
  return (
    <div className="about-page">
      <div className="blank-space"></div>
      <div className="white-bg-contents">
        <div className="about-top">
          <h1>Goals</h1>
          <img className="fish-image" src={Profile} alt="" />
        </div>
        <div className="goals-content">
          <div>
            <p>
              1. Increase Supplemental Nutrition Assistance Program (SNAP)
              enrollment for eligible students.
            </p>
            <p>
              2. Improve the accessibility of affordable, sustainably sourced
              and nutritious food on campus.
            </p>
            <p>
              3. Raise awareness of the existing campus resources and services.
            </p>
            <p>
              4. Improving and streamlining current food related programs and
              evaluating the campus food environment .
            </p>
          </div>
        </div>

        <div className="full-dishimage">
          <img className="dishimage" src={Mid} alt="" />
          <div className="hunger-div">
            <div className="hg-border">
              <div className="hf">
                <h1>HUNGER</h1>
                <h1>FREE</h1>
              </div>
              <h1>CAMPUS</h1>
            </div>
          </div>
        </div>

        <div className="goals-content">
          <div className="about-goal-content">
            <p>
              In 2020 and 2021, we set out to explore students’ lived
              experiences of food insecurity. Along with 5 student
              co-researchers, trained in qualitative methods and with their own
              experience of food insecurity, we conducted 94 interviews with
              self-identified food insecure students attending 13 different
              higher education institutions across Victoria, Australia. Although
              many were international students, we had a diverse range of
              participants from those in completing their undergraduate degrees,
              graduates and PhD students. The research focused on understanding
              students’ relationship to food, both at home, on campus and around
              their neighbourhoods. We asked students about how food insecurity
              affected their friendships, peer and personal relationships, and
              their studies. We also found out about the interconnectedness of
              students’ food struggles with other areas of their lives including
              housing, finances and paid work. Although the research was planned
              prior to the pandemic, we quickly found that COVID-19 was a
              significant contributor to many students’ food woes, especially
              international students. Students employed a range of resourceful
              and creative tactics to cope with their everyday struggle.
              Finally, we made sure to ask students about how they thought we
              might begin to tackle the problem. These ideas formed the basis of
              our toolkit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
