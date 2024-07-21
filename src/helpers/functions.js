// functions.js

export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart || { products: [], totalPrice: 0 };
};

export const calcSubPrice = (elem) => {
  return elem.count * parseFloat(elem.item.title.split(" | ")[3]);
};

export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return acc + (curr.subPrice || parseFloat(curr.item.title.split(" | ")[3]));
  }, 0);
};

export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  return cart.products.length;
};

export const checkProductInCart = (id) => {
  let cart = getLocalStorage();
  return cart.products.some((elem) => elem.item.id === id);
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const updateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
