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
  ISaveSizesAction,
} from '../actions';

import {ISettings} from '../types';

/*
 * +++Executers+++
 */

function* fetchSettings() {
  const settings: ISettings = {
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stampingExtraCost: 12
  };
  yield put(fetchSettingsFulfilled(settings));
}

function* saveNewSizes(sizes: ISaveSizesAction) {
  yield put(saveSizesFulfilled(sizes.payload));
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
