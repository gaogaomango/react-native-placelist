import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    const placeData = {
      name: placeName,
      location: location
    };
    fetch("https://reactnativeplaceshareapp.firebaseio.com/places.json", {
      method: "POST",
      body: JSON.stringify(placeData)
    })
      .catch(err => console.elog(err))
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
      });
  };
  // {
  //   type: ADD_PLACE,
  //   payload: {
  //     placeName: placeName,
  //     location: location,
  //     image: image
  //   }
  // };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};
