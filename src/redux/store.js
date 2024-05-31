import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import nanniesSlice from "./nannies/nanniesSlice";

const rootRedusers = combineReducers({
  users: usersSlice,
  nannies: nanniesSlice,
});

export const store = configureStore({
  reducer: rootRedusers,
});
