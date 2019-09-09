import React, { Component } from "react";
import DatePicker from "react-datepicker";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: ""
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
  }

  handleDate(date) {
    this.props.handleClose();
    this.setState({
      startDate: date
    });
  }

  handleStartDate(date) {
    this.setState({
      startDate: date
    });

    console.log(this.startDate);
  }

  render() {
    const { startDate } = this.state;

    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <DatePicker
          selected={startDate}
          onChange={this.handleStartDate}
          name="startDate"
          dateFormat="dd/MM/yyyy"
          inline
        />
      </div>
    );
  }
}

export default Modal;
