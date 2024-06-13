import { createSlice } from "@reduxjs/toolkit";
import { initialStateNannies } from "./initialState";
import { getFavorites, getNannies, updateFavorit } from "./operation";

export const nanniesSlice = createSlice({
  name: "nannies",
  initialState: initialStateNannies,
  reducers: {
    addDellFavorites: (state, { payload }) => {
      state.favoritesNannies.some((item) => item.id === payload.nanny.id)
        ? (state.favoritesNannies = state.favoritesNannies.filter(
            (item) => item.id !== payload.nanny.id
          ))
        : state.favoritesNannies.push(payload.nanny);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNannies.pending, (state, action) => {
        state.loading = true;
      })
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
      .addCase(getNannies.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateFavorit.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateFavorit.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateFavorit.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getFavorites.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { addDellFavorites } = nanniesSlice.actions;

export default nanniesSlice.reducer;
