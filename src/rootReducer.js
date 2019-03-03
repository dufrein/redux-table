import { combineReducers } from "redux";
import { baseReducer } from "./reducers/base";
import { searchValueReducer } from "./reducers/search";

export const rootReducer = combineReducers({
  base: baseReducer,
  search: searchValueReducer
});
