import React, { Component } from "react";
import "../scss/Main.scss";
import Axios from "axios";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      role: "",
      gender: "",
      email: "",
      mobile: "",
      address: "",
      professional: "",
      User: [],
      config: { headers: { Authorization: localStorage.getItem("token") } },
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      Axios.get(`http://localhost:3000/user/${id}`, this.state.config)
        .then((res) => {
          console.log(res.data);
          if (res.data != null) {
            this.setState({
              username: res.data.Username,
              firstname: res.data.Firstname,
              lastname: res.data.Lastname,
              role: res.data.Role,
              gender: res.data.Gender,
              email: res.data.Email,
              mobile: res.data.Mobile,
              address: res.data.Address,
              professional: res.data.Professional,
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
    console.log(this.state);
    e.preventDefault();
    const regs = {
      Username: this.state.username,
      Password: this.state.password,
      Firstname: this.state.firstname,
      Lastname: this.state.lastname,
      Role: this.state.role,
      Gender: this.state.gender,
      Email: this.state.email,
      Mobile: this.state.mobile,
      Address: this.state.address,
      Professional: this.state.professional,
    };
    Axios.put(`http://localhost:3000/user/${id}`, regs, this.state.config)
      .then((response) => {
        this.props.history.push(`/Admin`);
        console.log("Request Successfully", response);
      })
      .catch((error) => {
        console.log("Failed", error);
      });
  };
  render() {
    return (
      <div className="registeradmin appointmentdate editadmin">
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
                  <div className="col-md-6 atjust">
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
                    className="text-center fadeIn fourth savebtn"
                    value="Save"
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
export default Edit;
