import React, { Component } from 'react';
import "../scss/Main.scss";
import Card from "./CardUI";
import img1 from "../image/aspire_3_2.jpg";
import img2 from "../image/57579405_03.jpg";
import img3 from "../image/Dell-Inspiron-15-3.jpg";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
class Product extends Component {
    render() {
        return (
            <div className="products">
                <div className="title-wrapper">
                <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-holder text-left">
                  <h1 className="page-title">Product Style</h1>
                </div>
              </div>
            </div>
          </div>
                </div>
                <h1 className="mt-3 text-uppercase">Products</h1>
                <p className="box-contents mb-5">
                We have highly skilled and expert team in laptop repair in Nepal. We repair and Service Laptop 
                of all brands including Acer,Apple , Asus,, Dell, Hp, Lenovo, Toshiba, IBM, Sony, Fujitsu, and 
                more. In our decade-long experience in Laptop repair service, we have found that many of our 
                clients call us for Laptop repair in Kathmandu, mostly faces common problem like cracked screen, 
                No power, display problem, unavailability of hardware drivers, degrading of operating system,
                 virus problem etc. The manufacturer?s service center takes long time to respond and resolve 
                 these issues.We at Computer Help Center promise you quick and timely delivering of laptop, 
                 Computer, Printer, repair in Nepal within 2 to 48 hours and that too in reasonable price.
                </p>

                    <div className="container mt-4 mb-5">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <Card 
                                imgsrc = {img1}
                                title = "Acer Aspire E15 i3"
                                text = " Rs 42,000 "
                                path = "#"
                                bt = {<Link className="productbtn" to="Productinfo">View Product</Link>}/>

                                
                                </div>
                                <div className="col-md-4 col-sm-12">
                                <Card 
                                imgsrc = {img2}
                                title = "Acer Aspire E15 Dual Core"
                                text = " Rs 26,000 "
                                path = "#"
                                bt = {<Link className="productbtn" to="/">View Product</Link>}/>

                                
                                </div>
                                <div className="col-md-4 col-sm-12">
                                <Card 
                                imgsrc = {img3}
                                title = "Dell 3450 latitude"
                                text = " Rs 42,000 "
                                path = "#"
                                bt = {<Link className="productbtn" to="/">View Product</Link>}/>

                                
                                </div>
                                

                        </div>
                    </div>
                    <Footer />
            </div>
        );
    }
}

export default Product;