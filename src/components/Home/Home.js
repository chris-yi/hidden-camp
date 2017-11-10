import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getListings,
  getMountainsListings,
  getOceanfrontListings,
  getLakeviewListings,
  getForestListings,
  getUnderTheStarsListings,
  getUniqueHideawaysListings
} from "../../ducks/reducer";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";
import unique_final from "./../../../src/Assets/unique_final.jpg";

// import { updateAllResults } from "../../ducks/reducer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.getSites = this.getSites.bind(this);
    this.getMountains = this.getMountains.bind(this);
    this.getOceanfront = this.getOceanfront.bind(this);
    this.getLakeview = this.getLakeview.bind(this);
    this.getForest = this.getForest.bind(this);
    this.getUnderTheStars = this.getUnderTheStars.bind(this);
    this.getUniqueHideaways = this.getUniqueHideaways.bind(this);
  }

  // Once user clicks "discover" get all results
  getSites() {
    axios.get("/api/listings").then(results => {
      this.props.getListings(results.data);
    });
  }

  // Get Mountain Listings
  getMountains() {
    // let category = e.target.className
    axios.get(`/api/listings/category/mountains`).then(results => {
      this.props.getMountainsListings(results.data);
    });
  }

  // Get Oceanfront Listings
  getOceanfront() {
    axios.get(`/api/listings/category/oceanfront`).then(results => {
      console.log(results.data);
      this.props.getOceanfrontListings(results.data);
    });
  }

  // Get Lakeview Listings
  getLakeview() {
    axios.get(`/api/listings/category/lakeview`).then(results => {
      console.log(results.data);
      this.props.getLakeviewListings(results.data);
    });
  }

  // Get Forest Listings
  getForest() {
    axios.get(`/api/listings/category/forest`).then(results => {
      console.log(results.data);
      this.props.getForestListings(results.data);
    });
  }

  // Get Under the Stars Listings
  getUnderTheStars() {
    axios.get(`/api/listings/category/under-the-stars`).then(results => {
      this.props.getUnderTheStarsListings(results.data);
    });
  }

  // Get Unique Hideaways
  getUniqueHideaways() {
    axios.get(`/api/listings/category/unique-hideaways`).then(results => {
      this.props.getUniqueHideawaysListings(results.data);
    });
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
            <h1>Categories</h1>
          </div>

          <section className="photogrids">
            <Link to="/Results">
                <div className="img_container" onClick={this.getMountains}>
                  <img
                    src="https://source.unsplash.com/7Tr0JIWs7NA"
                    alt="mountains"
                    className="mountains"
                  />
                  <div className="img_text" onClick={this.getMountains}>Mountains</div>
                </div>
            </Link>

            <Link to="/Results">
              <div
                className="oceanfront img_container"
                onClick={this.getOceanfront}
              >
                <img
                  src="https://source.unsplash.com/J3ABLQjZQBg"
                  alt="oceanfront"
                  className="oceanfront"
                />
                <div className="oceanfront img_text">Oceanfront</div>
              </div>
            </Link>

            <Link to="/Results">
              <div
                className="lakeview img_container"
                onClick={this.getLakeview}
              >
                <img
                  src="https://source.unsplash.com/qKmtE3L5-X4"
                  alt="lakeview"
                  className="lakeview"
                />
                <div className="lakeview img_text">Lakeview</div>
              </div>
            </Link>

            <Link to="/Results">
              <div className="forest img_container" onClick={this.getForest}>
                <img
                  src="https://source.unsplash.com/Gc7Ahec__XQ"
                  alt="forest"
                  className="forest"
                />
                <div className="forest img_text">Forest</div>
              </div>
            </Link>

            <Link to="/Results">
            <div className="img_container" onClick={this.getUnderTheStars}>
              <img
                src="https://source.unsplash.com/1azAjl8FTnU"
                alt="under-the-stars"
              />
              <div className="img_text">Under the stars</div>
            </div>
            </Link>

            <Link to="/Results">
            <div className="img_container" onClick={this.getUniqueHideaways}>
              <img src={unique_final} alt="gamping" className="gamping" />
              <div className="img_text">Unique Hideaways</div>
            </div>
            </Link>
          </section>
          <p className="categories_p">
              Discover hidden camps on moutains, lakes, oceanfronts, and more across the U.S.
            </p>

        </div>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

export default connect(mapStateToProps, {
  getListings,
  getMountainsListings,
  getOceanfrontListings,
  getLakeviewListings,
  getForestListings,
  getUnderTheStarsListings,
  getUniqueHideawaysListings
})(Home);

