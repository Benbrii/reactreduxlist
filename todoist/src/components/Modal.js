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
    console.log(startdate);
    const formatedDate = startdate.toLocaleDateString("fr-FR");
    console.log(formatedDate);

    this.setState({
      startDate: formatedDate
    });

    this.props.callbackFromParent(formatedDate);
  };

  render() {
    const { startDate } = this.state;
    console.log(startDate);

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
