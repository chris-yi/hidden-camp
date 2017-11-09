import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { getHostListings, getRequests, getTrips } from "../../ducks/reducer";
import MyListingsCard from "./MyListingsCard";
import "./MyListings.css";

class MyListings extends Component {
  componentDidMount() {
    // GET ALL HOST LISTINGS
    axios.get(`/api/hostlistings/${this.props.user.user_id}`).then(results => {
      this.props.getHostListings(results.data);
    });
  }

  render() {
    const hostListingsArr = this.props.hostListings
      ? this.props.hostListings.map((e, i) => {
          return (
            <MyListingsCard
              key={i}
              listingImg={e.img_1}
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

    return (
      <div>
        <div>
          <Navbar />
        </div>

      <div className="My_Listings_Container">
        <div>
          <Link to={`/AddListing`}>
          <button>Add new listing</button>
          </Link>
        </div>

        <div className="My_Listings">
          my listings
          {hostListingsArr}
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
    hostListings: state.hostListings
  };
};

export default connect(mapStateToProps, {
  getHostListings,
  getRequests,
  getTrips
})(MyListings);
