import React, { Component } from "react";
import Logo from "../assets/images/Logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img className="logo" src={Logo} alt="logo" />
      </div>
    );
  }
}

export default Header;
