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
        state.userId = "";
        state.userName = "";
        state.userEmail = "";
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userId = action.payload.userId;
        state.userName = action.payload.name;
        state.userEmail = action.payload.email;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.userId = "";
        state.userName = "";
        state.userEmail = "";
      })
      .addCase(userLogIn.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.userId = "";
        state.userName = "";
        state.userEmail = "";
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userId = action.payload.userId;
        state.userName = action.payload.name;
        state.userEmail = action.payload.email;
      })
      .addCase(userLogIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.userId = "";
        state.userName = "";
        state.userEmail = "";
      })
      .addCase(userSignOut.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userSignOut.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.userId = "";
        state.userName = "";
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
