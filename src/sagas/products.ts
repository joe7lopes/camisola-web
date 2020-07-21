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
  UPDATE_PRODUCT,
  updateProductPending,
  updateProductFulfilled,
  updateProductRejected,
  DELETE_PRODUCT,
  deleteProductPending,
  deleteProductFulfilled,
  deleteProductRejected,
  CREATE_PRODUCT_FULFILLED,
  UPDATE_PRODUCT_FULFILLED,
  DELETE_PRODUCT_FULFILLED,
} from '../actions';
import { ICreateProduct } from '../types';
import api from './api';

/*
 * +++Executers+++
 */

function* fetchProducts() {
  yield put(fetchProductsPending());
  try {
    const { data } = yield call(api.get, '/api/products');
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
    const { data } = yield call(api.post, '/api/products', payload);
    yield put(createProductFulfilled(data));
  } catch (err) {
    yield put(createProductRejected(err));
  }
}

function* updateProductExec({ payload }:any) {
  yield put(updateProductPending());
  try {
    const { data } = yield call(api.put, `/api/products/${payload.id}`, payload);
    yield put(updateProductFulfilled(data));
  } catch (err) {
    yield put(updateProductRejected(err));
  }
}

function* deleteProductExec({ payload }:any) {
  yield put(deleteProductPending());
  try {
    const { data } = yield call(api.delete, `/api/products/${payload}`);
    yield put(deleteProductFulfilled(data));
  } catch (err) {
    yield put(deleteProductRejected(err));
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

export function* watchUpdateProduct() {
  yield takeLatest(UPDATE_PRODUCT, updateProductExec);
}

export function* watchDeleteProduct() {
  yield takeLatest(DELETE_PRODUCT, deleteProductExec);
}

export function* watchProductChanges() {
  yield takeLatest([
    CREATE_PRODUCT_FULFILLED,
    UPDATE_PRODUCT_FULFILLED,
    DELETE_PRODUCT_FULFILLED,
  ], fetchProducts);
}
