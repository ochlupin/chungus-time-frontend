import React from "react";
import TimerDetail from "./TimerDetail";
import ReactTable from "react-table";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
// import { Tab } from "@material-ui/core";

const TimerList = props => {
  const timers = props.timers;
  const removeTimer = props.removeTimer;
  const handleDeleteTimer = props.handleDeleteTimer;

  const durationSum = () => {
    let total = 0;
    timers.forEach(timer => {
      total += parseInt(timer.seconds);
    });
    return total;
  };
  return (
    <div>
      <h3>Active Timers</h3>
      <Table sortable celled color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Timer <Icon name="tasks" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Duration
              <Icon name="time" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Project <Icon name="sitemap" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              User <Icon name="user" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Delete <Icon name="delete" />
            </Table.HeaderCell>
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
      <Table celled inverted color="blue">
        <Table.Row>
          <Table.Cell>Total Duration</Table.Cell>
          <Table.Cell>{durationSum()} seconds</Table.Cell>
        </Table.Row>
      </Table>
    </div>
  );
};

export default TimerList;
