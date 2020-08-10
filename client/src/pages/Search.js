import React from 'react';
import { Link } from "react-router-dom";
import Map from "../components/Map/Map"

const Search = () => {
    return (
        <div className="container">
           <Map />
           <Link class="waves-effect waves-light btn" to="/">Back</Link>
        </div>
    );
};

export default Search;