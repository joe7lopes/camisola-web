import { createSelector } from 'reselect';
import { IRootState, Category } from '../../types';

const getProducts = (state: IRootState) => state.products;

export const getAllProducts = createSelector(
  [getProducts],
  (products) => products,
);

export const getBenficaProducts = createSelector(
  [getProducts],
  (products) => products.filter((p) => p.categories.filter((c) => c.name === Category.BENFICA).length > 0),
);

export const getPortoProducts = createSelector(
  [getProducts],
  (products) => products.filter((p) => p.categories.filter((c) => c.name === Category.PORTO).length > 0),
);

export const getSportingProducts = createSelector(
  [getProducts],
  (products) => products.filter((p) => p.categories.filter((c) => c.name === Category.SPORTING).length > 0),
);
