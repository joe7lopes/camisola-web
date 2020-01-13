import React from 'react';
import ProductCard from './common/ProductCard';

const ProductList = ({ title, products }) => (
  <div className="m-t-md m-b-md">
    <h3>{title}</h3>
    <div className="c-category-container">
      {products.map((p, index) => (
        <div key={index} id="product" className="c-category-product">
          <ProductCard />
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
