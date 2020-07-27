import React, { Component } from "react";
import "../scss/Main.scss";
//import { Link } from "react-router-dom";
import Cards from "./Cards";

class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Cards />
        </div>
      </div>
    );
  }
}
export default Services;
