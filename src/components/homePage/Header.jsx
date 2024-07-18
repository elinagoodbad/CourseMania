import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source
          src="https://cdn.pixabay.com/video/2015/12/11/1625-148614367_tiny.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className={styles.title}>Let's Do It!</h1>
    </header>
  );
};

export default Header;
