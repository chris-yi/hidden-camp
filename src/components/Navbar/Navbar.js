import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCityListings, getUserInfo } from "../../ducks/reducer";
import "./Navbar.css";
import logo2med from "../../Assets/2medium.png";
import newLogo from "../../Assets/newResized.png";
import Drawer from "material-ui/Drawer";
import MenuItem from 'material-ui/MenuItem';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      open: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
    this.profile = this.profile.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

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

  profile() {
    if (this.props.user) {
      return (
        <div className="Toggle-Menu">
          <img
            src={this.props.user.img}
            alt="profile-img"
            className="profile-img"
            onClick={this.handleToggle}
          />
          <i className="fa fa-caret-down" aria-hidden="true"></i>
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            openSecondary={true}
            onRequestChange={open => this.setState({ open })}
            containerClassName="drawer"
          >
            <Link to="/" className="link">
              <MenuItem onClick={this.handleClose} className="menu-item">
                Home
                {/* <hr className="toggle-line"/> */}
              </MenuItem>
            </Link>
            <Link to="/about" className="link">
              <MenuItem onClick={this.handleClose} className="menu-item">
                About
                {/* <hr className="toggle-line"/> */}
              </MenuItem>
            </Link>
            <Link to="/MyProfile" className="link">
              <MenuItem onClick={this.handleClose} className="menu-item">
                My Profile
                {/* <hr className="toggle-line"/> */}
              </MenuItem>
            </Link>
              <MenuItem onClick={this.handleClose} className="menu-item">
              <a href={process.env.REACT_APP_LOGOUT}>
                Logout
                </a>
                {/* <hr className="toggle-line"/> */}
              </MenuItem>
              
          </Drawer>
        </div>
      );
    } else {
      return (
        <a href={process.env.REACT_APP_LOGIN} className="login-text">
          <p className="login nav-button">LOGIN</p>
        </a>
      );
    }
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
          <Link to="/">
              <img className="Logo" src={newLogo} alt="logo" />
          </Link>
          </div>
          <div className="Login_Toggle">{this.profile()}</div>
        </div>
        {/* <div className="navbar_texture">
                        <img className="texture" src={texture} alt="texture"/>
                    </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    user: state.user
  };
};

export default connect(mapStateToProps, { getCityListings, getUserInfo })(
  Navbar
);
