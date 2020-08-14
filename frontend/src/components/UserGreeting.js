import React, { Component } from "react";
import "../scss/Main.scss";
class UserGreeting extends Component {
  render() {
    return (
      <div>
        <div className="myprofile">
          <div className="row">
            <div className="col-md-6">
              <p className="about-item edit">Edit Profile</p>
            </div>
          </div>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="usernameHelp"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                placeholder="Mobile"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                placeholder="Gender"
              />
            </div>
            <div className="form-group">
              <label>Professional</label>
              <input
                type="text"
                className="form-control"
                id="professional"
                placeholder="Professional"
              />
            </div>
            <div className="profile-button">
              <button
                className="text-center fadeIn fourth profilebutton "
                onClick={this.props.clickData}
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default UserGreeting;
