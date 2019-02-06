import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

import firebase from "../../../firebase";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    const placeData = {
      name: placeName,
      location: location
    };

    const UUID = require("uuid-v4");
    const uuid = UUID();
    const storageRef = firebase.storage().ref("places");

    storageRef
      .child(uuid + ".jpg")
      .putString(image.base64, "base64", {
        contentType: "image/jpeg"
      })
      .then(snapshot => {
        if (snapshot.state == "success") {
          storageRef
            .child(uuid + ".jpg")
            .getDownloadURL()
            .then(url => {
              console.log("getDownloadURL(): " + url);
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
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
