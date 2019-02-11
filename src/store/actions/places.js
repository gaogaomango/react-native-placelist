import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";
import firebase from "../../../firebase";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    dispatch(uiStartLoading);
    const UUID = require("uuid-v4");
    const uuid = UUID();
    const storageRef = firebase.storage().ref("places");
    const databasePlaceRef = firebase.database().ref("places");

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
              const placeData = {
                name: placeName,
                location: location,
                image: url
              };

              databasePlaceRef
                .push()
                .set(placeData)
                .then(parsedRes => {
                  console.log(parsedRes);
                  dispatch(uiStopLoading);
                })
                .catch(err => {
                  console.error(err);
                  dispatch(uiStopLoading);
                });
            })
            .catch(err => {
              console.log(err);
              dispatch(uiStopLoading);
            });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(uiStopLoading);
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
