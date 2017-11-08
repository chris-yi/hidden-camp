import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import axios from "axios";
import { getHostListings, getRequests, getTrips } from "../../ducks/reducer";
import MyTripsCard from "./MyTripsCard";
import { Link } from "react-router-dom";
import "./MyProfile.css";

class MyProfile extends Component {
  componentDidMount() {
    // GET ALL HOST LISTINGS
    axios.get(`/api/hostlistings/${this.props.user.user_id}`).then(results => {
      this.props.getHostListings(results.data);
    });
    // GET ALL BOOKING REQUESTS
    axios.get(`/api/requests/${this.props.user.user_id}`).then(results => {
      this.props.getRequests(results.data);
    });
    // GET ALL USER TRIPS
    axios.get(`/api/trips/${this.props.user.user_id}`).then(results => {
        this.props.getTrips(results.data);
        console.log(results.data);
      });
  }

  render() {


      const tripsArr = this.props.trips
      ? this.props.trips.map((e, i) => {
          console.log(this.props.trips)
          return (
            <MyTripsCard
              key={i}
              tripsImg={e.img_1}
              listingName={e.listing_name}
              checkInDate={e.check_in_date}
              checkOutDate={e.check_out_date}
              pending={e.pending}
              totalCost={e.total_cost}
            />
          );
        })
      : null;

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


            

          </div>
          <div className="Listing_Booking">
            <div className="My_Listings">
              my listings
              {/* {hostListingsArr} */}
            </div>
            <div className="Requests">
              Requests
              {/* {requestsArr} */}
            </div>
            <div className="Trips">
              My Trips
             {tripsArr}
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

export default connect(mapStateToProps, { getHostListings, getRequests, getTrips })(
  MyProfile
);
