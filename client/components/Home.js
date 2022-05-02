import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { connect } from "react-redux";
import { ParamsForm } from "./ParamsForm";

const containerStyle = {
  width: "400px",
  height: "400px",
};

/**
 * COMPONENT
 */

export const Home = (props) => {
  console.log("home props", props);

  const { username } = props;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAJwdlYIwXuXlEJGOQUpYqrNg8Er_tMBD8",
  });

  const center = {
    lat: props.coords.lat,
    lng: props.coords.lng,
  };

  const [map, setMap] = React.useState(null);

  // initMap
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      <ParamsForm />
    </div>
  ) : (
    <></>
  );
};

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    coords: state.route.coords,
  };
};

export default connect(mapStateToProps)(Home);
