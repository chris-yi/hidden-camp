import React, { Component } from "react";
// import axios from "axios";
import ResultCard from "./ResultsCard";
import { connect } from "react-redux";
import { getListings } from "../../ducks/reducer"


class Results extends Component {

    // componentWillMount() {
    //     this.props.getListings();
    // }

    render() {
        const allListings = this.props.allListings
        console.log(this.props.allListings)

        const resultsArr = this.props.allListings?
        this.props.allListings.map((e, i) => {
            return (
                <ResultCard 
                key={i}
                address={e.address}
                
                />
            )
        }) : null;

        return(
        <div>
            <div>
                <h1>Results Page</h1>
                {allListings.length ? (<h1>{allListings[0].address}</h1>) : (<i className="fa fa-cog fa-spin fa-2x fa-fw"></i>)}
                {resultsArr}
            </div>
            
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



