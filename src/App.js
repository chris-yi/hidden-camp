import React, { Component } from 'react';
// import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import Site from "./components/Site/Site";
import Details from "./components/Details/Details";
import MyFancyComponent from "./components/Map/Map";





class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/Results" component={Results}/>
        <Route path="/Site" component={Site}/>
        <Route path="/Details" component={Details}/>
        <Route path="/Map" component={MyFancyComponent}/>
      </div>
    );
  }
}

export default App;
