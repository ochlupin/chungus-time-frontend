import React from 'react';
import Project from './Project';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const ProjectList = props => {
  const projects = props.projects;
  const handleDeleteProject = props.handleDeleteProject;
  return (
    <div>
      <h3>Active Projects</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project</Table.HeaderCell>
            <Table.HeaderCell>No. of Timers</Table.HeaderCell>
            <Table.HeaderCell>Total Duration</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {projects.map(project => (
          <Project key={project.id} project={project} handleDeleteProject={handleDeleteProject} />
        ))}
      </Table>
    </div>
  );
};

export default ProjectList;
