import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./UpdateListing.css"

class UpdateListing extends Component {
  constructor() {
    super();

    this.state = {
      listing: null,
      listing_name: ""
    };
    this.getListing = this.getListing.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount = () => {
    this.getListing();
  };

  getListing() {
    const listing = this.props.hostListings.filter(e => {
      console.log(e.listing_id, this.props.match.params.id);
      return e.listing_id === +this.props.match.params.id;
    });
    this.setState({
      listing: listing
    });
  }

  handleChange() {
      this.setState({
        listing_name: this.refs.listingName.value
      })
  }

  render() {
    console.log(this.props);
    console.log(this.props.match.params.id);

    const updateListing = this.state.listing[0];
    console.log(updateListing);
    return (
      <div>
        <div>
          <h1>Listing: {updateListing.listing_name}</h1>

        <div className="Update_Details_Container">
          <div className="Text_Input">
          <div>
            <h4>Listing Name:</h4>
            <input ref="listingName" type="text" defaultValue={updateListing.listing_name} onChange={this.handleChange} placeholder="hello"/>
          </div>
          <div>
          <h4>Address:</h4>
            <input type="text" defaultValue={updateListing.address} />
          </div>
          <div>
          <h4>City:</h4>
            <input type="text" value={updateListing.city} onChange={this.handleChange} />
          </div>
          <div>
          <h4>State:</h4>
            <input type="text" value={updateListing.state} />
          </div>
          <div>
          <h4>Zip:</h4>
            <input type="text" value={updateListing.zip} />
          </div>
          <div>
          <h4>Image 1:</h4>
            <input type="text" value={updateListing.img_1} />
          </div>
          <div>
          <h4>Image 2:</h4>
            <input type="text" value={updateListing.img_2} />
          </div>
          <div>
          <h4>Image 3:</h4>
            <input type="text" value={updateListing.img_3} />
          </div>
          <div>
          <h4>Image 4:</h4>
            <input type="text" value={updateListing.img_4} />
          </div>
          <div>
          <h4>Image 5:</h4>
            <input type="text" value={updateListing.img_5} />
          </div>
          <div>
          <h4>Price Per Night:</h4>
            <input type="text" value={updateListing.price_per_night} />
          </div>
          </div>

        <div className="True_False">
          <h4>Amenities Available (Check ones avaiable)</h4>
          <h4>Fire</h4>
          <input type="checkbox" value={updateListing.fires} />
          <h4>Pets</h4>
          <input type="checkbox" value={updateListing.pets} />
          <h4>Running Water</h4>
          <input type="checkbox" value={updateListing.potable_water} />
          <h4>Showers</h4>
          <input type="checkbox" value={updateListing.showers} />
          <h4>Restrooms</h4>
          <input type="checkbox" value={updateListing.toilets} />
          <h4>Trash</h4>
          <input type="checkbox" value={updateListing.trash}
           />
           <button>Submit</button>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hostListings: state.hostListings,
    user: state.user
  };
}

export default connect(mapStateToProps, {})(UpdateListing);
