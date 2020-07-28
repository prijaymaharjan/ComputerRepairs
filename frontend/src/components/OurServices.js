import React, { Component } from "react";
import "../scss/Main.scss";
import Cards from "./Cards";

class OurServices extends Component {
  render() {
    return (
      <div className="Services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 mb-5">
              <div className="heading text-center">
                <h3 className="box-title mb-4">Our Services</h3>
                <p className="box-contents">
                  We are one of the best laptop repairing service provider
                  company in New York and repair your system at your home/office
                  at very cheapest price
                </p>
              </div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OurServices;
