import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Repair from "./components/Repair";
import Column from "./components/Column";
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
      <Services />
    </div>
  );
};
export default App;
