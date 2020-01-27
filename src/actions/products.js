import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
} from './actionTypes';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsFulfilled = (products) => ({
  type: FETCH_PRODUCTS_FULFILLED,
  payload: products,
});
