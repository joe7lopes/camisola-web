/* eslint-disable import/prefer-default-export */
import {
  put, takeLatest, call, all,
} from 'redux-saga/effects';

import {
  FETCH_PRODUCTS,
  fetchProductsFulfilled,
  fetchProductsPending,
  fetchProductsRejected,
  CREATE_PRODUCT,
  createProductPending,
  createProductRejected,
  createProductFulfilled,
  UPDATE_PRODUCT,
  updateProductPending,
  updateProductFulfilled,
  updateProductRejected,
  DELETE_PRODUCT,
  deleteProductPending,
  deleteProductFulfilled,
  deleteProductRejected,
  CREATE_PRODUCT_FULFILLED,
  UPDATE_PRODUCT_FULFILLED,
  DELETE_PRODUCT_FULFILLED,
  FETCH_IMAGES,
  fetchImagesPending,
  fetchImagesFulfilled,
  fetchImagesRejected,
} from '../actions';
import { ICreateProduct } from '../types';
import api from './api';

/*
 * +++Executers+++
 */

function* fetchImagesExec() {
  yield put(fetchImagesPending());
  try {
    const { data } = yield call(api.get, '/api/products/images');
    yield put(fetchImagesFulfilled(data));
  } catch (err) {
    yield put(fetchImagesRejected(err));
  }
}

function* fetchProducts() {
  yield put(fetchProductsPending());
  try {
    const { data } = yield call(api.get, '/api/products');
    yield put(fetchProductsFulfilled(data));
  } catch (err) {
    yield put(fetchProductsRejected(err));
  }
}

export interface ICreateProductAction {
  type: string,
  payload: ICreateProduct
}

const toBase64 = (file:any, img:any) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve({ ...img, file: reader.result });
  reader.onerror = (error) => reject(error);
});


function* createProductExec({ payload }: ICreateProductAction) {
  yield put(createProductPending());
  try {
    const transformedImages = yield all(payload.images.map((img) => call(toBase64, img.file, img)));
    const dataToSave = yield { ...payload, images: transformedImages };

    const { data } = yield call(api.post, '/api/products', dataToSave);
    yield put(createProductFulfilled(data));
  } catch (err) {
    yield put(createProductRejected(err));
  }
}

function* updateProductExec({ payload }:any) {
  yield put(updateProductPending());
  try {
    const { data } = yield call(api.put, `/api/products/${payload.id}`, payload);
    yield put(updateProductFulfilled(data));
  } catch (err) {
    yield put(updateProductRejected(err));
  }
}

function* deleteProductExec({ payload }:any) {
  yield put(deleteProductPending());
  try {
    const { data } = yield call(api.delete, `/api/products/${payload}`);
    yield put(deleteProductFulfilled(data));
  } catch (err) {
    yield put(deleteProductRejected(err));
  }
}

/*
 * +++Watchers+++
 */

export function* watchFetchImages() {
  yield takeLatest(FETCH_IMAGES, fetchImagesExec);
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export function* watchCreateNewProduct() {
  yield takeLatest(CREATE_PRODUCT, createProductExec);
}

export function* watchUpdateProduct() {
  yield takeLatest(UPDATE_PRODUCT, updateProductExec);
}

export function* watchDeleteProduct() {
  yield takeLatest(DELETE_PRODUCT, deleteProductExec);
}

export function* watchProductChanges() {
  yield takeLatest([
    CREATE_PRODUCT_FULFILLED,
    UPDATE_PRODUCT_FULFILLED,
    DELETE_PRODUCT_FULFILLED,
  ], fetchProducts);
}
