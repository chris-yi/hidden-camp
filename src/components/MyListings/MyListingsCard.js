import React, { Component } from "react";
import { connect } from "react-redux";
import "./MyListingsCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { getHostListings, updateListingID } from "../../ducks/reducer";
import RaisedButton from 'material-ui/RaisedButton';
import swal from "sweetalert";

const buttonStyle = {
  margin: 12,
};

class MyListingsCard extends Component {
  constructor(props) {
    super(props);

    this.deleteListing = this.deleteListing.bind(this);
  }

  deleteListing() {
    swal({
      title: `Please confirm you want to delete listing: ${this.props
        .listingName}!`,
      buttons: true,
      dangerMode: false
    }).then(confirm => {
      if (confirm) {
        swal({
          title: "Your listing has been deleted",
          icon: "success"
        });

        axios.delete(`/api/listing/${this.props.listingID}`).then(() => {
          // To re render the page to show the deletion
          axios
            .get(`/api/hostlistings/${this.props.user.user_id}`)
            .then(results => {
              this.props.getHostListings(results.data);
            });
        });
      } else {
        swal({
          title: "Ok, please re-submit when you're ready!",
          icon: "warning"
        });
      }
    });
  }

  render() {
    return (

      <div className="My_Listing_Container">
        <div className="Listing_Img_Container">
          <img
            src={this.props.listingImg}
            alt="listing_img"
            className="Listing_Img"
          />
        </div>
        <div>
          <h2>{this.props.listingName}</h2>
          <p>{this.props.city}</p>
          <p>{this.props.state}</p>
        </div>
        <div>
          <Link to={`/UpdateListing/${this.props.listingID}`}>
          <RaisedButton label="Update" style={buttonStyle}/>
          </Link>
          <RaisedButton label="Delete" style={buttonStyle} onClick={this.deleteListing}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getHostListings, updateListingID })(
  MyListingsCard
);
