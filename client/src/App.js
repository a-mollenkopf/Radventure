import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import PastTrips from "./pages/PastTrips";
import Header from "./components/Appbar/AppBar";
import { MapProvider } from "./contexts/MapProvider";



function App() {
  return (
    <MapProvider>

    <Router>
      <Header />
      <Switch>
        <Route
          exact
          from="/"
          render={(props) => <Homepage {...props} />}
        />
        <Route
          exact
          path="/Search"
          render={(props) => <Search {...props} />}
        />
        <Route
          exact
          path="/PastTrips"
          render={(props) => <PastTrips {...props} />}
        />
      </Switch>
    </Router>
    </MapProvider>

  );
}

export default App;
