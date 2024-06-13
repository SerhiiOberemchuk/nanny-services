import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { dbFirestore } from "../../Api/firebaseConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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

export const updateFavorit = createAsyncThunk(
  "update/favorit",
  async (data, thunkAPI) => {
    try {
      if (!data.userId) {
        return;
      }

      await setDoc(doc(dbFirestore, "users", data.userId), {
        favoritesNannies: data.favorites,
      });
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

      return docSnap.data();
    } catch (err) {
      toast.warn(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
