import api from "../api";

export const createPaymentIntent = (orderId) =>
  api.post("payments/", { order_id: orderId });
