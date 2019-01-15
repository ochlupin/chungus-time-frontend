import React from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const projectsAPI = 'http://localhost:5000/api/v1/projects';

class ProjectContainer extends React.Component {
  render() {
    return (
      <div>
        <ProjectForm />
        <ProjectList />
      </div>
    );
  }
}
export default ProjectContainer;
