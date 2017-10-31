import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { getListings } from "../../ducks/reducer"

class Results extends Component {

    componentDidMount() {
        this.props.getListings();
    }

    render() {
        const allListings = this.props.allListings
        console.log(this.props.allListings)
        return(
            <div>
                <h1>Results Page</h1>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        allListings: state.allListings
    };
  }
  
  export default connect(mapStateToProps, {getListings})(Results);