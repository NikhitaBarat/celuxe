import React from "react";
import "./header.styles.css";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <a className="logo" href="/">
            <p>
              CEL<span>UXE</span>
            </p>
          </a>
        </div>
        <div className="header-right">
          <ul className="header-option">
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/host">Host</a>
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

            {!isAuthenticated && (
              <li onClick={() => loginWithRedirect()}>Login</li>
            )}
            {isAuthenticated && (
              <li onClick={() => logoutWithRedirect()}>Logout</li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
