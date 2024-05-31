import { createSlice } from "@reduxjs/toolkit";
import { initialStateNannies } from "./initialState";
import { getNannies } from "./operation";

export const nanniesSlice = createSlice({
  name: "nannies",
  initialState: initialStateNannies,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNannies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNannies.fulfilled, (state, action) => {
        state.loading = false;
        state.nanniesArray = [...state.favoritesNannies, ...action.payload];
      })
      .addCase(getNannies.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { fgff } = nanniesSlice.actions;

export default nanniesSlice.reducer;
