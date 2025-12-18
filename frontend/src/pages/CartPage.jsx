import React, { useEffect, useState } from "react";
import { getCartItems, addCartItem } from "../services/cart";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await getCartItems();
      setCart(res.data);
    };
    fetchCart();
  }, []);

  return (
    <div className="p-3">
      <h2>Cart</h2>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
      <button onClick={() => addCartItem(1)}>Add Product #1</button>
    </div>
  );
}

export default CartPage;
