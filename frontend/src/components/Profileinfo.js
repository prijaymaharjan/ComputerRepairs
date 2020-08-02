import React, { Component } from "react";
import Leftinfo from "./Leftinfo";
import "../scss/Main.scss";
import Myaccount from "./Myaccount";
import Appointment from "./Appointmentdate";
import Laptopform from "./Laptopform";
class Profileinfo extends Component {
  render() {
    return (
      <div className="Profileinfo">
        <Leftinfo
          firstlink="My Account"
          secondlink="My Profile"
          thirdlink="Appointment"
          fourthlink="Laptop"
          first={<Myaccount />}
          second={<Appointment />}
          third={<Laptopform />}
        />
      </div>
    );
  }
}
export default Profileinfo;
