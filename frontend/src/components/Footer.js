import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../scss/Main.scss";
class Footer extends Component {
  render() {
    return (
      <div className="FooterIn">
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  Being the best in our field means that we are committed to
                  every project, we have ingenious ideas that become reality and
                  we make every client happy.
                </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Our Services</h6>
                <ul className="footer-links">
                  <li>
                    <Link to="#">Laptop Repair</Link>
                  </li>
                  <li>
                    <Link to="#">Computer Repair</Link>
                  </li>
                  <li>
                    <Link to="#">Hardware Update</Link>
                  </li>
                  <li>
                    <Link to="#">Data Backup & Recovery</Link>
                  </li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>

                  <li>
                    <Link to="http://scanfcode.com/privacy-policy/">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; 2017 All Rights Reserved by
                  <Link to="#">Scanfcode</Link>.
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <Link className="facebook" to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="twitter" to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="dribbble" to="#">
                      <i className="fa fa-dribbble"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="linkedin" to="#">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
