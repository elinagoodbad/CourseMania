import axios from "axios";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";

const productContext = createContext();

export const useProduct = () => useContext(productContext);

const ProductContextProvider = ({ children }) => {
  const INIT_STATE = {
    products: [],
    oneProduct: {},
    favorites: [],
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      case "SET_FAVORITES":
        return { ...state, favorites: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    dispatch({ type: "SET_FAVORITES", payload: storedFavorites });
  }, []);

  //! getConfig
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens")) || {};
    const Authorization = `Bearer ${tokens.access || ""}`;
    return tokens.access ? { headers: { Authorization } } : {};
  };

  //! add
  const addProduct = async (formData) => {
    try {
      await axios.post(`${API}/courses/`, formData, getConfig());
      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };

  //! addProject
  const addProject = async (formData) => {
    try {
      await axios.post(`${API}/projects/`, formData, getConfig());
      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };

  //! get
  const getProducts = async (searchQuery = "") => {
    try {
      let allProducts = [];
      let nextPage = `${API}/courses/?search=${searchQuery}`;
      while (nextPage) {
        const { data } = await axios.get(nextPage);
        allProducts = [...allProducts, ...data.results];
        nextPage = data.next;
      }
      dispatch({
        type: "GET_PRODUCTS",
        payload: allProducts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! delete
  const deleteProduct = async (slug) => {
    try {
      await axios.delete(`${API}/courses/${slug}/`, getConfig());
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  //! getOneProduct
  const getOneProduct = async (slug) => {
    try {
      const { data } = await axios.get(`${API}/courses/${slug}/`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! edit
  const editProduct = async (slug, editedProduct) => {
    try {
      await axios.patch(`${API}/courses/${slug}/`, editedProduct, getConfig());
      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };

  // Новые функции для управления избранными элементами
  const addToFavorites = (product) => {
    const updatedFavorites = [...state.favorites, product];
    dispatch({ type: "SET_FAVORITES", payload: updatedFavorites });
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (slug) => {
    const updatedFavorites = state.favorites.filter((fav) => fav.slug !== slug);
    dispatch({ type: "SET_FAVORITES", payload: updatedFavorites });
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const toggleFavorite = (product) => {
    const isFavorite = state.favorites.some((fav) => fav.slug === product.slug);
    if (isFavorite) {
      removeFromFavorites(product.slug);
    } else {
      addToFavorites(product);
    }
  };

  const values = {
    addProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    editProduct,
    products: state.products,
    oneProduct: state.oneProduct,
    addProject,
    favorites: state.favorites,
    toggleFavorite,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
