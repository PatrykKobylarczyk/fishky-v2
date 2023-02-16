import React from "react";
import Select from "react-select";

import styles from "./Category.module.scss";

const options = [
  { value: "english", label: "english" },
  { value: "react", label: "react" },
  { value: "add new...", label: "add new..." },
];

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

const Category = ({ selectedCategory, setSelectedCategory }: any) => {
  console.log(options);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedCategory(event.currentTarget.value);
  };

  return (
    <div className={styles.select}>
      <Select
        value={selectedCategory}
        options={options}
        styles={colourStyles}
        onChange={handleChange}
        placeholder={selectedCategory}
      />
    </div>
  );
};

export default Category;
