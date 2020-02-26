/* eslint-disable import/prefer-default-export */
import {
  put, takeLatest, call,
} from 'redux-saga/effects';

import {
  FETCH_PRODUCTS,
  fetchProductsFulfilled,
  fetchProductsPending,
  fetchProductsRejected,
  CREATE_PRODUCT,
  createProductPending,
  createProductRejected,
  createProductFulfilled,
} from '../actions';
import { ICreateProduct } from '../types';
import api from './api';
// import { products } from '../static_data';

/*
 * +++Executers+++
 */

function* fetchProducts() {
  yield put(fetchProductsPending());
  try {
    const { data } = yield call(api.get, '/products');
    yield put(fetchProductsFulfilled(data));
  } catch (err) {
    yield put(fetchProductsRejected(err));
  }
}

export interface ICreateProductAction {
  type: string,
  payload: ICreateProduct
}

function* createProductExec({ payload }: ICreateProductAction) {
  yield put(createProductPending());
  try {
    const { data } = yield call(api.post, '/products', payload);
    yield put(createProductFulfilled(data));
  } catch (err) {
    yield put(createProductRejected(err));
  }
}

/*
 * +++Watchers+++
 */

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export function* watchCreateNewProduct() {
  yield takeLatest(CREATE_PRODUCT, createProductExec);
}
