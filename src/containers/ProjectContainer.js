import React from "react";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

const projectsAPI = "http://localhost:5000/api/v1/projects";

class ProjectContainer extends React.Component {
  render() {
    const projects = this.props.projects;
    const handleSubmitProject = this.props.handleSubmitProject;
    const handleChangeProjectForm = this.props.handleChangeProjectForm;
    const projectFormValues = this.props.projectFormValues;
    return (
      <div>
        <ProjectForm
          handleSubmitProject={handleSubmitProject}
          handleChangeProjectForm={handleChangeProjectForm}
          projectFormValues={projectFormValues}
        />
        <br />
        <br />
        <br />
        <ProjectList projects={projects} />
      </div>
    );
  }
}
export default ProjectContainer;
