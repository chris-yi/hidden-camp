import React from 'react';
import "./Footer.css";
import footer_top from "../../Assets/footer-mountains-top.svg";
import footer_bottom from "../../Assets/footer-mountains-bottom.svg";

export default function Footer(props) {
	return (
        <footer className="footer">
            <img src={footer_top} alt="footertop" className="footer_top"/>
            <img src={footer_bottom} alt="footerbottom" className="footer_bottom"/>
            <div className="footer-container">
                <h1>Test</h1>
            </div>
        </footer>
	)
}



        // <div className="Footer-main">
        //     <div className="Footer-img">
                
        //     <img src={footer_top} alt=""/>

        //         <img src={footer_bottom} alt="mountain-footer"
        //         className="image"/>
        //     </div>
        // </div>
