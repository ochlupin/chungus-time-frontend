import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TimerContainer from './containers/TimerContainer';
import ProjectContainer from './containers/ProjectContainer';

const timersAPI = 'http://localhost:5000/api/v1/timers';
const projectsAPI = 'http://localhost:5000/api/v1/projects';

class App extends Component {
  state = {
    timers: [],
    projects: []
  };

  fetchTimers = () => {
    fetch(timersAPI)
      .then(r => r.json())
      .then(timerData => {
        this.setState({ timers: timerData }, () => {
          console.log('The state in App: ', timerData);
        });
      });
  };

  fetchProjects = () => {
    fetch(projectsAPI)
      .then(r => r.json())
      .then(projectData => {
        this.setState({ projects: projectData }, () => {
          console.log('The state in App: ', projectData);
        });
      });
  };

  componentDidMount() {
    this.fetchTimers();
    this.fetchProjects();
  }

  render() {
    return (
      <div className="App">
        <TimerContainer />
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
