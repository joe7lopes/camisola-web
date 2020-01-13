import React, { FunctionComponent } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './common/ProductCard';
import ProductList from './ProductList';

interface ClubPageProps {
  pageName: string;
}

const equipamentos = () => [1, 2, 3, 4].map((e, index) => <ProductCard key={index} />);

const equipamentosCrianca = () => [1, 2, 3, 4].map((e, index) => <ProductCard key={index} />);
const ClubPage: FunctionComponent<ClubPageProps> = ({ pageName }) => (
  <div className="c-body">
    <ProductList title="Camisolas" products={[1, 2, 3, 4]} />
    <ProductList title="Fatos de treino" products={[1, 2, 3, 4]} />
    <ProductList title="Equipamentos de Crianca" products={[1, 2, 3, 4]} />
  </div>
);

export default ClubPage;
