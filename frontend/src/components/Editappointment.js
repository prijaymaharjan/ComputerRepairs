import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";
import Footer from "./Footer";
class Editappointment extends Component {
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
  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      axios
        .get(`http://localhost:3000/appointment/${id}`, this.state.config)
        .then((res) => {
          console.log(res.data);
          if (res.data != null) {
            this.setState({
              firstname: res.data.Firstname,
              lastname: res.data.Lastname,
              email: res.data.Email,
              mobile: res.data.Mobile,
              subject: res.data.Subject,
              message: res.data.Message,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }

  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    const id = this.props.match.params.id;
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
      .put(`http://localhost:3000/appointment/${id}`, userObject)
      .then((response) => {
        this.props.history.push(`/Admin`);
        console.log("Save Succeded ", response);
      })
      .catch((error) => {
        console.log("Failed ", error);
      });
  };
  render() {
    return (
      <div className="appointment">
        <div className="col-md-12 heading text-center">
          <div className="fadeInDown mt-5">
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
                value="Save"
              />
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Editappointment;
