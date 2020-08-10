import React, { Component } from "react";

import "./Map.css";

class Map extends Component {
  state = {};

  componentDidMount() {
    //  window.L.mapquest.key = process.env.client_API_KEY;
    window.L.mapquest.key = "TzrDot8zE5IyvIXUg7RP0ZiSWDnzqxCZ";

    var map = window.L.mapquest.map("map", {
      center: [33.749, 84.388],
      layers: window.L.mapquest.tileLayer("map"),
      zoom: 12,
    });

    window.L.mapquest.directions().route({
      start: "Atlanta, GA",
      end: "Denver, CO",
    });

    window.L.mapquest
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

    window.L.mapquest.geocodingControl().addTo(map);

    map.addControl(window.L.mapquest.control());
  }

  saveTrip() {
    //Starting Point Field Value
    console.log(
      window.map.children[1].children[0].children[2].children[0]
        .children[0].children[0].children[0][0].value
    );
    //Destination Field Value
    console.log(
      window.map.children[1].children[0].children[2].children[1]
        .children[0].children[0].children[0][0].value
    );
  }

  render() {
    return (
      <div>
        <div id="map"></div>
        {/* <button className="btn btn-dark" onClick={this.saveTrip}>
          Save Trip
        </button> */}
      </div>
    );
  }
}

export default Map;
