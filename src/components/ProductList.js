import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ title, products }) => (
  <div className="m-t-md m-b-md">
    <h3>{title}</h3>
    <div className="c-category-container">
      {products.map((p) => (
        <div key={p.id} className="c-category-product">
          <ProductCard
            id={p.id}
            name={p.name}
            price={35}
            image={getDefaultImageUrl(p.images)}
          />
        </div>
      ))}
    </div>
  </div>
);

const getDefaultImageUrl = (images) => {
  const defaultImage = images.filter((i) => i.isDefault)[0];
  return defaultImage.url;
};

export default ProductList;
