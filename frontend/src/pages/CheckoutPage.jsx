import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import api from "../api";
const stripePromise = loadStripe("pk_test_51SfD0jPWV9kaCOUf9sXtJZB5hyptUfrhLT2jQDsrYcAlxjJh0FOClgEofcjQpy2jp8xVteYToEtNCaSlD5pkRObh00XNmaC3fy");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Request client secret from backend
    const res = await api.post("payment/");
    const clientSecret = res.data.client_secret;
    // Confirm payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      alert("Payment succeeded!");
      // Optional: clear cart or redirect
    }
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};
export default CheckoutPage;