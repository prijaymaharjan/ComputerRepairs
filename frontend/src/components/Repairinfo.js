import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";
import { Link } from "react-router-dom";
class Repairinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repair: [],
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/repair", this.state.config)
      .then((response) => {
        this.setState({
          repair: response.data,
        });
      })
      .catch((err) => console.log(err.response));
  }
  deleteUser = (userId) => {
    axios
      .delete(`http://localhost:3000/repair/${userId}`, this.state.config)
      .then((response) => {
        if (response.data != null) {
          alert("Repair Deleted Successfully");
          this.setState({
            repair: this.state.repair.filter((user) => user._id !== userId),
          });
        }
      });
  };
  render() {
    return (
      <div className="repairinfo appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Detail</th>
                  <th>Paymentmethod</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Amount</th>
                  <th>Date</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {this.state.repair.map((repair) => {
                  return (
                    <tr key={repair._id}>
                      <td>{repair.Email} </td>
                      <td>{repair.Detail} </td>
                      <td>{repair.Paymentmethod} </td>
                      <td>{repair.Quantity} </td>
                      <td>{repair.Price} </td>
                      <td>{repair.Totalamount} </td>
                      <td>{repair.Dates} </td>
                      <td className="customerinfor">
                        <Link
                          to={`editrepair/${repair._id}`}
                          className="btn btn-info"
                        >
                          <i className="fa fa-edit"></i>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-info icon-space"
                          id="delete"
                          name="delete"
                          onClick={this.deleteUser.bind(this, repair._id)}
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
export default Repairinfo;
