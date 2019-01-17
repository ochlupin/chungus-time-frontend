import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// component imports
import Home from './components/Home';
import About from './components/About';
import TimerContainer from './containers/TimerContainer';
import ProjectContainer from './containers/ProjectContainer';
import NavBar from './navigation/NavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';

//
const timersAPI = 'http://localhost:5000/api/v1/timers';
const projectsAPI = 'http://localhost:5000/api/v1/projects';
const usersAPI = 'http://localhost:5000/api/v1/users';
const initialTimerFormValues = {
  title: 'Timer',
  seconds: '0',
  project_id: 0
};
const initialProjectFormValues = {
  title: 'Title'
};

class App extends Component {
  state = {
    timers: [],
    projects: [],
    timerFormValues: initialTimerFormValues,
    projectFormValues: initialProjectFormValues
  };

  componentDidMount() {
    this.fetchTimers();
    this.fetchProjects();
  }

  // FETCHES
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

  // EVENT HANDLERS

  handleChangeProjectForm = event => {
    const userInput = event.target.value;
    // console.log('User Input is :', userInput);
    const newProjectFormValues = {
      ...this.state.projectFormValues,
      [event.target.name]: userInput
    };
    this.setState({ projectFormValues: newProjectFormValues });
  };
  handleChangeTimerForm = event => {
    const userInput = event.target.value;
    // console.log('User Input is :', userInput);
    const newTimerFormValues = {
      ...this.state.timerFormValues,
      [event.target.name]: userInput
    };
    this.setState({ timerFormValues: newTimerFormValues });
  };

  handleSubmitProject = event => {
    event.preventDefault();
    const { title } = this.state.projectFormValues;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    fetch(projectsAPI, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        title: title
      })
    })
      .then(r => r.json())
      .then(project => this.addProject(project))
      .catch(error => console.error(error));
    this.setState({ projectFormValues: initialProjectFormValues });
  };

  handleSubmitTimer = event => {
    // console.log(event, 'state', this.state.timerFormValues);

    event.preventDefault();
    const { title, seconds, project_id } = this.state.timerFormValues;
    // console.log('destructure', title, seconds, project_id);
    const body = JSON.stringify({
      // timer: { title: title, seconds: seconds, project_id: project_id, user_id: 1 }
      title: title,
      seconds: seconds,
      project_id: project_id,
      user_id: 1
    });
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    fetch(timersAPI, {
      method: 'POST',
      headers: headers,
      body: body
    })
      .then(r => r.json())
      .then(timer => this.addTimer(timer))
      .catch(error => console.error(error));
    this.setState({ timerFormValues: initialTimerFormValues });
  };

  //STATE UPDATING
  addProject = project => {
    this.setState({
      projects: [...this.state.projects, project]
    });
  };
  addTimer = timer => {
    this.setState({
      timers: [...this.state.timers, timer]
    });
  };

  render() {
    const timers = this.state.timers;
    const projects = this.state.projects;
    const handleSubmitProject = this.handleSubmitProject;
    const handleSubmitTimer = this.handleSubmitTimer;
    const handleChangeProjectForm = this.handleChangeProjectForm;
    const handleChangeTimerForm = this.handleChangeTimerForm;
    const projectFormValues = this.state.projectFormValues;
    const timerFormValues = this.state.timerFormValues;
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/timers"
          render={() => {
            return (
              <TimerContainer
                timers={timers}
                timerFormValues={timerFormValues}
                handleSubmitTimer={handleSubmitTimer}
                handleChangeTimerForm={handleChangeTimerForm}
              />
            );
          }}
        />
        <Route
          path="/projects"
          render={() => {
            return (
              <ProjectContainer
                projects={projects}
                projectFormValues={projectFormValues}
                handleSubmitProject={handleSubmitProject}
                handleChangeProjectForm={handleChangeProjectForm}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
