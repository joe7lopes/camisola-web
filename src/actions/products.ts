import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_REJECTED,
  CREATE_PRODUCT,
  CREATE_PRODUCT_PENDING,
  CREATE_PRODUCT_FULFILLED, CREATE_PRODUCT_REJECTED,
} from './actionTypes';
import { IProduct, ICreateProduct } from '../types';

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

export const createProduct = (product: ICreateProduct) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

export const createProductPending = () => ({
  type: CREATE_PRODUCT_PENDING,
});

export const createProductFulfilled = (product: IProduct) => ({
  type: CREATE_PRODUCT_FULFILLED,
  payload: product,
});

export const createProductRejected = (err: string) => ({
  type: CREATE_PRODUCT_REJECTED,
  payload: err,
});
