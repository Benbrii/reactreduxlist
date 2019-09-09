import React, { Component } from "react";
import ActionBar from "../src/components/ActionBar";
import Header from "./components/Header";
import TitleBar from "./components/TitleBar";

import "./CSS/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="App" />
        <Header />
        <TitleBar />
        <ActionBar />
      </div>
    );
  }
}

export default App;
