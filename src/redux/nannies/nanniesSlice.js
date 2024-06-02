import { createSlice } from "@reduxjs/toolkit";
import { initialStateNannies } from "./initialState";
import { getNannies } from "./operation";

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
      });
  },
});

export const { addDellFavorites } = nanniesSlice.actions;

export default nanniesSlice.reducer;
