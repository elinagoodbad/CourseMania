// Reviews.js
import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import styles from "./Reviews.module.css";
import { useProduct } from "../../context/ProductContextProvider";
import { useAuth } from "../../context/AuthContextProvider"; // Import useAuth

const Reviews = ({ courseSlug }) => {
  const [newReview, setNewReview] = useState("");
  const { reviews, getReviews, addReview } = useProduct();
  const { currentUser } = useAuth(); // Get currentUser from context

  useEffect(() => {
    getReviews(courseSlug);
  }, [courseSlug, getReviews]);

  const handleSubmitReview = async () => {
    if (newReview.trim()) {
      const formData = new FormData();
      formData.append("text", newReview);
      await addReview(courseSlug, formData);
      setNewReview("");
      getReviews(courseSlug);
    }
  };

  return (
    <div className={styles.reviewsContainer}>
      <Typography variant="h2" className={styles.reviewsTitle}>
        Reviews
      </Typography>
      <List className={styles.reviewsList}>
        {reviews &&
          reviews.map((review) => (
            <ListItem key={review.id} className={styles.reviewItem}>
              <div className={styles.reviewContent}>
                <div className={styles.reviewHeader}>
                  <Typography variant="subtitle1" className={styles.username}>
                    {review.user}
                  </Typography>
                  <Typography variant="caption" className={styles.reviewDate}>
                    {new Date(review.created_at).toLocaleDateString()}
                  </Typography>
                </div>
                <Paper elevation={1} className={styles.messagePaper}>
                  <Typography variant="body2" className={styles.reviewText}>
                    {review.text}
                  </Typography>
                </Paper>
              </div>
            </ListItem>
          ))}
      </List>
      {currentUser ? (
        <div className={styles.newReviewContainer}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Write your review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className={styles.reviewInput}
            InputProps={{
              classes: {
                root: styles.reviewInputRoot,
                input: styles.reviewInputText,
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmitReview}
            className={styles.submitButton}
          >
            Submit
          </Button>
        </div>
      ) : (
        <Typography variant="body1" className={styles.loginPrompt}>
          Please log in to write a review
        </Typography>
      )}
    </div>
  );
};

export default Reviews;
