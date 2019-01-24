import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Search,
  Icon,
  Dropdown
} from "semantic-ui-react";

export default class ProjectFilter extends React.Component {
  render() {
    const timerFormValues = this.props.timerFormValues;
    const updateProjectSearchTerm = this.props.updateProjectSearchTerm;
    const projectSearchTerm = this.props.projectSearchTerm;
    const projects = this.props.projects;
    const projectOptions = projects.map(project => {
      return {
        text: project.title,
        value: project.id
      };
    });

    return (
      <div className="filter">
        <Form>
          <Icon name="search" />
          <Form.Input
            fluid
            label="Project Filter"
            placeholder="Search by project"
            onChange={updateProjectSearchTerm}
            value={projectSearchTerm}
          />
        </Form>
      </div>
    );
  }
}

// <Dropdown
//   fluid
//   selection
//   search
//   name="project_id"
//   placeholder="Which Project does this belong to?"
//   options={projectOptions}
//   onChange={updateProjectSearchTerm}
//   value={projectSearchTerm}
// />
