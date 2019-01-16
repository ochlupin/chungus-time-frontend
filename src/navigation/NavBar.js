import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const NavBar = () => (
  <div>
    <Button component={Link} to="/" color="primary" variant="contained" size="large">
      Home
    </Button>
    <Button component={Link} to="/about" color="primary" variant="contained" size="large">
      About
    </Button>
    <Button component={Link} to="/login" color="primary" variant="contained" size="large">
      Login
    </Button>
    <Button component={Link} to="/signup" color="primary" variant="contained" size="large">
      Signup
    </Button>
    <Button component={Link} to="/app" color="primary" variant="contained" size="large">
      App
    </Button>
    <Button component={Link} to="/timer" color="primary" variant="contained" size="large">
      Timers
    </Button>
    <Button component={Link} to="/project" color="primary" variant="contained" size="large">
      Projects
    </Button>
  </div>
);

export default NavBar;
