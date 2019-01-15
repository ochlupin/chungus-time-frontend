import React from 'react';
import TimerForm from '../components/TimerForm';
import TimerList from '../components/TimerList';

const timersAPI = 'http://localhost:5000/api/v1/timers';
const projectsAPI = 'http://localhost:5000/api/v1/projects';

class TimerContainer extends React.Component {
  render() {
    return (
      <div>
        <TimerForm />
        <TimerList />
      </div>
    );
  }
}
export default TimerContainer;
