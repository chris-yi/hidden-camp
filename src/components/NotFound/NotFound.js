import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./NotFound.css";
import Face from "../../Assets/face.png";

export default function NotFound() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="Not_Found">
        <div className="Not_Found_Message">
          <img src={Face} alt="sad_face" className="Face" />
          <h2>404</h2>
          <h4>Page not found</h4>
          <p>
            Sorry! Looks like there is no listings currently in the city
            searched. Please search again!
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
