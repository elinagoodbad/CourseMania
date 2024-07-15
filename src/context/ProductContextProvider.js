import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContextProvider = ({ children }) => {
  const INIT_STATE = { products: [], count: 0, next: null, previous: null };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload.results,
          count: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens || !tokens.access) {
      throw new Error("No access token found");
    }
    const Authorization = `Bearer ${tokens.access}`;
    return {
      headers: { Authorization },
    };
  };

  const addProduct = async (formData) => {
    try {
      const config = {
        ...getConfig(),
        headers: {
          ...getConfig().headers,
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post(`${API}/courses/`, formData, config);
      console.log("Product added successfully:", response.data);
      getProducts();
    } catch (error) {
      console.error(
        "Error adding product:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const getProducts = async (page = 1) => {
    try {
      const { data } = await axios.get(
        `${API}/courses/?page=${page}`,
        getConfig()
      );
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch (error) {
      console.error(
        "Error fetching products:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const deleteProducts = async (id) => {
    try {
      await axios.delete(`${API}/courses/${id}/`, getConfig());
      getProducts();
    } catch (error) {
      console.error(
        "Error deleting product:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    count: state.count,
    next: state.next,
    previous: state.previous,
    deleteProducts,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
