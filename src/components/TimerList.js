import React from "react";
import Timer from "./Timer";

const TimerList = props => {
  const timers = props.timers;
  return (
    <div>
      <h3>Active Timers</h3>
      {timers.map(timer => (
        <Timer key={timer.id} timer={timer} />
      ))}
    </div>
  );
};

export default TimerList;
