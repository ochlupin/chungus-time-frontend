import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const Project = props => {
  const { title } = props.project;
  return (
    <Table.Row>
      <Table.Cell>{title}</Table.Cell>
    </Table.Row>
  );
};

export default Project;
