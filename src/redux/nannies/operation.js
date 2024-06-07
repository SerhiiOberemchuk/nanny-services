import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { dbFirestore } from "../../Api/firebaseConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// get data from firestore colection 'users'
export const getNannies = createAsyncThunk(
  "get/nannies",
  async (data, thunkAPI) => {
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

export const addFavorit = createAsyncThunk(
  "add/favorit",
  async (data, thunkAPI) => {
    try {
      const userRef = doc(dbFirestore, "users", data.userId);
      const favoritesRef = collection(userRef, "favorites");
      const resp = await setDoc(doc(favoritesRef, data.nanny.id), data.nanny);
      const docRef = await addDoc(
        collection(dbFirestore, "favoritesNanies"),
        data
      );
      console.log(docRef.data);
    } catch (error) {
      toast.warn(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dellFavorit = createAsyncThunk(
  "dell/favorit",
  async (id, thunkAPI) => {
    try {
      const docRef = await deleteDoc(doc(dbFirestore, "favoritesNanies", id));
      console.log(docRef);
    } catch (error) {
      toast.warn(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavorites = createAsyncThunk(
  "get/favorites",
  async (id, thunkAPI) => {
    try {
      const docRef = doc(dbFirestore, "users", id);
      const docSnap = await getDoc(docRef);
      const favorites = docSnap.data;
      // const responseData = response.docs.map((docs) => ({
      //   ...docs.data(),
      //   id: docs.id,
      // }));

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      return;
    } catch (err) {
      toast.warn(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
