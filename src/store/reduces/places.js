import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.payload.placeName,
          image: {
            uri:
              "https://nangokuman.com/wp-content/uploads/2018/11/cropped-nangokuman-logo-small-1-1.png"
          },
          location: action.payload.location
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };

    default:
      return state;
  }
};

export default reducer;
