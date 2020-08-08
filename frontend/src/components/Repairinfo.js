import React, { Component } from "react";
import "../scss/Main.scss";
class Repairinfo extends Component {
  render() {
    return (
      <div className="repairinfo appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Technican</th>
                  <th>Username</th>
                  <th>Detail</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
export default Repairinfo;
