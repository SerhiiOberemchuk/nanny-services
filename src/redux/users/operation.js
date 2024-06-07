import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, dbFirestore } from "../../Api/firebaseConfig";
import { Bounce, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

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
      await setDoc(doc(dbFirestore, "users", user.uid), {
        email: user.email,
        name,
      });

      return { email: user.email, name, userId: user.uid };
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
      const response = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = response.user;
      return { name: user.displayName, userId: user.uid, email: user.email };
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
