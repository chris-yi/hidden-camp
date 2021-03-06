import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import Details from "./components/Details/Details";
import MyProfile from "./components/MyProfile/MyProfile";
import MyFancyComponent from "./components/Map/Map";
import UpdateListing from "./components/UpdateListing/UpdateListing";
import MyListings from "./components/MyListings/MyListings";
import MyRequests from "./components/MyRequests/MyRequests";
import MyTrips from "./components/MyTrips/MyTrips";
import AddListing from "./components/AddListing/AddListing";
import Messages from "./components/Messages/Messages";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Results" component={Results} />
        <Route path="/Details" component={Details} />
        <Route path="/MyProfile" component={MyProfile} />
        <Route path="/Map" component={MyFancyComponent} />
        <Route path="/UpdateListing/:id" component={UpdateListing} />
        <Route path="/MyListings" component={MyListings} />
        <Route path="/MyRequests" component={MyRequests} />
        <Route path="/MyTrips" component={MyTrips} />
        <Route path="/AddListing" component={AddListing} />
        <Route path="/Messages" component={Messages} />
        <Route path="/About" component={About} />
        <Route path="/NotFound" component={NotFound} />
      </div>
    );
  }
}

export default App;
