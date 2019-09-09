import React, { Component } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Main from "../components/Main";

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Form />
        <List />
        <Main />
      </div>
    );
  }
}

export default ActionBar;
