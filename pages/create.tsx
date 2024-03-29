import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Create.module.scss";
import Flashcard from "components/Flashcard/Flashcard";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "hooks/useAuth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const options = [
  { value: "english", label: "english" },
  { value: "react", label: "react" },
  { value: "add new...", label: "add new..." },
];


export default function Create() {
  const [category, setCategory] = useState("select category...");
  const [newCategory, setNewCategory] = useState("");
  const router = useRouter();

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ front, back, category }: any) => {
    if (category === "add new...") {
      const cardsRef = collection(db, "users", user!.email!, newCategory);
      await setDoc(doc(cardsRef), {
        front: front,
        back: back,
      });
    } else if (front && back) {
      setCategory(category);
      const cardsRef = collection(db, "users", user!.email!, category);
      await setDoc(doc(cardsRef), {
        front: front,
        back: back,
      });
    }
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>fishky | create new flashcard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Flashcard>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <>
              {category !== "add new..." ? (
                <select
                  className={styles.select}
                  {...register("category", { required: true })}
                >
                  {options.map((el, i) => (
                    <option key={i} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  placeholder=" enter new category..."
                  {...register("category", { required: true })}
                ></input>
              )}
              <input
                type="text"
                placeholder=" enter front..."
                {...register("front", { required: true })}
              />
              <input
                type="text"
                placeholder="enter reverse..."
                {...register("back", { required: true })}
              />
              <button type="submit">create</button>
              {errors.category ||
                errors.front ||
                (errors.back && <p>fill both inputs</p>)}
            </>
          </form>
        </Flashcard>
      </main>
    </>
  );
}
