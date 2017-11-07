import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import axios from "axios";
import { getHostListings, getRequests, getTrips } from "../../ducks/reducer";
import MyListingsCard from "./MyListingsCard";
import MyRequestsCard from "./MyRequestsCard";
import MyTripsCard from "./MyTripsCard";
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
    const hostListingsArr = this.props.hostListings
      ? this.props.hostListings.map((e, i) => {
          return (
            <MyListingsCard
              key={i}
              listingName={e.listing_name}
              listingID={e.listing_id}
              city={e.city}
              state={e.state}
              pricePerNight={e.price_per_night}
              maxCampers={e.max_campers}
              category={e.category}
              cardImg={e.img_1}
            />
          );
        })
      : null;

    const requestsArr = this.props.requests
      ? this.props.requests.map((e, i) => {
          return (
            <MyRequestsCard
              key={i}
              userID={e.user_id}
              checkInDate={e.check_in_date}
              checkOutDate={e.check_out_date}
              pending={e.pending}
              totalCost={e.total_cost}
            />
          );
        })
      : null;

      const tripsArr = this.props.trips
      ? this.props.trips.map((e, i) => {
          console.log(this.props.trips)
          return (
            <MyTripsCard
              key={i}
              hostID={e.host_id}
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
            <img
              src={this.props.user.img}
              alt="profile-img"
              className="Profile_Img"
            />
            <h1>{this.props.user.user_name}</h1>
          </div>
          <div className="Listing_Booking">
            <div className="My_Listings">
              my listings
              {hostListingsArr}
            </div>
            <div className="Requests">
              Requests
              {requestsArr}
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
