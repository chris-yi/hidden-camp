import React, { Component } from "react";
import { connect } from "react-redux";

class MyTripsCard extends Component {
    constructor(props) {
        super(props)
        
    }

  render() {
    return (
        <div>
            <p>{this.props.hostID}</p>
            <p>{this.props.checkInDate}</p>
            <p>{this.props.checkOutDate}</p>
            <p>{this.props.pending}</p>
            <p>{this.props.totalCost}</p>
            <hr/>
        </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {})(MyTripsCard);