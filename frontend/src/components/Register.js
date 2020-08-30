import React, { Component } from "react";
import "../scss/Main.scss";
import { Form, FormGroup, Input } from "reactstrap";

import Footer from "./Footer";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      role: "Basic",
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
    console.log(this.state);

    e.preventDefault();

    const reg = {
      Username: this.state.username,
      Password: this.state.password,
      Firstname: this.state.firstname,
      Lastname: this.state.lastname,
      Role: this.state.role,
      Gender: this.state.gender,
      DateofBirth: this.state.dateofbirth,
      Email: this.state.email,
      Mobile: this.state.mobile,
      Address: this.state.address,
      Professional: this.state.professional,
    };

    axios
      .post("http://localhost:3000/user/register", reg)
      .then((response) => {
        console.log("Request Successfully", response);
        this.props.history.push(`/Login`);
      })
      .catch((error) => {
        console.log("Failed", error);
      });
  };

  render() {
    return (
      <div
        className="Form"
        id="contact-form"
        action="/register"
        method="post"
        onSubmit={this.handlesubmit}
      >
        <div className="container">
          <div className="row">
            <div className="wrapper fadeInDown">
              <div id="formContent">
                <Form method="post" action="/register">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                      type="text"
                      id="username"
                      className="fadeIn second"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleall}
                    />
                    <small className="text-danger">
                      {this.state.usernameErr}
                    </small>
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="password"
                      id="password"
                      className="fadeIn third"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      id="firstname"
                      className="fadeIn third"
                      name="firstname"
                      placeholder="Firstname"
                      value={this.state.firstname}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      id="lastname"
                      className="fadeIn third"
                      name="lastname"
                      placeholder="Lastname"
                      value={this.state.lastname}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      id="role"
                      className="fadeIn third Role"
                      name="role"
                      placeholder="Role"
                      value={this.state.role}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      id="gender"
                      className="fadeIn third"
                      name="gender"
                      placeholder="Gender"
                      value={this.state.gender}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="date"
                      id="dateofbirth"
                      className="fadeIn third"
                      name="dateofbirth"
                      value={this.state.dateofbirth}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      id="email"
                      className="fadeIn third"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      id="mobile"
                      className="fadeIn third"
                      name="mobile"
                      placeholder="Mobile"
                      value={this.state.mobile}
                      onChange={this.handleall}
                    />
                  </FormGroup>

                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      id="address"
                      className="fadeIn third"
                      name="address"
                      placeholder="Address"
                      value={this.state.address}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      id="professional"
                      className="fadeIn third"
                      name="professional"
                      placeholder="Professional"
                      value={this.state.professional}
                      onChange={this.handleall}
                    />
                  </FormGroup>
                  <input
                    type="submit"
                    onClick={this.handlesubmit}
                    className="text-center fadeIn fourth"
                    value="Register"
                  />
                </Form>
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
