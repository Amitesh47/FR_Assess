import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { currentTabReducer } from "./currentTab";

const rootReducer = combineReducers({
  searchResults: searchReducer,
  currentState: currentTabReducer,
});

export default rootReducer;
