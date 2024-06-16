import { useDispatch, useSelector } from "react-redux";
import FilterSelector from "./FilterSelector/FilterSelector";
import ListSection from "./ListSection/ListSection";
import { useEffect } from "react";
import {
  selectorNanniesArrey,
  selectorSortOption,
} from "../../redux/users/selectors";
import { getNannies } from "../../redux/users/operation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { dbFirestore } from "../../Api/firebaseConfig";
import { setUserData } from "../../redux/users/usersSlice";
import { sortFunctions } from "./FilterSelector/filterOption";

function NanniesList() {
  const nanniesCatalog = useSelector(selectorNanniesArrey);
  const sortOptions = useSelector(selectorSortOption);
  const dispatch = useDispatch();
  useEffect(() => {
    if (nanniesCatalog.length === 0) {
      dispatch(getNannies());
    }
  }, [dispatch, nanniesCatalog.length]);

  onAuthStateChanged(getAuth(), async (user) => {
    if (user) {
      const docRef = doc(dbFirestore, "users", user.uid);
      const docSnap = await getDoc(docRef);
      dispatch(
        setUserData({
          userId: user.uid,
          userName: user.displayName,
          userEmail: user.email,
          favoritesNannies: docSnap.data()?.favoritesNannies || [],
        })
      );
    }
  });

  const arrayToRender = sortOptions
    ? sortFunctions[sortOptions](nanniesCatalog)
    : nanniesCatalog;

  return (
    <>
      <FilterSelector />
      <ListSection nanniesCatalog={arrayToRender} />
    </>
  );
}

export default NanniesList;
