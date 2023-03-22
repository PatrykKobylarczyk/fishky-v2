import React from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { categoryError, selectedCategory } from "atoms/atom";

const Logo = ({ option, isFlipped }: any) => {
  const [category] = useRecoilState<string>(selectedCategory);

  let sufix = "";
  let sufixColor = "";

  if (category === "english") {
    sufix = "en";
    sufixColor = "rgb(3, 58, 240)";
  }
  if (category === "react") {
    sufix = "re";
    sufixColor = "rgb(0, 236, 225)";
  } else {
    sufix = "ky";
    sufixColor = 'var(--primary-color)';
  }

  return (
    <div className={`${styles.logo} ${styles[isFlipped ? "flipped" : '']}`}>
     <Link href='/'>
        fish<span style={{ color: `${sufixColor}` }}>{sufix}</span>
      </Link>
    </div>
  );
};

export default Logo;
