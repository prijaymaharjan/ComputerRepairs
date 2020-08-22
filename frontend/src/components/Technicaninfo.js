import React, { Component } from "react";
import "../scss/Main.scss";
import Axios from "axios";
// import jwtDecode from "jwt-decode";
class Technicaninfo extends Component {
  constructor(props) {
    super(props);
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
      <div className="Technicaninfo appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    {this.state.User.array.forEach((user) => {
                      if (user.Role === "Technican") {
                        return <td key={user._id}>{user.Username}</td>;
                      }
                    })}
                  </td>
                  <td>Prijay Maharjan</td>
                  <td>Chitwan</td>
                  <td>Bharatpur-2</td>
                  <td>3:00 PM</td>
                  <td>2020-04-25</td>
                  <td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Technicaninfo;
