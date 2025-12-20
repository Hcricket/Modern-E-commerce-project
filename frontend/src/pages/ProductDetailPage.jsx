// src/pages/ProductDetailPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../services/product';
import { addCartItem } from '../services/cart';
function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetail(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

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
       <button onClick={() => addCartItem(id)}>Add Product </button>
    </div>
  );
}

export default ProductDetailPage;
