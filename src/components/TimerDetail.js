import React from 'react';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react';

const TimerDetail = props => {
  const { title, seconds, id } = props.timer;
  const removeTimer = props.removeTimer;
  const handleDeleteTimer = props.handleDeleteTimer;

  return (
    <Table.Row>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{seconds}</Table.Cell>
      <Table.Cell>{props.timer.project.title}</Table.Cell>
      <Table.Cell>
        <Button onClick={() => handleDeleteTimer(id)}>
          <Icon name="trash alternate outline" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TimerDetail;
