import React from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import _ from "lodash";

const Project = props => {
  const { title, id } = props.project;
  const handleDeleteProject = props.handleDeleteProject;
  const timers = props.project.timers;
  const users = props.project.users;
  const uniqueUsers = _.uniqBy(users, "id");
  const timerSeconds = timers.map(timer => {
    return parseInt(timer.seconds);
  });
  const secondsTotal = _.reduce(
    timerSeconds,
    function(sum, n) {
      return sum + n;
    },
    0
  );

  return (
    <Table.Row>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{timers.length}</Table.Cell>
      <Table.Cell>{uniqueUsers.length}</Table.Cell>
      <Table.Cell>{secondsTotal} seconds</Table.Cell>
      <Table.Cell>
        <Button onClick={() => handleDeleteProject(id)}>
          <Icon name="trash alternate outline" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Project;
