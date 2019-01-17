import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './components/Home';
import About from './components/About';
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TimerContainer from './containers/TimerContainer';
import ProjectContainer from './containers/ProjectContainer';
import NavBar from './navigation/NavBar';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
