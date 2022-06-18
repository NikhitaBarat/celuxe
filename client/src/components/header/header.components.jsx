import React from "react";
import "./header.styles.css";
// import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <a className="logo" href="/">
            <p>CEL<span>UXE</span></p>
          </a>
        </div>
        <div className="header-right">
          <ul className="header-option">
            <li>
              <a href="/">Host</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
