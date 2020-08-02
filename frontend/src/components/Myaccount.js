import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../scss/Main.scss";
class Myaccount extends Component {
  render() {
    return (
      <div className="myprofile">
        <div className="row">
          <div className="col-md-6">
            <p className="about-item">About</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <span>User Id</span>
          </div>
          <div className="col-md-6">
            <p>prijaymaharjan</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Name</span>
          </div>
          <div className="col-md-6">
            <p>Prijay Maharjan</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Email</span>
          </div>
          <div className="col-md-6">
            <p>prijaymaharjan@gmail.com</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Date of Birth</span>
          </div>
          <div className="col-md-6">
            <p>2996-11-26</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Mobile</span>
          </div>
          <div className="col-md-6">
            <p>9845924073</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Address</span>
          </div>
          <div className="col-md-6">
            <p>Chitwan</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Gender</span>
          </div>
          <div className="col-md-6">
            <p>Male</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Professional</span>
          </div>
          <div className="col-md-6">
            <p>Student</p>
          </div>
        </div>

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
export default Myaccount;
