import React from "react";
import Link from "next/link";

import styles from "./Button.module.scss";

interface ButtonProps {
  btnHandler?: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
  buttonPath: string;
  buttonType?: "submit" | "reset" | "button";
}

const Button = ({
  btnHandler,
  buttonText,
  buttonPath,
  buttonType,
}: ButtonProps) => {
  return (
    <Link href={buttonPath}>
      <button className={styles.btn} type={buttonType} onClick={btnHandler}>
        {buttonText}
      </button>
    </Link>
  );
};

export default Button;
