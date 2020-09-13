import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import "../scss/Main.scss";
class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="nav navbar-nav navbar-right my-2 my-lg-0">
        <li className="nav-item mr-4 ">
          <Link className="text-white" to="register">
            <span className="register ">Register</span>
          </Link>
        </li>
        <li className="nav-item mr-4">
          <Link className="text-white" to="login">
            <span className="login ">Login</span>
          </Link>
        </li>
      </ul>
    );
    const userLink = (
      <ul className="nav navbar-nav navbar-right my-2 my-lg-0">
        <li className="nav-item mr-4 ">
          <Link className="text-white" to="">
            <span className="register ">Profile</span>
          </Link>
        </li>
        <li className="nav-item mr-4">
          <Link to="" onClick={this.logOut.bind(this)} className="text-white">
            <span className="login ">Logout</span>
          </Link>
        </li>
      </ul>
    );
    return (
      <div className="navbars">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                <Link className="nav-link text-white" to="Services">
                  Our Services
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link text-white" to="Contact">
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav navbar-nav navbar-right my-2 my-lg-0">
            <li className="nav-item mr-4 "></li>
          </ul>
          {localStorage.token ? userLink : loginRegLink}
        </nav>
      </div>
    );
  }
}
export default withRouter(Navbar);
