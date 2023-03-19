import React, { useState } from "react";
import styles from "./Layout.module.scss";
import Hamburger from "hamburger-react";

//HOOKS
import useMediaQuery from "../../hooks/useMediaQuery";
import MenuPopup from "components/MenuPopup/MenuPopup";

import useAuth from "hooks/useAuth";
const Layout = () => {
  const { user } = useAuth();
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
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
