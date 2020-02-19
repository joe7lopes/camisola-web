/* eslint-disable import/prefer-default-export */
import {
  put, takeLatest, call
} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PRODUCTS,
  fetchProductsFulfilled,
  fetchProductsPending,
  fetchProductsRejected,
  CREATE_PRODUCT,
  createProduct,
  createProductPending,
  createProductRejected,
  createProductFulfilled
} from '../actions';
import { IProduct } from '../types';
// import { products } from '../static_data';

/*
 * +++Watchers+++
 */

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export function* watchCreateNewProduct() {
  yield takeLatest(CREATE_PRODUCT, createProductExec)
}

/*
 * +++Executers+++
 */

function* fetchProducts() {
  yield put(fetchProductsPending());
  try {
    const { data } = yield call(api, '/products')
    yield put(fetchProductsFulfilled(data));
  } catch (err) {
    yield put(fetchProductsRejected(err));
  }
}

export interface ICreateProduct {
  type: string,
  payload: IProduct
}

function* createProductExec({ payload }: ICreateProduct) {
  yield put(createProductPending());
  try {
    const { data } = yield call(() => {
      axios.post('/products', payload)
    })
    yield put(createProductFulfilled(data));
  } catch (err) {
    yield put(createProductRejected(err));
  }
}

const api = (url: string) => axios.get(url)