import React, { Component } from "react";
import DatePicker from "react-datepicker";

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

    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <DatePicker
          selected={startDate}
          onChange={this.handleChangeDate}
          name="startDate"
          dateFormat="MM/DD/YYYY"
          inline
        />
      </div>
    );
  }
}

export default Modal;
