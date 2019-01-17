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
      Login/Sign-Up
    </Button>
    <Button component={Link} to="/timers" color="primary" variant="contained" size="large">
      Timers
    </Button>
    <Button component={Link} to="/projects" color="primary" variant="contained" size="large">
      Projects
    </Button>
  </div>
);

export default NavBar;
