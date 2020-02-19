/* eslint-disable import/prefer-default-export */
import {
  put, takeLatest, call
} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_PRODUCTS, fetchProductsFulfilled, fetchProductsPending, fetchProductsRejected } from '../actions';
// import { products } from '../static_data';

/*
 * +++Watchers+++
 */

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

/*
 * +++Executers+++
 */


function* fetchProducts() {
  yield put(fetchProductsPending());
  try {
    const { data } = yield call(api, 'products')
    yield put(fetchProductsFulfilled(data));
  } catch (err) {
    yield put(fetchProductsRejected(err));
  }
}

const api = (url: string) => axios.get(url)