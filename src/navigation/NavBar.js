import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
// import Button from '@material-ui/core/Button';

const NavBar = () => (
  <div>
    <Button
      as={Link}
      to="/"
      color="linkedin"
      variant="contained"
      size="large"
      icon
      labelPosition="left"
    >
      <Icon name="home" />
      Home
    </Button>
    <Button
      as={Link}
      to="/about"
      color="linkedin"
      variant="contained"
      size="large"
      icon
      labelPosition="left"
    >
      <Icon name="info circle" />
      About
    </Button>
    <Button
      as={Link}
      to="/login"
      color="linkedin"
      variant="contained"
      size="large"
      icon
      labelPosition="left"
    >
      <Icon name="sign in" />
      Login/Sign-Up
    </Button>
    <Button
      as={Link}
      to="/timers"
      color="linkedin"
      variant="contained"
      size="large"
      icon
      labelPosition="left"
    >
      <Icon name="tasks" />
      Timers
    </Button>
    <Button
      as={Link}
      to="/projects"
      color="linkedin"
      variant="contained"
      size="large"
      icon
      labelPosition="left"
    >
      Projects <Icon name="sitemap" />
    </Button>
  </div>
);

export default NavBar;
