import React from "react";
import Project from "./Project";
import { Icon, Label, Menu, Table, Grid } from "semantic-ui-react";
import ReactTable from "react-table";
import _ from "lodash";

const ProjectList = props => {
  const projects = props.projects;
  const handleDeleteProject = props.handleDeleteProject;
  const timers = props.timers;
  const timerSeconds = timers.map(timer => {
    return parseInt(timer.seconds);
  });
  const users = props.projects.users;
  const uniqueUsers = _.uniqBy(users, "id");

  const durationColumnTotal = _.reduce(
    timerSeconds,
    function(sum, n) {
      return sum + n;
    },
    0
  );

  const columns = [
    { Header: "Project", accessor: "title" },
    { Header: "No. of Timers", accessor: "timers.length" },
    { Header: "No. of Users", accessor: "uniqueUsers.length" }
  ];

  return (
    <div>
      <h3>Active Projects</h3>
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
          <Table.Cell>{durationColumnTotal} seconds </Table.Cell>
          <Table.Cell> </Table.Cell>
        </Table.Row>
      </Table>
      <ReactTable data={projects} columns={columns} />
    </div>
  );
};

export default ProjectList;
