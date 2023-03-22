import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Flashcard from "components/Flashcard/Flashcard";
import Button from "components/Button/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fishky | Learn with Flashcards</title>
        <meta name="description" content="Learn with Flashcards" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Flashcard>
          <div className={styles.options}>
            <Button
              buttonType="button"
              buttonText="create"
              buttonPath="/create"
            />
            <Button
              buttonType="button"
              buttonText="learn"
              buttonPath="/learn"
            />
          </div>
        </Flashcard>
      </main>
    </>
  );
}
