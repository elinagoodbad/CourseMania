import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContextProvider = ({ children }) => {
  const INIT_STATE = {
    products: [],
    oneProduct: {},
    pages: 1,
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload.products,
          pages: action.payload.pages,
        };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //! getConfig
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens")) || {};
    const Authorization = `Bearer ${tokens.access || ""}`;
    return {
      headers: { Authorization },
    };
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

  //! get
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${API}/courses/${window.location.search}`,
        getConfig()
      );
      const itemsPerPage = 3; // Количество товаров на странице
      const totalPages = Math.ceil(data.count / itemsPerPage);
      dispatch({
        type: "GET_PRODUCTS",
        payload: { products: data.results, pages: totalPages },
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
      const { data } = await axios.get(`${API}/courses/${slug}/`, getConfig());
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
    await axios.patch(`${API}/courses/${slug}/`, editedProduct, getConfig());
    navigate("/courses");
  };

  const values = {
    addProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    editProduct,
    products: state.products,
    oneProduct: state.oneProduct,
    pages: state.pages,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
