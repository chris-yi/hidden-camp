import React from 'react';
import "./Navbar.css";
import logo2med from "../../Assets/2medium.png";
import texture from "../../Assets/texture-top.png";



export default function Navbar(props) {
	return (
        <div className="navbar_main">
            <div className="navbar">
                <div>
                    <input className="search-bar"type="text"/>
                    <button className="search-button" type="submit">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
                </div>
                <div className="Logo_Main">
                <img className="Logo" src={logo2med} alt="logo"/>
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
	)
}