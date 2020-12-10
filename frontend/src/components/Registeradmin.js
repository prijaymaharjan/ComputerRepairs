import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";
class Registeradmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      role: "",
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
    const regs = {
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
      .post("http://localhost:3000/user/register", regs)
      .then((response) => {
        alert("Successfully Register");
        console.log("Request Successfully", response);
      })
      .catch((error) => {
        console.log("Failed", error);
      });
  };
  render() {
    return (
      <div className="registeradmin appointmentdate">
        <div className="container">
          <div className="form">
            <div className="form-content">
              <form action="" method="post" onSubmit={this.handlesubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Role"
                        name="role"
                        value={this.state.role}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstname"
                        id="firstname"
                        value={this.state.firstname}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        id="lastname"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gender"
                        name="gender"
                        id="gender"
                        value={this.state.gender}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        id="dateofbirth"
                        className="form-control"
                        name="dateofbirth"
                        value={this.state.dateofbirth}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        name="mobile"
                        id="mobile"
                        value={this.state.mobile}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        id="address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Professional"
                        id="professional"
                        name="professional"
                        value={this.state.professional}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="text-center fadeIn fourth"
                    value="Register"
                    onClick={this.handlesubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registeradmin;
