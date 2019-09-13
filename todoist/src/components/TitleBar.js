import React, { Component } from "react";
import crossShape from "../assets/icones/Shape.png";
import { connect } from "react-redux";
import { completedItem } from "../actions/index";

class ConnectedTitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { idActive, items, completedItem } = this.props;

    return (
      <div className="wrapper">
        <div className="one titletaskbg">
          <p className="titletask">Toutes les tâches</p>
        </div>
        <div className="two">
          <p className="titletaskselected">
            {/**
             * Ternaire pour afficher le title de l'item en question via son idActive
             */}
            {idActive !== null && idActive !== undefined && items.length !== 0
              ? items[idActive].title
              : "Sélectionner une tâche..."}
          </p>
        </div>
        <div className="tree">
          <button
            className="rectanglebutton"
            onClick={() => completedItem(idActive)}
            value={idActive}
          >
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
    idActive: state.task.idActive,
    items: state.task.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completedItem: payload => dispatch(completedItem(payload))
  };
};

const TitleBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTitleBar);

export default TitleBar;
