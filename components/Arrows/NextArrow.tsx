import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import styles from "./Arrows.module.scss";

interface Props {
  handleChangeCard: (arg : string) => void;
};

const NextArrow = ({ handleChangeCard }: Props) => {
  return (
    <button className={styles.arrow} onClick={() => handleChangeCard("next")}>
      <MdOutlineArrowForwardIos size={"20px"} />
    </button>
  );
};

export default NextArrow;
