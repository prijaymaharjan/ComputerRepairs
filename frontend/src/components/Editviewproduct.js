import React, { Component } from 'react';

class Editviewproduct extends Component {
    render() {
        return (
            <div>
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
                        placeholder="Brand"
                        name="brand"
                                                
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Condition"
                        name="condition"
                        
                        onChange={this.handleall}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Display Size"
                        name="displayname"
                        id="displayname"
                          onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Hard Drive Capacity"
                        id="harddrive"
                        name="harddrive"
                         onChange={this.handleall}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Memory"
                        name="memory"
                        id="memory"
                      
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Model"
                        name="model"
                        
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Operating System"
                        name="operatingsystem"
                       
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 atjust">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Processor Type"
                       
                        name="processortype"
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Weight"
                         name="weight"
                       
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
            </div>
        );
    }
}

export default Editviewproduct;