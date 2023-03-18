import React, { useEffect, useState, CSSProperties } from "react";
import PrevArrow from "components/Arrows/PrevArrow";
import NextArrow from "components/Arrows/NextArrow";
import Flashcard from "components/Flashcard/Flashcard";
import styles from "../styles/Learn.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "hooks/useAuth";
import { useRecoilState } from "recoil";
import { categoryError, selectedCategory, isCardFlipped } from "atoms/atom";
import CircleLoader from "react-spinners/CircleLoader";
import { motion } from "framer-motion";

const learningMode = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState<any[]>([]);
  const [cardNumber, setCardNumber] = useState(0);
  const [category, _] = useRecoilState(selectedCategory);
  const [error, setError] = useRecoilState(categoryError);
  const [loading, setLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useRecoilState(isCardFlipped);
  const [isCardChanged, setIsCardChanged] = useState(false);

  // get cards from firebase
  const getCards = async (categoryName: string) => {
    const currentCategoryCards: any[] = [];
    const docsRef = collection(db, "users", user!.email!, categoryName);
    const docsSnap = await getDocs(docsRef);
    if (docsSnap) {
      docsSnap.forEach((doc: any) => {
        currentCategoryCards.push(doc.data());
        setCards(currentCategoryCards);
      });
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    getCards(category);
    if (category !== "select category...") {
      setError(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [category]);

  useEffect(() => {
    setTimeout(() => {
      setIsCardChanged(false);
    }, 500);
  }, [cardNumber]);

  const handleChangeCard = (arrow: string) => {
    switch (arrow) {
      case "next":
        if (cardNumber === cards.length - 1) {
          setCardNumber(0);
        } else {
          setCardNumber((prev: number) => prev + 1);
        }
        setIsFlipped(false);
        setIsCardChanged(true)
        break;
      case "prev":
        if (cardNumber === 0) {
          setCardNumber(cards.length - 1);
        } else {
          setCardNumber((prev: number) => prev - 1);
        }
        setIsFlipped(false);
        setIsCardChanged(true)
        break;
      default:
        break;
    }
  };

  return (
    <>
      {cards.length === 0 ? (
        <div className={styles.learnMode}>
          <Flashcard>
            {loading ? (
              <CircleLoader
                color={"#f0032b"}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <p>no cards yet...</p>
            )}
          </Flashcard>
        </div>
      ) : (
        <div className={styles.learnMode}>
          <PrevArrow handleChangeCard={handleChangeCard} />
          <Flashcard type="learn">
            {!loading && (
              <motion.div
                className={styles.front}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h1>{cards[cardNumber].front}</h1>
              </motion.div>
            )}
            {!loading && (
              <motion.div
                className={styles.back}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2>{cards[cardNumber].back}</h2>
              </motion.div>
            )}
          </Flashcard>
          <NextArrow handleChangeCard={handleChangeCard} />
        </div>
      )}
    </>
  );
};

export default learningMode;
