import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";

const rootRedusers = combineReducers({ users: usersSlice });

export const store = configureStore({
  reducer: rootRedusers,
});
