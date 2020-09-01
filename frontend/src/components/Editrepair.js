import React, { Component } from "react";
import "../scss/Main.scss";
import Axios from "axios";

class Editrepair extends Component {
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
      User: [],
      config: { headers: { Authorization: localStorage.getItem("token") } },
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      Axios.get(`http://localhost:3000/repair/${id}`, this.state.config)
        .then((res) => {
          console.log(res.data);
          if (res.data != null) {
            this.setState({
              email: res.data.Email,
              detail: res.data.Detail,
              paymentmethod: res.data.Paymentmethod,
              quantity: res.data.Quantity,
              price: res.data.Price,
              totalamount: res.data.Totalamount,
              date: res.data.Date,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }

  handleall = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    const id = this.props.match.params.id;
    e.preventDefault();
    const regs = {
      email: this.state.email,
      detail: this.state.detail,
      paymentmethod: this.state.paymentmethod,
      quantity: this.state.quantity,
      price: this.state.price,
      totalamount: this.state.totalamount,
      date: this.state.date,
    };
    Axios.put(`http://localhost:3000/repair/${id}`, regs, this.state.config)
      .then((response) => {
        this.props.history.push(`/Admin`);
        console.log("Request Successfully", response);
      })
      .catch((error) => {
        console.log("Failed", error);
      });
  };
  render() {
    return (
      <div className="registeradmin appointmentdate editadmin">
        <div className="container">
          <div className="editpara pt-5">
            <h3 className="font-weight-bold">Update Repair Information</h3>
          </div>
          <div className="form">
            <div className="form-content">
              <form action="" method="post" onSubmit={this.handlesubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Detail"
                        name="detail"
                        value={this.state.detail}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Payment Method"
                        name="paymentmethod"
                        id="paymentmethod"
                        value={this.state.paymentmethod}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Quantity"
                        id="quantity"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="price"
                        name="price"
                        id="price"
                        value={this.state.price}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Total Amount"
                        name="totalamount"
                        id="totalamount"
                        value={this.state.totalamount}
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date"
                        name="date"
                        id="date"
                        value={this.state.date}
                        onChange={this.handleall}
                      />
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="text-center fadeIn fourth savebtn ml-5"
                    value="Save"
                    onClick={this.handlesubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Editrepair;
