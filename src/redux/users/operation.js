import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Api/firebaseConfig";
import { Bounce, toast } from "react-toastify";

export const userSignUp = createAsyncThunk(
  "user/signUp",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = response.user;
      await updateProfile(user, { displayName: name });

      return { email: user.email, name };
    } catch (error) {
      toast.warn(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  "user/logIn",
  async (userData, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
      return;
    } catch (error) {
      toast.warn(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userSignOut = createAsyncThunk(
  "user/signOut",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return;
    } catch (error) {
      toast.warn(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
