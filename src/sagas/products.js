import {
  put, takeLatest,
} from 'redux-saga/effects';

import { FETCH_PRODUCTS, fetchProductsFulfilled } from '../actions';

/*
 * +++Executers+++
 */

function* fetchProducts() {
  const products = [
    {
      id: '1',
      categories: ['benfica'],
      name: 'camisola slb very long text 2020 bla bla',
      availableSizes: [],
      images: [{
        name: 'img1',
        url: 'https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg',
        isDefault: true,
      }],
    },
  ];

  yield put(fetchProductsFulfilled(products));
}


/*
 * +++Watchers+++
 */

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}
