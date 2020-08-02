import React, { Component } from "react";
import "../scss/Main.scss";
class Laptopform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: "",
      description: "",
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
  render() {
    return (
      <div className="laptopform">
        <div className="container">
          <form
            className="form mb-5"
            onSubmit={this.handlesubmit}
            action="#"
            method="get"
          >
            <div className="form-row">
              <div className="form-group col-md-9">
                <input
                  type="text"
                  className="form-control fadeIn second"
                  id="model"
                  placeholder="Model"
                  required=""
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
                required=""
              />
            </div>

            <input
              type="submit"
              className="text-center fadeIn fourth"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Laptopform;
