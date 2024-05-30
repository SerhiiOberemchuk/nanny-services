import { collection, getDocs } from "firebase/firestore";
import { bdFirestore } from "../../Api/firebaseConfig";
// get data from firestore colection 'users'
const getAllUsers = async () => {
  try {
    const data = await getDocs(collection(bdFirestore, "users"));
    const basedata = data.docs.map((docs) => ({
      ...docs.data(),
    }));
    console.log(basedata);
    return data;
  } catch (err) {
    console.log(err);
  }
};
