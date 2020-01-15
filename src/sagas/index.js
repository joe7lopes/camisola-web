import { all, fork } from 'redux-saga/effects';

import { watchfetchSettings } from './settigs';


export default function* rootSaga() {
  yield all([
    fork(watchfetchSettings),
  ]);
}
