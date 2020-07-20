import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import {
  CREATE_PRODUCT_FULFILLED, DELETE_IMAGES, DELETE_IMAGES_FULFILLED, DELETE_PRODUCT_FULFILLED,
  FETCH_IMAGES,
  fetchImagesFulfilled,
  fetchImagesPending,
  fetchImagesRejected, UPDATE_PRODUCT_FULFILLED,
  UPLOAD_IMAGES, UPLOAD_IMAGES_FULFILLED,
} from '../actions';
import api from './api';
import {
  deleteImagesFulfilled,
  deleteImagesPending, deleteImagesRejected,
  uploadImagesFulfilled,
  uploadImagesPending,
  uploadImagesRejected,
} from '../actions/images';

/*
 * +++Executers+++
 */
const toBase64 = (file:any, img:any) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve({ ...img, file: reader.result });
  reader.onerror = (error) => reject(error);
});

function* fetchImagesExec() {
  yield put(fetchImagesPending());
  try {
    const { data } = yield call(api.get, '/api/images');
    yield put(fetchImagesFulfilled(data));
  } catch (err) {
    yield put(fetchImagesRejected(err));
  }
}

function* uploadImagesExec({ payload }: any) {
  yield put(uploadImagesPending());
  try {
    const transformedImages = yield all(payload.map((img:any) => call(toBase64, img.file, img)));
    const dataToSave = yield [...transformedImages];

    yield call(api.post, '/api/images', dataToSave);
    yield put(uploadImagesFulfilled());
  } catch (err) {
    yield put(uploadImagesRejected(err));
  }
}

function* deleteImagesExec({ payload }: any) {
  yield put(deleteImagesPending());
  try {
    yield call(api.delete, '/api/images', payload);
    yield put(deleteImagesFulfilled());
  } catch (err) {
    yield put(deleteImagesRejected(err));
  }
}

/*
 * +++Watchers+++
 */

export function* watchFetchImages() {
  yield takeLatest(FETCH_IMAGES, fetchImagesExec);
}

export function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES, uploadImagesExec);
}

export function* watchDeleteImages() {
  yield takeLatest(DELETE_IMAGES, deleteImagesExec);
}

export function* watchImagesChanges() {
  yield takeLatest([
    UPLOAD_IMAGES_FULFILLED,
    DELETE_IMAGES_FULFILLED,
  ], fetchImagesExec);
}
