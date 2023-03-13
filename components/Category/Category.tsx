import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./Category.module.scss";
import { useRouter } from "next/router";

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
    width: "100%",
    height: "60px",
    border: "none",
    borderRadius: "10px",
    color: "rgb(255, 255, 255)",
    background: "rgb(240, 3, 43)",
    boxShadow: "3px 3px 10px 3px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    padding: " 0 20px",
  }),
  placeholder: (defaultStyles: any) => ({
    ...defaultStyles,
    textAlign: "center",
    fontWeight: 700,
    color: "rgb(255, 255, 255)",
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
  }),
  option: (styles: any, { isFocused }: any) => ({
    ...styles,
    background: "none",
    color: isFocused ? "rgb(240, 3, 43)" : "rgb(0, 0, 0)",
    cursor: "pointer",
    fontWeight: 500,
  }),
};

const Category = ({ category, setCategory, newCategory, setOptions }: any) => {
  const router = useRouter();
 

  const getOptions = async () => {
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
    if ( newCategory &&
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
    getOptions()
  }, []);

  const handleChange = (option: SelectOptionType | null) => {
    if (option) {
      setCategory(option.value);
    }
    if (option?.value === "add new...") {
    }
  };


  return (
    <div className={styles.select}>
      <Select
        value={category}
        options={options}
        styles={colourStyles}
        onChange={handleChange}
        placeholder={category}
        isClearable
      />
    </div>
  );
};

export default Category;
