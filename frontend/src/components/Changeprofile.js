import React, { Component } from "react";
import "../scss/Main.scss";
class Changeprofile extends Component {
  render() {
    return (
      <div className="">
        <div className="profile-button">
          <Link to="Changeprofile">
            <input
              type="submit"
              className="text-center fadeIn fourth profilebutton"
              value="Change Profile"
            />
          </Link>
          <Link to="#">
            <input
              type="submit"
              className="text-center fadeIn fourth profilebutton"
              value="Change Password"
            />
          </Link>
        </div>
      </div>
    );
  }
}
export default Changeprofile;
