import React, { Component } from "react";
import ResultCard from "./ResultsCard";
import { connect } from "react-redux";
import { getListings } from "../../ducks/reducer";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MyFancyComponent from "../Map/Map";
import "./Results.css";

class Results extends Component {
  // componentDidMount(){
  //   this.props.allListings.length === 0 ? alert('Sup') : null
  // }
  render() {
    const resultsArr = this.props.allListings
      ? this.props.allListings.map((e, i) => {
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
              fire={e.fires}
              water={e.potable_water}
              pets={e.pets}
              toilets={e.toilets}
              trash={e.trash}
              showers={e.showers}
              wifi={e.wifi}
            />
          );
        })
      : null;

    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="Results_Container">
          <div className="Results">
            <div className="results-box">{resultsArr}</div>
          </div>
          <div className="Map">
            <MyFancyComponent />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allListings: state.allListings
  };
}

export default connect(mapStateToProps, { getListings })(Results);
