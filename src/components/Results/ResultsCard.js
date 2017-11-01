import React from "react";
import "./ResultsCard.css";

export default function Results(props) {
    return (
        <div className="resultsCard">
            
            <img src={props.cardImg} alt="card_img" className="card_img"/>
            
            <ul className="card_info">
                <p className="site_name">{props.listingName}</p>
                <p>in {props.city} | {props.state}</p>
                <li>{props.state}</li>
                <li>${props.pricePerNight.toString()}/night</li>
                <li>Max Campers:{props.maxCampers}</li>
            </ul>
        </div>
    )
}