import React, { Component } from "react";
import { connect } from "react-redux";
import "./MyTripsCard.css"

class MyTripsCard extends Component {
    constructor(props) {
        super(props)
        
    }

  render() {
    return (
        <div className="Trips_Container">
            <div className="Trips_Img_Container">
                <img src={this.props.tripsImg} alt="trips_img" className="Trips_Img"/>
            </div>
            <div>
                <h3>{this.props.listingName}</h3>
                <p>{this.props.checkInDate}</p>
                <p>{this.props.checkOutDate}</p>
                <p>{this.props.pending}</p>
                <p>{this.props.totalCost}</p>
            </div>
        </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {})(MyTripsCard);