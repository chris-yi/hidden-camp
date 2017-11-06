import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ListingForm from "../ListingForm/ListingForm";
import "./CreateListing.css";

class Create extends Component {
    render() {
        return(
            <div>
                <div>
                    <Navbar/>
                </div>
                <div className="Create_Container">
                    <div>Hello</div>
                    <ListingForm/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Create;
