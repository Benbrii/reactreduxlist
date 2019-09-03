import React, { Component } from "react";
import List from "./components/List";
import Form from "./components/Form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        Items
        <List />
        <Form />
      </div>
    );
  }
}

export default App;
