import {
    put, takeLatest, delay,
} from 'redux-saga/effects';

import {
    PLACE_ORDER,
    IPlaceOrderAction,
    placeOrderPending,
    placeOrderFulfilled,
    resetCart
} from '../actions';

/*
* +++Executers+++
*/

function* placeOrder(order: IPlaceOrderAction) {
    yield put(placeOrderPending());
    yield delay(3000)

    yield put(placeOrderFulfilled(order.payload));
    yield put(resetCart())
}

/*
 * +++Watchers+++
 */

export function* watchPlaceOrder() {
    yield takeLatest(PLACE_ORDER, placeOrder);
}
