import api from "../api";

export const createPaymentIntent = (orderId) =>
  api.post("payment/", { order_id: orderId });


//  4242 4242 4242 4242