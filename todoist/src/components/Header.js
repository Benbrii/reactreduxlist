import React, { Component } from "react";
import Logo from "../assets/images/Logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <img
          className="logo"
          src={Logo}
          alt="logo"
          onClick={this.refreshPage}
        />
      </div>
    );
  }
}

export default Header;
