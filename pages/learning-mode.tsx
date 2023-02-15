import React from "react";
import Head from "next/head";
import styles from "../styles/Learn.module.scss";
import Flashcard from "components/Flashcard/Flashcard";

export default function LearningMode() {

  return (
    <>
      <Head>
        <title>fishky | learn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Flashcard type='learn'>
          <h1 className={styles.front}>Save my world</h1>
          <h2 className={styles.back}>it&apos;s to late</h2>
        </Flashcard>
      </main>
    </>
  );
}