import React from 'react';
import TimerDetail from './TimerDetail';

const TimerList = props => {
  const timers = props.timers;
  return (
    <div>
      <h3>Active Timers</h3>
      {timers.map(timer => (
        <TimerDetail key={timer.id} timer={timer} />
      ))}
    </div>
  );
};

export default TimerList;
