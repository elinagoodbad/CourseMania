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
    pages: 10,
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  //! getConfing
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
      navigate("/productPage");
    } catch (error) {
      console.log(error);
    }
  };

  //! get
  const getProducts = async () => {
    const { data } = await axios.get(
      `${API}/courses/${window.location.search}`,
      getConfig()
    );
    dispatch({
      type: "GET_PRODUCTS",
      payload: data.results,
    });
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
    navigate("/productPage");
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
