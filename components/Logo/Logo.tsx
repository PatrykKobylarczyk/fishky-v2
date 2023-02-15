import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ option, isFlipped }: any) => {
  
  let sufix = "";
  let sufixColor = "";

  if (option === "english") {
    sufix = "en";
    sufixColor = "rgb(3, 58, 240)";
  }
  if (option === "react") {
    sufix = "re";
    sufixColor = "rgb(0, 236, 225)";
  } else {
    sufix = "ky";
    sufixColor = 'var(--primary-color)';
  }

  return (
    <div className={`${styles.logo} ${styles[isFlipped ? "flipped" : '']}`}>
      <h3>
        fish<span style={{ color: `${sufixColor}` }}>{sufix}</span>
      </h3>
    </div>
  );
};

export default Logo;
