import React from "react";
import Button from "@material-ui/core/Button";

const Homepage = () => {
  return (
    <div className="container">
      <h1 id="homepageHeader">This is my Homepage</h1>
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <img src="https://lorempixel.com/250/250/nature/1"></img>
        </a>
        <a className="carousel-item" href="#two!">
          <img src="https://lorempixel.com/250/250/nature/2"></img>
        </a>
        <a className="carousel-item" href="#three!">
          <img src="https://lorempixel.com/250/250/nature/3"></img>
        </a>
        <a className="carousel-item" href="#four!">
          <img src="https://lorempixel.com/250/250/nature/4"></img>
        </a>
        <a className="carousel-item" href="#five!">
          <img src="https://lorempixel.com/250/250/nature/5"></img>
        </a>
      </div>
      <Button variant="contained" color="primary" href="/search">
        Add new trip
      </Button>
      <Button variant="contained" color="primary" href="/pasttrips">
        View Trips
      </Button>
    </div>
  );
};

export default Homepage;
