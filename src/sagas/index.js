import { all, fork } from 'redux-saga/effects';

import { watchfetchSettings, watchSaveSizes } from './settigs';
import { watchSavePersonalData } from './account';

export default function* rootSaga() {
  yield all([
    fork(watchfetchSettings),
    fork(watchSaveSizes),
    fork(watchSavePersonalData),
  ]);
}
