import React from "react";
import styles from "./MenuPopup.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  MdOutlineHome,
  MdOutlineSchool,
  MdAddCircleOutline,
  MdLogout,
} from "react-icons/md";
import useAuth from "hooks/useAuth";

const MenuPopup = ({ isOpen, setOpen }: any) => {
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
    setOpen((prev: boolean) => !prev);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.popup}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "tween",
            ease: [0.15, 0.1, 0.25, 1],
            duration: 0.5,
          }}
        >
          <div>
            <Link href="/" onClick={() => setOpen((prev: boolean) => !prev)}>
              <MdOutlineHome size={"28px"} />
              <p>Home</p>
            </Link>

            <Link
              href="/learn"
              onClick={() => setOpen((prev: boolean) => !prev)}
            >
              <MdOutlineSchool size={"28px"} />
              <p>Learn</p>
            </Link>

            <Link
              href="/create"
              onClick={() => setOpen((prev: boolean) => !prev)}
            >
              <MdAddCircleOutline size={"28px"} />
              <p>Create</p>
            </Link>
            <button onClick={() => handleLogOut()}>
              <MdLogout size={"28px"} />
              <p>Sign out</p>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuPopup;
