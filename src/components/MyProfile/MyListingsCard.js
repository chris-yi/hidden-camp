import React, { Component } from "react";
import { connect } from "react-redux";

class MyListingsCard extends Component {
    constructor(props) {
        super(props)
        
    }

  render() {
    return (
        <div>
            <p>{this.props.listingName}</p>
            <p>{this.props.city}</p>
            <p>{this.props.state}</p>
        </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {})(MyListingsCard);