import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";
import { Alert } from "reactstrap";
class AppointmentInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      detail: "",
      paymentmethod: "",
      quantity: "",
      price: "",
      totalamount: "",
      date: "",
      appointment: [],
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    };
  }

  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    const repairs = {
      Email: this.state.email,
      Detail: this.state.detail,
      Paymentmethod: this.state.paymentmethod,
      Quantity: this.state.quantity,
      Price: this.state.price,
      Totalamount: this.state.totalamount,
      Dates: this.state.date,
    };

    axios
      .post("http://localhost:3000/repair", repairs, this.config)
      .then((response) => {
        alert("Successfully Repair");
        console.log("Request Successfully", response);
      })
      .catch((error) => {
        console.log("Failed", error);
      });
  };
  state = {
    visible: true,
  };
  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
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
      <div className="customerinfo appointmentdate">
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
                  <th>Action</th>
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
                  );
                })}
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
                      action="#"
                      method="post"
                      className="customerform"
                      onSubmit={this.handlesubmit}
                    >
                      <div className="form-group ">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="mail"
                          placeholder="Email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleall}
                        />
                      </div>
                      <div className="form-group">
                        <label>Detail</label>
                        <input
                          type="text"
                          className="form-control"
                          id="detail"
                          placeholder="Detail"
                          name="detail"
                          value={this.state.detail}
                          onChange={this.handleall}
                        />
                      </div>
                      <div className="form-group">
                        <label>Payment Method</label>
                        <input
                          type="text"
                          className="form-control"
                          id="payment"
                          placeholder="Payment Method"
                          name="paymentmethod"
                          value={this.state.paymentmethod}
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
                          id="Price"
                          placeholder="Price"
                          name="price"
                          value={this.state.price}
                          onChange={this.handleall}
                        />
                      </div>
                      <div className="form-group">
                        <label>Total Amount</label>
                        <input
                          type="text"
                          className="form-control"
                          id="totalamount"
                          placeholder="Total Amount"
                          name="totalamount"
                          value={this.state.totalamount}
                          onChange={this.handleall}
                        />
                      </div>
                      <div className="form-group">
                        <label>Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          name="date"
                          value={this.state.date}
                          onChange={this.handleall}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-info"
                        onClick={this.handlesubmit}
                      >
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
