import React from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';

const ClubPage = ({ camisolas }) => (
  <div className="c-body">
    <ProductList title="Camisolas" products={camisolas} />
    <ProductList title="Fatos de treino" products={camisolas} />
    <ProductList title="Equipamentos de Crianca" products={camisolas} />
  </div>
);

const mapStateToProps = ({ products }) => ({
  camisolas: [products[0]], // later filter by category

});

export default connect(mapStateToProps)(ClubPage);
