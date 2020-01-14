import React from 'react';
import ProductList from './ProductList';

const ClubPage = () => (
  <div className="c-body">
    <ProductList title="Camisolas" products={[1, 2, 3, 4]} />
    <ProductList title="Fatos de treino" products={[1, 2, 3, 4]} />
    <ProductList title="Equipamentos de Crianca" products={[1, 2, 3, 4]} />
  </div>
);

export default ClubPage;
