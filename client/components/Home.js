import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { connect } from "react-redux";
// import { ParamsForm } from "./ParamsForm";
import { MyMapComponent } from "./Map";

/**
 * COMPONENT
 */
class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMarkerShown: false,
      lat: 44.9778,
      lng: -93.265,
      latnew: 43.9778,
      lngnew: -94.265,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    console.log(this.state);
    this.delayedShowMarker();
  };

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: +evt.target.value });
  }

  render() {
    return (
      <div>
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          originMarker={{ lat: this.state.lat, lng: this.state.lng }}
          destinationMarker={{ lat: this.state.latnew, lng: this.state.lng }}
        />
        <form>
          Origin
          <label>
            Lat:
            <input
              value={this.state.lat}
              type="number"
              name="lat"
              placeholder="type here"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Long:
            <input
              value={this.state.lng}
              type="number"
              name="lng"
              placeholder="type here"
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div>
          <form onSubmit={this.handleSubmit}>
            Destination
            <label>
              Lat:
              <input
                value={this.state.latnew}
                type="number"
                name="latnew"
                placeholder="type here"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Long:
              <input
                value={this.state.lngnew}
                type="number"
                name="lngnew"
                placeholder="type here"
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
