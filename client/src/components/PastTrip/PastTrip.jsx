import React, { useState, useEffect } from "react";
import API from "../../utils/API";

// MATERIALUI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { fade } from "@material-ui/core/styles/colorManipulator";
import PageviewIcon from "@material-ui/icons/Pageview";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddToCalendar from "react-add-to-calendar";

import "./PastTrip.css";

// ALERTS IMPORTS
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  ButtonsStyle: {
    background: "#02361C",
    color: "white",
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
  Card: {
    backgroundColor: fade("#D2D6D6", 0.4),
    marginTop: 25,
  },
  Typography: {
    fontSize: 30,
  },
  distance: {
    fontSize: 20,
  },
  FavoriteIcon: {
    color: "red",
  },
  ShareIcon: {
    color: "#0658D1",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: 345,
    backgroundColor: fade("#D2D6D6", 0.4),
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PastTrip = () => {
  const [tripInfoState, setTripInfoState] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [activeTrip, setActiveTrip] = React.useState(null);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [event, setEvent] = React.useState({
    title: ``,
    description: ``,
    location: "",
    startTime: ``,
    endTime: ``,
  });

  const handleExpandClick = (id) => {
    const tripEx = { ...expanded };
    tripEx[id] = !tripEx[id];
    setExpanded(tripEx);
  };

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
      res.data.map((el) => {
        const tripEx = { ...expanded };
        tripEx[el._id] = false;
        setExpanded(tripEx);
      });
    });
    // document.removeEventListener("keyup", (x) => {
    //   if (
    //     document.getElementsByClassName("form-wrap")[0].children[0]
    //       .children[0]
    //   ) {
    //     localStorage.setItem(
    //       "start",
    //       document.getElementsByClassName("form-wrap")[0].children[0]
    //         .children[0].value
    //     );
    //     localStorage.setItem(
    //       "destination",
    //       document.getElementsByClassName("form-wrap")[1].children[0]
    //         .children[0].value
    //     );
    //   }
    // });
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

  // let icon = { "calendar-plus-o": "left" };
  let items = [
    { google: "Google Calendar" },
    { apple: "Apple Calendar" },
    // { outlook: "Outlook" },
    // { outlookcom: "Outlook.com" },
    // { yahoo: "Yahoo" },
  ];
  return tripInfoState.length === 0 ? (
    <Card className={classes.root}>
      <CardHeader
        title="You have no saved trips yet!"
        subheader="Time to start planning your next trip!"
      />
      <IconButton href={/Search/} aria-label="go back">
        <ArrowBackIcon />
      </IconButton>
    </Card>
  ) : (
    <div>
      <Card className={classes.root}>
        <CardHeader
          titleTypographyProps={{ variant: "h4" }}
          title="Your Saved Trips!"
        />
      </Card>

      {tripInfoState.map((trip) => {
        return (
          <Card
            id="tripCard"
            key={trip._id}
            className="container specialTrip"
            style={styles.Card}
          >
            {/* Items Needed: ${trip.notes.map((item) => (
                          <div className="listOfItems">
                            <h6 key={item.id}>{item.name}</h6>
                          </div>
                        ))} */}
            <AddToCalendar
              event={{
                title: `Trip: ${trip.startCity} ${trip.startState} - ${trip.destinationCity} ${trip.destinationState}  `,
                description: `Trip Datails!
                        Expected trip distance: ${trip.distance} mi
                        Expected trip time: ${trip.time}`,
                location: `${trip.startCity} ${trip.startState}`,
                startTime: `${trip.tripDate}T20:15:00-04:00`,
                endTime: `${trip.tripDate}T21:15:00-04:00`,
              }}
              displayItemIcons={false}
              listItems={items}
            />
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title={`${trip.startCity}, ${trip.startState} - ${trip.destinationCity}, ${trip.destinationState}`}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={styles.FavoriteIcon} fontSize="large" />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon style={styles.ShareIcon} fontSize="large" />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded[trip._id],
                })}
                onClick={() => handleExpandClick(trip._id)}
                aria-expanded={expanded[trip._id]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[trip._id]} timeout="auto" unmountOnExit>
              <CardContent>
                <Divider variant="inset" />
                <Typography
                  paragraph
                  className="distance"
                  style={styles.distance}
                >
                  <strong>Expected Trip Date: </strong> {trip.tripDate}
                </Typography>
                <Typography
                  paragraph
                  className="distance"
                  style={styles.distance}
                >
                  <strong>Estimated Distance: </strong> {trip.distance} mi
                </Typography>
              </CardContent>
              <Divider variant="inset" />
              <CardActions disableSpacing>
                <IconButton id={trip._id} onClick={() => handleOpen(trip._id)}>
                  {" "}
                  <DeleteForeverIcon />
                </IconButton>
                <IconButton href={`/PastTrips/${trip._id}`}>
                  <PageviewIcon />
                </IconButton>
              </CardActions>
            </Collapse>
          </Card>
        );
      })}
      <ToastContainer />
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
