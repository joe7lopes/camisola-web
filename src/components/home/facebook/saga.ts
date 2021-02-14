import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_FB_REVIEWS,
  fetchFbReviewsFulfilled,
  fetchFbReviewsPending,
  fetchFbReviewsRejected,
} from './actions';
import api from '../../../sagas/api';


function* fetchFbReviewExec() {
  yield put(fetchFbReviewsPending());
  try {
    const { data } = yield call(api.get, '/api/fb/reviews');
    yield put(fetchFbReviewsFulfilled(data.data));
  } catch (err) {
    yield put(fetchFbReviewsRejected(err));
  }
}


// eslint-disable-next-line import/prefer-default-export
export function* watchFetchFbReviews() {
  yield takeLatest(FETCH_FB_REVIEWS.REQUESTED, fetchFbReviewExec);
}
