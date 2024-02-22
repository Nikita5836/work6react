import React from 'react';
import { api } from '../api/axios.api';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  React.useEffect(() => {
    const fetchProductById = async () => {
      const responce = await api.get(`/product/${id}`);
      setProduct(responce.data);
    };
    fetchProductById();
  }, []);

  return (
    <div className="product_details">
      <div className="images">
        <div className="gallery">
          {product?.images?.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
        <div className="main_photo">
          <img src={product.thumbnail} alt="" />
        </div>
      </div>
      <h3 className="title">{product?.title}</h3>
      <p className="desc">{product?.description}</p>
      <b className="price">${product?.price} </b>
      <div className="brand">
        Brand:
        <span>{product?.brand}</span>
      </div>
      <div className="rate">
        Rate:
        <span>{product?.rating}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
