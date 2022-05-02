import React from "react";
import { setPinThunk } from "../store/routeFinder";
import { connect } from "react-redux";

export class ParamsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      origin: "",
      miles: 0,
      coords: {
        lat: -3.745,
        lng: -38.523,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchPin(this.state.coords);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Lat:
          <input
            value={this.state.coords.lat}
            name="coords"
            placeholder="type here"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Long:
          <input
            value={this.state.coords.lng}
            name="coords"
            placeholder="type here"
            onChange={this.handleChange}
          />
        </label>
        {/* <label>
          Miles:
          <input
            value={this.state.miles}
            name="miles"
            placeholder="type here"
            onChange={this.handleChange}
          />
        </label> */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRoute: () => dispatch(setRoute()),
  fetchPin: (coords) => dispatch(setPin(coords)),
});

export default connect(null, mapDispatchToProps)(ParamsForm);
