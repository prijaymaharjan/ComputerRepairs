import React, { Component } from "react";
import "../scss/Main.scss";
class Appointmentdate extends Component {
  render() {
    return (
      <div className="appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Time</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Prijay Maharjan</td>
                  <td>Chitwan</td>
                  <td>Bharatpur-2</td>
                  <td>3:00 PM</td>
                  <td>2020-04-25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Appointmentdate;
