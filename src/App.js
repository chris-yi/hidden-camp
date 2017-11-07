import React, { Component } from 'react';
// import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import Create from "./components/CreateListing/CreateListing";
import Details from "./components/Details/Details";
import MyProfile from "./components/MyProfile/MyProfile";
import MyFancyComponent from "./components/Map/Map";





class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/Results" component={Results}/>
        <Route path="/Create" component={Create}/>
        <Route path="/Details" component={Details}/>
        <Route path="/MyProfile" component={MyProfile}/>
        <Route path="/Map" component={MyFancyComponent}/>
      </div>
    );
  }
}

export default App;
