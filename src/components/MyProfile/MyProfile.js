import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import "./MyProfile.css";

const buttonStyle = {
  margin: 12,
};

class MyProfile extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="Profile_Container">
          <div className="Avatar">
            <div className="Avatar_Main">
            <div className="Avatar_Img_Container">
              <img
                src={this.props.user.img}
                alt="profile-img"
                className="Profile_Img"
              />
            </div>
            <div className="Avatar_About">
              <h1 className="Avatar_Name">{this.props.user.user_name}</h1>
            </div>
            </div>
            <div className="Profile_Buttons_Container">
            <Link to="/MyListings">
            <RaisedButton label="My Listings" style={buttonStyle}/>
            </Link>

            <Link to="/MyRequests">
            <RaisedButton label="Requests" style={buttonStyle}/>
            </Link>

            <Link to="/MyTrips">
            <RaisedButton label="My Trips" style={buttonStyle}/>
            </Link>
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

const mapStateToProps = state => {
  return {
    user: state.user,
    allListings: state.allListings,
    hostListings: state.hostListings,
    requests: state.requests,
    trips: state.trips
  };
};

export default connect(mapStateToProps, {})(MyProfile);
