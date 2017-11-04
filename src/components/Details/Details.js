import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Details.css";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb
} from "react-responsive-carousel";
import Footer from "../Footer/Footer";

class Details extends Component {
  constructor() {
    super();

    this.state = {
      listing: null
    };

    this.getListing = this.getListing.bind(this);
    this.toilet = this.toilet.bind(this);
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
                <img src={details.img_1} />
              </div>
              <div>
                <img src={details.img_2} />
              </div>
              <div>
                <img src={details.img_3} />
              </div>
              <div>
                <img src={details.img_4} />
              </div>
              <div>
                <img src={details.img_5} />
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
              
              <Link to="/Checkout">
              <div className="Request_Container">
                <div>

                  <h3>${details.price_per_night}</h3>

                </div>
                <div className="Request_Button">
                  <h3>Request to Book</h3>
                </div>
              </div>
              </Link>
              

            </div>
            <div className="Location_Description">
              <h4>
                {details.city}, {details.state}
              </h4>
              <p>{details.description}</p>
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
            <div className="Details_1">
              <p>Max Campers: {details.max_campers}</p>
              <p>Minimum Nights stay: {details.min_night_stay}</p>
              <p>Category: {details.Category}</p>
            </div>
            <div className="Details_2">
            <p>Check-in: {details.check_in_time}</p>
            <p>Check-out: {details.check_out_time}</p>
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
    listingID: state.listingID
  };
}

export default connect(mapStateToProps, {})(Details);
