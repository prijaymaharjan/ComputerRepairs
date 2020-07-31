import React, { Component } from "react";
import "../scss/Main.scss";
import Shopcart from "./Shopcart";
import Footer from "./Footer";
class Shop extends Component {
  render() {
    return (
      <div className="title-wrapper mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="title-holder text-left">
                <h1 className="page-title">Shop</h1>
              </div>
              <Shopcart />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Shop;
