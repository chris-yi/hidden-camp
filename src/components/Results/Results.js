import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {

    render() {
        return(
            <div>
                <h1>Results Page</h1>
                {this.props.allResults}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      allResults: state.allResults
    };
  }
  
  export default connect(mapStateToProps, {})(Results);