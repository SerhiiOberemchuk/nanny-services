import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, bdFirestore } from "../../Api/firebaseConfig";
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
      console.log(user);

      await setDoc(doc(bdFirestore, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name,
      });

      return { email: user.email, name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  "user/logIn",
  async (user, thunkAPI) => {
    try {
      const currentUser = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      return { name: currentUser.name, email: currentUser.email };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
