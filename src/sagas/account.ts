import {
  put, takeLatest,
} from 'redux-saga/effects';

import {
  SAVE_PERSONAL_DATA,
  savePersonalDataFulfilled
} from '../actions';

/*
 * +++Watchers+++
 */

export function* watchSavePersonalData() {
  yield takeLatest(SAVE_PERSONAL_DATA, savePersonalData);
}

/*
 * +++Executers+++
 */

function* savePersonalData() {
  yield put(savePersonalDataFulfilled());
}

