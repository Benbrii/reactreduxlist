import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img className="logo" src="../../assets/images/Logo.png" alt="logo" />
      </div>
    );
  }
}

export default Header;
