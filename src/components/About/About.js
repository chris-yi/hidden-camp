import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";


class About extends Component {
    render() {
      return (
        <div className="About_Hidden_Camp">
            <div>
            <Navbar/>
            </div>
            <div className="About_Container">
                <div className="About_Details">
                <h1>About</h1>
                <p>Hidden Camp was created as a personal project while attending DevMountain.  The idea of the App is for Hosts to list their private land for camp sites.  Users that want to go on unique secluded adventures can request a booking through the site and interact with the Host.  </p>
                </div>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
      );
    }
  }

  export default About;