import React, { useState } from "react";
import styles from "./Layout.module.scss";
import Hamburger from "hamburger-react";

//HOOKS
import useMediaQuery from "../../hooks/useMediaQuery";
import MenuPopup from "components/MenuPopup/MenuPopup";

const Layout = ({ children }: any) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.navigation}>
      <div className={styles.menuIcon}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <MenuPopup isOpen={isOpen} setOpen={setOpen}/>
    </nav>
  );
};

export default Layout;
