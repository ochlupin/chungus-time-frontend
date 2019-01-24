import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Search,
  Icon,
  Dropdown
} from "semantic-ui-react";

export default class TimerFilter extends React.Component {
  render() {
    const timerSearchTerm = this.props.timerSearchTerm;
    const updateTimerSearchTerm = this.props.updateTimerSearchTerm;
    return (
      <div className="filter">
        <Form>
          <Form.Input
            fluid
            label="Timer Filter"
            placeholder="Search by timer"
            onChange={updateTimerSearchTerm}
            value={timerSearchTerm}
          />
        </Form>
      </div>
    );
  }
}
