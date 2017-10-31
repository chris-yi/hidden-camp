import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {getListings} from "../../ducks/reducer"
// import { updateAllResults } from "../../ducks/reducer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.getSites = this.getSites.bind(this);
  }

  getSites() {
    axios.get("/api/listings").then(results => this.props.getListings(results.data));
  }

  render() {
    return (
      <div>
        <div className="App">
          <a href="http://localhost:8080/auth">
            <button>Log In</button>
          </a>
          {this.props.name}
        </div>
        <div className="jumbotron">
          <div className="main-tagline">
            <h1>Explore the great outdoors</h1>
          </div>
          <div className="search">
            <input type="text" />
            <a href="http://localhost:3000/#/Results">
              <button onClick={this.getSites}>Search</button>
            </a>
          </div>
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
