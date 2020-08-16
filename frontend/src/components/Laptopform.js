import React, { Component } from "react";
import "../scss/Main.scss";
import axios from "axios";
class Laptopform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      laptop: [],
      model: "",
      description: "",
      config: {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
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

    const laptops = {
      Model: this.state.model,
      Description: this.state.description,
    };
    axios
      .post("http://localhost:3000/laptop", laptops, this.state.config)
      .then((response) => {
        console.log("Request Succeded", response);
      })
      .catch((err) => console.log(err.response));
  };
  render() {
    return (
      <div className="laptopform">
        <div className="container">
          <form
            className="form mb-5"
            onSubmit={this.handlesubmit}
            action="#"
            method="post"
          >
            <div className="form-row model">
              <div className="form-group col-md-9">
                <input
                  type="text"
                  className="form-control fadeIn second"
                  id="model"
                  placeholder="Model"
                  name="model"
                  value={this.state.model}
                  onChange={this.handleall}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control fadeIn seven"
                rows="5"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleall}
              />
            </div>

            <input
              type="submit"
              className="text-center fadeIn fourth"
              value="Submit"
              onClick={this.handlesubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Laptopform;
