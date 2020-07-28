import React, { Component } from "react";
import "../scss/Main.scss";
import { Link } from "react-router-dom";
class Contactform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
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
      <div className="contact mb-5">
        <div className="container">
          <div className="row">
            <div class="col-md-7 col-sm-10">
              <div className="wow fadeInUp" data-wow-delay="0.4s">
                <form
                  onSubmit={this.handlesubmit}
                  id="contact-form"
                  action="#"
                  method="get"
                >
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleall}
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleall}
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleall}
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleall}
                      placeholder="Message"
                      required=""
                    />
                  </div>
                  <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                    <button
                      id="submit"
                      type="submit"
                      className="form-control"
                      name="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-5 col-sm-8">
              <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                <div className="section-title">
                  <h2>Contact Info</h2>
                  <p>
                    Lorem ipsum dolor sit consectetur adipiscing morbi venenatis
                    et tortor consectetur adipisicing lacinia tortor morbi
                    ultricies.
                  </p>
                </div>

                <p className="contactinfos">
                  <i className="fa fa-map-marker"></i> 456 New Street 22000, New
                  York City, USA
                </p>
                <p className="contactinfos">
                  <i className="fa fa-comment"></i>{" "}
                  <Link to="mailto:info@company.com">info@company.com</Link>
                </p>
                <p className="contactinfos">
                  <i className="fa fa-phone"></i> 010-020-0340
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contactform;
