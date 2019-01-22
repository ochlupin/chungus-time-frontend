import React from 'react';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react';

const Project = props => {
  const { title, id } = props.project;
  const handleDeleteProject = props.handleDeleteProject;
  const timers = props.timers;
  return (
    <Table.Row>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{props.project.timers.length}</Table.Cell>
      <Table.Cell>TotalDuration</Table.Cell>
      <Table.Cell>
        <Button onClick={() => handleDeleteProject(id)}>
          <Icon name="trash alternate outline" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Project;
