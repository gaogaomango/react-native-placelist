import { createStore, combineReducers } from "redux";
import places from "./reduces/places";

const rootReducer = combinewReducers({
  places: places
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
