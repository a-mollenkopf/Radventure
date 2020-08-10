import React, { useEffect, useContext } from "react";
import { MapContext } from "../../contexts/MapProvider";
import API from "../../utils/API";

import "./Map.css";

export default function Map() {
  const { map, setMap } = useContext(MapContext);
  // const { message, setMessage } = useState({
  //   message:"",
  // });

  const saveTrip = () => {
    const address = map.directionsControl.directions.directionsRequest;
    const startStreet = address.locations[0].street;
    const startCity = address.locations[0].adminArea5;
    const startState = address.locations[0].adminArea3;
    const startPostalCode = address.locations[0].postalCode;
    const destinationStreet = address.locations[1].street;
    const destinationCity = address.locations[1].adminArea5;
    const destinationState = address.locations[1].adminArea3;
    const destinationPostalCode = address.locations[1].postalCode;

    // const [start, destionation] = map.directionsControl.directions.directionsRequest.locations;
    const savedTrip = {
      startCity: startCity,
      destinationCity: destinationCity,
      destinationState: destinationState,
      startState: startState,
      startStreet: startStreet,
      destinationStreet: destinationStreet,
      startPostalCode: startPostalCode,
      destinationPostalCode: destinationPostalCode,
    };
    console.log(savedTrip);

    API.saveTrip(savedTrip)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("this is error message  " + err);
      });
  };

  useEffect(() => {
    const mapquest = window.L.mapquest;
    mapquest.key = "TzrDot8zE5IyvIXUg7RP0ZiSWDnzqxCZ";
    const _map = mapquest.map("map", {
      center: [41.850033, -87.6500523],
      layers: mapquest.tileLayer("map"),
      zoom: 4,
    });

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
      .addTo(_map);

    mapquest.geocodingControl().addTo(_map);

    _map.addControl(mapquest.control());

    setMap(_map);
  }, []);

  return (
    <div>
      <nav className="navbar links">
        <h4 className="mr-4">
          <button className="btn btn-dark" onClick={(e) => saveTrip(e)}>
            Save Trip
          </button>
        </h4>
        <div id="map"></div>
      </nav>
    </div>
  );
}
