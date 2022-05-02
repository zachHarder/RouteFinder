import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { connect } from "react-redux";
// import { ParamsForm } from "./ParamsForm";
import { MyMapComponent } from "./Map";

/**
 * COMPONENT
 */
class Home extends React.PureComponent {
  state = {
    isMarkerShown: false,
    position: { lat: 44.9778, lng: -93.265 },
  };

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
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        // onMarkerChange={this.handleMarkerChange}
      />
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
