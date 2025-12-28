import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/product";
import { addCartItem } from "../services/cart";
import CartPage from "./CartPage";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-3">
      <h2>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "white",
                cursor: "pointer",
                transition: "box-shadow 0.2s ease, transform 0.1s ease",
              }}
            >
              <img
                src={product.image_url}
                alt={product.name}
                onError={() => console.log("Image failed:", product.image_url)}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  marginBottom: "0.75rem",
                }}
              />

              <h3 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
                {product.name}
              </h3>

              <p style={{ fontWeight: 600, color: "#16a34a" }}>
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
