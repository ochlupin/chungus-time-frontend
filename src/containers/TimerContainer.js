import React from "react";
import TimerForm from "../components/TimerForm";
import TimerList from "../components/TimerList";
import ActiveTimer from "../components/Timer/ActiveTimer";
import ProjectFilter from "../components/ProjectFilter";
import TimerFilter from "../components/TimerFilter";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

const timersAPI = "http://localhost:5000/api/v1/timers";

class TimerContainer extends React.Component {
  render() {
    const timers = this.props.timers;
    const projects = this.props.projects;
    const users = this.props.users;
    const handleSubmitTimer = this.props.handleSubmitTimer;
    const handleChangeTimerForm = this.props.handleChangeTimerForm;
    const handleDeleteTimer = this.props.handleDeleteTimer;
    const removeTimer = this.props.removeTimer;
    const timerFormValues = this.props.timerFormValues;
    const updateProjectSearchTerm = this.props.updateProjectSearchTerm;
    const updateTimerSearchTerm = this.props.updateTimerSearchTerm;
    const projectSearchTerm = this.props.projectSearchTerm;
    const timerSearchTerm = this.props.timerSearchTerm;

    return (
      <div>
        <ActiveTimer />
        <br />
        <br />
        <br />
        <TimerForm
          handleSubmitTimer={handleSubmitTimer}
          handleChangeTimerForm={handleChangeTimerForm}
          timerFormValues={timerFormValues}
          projects={projects}
          timers={timers}
          users={users}
        />
        <br />
        <br />
        <ProjectFilter
          updateProjectSearchTerm={updateProjectSearchTerm}
          projectSearchTerm={projectSearchTerm}
          projects={projects}
          users={users}
          timers={timers}
        />
        <TimerList
          timers={timers}
          removeTimer={removeTimer}
          handleDeleteTimer={handleDeleteTimer}
        />
      </div>
    );
  }
}
export default TimerContainer;
