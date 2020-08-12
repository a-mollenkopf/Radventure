import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";
const styles = {
  ButtonsStyle: {
    backgroundColor: "red",
    color: "white",
    justifyContent: "center",
    marginTop: 400,
  },
  ViewTripButtonStyle: {
    backgroundColor: "gray",
    color: "white",
    justifyContent: "center",
    marginTop: 400,
  },
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

  const handleDelete = (id) => {
    API.deleteTrip(id)
      .then((_) => {
        this.useEffect();
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return tripInfoState.length === 0 ? (
    <div className="container">
      <h3 className="text-center welcome">There are no saved trips yet!</h3>
    </div>
  ) : (
    <div>
      <h3 className="text-center welcome">Your saved trips !</h3>

      {tripInfoState.map((trip) => {
        return (
          <div key={trip._id}>
            <form>
              <div className="container">
                <h3> Start City Information</h3>
                <h4> Street: {trip.startStreet}</h4>
                <h4>City: {trip.startCity}</h4>
                <h4> State: {trip.startState}</h4>
                <h4> Postal Code: {trip.startPostalCode}</h4>
                <h5>-------------------------------</h5>
                <h3> Destination City Information</h3>
                <h4> Street: {trip.destinationStreet}</h4>
                <h4>City: {trip.destinationCity}</h4>
                <h4> State: {trip.destinationState}</h4>
                <h4> Postal Code: {trip.destinationPostalCode}</h4>
                <div>
                  <Button
                    id={trip._id}
                    type="submit"
                    onClick={() => handleDelete(trip._id)}
                    size="large"
                    style={styles.ButtonsStyle}
                  >
                    Delete
                  </Button>
                  <Link to={`/PastTrips/${trip._id}`}>
                    <Button
                      id={trip._id}
                      type="submit"
                      size="large"
                      style={styles.ViewTripButtonStyle}
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
                <h1>||||||||||||||||||||||||||||||||||</h1>
              </div>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default PastTrip;
