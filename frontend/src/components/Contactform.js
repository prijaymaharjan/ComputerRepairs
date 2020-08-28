import React, { Component } from "react";
import "../scss/Main.scss";
import { Link } from "react-router-dom";
class Contactform extends Component {
  render() {
    return (
      <div className="contact mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-8">
              <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                <div className="section-title">
                  <h2>Contact Info</h2>
                  <p>
                    Lorem ipsum dolor sit consectetur adipiscing morbi venenatis
                    et tortor consectetur adipisicing lacinia tortor morbi
                    ultricies.
                  </p>
                </div>

                <p className="contactinfos">
                  <i className="fa fa-map-marker"></i> 456 New Street 22000, New
                  York City, USA
                </p>
                <p className="contactinfos">
                  <i className="fa fa-comment"></i>{" "}
                  <Link to="mailto:info@company.com">info@company.com</Link>
                </p>
                <p className="contactinfos">
                  <i className="fa fa-phone"></i> 010-020-0340
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contactform;
