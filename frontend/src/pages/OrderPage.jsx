import React, { useEffect, useState } from "react";
import { getOrders, createOrder } from "../services/orders";

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await getOrders();
      setOrders(res.data);
    };
    fetchOrders();
  }, []);

  const handleCreateOrder = async () => {
    const newOrder = { product_id: 1, quantity: 2 };
    const res = await createOrder(newOrder);
    setOrders([...orders, res.data]);
  };

  return (
    <div className="p-3">
      <h2>Orders</h2>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
      <button onClick={handleCreateOrder}>Create Example Order</button>
    </div>
  );
}

export default OrderPage;
