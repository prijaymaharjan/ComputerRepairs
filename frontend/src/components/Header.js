import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../scss/Main.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container-top">
                <div className="container-header">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        className="logos"
                        src={require("../image/logo.jpg")}
                        alt="computerrepair"
                      />
                    </Link>
                  </div>

                  <div className="header-right text-right">
                    <div className="header-top float-right">
                      <div className="header-left-info float-left">
                        <ul>
                          <li>
                            <span className="header-label">
                              <i className="fa fa-phone" />
                            </span>

                            <span className="header-hightlight">
                              <small>Contact us</small>
                              <strong>9845924073</strong>
                            </span>
                          </li>

                          <li>
                            <span className="header-label">
                              <i className="fa fa-clock-o" />
                            </span>

                            <span className="header-hightlight">
                              <small>Working Time</small>
                              <strong>Sun - Fri: 10:00 - 5:00</strong>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="header-rights-info float-right">
                        <button
                          type="button"
                          className="btn btn-primary appoint-button"
                        >
                          <Link
                            className="appointment font-weight-bold"
                            to="Appointment"
                          >
                            Make a Appointment
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
