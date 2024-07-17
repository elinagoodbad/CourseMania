import React from "react";
import { useProduct } from "../../context/ProductContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();

  const [title, instructor, description, price] = elem.title.split(" | ");

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={elem.image_light} alt={title} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.instructor}>Instructor: {instructor}</p>
        <p className={styles.description}>Description: {description}</p>
        <p className={styles.price}>Price: {price}</p>
        <div className={styles.iconGroup}>
          <IconButton
            className={styles.iconButton}
            aria-label="edit"
            onClick={() => navigate(`/edit/${elem.slug}`)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            className={styles.iconButton}
            aria-label="delete"
            onClick={() => deleteProduct(elem.slug)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
