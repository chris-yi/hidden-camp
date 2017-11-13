import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ReactLogo from "../../Assets/reactlogo.png";
import ReduxLogo from "../../Assets/reduxlogo.png";
import NodejsLogo from "../../Assets/nodejs.png";
import PostgresqlLogo from "../../Assets/postgresql.png";
import JavaScriptLogo from "../../Assets/javascript.png";
import HTMLLogo from "../../Assets/htmlnew.png";
import CssLogo from "../../Assets/cssnew.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About_Hidden_Camp">
        <div>
          <Navbar />
        </div>
        <div className="About_Container">
          <div className="About_Details">
            <h1>About</h1>
            <p>
              Hidden Camp was created as a personal project while attending
              DevMountain. The idea of the App is for Hosts to list their
              private land for camp sites. Users that want to go on unique
              secluded adventures can request a booking through the site and
              interact with the Host.{" "}
            </p>
          </div>
          <div className="About_Technologies">
            <h1>Technologies Used</h1>
            <div className="Tech-Logos">
              <img
                src={JavaScriptLogo}
                alt="JavaScript"
                className="About_Logos"
              />
              <img src={ReactLogo} alt="react" className="About_Logos" />
              <img src={ReduxLogo} alt="redux" className="Redux" />
              <img src={NodejsLogo} alt="nodejs" className="About_Logos" />
              <img
                src={PostgresqlLogo}
                alt="postgresql"
                className="About_Logos"
              />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
