import {
    put, takeLatest,
} from 'redux-saga/effects';

import { ADD_TO_CART, addToCartFulfilled, ICartAction } from '../actions';

/*
* +++Executers+++
*/

function* addToCart(product: ICartAction){
    console.log('action', product);
    yield put(addToCartFulfilled(product.payload));
  }


/*
 * +++Watchers+++
 */

export function* watchAddToCart() {
    yield takeLatest(ADD_TO_CART, addToCart);
}