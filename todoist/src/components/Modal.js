import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  // au handleChangeDate
  handleChangeDate = startdate => {
    const formatedDate = startdate.toLocaleDateString("fr-FR");

    this.setState({
      startDate: formatedDate
    });

    this.props.callbackFromParent(formatedDate);
  };

  render() {
    const { startDate } = this.state;

    return !this.props.show ? (
      <div>
        <DatePicker
          selected={moment(startDate, "DD/MM/YYYY").toDate()}
          onChange={this.handleChangeDate}
          name="startDate"
          inline
        />
      </div>
    ) : null;
  }
}

export default Modal;
