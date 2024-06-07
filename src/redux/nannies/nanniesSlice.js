import { createSlice } from "@reduxjs/toolkit";
import { initialStateNannies } from "./initialState";
import { addFavorit, dellFavorit, getNannies } from "./operation";

export const nanniesSlice = createSlice({
  name: "nannies",
  initialState: initialStateNannies,
  reducers: {
    addDellFavorites: (state, { payload }) => {
      state.favoritesNannies.some((item) => item.id === payload.id)
        ? (state.favoritesNannies = state.favoritesNannies.filter(
            (item) => item.id !== payload.id
          ))
        : state.favoritesNannies.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNannies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNannies.fulfilled, (state, action) => {
        state.loading = false;
        const newNannies = action.payload.filter(
          (item) =>
            !state.nanniesArray.some(
              (existingItem) => existingItem.id === item.id
            )
        );
        state.nanniesArray = [...state.nanniesArray, ...newNannies];
      })
      .addCase(getNannies.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addFavorit.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addFavorit.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addFavorit.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(dellFavorit.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(dellFavorit.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(dellFavorit.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { addDellFavorites } = nanniesSlice.actions;

export default nanniesSlice.reducer;
