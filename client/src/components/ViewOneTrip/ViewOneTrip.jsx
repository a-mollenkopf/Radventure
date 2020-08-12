import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import Card from "@material-ui/core/Card";

const styles = {
  ButtonsStyle: {
    background: "#02361C",
    color: "white",
    justifyContent: "center",
    marginTop: 400,
  },
  CardStyles: {
    maxWidth: 1500,
    marginLeft: 200,
    marginTop: 40,
    backgroundColor: "#255D42",
    height: 600,
  }
};


const ViewOneTrip = () => {
  const [oneTripState, setOneTripState] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    API.getOneTrip(id).then((res) => {
      setOneTripState(res.data);
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

  return (
    <div>
      <div key={oneTripState._id}>
        <form>
          <div className="container">
            <h1 className="text-center welcome">Details of Your Trip !</h1>

            <h3> Start City Information</h3>
            <h4> Street: {oneTripState.startStreet}</h4>
            <h4>City: {oneTripState.startCity}</h4>
            <h4> State: {oneTripState.startState}</h4>
            <h4> Postal Code: {oneTripState.startPostalCode}</h4>
            <h5>-------------------------------</h5>
            <h3> Destination City Information</h3>
            <h4> Street: {oneTripState.destinationStreet}</h4>
            <h4>City: {oneTripState.destinationCity}</h4>
            <h4> State: {oneTripState.destinationState}</h4>
            <h4> Postal Code: {oneTripState.destinationPostalCode}</h4>
            <div>
                <Button
                  id={oneTripState._id}
                  type="submit"
                  onClick={() => handleDelete(oneTripState._id)}
                  size="large"
                  style={styles.ButtonsStyle}
                  href="/PastTrips"
                >
                  Delete
                </Button>
              <Link to={`/PastTrips/${oneTripState._id}/edit`}>
                <Button
                  id={oneTripState._id}
                  type="submit"
                  size="large"
                  style={styles.ViewTripButtonStyle}
                >
                  Update
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default ViewOneTrip;
