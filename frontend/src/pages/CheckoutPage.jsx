import React from "react";
import { createPaymentIntent } from "../services/stripe";

function CheckoutPage() {
  const handleCheckout = async () => {
    const res = await createPaymentIntent();
    window.location.href = res.data.url;
  };

  return (
    <div className="p-3">
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Pay with Stripe</button>
    </div>
  );
}

export default CheckoutPage;
