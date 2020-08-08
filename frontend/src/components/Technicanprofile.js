import React, { Component } from "react";
import Leftinfo from "./Leftinfo";
import "../scss/Main.scss";
import Myaccount from "./Myaccount";
import AppointmentInfo from "./AppointmentInfo";
class Technicanprofile extends Component {
  render() {
    return (
      <div className="Profileinfo">
        <Leftinfo
          firstlink="My Account"
          secondlink="My Profile"
          thirdlink="Appointment Info"
          first={<Myaccount />}
          second={<AppointmentInfo />}
        />
      </div>
    );
  }
}
export default Technicanprofile;
