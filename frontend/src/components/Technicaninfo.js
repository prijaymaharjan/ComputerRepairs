import React, { Component } from "react";
import "../scss/Main.scss";
class Technicaninfo extends Component {
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
                  <td>PrijayMaharjan</td>
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
