import React from "react";
import Button from '@material-ui/core/Button';


const PastTrips = () => {
  return (
    <div className="container">
      <h1>This is my PastTrips page</h1>
      <Button variant="contained" color="primary" href="/">
        Back
      </Button>
    </div>
  );
};

export default PastTrips;
