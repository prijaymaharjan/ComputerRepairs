import React, { Component } from "react";
import "../scss/Main.scss";
import Axios from "axios";
import jwt_decode from "jwt-decode";
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      gender: "",
      dateofbirth: "",
      email: "",
      mobile: "",
      address: "",
      professional: "",
      User: [],
      config: {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    };
  }
  componentDidMount() {
    const token = localStorage.token;
    const decoded = jwt_decode(token);

    this.setState({
      username: decoded.Username,
      firstname: decoded.Firstname,
      lastname: decoded.Lastname,
      email: decoded.Email,
      mobile: decoded.Mobile,
      address: decoded.Address,
      gender: decoded.Gender,
      professional: decoded.Professional,
    });
  }
  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    const token = localStorage.token;
    const decoded = jwt_decode(token);
    const id = decoded.id;
    console.log(id);
    const edit = {
      Username: this.state.username,
      Firstname: this.state.firstname,
      Lastname: this.state.lastname,
      Gender: this.state.gender,
      DateofBirth: this.state.dateofbirth,
      Email: this.state.email,
      Mobile: this.state.mobile,
      Address: this.state.address,
      Professional: this.state.professional,
    };
    Axios.put(`http://localhost:3000/user/${id}`, edit, this.state.config)
      .then((res) => {
        alert("Succeddfully Update");
        console.log("Request Successfully", res);
      })
      .catch((error) => {
        console.log("Failed", error);
      });
  };
  render() {
    return (
      <div>
        <div className="myprofile">
          <div className="row">
            <div className="col-md-6">
              <p className="about-item edit">Edit Profile</p>
            </div>
          </div>
          <form method="post" action="#" onSubmit={this.handlesubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleall}
                aria-describedby="usernameHelp"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First name"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleall}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Lastname"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleall}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleall}
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="dateofbirth"
                value={this.state.dateofbirth}
                onChange={this.handleall}
              />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                placeholder="Mobile"
                name="mobile"
                value={this.state.mobile}
                onChange={this.handleall}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleall}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                placeholder="Gender"
                name="gender"
                value={this.state.gender}
                onChange={this.handleall}
              />
            </div>
            <div className="form-group">
              <label>Professional</label>
              <input
                type="text"
                className="form-control"
                id="professional"
                placeholder="Professional"
                name="professional"
                value={this.state.professional}
                onChange={this.handleall}
              />
            </div>
            <div className="profile-button">
              <button
                className="text-center fadeIn fourth profilebutton "
                onClick={(this.props.clickData, this.handlesubmit)}
              >
                Save Profile
              </button>
              <button
                className="text-center fadeIn fourth profilebutton "
                onClick={this.props.clickData}
              >
                Go Back To Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default UserGreeting;
