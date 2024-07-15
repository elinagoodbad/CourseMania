import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const ProductList = () => {
  const { products, getProducts, pages } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [searchParams]);

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

  return (
    <div className={styles.productList}>
      <h1>Our Courses</h1>
      <div className={styles.cardGrid}>
        {products.map((elem) => (
          <ProductCard key={elem.id} elem={elem} />
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
