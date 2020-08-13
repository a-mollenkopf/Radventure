import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";

import ConfirmModal from "../ConfirmModal/ConfirmModal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    width: 1000,
  },
  DeleteButtonStyle: {
    background: "red",
  },
};

const PastTrip = () => {
  const [tripInfoState, setTripInfoState] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [activeTrip, setActiveTrip] = React.useState(null);

  const handleOpen = (id) => {
    setOpen(true);
    setActiveTrip(id);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveTrip(null);
  };
  useEffect(() => {
    API.getAllTrips().then((res) => {
      setTripInfoState(res.data);
    });
  }, []);
  const handleDelete = (id) => {
    API.deleteTrip(id)
      .then((_) => {
        // this.useEffect();
        toast.success("You trip is successfully deleted !");
        setTimeout(() => window.location.reload(), 2000);
      })
      .catch((err) => console.log(err));
  };

  return tripInfoState.length === 0 ? (
    <div className="container">
      <h3 className="text-center welcome">There are no saved trips yet!</h3>
    </div>
  ) : (
    <div>
      <h2 className="text-center welcome" style={styles.h1Style}>
        Your saved trips!
      </h2>

      {tripInfoState.map((trip) => {
        return (
          <div key={trip._id} className="container">
            <h2> Trip Information</h2>
            <h3>
             {trip.startCity}, {trip.startState} - {trip.destinationCity}, {trip.destinationState}
            </h3>
            <div>
              <Button
                id={trip._id}
                onClick={() => handleOpen(trip._id)}
                size="large"
                style={styles.DeleteButtonStyle}
              >
                Delete
              </Button>
              <Button
                size="large"
                href={`/PastTrips/${trip._id}`}
                style={styles.ButtonsStyle}
              >
                View Trip
              </Button>
              <ToastContainer />

              <hr style={styles.hrStyle}></hr>
            </div>
          </div>
        );
      })}
      <ConfirmModal
        open={open}
        handleDelete={handleDelete}
        handleClose={handleClose}
        handleOpen={handleOpen}
        id={activeTrip}
      />
    </div>
  );
};

export default PastTrip;
