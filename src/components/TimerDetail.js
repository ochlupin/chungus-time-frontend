import React from "react";

const TimerDetail = props => {
  const { title, seconds } = props.timer;
  return (
    <div>
      <li>
        {title}||{seconds} sec
      </li>
    </div>
  );
};

export default TimerDetail;
