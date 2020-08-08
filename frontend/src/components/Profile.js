import React, { Component } from "react";

import Footer from "./Footer";
import Customprofile from "./Customprofile";
import Technicanprofile from "./Technicanprofile";
import Admin from "./Admin";
import "../scss/Main.scss";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <Customprofile />
        <Technicanprofile />
        <Admin />
        <Footer />
      </div>
    );
  }
}

export default Profile;
