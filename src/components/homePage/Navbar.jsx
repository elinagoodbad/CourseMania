import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <Link to="/">
          {/* <img
            src="https://bootcamp.makers.kg/assets/img/makers_logo.svg"
            alt=""
          /> */}
          Let's Do It!
        </Link>
      </div>
      <ul className={styles["navbar-links"]}>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles["navbar-auth"]}>
        <Link to="/login">Login</Link>
        <Link to="/signup" className={styles.signup}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
