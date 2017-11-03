import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ResultsCard.css";
import { updateListingID } from "../../ducks/reducer";

class ResultsCard extends Component {
    constructor(props) {
        super(props)
        
        this.showDetails = this.showDetails.bind(this)
    }

    showDetails(){
        console.log(this.props.listingID)
        this.props.updateListingID(this.props.listingID)

    }

  render() {
    return (
      <Link to="/Details">
        <div className="resultsCard" onClick={this.showDetails}>
            <img src={this.props.cardImg} alt="card_img" className="card_img" />

          <ul className="card_info">
            <p className="site_name">{this.props.listingName}</p>
            <p>
              in {this.props.city} | {this.props.state}
            </p>
            <li>{this.props.state}</li>
            <li>${this.props.pricePerNight.toString()}/night</li>
            <li>Max Campers:{this.props.maxCampers}</li>
            <li>Category: {this.props.category}</li>
          </ul>
        </div>
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeListingID: state.listingID
  };
}

export default connect(mapStateToProps, { updateListingID })(ResultsCard);
