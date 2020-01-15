import {
  put, takeLatest,
} from 'redux-saga/effects';

import { FETCH_SETTINGS, FETCH_SETTINGS_SUCCESS } from '../actions/actionTypes';
import { fetchSettingsSuccess } from '../actions';

export function* watchfetchSettings() {
  yield takeLatest(FETCH_SETTINGS, fetchSettings);
}


function* fetchSettings() {
  const settings = { sizes: ['L', 'M'] };
  yield put(fetchSettingsSuccess(settings));
}
