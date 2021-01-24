import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_ORDERS,
  FETCH_ORDERS_WITH_CRITERIA,
  fetchOrdersFulfilled,
  fetchOrdersPending,
  fetchOrdersRejected,
  IPlaceOrderAction,
  PLACE_ORDER,
  placeOrderFulfilled,
  placeOrderPending,
  placeOrderRejected,
  UPDATE_ORDER,
  updateOrderFulfilled,
  updateOrderPending,
  updateOrderRejected,
} from '../actions';

import api from './api';
import {ICreateOrderRequest, IOrder} from '../types';

/*
* +++Executers+++
*/

function* fetchOrdersExec(action: any) {
  yield put(fetchOrdersPending());
  try {
    const { page, pageSize } = action.payload;
    const { data } = yield call(api.get, `/api/orders?page=${page}&pageSize=${pageSize}`);
    yield put(fetchOrdersFulfilled(data));
  } catch (error) {
    yield put(fetchOrdersRejected(error));
  }
}

function* fetchOrdersWithCriteriaExec(action: any) {
  yield put(fetchOrdersPending());
  try {
    const { criteria } = action.payload;
    const params = { params: { ...criteria } };
    const { data } = yield call(api.get, '/api/orders', params);
    yield put(fetchOrdersFulfilled(data));
  } catch (error) {
    yield put(fetchOrdersRejected(error));
  }
}

function* updateOrderExec({ payload }: {type:string, payload:IOrder}) {
  yield put(updateOrderPending());
  const { id } = payload;
  try {
    yield call(api.put, `/api/orders/${id}`, { ...payload });
    yield put(updateOrderFulfilled({ ...payload }));
  } catch (error) {
    yield put(updateOrderRejected(error));
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
  } catch (errors) {
    const errorRef = errors.response.data[0].logref;
    yield put(placeOrderRejected(errorRef));
  }
}

/*
 * +++Watchers+++
 */

export function* watchFetchOrders() {
  yield takeLatest(FETCH_ORDERS, fetchOrdersExec);
}

export function* watchFetchOrdersWithCriteria() {
  yield takeLatest(FETCH_ORDERS_WITH_CRITERIA, fetchOrdersWithCriteriaExec);
}

export function* watchUpdateOrder() {
  yield takeLatest(UPDATE_ORDER.REQUESTED, updateOrderExec);
}

export function* watchPlaceOrder() {
  yield takeLatest(PLACE_ORDER, placeOrder);
}
