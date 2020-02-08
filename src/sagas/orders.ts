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

import history from '../routes/history';
import path from '../routes/path';
import { IOrder } from '../types';
/*
* +++Executers+++
*/

function* placeOrder({payload}: IPlaceOrderAction) {
    yield put(placeOrderPending());
    yield delay(3000)

    const order:IOrder = {
        orderId: '123',
        items:payload.items,
        shippingAddress: payload.shippingAddress,
        createdAt: new Date()
    } 

    yield put(placeOrderFulfilled(order));
    history.push(path.ORDER_SUMMARY(order.orderId))
    yield put(resetCart())
}

/*
 * +++Watchers+++
 */

export function* watchPlaceOrder() {
    yield takeLatest(PLACE_ORDER, placeOrder);
}
