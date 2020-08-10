import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <h1 id="homepageHeader">This is my Homepage</h1>
      <div class="carousel">
        <a class="carousel-item" href="#one!">
          <img src="https://lorempixel.com/250/250/nature/1"></img>
        </a>
        <a class="carousel-item" href="#two!">
          <img src="https://lorempixel.com/250/250/nature/2"></img>
        </a>
        <a class="carousel-item" href="#three!">
          <img src="https://lorempixel.com/250/250/nature/3"></img>
        </a>
        <a class="carousel-item" href="#four!">
          <img src="https://lorempixel.com/250/250/nature/4"></img>
        </a>
        <a class="carousel-item" href="#five!">
          <img src="https://lorempixel.com/250/250/nature/5"></img>
        </a>
      </div>
      <Link className="waves-effect waves-light btn" to="/search">
        Add new trip
      </Link>
      <Link className="waves-effect waves-light btn" to="/pasttrips">
        View trips
      </Link>
    </div>
  );
};

export default Homepage;
