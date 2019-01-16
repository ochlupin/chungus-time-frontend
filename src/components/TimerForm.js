import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const TimerForm = props => {
  // console.log('In TimerForm, props are: ', props);
  const timerFormValues = props.timerFormValues;
  const handleSubmitTimer = props.handleSubmitTimer;
  const handleChangeTimerForm = props.handleChangeTimerForm;

  return (
    <div>
      <form onSubmit={handleSubmitTimer}>
        Title:
        <input
          type="text"
          name="title"
          value={timerFormValues.title}
          onChange={handleChangeTimerForm}
        />
        <br />
        <br />
        <br />
        Duration:
        <input
          type="text"
          name="seconds"
          value={timerFormValues.seconds}
          onChange={handleChangeTimerForm}
        />
        <br />
        <br />
        <br />
        Project:
        <input
          type="text"
          name="project_id"
          value={timerFormValues.project_id}
          onChange={handleChangeTimerForm}
        />
        <input type="submit" />
      </form>
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
