import { call, put, takeLatest } from 'redux-saga/effects';
import {
  UPDATE_FB_TOKEN,
  updateFbTokenFulfilled,
  updateFbTokenPending,
  updateFbTokenRejected,
} from './actions';
import api from '../../../../sagas/api';

function* updateFbTokenExec({ payload } : any) {
  yield put(updateFbTokenPending());

  const { token } = payload;
  const userToken = {
    userToken: token,
  };

  try {
    const { data } = yield call(api.post, '/api/fb', userToken);
    yield put(updateFbTokenFulfilled(data));
  } catch (err) {
    yield put(updateFbTokenRejected(err));
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchUpdateFBToken() {
  yield takeLatest(UPDATE_FB_TOKEN.REQUESTED, updateFbTokenExec);
}
