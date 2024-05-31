import { useDispatch, useSelector } from "react-redux";
import style from "./NanniesList.module.css";
import { selectorNanniesArrey } from "../../redux/nannies/selectors";
import { useEffect } from "react";
import { getNannies } from "../../redux/nannies/operation";
import FilterSelector from "./FilterSelector/FilterSelector";

function NanniesList() {
  const arrey = useSelector(selectorNanniesArrey);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNannies());
  }, [dispatch]);
  return (
    <>
      <FilterSelector />
      <ul className={style.list}>
        {arrey.map((nanny) => (
          <li key={nanny.id}>
            <h2>{nanny.name}</h2>
            <span>{nanny.id}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NanniesList;
