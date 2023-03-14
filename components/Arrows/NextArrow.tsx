import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import styles from './Arrows.module.scss'
const NextArrow = ({ handleChangeCard }: any) => {
  return (
    <button
      className={styles.arrow}
      onClick={() => handleChangeCard('next')}
    >
      <MdOutlineArrowForwardIos size={'20px'}/>
    </button>
  );
};

export default NextArrow;
