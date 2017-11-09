import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import axios from "axios";
import { getTrips } from "../../ducks/reducer";
import MyTripsCard from "./MyTripsCard";

class MyTrips extends Component {
  componentDidMount() {
    // GET ALL USER TRIPS
    axios.get(`/api/trips/${this.props.user.user_id}`).then(results => {
      this.props.getTrips(results.data);
      console.log(results.data);
    });
  }

  render() {
    const tripsArr = this.props.trips
      ? this.props.trips.map((e, i) => {
          console.log(this.props.trips);
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

        <div className="Trips">
          My Trips
          {tripsArr}
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
    trips: state.trips
  };
};

export default connect(mapStateToProps, { getTrips })(MyTrips);
