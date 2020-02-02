import { all, fork } from 'redux-saga/effects';

import { watchFetchSettings, watchSaveSizes } from './settigs';
import { watchSavePersonalData } from './account';
import { watchFetchProducts } from './products';
import { watchAddToCart } from './cart';
import { watchPlaceOrder } from './orders';

export default function* rootSaga() {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchSettings),
    fork(watchSaveSizes),
    fork(watchSavePersonalData),
    fork(watchAddToCart),
    fork(watchPlaceOrder),
  ]);
}
