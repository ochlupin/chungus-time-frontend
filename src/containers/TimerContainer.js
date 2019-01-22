import React from 'react';
import TimerForm from '../components/TimerForm';
import TimerList from '../components/TimerList';
import ActiveTimer from '../components/Timer/ActiveTimer';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
const timersAPI = 'http://localhost:5000/api/v1/timers';

class TimerContainer extends React.Component {
  render() {
    const timers = this.props.timers;
    const handleSubmitTimer = this.props.handleSubmitTimer;
    const handleChangeTimerForm = this.props.handleChangeTimerForm;
    const handleDeleteTimer = this.props.handleDeleteTimer;
    const removeTimer = this.props.removeTimer;
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
