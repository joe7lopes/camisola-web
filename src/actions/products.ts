import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
} from './actionTypes';
import { IProduct } from '../types';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsFulfilled = (products: IProduct[]) => ({
  type: FETCH_PRODUCTS_FULFILLED,
  payload: products,
});
