import React, { Component } from "react";
import "../scss/Main.scss";
class Appointmentassign extends Component {
  render() {
    return (
      <div className="appointmentassign appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Technican Assign</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Saroj</td>
                  <td>PrijayMaharjan</td>
                  <td>Prijay Maharjan</td>
                  <td>Chitwan</td>
                  <td>Bharatpur-2</td>
                  <td>3:00 PM</td>
                  <td>2020-04-25</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Appointmentassign;
