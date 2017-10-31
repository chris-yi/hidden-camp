import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { getListings } from "../../ducks/reducer"

class Results extends Component {

    // componentWillMount() {
    //     this.props.getListings();
    // }

    render() {
        const allListings = this.props.allListings
        console.log(this.props.allListings)
        return(
            <div>
                <h1>Results Page</h1>
                {allListings.length ? (<h1>{allListings[0].address}</h1>) : (<i className="fa fa-cog fa-spin fa-2x fa-fw"></i>)}
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



