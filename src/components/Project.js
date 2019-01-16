import React from "react";

const Project = props => {
  const { title } = props.project;
  return (
    <div>
      <li>{title}</li>
    </div>
  );
};

export default Project;
