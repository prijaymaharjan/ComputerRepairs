import React, { Component } from "react";
class UserGreeting extends Component {
  render() {
    return (
      <div>
        <h1>Please sign up.</h1>

        <button onClick={this.props.clickData}>Login</button>
      </div>
    );
  }
}
export default UserGreeting;
