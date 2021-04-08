import React, { Component } from 'react';
import "../scss/Main.scss";
import img1 from "../image/aspire_3_2.jpg";
import Footer from "./Footer";
class Productinfo extends Component {
    render() {
        return (
            <div className="productinfo">
                <div className="title-wrapper">
                <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-holder text-left">
                  <h1 className="page-title">Laptop Information</h1>
                </div>
              </div>
            </div>
          </div>
                </div>
               <div className="Product mt-5">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-3 col-md-3">
                                <img className = "img" src={img1}/>
                           </div>
                           <div className="col-lg-7 col-md-7 inf" >
                              <h1 className="lapinfo">Acer Aspire E15 i3</h1>
                              <p className="lapprice">Rs 42,500</p>
                              <div className="quantity">
                                <input type="number" step="1" min="1" max name="quantity" title="qty"/>
                              </div>
                              <input type="hidden" name="add-to-cart" value="120"></input>
                              
                              <button type="submit" className="single-add">Add to Cart</button>
                           </div>
                       </div>

                       <div className="Description mt-5 ">
                    <h5 className="mb-3">Product Description</h5>
                    <div className="table mt-2">
                  <table class="table table-striped">
                 <thead>
                  <tr>
                   <th scope="col">Brand</th>
                  <th scope="col">Acer</th>
                           <th scope="col">Condition</th>
                        <th scope="col">New</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        
                        <th>Display:Size</th>
                        <td>15.6</td>
                        <th>Hard Drive Capacity</th>
                        <td>500GB</td>
                      </tr>
                      <tr>
                        <th>Memory:</th>
                        <td>4 GB</td>
                        <th>Model</th>
                        <td>Aspire E15 573</td>
                      </tr>
                      <tr>
                        <th scope="row">Operating System</th>
                        <td>Windows 10</td>
                        <th>Procesor Type:</th>
                        <td>i3 4th Generation</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                                
                  </div>
                     </div>             
               </div>

               <div className="Review mt-5 mb-5">
                  <h5>Reviews</h5>
                  <div className="container">
                  <form className="rvs">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Name </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>
                   <div className="form-group">
                    <label for="exampleFormControlTextarea1">Your Reviews</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                  </div>

                 </div>
               <Footer className="mt-5"/>
            </div>
        );
    }
}

export default Productinfo;