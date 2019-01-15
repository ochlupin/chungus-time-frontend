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
    <Button component={Link} to="/" color="primary" variant="contained">
      Home
    </Button>
    <Button component={Link} to="/about" color="primary" variant="contained">
      About
    </Button>
    <Button component={Link} to="/login" color="primary" variant="contained">
      Login
    </Button>
    <Button component={Link} to="/signup" color="primary" variant="contained">
      Signup
    </Button>
    <Button component={Link} to="/app" color="primary" variant="contained">
      App
    </Button>
  </div>
);

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/signup" component={SignIn} />
      <Route exact path="/app" component={App} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
