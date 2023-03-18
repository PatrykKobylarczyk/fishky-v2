import React from "react";
import Logo from "components/Logo/Logo";
import styles from "./Flashcard.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { isCardFlipped } from "atoms/atom";

const cardVariants = {
  active: {
    rotateY: 180,
  },
  inactive: {
    rotateY: 0,
  },
};

const Flashcard = ({ children, type }: any) => {
  const [isFlipped, setIsFlipped] = useRecoilState(isCardFlipped);

  return (
    <AnimatePresence>
      {}
      <motion.div
        className={`${styles.card} ${
          type === "learn" && styles[isFlipped ? "flipped" : ""]
        }`}
        onClick={() => type === "learn" && setIsFlipped((prev) => !prev)}
        animate={isFlipped ? "active" : "inactive"}
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        <Logo isFlipped={isFlipped} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Flashcard;
