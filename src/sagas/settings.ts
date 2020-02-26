import {
  put, takeLatest, call,
} from 'redux-saga/effects';

import {
  FETCH_SETTINGS,
  UPDATE_SETTINGS,
  fetchSettingsPending,
  fetchSettingsFulfilled,
  updateSettingsFulfilled,
  updateSettingsPending,
  updateSettingsRejected,
  fetchSettingsRejected,
} from '../actions';

import { ISaveSizesAction } from '../types';
import api from './api';

/*
 * +++Executers+++
 */

function* fetchSettings() {
  yield put(fetchSettingsPending());

  try {
    const { data } = yield call(api.get, '/settings');
    yield put(fetchSettingsFulfilled(data));
  } catch (err) {
    yield put(fetchSettingsRejected(err));
  }
}

function* updateSettingsExec({ payload }: ISaveSizesAction) {
  yield put(updateSettingsPending());
  try {
    const { data } = yield call(api.put, '/settings', payload);
    yield put(updateSettingsFulfilled(data));
  } catch (err) {
    yield put(updateSettingsRejected(err));
  }
}

/*
 * +++Watchers+++
 */

export function* watchFetchSettings() {
  yield takeLatest(FETCH_SETTINGS, fetchSettings);
}

export function* watchUpdateSettings() {
  yield takeLatest(UPDATE_SETTINGS, updateSettingsExec);
}
