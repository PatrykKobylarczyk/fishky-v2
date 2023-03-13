import React, { useState } from "react";
import Logo from "components/Logo/Logo";
import styles from "./Flashcard.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const cardVariants = {
  clicked: {
    rotateY: 180,
    transition: { duration: .35 },
    children: {backfaceVisibility: 'hidden'}
  },
  notClicked: {
    rotateY:0,
    transition: { duration: .35 },
    children: {backfaceVisibility: 'hidden'}   
  }
}

const Flashcard = ({ children, type }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.card}
        onClick={() => type === "learn" && setIsFlipped((prev) => !prev)}
        // animate={isFlipped ? cardVariants.clicked : cardVariants.notClicked}
      >
        <Logo isFlipped={isFlipped} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Flashcard;
