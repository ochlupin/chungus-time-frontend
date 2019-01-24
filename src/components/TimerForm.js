import React from 'react';

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
import { Button, Form, Dropdown, Icon } from 'semantic-ui-react';
const initialTimerFormValues = {
  title: '',
  seconds: '',
  project_id: '',
  user_id: ''
};

class TimerForm extends React.Component {
  state = initialTimerFormValues;
  // const timerFormValues = props.timerFormValues;
  // const handleSubmitTimer = props.handleSubmitTimer;
  // const handleChangeTimerForm = props.handleChangeTimerForm;
  // const projects = props.projects;
  // const users = props.users;
  projectOptions = () =>
    this.props.projects.map(project => {
      return {
        text: project.title,
        value: project.id
      };
    });

  userOptions = () =>
    this.props.users.map(user => {
      return {
        text: user.username,
        value: user.id
      };
    });

  handleChangeTimerForm = (event, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmitTimer = event => {
    event.preventDefault();
    this.props.handleSubmitTimer(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Form onSubmit={this.handleSubmitTimer}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Timer"
              placeholder="What did you do?"
              name="title"
              value={this.state.title}
              onChange={this.handleChangeTimerForm}
            />
            <Form.Input
              fluid
              label="Duration"
              placeholder="How long did it take?"
              name="seconds"
              value={this.state.seconds}
              onChange={this.handleChangeTimerForm}
            />
            <Dropdown
              scrolling
              wrapSelection
              labeled
              fluid
              selection
              search
              name="project_id"
              placeholder="Which Project does this belong to?"
              options={this.projectOptions()}
              onChange={this.handleChangeTimerForm}
              value={this.state.project_id}
            />
            <Dropdown
              scrolling
              wrapSelection
              labeled
              fluid
              selection
              search
              name="user_id"
              placeholder="Which User is this timer assigned to?"
              options={this.userOptions()}
              onChange={this.handleChangeTimerForm}
              value={this.state.user_id}
            />
          </Form.Group>
          <Button type="submit" color="linkedin" icon labelPosition="right">
            <Icon name="add" />
            Create a Timer
          </Button>
        </Form>
      </div>
    );
  }
}

export default TimerForm;
