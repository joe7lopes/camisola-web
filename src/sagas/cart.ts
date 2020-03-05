import {
  put, takeLatest,
} from 'redux-saga/effects';

import {
  ADD_TO_CART,
  addToCartFulfilled,
  ICartAction,
} from '../actions';

/*
* +++Executers+++
*/

function* addToCart(product: ICartAction) {
  yield put(addToCartFulfilled(product.payload));
}


/*
 * +++Watchers+++
 */

// eslint-disable-next-line import/prefer-default-export
export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCart);
}
