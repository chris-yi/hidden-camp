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
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from "../Footer/Footer";
import MyFancyComponent from "../Map/Map";
import swal from 'sweetalert'


class Details extends Component {
  constructor() {
    super();

    this.state = {
      listing: null,
      user_id: null,
      // listing_id: null,
      check_in_date: null,
      check_out_date: null
      // total_cost: null,
      // host_id: null

    };

    this.getListing = this.getListing.bind(this);
    this.toilet = this.toilet.bind(this);
    this.postBooking = this.postBooking.bind(this);
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
    if(!this.props.user) {
      swal({
        title: "Please Signup/Login Before Booking!",
        // text:("Address: " + this.state.listing[0].address , "Price: $" + this.state.listing[0].price_per_night, "Check-In: " + this.state.listing[0].check_in_time, "Check-Out: " + this.state.listing[0].check_out_time),
        icon: "warning",
        buttons: true,
        dangerMode: false
      })
      .then(() => {
        window.location.href = "http://localhost:8080/auth"
      })
    } else {
      axios.post(`/api/booking/`, {
        user_id: this.props.user.user_id,
        listing_id: this.state.listing[0].listing_id,
        check_in_date: this.state.check_in_date,
        check_out_date: this.state.check_out_date,
        total_cost: this.state.listing[0].price_per_night,
        host_id: this.state.listing[0].host_id
      })
      swal({
        title: "Please confirm your Booking!",
        // text:("Address: " + this.state.listing[0].address , "Price: $" + this.state.listing[0].price_per_night, "Check-In: " + this.state.listing[0].check_in_time, "Check-Out: " + this.state.listing[0].check_out_time),
        text: `Total: $${this.state.listing[0].price_per_night * 3}`,
        icon: "info",
        buttons: true,
        dangerMode: false
      })
      .then((confirm) => {
        if (confirm) {
          swal({
            title: "Thank you!",
            text: "Your request has been sent to the Host!",
            icon: "success"
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
        <div>
          Fire: <i class="fa fa-fire" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].trash) {
      return (
        <div>
          <strike>Fires: Unavailable</strike>
        </div>
      );
    }
  }

  water() {
    if (this.state.listing[0].potable_water) {
      return (
        <div>
          Potable Water: <i class="fa fa-tint" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].trash) {
      return (
        <div>
          <strike>Water: Unavailable</strike>
        </div>
      );
    }
  }

  pets() {
    if (this.state.listing[0].pets) {
      return (
        <div>
          Pets: <i class="fa fa-paw" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].trash) {
      return (
        <div>
          <strike>Pets: Unavailable</strike>
        </div>
      );
    }
  }

  toilet() {
    if (this.state.listing[0].toilets) {
      return (
        <div>
          Toilets:{" "}
          <i class="fa fa-male" aria-hidden="true">
            <i class="fa fa-female" aria-hidden="true" />
          </i>
        </div>
      );
    } else if (!this.state.listing[0].trash) {
      return (
        <div>
          <strike>Bathroom: Unavailable</strike>
        </div>
      );
    }
  }

  trash() {
    if (this.state.listing[0].trash) {
      return (
        <div>
          Trash: <i class="fa fa-trash" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].trash) {
      return (
        <div>
          <strike>Trash: Unavailable</strike>
        </div>
      );
    }
  }

  showers() {
    if (this.state.listing[0].showers) {
      return (
        <div>
          Showers: <i class="fa fa-bath" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].trash) {
      return (
        <div>
          <strike>Showers: Unavailable</strike>
        </div>
      );
    }
  }

  wifi() {
    if (this.state.listing[0].showers) {
      return (
        <div>
          Wifi: <i class="fa fa-wifi" aria-hidden="true" />
        </div>
      );
    } else if (!this.state.listing[0].trash) {
      return (
        <div>
          <strike>Wifi: Unavailable</strike>
        </div>
      );
    }
  }

  setCheckIn = (check_in_date) => this.setState({ check_in_date })
  setCheckOut = (check_out_date) => this.setState({ check_out_date })


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

                  <h3 className="Request_Price">${details.price_per_night}</h3>

                </div>
                <div className="Request_Button" onClick={this.postBooking}>
                  <h3>Request to Book</h3>
                </div>
              </div>
              

            </div>
            <div className="Location_Request">
              <div>
                <h4 className="Listing_City_State">
                  {details.city}, {details.state}
                </h4>
                <p className="Location_Details">{details.description}</p>
              </div>
              <div className="Date_Picker_Main">
              <div classNAme="Date_Picker">
                <MuiThemeProvider>
                  <DateTimePicker 
                    onChange={this.setCheckIn}
                    DatePicker={DatePickerDialog}
                    TimePicker={TimePickerDialog}
                    floatingLabelFixed	
                    floatingLabelText="Check-In Date"
                    floatingLabelFocusStyle={{ marginTop: '10px' }}
                    disabled={false}
                    id="some-id"
                    fullWidth={false}
                    clearIcon={null}
                    />
                    <DateTimePicker 
                    onChange={this.setCheckOut}
                    DatePicker={DatePickerDialog}
                    TimePicker={TimePickerDialog}
                    floatingLabelFixed	
                    floatingLabelText="Check-In Date"
                    floatingLabelFocusStyle={{ marginTop: '10px' }}
                    disabled={false}
                    id="some-id"
                    fullWidth={false}
                    clearIcon={null}
                    />
                </MuiThemeProvider>
                </div>
              </div>
            </div>
            <hr />
            <div className="Amenities">
              <h3>Amenities</h3>
              <div className="Amenities_Logo">
                <div>
                  <div>
                    <h4>{this.fires()}</h4>
                    <h4>{this.water()}</h4>
                    <h4>{this.pets()}</h4>
                    <h4>{this.toilet()} </h4>
                  </div>
                </div>
                <div>
                  <div>
                    <h4>{this.trash()}</h4>
                    <h4>{this.showers()}</h4>
                    <h4>{this.wifi()}</h4>
                  </div>
                </div>
                <div className="buffer">
                </div>
              </div>
            </div>
            <hr />
          <div className="Details">
            <h3>Details</h3>
            <div className="Details_Info">
              <div className="Details">
                <p>Max Campers: {details.max_campers}</p>
                <p>Minimum Nights stay: {details.min_night_stay}</p>
                <p>Category: {details.Category}</p>
                <p>Check-in: {details.check_in_time}</p>
                <p>Check-out: {details.check_out_time}</p>
              </div>
            </div>
          </div>
          <hr/>
          <div className="Maps">
            <h3>Map</h3>
            <div className="Details_Map">
                <MyFancyComponent/>
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
