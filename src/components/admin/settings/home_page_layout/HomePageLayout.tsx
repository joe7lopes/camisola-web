import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBenficaProducts, getPortoProducts, getSportingProducts } from '../../../../store/selectors';
import OrderProductsTable from './OrderProductsTable';
import { Category, IProduct } from '../../../../types';
import { saveHomePageLayout } from '../../../../actions';
import {Link} from "react-router-dom";


export default function HomePageLayout() {
  const dispatch = useDispatch();
  const benficaProducts = useSelector(getBenficaProducts).slice(0, 12);
  const portoProducts = useSelector(getPortoProducts).slice(0, 12);
  const sportingProducts = useSelector(getSportingProducts).slice(0, 12);

  if (benficaProducts.length < 1 || portoProducts.length < 1 || sportingProducts.length < 1) {
    return <div> loading...</div>;
  }

  const saveBenficaProductDisplayOrder = (orderedProducts: IProduct[]) => {
    const ids = orderedProducts.map((p) => p.id);
    dispatch(saveHomePageLayout(ids, Category.BENFICA));
  };

  return (
    <>
      <h6>Produtos benfica na home page</h6>
      <OrderProductsTable products={benficaProducts} onSave={saveBenficaProductDisplayOrder} />
      <Link to="/">go to home</Link>
    </>
  );
}
