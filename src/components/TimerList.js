import React from 'react';
import TimerDetail from './TimerDetail';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Tab } from '@material-ui/core';

const TimerList = props => {
  const timers = props.timers;
  const removeTimer = props.removeTimer;
  const handleDeleteTimer = props.handleDeleteTimer;
  return (
    <div>
      <h3>Active Timers</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Timer</Table.HeaderCell>
            <Table.HeaderCell>Duration</Table.HeaderCell>
            <Table.HeaderCell>Project</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {timers.map(timer => (
            <TimerDetail
              key={timer.id}
              timer={timer}
              removeTimer={removeTimer}
              handleDeleteTimer={handleDeleteTimer}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TimerList;
