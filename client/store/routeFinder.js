import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// action creators
export const setPin = (coords) => {
  return {
    type: "SET_PIN",
    coords,
  };
};

export const setRoute = (params) => {
  return {
    type: "SET_ROUTE",
    params,
  };
};

// Thunks

export const setPinThunk = (address) => {
  return async function (dispatch) {
    try {
      let autocomplete = new google.maps.places.Autocomplete(address);
      let place = autocomplete.getPlace();
      dispatch(
        setPin({
          lat: place.geometry["location"].lat(),
          lng: place.geometry["location"].lng(),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export default function routesReducer(state, action) {
  switch (action.type) {
    case "SET_PIN":
      console.log(action.coords);
      return action.coords;
  }
}
