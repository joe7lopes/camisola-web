import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_REJECTED,
} from './actionTypes';
import { IProduct } from '../types';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
});

export const fetchProductsFulfilled = (products: IProduct[]) => ({
  type: FETCH_PRODUCTS_FULFILLED,
  payload: products,
});

export const fetchProductsRejected = (err: string) => ({
  type: FETCH_PRODUCTS_REJECTED,
  payload: err,
});