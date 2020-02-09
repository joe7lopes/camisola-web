/* eslint-disable import/prefer-default-export */
import {
  put, takeLatest,
} from 'redux-saga/effects';

import { FETCH_PRODUCTS, fetchProductsFulfilled, fetchProductsPending } from '../actions';
import { products } from '../static_data';

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
  yield put(fetchProductsFulfilled(products));
}
