import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {getListings} from "../../ducks/reducer"
import Navbar from "../Navbar/Navbar";
import "./Home.css"
// import { updateAllResults } from "../../ducks/reducer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.getSites = this.getSites.bind(this);
  }

  getSites() {
    
    axios.get("/api/listings").then(results => {
      console.log(results.data)
      this.props.getListings(results.data);

    })
   
      
  }

  render() {
    return (
      <div className="Home">
        <div>
          <Navbar/>
        </div>
        {/* <div>
          <a href="http://localhost:8080/auth">
            <button>Log In</button>
          </a>
          {this.props.name}
        </div> */}
        <div className="jumbotron">
          <div className="main_tagline">
            <h1 className="explore">EXPLORE</h1>
            <h1 className="outdoors">THE OUTDOORS</h1>
          </div>
          <div className="search">
            <Link to="/Results">
              <h3 className="discover_button" onClick={this.getSites}>DISCOVER</h3>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

export default connect(mapStateToProps, {getListings})(Home);



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
