import React from 'react';

// Material - UI Imports
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
// import IconButton from '@material-ui/core/IconButton';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';

// Semantic UI Imports
import { Button, Checkbox, Form } from 'semantic-ui-react';

const ProjectForm = props => {
  // console.log("In ProjectForm, props are: ", props);
  const projectFormValues = props.projectFormValues;
  const handleSubmitProject = props.handleSubmitProject;
  const handleChangeProjectForm = props.handleChangeProjectForm;
  return (
    <div>
      <Form onSubmit={handleSubmitProject}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Project"
            placeholder="What's the project name?"
            name="title"
            value={projectFormValues.title}
            onChange={handleChangeProjectForm}
          />
        </Form.Group>
        <Button type="submit" primary>
          Create a Project
        </Button>
      </Form>
    </div>
  );
};

export default ProjectForm;
