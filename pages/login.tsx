import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Login.module.scss";
import Flashcard from "components/Flashcard/Flashcard";
import Button from "components/Button/Button";

const Login = () => {
  const [error, setError] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Flashcard>
          <h1 className={styles.header}>Sign In</h1>
          <form
            className={styles.form}
            //   onSubmit={newCardHandler}
          >
            <input
              type="email"
              name="email"
              placeholder="email"
              //   onChange={(e) => setWord(e.target.value)}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="password"
              //   onChange={(e) => setDescription(e.target.value)}
            ></input>
            <Button
              buttonType="submit"
              buttonPath="/"
              btnHandler={() => {}}
              buttonText="sign in"
            />
            {error && <p>fill both inputs</p>}
          </form>
          <div className={styles.signup}>
            <div>
              <span>New to fishky?</span>
              <button
                type="submit"
                // onClick={() => setLogin(false)}
              >
                Sign up now.
              </button>
            </div>
          </div>
        </Flashcard>
      </main>
    </>
  );
};

export default Login;
