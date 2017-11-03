import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./Details.css";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb
} from "react-responsive-carousel";

class Details extends Component {
  constructor() {
    super();

    this.state = {
      listing: null
    };

    this.getListing = this.getListing.bind(this);
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
            <div>
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
          <div className="Listing_Details">
            <h1>Details</h1>
            <h1>{details.listing_name}</h1>
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
