import React, { Component } from "react";

import Footer from "./Footer";
import Profileinfo from "./Profileinfo";
import "../scss/Main.scss";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <Profileinfo />
        <Footer />
      </div>
    );
  }
}

export default Profile;
