import Link from "next/link";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import React, { useState } from "react";
const NavMenuExpanded = dynamic(() => import("./NavMenuExpanded"), {
  ssr: false,
});

import styles from "./style.module.scss";

const NavButton: React.FC<{ onClick: () => void; isOpen: boolean }> = ({
  onClick,
  isOpen,
}) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={classNames(styles.navButton, {
        [styles.navButton__open]: isOpen,
      })}
    >
      <span className={styles.navButton__line}></span>
      <span className={styles.navButton__line}></span>
    </div>
  );
};

const NavMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const onCloseNavExpanded = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={classNames(styles.navBar, { [styles.navBar__open]: open })}
      >
        <Link href={"/"} className={styles.navBar__logo}>
          Medallo Baila
        </Link>
        <div className={styles.navBar__actions}>
          <Link
            className={styles.navBar__language}
            href="/"
            locale={router.locale === "en-US" ? "es-CO" : "en-US"}
          >
            {router.locale === "en-US" ? "ES" : "EN"}
          </Link>
          <NavButton onClick={() => setOpen(!open)} isOpen={open} />
        </div>
      </div>
      <NavMenuExpanded isOpen={open} onCloseNavExpanded={onCloseNavExpanded} />
    </>
  );
};

export default NavMenu;
