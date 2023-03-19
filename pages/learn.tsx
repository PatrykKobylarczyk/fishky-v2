import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Learn.module.scss";
import Flashcard from "components/Flashcard/Flashcard";
import Category from "components/Category/Category";
import Button from "components/Button/Button";
import { useRecoilState } from "recoil";
import { categoryError, selectedCategory } from "atoms/atom";

export default function Learn() {
  // const [category, setCategory] = useRecoilState(selectedCategory);
  const [_, setOptions] = useState<any[]>([]);
  const [error, setError] = useRecoilState(categoryError);
  const [category] = useRecoilState<any>(selectedCategory);

  console.log(category);

  return (
    <>
      <Head>
        <title>fishky | learn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Flashcard>
          <div className={styles.buttons}>
            <Category setOptions={setOptions} />
            {error && <p className={styles.errorMessage}>select category!</p>}
            <Button
              buttonType="button"
              buttonText="start"
              buttonPath={
                category === "add new..." ? "/create" : "/learning-mode"
              }
            />
          </div>
        </Flashcard>
      </main>
    </>
  );
}
