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
                <div className="footer_left"></div>
                <div className="footer_center">
                    <h1 className="connect">
                        Connect with us
                    </h1>
                    <div className="social">
                        <ul className="social_media">
                            <li>
                                <a href="https://www.facebook.com/hid.camp.94" target="_blank">
                                <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/hidden_camp/" target="_blank">
                                <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/hiddencamp" target="_blank">
                                <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hiddencamp2017@gmail.com" target="_blank">
                                <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_right"></div>
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
