import {
  put, takeLatest, call,
} from 'redux-saga/effects';

import {
  SIGN_IN,
  SIGN_UP,
  RESET_PASSWORD,
  ISignInAction,
  signInRejected,
  signInFulfilled,
  signInPending,
  signUpPending,
  signUpFulfilled,
  signUpRejected,
  resetPasswordPending,
  resetPasswordFulfilled,
  resetPasswordRejected,
} from '../actions';

import api from './api';

/*
* +++Executers+++
*/

function* signIn({ payload }: ISignInAction) {
  try {
    yield put(signInPending());
    const { authToken } = yield call(api.post, '/auth/signin', payload);
    yield put(signInFulfilled(authToken));
  } catch (err) {
    yield put(signInRejected(err.response.data.error));
  }
}

function* signUp({ payload }: any) {
  try {
    yield put(signUpPending());
    yield call(api.post, '/auth/signup', payload);
    yield put(signUpFulfilled());
  } catch (err) {
    yield put(signUpRejected(err.response.data.error));
  }
}

function* resetPassword(action: any) {
  try {
    yield put(resetPasswordPending());
    yield call(api.post, '/auth/reset', action.payload);
    yield put(resetPasswordFulfilled());
  } catch (err) {
    yield put(resetPasswordRejected(err.response.data.error));
  }
}

/*
 * +++Watchers+++
 */

export function* watchSignIn() {
  yield takeLatest(SIGN_IN, signIn);
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUp);
}

export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPassword);
}
