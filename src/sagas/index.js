import { all, fork } from 'redux-saga/effects';

import { watchFetchSettings, watchSaveSizes } from './settigs';
import { watchSavePersonalData } from './account';
import { watchFetchProducts } from './products';

export default function* rootSaga() {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchSettings),
    fork(watchSaveSizes),
    fork(watchSavePersonalData),
  ]);
}
