import React, { Component } from "react";
import Oval from "../assets/icones/Oval.png";
import Clock from "../assets/icones/Clock.png";
import PaperPen from "../assets/icones/PaperPen.png";
import { connect } from "react-redux";
import { addDescription } from "../actions/index";
import Modal from "./Modal";
import "react-datepicker/dist/react-datepicker.css";

class ConnectedMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      startDate: null,
      show: false
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleDate(date) {
    this.setState({
      startDate: date
    });
    console.log(date);
  }

  handleStartDate(e) {
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { description } = this.state;
    this.props.addDescription({ description });
    this.setState({ description: "" });
    console.log(this.state.description);
  }

  render() {
    const { description } = this.state;
    const { idActive, items } = this.props;

    return (
      <div className="wrapper">
        <div className="six">
          <button className="mainbutton">
            <img src={Oval} alt="ovalicon" className="icon_oval" />
            <div className="position_of_plus">+</div>
            <p className="position_of_button_name">Attribuer à</p>
          </button>
          <button className="mainbutton" onClick={this.showModal}>
            <img src={Oval} alt="ovalicon" className="icon_oval" />
            <div className="position_of_clock">
              <img src={Clock} alt="clockicon" className="icon_clock" />
            </div>
            <p className="position_of_button_name">Echéance</p>
          </button>
          <Modal
            show={this.state.show}
            handleClose={this.hideModal}
            onClick={this.handleDate}
          />
          <div className="description_rectangle">
            <p className="description_title">
              <img
                src={PaperPen}
                alt="paperpenicon"
                className="icon_paper_pen"
              />
              Description
            </p>
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
                    idActive !== null && idActive !== undefined
                      ? items[idActive].description
                      : "Aucune description pour le moment"
                  }
                />
              </div>
            </form>
            <button className="comment_button" onClick={this.handleSubmit}>
              <p className="commenter">Commenter</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { idActive: state.task.idActive, items: state.task.items };
};

const mapDispatchToProps = dispatch => {
  return {
    addDescription: description => dispatch(addDescription(description))
  };
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMain);

export default Main;
