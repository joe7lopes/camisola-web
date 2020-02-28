import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllProducts } from '../../store/selectors';
import ProductList from '../ProductList';
import { Category, IProduct } from '../../types';

const ClubPage = () => {
  const { pathname } = useLocation();
  const club = pathname.replace('/', '');
  const products = useSelector(getAllProducts);
  const clubProducts = filterProducts(club, products);
  const camisolas = filterProducts(Category.CAMISOLAS, clubProducts);
  const fatosDeTreino = filterProducts(Category.FATOS_DE_TREINO, clubProducts);
  const equipamentosCrianca = filterProducts(Category.EQUIPAMENTOS_CRIANCA, clubProducts);

  return (
        <div className="c-body">
            <ProductList title="Camisolas" products={camisolas}/>
            <ProductList title="Fatos de treino" products={fatosDeTreino}/>
            <ProductList title="Equipamentos de Crianca" products={equipamentosCrianca}/>
        </div>
  );
};

export default ClubPage;


const filterProducts = (category:string, products:IProduct[]) => products
  .filter((p) => p.categories
    .filter((c) => c.name === category).length > 0);
