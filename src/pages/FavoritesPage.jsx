import React, { useState, useEffect } from "react";
import ProductCard from "../components/products/ProductCard";
import styles from "./FavoritesPage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Detail from "../components/products/Detail";
import { useProduct } from "../context/ProductContextProvider";

const FavoritesPage = () => {
  const { favorites } = useProduct();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedElem, setSelectedElem] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFavorites = favorites.filter((favorite) =>
    favorite.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDetailOpen = (elem) => {
    setSelectedElem(elem);
    setIsDetailOpen(true);
  };

  const handleDetailClose = () => {
    setIsDetailOpen(false);
    setSelectedElem(null);
  };

  return (
    <div className={styles.favoritesPage}>
      <h1>Your Favorite Courses</h1>
      <div className={styles.searchInputContainer}>
        <SearchIcon
          className={styles.searchIcon}
          style={{ fontSize: "1.2rem" }}
        />
        <input
          type="text"
          placeholder="Search favorites..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
      {filteredFavorites.length === 0 ? (
        <p className={styles.noFavorites}>
          You haven't added any courses to your favorites yet.
        </p>
      ) : (
        <div className={styles.cardGrid}>
          {filteredFavorites.map((elem) => (
            <ProductCard
              key={elem.slug}
              elem={elem}
              onClick={() => handleDetailOpen(elem)}
            />
          ))}
        </div>
      )}

      {selectedElem && (
        <Detail
          elem={selectedElem}
          open={isDetailOpen}
          handleClose={handleDetailClose}
        />
      )}
    </div>
  );
};

export default FavoritesPage;
