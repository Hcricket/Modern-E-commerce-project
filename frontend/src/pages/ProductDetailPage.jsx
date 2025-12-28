// src/pages/ProductDetailPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../services/product';
import { addCartItem } from '../services/cart';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");   // <-- NEW

  useEffect(() => {
    getProductDetail(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleAddToCart = async () => {
    await addCartItem({ product_id: product.id, quantity: 1 });
    setMessage("Added to cart!");               // <-- SHOW MESSAGE

    setTimeout(() => setMessage(""), 2000);     // <-- HIDE AFTER 2 SECONDS
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>

      <img
        src={product.image_url}
        alt={product.name}
        style={{ width: '300px', borderRadius: '8px' }}
      />

      <p>{product.description}</p>
      <p style={{ fontWeight: 'bold', color: 'green' }}>${product.price}</p>

      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          transition: "background-color 0.2s ease, transform 0.1s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        onMouseDown={(e) => (e.target.style.backgroundColor = "#1e40af")}
        onMouseUp={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
      >
        Add to Cart
      </button>

      {/* SUCCESS MESSAGE */}
      {message && (
        <p style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default ProductDetailPage;
