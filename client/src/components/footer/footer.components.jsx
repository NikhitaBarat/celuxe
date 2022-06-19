import React from "react";
import { GithubIcon, LinkedinIcon } from "../../assets";
import "./footer.styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-main-nav-content">
          <div className="footer-content">
            <p className="logo">
              <p>
                CEL<span>UXE</span>
              </p>
            </p>
            <p>Register your campus Pantry</p>
            <p>Snap student eligibility</p>
            <p>Supplemental Nutritional Assitance Program</p>
          </div>
          <div className="footer-content">
            <p></p>
            <p>Team members</p>
            <p>Host Event</p>
            <p>Scheduled Event</p>
          </div>
          <div className="footer-content">
            <div className="socials">
              <p></p>
              <a href="https://github.com/NikhitaBarat/celuxe">
                <img className="footer-icon" src={GithubIcon} alt="" />
              </a>
              <img className="footer-icon" src={LinkedinIcon} alt="" />
            </div>
            <a className="contact-us" href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="buttom-content">
          <p className="madeby">Made with 💘 by Arctic Apes.</p>
          <p>All copyrights reserved ©️ {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
