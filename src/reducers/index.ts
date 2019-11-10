import { combineReducers } from "redux";

import counterReducer from "./counter";
import nameReducer from "./name";

const rootReducers = combineReducers({
  counter: counterReducer,
  name: nameReducer
});

export default rootReducers;
