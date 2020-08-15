import React, { Component } from "react";
import Leftinfo from "./Leftinfo";
import "../scss/Main.scss";
import Footer from "./Footer";
import Customerinfor from "./Customerinfor";
import Technicaninfo from "./Technicaninfo";
import Myaccount from "./Myaccount";
import Appointmentassign from "./Appointmentassign";
import Repairinfo from "./Repairinfo";
import Registeradmin from "./Registeradmin";
class Admin extends Component {
  render() {
    return (
      <div className="Profileinfo">
        <Leftinfo
          firstlink="My Account"
          secondlink="My Profile"
          thirdlink="Technican Info"
          fourthlink="Customer Info"
          fivelink="Appointment Info"
          sixlink="Repair Info"
          sevenlink="Register"
          first={<Myaccount />}
          second={<Technicaninfo />}
          third={<Customerinfor />}
          four={<Appointmentassign />}
          five={<Repairinfo />}
          six={<Registeradmin />}
        />
        <Footer />
      </div>
    );
  }
}
export default Admin;
