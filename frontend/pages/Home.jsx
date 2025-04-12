import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Bienvenido a ShoeShop</h1>
      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>{product.price} €</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));