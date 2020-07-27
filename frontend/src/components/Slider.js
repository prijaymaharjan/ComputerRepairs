import React, { Component } from "react";
import "../scss/Main.scss";
import Carousel from "react-bootstrap/Carousel";
class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel className="sliders mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../image/repair.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Multi-Brand Laptop Service</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../image/computer-repair-tech.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>10 Years of experience</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../image/technican.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Quick & Fast Fix</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
