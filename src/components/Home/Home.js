import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
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
              <input type="text"/>
              <button>Search</button>
          </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state){
    return {
      name: state.name
    }
  }
  
  export default connect(mapStateToProps, {})(Home);
