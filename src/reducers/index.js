import { combineReducers } from "redux";
import CovidReducer from "./CovidReducer";

export default combineReducers({
  covid: CovidReducer,
});
