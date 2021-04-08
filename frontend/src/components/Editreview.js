import React, { Component } from 'react';

class Editreview extends Component {
    render() {
        return (
            <div className="registeradmin appointmentdate editadmin">
            <div className="container">
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
                          
                            onChange={this.handleall}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                           
                            onChange={this.handleall}
                          />
                        </div>
                      </div>
    
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Review"
                            name="review"
                            id="review"
                            
                            onChange={this.handleall}
                          />
                        </div>
                       
                      </div>
    
                      <input
                        type="submit"
                        className="text-center fadeIn fourth savebtn"
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

export default Editreview;