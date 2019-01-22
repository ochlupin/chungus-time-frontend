import React from 'react';
import { Button, Checkbox, Form, Search } from 'semantic-ui-react';

export default class ProjectFilter extends React.Component {
    
  render() {
      const updateProjectSearchTerm = this.props.updateProjectSearchTerm
      const projectSearchTerm = this.props.projectSearchTerm
    return (
      <div className="filter">
        <Form>
          <Form.Input fluid label="Project Filter" placeholder="Search by project" onChange={updateProjectSearchTerm} value={projectSearchTerm} />
        </Form>
      </div>
    );
  }
}
