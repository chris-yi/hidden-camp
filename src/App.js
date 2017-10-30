import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";



class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="http://localhost:8080/auth"><button>Log In</button></a>
        {this.props.name}
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state){
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, {})(App);