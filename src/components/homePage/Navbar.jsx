import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { currentUser, checkAuth, handleLogOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <Link to="/">Let's Do It!</Link>
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
      {currentUser ? (
        <div className={styles["navbar-user"]}>
          <span>{currentUser}</span>
          <Link to="/" onClick={handleLogOut} className={styles["logout-link"]}>
            Logout
          </Link>
        </div>
      ) : (
        <div className={styles["navbar-auth"]}>
          {" "}
          <Link to="/register">Register</Link>{" "}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
