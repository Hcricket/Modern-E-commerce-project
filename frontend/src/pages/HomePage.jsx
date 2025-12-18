import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mt-4">
      <h1>Welcome to MyStore</h1>
      <p>Your React + Django e‑commerce app.</p>
      <ul>
        <li><Link to="/products">Browse Products</Link></li>
        <li><Link to="/cart">View Cart</Link></li>
        <li><Link to="/orders">My Orders</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
