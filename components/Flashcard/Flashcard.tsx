import React, { useState } from "react";
import Logo from "components/Logo/Logo";
import styles from "./Flashcard.module.scss";

const Flashcard = ({children, type}:any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  console.log(isFlipped)
  return (
    <div
      className={`${styles.card} ${type === 'learn' && styles[isFlipped ? "flipped" : '']}`}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <Logo isFlipped={isFlipped}/>
      {children}
    </div>
  );
};

export default Flashcard;
