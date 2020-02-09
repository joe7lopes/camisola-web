/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const getProducts = (state: IRootState) => state.products;

export const getBenficaProducts = createSelector(
  [getProducts],
  (products) => products.filter((p) => p.categories.includes('benfica'))
);

export const getPortoProducts = createSelector(
  [getProducts],
  (products) => products.filter((p) => p.categories.includes('porto'))
);


export const getHomePageProducts = createSelector(
  [getBenficaProducts, getPortoProducts],
  (bp, pp) => [...bp, ...pp]
);

