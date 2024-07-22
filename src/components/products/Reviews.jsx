import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Avatar,
  Paper,
} from "@mui/material";
import styles from "./Reviews.module.css";
import { useProduct } from "../../context/ProductContextProvider";

const Reviews = ({ courseSlug }) => {
  const [newReview, setNewReview] = useState("");
  const { reviews, getReviews, addReview } = useProduct();

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
              <Avatar className={styles.avatar}>
                {review.user.charAt(0).toUpperCase()}
              </Avatar>
              <div className={styles.reviewContent}>
                <Typography variant="subtitle2" className={styles.username}>
                  {review.user}
                </Typography>
                <Paper elevation={1} className={styles.messagePaper}>
                  <Typography variant="body2" className={styles.reviewText}>
                    {review.text}
                  </Typography>
                </Paper>
                <Typography variant="caption" className={styles.reviewDate}>
                  {new Date(review.created_at).toLocaleDateString()}
                </Typography>
              </div>
            </ListItem>
          ))}
      </List>

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
    </div>
  );
};

export default Reviews;
