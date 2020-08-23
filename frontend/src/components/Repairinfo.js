import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";
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
                {this.state.repair.map((currentTodo) => {
                  return (
                    <tr key={currentTodo._id}>
                      <td>{currentTodo.Email} </td>
                      <td>{currentTodo.Detail} </td>
                      <td>{currentTodo.Paymentmethod} </td>
                      <td>{currentTodo.Quantity} </td>
                      <td>{currentTodo.Price} </td>
                      <td>{currentTodo.Totalamount} </td>
                      <td>{currentTodo.Dates} </td>
                      <td className="customerinfor">
                        <button
                          type="button"
                          className="btn btn-info"
                          id="edit"
                          name="edit"
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
