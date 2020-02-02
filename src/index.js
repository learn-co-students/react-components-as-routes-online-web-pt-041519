import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about'
import Login from './login'
import Navbar from './navbar'
// step 1: Import react-router functions
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'



// step 2. changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <divt>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </divt> 
  </Router>),
  document.getElementById('root')
);
