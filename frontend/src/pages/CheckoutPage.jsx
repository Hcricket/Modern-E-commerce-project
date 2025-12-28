// src/pages/CheckoutPage.jsx
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import api from "../api";

const stripePromise = loadStripe(
  "pk_test_51SfD0jPWV9kaCOUf9sXtJZB5hyptUfrhLT2jQDsrYcAlxjJh0FOClgEofcjQpy2jp8xVteYToEtNCaSlD5pkRObh00XNmaC3fy"
);

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  // User input fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Cart total
  const [cartTotal, setCartTotal] = useState(0);

  // Fetch cart total
  useEffect(() => {
    const fetchCart = async () => {
      const res = await api.get("cart/");
      const items = res.data.items || [];

      const total = items.reduce(
        (sum, item) => sum + item.product_price * item.quantity,
        0
      );

      setCartTotal(total);
    };

    fetchCart();
  }, []);

  // Auto-fill user info (optional)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("auth/user/");
        setFullName(res.data.username);
        setEmail(res.data.email);
      } catch (err) {
        console.log("User not logged in");
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Send checkout info to backend
    const res = await api.post("payment/", {
      fullName,
      email,
      phone,
      address,
      amount: cartTotal,
    });

    const clientSecret = res.data.client_secret;

    // Confirm payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: fullName,
          email: email,
          phone: phone,
        },
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      alert("Payment succeeded!");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "100px 20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          border: "1px solid #e5e5e5",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#222",
          }}
        >
          Checkout
        </h2>

        {/* Full Name */}
        <label style={{ fontWeight: "600" }}>Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* Email */}
        <label style={{ fontWeight: "600" }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* Phone */}
        <label style={{ fontWeight: "600" }}>Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* Address */}
        <label style={{ fontWeight: "600" }}>Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          rows="3"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* Total Amount */}
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Total Amount: ${cartTotal.toFixed(2)}
        </p>

        {/* Card Element */}
        <div
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fafafa",
            marginBottom: "20px",
          }}
        >
          <CardElement />
        </div>

        <button
          type="submit"
          disabled={!stripe || loading}
          style={{
            width: "100%",
            padding: "12px",
            background: loading ? "#999" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
