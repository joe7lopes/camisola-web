import {
  put, takeLatest,
} from 'redux-saga/effects';

import { FETCH_SETTINGS, _FULFILLED } from '../actions/actionTypes';

export function* watchfetchSettings() {
  yield takeLatest(FETCH_SETTINGS, fetchSettings);
}


function* fetchSettings() {
  const settings = ['L', 'M'];
  yield put({ type: FETCH_SETTINGS + _FULFILLED, payload: settings });
}
