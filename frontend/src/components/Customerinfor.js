import React, { Component } from "react";
import "../scss/Main.scss";
import Axios from "axios";
class Customerinfor extends Component {
  constructor() {
    super();
    this.state = {
      User: [],
      Username: "",
      Firstname: "",
      Lastname: "",
      Role: "",
      Gender: "",
      DateofBirth: "",
      Email: "",
      Mobile: "",
      Address: "",
      Professional: "",
      config: { headers: { Authorization: localStorage.getItem("token") } },
    };
  }
  async componentDidMount() {
    Axios.get(`http://localhost:3000/user/all`, this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({ User: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="customerinfor appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {this.state.User.map((user) => {
                  if (user.Role === "Basic") {
                    return (
                      <tr key={user._id}>
                        <td>{user.Username}</td>
                        <td>{user.Firstname}</td>
                        <td>{user.Lastname}</td>
                        <td>{user.Email}</td>
                        <td>{user.Mobile}</td>
                        <td>{user.Address}</td>
                        <td>{user.Gender}</td>
                        <td className="customerinfor">
                          <button
                            type="button"
                            className="btn btn-info"
                            id="delete"
                            name="delete"
                          >
                            <i className="fa fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-info icon-space"
                            id="delete"
                            name="delete"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Customerinfor;
