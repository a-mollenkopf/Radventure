import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Header from "./components/Appbar/AppBar";
import PastTrips from "./pages/PastTrips";
import { MapProvider } from "./contexts/MapProvider";



function App() {
  return (
    <MapProvider>

    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
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
