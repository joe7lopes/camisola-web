import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../../store/selectors';
import path from '../../../routes/path';
import ProductMiniatureCard from '../../ProductMiniatureCard';
import EditProduct from './edit/EditProduct';
import { IProduct } from '../../../types';
import { getDefaultImage } from '../../utils';

const ProductList = () => {
  const products = useSelector(getAllProducts);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  if (selectedProduct) {
    return <EditProduct product={selectedProduct}/>;
  }

  return (
    <>
            <Link to={path.CREATE_PRODUCT}>Adicionar Novo produto</Link>
            <h1 className="m-t-md">Produtos na loja</h1>
            <div className="row">
                {products.map((p) => (
                    <div key={p.id} onClick={() => setSelectedProduct(p)}>
                    <ProductMiniatureCard
                        name={p.name}
                        image={getDefaultImage(p.images)}
                        price={p.defaultPrice}
                    />
                    </div>
                ))}
            </div>


    </>
  );
};
export default ProductList;
