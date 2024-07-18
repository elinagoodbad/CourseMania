import React from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import styles from "./Detail.module.css";

const Detail = ({ elem, open, handleClose }) => {
  const [courseName, instructor, description, price] = elem.title.split(" | ");

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles.modal}>
        <Typography variant="h5" className={styles.title}>
          {courseName}
        </Typography>
        <div className={styles.imageContainer}>
          <img
            src={elem.image_dark}
            alt={courseName}
            className={styles.image}
          />
          <Typography variant="body1" className={styles.instructor}>
            Mentor: {instructor}
          </Typography>
        </div>
        <Typography variant="body1" className={styles.description}>
          {description}
        </Typography>
        <Typography variant="body1" className={styles.price}>
          4-Month Course: {price}
        </Typography>
        <Button variant="contained" className={styles.button}>
          Enroll Now
        </Button>
      </Box>
    </Modal>
  );
};

export default Detail;
