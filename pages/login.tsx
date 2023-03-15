import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Login.module.scss";
import Flashcard from "components/Flashcard/Flashcard";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import useAuth from "hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { user, signIn, signUp } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  console.log(user?.email)

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
          <div className={styles.container}>
            <h1 className={styles.header}>Sign In</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor=""></label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>Please enter a valid email.</p>}
              </div>

              <div>
                <label htmlFor=""></label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p>Your password must contain at least 4 characters.</p>
                )}
              </div>
              <button type="submit" onClick={() => setLogin(true)}>
                sign in
              </button>
              {error && <p>fill both inputs</p>}
              <div className={styles.signup}>
                <span>New to fishky?</span>
                <button
                  type="submit"
                  className={styles.signUpBtn}
                  onClick={() => setLogin(false)}
                >
                  Sign up now.
                </button>
              </div>
            </form>
          </div>
        </Flashcard>
      </main>
    </>
  );
};

export default Login;
