import React from 'react';
import { Link } from "react-router-dom";

const Search = () => {
    return (
        <div className="container">
           <h1>This is my Search page</h1> 
           <Link class="waves-effect waves-light btn" to="/">Back</Link>
        </div>
    );
};

export default Search;