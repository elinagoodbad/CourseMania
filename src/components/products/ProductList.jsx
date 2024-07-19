import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

const ProductList = () => {
  const { products, getProducts, pages } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProducts(searchQuery);
  }, [searchParams, searchQuery]);

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage]);

  const getPagesCount = () => {
    const pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  };

  if (currentPage < 1) setCurrentPage(1);
  if (currentPage > pages) setCurrentPage(pages);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

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
      <div className={styles.cardGrid}>
        {products.map((elem) => (
          <ProductCard key={elem.slug} elem={elem} />
        ))}
      </div>
      <div className={styles.paginationWrapper}>
        <Pagination>
          <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
          {getPagesCount().map((elem) =>
            elem === currentPage ? (
              <Pagination.Item active key={elem}>
                {elem}
              </Pagination.Item>
            ) : (
              <Pagination.Item onClick={() => setCurrentPage(elem)} key={elem}>
                {elem}
              </Pagination.Item>
            )
          )}
          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
        </Pagination>
      </div>
    </div>
  );
};

export default ProductList;
