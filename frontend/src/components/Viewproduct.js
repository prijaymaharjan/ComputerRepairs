import React, { Component } from 'react';

class Viewproduct extends Component {
    render() {
        return (
            <div>
                <div className="customerinfor appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Condition</th>
                  <th>Display Size</th>
                  <th>Hard Drive Capacity</th>
                  <th>Memory</th>
                  <th>Model</th>
                  <th>Operating System</th>
                  <th>Processor Type</th>
                  <th>Weight</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
              
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="customerinfor">
                          {/* <Link
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
                          </button> */}
                        </td>
                      </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Viewproduct;