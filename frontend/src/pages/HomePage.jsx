import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
function HomePage() {
  return (
    <div className="container mt-4">
      {/* <h1>HCRICKET STORE</h1> */}
      
      <ul>
        <li><Link to="/products">Browse Products</Link></li>
        <li><Link to="/cart">View Cart</Link></li>
        <li><Link to="/orders">My Orders</Link></li>
      </ul>
      <img src={logo} alt="Store Logo" style={{ width: "100%", marginTop: "20px" }} />   
   </div>
  );
}

export default HomePage;
