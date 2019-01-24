import React from "react";
import Project from "./Project";
import { Icon, Table } from "semantic-ui-react";

import _ from "lodash";

import moment from "moment";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const ProjectList = props => {
  const projects = props.projects;
  const handleDeleteProject = props.handleDeleteProject;
  const timers = props.timers;
  const timerSeconds = timers.map(timer => {
    return parseInt(timer.seconds);
  });
  const users = props.projects.users;
  const uniqueUsers = _.uniqBy(users, "id");

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
      <h3>Active Projects</h3>
      <BarChart width={800} height={600} data={projects}>
        <Tooltip />
        <Legend />
        <XAxis dataKey="title" />
        <YAxis />
        <Bar
          name="Timer Count"
          type="monotone"
          dataKey="timers.length"
          barSize={30}
          fill="#1F85D0"
        />
      </BarChart>
      <Table sortable celled color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Project <Icon name="sitemap" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              No. of Timers
              <Icon name="tasks" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              No. of Users <Icon name="user" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Total Duration <Icon name="time" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Delete <Icon name="delete" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {projects.map(project => (
          <Project
            key={project.id}
            project={project}
            handleDeleteProject={handleDeleteProject}
          />
        ))}
        <Table.Row>
          <Table.Cell>Totals </Table.Cell>
          <Table.Cell>{timers.length}</Table.Cell>
          <Table.Cell>N/A </Table.Cell>
          <Table.Cell>{formattedDurationColumnTotal}</Table.Cell>
          <Table.Cell> </Table.Cell>
        </Table.Row>
      </Table>
    </div>
  );
};

export default ProjectList;

// const columns = [
//   { Header: "Project", accessor: "title" },
//   { Header: "No. of Timers", accessor: "timers.length" },
//   { Header: "No. of Users", accessor: "uniqueUsers.length" }
// ];
