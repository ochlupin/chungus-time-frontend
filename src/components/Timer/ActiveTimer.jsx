import React from 'react';
import Timer from 'react-compound-timer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { Button, Icon } from 'semantic-ui-react';

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
              <Button color="youtube" size="medium" onClick={start} animated>
                <Button.Content visible>Start</Button.Content>
                <Button.Content hidden>
                  <Icon name="play" />
                </Button.Content>
              </Button>
              <Button color="youtube" size="medium" onClick={pause} animated>
                <Button.Content visible>Pause</Button.Content>
                <Button.Content hidden>
                  <Icon name="pause" />
                </Button.Content>
              </Button>
              <Button color="youtube" size="medium" onClick={resume} animated>
                <Button.Content visible>Resume</Button.Content>
                <Button.Content hidden>
                  <Icon name="pause" />/
                  <Icon name="play" />
                </Button.Content>
              </Button>
              <Button color="youtube" size="medium" onClick={stop} animated>
                <Button.Content visible>Stop</Button.Content>
                <Button.Content hidden>
                  <Icon name="stop" />
                </Button.Content>
              </Button>
              <Button color="youtube" size="medium" onClick={reset} animated>
                <Button.Content visible>Reset</Button.Content>
                <Button.Content hidden>
                  <Icon name="redo" />
                </Button.Content>
              </Button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    );
  }
}

export default ActiveTimer;
