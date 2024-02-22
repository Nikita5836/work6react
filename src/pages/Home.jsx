// import React from 'react'
import { useEffect, useState } from 'react';
import { api } from '../api/axios.api';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      const responce = await api.get('/products');
      setItems(responce.data.products);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="products">
        {items &&
          items.map((item) => (
            <div key={item.id} className="product" onClick={() => navigate(`/product/${item.id}`)}>
              <img src={item.thumbnail} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <b>${item.price}</b>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
