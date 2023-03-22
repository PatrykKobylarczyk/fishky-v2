import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import styles from "./Arrows.module.scss";

interface Props {
  handleChangeCard: (arg : string) => void;
};

const PrevArrow = ({ handleChangeCard }: Props) => {
  return (
    <button
      className={styles.arrow}
      onClick={() =>  handleChangeCard('prev')}
    >
      <MdOutlineArrowBackIos size={'20px'}/>
    </button>
  );
};

export default PrevArrow;
