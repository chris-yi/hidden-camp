import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getListings } from "../../ducks/reducer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import unique_final from "./../../../src/Assets/unique_final.jpg";


// import { updateAllResults } from "../../ducks/reducer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.getSites = this.getSites.bind(this);
  }

  getSites() {
    axios.get("/api/listings").then(results => {
      console.log(results.data);
      this.props.getListings(results.data);
    });
  }

  getMountains() {
    console.log("Mountains");
  }

  render() {
    return (
      <div className="Home">
        {/* <div>
          <a href="http://localhost:8080/auth">
            <button>Log In</button>
          </a>
          {this.props.name}
        </div> */}
        <div className="jumbotron">
          <div>
            <Navbar />
          </div>
          <div className="main_tagline">
            <h1 className="explore">EXPLORE</h1>
            <h1 className="outdoors">THE OUTDOORS</h1>
          </div>
          <div className="search">
            <Link to="/Results">
              <h3 className="discover_button" onClick={this.getSites}>
                DISCOVER
              </h3>
            </Link>
          </div>
        </div>
        <div className="categories">
          <div className="categories_header">
            <h1>Explore</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <section className="photogrids">
          <div className="img_container" onClick={this.getMountains}>
              <img
                src="https://source.unsplash.com/7Tr0JIWs7NA"
                alt="mountains"
                className="mountains"
              />
              <div className="img_text">Mountains</div>
            </div>
            <div className="img_container">
              <img
                src="https://source.unsplash.com/J3ABLQjZQBg"
                alt="oceanfront"
              />
              <div className="img_text">Oceanfront</div>
            </div>
            <div className="img_container">
              <img
                src="https://source.unsplash.com/qKmtE3L5-X4"
                alt="lakeview"
                className=""
              />
              <div className="img_text">Lakeview</div>
            </div>
            <div className="img_container">
              <img src="https://source.unsplash.com/Gc7Ahec__XQ" alt="forest" 
              className="forest"
              />
              <div className="img_text">Forest</div>
            </div>
            <div className="img_container">
              <img
                src="https://source.unsplash.com/1azAjl8FTnU"
                alt="under-the-stars"
              />
              <div className="img_text">Under the stars</div>
            </div>
            <div className="img_container">
              <img
                src={unique_final}
                alt="gamping"
                className="gamping"
              />
              <div className="img_text">Unique Hideways</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

export default connect(mapStateToProps, { getListings })(Home);

// listing_name,
// img_1,
// img_2,
// img_3,
// img_4,
// img_5,
// fires,
// potable_water,
// pets,
// toilets,
// trash,
// showers,
// wifi,
// max_campers,
// price_per_night,
// min_night_stay,
// check_in_time,
// check_out_time,
// description
