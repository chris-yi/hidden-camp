import React from 'react';
import "./Navbar.css"
import logo from "../../Assets/1resizedsmaller.png";
import logo2 from "../../Assets/2cropped.png";
import logo2med from "../../Assets/2medium.png";
import logo2small from "../../Assets/2smaller.png";
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
                
                <img className="Logo" src={logo2med} alt="logo"/>
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