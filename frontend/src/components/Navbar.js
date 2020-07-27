import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../scss/Main.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbars">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/">
                  Our Services
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/">
                  project
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/">
                  shop
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link text-white" to="/">
                  contact
                </Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right my-2 my-lg-0">
              <li className="nav-item mr-4 ">
                <Link className="text-white" to="#">
                  <span className="register ">Register</span>
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link className="text-white" to="#">
                  <span className="login ">Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
