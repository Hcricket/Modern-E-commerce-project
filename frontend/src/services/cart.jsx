import api from "../api";

export const getCartItems = () => api.get("cart-items/");
export const addCartItem= (productId, quantity) =>
  api.post("cart-items/", { product_id: productId, quantity });
