import React, { Component } from "react";
import crossShape from "../assets/icones/Shape.png";
import { connect } from "react-redux";

class ConnectedTitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //console.log(this.state.task);
    //console.log(this.props.items);

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
            <img src={crossShape} alt="crosscheck" className="crosscheck" />
            <p className="markasdone">Marquer comme terminé</p>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const TitleBar = connect(
  mapStateToProps,
  null
)(ConnectedTitleBar);

export default TitleBar;
