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
import { Button, Checkbox, Form } from 'semantic-ui-react';

const TimerForm = props => {
  // console.log('In TimerForm, props are: ', props);
  const timerFormValues = props.timerFormValues;
  const handleSubmitTimer = props.handleSubmitTimer;
  const handleChangeTimerForm = props.handleChangeTimerForm;

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
          <Form.Input
            fluid
            label="Project"
            placeholder="Which Project does this belong to?"
            name="project_id"
            value={timerFormValues.project_id}
            onChange={handleChangeTimerForm}
          />
        </Form.Group>
        <Form.Field control={Button}>Create a Timer</Form.Field>
      </Form>
    </div>
  );
};

export default TimerForm;

{
  /* <form onSubmit={handleSubmitTimer}>
  <br />
  <TextField
  id="standard-name"
  label="Title"
  name="title"
  margin="normal"
  value={timerFormValues.title}
  onChange={handleChangeTimerForm}
  />
  <TextField
  id="standard-name"
  label="Duration"
  name="seconds"
  margin="normal"
  value={timerFormValues.seconds}
  onChange={handleChangeTimerForm}
  />
  </form> */
}

{
  /* <Button color="primary" variant="contained" size="large">
  Create a Timer
  </Button> */
}

{
  /* <FormControl>
    <InputLabel htmlFor="component-simple">Title</InputLabel>
    <Input
      id="component-simple"
      name="title"
      value={timerFormValues.title}
      onChange={handleChangeTimerForm}
    />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="component-simple">Duration</InputLabel>
    <Input
      id="component-simple"
      name="seconds"
      value={timerFormValues.seconds}
      onChange={handleChangeTimerForm}
    />
  </FormControl> */
}
