import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <Link to="/" className={styles.logoLink}>
          Let's Do It!
        </Link>
      </div>
      <ul className={styles["navbar-links"]}>
        <li>
          <Link to="/courses" className={styles.navLink}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles["navbar-auth"]}>
        <Link to="/login" className={styles.authLink}>
          Login
        </Link>
        <Link to="/signup" className={`${styles.authLink} ${styles.signup}`}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
