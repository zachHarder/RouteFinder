import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { connect } from "react-redux";
// import { ParamsForm } from "./ParamsForm";
import { MapWithADirectionsRenderer } from "./Map";

/**
 * COMPONENT
 */
export function Home(props) {
  return (
    <div>
      <MapWithADirectionsRenderer />
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
