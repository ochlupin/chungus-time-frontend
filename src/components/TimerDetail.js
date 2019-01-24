import React from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import Moment from "react-moment";
import moment from "moment";

const TimerDetail = props => {
  const { title, seconds, id } = props.timer;
  const { username } = props.timer.user;

  const handleDeleteTimer = props.handleDeleteTimer;

  const durationSeconds = moment.duration(parseInt(seconds), "seconds");
  const formattedDurationSeconds = durationSeconds.format("hh:mm:ss");

  return (
    <Table.Row>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{formattedDurationSeconds}</Table.Cell>
      <Table.Cell>{props.timer.project.title}</Table.Cell>
      <Table.Cell>{username}</Table.Cell>
      <Table.Cell>
        <Button onClick={() => handleDeleteTimer(id)}>
          <Icon name="trash alternate outline" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TimerDetail;
