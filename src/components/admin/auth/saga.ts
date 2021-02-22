import {
  put, takeLatest, call,
} from 'redux-saga/effects';


import api from '../../../sagas/api';
import {
  SIGN_IN_ADMIN, signInFulfilled, signInPending, signInRejected,
} from './actions';

const USER_TOKEN = 'camisola10-u-token';
/*
* +++Executers+++
*/

function* signIn({ payload }: any) {
  try {
    yield put(signInPending());
    const { data } = yield call(api.post, '/api/users/sign-in', payload);
    const { token } = data;
    if (token) {
      api.setAuth(data.token);
      localStorage.setItem(USER_TOKEN, token);
    }
    yield put(signInFulfilled(token));
  } catch (err) {
    yield put(signInRejected(err.response.data[0].message));
  }
}

// function* signOut() {
//   yield put(signOutPending());
//   yield localStorage.removeItem(USER_TOKEN);
//   yield put(signOutFulfilled());
// }

/*
 * +++Watchers+++
 */

// eslint-disable-next-line import/prefer-default-export
export function* watchSignIn() {
  yield takeLatest(SIGN_IN_ADMIN.REQUESTED, signIn);
}

// export function* watchSignOut() {
//   yield takeLatest(SIGN_OUT, signOut);
// }
