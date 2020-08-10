import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import PastTrips from "./pages/PastTrips"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/search" component={Search} />
        <Route path="/pasttrips" component={PastTrips} />
      </Switch>
    </Router>
  );
}

export default App;
