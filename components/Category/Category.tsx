import React, { useEffect } from "react";
import Select from "react-select";
import styles from "./Category.module.scss";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { selectedCategory } from "atoms/atom";

// options to select in creating mode
const options = [
  { value: "english", label: "english" },
  { value: "react", label: "react" },
  { value: "add new...", label: "add new..." },
];

interface SelectOptionType {
  value: string;
  label: string;
}

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    border: "none",
    borderRadius: "10px",
    color: "rgb(255, 255, 255)",
    background: "rgb(240, 3, 43)",
    boxShadow: "3px 3px 10px 3px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    padding: "0 20px",
    fontSize: "18px",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    height: "60px",
  }),
  input: (provided: any) => ({
    ...provided,
    margin: "0px",
    // background: 'blue'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    height: "60px",
    textAlign: "center",
  }),

  placeholder: (defaultStyles: any) => ({
    ...defaultStyles,
    fontWeight: 700,
    color: "rgb(255, 255, 255)",
    margin: "auto",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
    fontWeight: 700,
  }),
  dropdownIndicator: () => ({
    color: "white",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  arrow: () => ({
    color: "white",
  }),
  menu: () => ({
    background: "rgb(255, 255, 255)",
    borderRadius: "10px",
    position: "absolute" as "absolute",
    width: "100%",
  }),
  option: (styles: any, { isFocused }: any) => ({
    ...styles,
    background: "none",
    color: isFocused ? "rgb(240, 3, 43)" : "rgb(0, 0, 0)",
    cursor: "pointer",
    fontWeight: 500,
  }),
};

const Category = ({ newCategory, setOptions }: any) => {
  const router = useRouter();
  const [category, setCategory] = useRecoilState<any>(selectedCategory);

  const getOptions = () => {
    if (options.length == 0) {
      setOptions([
        {
          value: "add new...",
          label: "add new...",
        },
      ]);
    }

    if (options.length > 0) {
      setOptions(options);
    }

    //adds add new... category every time on the last position in options
    if (options.length > 0 && router.pathname === "/create") {
      setOptions([
        ...options,
        {
          value: "add new...",
          label: "add new...",
        },
      ]);
    }
    if (
      newCategory &&
      options.filter((option) => option.value === newCategory).length === 0
    ) {
      setOptions([
        ...options,
        {
          value: newCategory,
          label: newCategory,
        },
      ]);
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  const handleChange = (option: SelectOptionType | null) => {
    if (option) {
      setCategory(option.value);
    }
  };

  return (
    <Select
      value={category.value}
      options={options}
      styles={colourStyles}
      onChange={handleChange}
      // isClearable
    />
  );
};

export default Category;
