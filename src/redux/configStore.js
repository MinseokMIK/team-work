import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./modules/Users";
import { composeWithDevTools } from "redux-devtools-extension";
import Diary_note from "./modules/Diary_notes";

//combineReducers reduser 추가

const rootReducer = combineReducers({ userReducer, Diary_note });
const store = configureStore(
  { reducer: rootReducer },

  composeWithDevTools(applyMiddleware())
);

export default store;