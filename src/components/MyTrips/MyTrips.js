import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import axios from "axios";
import { getTrips } from "../../ducks/reducer";
import MyTripsCard from "./MyTripsCard";
import { Link } from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import "./MyTrips.css";

const buttonStyle = {
  margin: 12,
};

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

        <div className="My_Trips_Container">

        <div className="My_Trips">
          {tripsArr}
        </div>

        <div className="Back_To_Profile">
          <Link to={`/MyProfile`}>
          <RaisedButton label="Back To Profile" style={buttonStyle}/>
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
    trips: state.trips
  };
};

export default connect(mapStateToProps, { getTrips })(MyTrips);
