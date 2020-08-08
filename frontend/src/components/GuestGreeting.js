import React, { Component } from "react";
class GuestGreeting extends Component {
  render() {
    return (
      <div>
        <h1>Welcome back!</h1>
        <button onClick={this.props.clickData}>Logout</button>
      </div>
    );
  }
}
export default GuestGreeting;
