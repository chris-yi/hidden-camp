import React from "react";
import "./Messages.css";
import { Link } from "react-router-dom";

export default function Messages() {
    return (
        <div className="Coming_Soon">
        <Link to="/">
            <h1>Coming Soon!</h1>
        </Link>
        </div>
    )
}