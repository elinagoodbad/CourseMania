import React from "react";
import { useProduct } from "../../context/ProductContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import styles from "./ProductCard.module.css";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProduct();

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={elem.image_light} alt={elem.slug} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.slug}>{elem.slug}</h2>
        <div className={styles.iconGroup}>
          <IconButton aria-label="edit" className={styles.iconButton}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => deleteProduct(elem.slug)}
            className={styles.iconButton}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
