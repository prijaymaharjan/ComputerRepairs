import React, { Component } from "react";
import "../scss/Main.scss";
class Registeradmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmpassword: "",
      Role: "",
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
      <div className="registeradmin appointmentdate">
        <div className="container">
          <div className="form">
            <div className="form-content">
              <form action="" method="" onSubmit={this.handlesubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="username"
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
                        value={this.state.Role}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Confirm Password *"
                        name="confirmpassword"
                        value={this.state.confirmpassword}
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
                        value={this.state.firstname}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
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
                        value={this.state.gender}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
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
