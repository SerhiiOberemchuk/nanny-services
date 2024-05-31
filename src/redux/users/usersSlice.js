import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { userLogIn, userSignOut, userSignUp } from "./operation";

const usersSlice = createSlice({
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
    builder
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(userLogIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(userLogIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(userSignOut.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userSignOut.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
      })
      .addCase(userSignOut.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {
  openModalLoginRegistration,
  closeModalLoginRegistration,
  setTypeOfModalLoginRegistration,
} = usersSlice.actions;

export default usersSlice.reducer;
