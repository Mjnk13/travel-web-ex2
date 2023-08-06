import { combineReducers } from "@reduxjs/toolkit";
import { tripReducer } from "./tripSlice";

export const rootReducer = combineReducers({
  trip: tripReducer,
});