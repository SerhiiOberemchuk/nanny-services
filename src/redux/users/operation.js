import { createAsyncThunk } from "@reduxjs/toolkit";
import { instansApi } from "../../Api/api";

export const userSignIn = createAsyncThunk("users", async (user, thunkAPI) => {
  try {
    const data = await instansApi.post("/users/signup", {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userLogIn = createAsyncThunk(
  "users",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await instansApi.get("/users/login", { email, password });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
