import React, { useState, useEffect } from "react";
import API from "../../utils/API";

// MATERIALUI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// ALERTS IMPORTS
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// STYLES 
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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
    });
    document.removeEventListener("keyup", (x) => {
      if (
        document.getElementsByClassName("form-wrap")[0].children[0]
          .children[0]
      ) {
        localStorage.setItem(
          "start",
          document.getElementsByClassName("form-wrap")[0].children[0]
            .children[0].value
        );
        localStorage.setItem(
          "destination",
          document.getElementsByClassName("form-wrap")[1].children[0]
            .children[0].value
        );
      }
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
    <Card className={classes.root}>
      <CardHeader
        title="You have no saved trips yet!"
        subheader="Time to start planning your next trip!"
      />
      <IconButton aria-label="go back">
        <ArrowBackIcon />
      </IconButton>
    </Card>
  ) : (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Your Saved Trips!" />
      </Card>

      {tripInfoState.map((trip) => {
        return (
          <Card key={trip._id} className="container">
            <CardHeader
              title={`${trip.startCity}, ${trip.startState} - ${trip.destinationCity}, ${trip.destinationState}`}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Trip Details:</Typography>
                <Divider variant="inset" />
                <h4>Estimated Distance: {trip.distance} mi </h4>
              </CardContent>
              <Divider variant="inset" />
              <CardActions disableSpacing>
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
              </CardActions>
            </Collapse>
          </Card>
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

{
  /* <Button
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

              <hr style={styles.hrStyle}></hr> */
}
