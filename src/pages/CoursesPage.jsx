import React from "react";
import ProductList from "../components/products/ProductList";
import styles from "./CoursesPage.module.css";
import Footer from "../components/homePage/Footer";

const CoursesPage = () => {
  return (
    <div>
      <div className={styles.pageContainer}>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
