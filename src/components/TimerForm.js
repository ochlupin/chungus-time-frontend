import React from 'react';
import PropTypes from 'prop-types';

// Material UI Imports
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
// import IconButton from '@material-ui/core/IconButton';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';

// Semantic UI Imports
import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react';

const TimerForm = props => {
  // console.log('In TimerForm, props are: ', props);
  const timerFormValues = props.timerFormValues;
  const handleSubmitTimer = props.handleSubmitTimer;
  const handleChangeTimerForm = props.handleChangeTimerForm;
  const projects = props.projects;
  const projectOptions = projects.map(project => {
    return {
      text: project.title,
      value: project.id
    };
  });

  return (
    <div>
      <Form onSubmit={handleSubmitTimer}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Timer"
            placeholder="What did you do?"
            name="title"
            value={timerFormValues.title}
            onChange={handleChangeTimerForm}
          />
          <Form.Input
            fluid
            label="Duration"
            placeholder="How long did it take?"
            name="seconds"
            value={timerFormValues.seconds}
            onChange={handleChangeTimerForm}
          />
          <Dropdown
            fluid
            selection
            search
            name="project_id"
            placeholder="Which Project does this belong to?"
            label="Project"
            options={projectOptions}
            onChange={handleChangeTimerForm}
            value={timerFormValues.project_id}
          />
        </Form.Group>
        <Button typ="submit" primary>
          Create a Timer
        </Button>
      </Form>
    </div>
  );
};

export default TimerForm;
