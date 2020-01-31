import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <divt>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </divt>
    </Switch>
  </Router>,
  document.getElementById("root")
);
