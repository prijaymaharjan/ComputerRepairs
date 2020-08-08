import React, { Component } from "react";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";
import "../scss/Main.scss";
class Myaccount extends Component {
  state = { isLoggedIn: false };

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting clickData={this.handleLoginClick} />;
    } else {
      return <GuestGreeting clickData={this.handleLogoutClick} />;
    }
  }
}
export default Myaccount;
