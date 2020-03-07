import { all, fork } from 'redux-saga/effects';

import { watchFetchSettings, watchUpdateSettings } from './settings';
import { watchSavePersonalData } from './account';
import { watchFetchProducts, watchCreateNewProduct } from './products';
import { watchAddToCart } from './cart';
import { watchPlaceOrder } from './orders';
import { watchResetPassword, watchSignIn, watchSignUp } from './auth';

export default function* rootSaga() {
  yield all([
    fork(watchFetchSettings),
    fork(watchUpdateSettings),
    fork(watchFetchProducts),
    fork(watchCreateNewProduct),
    fork(watchSavePersonalData),
    fork(watchAddToCart),
    fork(watchPlaceOrder),
    fork(watchSignIn),
    fork(watchSignUp),
    fork(watchResetPassword),
  ]);
}
