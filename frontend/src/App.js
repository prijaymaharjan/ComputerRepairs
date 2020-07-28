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

//Main service
import Services from "./components/Services";

import { BrowserRouter, Route, Switch } from "react-router-dom";

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
