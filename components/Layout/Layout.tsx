import React, { useState } from "react";
import styles from "./Layout.module.scss";

//LIBS
import Hamburger from "hamburger-react";

//HOOKS
import MenuPopup from "components/MenuPopup/MenuPopup";
import useAuth from "hooks/useAuth";

const Layout = () => {
  const { user } = useAuth();
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.navigation}>
      {user && (
        <>
          <div className={`${styles.menuIcon} ${isOpen && "open"}`}>
            <Hamburger
              rounded
              toggled={isOpen}
              toggle={setOpen}
              color={isOpen ? "#9f0140" : "grey"}
            />
          </div>
          <MenuPopup isOpen={isOpen} setOpen={setOpen} />
        </>
      )}
    </nav>
  );
};

export default Layout;
