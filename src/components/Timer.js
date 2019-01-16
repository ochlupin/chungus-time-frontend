import React from "react";

const Timer = props => {
  const { title, seconds } = props.timer;
  return (
    <div>
      <li>
        {title}||{seconds} seconds
      </li>
    </div>
  );
};

export default Timer;
