import React, { Component } from "react";
import Form from "../components/Form";
import List from "../components/List";

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <div className="five">
          <Form />
          <List />
        </div>
      </div>
    );
  }
}

export default ActionBar;
