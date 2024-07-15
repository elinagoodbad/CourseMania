import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.slug}>Slug: {product.slug}</p>
      {product.image_light && (
        <img
          src={product.image_light}
          alt={`${product.title} (light)`}
          className={styles.image}
        />
      )}
      {product.image_dark && (
        <img
          src={product.image_dark}
          alt={`${product.title} (dark)`}
          className={styles.image}
        />
      )}
    </div>
  );
};

export default ProductCard;
