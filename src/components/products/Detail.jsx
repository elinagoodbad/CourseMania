import React, { useState, useEffect } from "react";
import { Box, Modal, Typography, Button, IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RateReviewIcon from "@mui/icons-material/RateReview";
import styles from "./Detail.module.css";
import { useProduct } from "../../context/ProductContextProvider";
import { useCart } from "../../context/CartContextProvider";
import Reviews from "../products/Reviews";

const Detail = ({ elem, open, handleClose }) => {
  const [courseName, instructor, description, price] = elem.title.split(" | ");
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, toggleFavorite } = useProduct();
  const { addProductToCart, deleteProductFromCart, checkProductInCart } =
    useCart();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.slug === elem.slug));
    setIsEnrolled(checkProductInCart(elem.slug));
  }, [elem.slug, favorites, checkProductInCart]);

  const handleToggleFavorite = () => {
    toggleFavorite(elem);
    setIsFavorite(!isFavorite);
  };

  const handleEnrollToggle = () => {
    if (isEnrolled) {
      deleteProductFromCart(elem.slug);
    } else {
      addProductToCart(elem);
    }
    setIsEnrolled(!isEnrolled);
  };

  const handleReviewsToggle = () => {
    setReviewsOpen(!reviewsOpen);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles.modalContainer}>
        <Box className={styles.modal}>
          <div className={styles.titleContainer}>
            <Typography variant="h5" className={styles.title}>
              {courseName}
              <IconButton
                onClick={handleToggleFavorite}
                className={styles.favoriteButton}
              >
                {isFavorite ? (
                  <BookmarkIcon fontSize="large" color="primary" />
                ) : (
                  <BookmarkBorderIcon fontSize="large" />
                )}
              </IconButton>
            </Typography>
          </div>
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
          <Button
            variant="contained"
            className={`${styles.button} ${styles.cartButton}`}
            onClick={handleEnrollToggle}
            startIcon={<ShoppingCartIcon />}
          >
            <span className={styles.buttonText}>
              {isEnrolled ? "Remove from Cart" : "Add to Cart"}
            </span>
          </Button>
          <Button
            variant="contained"
            className={`${styles.button} ${styles.reviewButton}`}
            onClick={handleReviewsToggle}
            startIcon={<RateReviewIcon />}
          >
            {reviewsOpen ? "Hide Reviews" : "Show Reviews"}
          </Button>
        </Box>
        {reviewsOpen && (
          <Box className={styles.reviewsSection}>
            <Reviews courseSlug={elem.slug} />
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default Detail;
