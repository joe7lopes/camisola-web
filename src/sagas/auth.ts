import {
  put, takeLatest, call,
} from 'redux-saga/effects';

import {
  SIGN_IN,
  ISignInAction,
  signInRejected,
  signInFulfilled, signInPending, SIGN_UP, signUpPending, signUpFulfilled, signUpRejected,
} from '../actions';
import api from './api';

/*
* +++Executers+++
*/

function* signIn({ payload }: ISignInAction) {
  try {
    yield put(signInPending());
    const { authToken } = yield call(api.post, '/auth/sign-in', payload);
    yield put(signInFulfilled(authToken));
  } catch (err) {
    yield put(signInRejected(err));
  }
}

function* signUp({ payload }: any) {
  try {
    yield put(signUpPending());
    yield call(api.post, '/auth/sign-up', payload);
    yield put(signUpFulfilled());
  } catch (err) {
    yield put(signUpRejected(err));
  }
}

/*
 * +++Watchers+++
 */

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUp);
}

export function* watchSignIn() {
  yield takeLatest(SIGN_IN, signIn);
}
