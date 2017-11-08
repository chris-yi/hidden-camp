import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import axios from "axios";
import {getRequests, getHostListings, getTrips} from "../../ducks/reducer";
import MyRequestsCard from "./MyRequestsCard";


class MyRequests extends Component {
  componentDidMount() {
    // GET ALL HOST LISTINGS
    axios.get(`/api/requests/${this.props.user.user_id}`).then(results => {
        this.props.getRequests(results.data);
      });
  }



  render() {
    const requestsArr = this.props.requests
    ? this.props.requests.map((e, i) => {
        return (
          <MyRequestsCard
            key={i}
            userID={e.user_id}
            img={e.img_1}
            listingName={e.listing_name}
            checkInDate={e.check_in_date}
            checkOutDate={e.check_out_date}
            pending={e.pending}
            totalCost={e.total_cost}
            accepted={e.accepted}
            bookingID={e.booking_id}

          />
        );
      })
    : null;



    return (
      <div>


        <div>
          <Navbar />
        </div>


   
        <div className="Requests">
        Requests
        {requestsArr}

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
    requests: state.requests

  };
};

export default connect(mapStateToProps, { getHostListings, getRequests, getTrips })(
  MyRequests
);
