import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {getRequests} from "../../ducks/reducer";
import swal from 'sweetalert'
import RaisedButton from 'material-ui/RaisedButton';
import "./MyRequestsCard.css";

const buttonStyle = {
  margin: 12,
};


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
          <RaisedButton label="Approve" style={buttonStyle} onClick={this.approveRequest}/>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Approved<i class="fa fa-check" aria-hidden="true"></i></h4>
        </div>
      );
    }
  }

  approveRequest() {
    axios.put(`/api/approve/${this.props.bookingID}`).then(() => {
        swal({
            title: "Request has been approved!",
            icon: "success"
        });
      console.log("Listing Approved");
      axios.get(`/api/requests/${this.props.user.user_id}`).then(results => {
        this.props.getRequests(results.data);
      });
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
          <p>{this.props.userName}</p>
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
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {getRequests})(MyRequestsCard);
