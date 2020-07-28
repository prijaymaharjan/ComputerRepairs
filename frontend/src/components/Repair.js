import React, { Component } from "react";
import "../scss/Main.scss";

class Repair extends Component {
  render() {
    return (
      <div className="Repairs mb-6">
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 mb-5">
                <div className="heading text-center">
                  <h3 className="title">Why Choose Us</h3>
                  <p className="info">Fastest Repair Service with Best Price</p>
                </div>{" "}
              </div>{" "}
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="service-info shadow-lg">
                  {" "}
                  <div className="box-icon">
                    {" "}
                    <span>
                      <i className="fa fa-money"></i>{" "}
                    </span>
                  </div>
                  <div className="box-content text-center">
                    {" "}
                    <h4 className="box-title">No Fix No Fee</h4>
                    <p className="infos">
                      {" "}
                      We are so confident with our service that if we can't fix
                      the problem, your don't pay. All repairs come with a 30
                      day guarantee.{" "}
                    </p>
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="service-info shadow-lg">
                  {" "}
                  <div className="box-icon">
                    {" "}
                    <span>
                      <i className="fa fa-wrench"></i>{" "}
                    </span>
                  </div>
                  <div className="box-content text-center">
                    {" "}
                    <h4 className="box-title">Quick Repair Process</h4>
                    <p className="infos">
                      {" "}
                      Our company is reliable, and our work is trusted. We
                      provide worry-free service you can alway count on{" "}
                    </p>
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="service-info shadow-lg">
                  <div className="service-info shadow-lg">
                    {" "}
                    <div className="box-icon">
                      {" "}
                      <span>
                        <i className="fa fa-calendar"></i>{" "}
                      </span>
                    </div>
                    <div className="box-content text-center">
                      {" "}
                      <h4 className="box-title">30 Days Warranty</h4>
                      <p className="infos">
                        {" "}
                        This means if you have a recurring problem, jusk pick up
                        and repair it free of charge.{" "}
                      </p>
                    </div>{" "}
                  </div>{" "}
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Repair;
