import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";

const styles = {
  ButtonsStyle: {
    background: "#02361C",
    color: "white",
    justifyContent: "center",
  },
  h1Style: {
    fontSize: 50,
  },
  hrStyle: {
    width: 1000
  }
};

const PastTrip = () => {
  const [tripInfoState, setTripInfoState] = useState([]);

  useEffect(() => {
    API.getAllTrips().then((res) => {
      setTripInfoState(res.data);
      console.log(res.data);
      console.log("InfoTrip State:");
      console.log(tripInfoState);
    });
  }, []);

  return tripInfoState.length === 0 ? (
    <div className="container">
      <h3 className="text-center welcome">There are no saved trips yet!</h3>
    </div>
  ) : (
    <div>
      <h1 className="text-center welcome" style={styles.h1Style}>Your saved trips!</h1>

      {tripInfoState.map((trip) => {
        return (
          <div key={trip._id} className="container">
            <h2> Destination Information</h2>
            <h4>
              {" "}
              Address: {trip.destinationStreet}, {trip.destinationCity},{" "}
              {trip.destinationState} {trip.destinationPostalCode}
            </h4>
            <Button size="large" href={`/PastTrips/${trip._id}`} style={styles.ButtonsStyle}>
              View Trip
            </Button>
            <hr style={styles.hrStyle}></hr>
          </div>
        );
      })}
    </div>
  );
};

export default PastTrip;
