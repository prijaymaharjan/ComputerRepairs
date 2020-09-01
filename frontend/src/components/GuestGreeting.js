import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class GuestGreeting extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Firstname: "",
      Lastname: "",
      Email: "",
      DateofBirth: "",
      Mobile: "",
      Address: "",
      Gender: "",
      Professional: "",
    };
  }
  componentDidMount() {
    const token = localStorage.token;
    const decoded = jwt_decode(token);
    console.log(decoded.id);
    this.setState({
      id: decoded.id,
      Username: decoded.Username,
      Firstname: decoded.Firstname,
      Lastname: decoded.Lastname,
      Email: decoded.Email,
      DateofBirth: decoded.DateofBirth,
      Mobile: decoded.Mobile,
      Address: decoded.Address,
      Gender: decoded.Gender,
      Professional: decoded.Professional,
    });
  }
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
            <p>{this.state.Username}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>First Name</span>
          </div>
          <div className="col-md-6">
            <p>{this.state.Firstname}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Last Name</span>
          </div>
          <div className="col-md-6">
            <p>{this.state.Lastname}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Email</span>
          </div>
          <div className="col-md-6">
            <p>{this.state.Email}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Date of Birth</span>
          </div>
          <div className="col-md-6">
            <p>{this.state.DateofBirth}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Mobile</span>
          </div>
          <div className="col-md-6">
            <p>{this.state.Mobile}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Address</span>
          </div>
          <div className="col-md-6">
            <p>{this.state.Address}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Gender</span>
          </div>
          <div className="col-md-6">
            <p>{this.state.Gender}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span>Professional</span>
          </div>
          <div className="col-md-6">
            <p>{this.state.Professional}</p>
          </div>
        </div>

        <div className="profile-button">
          <button
            className="text-center fadeIn fourth profilebutton "
            onClick={this.props.clickData}
          >
            Edit Profile
          </button>
        </div>
      </div>
    );
  }
}
export default GuestGreeting;
