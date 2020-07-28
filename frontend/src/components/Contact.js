import React, { Component } from "react";
import "../scss/Main.scss";
import Contactform from "./Contactform";
import Footer from "./Footer";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="title-wrapper mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-holder text-left mb-5">
                  <h1 className="page-title">Contact Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contactform />
        <Footer />
      </div>
    );
  }
}
export default Contact;
