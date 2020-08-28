import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";
import { Link } from "react-router-dom";
class Appointmentassign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: [],
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/appointment", this.state.config)
      .then((response) => {
        this.setState({
          appointment: response.data,
        });
      })
      .catch((err) => console.log(err.response));
  }
  deleteUser = (userId) => {
    axios
      .delete(`http://localhost:3000/appointment/${userId}`, this.state.config)
      .then((response) => {
        if (response.data != null) {
          alert("Appointment Deleted Successfully");
          this.setState({
            appointment: this.state.appointment.filter(
              (user) => user._id !== userId
            ),
          });
        }
      });
  };
  render() {
    return (
      <div className="appointmentassign appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {this.state.appointment.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td>{user.Firstname} </td>
                      <td>{user.Lastname} </td>
                      <td>{user.Email} </td>
                      <td>{user.Mobile} </td>
                      <td>{user.Subject} </td>
                      <td>{user.Message} </td>

                      <td className="customerinfor">
                        <Link
                          to={`editappointment/${user._id}`}
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
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Appointmentassign;
