import { all, fork } from 'redux-saga/effects';

import { watchfetchSettings, watchSaveSizes } from './settigs';


export default function* rootSaga() {
  yield all([
    fork(watchfetchSettings),
    fork(watchSaveSizes),
  ]);
}
