import React from 'react';
import ProductCard from './ProductCard';
import { IProduct } from '../types';
import { getDefaultImage } from './utils';

interface IProps {
  title: string,
  products: IProduct[]
}

const ProductList = ({ title, products }: IProps) => (
  <div className="m-t-md m-b-md">
    <h3>{title}</h3>
    <div className="c-category-container">
      {products.map((p) => (
        <div key={p.id} className="c-category-product">
          <ProductCard
            id={p.id}
            name={p.name}
            price={p.defaultPrice}
            image={getDefaultImage(p.images)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
