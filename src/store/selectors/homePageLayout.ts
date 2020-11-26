import { createSelector } from 'reselect';
import { IProduct, IRootState } from '../../types';
import { getBenficaProducts } from './products';

const homePageLayoutState = (state: IRootState) => state.homePageLayout;

const getBenficaProductsIdsOrder = createSelector(
  [homePageLayoutState],
  (state) => state.benficaProductsOrder,
);

export const getBenficaProductsForHomePage = createSelector(
  [getBenficaProducts, getBenficaProductsIdsOrder],
  (products, ids) => sortByProductsId(products, ids),
);

const sortByProductsId = (products: IProduct[], ids: string[]) => (ids.length > 0 ? products.sort((a, b) => {
  const aIndex = ids.indexOf(a.id);
  const bIndex = ids.indexOf(b.id);
  if (aIndex === -1 || bIndex === -1) return 1;
  return aIndex - bIndex;
}) : products);
