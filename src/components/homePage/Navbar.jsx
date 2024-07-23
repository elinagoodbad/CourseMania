import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { useProduct } from "../../context/ProductContextProvider";
import { useCart } from "../../context/CartContextProvider";
import styles from "./Navbar.module.css";
import { IconButton, Badge } from "@mui/material";
import {
  ShoppingCartOutlined as ShoppingCartIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { ADMIN } from "../../helpers/const";

const Navbar = () => {
  const { currentUser, checkAuth, handleLogOut } = useAuth();
  const { favorites } = useProduct();
  const { cartLength } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const [favoriteBadgeCount, setFavoriteBadgeCount] = useState(0);
  const menuRef = useRef(null);
  const addMenuRef = useRef(null);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    setFavoriteBadgeCount(favorites.length);
  }, [favorites]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (addMenuRef.current && !addMenuRef.current.contains(event.target)) {
        setIsAddMenuOpen(false);
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

  const toggleAddMenu = () => {
    setIsAddMenuOpen(!isAddMenuOpen);
  };

  const isAdmin = ADMIN.includes(currentUser);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <Link to="/">Let's Do It!</Link>
      </div>
      <ul
        className={`${styles["navbar-links"]} ${
          currentUser ? styles["links-with-user"] : styles["links-without-user"]
        }`}
      >
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {isAdmin && (
          <li className={styles["add-menu-container"]} ref={addMenuRef}>
            <IconButton
              className={styles["navbar-icon"]}
              onClick={toggleAddMenu}
            >
              <AddIcon />
            </IconButton>
            <div
              className={`${styles["add-menu"]} ${
                isAddMenuOpen ? styles.active : ""
              }`}
            >
              <Link to="/addCourse">Add Course</Link>
              <Link to="/addProject">Add Project</Link>
            </div>
          </li>
        )}
      </ul>
      <div className={styles["navbar-right"]}>
        <div className={styles["navbar-icons"]}>
          <Link to="/favorites">
            <IconButton className={styles["navbar-icon"]}>
              <Badge badgeContent={favoriteBadgeCount} color="secondary">
                <BookmarkBorderIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/cart">
            <IconButton className={styles["navbar-icon"]}>
              <Badge badgeContent={cartLength} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
