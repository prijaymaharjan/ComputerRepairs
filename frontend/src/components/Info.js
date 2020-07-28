import React, { Component } from "react";
import "../scss/Main.scss";
import $ from "jquery";

class Info extends Component {
  render() {
    return (
      <div className="informs">
        <div className="container">
          <div className="row text-white">
            <div className="four col-md-3">
              <div className="counter-box colored">
                {" "}
                <i className="fa fa-thumbs-o-up"></i>{" "}
                <span className="counter">2147</span>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="four col-md-3">
              <div className="counter-box">
                {" "}
                <i className="fa fa-laptop "></i>{" "}
                <span className="counter">3275</span>
                <p>Laptop Repair</p>
              </div>
            </div>
            <div className="four col-md-3">
              <div className="counter-box">
                {" "}
                <i className="fa fa-desktop"></i>{" "}
                <span className="counter">289</span>
                <p>Computer Repair</p>
              </div>
            </div>
            <div className="four col-md-3">
              <div className="counter-box">
                {" "}
                <i className="fa fa-windows "></i>{" "}
                <span className="counter">450</span>
                <p>OS Installed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

export default Info;
