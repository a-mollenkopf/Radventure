import React, { Component } from "react";

import "./Map.css";

class Map extends Component {
  state = {};

  componentDidMount() {
    //  window.L.mapquest.key = process.env.client_API_KEY;
      window.L.mapquest.key = "TzrDot8zE5IyvIXUg7RP0ZiSWDnzqxCZ";

      var map = window.L.mapquest.map('map', {
        center: [33.7490, 84.3880],
        layers: window.L.mapquest.tileLayer('map'),
        zoom: 12
      });

      window.L.mapquest.directions().route({
        start: 'Atlanta, GA',
        end: 'Denver, CO'
      });

      window.L.mapquest.directionsControl({
        routeSummary: {
          enabled: false
        },
        narrativeControl: {
          enabled: true,
          compactResults: false
        }
      }).addTo(map);

      window.L.mapquest.geocodingControl().addTo(map);

      map.addControl(window.L.mapquest.control());
  }

  saveTrip(){
      //Starting Point Field Value
      console.log(window.map.children[1].children[0].children[2].children[0].children[0].children[0].children[0][0].value);
      //Destination Field Value
      console.log(window.map.children[1].children[0].children[2].children[1].children[0].children[0].children[0][0].value);
  }

  render() {
    return (
      <div>
          <nav className="navbar links">
              <h4 className="mr-4">
              <button className="btn btn-dark" onClick={this.saveTrip}>Save Trip</button>
              </h4>
              <div id="map"></div>
          </nav>
      </div>
    );
  }
}

export default Map;