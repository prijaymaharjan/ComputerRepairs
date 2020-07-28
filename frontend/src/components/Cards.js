import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../image/computer-repair-tech.jpg";
import img2 from "../image/laptop-repair-technician.jpg";
import img3 from "../image/repair.jpg";
class Cards extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Card
              imgsrc={img1}
              title="Data Backup & Recovery"
              text="We are one of the leading computer service center, we undertake desktop and laptop service with all major brands."
              path="#"
              bt="Learn More"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Card
              imgsrc={img2}
              title="Laptop Repair"
              text="We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff."
              path="#"
              bt="Learn More"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Card
              imgsrc={img3}
              title="Hardware Update"
              text="We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff."
              path="#"
              bt="Learn More"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
