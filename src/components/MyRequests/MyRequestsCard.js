import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./MyRequestsCard.css";

class MyRequestsCard extends Component {
  constructor(props) {
    super(props);

    this.approve = this.approve.bind(this);
    this.approveRequest = this.approveRequest.bind(this);
  }

  // To display requests that needs user approval
  approve() {
    if (!this.props.accepted) {
      return (
        <div>
          <button onClick={this.approveRequest}>Accept</button>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Approved!</h4>
        </div>
      );
    }
  }

  approveRequest() {
    axios.put(`/api/approve/${this.props.bookingID}`).then(() => {
      console.log("Listing Updated");
    });
  }

  render() {
    return (
      <div className="My_Request_Container">
        <div className="Request_Img_Container">
          <img src={this.props.img} alt="request_img" className="Request_Img" />
        </div>
        <div>
          <h4>{this.props.listingName}</h4>
          <p>{this.props.userID}</p>
          <p>{this.props.checkInDate}</p>
          <p>{this.props.checkOutDate}</p>
          <p>{this.props.pending}</p>
          <p>{this.props.totalCost}</p>
          {this.approve()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(MyRequestsCard);
