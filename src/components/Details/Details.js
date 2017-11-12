import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Details.css";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb
} from "react-responsive-carousel";
// import DateTimePicker from 'material-ui-datetimepicker';
// import DatePicker from 'material-ui/DatePicker';
// import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
// import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';

import DatePicker from "material-ui/DatePicker";

import Footer from "../Footer/Footer";
import MyFancyComponent from "../Map/Map";
import swal from "sweetalert";
import moment from 'moment';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: null,
      user_id: null,
      // listing_id: null,
      check_in_date: null,
      check_out_date: null,
      // total_cost: null,
      // host_id: null
      check_in_date_string: null,
      check_out_date_string: null
    };

    this.getListing = this.getListing.bind(this);
    this.toilet = this.toilet.bind(this);
    this.postBooking = this.postBooking.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  componentWillMount = () => {
    this.getListing();
  };

  getListing() {
    const listing = this.props.allListings.filter(e => {
      return e.listing_id === this.props.listingID;
    });
    this.setState({
      listing: listing
    });
  }

  // TO BOOK A LISTING
  postBooking() {

    // To get the number of days for booking.
    const startDate = moment(this.state.check_in_date_string, "MM-DD-YYYY")
    const endDate = moment(this.state.check_out_date_string, "MM-DD-YYYY")
    const numberOfDays = endDate.diff(startDate, "days")

    console.log(numberOfDays);
    if (!this.props.user) {
      swal({
        title: "Please Signup/Login Before Booking!",
        // text:("Address: " + this.state.listing[0].address , "Price: $" + this.state.listing[0].price_per_night, "Check-In: " + this.state.listing[0].check_in_time, "Check-Out: " + this.state.listing[0].check_out_time),
        icon: "warning",
        buttons: true,
        dangerMode: false
      }).then(() => {
        window.location.href = process.env.REACT_APP_LOGIN;
      });
    } else if (this.state.check_in_date === null || this.state.check_out_date === null){
      swal({
        title: "Please enter the dates for your trip before booking!",
        icon: "warning"
      });
    }else {
      swal({
        title: "Please confirm your Booking!",
        // text:("Address: " + this.state.listing[0].address , "Price: $" + this.state.listing[0].price_per_night, "Check-In: " + this.state.listing[0].check_in_time, "Check-Out: " + this.state.listing[0].check_out_time),
        text: `Total: $${this.state.listing[0].price_per_night * numberOfDays}`,
        icon: "info",
        buttons: true,
        dangerMode: false
      }).then(confirm => {
        if (confirm) {
          swal({
            title: "Thank you!",
            text: "Your request has been sent to the Host!",
            icon: "success"
          });
          axios.post(`/api/booking/`, {
            user_id: this.props.user.user_id,
            listing_id: this.state.listing[0].listing_id,
            check_in_date: this.state.check_in_date_string,
            check_out_date: this.state.check_out_date_string,
            total_cost: this.state.listing[0].price_per_night,
            host_id: this.state.listing[0].host_id
          });
        } else {
          swal({
            title: "Ok, please re-submit when you're ready!",
            icon: "warning"
          });
        }
      });
    }
  }

  // AMENITIES ICON DISPLAY //

  fires() {
    if (this.state.listing[0].fires) {
      return (
        <div className="Details_Icon">
          Fire: <i className="fa fa-fire" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].fires) {
      return (
        <div className="Details_Icon">
          <strike>Fires: Unavailable</strike>
        </div>
      );
    }
  }

  water() {
    if (this.state.listing[0].potable_water) {
      return (
        <div className="Details_Icon">
          Potable Water: <i className="fa fa-tint" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].potable_water) {
      return (
        <div className="Details_Icon">
          <strike>Water: Unavailable</strike>
        </div>
      );
    }
  }

  pets() {
    if (this.state.listing[0].pets) {
      return (
        <div className="Details_Icon">
          Pets: <i className="fa fa-paw" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].pets) {
      return (
        <div className="Details_Icon">
          <strike>Pets: Unavailable</strike>
        </div>
      );
    }
  }

  toilet() {
    if (this.state.listing[0].toilets) {
      return (
        <div className="Details_Icon">
          Toilets:{" "}
          <i className="fa fa-male" aria-hidden="true">
            <i className="fa fa-female" aria-hidden="true" />
          </i>
        </div>
      );
    } else if (!this.state.listing[0].toilets) {
      return (
        <div className="Details_Icon">
          <strike>Bathroom: Unavailable</strike>
        </div>
      );
    }
  }

  trash() {
    if (this.state.listing[0].trash) {
      return (
        <div className="Details_Icon">
          Trash: <i className="fa fa-trash" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].trash) {
      return (
        <div className="Details_Icon">
          <strike>Trash: Unavailable</strike>
        </div>
      );
    }
  }

  showers() {
    if (this.state.listing[0].showers) {
      return (
        <div className="Details_Icon">
          Showers: <i className="fa fa-bath" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].showers) {
      return (
        <div className="Details_Icon">
          <strike>Showers: Unavailable</strike>
        </div>
      );
    }
  }

  wifi() {
    if (this.state.listing[0].wifi) {
      return (
        <div className="Details_Icon">
          Wifi: <i className="fa fa-wifi" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].wifi) {
      return (
        <div className="Details_Icon">
          <strike>Wifi: Unavailable</strike>
        </div>
      );
    }
  }

  // setCheckIn = (check_in_date) => {
  //   this.setState({ check_in_date })
  // }
  // setCheckOut = (check_out_date) => this.setState({ check_out_date })

  handleCheckIn = (event, date) => {
    this.setState({
      check_in_date: date,
      check_in_date_string: moment(date).format("MM-DD-YYYY")
    });
  };

  handleCheckOut = (event, date) => {
    this.setState({
      check_out_date: date,
      check_out_date_string: moment(date).format("MM-DD-YYYY")
    });
  };

  render() {

    console.log(this.state.listing);
    const details = this.state.listing[0];
    console.log(details);
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="Details_Container" />
        <div className="Carousel_Container">
          <div className="Carousel_Length">
            <Carousel
              showArrows={true}
              onChange={onChange}
              onClickItem={onClickItem}
              onClickThumb={onClickThumb}
            >
              <div>
                <img src={details.img_1} alt="img-1" />
              </div>
              <div>
                <img src={details.img_2} alt="img-2" />
              </div>
              <div>
                <img src={details.img_3} alt="img-3" />
              </div>
              <div>
                <img src={details.img_4} alt="img-4" />
              </div>
              <div>
                <img src={details.img_5} alt="img-5" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="Listing_Container">
          <div className="Listing_Details">
            <div className="Listing_Content">
              <div className="Name_Price">
                <div>
                  <h1 className="Listing_Name">{details.listing_name}</h1>
                </div>

                <div className="Request_Container">
                  <div>
                    <h3 className="Request_Price">
                      ${details.price_per_night}
                    </h3>
                  </div>
                  <div className="Request_Button" onClick={this.postBooking}>
                    <h3>Request to Book</h3>
                  </div>
                </div>
              </div>
              <div className="Location_Request">
                <div>
                  <h3 className="Listing_City_State">
                    {details.city.charAt(0).toUpperCase() + details.city.slice(1)}, {details.state}
                  </h3>
                  <p className="Location_Details">{details.description}</p>
                </div>
                <div className="Date_Picker_Main">
                  <div className="Date_Picker">

                    <DatePicker
                      hintText="Check-In Date"
                      onChange={this.handleCheckIn}
                      formatDate={(date) => moment(date).format('MM-DD-YYYY')}
                    />

                    <DatePicker
                      hintText="Check-Out Date"
                      onChange={this.handleCheckOut}
                      formatDate={(date) => moment(date).format('MM-DD-YYYY')}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="Amenities">
                <h3>Amenities</h3>
                <div className="Amenities_Logo">
                  <div>
                    <div>
                      <p>{this.fires()}</p>
                      <p>{this.water()}</p>
                      <p>{this.pets()}</p>
                      <p>{this.toilet()} </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>{this.trash()}</p>
                      <p>{this.showers()}</p>
                      <p>{this.wifi()}</p>
                    </div>
                  </div>
                  <div className="buffer" />
                </div>
              </div>
              <hr />
              <div className="Details">
                <h3>Details</h3>
                <div className="Details_Info">
                  <div className="Details">
                    <p>Max Campers: {details.max_campers}</p>
                    <p>Minimum Nights stay: {details.min_night_stay}</p>
                    <p>Category: {details.category}</p>
                    <p>Check-In: {details.check_in_time}</p>
                    <p>Check-Out: {details.check_out_time}</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="Maps">
                <h3>Map</h3>
                <div className="Details_Map">
                  <MyFancyComponent />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allListings: state.allListings,
    listingID: state.listingID,
    user: state.user
  };
}

export default connect(mapStateToProps, {})(Details);
