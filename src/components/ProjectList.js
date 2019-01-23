import React from 'react';
import Project from './Project';
import { Icon, Label, Menu, Table, Grid } from 'semantic-ui-react';

const ProjectList = props => {
  const projects = props.projects;
  const handleDeleteProject = props.handleDeleteProject;
  const timers = props.projects.timers;

  return (
    <div>
      <h3>Active Projects</h3>
      <Table celled color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Project <Icon name="sitemap" />
            </Table.HeaderCell>
            <Table.HeaderCell>No. of Timers</Table.HeaderCell>
            <Table.HeaderCell>
              Total Duration <Icon name="time" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Delete <Icon name="delete" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {projects.map(project => (
          <Project key={project.id} project={project} handleDeleteProject={handleDeleteProject} />
        ))}
        <Table.Row>
          <Table.Cell>Totals </Table.Cell>
        </Table.Row>
      </Table>
    </div>
  );
};

export default ProjectList;
