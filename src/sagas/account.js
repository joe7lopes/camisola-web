import {
  put, takeLatest,
} from 'redux-saga/effects';

import { SAVE_PERSONAL_DATA, savePersonalDataFulfilled } from '../actions';


/*
 * +++Executers+++
 */

function* savePersonalData({ payload }) {
  yield put(savePersonalDataFulfilled(payload));
}

/*
 * +++Watchers+++
 */

export function* watchSavePersonalData() {
  yield takeLatest(SAVE_PERSONAL_DATA, savePersonalData);
}
