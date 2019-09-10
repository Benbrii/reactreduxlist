import React, { Component } from "react";
import List from "../components/List";
import Main from "../components/Main";

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <List />
        <Main />
      </div>
    );
  }
}

export default ActionBar;
