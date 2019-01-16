import React from "react";
import Project from "./Project";

const ProjectList = props => {
  const projects = props.projects;
  return (
    <div>
      <h3>Active Projects</h3>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
