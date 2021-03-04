import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLink}>
        <NavLink to="/form1">Form with class approach</NavLink>
      </div>
      <div className={styles.navLink}>
        <NavLink to="/form2">Form with hooks</NavLink>
      </div>
      <div className={styles.navLink}>
        <NavLink to="/form3">Another Form with hooks</NavLink>
      </div>
      {/* <div className={styles.navLink}>
        <NavLink to="/form4">To do from Minki</NavLink>
      </div> */}
    </nav>
  );
};
