import {
  put, takeLatest, call,
} from 'redux-saga/effects';

import {
  PLACE_ORDER,
  IPlaceOrderAction,
  placeOrderPending,
  placeOrderFulfilled,
} from '../actions';

import api from './api';
import { ICreateOrderRequest } from '../types';

/*
* +++Executers+++
*/

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

  const { data } = yield call(api.post, '/api/orders', request);

  yield put(placeOrderFulfilled(data.orderId));
}

/*
 * +++Watchers+++
 */

export function* watchPlaceOrder() {
  yield takeLatest(PLACE_ORDER, placeOrder);
}
