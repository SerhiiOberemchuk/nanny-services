import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    openModalLoginRegistration: (state) => {
      state.isModalLoginRegistration = true;
    },
    closeModalLoginRegistration: (state) => {
      state.isModalLoginRegistration = false;
      state.modalType = null;
    },
    setTypeOfModalLoginRegistration: (state, { payload }) => {
      state.modalType = payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase();
  //   },
});

export const {
  openModalLoginRegistration,
  closeModalLoginRegistration,
  setTypeOfModalLoginRegistration,
} = usersSlice.actions;

export default usersSlice.reducer;
