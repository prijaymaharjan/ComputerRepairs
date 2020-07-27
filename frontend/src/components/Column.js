import React, { Component } from "react";
import "../scss/Main.scss";
import { Link } from "react-router-dom";
class Column extends Component {
  render() {
    return (
      <div className="column mb-5">
        <div className="container ">
          <div className="row">
            <div className="column-container shadow-lg">
              <div className="column-left col-lg-6 col-sm-6">
                <div className="column-heading">
                  <h3 className="box-title text-left mb-4">Who we Are</h3>
                  <p className="box-content text-justify">
                    Ostrya is an established New York based company, specialised
                    in Computer Repairs and Services, We repair out of warranty
                    laptops and Computer.
                  </p>

                  <button type="button" className="btn btn-primary float-left">
                    <Link className="text-white button-text" to="#">
                      View service
                    </Link>
                  </button>
                </div>
              </div>
              <div className="column-right col-lg-6 col-sm-6">
                <div className="imager">
                  <img
                    src={require("../image/laptop-repair-technician.jpg")}
                    alt="laptop-repair-technician"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Column;
