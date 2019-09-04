import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addItem({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="input">
        <div className="leftpanel">
          <input
            type="text"
            className="form"
            id="title"
            value={title}
            onChange={this.handleChange}
            placeholder="+ Ajouter une tache..."
          />
        </div>
      </form>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
