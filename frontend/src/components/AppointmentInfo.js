import React, { Component } from "react";
import "../scss/Main.scss";
import { Alert } from "reactstrap";
class AppointmentInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      detail: "",
      quantity: "",
      price: "",
      total: "",
    };
  }
  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    alert(JSON.stringify(this.state));
    e.preventDefault();
  };
  state = {
    visible: true,
  };
  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="customerinfo appointmentdate">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
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
                      onClick={this.toggle.bind(this)}
                    >
                      Done
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <Alert
              color="light"
              isOpen={this.state.visible}
              toggle={this.toggle.bind(this)}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <form
                      action=""
                      method=""
                      className="customerform"
                      onSubmit={this.handlesubmit}
                    >
                      <div className="form-group ">
                        <label>Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername"
                          placeholder="Username"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleall}
                        />
                      </div>
                      <div className="form-group">
                        <label>Detail</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputDetail"
                          placeholder="Detail"
                          name="detail"
                          value={this.state.detail}
                          onChange={this.handleall}
                        />
                      </div>
                      <div className="form-group">
                        <label>Quantity</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputQuantity"
                          placeholder="Quantity"
                          name="quantity"
                          value={this.state.quantity}
                          onChange={this.handleall}
                        />
                      </div>
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPrice"
                          placeholder="Price"
                          name="price"
                          value={this.state.price}
                          onChange={this.handleall}
                        />
                      </div>
                      <div className="form-group">
                        <label>Total</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputTotal"
                          placeholder="Total"
                          name="total"
                          value={this.state.total}
                          onChange={this.handleall}
                        />
                      </div>
                      <button type="submit" className="btn btn-info">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Alert>
          </div>
        </div>
      </div>
    );
  }
}
export default AppointmentInfo;
