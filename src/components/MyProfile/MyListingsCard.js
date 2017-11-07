import React, { Component } from "react";
import { connect } from "react-redux";
import "./MyListingsCard.css";
import axios from "axios";
import {getHostListings} from "../../ducks/reducer";

class MyListingsCard extends Component {
    constructor(props) {
        super(props)
        
        this.deleteListing = this.deleteListing.bind(this);
    }

    deleteListing() {
        axios.delete(`/api/listing/${this.props.listingID}`).then(() => {
            axios.get(`/api/hostlistings/${this.props.user.user_id}`).then(results => {
                this.props.getHostListings(results.data);
              });
        })
    }

  render() {
    return (
        <div className="My_Listings_Container">
        <div className="Listing_Img_Container">
            <img src={this.props.listingImg} alt="listing_img" className="Listing_Img"/>
        </div>
        <div>
            <p>{this.props.listingName}</p>
            <p>{this.props.city}</p>
            <p>{this.props.state}</p>
        </div>
        <div>
            <button>Update</button>
            <button onClick={this.deleteListing}>Delete</button>
        </div>
        </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {getHostListings})(MyListingsCard);