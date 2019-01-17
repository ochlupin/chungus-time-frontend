import React from 'react';
import TimerForm from '../components/TimerForm';
import TimerList from '../components/TimerList';
import ActiveTimer from '../components/Timer/ActiveTimer';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
const timersAPI = 'http://localhost:5000/api/v1/timers';

class TimerContainer extends React.Component {
  state = {};
  render() {
    const timers = this.props.timers;
    const handleSubmitTimer = this.props.handleSubmitTimer;
    const handleChangeTimerForm = this.props.handleChangeTimerForm;
    const timerFormValues = this.props.timerFormValues;
    debugger;
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
        <TimerList timers={timers} />
      </div>
    );
  }
}
export default TimerContainer;
