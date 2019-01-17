import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const TimerDetail = props => {
  const { title, seconds } = props.timer;

  return (
    <Table.Row>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{seconds}</Table.Cell>
      <Table.Cell>{props.timer.project.title}</Table.Cell>
    </Table.Row>
  );
};

export default TimerDetail;
