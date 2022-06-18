import React from "react";
import "./about.styles.css";
import { Mid, Profile } from "../../assets";

const About = () => {
  return (
    <div className="about-page">
      <img src={Profile} className="about-profile-top-image" alt="" />
      <div className="white-bg">
        <div className="white-text">
          <h1>GOALS</h1>
          <p className="goals">
            1. Increase Supplemental Nutrition Assistance Program (SNAP)
            enrollment for eligible students.
            <br />
            2. Improve the accessibility of affordable, sustainably sourced and
            nutritious food on campus. <br />
            3. Raise awareness of the existing campus resources and services.{" "}
            <br />
            4. Improving and streamlining current food related programs and
            evaluating the campus food environment.
          </p>
        </div>
        <div className="position-relative">
          <img src={Mid} className="about-mid-image" alt="" />
          <div className="mid-container">
            <div className="container-border">
              <div>
                <h1>HUNGER</h1>
                <h1>FREE</h1>
              </div>
              <h1>CAMPUS</h1>
            </div>
          </div>
        </div>
        <div className="about-para">
          <p className="about-para">
            In 2020 and 2021, we set out to explore students’ lived experiences
            of food insecurity. Along with 5 student co-researchers, trained in
            qualitative methods and with their own experience of food
            insecurity, we conducted 94 interviews with self-identified food
            insecure students attending 13 different higher education
            institutions across Victoria, Australia. Although many were
            international students, we had a diverse range of participants from
            those in completing their undergraduate degrees, graduates and PhD
            students.
            <br />
            <br />
            The research focused on understanding students’ relationship to
            food, both at home, on campus and around their neighbourhoods. We
            asked students about how food insecurity affected their friendships,
            peer and personal relationships, and their studies. We also found
            out about the interconnectedness of students’ food struggles with
            other areas of their lives including housing, finances and paid
            work. Although the research was planned prior to the pandemic, we
            quickly found that COVID-19 was a significant contributor to many
            students’ food woes, especially international students. Students
            employed a range of resourceful and creative tactics to cope with
            their everyday struggle.
            <br />
            <br />
            Finally, we made sure to ask students about how they thought we
            might begin to tackle the problem. These ideas formed the basis of
            our toolkit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
