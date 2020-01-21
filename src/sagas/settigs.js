import {
  put, takeLatest,
} from 'redux-saga/effects';

import {
  FETCH_SETTINGS,
  SAVE_SIZES,
} from '../actions/actionTypes';

import {
  fetchSettingsFulfilled,
  saveSizesFulfilled,
} from '../actions';

/*
 * +++Executers+++
 */

function* fetchSettings() {
  const settings = {
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  };
  yield put(fetchSettingsFulfilled(settings));
}

function* saveNewSizes(sizes) {
  yield put(saveSizesFulfilled(sizes));
}

/*
 * +++Watchers+++
 */

export function* watchFetchSettings() {
  yield takeLatest(FETCH_SETTINGS, fetchSettings);
}

export function* watchSaveSizes() {
  yield takeLatest(SAVE_SIZES, saveNewSizes);
}
