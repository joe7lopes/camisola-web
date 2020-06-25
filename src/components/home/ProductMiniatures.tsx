import React from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../store/selectors';
import { getDefaultImage } from '../utils';
import ProductMiniatureCard from '../ProductMiniatureCard';

const ProductMiniatures = () => {
  const products = useSelector(getAllProducts);

  return (
        <div>
            <h1>duh</h1>
            {products.map((p) => <ProductMiniatureCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.defaultPrice}
                image={getDefaultImage(p.images) }
                className="miniature_card m-l-sm m-b-lg"
            />)}
        </div>
  );
};

export default ProductMiniatures;
