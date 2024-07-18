import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";
import styles from "./ProductCard.module.css";
import Detail from "./Detail";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProduct();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [title, instructor, description] = elem.title.split(" | ");
  const [detailOpen, setDetailOpen] = useState(false);
  const handleDetailOpen = () => {
    setDetailOpen(true);
  };

  const handleDetailClose = () => {
    setDetailOpen(false);
  };

  const isAdmin = ADMIN.includes(currentUser);

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
          <button className={styles.detailButton} onClick={handleDetailOpen}>
            Detail
          </button>
        </div>
      </div>
      {isAdmin && (
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
      )}
      {detailOpen && (
        <Detail elem={elem} open={detailOpen} handleClose={handleDetailClose} />
      )}
    </div>
  );
};

export default ProductCard;
