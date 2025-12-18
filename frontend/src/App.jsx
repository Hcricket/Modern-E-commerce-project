import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
    <h1>ECOMMERCE</h1>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}
