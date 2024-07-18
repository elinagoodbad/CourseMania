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

  const [title, instructor, description] = elem.title.split(" | ");

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={elem.image_light} alt={title} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.instructor}>Mentor: {instructor}</p>
        <div className={styles.actionRow}>
          <button className={styles.detailButton}>Detail</button>
        </div>
      </div>
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
  );
};

export default ProductCard;
