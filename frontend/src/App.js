import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Repair from "./components/Repair";
import Column from "./components/Column";
import OurServices from "./components/OurServices";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Appointment from "./components/Appointment";

import Navcart from "./components/Navcart";
import PrivateRoute from "./components/PrivateRoute";

import Admin from "./components/Admin";
import Customprofile from "./components/Customprofile";
import Technicanprofile from "./components/Technicanprofile";
import Edit from "./components/Edit";
import Editrepair from "./components/Editrepair";

import Editappointment from "./components/Editappointment";
//Main service
import Services from "./components/Services";
import Product from "./components/Product";
import Productinfo from "./components/Productinfo";
import AddProduct from "./components/AddProduct";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Viewproduct from "./components/Viewproduct";
import ViewReview from "./components/ViewReview";
import editreviw from "./components/Editreview";
import Editreview from "./components/Editreview";
import Editviewproduct from "./components/Editviewproduct";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/appointment" exact component={Appointment}></Route>
          <Route path="/navcart" exact component={Navcart}></Route>

          <Route path="/admin" exact component={Admin}></Route>
          <Route
            path="/customprofile"
            exact
            component={Customprofile}
          ></Route>
          <Route path="/edit/:id" exact component={Edit}></Route>
          <Route path="/editrepair/:id" exact component={Editrepair}></Route>
          <Route
            path="/editappointment/:id"
            exact
            component={Editappointment}
          ></Route>

          <Route
            path="/technicanprofile"
            exact
            component={Technicanprofile}
          ></Route>
          <Route path="/product" exact component={Product}></Route>
          <Route path="/ProductInfo" exact component={Productinfo}></Route>
          <Route path="/addproduct" exact component={AddProduct}></Route>
          <Route path="/viewproduct" exact component={Viewproduct}></Route>
          <Route path="/viewreview" exact component={ViewReview}></Route>
          <Route path="/editreview/:id" exact component={Editreview}></Route>
          <Route path="/editviewproduct/:id" exact component={Editviewproduct}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>
      <Slider />
      <Repair />
      <Column />
      <OurServices />
      <Info />
      <Footer />
    </div>
  );
};
export default App;
