import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const TimerForm = props => {
  console.log("In TimerForm, props are: ", props);
  const timerFormValues = props.timerFormValues;
  const handleSubmitTimer = props.handleSubmitTimer;
  const handleChangeTimerForm = props.handleChangeTimerForm;

  return (
    <div>
      <form onSubmit={handleSubmitTimer}>
        <Button color="primary" variant="contained" size="large">
          Create a Timer
        </Button>
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
      </form>
    </div>
  );
};

export default TimerForm;
