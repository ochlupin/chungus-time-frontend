import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
};

const NavBar = () => (
  <div>
    <NavLink to="/" exact style={link} activeStyle={{ background: 'darkblue' }}>
      Home
    </NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{ background: 'darkblue' }}>
      About
    </NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{ background: 'darkblue' }}>
      Login
    </NavLink>
    <NavLink to="/signup" exact style={link} activeStyle={{ background: 'darkblue' }}>
      Sign Up
    </NavLink>
    <NavLink to="/app" exact style={link} activeStyle={{ background: 'darkblue' }}>
      App
    </NavLink>
  </div>
);

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/app" component={App} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
