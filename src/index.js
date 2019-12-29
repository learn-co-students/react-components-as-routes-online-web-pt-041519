import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Messages from './Messages'
import Navbar from './Navbar'

ReactDOM.render((
  <Router>
    <divt>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route eact path='/messages' component={Messages} />
    </divt>
  </Router>),
  document.getElementById('root')
);
