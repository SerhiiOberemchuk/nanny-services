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
      state.favoritesNannies = payload.favoritesNannies || [];
    },
    setSortOption: (state, { payload }) => {
      state.sortOption = payload;
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
      })
      .addCase(userSignUp.rejected, handleRejected)
      .addCase(userLogIn.pending, handlePending)
      .addCase(userLogIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userId = payload.userId;
        state.userName = payload.name;
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
      .addCase(updateFavorit.pending, (state) => {
        state.loadingFavorites = true;
      })
      .addCase(updateFavorit.fulfilled, (state) => {
        state.loadingFavorites = false;
      })
      .addCase(updateFavorit.rejected, (state) => {
        state.loadingFavorites = false;
      })
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
}

function handleRejected(state, action) {
  state.loading = false;
  state.userId = "";
  state.userName = "";
}

export const {
  openModalLoginRegistration,
  closeModalLoginRegistration,
  setTypeOfModalLoginRegistration,
  updateFavoritesState,
  cleanFavorites,
  setUserData,
  setSortOption,
} = usersSlice.actions;

export default usersSlice.reducer;
