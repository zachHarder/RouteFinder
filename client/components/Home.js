import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { connect } from "react-redux";
// import { ParamsForm } from "./ParamsForm";
import { WrappedMap } from "./Map";

/**
 * COMPONENT
 */
export function Home(props) {
  return (
    <div>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
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
