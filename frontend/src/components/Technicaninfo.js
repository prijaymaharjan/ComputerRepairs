import React, { Component } from "react";
import "../scss/Main.scss";
import Axios from "axios";
import { Link } from "react-router-dom";

class Technicaninfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],

      config: { headers: { Authorization: localStorage.getItem("token") } },
    };
  }
  async componentDidMount() {
    Axios.get(`http://localhost:3000/user/all`, this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          User: res.data,
        });
      })
      .catch((err) => console.log(err.res));
  }
  deleteUser = (userId) => {
    Axios.delete(
      `http://localhost:3000/user/${userId}`,
      this.state.config
    ).then((response) => {
      if (response.data != null) {
        alert("Technican Deleted Successfully");
        this.setState({
          User: this.state.User.filter((user) => user._id !== userId),
        });
      }
    });
  };

  render() {
    return (
      <div className="Technicaninfo appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Professional</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {this.state.User.map((user) => {
                  if (user.Role === "Technican") {
                    return (
                      <tr key={user._id}>
                        <td>{user.Username}</td>
                        <td>{user.Firstname}</td>
                        <td>{user.Lastname}</td>
                        <td>{user.Email}</td>
                        <td>{user.Mobile}</td>
                        <td>{user.Address}</td>
                        <td>{user.Gender}</td>
                        <td>{user.Professional}</td>
                        <td className="customerinfor">
                          <Link
                            to={`edit/${user._id}`}
                            className="btn btn-info"
                          >
                            <i className="fa fa-edit"></i>
                          </Link>

                          <button
                            type="button"
                            className="btn btn-info icon-space"
                            id="delete"
                            name="delete"
                            onClick={this.deleteUser.bind(this, user._id)}
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

export default Technicaninfo;
