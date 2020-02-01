import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'
import Signup from './Signup'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'



ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" render={() => <h2>messages</h2>} />
    </div>
</Router>),
  document.getElementById('root')
);
