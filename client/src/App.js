import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Header from "./components/Appbar/AppBar";
import PastTrips from "./pages/PastTrips";
import Map from "./components/Map/Map";

function App() {
  return (
    <Router>
      <Header />
      <Map />
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
  );
}

export default App;
