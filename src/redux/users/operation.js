import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, bdFirestore } from "../../Api/firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

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
      console.log(user);
      return { email: user.email, name };
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  "user/logIn",
  async (userData, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log(user);
      return { email: user.email, name: user.displayName };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userSignOut = createAsyncThunk(
  "user/signOut",
  async (_, thunkAPI) => {
    try {
      const userLogout = await signOut(auth);
      return userLogout;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
