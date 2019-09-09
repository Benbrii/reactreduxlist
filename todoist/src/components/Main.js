import React, { Component } from "react";
import Oval from "../assets/icones/Oval.png";
import Clock from "../assets/icones/Clock.png";
import PaperPen from "../assets/icones/PaperPen.png";
import { connect } from "react-redux";
import { addDescription } from "../actions/index";

class ConnectedMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

function mapDispatchToProps(dispatch) {
  return {
    addDescription: description => dispatch(addDescription(description))
  };
}

const Main = connect(
  null,
  mapDispatchToProps
)(ConnectedMain);

export default Main;
