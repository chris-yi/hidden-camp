import React, { Component } from "react";
// import axios from "axios";
import ResultCard from "./ResultsCard";
import { connect } from "react-redux";
import { getListings } from "../../ducks/reducer";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Results.css";


class Results extends Component {

    // componentDidMount() {
    //     axios.get("/api/listings").then(results => {
    //         console.log(results.data)
    //         this.props.getListings(results.data);
    //     })
    // }

    render() {
        const allListings = this.props.allListings
        console.log(this.props.allListings)

        const resultsArr = this.props.allListings?
        this.props.allListings.map((e, i) => {
            return (
                <ResultCard 
                key={i}
                listingName={e.listing_name}
                listingID={e.listing_id}
                city={e.city}
                state={e.state}
                pricePerNight={e.price_per_night}
                maxCampers={e.max_campers}
                category={e.category}
                cardImg={e.img_1}
                />
            )
        }) : null;

        return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className="Results_Container">
                <div className="Results">
                    {/* {allListings.length ? (<h1>{allListings[0].address}</h1>) : (<i className="fa fa-cog fa-spin fa-2x fa-fw"></i>)} */}
                    <div className='results-box'>
                    {resultsArr}
                    </div>
                </div>
                <div className="Map">
                    <div className="Map_Text">MAP</div>
                </div>
            </div>
            <div>
            <Footer/>
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



