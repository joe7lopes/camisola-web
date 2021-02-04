import { createSelector } from 'reselect';
import { IRootState, Category } from '../../types';

const getProducts = (state: IRootState) => state.products;

export const getAllProducts = createSelector(
  [getProducts],
  (products) => products,
);

export const getBenficaProducts = createSelector(
  [getProducts],
  (products) => products
    .filter((p) => p.visible)
    .filter((p) => p.categories.includes(Category.BENFICA)),
);

export const getPortoProducts = createSelector(
  [getProducts],
  (products) => products
    .filter((p) => p.visible)
    .filter((p) => p.categories.includes(Category.PORTO)),
);

export const getSportingProducts = createSelector(
  [getProducts],
  (products) => products
    .filter((p) => p.visible)
    .filter((p) => p.categories.includes(Category.SPORTING)),
);
