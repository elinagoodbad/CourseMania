import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getLocalStorage,
  getProductsCountInCart,
  updateLocalStorage,
} from "../helpers/functions";

export const cartContext = createContext();

export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: getLocalStorage(),
  cartLength: getProductsCountInCart(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "CHANGE_CART_LENGTH":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    const cart = getLocalStorage();
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const addProductToCart = (product) => {
    let cart = getLocalStorage();
    if (!cart.products.some((item) => item.item.slug === product.slug)) {
      cart.products.push({
        item: product,
        count: 1,
        subPrice: parseFloat(product.title.split(" | ")[3]),
      });
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    updateLocalStorage(cart);
    getCart();
    dispatch({
      type: "CHANGE_CART_LENGTH",
      payload: getProductsCountInCart(),
    });
  };

  const changeProductCount = (slug, count) => {
    let cart = getLocalStorage();
    cart.products = cart.products.map((elem) => {
      if (elem.item.slug === slug) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    updateLocalStorage(cart);
    getCart();
  };

  const deleteProductFromCart = (slug) => {
    let cart = getLocalStorage();
    cart.products = cart.products.filter((elem) => elem.item.slug !== slug);
    cart.totalPrice = calcTotalPrice(cart.products);
    updateLocalStorage(cart);
    getCart();
    dispatch({
      type: "CHANGE_CART_LENGTH",
      payload: getProductsCountInCart(),
    });
  };

  const checkProductInCart = (slug) => {
    let cart = getLocalStorage();
    return cart.products.some((elem) => elem.item.slug === slug);
  };

  useEffect(() => {
    getCart();
  }, []);

  const values = {
    cart: state.cart,
    cartLength: state.cartLength,
    getCart,
    addProductToCart,
    changeProductCount,
    deleteProductFromCart,
    checkProductInCart,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
