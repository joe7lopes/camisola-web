import { all, fork } from 'redux-saga/effects';

import { watchFetchSettings, watchUpdateSettings } from './settings';
import {
  watchFetchProducts,
  watchCreateNewProduct,
  watchUpdateProduct,
  watchDeleteProduct,
  watchProductChanges,
  watchFetchImages,
} from './products';

import { watchAddToCart } from './cart';
import {
  watchFetchOrders,
  watchPlaceOrder,
  watchUpdateOrderStatus,
} from './orders';

import {
  watchResetPassword,
  watchSignIn,
  watchSignOut,
  watchSignUp,
} from './auth';

export default function* rootSaga() {
  yield all([
    fork(watchFetchSettings),
    fork(watchUpdateSettings),
    fork(watchFetchImages),
    fork(watchFetchProducts),
    fork(watchProductChanges),
    fork(watchCreateNewProduct),
    fork(watchUpdateProduct),
    fork(watchDeleteProduct),
    fork(watchFetchOrders),
    fork(watchPlaceOrder),
    fork(watchUpdateOrderStatus),
    fork(watchAddToCart),
    fork(watchSignIn),
    fork(watchSignOut),
    fork(watchSignUp),
    fork(watchResetPassword),
  ]);
}
