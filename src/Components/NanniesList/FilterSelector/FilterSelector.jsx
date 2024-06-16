import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import style from "./FilterSelector.module.css";
import { useDispatch } from "react-redux";
import { setSortOption } from "../../../redux/users/usersSlice";
import { styles } from "./styles";
import { options } from "./filterOption";

function FilterSelector() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSortOption(selectedOption.value));
  }, [selectedOption, dispatch]);

  return (
    <div className={style.selector}>
      <h3 className={style.title}>Filters</h3>
      <ReactSelect
        styles={styles}
        defaultValue={options[0]}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default FilterSelector;
