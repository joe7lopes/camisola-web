import React from 'react';
import ProductCard from './ProductCard';
import { IProduct, IImage } from '../types';

interface IProps {
  title: string,
  products: IProduct[]
}

const ProductList = ({ title, products }: IProps) => (
  <div className="m-t-md m-b-md">
    <h3>{title}</h3>
    <div className="c-category-container">
      {products.map((p) => (
        <div key={p.pid} className="c-category-product">
          <ProductCard
            id={p.pid}
            name={p.name}
            price={35}
            image={getDefaultImageUrl(p.images)}
          />
        </div>
      ))}
    </div>
  </div>
);

const getDefaultImageUrl = (images: IImage[]) => {
  const defaultImage = images.filter((i) => i.isDefault)[0];
  return defaultImage.url;
};

export default ProductList;
