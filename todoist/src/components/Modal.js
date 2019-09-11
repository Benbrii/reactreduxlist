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

  handleChangeDate = startdate => {
    const formatedDate = startdate.toLocaleDateString("fr-FR");

    this.setState({
      startDate: formatedDate
    });

    this.props.callbackFromParent(formatedDate);
  };

  render() {
    const { startDate } = this.state;

    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <DatePicker
          selected={moment(startDate, "DD/MM/YYYY").toDate()}
          onChange={this.handleChangeDate}
          name="startDate"
          inline
        />
      </div>
    );
  }
}

export default Modal;
