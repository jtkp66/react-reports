import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a to="/register" className="nav-link">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a to="/login" className="nav-link">
            Login
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              My American Homestay
            </a>
          </div>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a to="/register" className="nav-link">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a to="/login" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
