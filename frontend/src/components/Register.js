import React, { Component } from "react";
import "../scss/Main.scss";
import Footer from "./Footer";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmpassword: "",
      firstname: "",
      lastname: "",
      gender: "",
      dateofbirth: "",
      email: "",
      mobile: "",
      address: "",
      professional: "",
    };
  }
  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    alert(JSON.stringify(this.state));
    e.preventDefault();
  };
  render() {
    return (
      <div
        className="Form"
        onSubmit={this.handlesubmit}
        id="contact-form"
        action="#"
        method="get"
      >
        <div className="container">
          <div className="row">
            <div className="wrapper fadeInDown">
              <div id="formContent">
                <form>
                  <input
                    type="text"
                    id="username"
                    className="fadeIn second"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleall}
                  />
                  <input
                    type="password"
                    id="password"
                    className="fadeIn third"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleall}
                  />
                  <input
                    type="password"
                    id="confirmpassword"
                    className="fadeIn third"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={this.state.confirmpassword}
                    onChange={this.handleall}
                  />

                  <input
                    type="text"
                    id="firstname"
                    className="fadeIn third"
                    name="firstname"
                    placeholder="Firstname"
                    value={this.state.firstname}
                    onChange={this.handleall}
                  />

                  <input
                    type="text"
                    id="lastname"
                    className="fadeIn third"
                    name="lastname"
                    placeholder="Lastname"
                    value={this.state.lastname}
                    onChange={this.handleall}
                  />
                  <input
                    type="text"
                    id="gender"
                    className="fadeIn third"
                    name="gender"
                    placeholder="Gender"
                    value={this.state.gender}
                    onChange={this.handleall}
                  />
                  <input
                    type="date"
                    id="date"
                    className="fadeIn third"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleall}
                  />

                  <input
                    type="text"
                    id="email"
                    className="fadeIn third"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleall}
                  />
                  <input
                    type="text"
                    id="mobile"
                    className="fadeIn third"
                    name="mobile"
                    placeholder="Mobile"
                    value={this.state.mobile}
                    onChange={this.handleall}
                  />

                  <input
                    type="text"
                    id="address"
                    className="fadeIn third"
                    name="address"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.handleall}
                  />
                  <input
                    type="text"
                    id="professional"
                    className="fadeIn third"
                    name="professional"
                    placeholder="Professional"
                    value={this.state.professional}
                    onChange={this.handleall}
                  />

                  <input
                    type="submit"
                    className="text-center fadeIn fourth"
                    value="Log In"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Register;
