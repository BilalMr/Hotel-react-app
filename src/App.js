import React from "react";
import { Route, Switch } from "react-router-dom";
// Styling
import "./App.css";
// Import Pages
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
// Import Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Navbar is added on App.js and before Switch to make sure we have navigation thru all the site */}
      <Navbar />
      <Switch>
        {/* exact attribute is added to make sure that react doesn't render all components that mach ta path */}
        <Route path='/' exact component={Home} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/rooms/:slug' exact component={SingleRoom} />
        {/* no path is defined for the Error page! */}
        {/* Swicth must be added so that this page doens't show on all routes */}
        <Route default component={Error} />
      </Switch>
    </>
  );
}

export default App;
