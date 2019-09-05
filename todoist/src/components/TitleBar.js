import React, { Component } from "react";

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <div className="one titletaskbg">
          <p className="titletask">Toutes les tâches</p>
        </div>
        <div className="two">
          <p className="titletaskselected">Sélectionner une tâche</p>
        </div>
        <div className="tree">
          <button className="rectanglebutton">
            <img
              src="../../assets/icones/Shape.png"
              alt="crosscheck"
              className="crosscheck"
            />
            <p className="markasdone">Marquer comme terminé</p>
          </button>
        </div>
      </div>
    );
  }
}

export default TitleBar;
