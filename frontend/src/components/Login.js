import React, { Component } from "react";
import "../scss/Main.scss";
import { Link, Redirect } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import jwtDecode from "jwt-decode";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isBasic: false,
      isAdmin: false,
      isTechnican: false,
    };
  }
  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    const user = {
      Username: this.state.username,
      Password: this.state.password,
    };
    axios
      .post("http://localhost:3000/user/login", user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        let users = jwtDecode(response.data.token.split(" ")[1]);
        if (users.Role === "Admin") this.setState({ isAdmin: true });
        else if (users.Role === "Technican")
          this.setState({ isTechnican: true });
        else this.setState({ isBasic: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.isAdmin) {
      return <Redirect to="/Admin" />;
    } else if (this.state.isTechnican) {
      return <Redirect to="/technicanprofile" />;
    } else if (this.state.isBasic) {
      return <Redirect to="/Customprofile" />;
    }
    return (
      <div
        className="Form"
        onSubmit={this.handlesubmit}
        id="contact-form"
        action="#"
        method="post"
      >
        <div className="container">
          <div className="row">
            <div className="wrapper fadeInDown">
              <div id="formContent">
                <form action="/login" method="post">
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
                    onClick="handlesubmit"
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
