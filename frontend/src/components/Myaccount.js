import React, { Component } from "react";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";
import "../scss/Main.scss";
class Myaccount extends Component {
  state = { isLoggedIn: false };

  handleLoginClick = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    if (this.state.isLoggedIn) {
      return <UserGreeting clickData={this.handleLoginClick} />;
    } else {
      return <GuestGreeting clickData={this.handleLoginClick} />;
    }
  }
}
export default Myaccount;
