import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  withRouter
} from "react-router-dom";

// // Material UI Imports
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

// component imports
import Home from "./components/Home";
import About from "./components/About";
import TimerContainer from "./containers/TimerContainer";
import ProjectContainer from "./containers/ProjectContainer";
import NavBar from "./navigation/NavBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

//
const timersAPI = "http://localhost:5000/api/v1/timers";
const projectsAPI = "http://localhost:5000/api/v1/projects";
const usersAPI = "http://localhost:5000/api/v1/users";
const initialTimerFormValues = {
  title: "Timer",
  seconds: "0",
  project_id: "",
  user_id: ""
};
const initialProjectFormValues = {
  title: "Title"
};

class App extends Component {
  state = {
    timers: [],
    projects: [],
    users: [],
    timerFormValues: initialTimerFormValues,
    projectFormValues: initialProjectFormValues,
    projectSearchTerm: ""
  };

  async componentDidMount() {
    this.fetchTimers();
    this.fetchProjects();
    this.fetchUsers();
    // AXIOS FETCH
    // const { data: timers } = await axios.get(timersAPI);
    // this.setState({ timers: timers });
  }

  // FETCHES
  fetchTimers = () => {
    fetch(timersAPI)
      .then(r => r.json())
      .then(timerData => {
        this.setState({ timers: timerData });
      });
  };

  fetchProjects = () => {
    fetch(projectsAPI)
      .then(r => r.json())
      .then(projectData => {
        this.setState({ projects: projectData });
      });
  };

  fetchUsers = () => {
    fetch(usersAPI)
      .then(r => r.json())
      .then(userData => {
        this.setState({ users: userData });
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
  handleChangeTimerForm = (event, { name, value }) => {
    console.log(name, value);

    const newTimerFormValues = {
      ...this.state.timerFormValues,
      [name]: value
    };
    this.setState({ timerFormValues: newTimerFormValues });
  };

  handleSubmitProject = event => {
    event.preventDefault();
    const { title } = this.state.projectFormValues;
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    fetch(projectsAPI, {
      method: "POST",
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
    const { title, seconds, project_id, user_id } = this.state.timerFormValues;
    // console.log('destructure', title, seconds, project_id);
    const body = JSON.stringify({
      // timer: { title: title, seconds: seconds, project_id: project_id, user_id: 1 }
      title: title,
      seconds: seconds,
      project_id: project_id,
      user_id: user_id
    });
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    fetch(timersAPI, {
      method: "POST",
      headers: headers,
      body: body
    })
      .then(r => r.json())
      .then(timer => this.addTimer(timer))
      .catch(error => console.error(error));
    this.setState({ timerFormValues: initialTimerFormValues });
  };

  handleDeleteTimer = async timerId => {
    await axios.delete(`http://localhost:5000/api/v1/timers/${timerId}`);
    const timers = this.state.timers.filter(t => t.id !== timerId);
    this.setState({ timers });
  };

  handleDeleteProject = async projectId => {
    await axios.delete(`http://localhost:5000/api/v1/projects/${projectId}`);
    const projects = this.state.projects.filter(p => p.id !== projectId);
    this.setState({ projects });
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

  updateProjectSearchTerm = (event, { name, value }) => {
    console.log(name, value);
    const projectSearchTerm = value;
    this.setState({ projectSearchTerm: projectSearchTerm });
  };

  projectsToDisplay = () => {
    return this.state.projects.filter(project =>
      project.title
        .toLowerCase()
        .includes(this.state.projectSearchTerm.toLowerCase())
    );
  };

  timersToDisplay = () => {
    return this.state.timers.filter(timer =>
      timer.project.title
        .toLowerCase()
        .includes(this.state.projectSearchTerm.toLowerCase())
    );
  };
  render() {
    // state to props
    const timers = this.timersToDisplay();
    const projects = this.projectsToDisplay();
    const users = this.state.users;
    const projectFormValues = this.state.projectFormValues;
    const timerFormValues = this.state.timerFormValues;
    const projectSearchTerm = this.state.projectSearchTerm;
    // callbacks as props
    const handleSubmitProject = this.handleSubmitProject;
    const handleSubmitTimer = this.handleSubmitTimer;
    const handleChangeProjectForm = this.handleChangeProjectForm;
    const handleChangeTimerForm = this.handleChangeTimerForm;
    const handleDeleteTimer = this.handleDeleteTimer;
    const handleDeleteProject = this.handleDeleteProject;
    const updateProjectSearchTerm = this.updateProjectSearchTerm;

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
                projects={projects}
                users={users}
                timerFormValues={timerFormValues}
                handleSubmitTimer={handleSubmitTimer}
                handleChangeTimerForm={handleChangeTimerForm}
                handleDeleteTimer={handleDeleteTimer}
                projectSearchTerm={projectSearchTerm}
                updateProjectSearchTerm={updateProjectSearchTerm}
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
                users={users}
                timers={timers}
                projectFormValues={projectFormValues}
                handleSubmitProject={handleSubmitProject}
                handleChangeProjectForm={handleChangeProjectForm}
                handleDeleteProject={handleDeleteProject}
                projectSearchTerm={projectSearchTerm}
                updateProjectSearchTerm={updateProjectSearchTerm}
                timerFormValues={timerFormValues}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
