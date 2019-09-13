import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/index";

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
    let { title } = this.state;
    // trim pour éviter d'ajouter une tâche composé d'espace vide
    title = title.trim("");
    // + condition pour éviter d'ajouter une tâche vide
    if (title.length === 0) {
      alert("Une tâche ne peut pas être vide.");
    } else {
      this.props.addItem({ title });
    }
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;

    return (
      <form className="task_input" onSubmit={this.handleSubmit}>
        <input
          className="input_of_task"
          type="text"
          id="title"
          value={title}
          onChange={this.handleChange}
          placeholder="+ Ajouter une tâche..."
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item))
  };
}

// ne pas oublier le "null" avec le dispatch car on ne récupére aucune props
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
