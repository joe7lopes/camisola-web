import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_SETTINGS,
  fetchSettingsFulfilled,
  fetchSettingsPending,
  fetchSettingsRejected,
  UPDATE_SETTINGS,
  updateSettingsFulfilled,
  updateSettingsPending,
  updateSettingsRejected,
} from '../actions';

import { ISaveSizesAction, ISettings } from '../types';
import api from './api';

/*
 * +++Executers+++
 */

function* fetchSettings() {
  yield put(fetchSettingsPending());

  try {
    // const { data } = yield call(api.get, '/api/settings');
    const data: ISettings = {
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      stampingExtraCost: 12,
      productDefaultPrice: 35,
      productCategories: [{ name: 'benfica', displayName: 'Benfica' }],
    };
    yield put(fetchSettingsFulfilled(data));
  } catch (err) {
    yield put(fetchSettingsRejected(err));
  }
}

function* updateSettingsExec({ payload }: ISaveSizesAction) {
  yield put(updateSettingsPending());
  try {
    const { data } = yield call(api.put, '/api/settings', payload);
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
