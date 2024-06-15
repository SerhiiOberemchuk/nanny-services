import { createSlice } from "@reduxjs/toolkit";
import {
  getNannies,
  updateFavorit,
  userLogIn,
  userSignOut,
  userSignUp,
} from "./operation";
import { initialState } from "../initialState";

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateFavoritesState: (state, { payload }) => {
      state.favoritesNannies = payload;
    },
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
    cleanFavorites: (state) => {
      state.favoritesNannies = [];
    },
    setUserData: (state, { payload }) => {
      state.isLoggedIn = true;
      state.userId = payload.userId;
      state.userName = payload.name;
      state.userEmail = payload.email;
      state.favoritesNannies = payload.favoritesNannies || [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, handlePending)
      .addCase(userSignUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userId = payload.userId;
        state.userName = payload.name;
        state.userEmail = payload.email;
      })
      .addCase(userSignUp.rejected, handleRejected)
      .addCase(userLogIn.pending, handlePending)
      .addCase(userLogIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userId = payload.userId;
        state.userName = payload.name;
        state.userEmail = payload.email;
        state.favoritesNannies = payload.favoritesNannies || [];
      })
      .addCase(userLogIn.rejected, handleRejected)
      .addCase(userSignOut.pending, handlePending)
      .addCase(userSignOut.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.userId = "";
        state.userName = "";
      })
      .addCase(userSignOut.rejected, handleRejected)
      .addCase(updateFavorit.pending, handlePending)
      .addCase(updateFavorit.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateFavorit.rejected, handleRejected)
      .addCase(getNannies.pending, handlePending)
      .addCase(getNannies.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.nanniesArray = [
          ...state.nanniesArray,
          ...payload.filter(
            (item) =>
              !state.nanniesArray.some(
                (existingItem) => existingItem.id === item.id
              )
          ),
        ];
      })
      .addCase(getNannies.rejected, handleRejected);
  },
});

function handlePending(state) {
  state.loading = true;
  state.error = null;
}

function handleRejected(state, action) {
  state.loading = false;
  state.error = action.error.message;
  state.userId = "";
  state.userName = "";
  state.userEmail = "";
  state.accessToken = null;
  state.refreshToken = null;
}

export const {
  openModalLoginRegistration,
  closeModalLoginRegistration,
  setTypeOfModalLoginRegistration,
  updateFavoritesState,
  cleanFavorites,
  setUserData,
} = usersSlice.actions;

export default usersSlice.reducer;
