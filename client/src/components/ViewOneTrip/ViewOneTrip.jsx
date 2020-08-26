import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import Container from "@material-ui/core/Container";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Appbar/AppBar";
import "./ViewOneTrip.css";
import AddToCalendar from "react-add-to-calendar";
import "fa-icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: fade("#D2D6D6", 0.5),
  },
});

const styles = {
  ButtonsStyle: {
    background: "#02361C",
    color: "white",
    justifyContent: "center",
    marginLeft: "25px",
    marginTop: "15px",
  },
  DeleteButtonStyle: {
    background: "red",
    marginLeft: "25px",
    marginTop: "15px",
  },
  UpdateButtonStyle: {
    background: "#FFC107",
    marginLeft: "25px",
    marginTop: "15px",
    textDecoration: "none !important",
  },
};

const ViewOneTrip = () => {
  const [oneTripState, setOneTripState] = useState([]);
  const [event, setEvent] = React.useState({
    title: ``,
    description: ``,
    location: "",
    startTime: ``,
    endTime: ``,
  });

  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [activeTrip, setActiveTrip] = React.useState(null);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
    setActiveTrip(id);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveTrip(null);
  };
  useEffect(() => {
    API.getOneTrip(id).then((res) => {
      setOneTripState(res.data);
      setEvent({
        title: `Trip: ${res.data.startCity} ${res.data.startState} - ${res.data.destinationCity} ${res.data.destinationState}  `,
        description: `Trip Datails!
        Expected trip distance: ${res.data.distance} mi
        Expected trip time: ${res.data.time}`,
        location: `${res.data.startCity} ${res.data.startState}`,
        startTime: `${res.data.tripDate}T20:15:00-04:00`,
        endTime: `${res.data.tripDate}T21:15:00-04:00`,
      });
    });
  }, []);
  const handleDelete = (id) => {
    API.deleteTrip(id)
      .then((_) => {
        // this.useEffect();
        toast.success("You trip is successfully deleted !");
        setTimeout(() => window.location.replace("/PastTrips"), 2000);
      })
      .catch((err) => console.log(err));
  };
 
  // const handleDeleteItem = (tripID, itemToDelete) => {
  //   const newNotesArray = oneTripState.notes.filter((id) => id._id !== itemToDelete);
  //   setOneTripState([...newNotesArray]);
  // };
  let icon = { "calendar-plus-o": "left" };
  let items = [
    { google: "Google Calendar" },
    { apple: "Apple Calendar" },
    { outlook: "Outlook" },
    { outlookcom: "Outlook.com" },
    { yahoo: "Yahoo" },
  ];
  return (
    <div>
      <Header />

      <Container maxWidth="sm">
        <Card className={classes.root} id="OneTripInfo">
          <CardContent>
            <div>
              <div key={oneTripState._id}>
                <form>
                  <div className="container">
                    <AddToCalendar
                      event={event}
                      displayItemIcons={false}
                      buttonTemplate={icon}
                      listItems={items}
                    />
                    <h1 className="text-center welcome">
                      <strong>Details of Your Trip! </strong>
                    </h1>
                    <h2>
                      {" "}
                      <strong>Start City:</strong>{" "}
                    </h2>
                    <h3>
                      {oneTripState.startStreet} {oneTripState.startCity},{" "}
                      {oneTripState.startState}, {oneTripState.startPostalCode}
                    </h3>
                    <h2>
                      {" "}
                      <strong>Destination City:</strong>{" "}
                    </h2>
                    <h3>
                      {oneTripState.destinationStreet}{" "}
                      {oneTripState.destinationCity},{" "}
                      {oneTripState.destinationState},{" "}
                      {oneTripState.destinationPostalCode}
                    </h3>
                    <hr />
                    <h4>
                      {" "}
                      <strong>Expected Trip Date: </strong>{" "}
                      {oneTripState.tripDate}{" "}
                    </h4>
                    <h4>
                      <strong>Estimated Distance: </strong>{" "}
                      {oneTripState.distance} mi{" "}
                    </h4>
                    <h4>
                      <strong> Estimated Time:</strong> {oneTripState.time}{" "}
                    </h4>
                    <div>
                      <ul>
                      <h5>List of Items Needed for Trip</h5>

                        {oneTripState.notes &&
                          oneTripState.notes.map(function (name, id) { 
                            return (
                              <li key={id._id}>
                                {name.name}{" "}
                                {/* <span >
                                <svg
                                
                                  className=" deleteItem MuiSvgIcon-root"
                                  focusable="false"
                                  width="24"
                                  height="23"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                                </svg>
                                </span> */}
                               
                              </li>
                            );
                          })}
                      </ul>
                    </div>

                    <div>
                      <Button
                        id={oneTripState._id}
                        onClick={() => handleOpen(oneTripState._id)}
                        size="large"
                        style={styles.DeleteButtonStyle}
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
                      <Button
                        size="large"
                        href="/pasttrips"
                        style={styles.ButtonsStyle}
                      >
                        Back to Trips
                      </Button>
                      <ToastContainer />
                    </div>
                    <ConfirmModal
                      open={open}
                      handleDelete={handleDelete}
                      handleClose={handleClose}
                      handleOpen={handleOpen}
                      id={activeTrip}
                    />
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default ViewOneTrip;
