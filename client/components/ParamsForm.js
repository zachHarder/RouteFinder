import React from "react";
import { connect } from "react-redux";

export class ParamsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      origin: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.clear();
  }
  render() {
    return (
      <form onSubmit={this.handleMakeSubmit}>
        <label>
          Origin:
          <input
            value={this.state.origin}
            name="origin"
            placeholder="type here"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
