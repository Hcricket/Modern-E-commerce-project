import React, { useEffect, useState } from "react";
import { getCartItems, addCartItem, removeCartItem } from "../services/cart";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const refreshCart = async () => {
    const res = await getCartItems();
    setCart(res.data);
  };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <div className="p-3">
      <h2>Cart</h2>

      <div>
        {cart.items?.map((item) => (
          <div key={item.id} style={{ display: "flex", marginBottom: "1rem" }}>
            
            {/* Product Image */}
            <img
              src={item.product_image}   // <-- FIXED HERE
              alt={item.product_name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "6px",
                marginRight: "1rem",
              }}
            />

            {/* Product Info */}
            <div style={{ flex: 1 }}>
              <h4>{item.product_name}</h4>
              <p>${item.product_price}</p>

              {/* Quantity Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                
                {/* Increase */}
                <button
                  onClick={async () => {
                    await addCartItem({ product_id: item.product, quantity: 1 });
                    refreshCart();
                  }}
                  style={{
                    padding: "0.3rem 0.6rem",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>

                <span>{item.quantity}</span>

                {/* Decrease */}
                <button
                  onClick={async () => {
                    await removeCartItem({ product_id: item.product });
                    refreshCart();
                  }}
                  style={{
                    padding: "0.3rem 0.6rem",
                    backgroundColor: "#dc2626",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  –
                </button>

                {/* FULL REMOVE BUTTON */}
                <button
                  onClick={async () => {
                    for (let i = 0; i < item.quantity; i++) {
                      await removeCartItem({ product_id: item.product });
                    }
                    refreshCart();
                  }}
                  style={{
                    padding: "0.3rem 0.6rem",
                    backgroundColor: "#6b7280",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginLeft: "0.5rem",
                  }}
                >
                  Remove
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Button */}
      <button
        onClick={() => navigate("/checkout")}
        style={{
          marginTop: "1rem",
          padding: "0.7rem 1.2rem",
          backgroundColor: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartPage;
