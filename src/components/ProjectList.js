import React from 'react';
import Project from './Project';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const ProjectList = props => {
  const projects = props.projects;
  return (
    <div>
      <h3>Active Projects</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </Table>
    </div>
  );
};

export default ProjectList;
