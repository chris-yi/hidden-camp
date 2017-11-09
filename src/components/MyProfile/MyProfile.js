import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MyProfile.css";

class MyProfile extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="Profile_Container">
          <div className="Avatar">
            <div className="Avatar_Img_Container">
              <img
                src={this.props.user.img}
                alt="profile-img"
                className="Profile_Img"
              />
            </div>
            <div className="Avatar_About">
              <h1>{this.props.user.user_name}</h1>
            </div>

            <Link to="/MyListings">
              <button>My Listings</button>
            </Link>

            <Link to="/MyRequests">
              <button>Requests</button>
            </Link>

            <Link to="/MyTrips">
              <button>My Trips</button>
            </Link>
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
