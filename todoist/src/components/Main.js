import React, { Component } from "react";
import Oval from "../assets/icones/Oval.png";
import Clock from "../assets/icones/Clock.png";
import PaperPen from "../assets/icones/PaperPen.png";
import { connect } from "react-redux";
import { addDescription, addDate } from "../actions/index";
import Modal from "./Modal";
import "react-datepicker/dist/react-datepicker.css";

class ConnectedMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      startDateFromModal: null,
      show: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // function pour récupérer la date que l'on chope dans la modal

  getDatefromChild = startdate => {
    this.setState({
      startDateFromModal: startdate,
      show: false
    });

    this.props.addDate({ startdate });
  };

  // functions "show" pour dévoiler la modal au click
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // Dans description, on va récupérer "l'event" puis le mettre dans le state
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  // Le state a changé grâce à handleChange, ici le handleSubmit va l'envoyer en props à l'action addDescription
  handleSubmit(event) {
    event.preventDefault();
    const { description } = this.state;
    this.props.addDescription({ description });
    this.setState({ description: "" });
  }

  render() {
    const { description } = this.state;
    const { idActive, items } = this.props;

    return (
      <div className="six">
        <button className="mainbutton">
          <img src={Oval} alt="ovalicon" className="icon_oval" />
          <div className="position_of_plus">+</div>
          <p className="position_of_button_name">Attribuer à</p>
        </button>

        {/* 
          on a récup les props du reducer dans le render, maintenant on va mettre une ternaire qui dit:
          si j'ai pas de tâche sélectionner, j'affiche rien, sinon j'affiche la tâche sélectionnée
        */}

        {idActive !== null &&
        idActive !== undefined &&
        items.length !== 0 &&
        items[idActive].startdate !== undefined ? (
          <button className="mainbutton" onClick={this.showModal}>
            <img src={Oval} alt="ovalicon" className="icon_oval" />
            <div className="position_of_clock">
              <img src={Clock} alt="clockicon" className="icon_clock" />
            </div>
            <p className="position_of_date">{items[idActive].startdate}</p>
          </button>
        ) : (
          <button className="mainbutton" onClick={this.showModal}>
            <img src={Oval} alt="ovalicon" className="icon_oval" />
            <div className="position_of_clock">
              <img src={Clock} alt="clockicon" className="icon_clock" />
            </div>
            <p className="position_of_button_name">Echéance</p>
          </button>
        )}
        {/*
           elle est pas belle ma ternaire ?
           La modal est placée en dessous, mais la position importe peu, car on ne l'affiche que selon le state de "show"
        */}
        <Modal
          show={this.state.show}
          callbackFromParent={this.getDatefromChild}
        />
        <div className="description_rectangle">
          <div className="description_top_title">
            <img src={PaperPen} alt="paperpenicon" className="icon_paper_pen" />
            <p className="description_title">Description</p>
          </div>
          {/*
            Ici via un formulaire, on va pouvoir mettre à jour notre reducer au handleSubmit
            Pour la beauté du geste, j'ai mis une ternaire dans le placeholder histoire qu'on puisse afficher notre donnée qu'on vient de mettre dans notre reducer
          */}
          <form
            onSubmit={this.handleSubmit}
            className="input_description_inner"
          >
            <div className="input_description">
              <textarea
                type="text"
                className="descriptionform"
                id="description"
                value={description}
                onChange={this.handleChange}
                placeholder={
                  idActive !== null &&
                  idActive !== undefined &&
                  items.length !== 0 &&
                  items[idActive].description !== undefined
                    ? items[idActive].description
                    : "Ajouter une description"
                }
              />
            </div>
          </form>
          {/*
            On oublie pas de mettre un bouton handleSubmit au onClick pour commenter,
            le formulaire ayant était fait en textarea, on ne peut pas submit en appuyant sur entrée après avoir tapé son commentaire,
            vous pouvez changer cela si vous le souhaitez
          */}
          <div className="description_button_end">
            <button className="comment_button" onClick={this.handleSubmit}>
              <p className="commenter">Commenter</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// mstp pour récupérer les props de notre reducer
const mapStateToProps = state => {
  return { idActive: state.task.idActive, items: state.task.items };
};

// mdtp pour envoyer notre description & notre startdate
const mapDispatchToProps = dispatch => {
  return {
    addDescription: description => dispatch(addDescription(description)),
    addDate: startdate => dispatch(addDate(startdate))
  };
};

// on oublie pas de connect(nos mstp & mdtp à notre redux)
const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMain);

export default Main;
