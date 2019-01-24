import React from "react";
import TimerDetail from "./TimerDetail";
import ReactTable from "react-table";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import _ from "lodash";
import Moment from "react-moment";
import moment from "moment";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
// import { Tab } from "@material-ui/core";

const TimerList = props => {
  const timers = props.timers;
  const timerSeconds = timers.map(timer => {
    return parseInt(timer.seconds);
  });
  const removeTimer = props.removeTimer;
  const handleDeleteTimer = props.handleDeleteTimer;

  const durationColumnTotal = moment.duration(
    _.reduce(
      timerSeconds,
      function(sum, n) {
        return sum + n;
      },
      0
    ),
    "seconds"
  );

  const formattedDurationColumnTotal = durationColumnTotal.format("hh:mm:ss");
  return (
    <div>
      <h3>Active Timers</h3>
      <BarChart width={1920} height={600} data={timers}>
        <Tooltip />
        <Legend />
        <XAxis dataKey="title" />
        <YAxis />
        <Bar
          name="Duration (secs)"
          type="monotone"
          dataKey="seconds"
          barSize={30}
          fill="#1F85D0"
        />
      </BarChart>
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
          <Table.Row>
            <Table.Cell>Total Duration</Table.Cell>
            <Table.Cell>{formattedDurationColumnTotal}</Table.Cell>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled inverted color="blue" />
    </div>
  );
};

export default TimerList;
