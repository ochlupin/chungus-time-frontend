import React from "react";
import Timer from "react-compound-timer";
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

class ActiveTimer extends React.Component {
  render() {
    return (
      <Timer initialTime={0} startImmediately={false}>
        {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
            <div>
              <Timer.Hours /> hours |
              <Timer.Minutes /> minutes |
              <Timer.Seconds /> seconds
            </div>
            <div>{timerState}</div>
            <br />
            <div>
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                onClick={start}
              >
                Start
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                onClick={pause}
              >
                Pause
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                onClick={resume}
              >
                Resume
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                onClick={stop}
              >
                Stop
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                onClick={reset}
              >
                Reset
              </Button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    );
  }
}

export default ActiveTimer;
