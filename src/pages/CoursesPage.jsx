import React from "react";
import ProductList from "../components/products/ProductList";
import styles from "./CoursesPage.module.css";

const CoursesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <ProductList />
    </div>
  );
};

export default CoursesPage;
