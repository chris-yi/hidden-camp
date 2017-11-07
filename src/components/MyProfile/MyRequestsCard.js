import React, { Component } from "react";
import { connect } from "react-redux";
import "./MyRequestsCard.css";

class MyRequestsCard extends Component {
    constructor(props) {
        super(props)
        
    }

  render() {
    return (
        <div className="Request_Container">
        <div className="Request_Img_Container">
            <img src={this.props.img} alt="request_img" className="Request_Img"/>
        </div>
        <div>
            <h4>{this.props.listingName}</h4>
            <p>{this.props.userID}</p>
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

export default connect(mapStateToProps, {})(MyRequestsCard);