import {
    put, takeLatest,
} from 'redux-saga/effects';

import { PLACE_ORDER, IPlaceOrderAction, placeOrderPending, placeOrderFulfilled } from '../actions';

/*
* +++Executers+++
*/

function* placeOrder(order: IPlaceOrderAction) {
    yield put(placeOrderPending());
    yield put(placeOrderFulfilled(order.payload));
}

/*
 * +++Watchers+++
 */

export function* watchPlaceOrder() {
    yield takeLatest(PLACE_ORDER, placeOrder);
}
