import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = {
  ButtonsStyle: {
    background: "#02361C",
    color: "white",
    justifyContent: "center",
  },
  CardStyles: {
    maxWidth: 1500,
    marginLeft: 200,
    marginTop: 20,
    backgroundColor: fade("#255D42", 0.8),
    height: 600,
  },
  DeleteButtonStyle: {
    background: "red"
  },
  UpdateButtonStyle: {
    background: "#FFC107"
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
    <Card style={styles.CardStyles}>
      <div>
        <div key={oneTripState._id}>
          <form>
            <div className="container">
              <h1 className="text-center welcome">Details of Your Trip !</h1>

              <h2> Start City Information</h2>
              <h3> Street: {oneTripState.startStreet}</h3>
              <h3>City: {oneTripState.startCity}</h3>
              <h3> State: {oneTripState.startState}</h3>
              <h3> Postal Code: {oneTripState.startPostalCode}</h3>
              <h5>-------------------------------</h5>
              <h2> Destination City Information</h2>
              <h3> Street: {oneTripState.destinationStreet}</h3>
              <h3>City: {oneTripState.destinationCity}</h3>
              <h3> State: {oneTripState.destinationState}</h3>
              <h3> Postal Code: {oneTripState.destinationPostalCode}</h3>
              <div>
                <Button
                  id={oneTripState._id}
                  type="submit"
                  onClick={() => handleDelete(oneTripState._id)}
                  size="large"
                  style={styles.DeleteButtonStyle}
                  href="/PastTrips"
                >
                  Delete
                </Button>
                <Link to={`/PastTrips/${oneTripState._id}/edit`}>
                  <Button
                    id={oneTripState._id}
                    type="submit"
                    size="large"
                    style={styles.UpdateButtonStyle}
                  >
                    Update
                  </Button>
                </Link>
                <Button size="large" href="/pasttrips" style={styles.ButtonsStyle}>
                  Back to Trips
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default ViewOneTrip;
