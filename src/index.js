/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Home from "./views/Home";
import Hollis from "./views/HollisCantrell";
import Matt from "./views/MattFoster";
import Events from "./views/Events";
import Schedule from "./views/Schedule";
import FAQ from "./views/FAQ";
// import Swag from "views/Swag";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
     {/* <Route path="/Swag" component={Swag} /> */}
     <Route path="/FAQ" component={FAQ} />
      <Route path="/Schedule" component={Schedule} />
      <Route path="/Events" component={Events} />
      <Route path="/HollisCantrell" component={Hollis} />
      <Route path="/MattFoster" component={Matt} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
