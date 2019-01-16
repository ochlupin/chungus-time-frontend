import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import TimerContainer from "./containers/TimerContainer";
import ProjectContainer from "./containers/ProjectContainer";

const timersAPI = "http://localhost:5000/api/v1/timers";
const projectsAPI = "http://localhost:5000/api/v1/projects";
const initialTimerFormValues = {
  title: "Timer",
  seconds: "0"
};
const initialProjectFormValues = {
  title: "Title"
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
          console.log("The state in App: ", timerData);
        });
      });
  };

  fetchProjects = () => {
    fetch(projectsAPI)
      .then(r => r.json())
      .then(projectData => {
        this.setState({ projects: projectData }, () => {
          console.log("The state in App: ", projectData);
        });
      });
  };

  // EVENT HANDLERS

  handleChangeProjectForm = event => {
    const userInput = event.target.value;
    console.log("User Input is :", userInput);
    const newProjectFormValues = {
      ...this.state.projectFormValues,
      [event.target.name]: userInput
    };
    this.setState({ projectFormValues: newProjectFormValues });
  };
  handleChangeTimerForm = event => {
    const userInput = event.target.value;
    console.log("User Input is :", userInput);
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
    event.preventDefault();
    const { title, seconds } = this.state.timerFormValues;
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    fetch(timersAPI, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        title: title,
        seconds: seconds
      })
    })
      .then(r => r.json())
      .then(timer => this.addTimer(timer))
      .catch(error => console.error(error));
    this.setState({ timerFormValues: initialTimerFormValues });
  };

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
    const addProject = this.addProject;
    const addTimer = this.addTimer;
    const projectFormValues = this.state.projectFormValues;
    const timerFormValues = this.state.timerFormValues;
    return (
      <div className="App">
        <TimerContainer
          timers={timers}
          timerFormValues={timerFormValues}
          handleSubmitTimer={handleSubmitTimer}
          handleChangeTimerForm={handleChangeTimerForm}
        />
        <br />
        <br />
        <br />
        <ProjectContainer
          projects={projects}
          projectFormValues={projectFormValues}
          handleSubmitProject={handleSubmitProject}
          handleChangeProjectForm={handleChangeProjectForm}
        />
      </div>
    );
  }
}

export default App;
