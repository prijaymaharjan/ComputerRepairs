import React, { Component } from "react";
import "../scss/Main.scss";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      register_id: "",
      username: "",
      firstname: "",
      lastname: "",
      gender: "",
      dateofbirth: "",
      email: "",
      mobile: "",
      address: "",
      professional: "",
      register: [],
      config: {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    };
  }
  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
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
