import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { currentUser, checkAuth, handleLogOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div className={styles["navbar-user"]} ref={menuRef}>
          <span onClick={toggleMenu}>{currentUser}</span>
          <div
            className={`${styles["user-menu"]} ${
              isMenuOpen ? styles.active : ""
            }`}
          >
            <Link to="/" onClick={handleLogOut}>
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles["navbar-auth"]}>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
