import { all, fork } from 'redux-saga/effects';

import { watchFetchSettings, watchUpdateSettings } from './settings';
import { watchSavePersonalData } from './account';
import { watchFetchProducts } from './products';
import { watchAddToCart } from './cart';
import { watchPlaceOrder } from './orders';

export default function* rootSaga() {
  yield all([
    fork(watchUpdateSettings),
    fork(watchFetchSettings),
    fork(watchFetchProducts),
    fork(watchSavePersonalData),
    fork(watchAddToCart),
    fork(watchPlaceOrder),
  ]);
}
