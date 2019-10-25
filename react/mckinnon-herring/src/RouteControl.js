import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
 import Index from "./pages/index";
 import About from "./pages/about";
 import Gallery from "./pages/gallery";
 import Contact from "./pages/contact";
 import Admin from "./pages/admin";
 let igLink = "www.google.com"

function RouteControl() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  )
}

export default RouteControl;
