import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_ORDERS, fetchOrdersFulfilled,
  fetchOrdersPending, fetchOrdersRejected,
  IPlaceOrderAction,
  PLACE_ORDER,
  placeOrderFulfilled,
  placeOrderPending,
  placeOrderRejected,
} from '../actions';

import api from './api';
import { ICreateOrderRequest } from '../types';

/*
* +++Executers+++
*/

function* fetchOrders() {
  yield put(fetchOrdersPending());
  try {
    const { data } = yield call(api.get, '/api/orders');
    yield put(fetchOrdersFulfilled(data.orders));
  } catch (error) {
    yield put(fetchOrdersRejected(error));
  }
}

function* placeOrder({ payload }: IPlaceOrderAction) {
  yield put(placeOrderPending());
  const items = payload.items.map((item) => ({
    productId: item.product.id,
    sizeId: item.size.id || '',
    stampingName: item.stampingName,
    stampingNumber: item.stampingNumber,
  }));

  const request: ICreateOrderRequest = {
    items,
    shippingAddress: payload.shippingAddress,
  };

  try {
    const { data } = yield call(api.post, '/api/orders', request);
    yield put(placeOrderFulfilled(data.orderId));
  } catch (error) {
    yield put(placeOrderRejected(error));
  }
}

/*
 * +++Watchers+++
 */

export function* watchFetchOrders() {
  yield takeLatest(FETCH_ORDERS, fetchOrders);
}

export function* watchPlaceOrder() {
  yield takeLatest(PLACE_ORDER, placeOrder);
}
