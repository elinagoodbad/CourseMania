import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const { getProducts, products, count, next, previous } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts(currentPage, search);
  }, [currentPage, search]);

  const handleNextPage = () => {
    if (next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (previous) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.list}>
      <h1 className={styles.header}>Список продуктов</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск продуктов"
        className={styles.searchInput}
      />
      {products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className={styles.noProducts}>Нет доступных продуктов</p>
      )}
      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={!previous}>
          Предыдущая
        </button>
        <span>Страница {currentPage}</span>
        <button onClick={handleNextPage} disabled={!next}>
          Следующая
        </button>
      </div>
    </div>
  );
};

export default ProductList;
