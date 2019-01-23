import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
// import Button from '@material-ui/core/Button';

const NavBar = () => (
  <div>
    <Button as={Link} to="/" variant="contained" size="large" animated primary>
      <Button.Content visible>Home</Button.Content>
      <Button.Content hidden>
        <Icon name="home" />
      </Button.Content>
    </Button>
    <Button
      as={Link}
      to="/about"
      primary
      variant="contained"
      size="large"
      icon
      labelPosition="left"
      animated
    >
      <Button.Content visible>About</Button.Content>
      <Button.Content hidden>
        <Icon name="info circle" />
      </Button.Content>
    </Button>
    <Button
      as={Link}
      to="/login"
      primary
      variant="contained"
      size="large"
      icon
      labelPosition="left"
      animated
    >
      <Button.Content hidden>
        <Icon name="sign in" />
      </Button.Content>
      <Button.Content visible>Login/Sign-Up </Button.Content>
    </Button>
    <Button
      as={Link}
      to="/timers"
      primary
      variant="contained"
      size="large"
      icon
      labelPosition="left"
      animated
    >
      <Button.Content hidden>
        <Icon name="tasks" />
      </Button.Content>
      <Button.Content visible>Timers</Button.Content>
    </Button>
    <Button
      as={Link}
      to="/projects"
      primary
      variant="contained"
      size="large"
      icon
      labelPosition="left"
      animated
    >
      <Button.Content hidden>
        <Icon name="sitemap" />
      </Button.Content>
      <Button.Content visible> Projects </Button.Content>
    </Button>
  </div>
);

export default NavBar;
