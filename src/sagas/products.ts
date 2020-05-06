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
} from '../actions';
import { ICreateProduct } from '../types';
import api from './api';
// import { products } from '../static_data';

/*
 * +++Executers+++
 */

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
    console.log(dataToSave);

    const { data } = yield call(api.post, '/api/products', dataToSave);
    yield put(createProductFulfilled(data));
  } catch (err) {
    yield put(createProductRejected(err));
  }
}

/*
 * +++Watchers+++
 */

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export function* watchCreateNewProduct() {
  yield takeLatest(CREATE_PRODUCT, createProductExec);
}
