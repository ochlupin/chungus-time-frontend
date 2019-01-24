import React from "react";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";
import ProjectFilter from "../components/ProjectFilter";

const projectsAPI = "http://localhost:5000/api/v1/projects";

class ProjectContainer extends React.Component {
  render() {
    const projects = this.props.projects;
    const users = this.props.users;
    const timers = this.props.timers;
    const timerFormValues = this.props.timerFormValues;

    const handleSubmitProject = this.props.handleSubmitProject;
    const handleChangeProjectForm = this.props.handleChangeProjectForm;
    const handleDeleteProject = this.props.handleDeleteProject;
    const projectFormValues = this.props.projectFormValues;
    const projectSearchTerm = this.props.projectSearchTerm;
    const updateProjectSearchTerm = this.props.updateProjectSearchTerm;
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
        <ProjectFilter
          updateProjectSearchTerm={updateProjectSearchTerm}
          projectSearchTerm={projectSearchTerm}
          projects={projects}
        />
        <ProjectList
          projects={projects}
          timers={timers}
          users={users}
          handleDeleteProject={handleDeleteProject}
        />
      </div>
    );
  }
}
export default ProjectContainer;
