import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.logo}>&nbsp;</div>
      </Link>
      <div className={styles.links}>
        <Link to="/" className={styles.navMenu}>
          Home
        </Link>
        <Link
          to="/search"
          className={
            location.pathname === "/search"
              ? styles.navMenuActive
              : styles.navMenu
          }
        >
          Property Search
        </Link>
        <Link
          to="/seller"
          className={
            location.pathname === "/seller"
              ? styles.navMenuActive
              : styles.navMenu
          }
        >
          For Seller
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? styles.navMenuActive
              : styles.navMenu
          }
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
