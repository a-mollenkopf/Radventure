import React from "react";
import Button from "@material-ui/core/Button";

const Homepage = () => {
  return (
    <div className="container">
      <div className="container">
        <img src="https://i.imgur.com/lDvIdcc.jpg"></img>
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
