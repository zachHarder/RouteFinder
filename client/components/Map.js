import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "@react-google-maps/api";

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: -3.745, lng: -38.523 }} />
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
