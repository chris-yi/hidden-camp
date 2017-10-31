import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { updateAllResults } from "../../ducks/reducer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.getSites = this.getSites.bind(this);
  }

  getSites() {
    axios.get("/api/results").then(results => updateAllResults(results));
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

export default connect(mapStateToProps, { updateAllResults })(Home);
