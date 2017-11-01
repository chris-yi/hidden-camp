import React, { Component } from 'react';
// import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import Site from "./components/Site/Site";
import Checkout from "./components/Checkout/Checkout"




class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/Results" component={Results}/>
        <Route path="/Site" component={Site}/>
        <Route path="/Checkout" component={Checkout}/>
      </div>
    );
  }
}

export default App;
