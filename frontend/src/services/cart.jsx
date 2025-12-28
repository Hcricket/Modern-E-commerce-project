// import api from "../api";

// export const getCartItems = () => api.get("cart/");
// export const addCartItem= (productId) =>
//   api.post("cart/add/", { "product_id": productId });


import api from "../api";

export const getCartItems = () => api.get("cart/");

export const addCartItem = ({ product_id, quantity }) =>
  api.post("cart/add/", { product_id, quantity });

export const removeCartItem = ({ product_id }) =>
  api.post("cart/remove/", { product_id });
