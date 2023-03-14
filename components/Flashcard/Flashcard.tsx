import React, { useState } from "react";
import Logo from "components/Logo/Logo";
import styles from "./Flashcard.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const cardVariants = {
  active: {
    rotateY: 180
  },
  inactive: {
    rotateY: 0
  },
};

const Flashcard = ({ children, type }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
        transition={{ duration: .5 }}
      >
        <Logo isFlipped={isFlipped} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Flashcard;
