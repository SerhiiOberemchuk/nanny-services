import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { userSignUp } from "./operation";

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
  extraReducers: (builder) => {
    builder.addCase(userSignUp.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(userSignUp.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {
  openModalLoginRegistration,
  closeModalLoginRegistration,
  setTypeOfModalLoginRegistration,
} = usersSlice.actions;

export default usersSlice.reducer;
