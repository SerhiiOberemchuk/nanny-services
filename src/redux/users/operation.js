import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, dbFirestore } from "../../Api/firebaseConfig";
import { Bounce, toast } from "react-toastify";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

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

      return {
        email: user.email,
        name,
        userId: user.uid,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
      };
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
      const docRef = doc(dbFirestore, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(user.stsTokenManager);
      return {
        name: user.displayName,
        userId: user.uid,
        email: user.email,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
        favoritesNannies: docSnap.data()?.favoritesNannies || [],
      };
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

export const getNannies = createAsyncThunk(
  "get/nannies",
  async (_, thunkAPI) => {
    try {
      const response = await getDocs(collection(dbFirestore, "nannies"));
      const responseData = response.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));

      return responseData;
    } catch (err) {
      toast.warn(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateFavorit = createAsyncThunk(
  "update/favorit",
  async (data, thunkAPI) => {
    try {
      if (!data.userId) {
        return;
      }

      await setDoc(doc(dbFirestore, "users", data.userId), {
        favoritesNannies: data.favoritesArray,
      });
    } catch (error) {
      toast.warn(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
