import { useState } from "react";
import ReactSelect from "react-select";
import style from "./FilterSelector.module.css";
const options = [
  { value: "atoz", label: "A to Z" },
  { value: "ztoa", label: "Z to A" },
  { value: "max10", label: "Less than 10$" },
  { value: "min10", label: "Greater than 10$" },
  { value: "popular", label: "Popular" },
  { value: "notpopular", label: "Not popular" },
  { value: "all", label: "Show all" },
];

function FilterSelector() {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  return (
    <div className={style.selector}>
      <h3 className={style.title}>Filters</h3>
      <ReactSelect
        // className={style.select}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: "none",
            borderRadius: "14px",
            width: "226px",
            backgroundColor: "red",
            fontFamily: "",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: 1.1,
            color: "#fbfbfb",
          }),
          option: (provided, state) => ({
            ...provided,
            width: "226px",
            // backgroundColor: "yellow",
          }),
        }}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default FilterSelector;
