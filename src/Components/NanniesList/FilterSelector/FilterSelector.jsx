import { useEffect, useRef, useState } from "react";
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
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className={style.selector}>
      <h3 className={style.title}>Filters</h3>
      <ReactSelect
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: "none",
            borderRadius: "14px",
            width: "226px",
            backgroundColor: "#f03f3b",
            fontFamily: "Helvetica Neue",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: 1.1,
            color: "#fbfbfb",
            padding: "14px 18px",
            overflowInline: "none",
          }),
          option: (provided, state) => ({
            ...provided,
            width: "226px",
            color: state.isSelected ? "black" : "inherit",
            backgroundColor: "transparent",
          }),
          menu: (provided) => ({
            ...provided,
            fontWeight: 400,
            color: "rgba(17, 16, 28, 0.3)",
            width: 226,
            borderRadius: "14px",
            boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
            backgroundColor: "#fff",
          }),
          placeholder: (provided) => ({
            ...provided,
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: 1.1,
            color: "#fbfbfb",
          }),
          indicatorSeparator: () => ({ display: "none" }),
          dropdownIndicator: () => ({
            color: "#fbfbfb",
            right: 18,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }),
          valueContainer: (provided) => ({
            ...provided,
            padding: "0px 0px",
          }),
          input: (provided) => ({
            ...provided,
            padding: "0px 0px",
            margin: "0px 0px",
          }),
          singleValue: (provided, state) => ({
            ...provided,
            color: " #fbfbfb",
          }),
        }}
        defaultValue={options[0]}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default FilterSelector;
