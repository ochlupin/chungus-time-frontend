import React from "react";
import TimerForm from "../components/TimerForm";
import TimerList from "../components/TimerList";
import ActiveTimer from "../components/Timer/ActiveTimer";

const timersAPI = "http://localhost:5000/api/v1/timers";
const projectsAPI = "http://localhost:5000/api/v1/projects";

class TimerContainer extends React.Component {
  render() {
    const timers = this.props.timers;
    const handleSubmitTimer = this.props.handleSubmitTimer;
    const handleChangeTimerForm = this.props.handleChangeTimerForm;
    const timerFormValues = this.props.timerFormValues;
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
        />
        <br />
        <br />
        <br />
        <TimerList timers={timers} />
      </div>
    );
  }
}
export default TimerContainer;
