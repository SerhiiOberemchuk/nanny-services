import { collection, getDocs } from "firebase/firestore";
import { bdFirestore } from "../../Api/firebaseConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// get data from firestore colection 'users'
export const getNannies = createAsyncThunk(
  "get/nannies",
  async (data, thunkAPI) => {
    try {
      const response = await getDocs(collection(bdFirestore, "nannies"));
      const responseData = response.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));
      console.log(responseData);
      console.log(response.docs);
      return responseData;
    } catch (err) {
      toast.warn(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
