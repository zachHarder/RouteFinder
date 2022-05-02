import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAJwdlYIwXuXlEJGOQUpYqrNg8Er_tMBD8",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 44.9778, lng: -93.265 }}>
    {props.isMarkerShown && (
      <Marker position={props.originMarker} onClick={props.onMarkerClick} />
    )}
    {props.isMarkerShown && (
      <Marker
        position={props.destinationMarker}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));
