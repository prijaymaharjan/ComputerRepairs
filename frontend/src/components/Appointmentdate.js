import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";

class Appointmentdate extends Component {
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
  render() {
    return (
      <div className="appointmentdate">
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
                </tr>
              </thead>
              <tbody>
                {this.state.appointment.map((currentTodo) => {
                  return (
                    <tr key={currentTodo._id}>
                      <td>{currentTodo.Firstname} </td>
                      <td>{currentTodo.Lastname} </td>
                      <td>{currentTodo.Email} </td>
                      <td>{currentTodo.Mobile} </td>
                      <td>{currentTodo.Subject} </td>
                      <td>{currentTodo.Message} </td>
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
export default Appointmentdate;
