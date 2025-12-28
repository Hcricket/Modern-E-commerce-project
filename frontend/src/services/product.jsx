import api from "../api";

export const getProducts = () => api.get("products/");
export const getProductDetail = (id) => api.get(`products/${id}/`);


// import api from "../api";

// export const getProducts = () => api.get("api/v1/products/");
// export const getProductDetail = (id) => api.get(`api/v1/products/${id}/`);
