import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './Home';
import About from './About';

import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TimerContainer from './containers/TimerContainer';
import ProjectContainer from './containers/ProjectContainer';
import NavBar from './navigation/NavBar';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/app" component={App} />
      <Route exact path="/timer" component={TimerContainer} />
      <Route exact path="/project" component={ProjectContainer} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
