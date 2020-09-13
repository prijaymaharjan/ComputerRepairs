import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";
import Footer from "./Footer";
class Appointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
      error: {},
    };
  }
  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    // alert(JSON.stringify(this.state));
    console.log(this.state);

    e.preventDefault();
    const userObject = {
      Firstname: this.state.firstname,
      Lastname: this.state.lastname,
      Email: this.state.email,
      Mobile: this.state.mobile,
      Subject: this.state.subject,
      Message: this.state.message,
    };
    axios
      .post("http://localhost:3000/appointment", userObject)
      .then((response) => {
        alert("Appointment Successfully");
        console.log("Request Succeded ", response);
      })
      .catch((error) => {
        console.log("Failed ", error);
      });
  };
  render() {
    return (
      <div className="appointment">
        <div className="title-wrapper mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-holder text-left">
                  <h1 className="page-title">Appointment</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 heading text-center">
          <div className="Title mb-5">
            <h3 className="box-title">Get Free Consultation</h3>
            <p className="box-content">
              You acknowledge that the work (an example is provided in the term
              “Licensed Product” shall include a copy of the License from time
              to time. Each version will be similar in spirit to the terms of
              this License released under the terms and conditions in this
              License Agreement.
            </p>
          </div>
          <div className="fadeInDown">
            <form
              className="form mb-5"
              onSubmit={this.handlesubmit}
              action="#"
              method="post"
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control fadeIn second"
                    id="firstname"
                    placeholder="First Name"
                    required=""
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleall}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control fadeIn third"
                    id="lastname"
                    placeholder="Last Name"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleall}
                    required=""
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control fadeIn fourth"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleall}
                    required=""
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control fadeIn five"
                    id="mobile"
                    placeholder="Mobile"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.handleall}
                    required=""
                  />
                </div>
              </div>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control fadeIn six"
                  id="subject"
                  placeholder="Subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleall}
                  required=""
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control fadeIn seven"
                  rows="5"
                  name="message"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleall}
                  required=""
                />
              </div>

              <input
                type="submit"
                className="text-center fadeIn fourth"
                value="Submit"
              />
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Appointment;
