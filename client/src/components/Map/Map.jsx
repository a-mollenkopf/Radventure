import React, { useEffect, useContext, useState } from "react";
import { MapContext } from "../../contexts/MapProvider";
import API from "../../utils/API";
import { makeStyles, styled } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import "./Map.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justify: "center",
    "& > *": {
      margin: theme.spacing(2, "auto"),
      width: theme.spacing(145),
      height: theme.spacing(70, "auto"),
      overflow: "auto",
    },
  },
}));

// STYLING
const MyPaper = styled(Paper)({
  elevation: 3,
});

const MyBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const MyFab = styled(Fab)({
  backgroundColor: "#FFC107",
});
// END OF STYLING

var startingPoint = localStorage.getItem("start");
var destinationPoint = localStorage.getItem("destination");

export default function Map() {
  const classes = useStyles();
  const { map, setMap } = useContext(MapContext);
  const [double, setDouble] = useState(false);
  const [tripDate, setTripDate] = useState(null);

  const heandler = () => {
    setTimeout(() => setDouble(false), 5000);
    setDouble(true);
  };
  const handleChange = (e) => {
    setTripDate(e.target.value);
  };

  const saveTrip = () => {
    const address = map.directionsControl.directions.directionsRequest;
    if (address === undefined) {
      toast.error("You should enter at least two states with cities !");
      heandler();
    } else if (tripDate === null) {
      toast.error("You should enter your expected trip date !");
      heandler();
    } else {
      const startStreet = address.locations[0].street;
      const startCity = address.locations[0].adminArea5;
      const startState = address.locations[0].adminArea3;
      const startPostalCode = address.locations[0].postalCode;
      const destinationStreet = address.locations[1].street;
      const destinationCity = address.locations[1].adminArea5;
      const destinationState = address.locations[1].adminArea3;
      const destinationPostalCode = address.locations[1].postalCode;
      const queryOne = `${startCity},+${startState}`;
      const queryTwo = `${destinationCity},+${destinationState}`;
   
      API.getDirection(queryOne, queryTwo)
        .then((response) => {
          const distance = Math.round(parseInt(response.data.route.distance));
          const time = response.data.route.formattedTime;

          const savedTrip = {
            tripDate: tripDate,
            time: time,
            distance: distance,
            startCity: startCity,
            destinationCity: destinationCity,
            destinationState: destinationState,
            startState: startState,
            startStreet: startStreet,
            destinationStreet: destinationStreet,
            startPostalCode: startPostalCode,
            destinationPostalCode: destinationPostalCode,
          };

          API.saveTrip(savedTrip)
            .then((res) => {
              toast.success("You trip is successfully saved !");
              setDouble(true);
              setTimeout(() => window.location.replace("/PastTrips"), 2000);
              setTripDate(null);
            })
            .catch((err) => {
              console.log("this is error message  " + err);
              heandler();
              toast.error("Sorry, error occurred! Try once more!");
            });
        })
        .catch((err) => {
          console.log("this is error message  " + err);
          heandler();
          toast.error("Sorry, error occurred! Try once more!");
        });
    }
  };

  // const previousTrip = () => {
  //   if (
  //     document.getElementsByClassName("form-wrap")[0].children[0].children[0]
  //       .value
  //   ) {
  //     localStorage.setItem(
  //       "start",
  //       document.getElementsByClassName("form-wrap")[0].children[0].children[0]
  //         .value
  //     );
  //     localStorage.setItem(
  //       "destination",
  //       document.getElementsByClassName("form-wrap")[1].children[0].children[0]
  //         .value
  //     );
  //   }
  // };

  useEffect(() => {
    // document.addEventListener("keyup", (x) => {
    //   if (
    //     document.getElementsByClassName("form-wrap")[0].children[0].children[0]
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

    const mapquest = window.L.mapquest;
    mapquest.key = process.env.REACT_APP_API_KEY;
    var baseLayer = window.L.mapquest.tileLayer("map");
    var map = window.L.mapquest.map("map", {
      center: [33.753746, -84.38633],
      layers: baseLayer,
      zoom: 12,
    });

    window.L.control
      .layers({
        Map: baseLayer,
        Hybrid: window.L.mapquest.tileLayer("hybrid"),
        Satellite: window.L.mapquest.tileLayer("satellite"),
        Light: window.L.mapquest.tileLayer("light"),
        Dark: window.L.mapquest.tileLayer("dark"),
      })
      .addTo(map);

    mapquest
      .directionsControl({
        routeSummary: {
          enabled: false,
        },
        narrativeControl: {
          enabled: true,
          compactResults: false,
        },
      })
      .addTo(map);

    // if (startingPoint && destinationPoint) {
    //   window.L.mapquest.directions().route({
    //     start: startingPoint,
    //     end: destinationPoint,
    //   });
    //   document.getElementsByClassName(
    //     "form-wrap"
    //   )[0].children[0].children[0].value = startingPoint;
    //   document.getElementsByClassName(
    //     "form-wrap"
    //   )[1].children[0].children[0].value = destinationPoint;
    // }

    mapquest.geocodingControl().addTo(map);

    map.addControl(mapquest.control());

    setMap(map);

    //Return function
    // return () => {
    //   window.removeEventListener("keyup", previousTrip);
    // };
  }, []);

  return (
    <div  className={classes.root}>

      <MyPaper >
        <div id="map" ></div>
      </MyPaper>
      <div id="dates">
        <label htmlFor="date">Expected Trip Date:</label>
        <br />
        <input
          type="date"
          name="date"
          tripDate={tripDate}
          onChange={handleChange}
        />
      </div>
      <MyBox>
        <div>
          
          <MyFab
            disabled={double}
            variant="extended"
            size="medium"
            aria-label="add"
            className={classes.margin}
            onClick={(e) => saveTrip(e)}
          >
            <NavigationIcon />
            Save Search
          </MyFab>
          <ToastContainer />
        </div>
      </MyBox>
    </div>
  );
}
