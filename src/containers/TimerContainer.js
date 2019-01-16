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
        <TimerForm
          handleSubmitTimer={handleSubmitTimer}
          handleChangeTimerForm={handleChangeTimerForm}
          timerFormValues={timerFormValues}
        />
        <ActiveTimer />
        <TimerList timers={timers} />
      </div>
    );
  }
}
export default TimerContainer;
