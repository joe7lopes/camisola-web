import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBenficaProductsForHomePage, getPortoProducts, getSportingProducts } from '../../../../store/selectors';
import OrderProductsTable from './OrderProductsTable';
import { Category, IProduct } from '../../../../types';
import { saveHomePageLayout } from '../../../../actions';


export default function HomePageLayout() {
  const dispatch = useDispatch();
  const benficaProducts = useSelector(getBenficaProductsForHomePage).slice(0, 12);
  const portoProducts = useSelector(getPortoProducts).slice(0, 12);
  const sportingProducts = useSelector(getSportingProducts).slice(0, 12);

  if (benficaProducts.length < 1 || portoProducts.length < 1 || sportingProducts.length < 1) {
    return <div> loading...</div>;
  }

  const saveProductDisplayOrder = (orderedProducts: IProduct[], category: Category) => {
    const ids = orderedProducts.map((p) => p.id);
    dispatch(saveHomePageLayout(ids, category));
  };

  return (
    <>
      <div className="m-b-lg">
      <h5>Produtos benfica na home page</h5>
      <OrderProductsTable
          products={benficaProducts}
          onSave={(ids) => saveProductDisplayOrder(ids, Category.BENFICA)} />
      </div>
      <div className="m-b-lg">
      <h5>Produtos Sporting na home page</h5>
      <OrderProductsTable
          products={sportingProducts}
          onSave={(ids) => saveProductDisplayOrder(ids, Category.SPORTING)} />
      </div>
      <h5>Produtos Porto na home page</h5>
      <OrderProductsTable
          products={portoProducts}
          onSave={(ids) => saveProductDisplayOrder(ids, Category.PORTO)} />
    </>
  );
}
