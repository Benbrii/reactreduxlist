import React, { Component } from "react";
import Oval from "../assets/icones/Oval.png";
import Clock from "../assets/icones/Clock.png";
import PaperPen from "../assets/icones/PaperPen.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <div className="six">
          <button className="mainbutton">
            <img src={Oval} alt="ovalicon" className="icon_oval" />
            <div className="position_of_plus">+</div>
            <p className="position_of_button_name">Attribuer à</p>
          </button>
          <button className="mainbutton">
            <img src={Oval} alt="ovalicon" className="icon_oval" />
            <div className="position_of_clock">
              <img src={Clock} alt="clockicon" className="icon_clock" />
            </div>
            <p className="position_of_button_name">Echéance</p>
          </button>
          <div className="description_rectangle">
            <p className="description_title">
              <img
                src={PaperPen}
                alt="paperpenicon"
                className="icon_paper_pen"
              />
              Description
            </p>
            <div className="input_description_inner" />
            <button className="comment_button">
              <p className="commenter">Commenter</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
