import React from 'react';
import { Link } from "react-router-dom";

const PastTrips = () => {
    return (
        <div className="container">
            <h1>This is my PastTrips page</h1>
            <Link className="waves-effect waves-light btn" to="/">Back</Link>
        </div>
    );
};

export default PastTrips;