import { useDispatch, useSelector } from "react-redux";
import FilterSelector from "./FilterSelector/FilterSelector";
import ListSection from "./ListSection/ListSection";
import { useEffect } from "react";
import { selectorNanniesArrey } from "../../redux/users/selectors";
import { getNannies } from "../../redux/users/operation";

function NanniesList() {
  const nanniesCatalog = useSelector(selectorNanniesArrey);
  const dispatch = useDispatch();
  useEffect(() => {
    if (nanniesCatalog.length === 0) {
      dispatch(getNannies());
    }
  }, [dispatch, nanniesCatalog.length]);
  return (
    <>
      <FilterSelector />
      <ListSection nanniesCatalog={nanniesCatalog} />
    </>
  );
}

export default NanniesList;
