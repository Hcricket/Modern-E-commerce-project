import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">MyStore</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
        <Link className="nav-link" to="/orders">Orders</Link>
        <Link className="nav-link" to="/checkout">Checkout</Link>
        <Link className="nav-link" to="/weather">Weather</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
