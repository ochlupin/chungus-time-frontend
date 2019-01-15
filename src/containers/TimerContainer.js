import React from 'react';
import TimerForm from '../components/TimerForm';
import TimerList from '../components/TimerList';

const timersAPI = 'http://localhost:5000/api/v1/timers';
const projectsAPI = 'http://localhost:5000/api/v1/projects';

class TimerContainer extends React.Component {
  render() {
    const timers = this.props.timers;
    return (
      <div>
        <TimerForm />
        <TimerList timers={timers} />
      </div>
    );
  }
}
export default TimerContainer;
