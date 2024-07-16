import React from "react";
import { Box, Typography, Container } from "@mui/material";
import styles from "./Header.module.css";

const images = [
  "https://sun9-24.userapi.com/impg/63ScMY3E00CR_WNVf6KFjqpSrmbdzPLCSiE_6w/-9YID7BJKVU.jpg?size=1024x1280&quality=96&sign=7322958897bc32f71098e1c225fbcf9b&type=album",
  "https://sun9-63.userapi.com/impg/q5UowM-s-ybsatR1unUSVUXai8DewMOCoD9kDQ/pXjrdjWWXOs.jpg?size=666x1024&quality=96&sign=1bf9bea03712f53b2b4c849a94189c7c&type=album",
  "https://sun9-43.userapi.com/impg/PR0i0QDzYf-aDFwP2FhRKs0bAE687whi4hYbKA/uDfhsUr34Pk.jpg?size=640x640&quality=96&sign=31fadcd5c9a79023570a49fa750e4736&type=album",
];

const Header = () => {
  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.imageContainer}>
        {images.map((image, index) => (
          <Box
            key={index}
            className={styles.imageWrapper}
            style={{ flex: `1 1 ${100 / images.length}%` }}
          >
            <img
              src={image}
              alt={`Преподаватель ${index + 1}`}
              className={styles.headerImage}
            />
          </Box>
        ))}
      </Box>
      <Container className={styles.headerText}>
        <Typography variant="h1" className={styles.headerTitle}>
          <span className={styles.bold}>Let's Do It!</span>
        </Typography>
        <Typography variant="h4" className={styles.headerSubtitle}>
          Creative Professions
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
