import api from "../api";

export const getCartItems = () => api.get("cart/");
export const addCartItem= (productId) =>
  api.post("cart/add/", { "product_id": productId });
