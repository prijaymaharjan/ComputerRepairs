import React, { Component } from "react";
import "../scss/Main.scss";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
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
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleall}
                  />
                  <input
                    type="password"
                    id="password"
                    className="fadeIn third"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleall}
                  />
                  <input
                    type="submit"
                    className="text-center fadeIn fourth"
                    value="Log In"
                  />
                </form>
                <div id="formFooter">
                  <Link className="underlineHover" to="#">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Login;
