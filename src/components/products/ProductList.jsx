import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const { products, getProducts } = useProduct();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    getProducts(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleViewProjects = () => {
    navigate("/projectlist");
  };

  const filteredProducts = products.filter((product) => {
    if (category === "All") return true;
    if (category === "Design")
      return product.slug.toLowerCase().includes("design");
    if (category === "IT") return product.slug.toLowerCase().includes("it");
    return true;
  });

  return (
    <div className={styles.productList}>
      <h1>Our Courses</h1>
      <div className={styles.searchInputContainer}>
        <SearchIcon
          className={styles.searchIcon}
          style={{ fontSize: "1.2rem" }}
        />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.categoryButton} ${
            category === "All" ? styles.active : ""
          }`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>
        <button
          className={`${styles.categoryButton} ${
            category === "Design" ? styles.active : ""
          }`}
          onClick={() => handleCategoryChange("Design")}
        >
          Design
        </button>
        <button
          className={`${styles.categoryButton} ${
            category === "IT" ? styles.active : ""
          }`}
          onClick={() => handleCategoryChange("IT")}
        >
          Programming
        </button>
      </div>
      <div className={styles.cardGrid}>
        {filteredProducts.map((elem) => (
          <ProductCard key={elem.slug} elem={elem} />
        ))}
      </div>
      <button
        className={styles.viewProjectsButton}
        onClick={handleViewProjects}
      >
        View Projects
      </button>
    </div>
  );
};

export default ProductList;
