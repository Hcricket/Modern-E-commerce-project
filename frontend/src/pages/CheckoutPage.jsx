// import React from "react";
// import { createPaymentIntent } from "../services/stripe";

// function CheckoutPage() {
//   const handleCheckout = async () => {
//     const res = await createPaymentIntent();
//     window.location.href = res.data.url;
//   };

//   return (
//     <div className="p-3">
//       <h2>Checkout</h2>
//       <button onClick={handleCheckout}>Pay with Stripe</button>
//     </div>
//   );
// }

// export default CheckoutPage;
import React from "react";
import { createPaymentIntent } from "../services/stripe";

function CheckoutPage() {
  const handleCheckout = async () => {
    const res = await createPaymentIntent();
    window.location.href = res.data.url;
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#f8fdf8" }} // soft white-green background
    >
      <div
        className="p-4 shadow rounded"
        style={{
          width: "350px",
          backgroundColor: "#ffffff",
          border: "1px solid #d9f2d9",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#2e7d32", fontWeight: "600" }}
        >
          Checkout
        </h2>

        <button
          onClick={handleCheckout}
          className="w-100 py-2"
          style={{
            backgroundColor: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#256628")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2e7d32")}
        >
          Pay with Stripe
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
