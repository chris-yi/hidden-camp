import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCityListings, getUserInfo} from "../../ducks/reducer";
import "./Navbar.css";
import logo2med from "../../Assets/2medium.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.props.getUserInfo();
}

  handleInput(e) {
    this.setState({ searchTerm: e.target.value });
  }

  search() {
    axios.get(`/api/listings/city/${this.state.searchTerm}`).then(results => {
      console.log("This is the city results:" + results.data);
      this.props.getCityListings(results.data);
    });
  }

  render() {
    return (
      <div className="navbar_main">
        <div className="navbar">
          <div>
            <input
              className="search-bar"
              placeholder="Search by City.."
              onChange={this.handleInput}
              value={this.state.searchTerm}
            />
            <Link to="/Results">
              <button
                className="search-button"
                type="submit"
                onClick={this.search}
              >
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </Link>
          </div>
          <div className="Logo_Main">
            <a href="http://localhost:3000/">
              <img className="Logo" src={logo2med} alt="logo" />
            </a>
          </div>
          <div className="Login_main">
            <a href="http://localhost:8080/auth">
              <p className="login nav-button">LOGIN</p>
            </a>
          </div>
        </div>
        {/* <div className="navbar_texture">
                        <img className="texture" src={texture} alt="texture"/>
                    </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getCityListings, getUserInfo })(Navbar);
