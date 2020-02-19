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

import { IOrder } from '../types';



/*
 * +++Watchers+++
 */

export function* watchPlaceOrder() {
    yield takeLatest(PLACE_ORDER, placeOrder);
}

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
    yield put(resetCart())
}
