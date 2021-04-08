import React, { Component } from 'react';

class AddProduct extends Component {
    render() {
        return (
            <div>
                 <div className="registeradmin appointmentdate">
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
                        id="brand"
                       
                        onChange={this.handleall}
                      />
                    </div>
               
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Memory"
                        id="memory"
                        name="memory"
                       
                        onChange={this.handleall}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="displaysize"
                        className="form-control"
                        name="displaysize"
                        placeholder="Display Size"
                        
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
                        placeholder="Hard Drive Capacity"
                        name="harddrive"
                        id="harddrive"
                       
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Processor Type"
                        name="processortype"
                        id="processortype"
                       
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
                        id="model"
                       
                        onChange={this.handleall}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Weight"
                        name="weight"
                        id="weight"
                        
                        onChange={this.handleall}
                      />
                    </div>
                    
                  </div>
                  
                  <input
                    type="submit"
                    className="text-center fadeIn fourth"
                    value="Add Product"
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

export default AddProduct;